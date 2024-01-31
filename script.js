

 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/WebMap" ,
      ], function (WebMap, MapView) {
   
          const webmap = new WebMap({
            portalItem: {
              id: "dba8f0f603bf474f9072ba47b26e1785"
            }
          });

          const view = new MapView({
            center: [-90.1994, 38.6270],
            zoom: 3,
            map: webmap,
            container: "viewDiv"
          });
      }
 );
