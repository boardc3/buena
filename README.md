# 5441 E Via Buena Vista — Property Site

## Run locally

```bash
cd /Users/chris/buena
npm install
```

Create a `.env` file in the project root:

```bash
VITE_MAPBOX_TOKEN=pk_your_token_here
```

Then:

```bash
npm run dev
```

Open: `http://localhost:3000`

## Map (bespoke / premium)

The neighborhood map is built with **Mapbox GL** (dark style + 3D buildings) and uses **Mapbox Geocoding** to place curated POIs.

