
        (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
            key: "AIzaSyDlYkLcARFP1WTrkxevP61aq9JnVVHHbw0",
            v: "alpha",
        });
  
        async function init() {
            const { Map3DElement, MapMode } = await google.maps.importLibrary("maps3d");

            const map3DElement = new Map3DElement({
                center: { lat: 41.70157155961328, lng: -74.88012379858144, altitude: 400 },
                range: 1000,
                tilt: 60,
                mode: MapMode.SATELLITE,
            });
          }