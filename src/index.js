/**
 * App main
 */

import { LeafletMap, Marker, TileLayer } from './leaflet/leaflet.js';


window.addEventListener("load", () => {
  const map_main = new LeafletMap('map-main', { attributionControl: false });

  // Set initial position to Shizuoka-pref
  map_main.fitBounds([
    [34.5776, 137.4722],
    [35.6601, 139.1523]
  ]);

  new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map_main);

  new Marker([34.71077565341678, 137.73122903636886]).addTo(map_main);
});
