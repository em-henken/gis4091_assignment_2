

 require([
        "esri/WebMap",
        "esri/views/MapView",
      ], function (WebMap, MapView) {
   
          const webmap = new WebMap({
            portalItem: {
              id: "dba8f0f603bf474f9072ba47b26e1785"
            }
          });

          const view = new MapView({
            center: [-90.1994, 38.6270],
            zoom: 11,
            map: webmap,
            container: "viewDiv"
          });
      }
 );
