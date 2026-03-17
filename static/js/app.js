/* =========================================================
   FLAVOR MAP - Main Application (Globe.gl version)
   Renders pixel-art ingredient sprites on a 3D globe using
   Globe.gl with HTML markers, spice route arcs, search,
   and a click-to-lock tooltip panel.
   ========================================================= */

(function () {
  "use strict";

  // ===========================================================
  // A) Sprite renderer
  // ===========================================================
  var spriteCache = {};

  function renderSprite(ingredientId, size) {
    var cacheKey = ingredientId + "_" + size;
    if (spriteCache[cacheKey]) return spriteCache[cacheKey];

    var data = window.SPRITE_DATA[ingredientId];
    if (!data) {
      var canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ff00ff";
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = "#fff";
      ctx.font = Math.floor(size * 0.6) + "px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText((ingredientId || "?")[0].toUpperCase(), size / 2, size / 2);
      var url = canvas.toDataURL();
      spriteCache[cacheKey] = url;
      return url;
    }

    var palette = window.SPRITE_PALETTE;
    var pixels = data.pixels;
    var rows = pixels.length;
    var cols = pixels[0].length;

    var canvas = document.createElement("canvas");
    canvas.width = cols;
    canvas.height = rows;
    var ctx = canvas.getContext("2d");

    for (var y = 0; y < rows; y++) {
      var row = pixels[y];
      for (var x = 0; x < row.length; x++) {
        var ch = row[x];
        var color = palette[ch];
        if (color) {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }

    var scaled = document.createElement("canvas");
    scaled.width = size;
    scaled.height = size;
    var sctx = scaled.getContext("2d");
    sctx.imageSmoothingEnabled = false;
    sctx.drawImage(canvas, 0, 0, size, size);

    var url = scaled.toDataURL();
    spriteCache[cacheKey] = url;
    return url;
  }

  // ---- Size config ----
  var SIZE_CONFIG = {
    small:  { iconPx: 20, gap: 1 },
    medium: { iconPx: 24, gap: 2 },
    large:  { iconPx: 28, gap: 2 },
  };

  function getIngredientName(id) {
    var data = window.SPRITE_DATA[id];
    if (data && data.name) return data.name;
    return id.replace(/_/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); });
  }

  // ===========================================================
  // B) Globe initialization
  // ===========================================================
  var foodData = window.FOOD_MAP_DATA;
  var activeRegion = null;

  var globe = Globe()(document.getElementById("globe-container"))
    .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
    .backgroundColor("#0f0f23")
    .showAtmosphere(true)
    .atmosphereColor("#4a3f6b")
    .atmosphereAltitude(0.25)
    .width(window.innerWidth)
    .height(window.innerHeight)
    .pointOfView({ lat: 25, lng: 40, altitude: 2.5 });

  // ===========================================================
  // C) HTML markers layer
  // ===========================================================
  function buildRegionElement(region) {
    var cfg = SIZE_CONFIG[region.size] || SIZE_CONFIG.medium;
    var iconPx = cfg.iconPx;
    var gap = cfg.gap;

    var el = document.createElement("div");
    el.className = "region-overlay";

    var container = document.createElement("div");
    container.className = "region-marker-container";

    region.flavorBases.forEach(function (base) {
      var rowDiv = document.createElement("div");
      rowDiv.className = "flavor-row";
      rowDiv.style.gap = gap + "px";

      base.ingredients.forEach(function (id) {
        var img = document.createElement("img");
        img.className = "sprite-icon";
        img.src = renderSprite(id, iconPx);
        img.width = iconPx;
        img.height = iconPx;
        img.title = getIngredientName(id);
        rowDiv.appendChild(img);
      });

      container.appendChild(rowDiv);
    });

    var label = document.createElement("div");
    label.className = "region-label";
    label.textContent = region.name;
    container.appendChild(label);

    el.appendChild(container);

    // Click to pin tooltip
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      openRegion(region);
    });

    // Mouseenter: brief name preview on desktop
    var preview = null;
    el.addEventListener("mouseenter", function () {
      if (activeRegion && activeRegion.id === region.id) return;
      preview = document.createElement("div");
      preview.className = "region-preview";
      preview.textContent = region.name + " — " + region.country;
      el.appendChild(preview);
    });
    el.addEventListener("mouseleave", function () {
      if (preview && preview.parentNode) {
        preview.parentNode.removeChild(preview);
      }
      preview = null;
    });

    return el;
  }

  globe
    .htmlElementsData(foodData.regions)
    .htmlLat(function (d) { return d.center[0]; })
    .htmlLng(function (d) { return d.center[1]; })
    .htmlElement(function (d) { return buildRegionElement(d); })
    .htmlAltitude(0.01);

  // ===========================================================
  // D) Click-to-lock tooltip system (fixed right panel)
  // ===========================================================
  var tooltipEl = document.getElementById("tooltip");

  function showTooltip(region) {
    var header = document.getElementById("tooltip-header");
    var body = document.getElementById("tooltip-body");

    header.innerHTML =
      '<div class="tooltip-header-row">' +
        '<div>' +
          '<div class="region-name">' + region.name + "</div>" +
          '<div class="region-country">' + region.country + "</div>" +
        "</div>" +
        '<button class="tooltip-close" id="tooltip-close">&times;</button>' +
      "</div>";

    var bodyHtml = "";
    region.flavorBases.forEach(function (base) {
      bodyHtml += '<div class="tooltip-flavor-base">';
      bodyHtml += '<div class="flavor-base-name">' + base.name + "</div>";
      bodyHtml += '<div class="flavor-base-desc">' + base.description + "</div>";

      bodyHtml += '<div class="flavor-base-ingredients">';
      base.ingredients.forEach(function (id) {
        var src = renderSprite(id, 16);
        bodyHtml +=
          '<div class="ingredient-tag">' +
          '<img class="sprite-icon" src="' + src + '" width="16" height="16">' +
          "<span>" + getIngredientName(id) + "</span>" +
          "</div>";
      });
      bodyHtml += "</div>";

      bodyHtml += '<ul class="recipe-list">';
      base.recipes.forEach(function (recipe) {
        bodyHtml +=
          '<li class="recipe-item">' +
          '<div class="recipe-name">' + recipe.name + "</div>" +
          '<div class="recipe-desc">' + recipe.description + "</div>" +
          "</li>";
      });
      bodyHtml += "</ul>";
      bodyHtml += "</div>";
    });

    body.innerHTML = bodyHtml;

    // Show panel (CSS handles positioning)
    tooltipEl.classList.remove("hidden");

    // Wire close button
    document.getElementById("tooltip-close").addEventListener("click", function (e) {
      e.stopPropagation();
      dismissTooltip();
    });
  }

  function dismissTooltip() {
    tooltipEl.classList.add("hidden");
    activeRegion = null;
    globe.arcsData([]);
  }

  // ===========================================================
  // E) Spice route arcs — ingredient index & arc generation
  // ===========================================================
  // Build ingredient index: ingredientId -> [region, ...]
  var ingredientIndex = {};
  foodData.regions.forEach(function (region) {
    region.flavorBases.forEach(function (base) {
      base.ingredients.forEach(function (id) {
        if (!ingredientIndex[id]) ingredientIndex[id] = [];
        // Avoid duplicates for same region
        if (ingredientIndex[id].indexOf(region) === -1) {
          ingredientIndex[id].push(region);
        }
      });
    });
  });

  var ARC_COLORS = {
    dried_chili:      ["rgba(192,57,43,0.8)", "rgba(231,76,60,0.8)"],
    chili:            ["rgba(192,57,43,0.8)", "rgba(231,76,60,0.8)"],
    sichuan_pepper:   ["rgba(192,57,43,0.7)", "rgba(255,138,128,0.7)"],
    coconut:          ["rgba(255,255,255,0.8)", "rgba(236,240,241,0.8)"],
    coconut_milk:     ["rgba(255,255,255,0.8)", "rgba(236,240,241,0.8)"],
    cumin:            ["rgba(243,156,18,0.8)", "rgba(241,196,15,0.8)"],
    garlic:           ["rgba(178,223,138,0.8)", "rgba(166,206,57,0.8)"],
    ginger:           ["rgba(241,196,15,0.8)", "rgba(255,245,157,0.8)"],
    turmeric:         ["rgba(241,196,15,0.8)", "rgba(255,235,59,0.8)"],
    coriander:        ["rgba(46,204,113,0.7)", "rgba(165,214,167,0.7)"],
    lemongrass:       ["rgba(165,214,167,0.8)", "rgba(200,230,201,0.8)"],
    soy_sauce:        ["rgba(93,64,55,0.8)", "rgba(121,85,72,0.8)"],
    fish_sauce:       ["rgba(210,180,140,0.8)", "rgba(245,222,179,0.8)"],
    black_pepper:     ["rgba(85,85,85,0.8)", "rgba(153,153,153,0.8)"],
    cinnamon:         ["rgba(205,133,63,0.8)", "rgba(210,180,140,0.8)"],
    tomato:           ["rgba(192,57,43,0.8)", "rgba(255,99,71,0.8)"],
    onion:            ["rgba(243,156,18,0.7)", "rgba(255,235,59,0.7)"],
    olive_oil:        ["rgba(165,214,167,0.8)", "rgba(200,230,201,0.8)"],
    lime:             ["rgba(46,204,113,0.8)", "rgba(129,199,132,0.8)"],
    basil:            ["rgba(39,174,96,0.8)", "rgba(46,204,113,0.8)"],
    paprika:          ["rgba(230,126,34,0.8)", "rgba(243,156,18,0.8)"],
  };
  var DEFAULT_ARC_COLOR = ["rgba(142,68,173,0.7)", "rgba(175,122,197,0.7)"];

  function getArcColor(ingredientId) {
    return ARC_COLORS[ingredientId] || DEFAULT_ARC_COLOR;
  }

  function buildArcsForRegion(region) {
    var arcs = [];
    var seen = {}; // avoid duplicate arcs to same target

    region.flavorBases.forEach(function (base) {
      base.ingredients.forEach(function (id) {
        var regions = ingredientIndex[id];
        if (!regions) return;
        regions.forEach(function (target) {
          if (target.id === region.id) return;
          var key = target.id + "_" + id;
          if (seen[key]) return;
          seen[key] = true;

          var color = getArcColor(id);
          arcs.push({
            startLat: region.center[0],
            startLng: region.center[1],
            endLat: target.center[0],
            endLng: target.center[1],
            color: color,
            ingredient: id,
          });
        });
      });
    });

    return arcs;
  }

  // Apply arc rendering config
  globe
    .arcDashLength(0.4)
    .arcDashGap(0.2)
    .arcDashAnimateTime(2000)
    .arcStroke(0.5)
    .arcColor(function (d) { return d.color; })
    .arcsData([]);

  // ===========================================================
  // Helper: open a region (fly, tooltip, arcs)
  // ===========================================================
  function openRegion(region) {
    activeRegion = region;
    globe.pointOfView({ lat: region.center[0], lng: region.center[1], altitude: 1.5 }, 1000);
    showTooltip(region);
    globe.arcsData(buildArcsForRegion(region));
  }

  // ===========================================================
  // F) Search bar
  // ===========================================================
  var searchInput = document.getElementById("search-input");
  var searchDropdown = document.getElementById("search-dropdown");

  // Build search index
  var searchIndex = [];
  foodData.regions.forEach(function (region) {
    searchIndex.push({ type: "region", label: region.name + ", " + region.country, region: region });
    region.flavorBases.forEach(function (base) {
      base.ingredients.forEach(function (id) {
        var name = getIngredientName(id);
        // Avoid duplicates
        var exists = searchIndex.some(function (entry) {
          return entry.type === "ingredient" && entry.ingredientId === id;
        });
        if (!exists) {
          searchIndex.push({ type: "ingredient", label: name, ingredientId: id });
        }
      });
    });
  });

  function doSearch(query) {
    if (!query) {
      searchDropdown.classList.add("hidden");
      return;
    }
    var q = query.toLowerCase();
    var results = searchIndex.filter(function (entry) {
      return entry.label.toLowerCase().indexOf(q) !== -1;
    }).slice(0, 8);

    if (results.length === 0) {
      searchDropdown.classList.add("hidden");
      return;
    }

    searchDropdown.innerHTML = "";
    results.forEach(function (entry, i) {
      var div = document.createElement("div");
      div.className = "search-result" + (i === 0 ? " search-result-active" : "");
      div.textContent = entry.label + (entry.type === "ingredient" ? " (ingredient)" : "");
      div.addEventListener("mousedown", function (e) {
        e.preventDefault();
        selectSearchResult(entry);
      });
      searchDropdown.appendChild(div);
    });
    searchDropdown.classList.remove("hidden");
  }

  function selectSearchResult(entry) {
    searchDropdown.classList.add("hidden");
    searchInput.value = "";

    if (entry.type === "region") {
      openRegion(entry.region);
    } else if (entry.type === "ingredient") {
      highlightIngredientRegions(entry.ingredientId);
    }
  }

  function highlightIngredientRegions(ingredientId) {
    var regions = ingredientIndex[ingredientId];
    if (!regions || regions.length === 0) return;

    // Dismiss existing tooltip
    dismissTooltip();

    // Build arcs between all regions sharing this ingredient
    var arcs = [];
    for (var i = 0; i < regions.length; i++) {
      for (var j = i + 1; j < regions.length; j++) {
        var color = getArcColor(ingredientId);
        arcs.push({
          startLat: regions[i].center[0],
          startLng: regions[i].center[1],
          endLat: regions[j].center[0],
          endLng: regions[j].center[1],
          color: color,
          ingredient: ingredientId,
        });
      }
    }
    globe.arcsData(arcs);

    // Fly to center of the first region
    globe.pointOfView(
      { lat: regions[0].center[0], lng: regions[0].center[1], altitude: 2.0 },
      1000
    );
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      doSearch(this.value);
    });

    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var q = this.value.toLowerCase();
        if (!q) return;
        var match = searchIndex.find(function (entry) {
          return entry.label.toLowerCase().indexOf(q) !== -1;
        });
        if (match) selectSearchResult(match);
      } else if (e.key === "Escape") {
        searchDropdown.classList.add("hidden");
        searchInput.blur();
      }
    });

    searchInput.addEventListener("blur", function () {
      setTimeout(function () {
        searchDropdown.classList.add("hidden");
      }, 150);
    });
  }

  // ===========================================================
  // G) Randomizer ("What should we cook?")
  // ===========================================================
  var randomBtn = document.getElementById("random-btn");

  function pickRandom() {
    var regions = foodData.regions;
    var region = regions[Math.floor(Math.random() * regions.length)];
    var base = region.flavorBases[Math.floor(Math.random() * region.flavorBases.length)];
    var recipe = base.recipes[Math.floor(Math.random() * base.recipes.length)];

    activeRegion = region;
    globe.pointOfView(
      { lat: region.center[0], lng: region.center[1], altitude: 1.2 },
      1500
    );

    // Slight delay so fly animation is underway before tooltip opens
    setTimeout(function () {
      showTooltip(region);
      globe.arcsData(buildArcsForRegion(region));

      // Briefly highlight the chosen recipe
      setTimeout(function () {
        var recipeEls = tooltipEl.querySelectorAll(".recipe-item");
        recipeEls.forEach(function (el) {
          var nameEl = el.querySelector(".recipe-name");
          if (nameEl && nameEl.textContent === recipe.name) {
            el.classList.add("recipe-highlight");
            setTimeout(function () {
              el.classList.remove("recipe-highlight");
            }, 2500);
          }
        });
      }, 300);
    }, 500);
  }

  if (randomBtn) {
    randomBtn.addEventListener("click", pickRandom);
  }

  // ===========================================================
  // H) Event wiring
  // ===========================================================

  // Globe background click: dismiss tooltip and arcs
  globe.onGlobeClick(function () {
    dismissTooltip();
  });

  // Window resize
  window.addEventListener("resize", function () {
    globe.width(window.innerWidth).height(window.innerHeight);
  });

})();
