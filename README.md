# Flavor Map of the World

An interactive atlas of regional cuisines, shared ingredients, and dishes to
try. The existing catalog contains 68 regional cuisines and 268 dishes.

## Run locally

For the GitHub Pages version:

```sh
python3 -m http.server 5050 --directory docs
```

For the Flask version:

```sh
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/flask --app app run --port 5050
```

## Source and publication

GitHub Pages publishes `docs/` from `main`. The Flask app uses
`templates/index.html` and `static/`. Keep `docs/css/` and `static/css/`, and
`docs/js/` and `static/js/`, identical. The two HTML variants share the same
markup; Flask uses `url_for` for its static asset paths.

Cuisine and dish records live in `js/data.js`; ingredient pixel artwork lives
in `js/sprites.js`. The interface uses those records for search, region choices,
ingredient connections, and random dish suggestions.

The globe renderer is pinned to Globe.gl 2.45.0 on jsDelivr and checked with
Subresource Integrity. Earth textures are pinned to Three Globe 2.44.0. When
updating the renderer, verify its published distribution and regenerate the
SHA-384 integrity value in both HTML variants. Keep TLS and integrity checks
enabled. If the renderer cannot load, the regional catalog and dish suggestions
remain available through search and the region list.
