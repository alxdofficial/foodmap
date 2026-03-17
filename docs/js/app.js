/* =========================================================
   FLAVOR MAP - Main Application
   Renders pixel-art ingredient sprites on a Leaflet world map.
   Uses manual positioning via latLngToContainerPoint to avoid
   Leaflet marker wrapping bugs at low zoom levels.
   ========================================================= */

(function () {
  "use strict";

  // ---- Sprite renderer ----
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

  // ---- Build marker DOM element for a region ----
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
    return el;
  }

  // ---- Tooltip ----
  var tooltipEl = document.getElementById("tooltip");

  function showTooltip(region, mouseEvent) {
    var header = document.getElementById("tooltip-header");
    var body = document.getElementById("tooltip-body");

    header.innerHTML =
      '<div class="region-name">' + region.name + "</div>" +
      '<div class="region-country">' + region.country + "</div>";

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
    tooltipEl.classList.remove("hidden");
    positionTooltip(mouseEvent);
  }

  function positionTooltip(e) {
    var x = e.clientX || (e.originalEvent && e.originalEvent.clientX) || 0;
    var y = e.clientY || (e.originalEvent && e.originalEvent.clientY) || 0;

    var tw = tooltipEl.offsetWidth;
    var th = tooltipEl.offsetHeight;
    var ww = window.innerWidth;
    var wh = window.innerHeight;

    var left = x + 20;
    var top = y - 20;

    if (left + tw > ww - 10) left = x - tw - 20;
    if (top + th > wh - 10) top = wh - th - 10;
    if (top < 60) top = 60;

    tooltipEl.style.left = left + "px";
    tooltipEl.style.top = top + "px";
  }

  function hideTooltip() {
    tooltipEl.classList.add("hidden");
  }

  // ---- Initialize map ----
  var map = L.map("map", {
    center: [25, 40],
    zoom: 3,
    minZoom: 2,
    maxZoom: 7,
    zoomControl: true,
    attributionControl: false,
    maxBounds: [[-85, -180], [85, 180]],
    maxBoundsViscosity: 1.0,
    worldCopyJump: false,
  });

  // CartoDB Voyager - pastel colored countries with labels (free, no auth)
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 19,
    noWrap: true,
  }).addTo(map);

  // ---- Overlay container for custom-positioned markers ----
  var overlayPane = document.getElementById("marker-overlay");
  var regionOverlays = [];
  var foodData = window.FOOD_MAP_DATA;

  foodData.regions.forEach(function (region) {
    var el = buildRegionElement(region);
    overlayPane.appendChild(el);

    // hover events
    el.addEventListener("mouseenter", function (e) {
      showTooltip(region, e);
    });
    el.addEventListener("mousemove", function (e) {
      positionTooltip(e);
    });
    el.addEventListener("mouseleave", function () {
      hideTooltip();
    });

    // Pass scroll events through to the map for zoom
    el.addEventListener("wheel", function (e) {
      e.preventDefault();
      var mapEl = map.getContainer();
      mapEl.dispatchEvent(new WheelEvent("wheel", e));
    }, { passive: false });

    regionOverlays.push({
      el: el,
      latLng: L.latLng(region.center[0], region.center[1]),
      region: region,
    });
  });

  // ---- Position all overlays based on current map view ----
  function updateOverlayPositions() {
    var zoom = map.getZoom();
    var scale = Math.max(0.5, Math.min(1.8, (zoom - 1) / 2.5));
    var mapContainer = map.getContainer();
    var mapRect = mapContainer.getBoundingClientRect();

    regionOverlays.forEach(function (item) {
      var pt = map.latLngToContainerPoint(item.latLng);

      // position relative to the map container
      item.el.style.left = (mapRect.left + pt.x) + "px";
      item.el.style.top = (mapRect.top + pt.y) + "px";

      // scale based on zoom
      var container = item.el.querySelector(".region-marker-container");
      if (container) {
        container.style.transform = "scale(" + scale + ")";
      }

      // hide if off-screen (optimization)
      var inView = pt.x > -200 && pt.x < mapRect.width + 200 &&
                   pt.y > -200 && pt.y < mapRect.height + 200;
      item.el.style.display = inView ? "" : "none";
    });
  }

  // Update positions on any map movement
  map.on("move", updateOverlayPositions);
  map.on("moveend", updateOverlayPositions);
  map.on("zoomend", updateOverlayPositions);
  map.on("resize", updateOverlayPositions);

  // Initial positioning
  setTimeout(updateOverlayPositions, 100);

})();
