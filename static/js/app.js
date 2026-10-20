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

  function getIngredientName(id) {
    var data = window.SPRITE_DATA[id];
    if (data && data.name) return data.name;
    return id.replace(/_/g, " ").replace(/\b\w/g, function (c) {
      return c.toUpperCase();
    });
  }

  // ===========================================================
  // B) Globe initialization
  // ===========================================================
  var foodData = window.FOOD_MAP_DATA;
  var activeRegion = null;

  var globe = null;
  var mapContainer = document.getElementById("globe-container");
  var mapMessage = document.getElementById("map-message");
  var caption = document.getElementById("map-caption");
  var status = document.getElementById("atlas-status");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var lastControl = null;

  try {
    if (typeof Globe !== "function")
      throw new Error("Map renderer unavailable");
    globe = Globe()(mapContainer)
      .globeImageUrl(
        "https://cdn.jsdelivr.net/npm/three-globe@2.44.0/example/img/earth-blue-marble.jpg",
      )
      .bumpImageUrl(
        "https://cdn.jsdelivr.net/npm/three-globe@2.44.0/example/img/earth-topology.png",
      )
      .backgroundColor("#ecebdc")
      .showAtmosphere(true)
      .atmosphereColor("#b1b99a")
      .atmosphereAltitude(0.13)
      .width(mapContainer.clientWidth)
      .height(mapContainer.clientHeight)
      .pointOfView({ lat: 25, lng: 40, altitude: 2.3 });
    globe.controls().enablePan = false;
    mapMessage.classList.add("hidden");
  } catch (error) {
    mapMessage.textContent =
      "The globe could not load. You can still explore every cuisine using search or the region list.";
  }

  function flyTo(position, duration) {
    if (globe)
      globe.pointOfView(position, reducedMotion.matches ? 0 : duration);
  }

  function announce(message) {
    status.textContent = message;
  }

  // ===========================================================
  // C) HTML markers layer
  // ===========================================================
  function buildRegionElement(region) {
    var el = document.createElement("button");
    el.type = "button";
    el.className = "region-overlay";
    el.setAttribute(
      "aria-label",
      "Explore " + region.name + ", " + region.country,
    );
    var container = document.createElement("span");
    container.className = "region-marker-container";
    var ingredient = region.flavorBases[0].ingredients[0];
    var img = document.createElement("img");
    img.className = "sprite-icon";
    img.src = renderSprite(ingredient, 28);
    img.width = 24;
    img.height = 24;
    img.alt = "";
    container.appendChild(img);
    var label = document.createElement("span");
    label.className = "region-label";
    label.textContent = region.name;
    el.appendChild(container);
    el.appendChild(label);
    el.addEventListener("click", function (event) {
      event.stopPropagation();
      lastControl = el;
      openRegion(region);
    });
    return el;
  }

  if (globe) {
    globe
      .htmlElementsData(foodData.regions)
      .htmlLat(function (d) {
        return d.center[0];
      })
      .htmlLng(function (d) {
        return d.center[1];
      })
      .htmlElement(function (d) {
        return buildRegionElement(d);
      })
      .htmlAltitude(0.01);
  }

  // ===========================================================
  // D) Click-to-lock tooltip system (fixed right panel)
  // ===========================================================
  var tooltipEl = document.getElementById("tooltip");

  function showTooltip(region, chosenRecipe) {
    var header = document.getElementById("tooltip-header");
    var body = document.getElementById("tooltip-body");

    header.innerHTML =
      '<div class="tooltip-header-row">' +
      "<div>" +
      '<h2 class="region-name" id="region-title" tabindex="-1">' +
      region.name +
      "</h2>" +
      '<div class="region-country">' +
      region.country +
      "</div>" +
      "</div>" +
      '<button class="tooltip-close" id="tooltip-close" type="button" aria-label="Close regional flavors">&times;</button>' +
      "</div>";

    var bodyHtml = chosenRecipe
      ? '<p class="random-pick">A little inspiration for dinner: ' +
        chosenRecipe.name +
        "</p>"
      : "";
    region.flavorBases.forEach(function (base) {
      bodyHtml += '<div class="tooltip-flavor-base">';
      bodyHtml += '<h3 class="flavor-base-name">' + base.name + "</h3>";
      bodyHtml +=
        '<div class="flavor-base-desc">' + base.description + "</div>";

      bodyHtml += '<div class="flavor-base-ingredients">';
      base.ingredients.forEach(function (id) {
        var src = renderSprite(id, 16);
        bodyHtml +=
          '<div class="ingredient-tag">' +
          '<img class="sprite-icon" src="' +
          src +
          '" width="22" height="22" alt="">' +
          "<span>" +
          getIngredientName(id) +
          "</span>" +
          "</div>";
      });
      bodyHtml += "</div>";

      bodyHtml +=
        '<p class="recipe-heading">Dishes to try</p><ul class="recipe-list">';
      base.recipes.forEach(function (recipe) {
        bodyHtml +=
          '<li class="recipe-item' +
          (chosenRecipe && chosenRecipe.name === recipe.name
            ? " recipe-highlight"
            : "") +
          '">' +
          '<div class="recipe-name">' +
          recipe.name +
          "</div>" +
          '<div class="recipe-desc">' +
          recipe.description +
          "</div>" +
          "</li>";
      });
      bodyHtml += "</ul>";
      bodyHtml += "</div>";
    });

    body.innerHTML = bodyHtml;
    body.scrollTop = 0;

    // Show panel (CSS handles positioning)
    tooltipEl.classList.remove("hidden");
    tooltipEl.inert = false;
    tooltipEl.setAttribute("aria-hidden", "false");
    tooltipEl.setAttribute("aria-labelledby", "region-title");
    document.getElementById("region-title").focus({ preventScroll: true });

    // Wire close button
    document
      .getElementById("tooltip-close")
      .addEventListener("click", function (e) {
        e.stopPropagation();
        dismissTooltip();
      });
  }

  function dismissTooltip() {
    tooltipEl.classList.add("hidden");
    tooltipEl.inert = true;
    tooltipEl.setAttribute("aria-hidden", "true");
    activeRegion = null;
    if (globe) globe.arcsData([]);
    if (lastControl && document.contains(lastControl))
      lastControl.focus({ preventScroll: true });
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
    dried_chili: ["rgba(192,57,43,0.8)", "rgba(231,76,60,0.8)"],
    chili: ["rgba(192,57,43,0.8)", "rgba(231,76,60,0.8)"],
    sichuan_pepper: ["rgba(192,57,43,0.7)", "rgba(255,138,128,0.7)"],
    coconut: ["rgba(255,255,255,0.8)", "rgba(236,240,241,0.8)"],
    coconut_milk: ["rgba(255,255,255,0.8)", "rgba(236,240,241,0.8)"],
    cumin: ["rgba(243,156,18,0.8)", "rgba(241,196,15,0.8)"],
    garlic: ["rgba(178,223,138,0.8)", "rgba(166,206,57,0.8)"],
    ginger: ["rgba(241,196,15,0.8)", "rgba(255,245,157,0.8)"],
    turmeric: ["rgba(241,196,15,0.8)", "rgba(255,235,59,0.8)"],
    coriander: ["rgba(46,204,113,0.7)", "rgba(165,214,167,0.7)"],
    lemongrass: ["rgba(165,214,167,0.8)", "rgba(200,230,201,0.8)"],
    soy_sauce: ["rgba(93,64,55,0.8)", "rgba(121,85,72,0.8)"],
    fish_sauce: ["rgba(210,180,140,0.8)", "rgba(245,222,179,0.8)"],
    black_pepper: ["rgba(85,85,85,0.8)", "rgba(153,153,153,0.8)"],
    cinnamon: ["rgba(205,133,63,0.8)", "rgba(210,180,140,0.8)"],
    tomato: ["rgba(192,57,43,0.8)", "rgba(255,99,71,0.8)"],
    onion: ["rgba(243,156,18,0.7)", "rgba(255,235,59,0.7)"],
    olive_oil: ["rgba(165,214,167,0.8)", "rgba(200,230,201,0.8)"],
    lime: ["rgba(46,204,113,0.8)", "rgba(129,199,132,0.8)"],
    basil: ["rgba(39,174,96,0.8)", "rgba(46,204,113,0.8)"],
    paprika: ["rgba(230,126,34,0.8)", "rgba(243,156,18,0.8)"],
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
  if (globe)
    globe
      .arcDashLength(0.4)
      .arcDashGap(0.2)
      .arcDashAnimateTime(reducedMotion.matches ? 0 : 2000)
      .arcStroke(0.5)
      .arcColor(function (d) {
        return d.color;
      })
      .arcsData([]);

  // ===========================================================
  // Helper: open a region (fly, tooltip, arcs)
  // ===========================================================
  function openRegion(region) {
    activeRegion = region;
    flyTo({ lat: region.center[0], lng: region.center[1], altitude: 1.7 }, 900);
    showTooltip(region);
    if (globe) globe.arcsData(buildArcsForRegion(region));
    document.getElementById("region-select").value = region.id;
    caption.textContent =
      "Exploring " +
      region.name +
      ". Lines connect cuisines with ingredients in common.";
    announce("Exploring " + region.name + ", " + region.country);
  }

  // ===========================================================
  // F) Search bar
  // ===========================================================
  var searchInput = document.getElementById("search-input");
  var searchDropdown = document.getElementById("search-results");

  // Build search index
  var searchIndex = [];
  foodData.regions.forEach(function (region) {
    searchIndex.push({
      type: "region",
      label: region.name + ", " + region.country,
      region: region,
    });
    region.flavorBases.forEach(function (base) {
      base.ingredients.forEach(function (id) {
        var name = getIngredientName(id);
        // Avoid duplicates
        var exists = searchIndex.some(function (entry) {
          return entry.type === "ingredient" && entry.ingredientId === id;
        });
        if (!exists) {
          searchIndex.push({
            type: "ingredient",
            label: name,
            ingredientId: id,
          });
        }
      });
    });
  });

  var visibleResults = [];
  var activeResult = 0;

  function closeSearch() {
    searchDropdown.classList.add("hidden");
    searchInput.setAttribute("aria-expanded", "false");
  }

  function doSearch(query) {
    if (!query.trim()) {
      closeSearch();
      return;
    }
    var q = query.toLowerCase().trim();
    visibleResults = searchIndex
      .filter(function (entry) {
        return entry.label.toLowerCase().indexOf(q) !== -1;
      })
      .slice(0, 8);
    activeResult = 0;
    searchDropdown.replaceChildren();
    if (!visibleResults.length) {
      var empty = document.createElement("p");
      empty.className = "search-empty";
      empty.textContent =
        "No matches yet. Try a region, country, or ingredient.";
      searchDropdown.appendChild(empty);
    }
    visibleResults.forEach(function (entry, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className =
        "search-result" + (index === 0 ? " search-result-active" : "");
      var label = document.createElement("span");
      label.textContent = entry.label;
      var detail = document.createElement("small");
      detail.textContent =
        entry.type === "ingredient"
          ? "Follow this ingredient"
          : "Explore this cuisine";
      button.append(label, detail);
      button.addEventListener("pointerdown", function (event) {
        event.preventDefault();
      });
      button.addEventListener("click", function () {
        selectSearchResult(entry);
      });
      searchDropdown.appendChild(button);
    });
    searchDropdown.classList.remove("hidden");
    searchInput.setAttribute("aria-expanded", "true");
  }

  function selectSearchResult(entry) {
    closeSearch();
    searchInput.value = "";
    lastControl = searchInput;

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
    if (globe) globe.arcsData(arcs);
    document
      .querySelectorAll(".ingredient-shortcut")
      .forEach(function (button) {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.ingredient === ingredientId),
        );
      });
    caption.textContent =
      getIngredientName(ingredientId) +
      " connects " +
      regions.length +
      " regional cuisines. Pick a marker to discover their dishes.";
    announce(caption.textContent);
    document.getElementById("region-select").value = "";

    // Fly to center of the first region
    flyTo(
      { lat: regions[0].center[0], lng: regions[0].center[1], altitude: 2.0 },
      1000,
    );
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      doSearch(this.value);
    });

    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (
          !visibleResults.length ||
          searchDropdown.classList.contains("hidden")
        )
          doSearch(this.value);
        else
          activeResult =
            (activeResult +
              (event.key === "ArrowDown" ? 1 : -1) +
              visibleResults.length) %
            visibleResults.length;
        searchDropdown
          .querySelectorAll(".search-result")
          .forEach(function (button, index) {
            button.classList.toggle(
              "search-result-active",
              index === activeResult,
            );
            if (index === activeResult)
              button.scrollIntoView({ block: "nearest" });
          });
      } else if (
        event.key === "Enter" &&
        visibleResults.length &&
        !searchDropdown.classList.contains("hidden")
      ) {
        event.preventDefault();
        selectSearchResult(visibleResults[activeResult]);
      } else if (event.key === "Escape") closeSearch();
    });
    searchInput.addEventListener("focus", function () {
      if (this.value) doSearch(this.value);
    });
    document
      .getElementById("search-bar")
      .addEventListener("focusout", function () {
        setTimeout(function () {
          if (
            !document
              .getElementById("search-bar")
              .contains(document.activeElement)
          )
            closeSearch();
        }, 0);
      });
    document.addEventListener("pointerdown", function (event) {
      if (!document.getElementById("search-bar").contains(event.target))
        closeSearch();
    });
  }

  // ===========================================================
  // G) Randomizer ("What should we cook?")
  // ===========================================================
  var randomBtn = document.getElementById("randomizer-btn");

  function pickRandom() {
    var regions = foodData.regions;
    var region = regions[Math.floor(Math.random() * regions.length)];
    var base =
      region.flavorBases[Math.floor(Math.random() * region.flavorBases.length)];
    var recipe = base.recipes[Math.floor(Math.random() * base.recipes.length)];
    lastControl = randomBtn;
    activeRegion = region;
    flyTo({ lat: region.center[0], lng: region.center[1], altitude: 1.7 }, 900);
    showTooltip(region, recipe);
    if (globe) globe.arcsData(buildArcsForRegion(region));
    document.getElementById("region-select").value = region.id;
    caption.textContent =
      "Tonight’s inspiration: " + recipe.name + ", from " + region.name + ".";
    announce(caption.textContent);
  }
  randomBtn.addEventListener("click", pickRandom);

  // Discovery controls use the same data and actions as the globe markers.
  var regionSelect = document.getElementById("region-select");
  foodData.regions
    .slice()
    .sort(function (a, b) {
      return a.country.localeCompare(b.country) || a.name.localeCompare(b.name);
    })
    .forEach(function (region) {
      var option = document.createElement("option");
      option.value = region.id;
      option.textContent = region.name + " · " + region.country;
      regionSelect.appendChild(option);
    });
  regionSelect.addEventListener("change", function () {
    var region = foodData.regions.find(function (entry) {
      return entry.id === regionSelect.value;
    });
    if (region) {
      lastControl = regionSelect;
      openRegion(region);
    }
  });
  ["garlic", "ginger", "cumin", "coconut_milk"].forEach(function (id) {
    if (!ingredientIndex[id]) return;
    var button = document.createElement("button");
    button.type = "button";
    button.className = "ingredient-shortcut";
    button.dataset.ingredient = id;
    button.setAttribute("aria-pressed", "false");
    var image = document.createElement("img");
    image.src = renderSprite(id, 24);
    image.alt = "";
    image.className = "sprite-icon";
    var label = document.createElement("span");
    label.textContent = getIngredientName(id);
    button.append(image, label);
    button.addEventListener("click", function () {
      lastControl = button;
      highlightIngredientRegions(id);
    });
    document.getElementById("ingredient-shortcuts").appendChild(button);
  });
  var recipeCount = foodData.regions.reduce(function (total, region) {
    return (
      total +
      region.flavorBases.reduce(function (count, base) {
        return count + base.recipes.length;
      }, 0)
    );
  }, 0);
  document.getElementById("atlas-count").textContent =
    foodData.regions.length +
    " regional cuisines · " +
    recipeCount +
    " dishes to discover";

  // ===========================================================
  // H) Event wiring
  // ===========================================================

  // Globe background click: dismiss tooltip and arcs
  if (globe)
    globe.onGlobeClick(function () {
      dismissTooltip();
    });
  document.getElementById("reset-map").addEventListener("click", function () {
    lastControl = this;
    dismissTooltip();
    flyTo({ lat: 25, lng: 40, altitude: 2.3 }, 700);
    document.getElementById("region-select").value = "";
    document
      .querySelectorAll(".ingredient-shortcut")
      .forEach(function (button) {
        button.setAttribute("aria-pressed", "false");
      });
    caption.textContent = "Pick a marker to explore. Drag to turn the globe.";
    announce("Globe view reset.");
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !tooltipEl.classList.contains("hidden"))
      dismissTooltip();
  });

  // Window resize
  window.addEventListener("resize", function () {
    if (globe)
      globe.width(mapContainer.clientWidth).height(mapContainer.clientHeight);
  });
})();
