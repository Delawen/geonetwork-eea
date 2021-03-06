OpenLayers.DOTS_PER_INCH = 90.71;
//OpenLayers.ImgPath = '../js/OpenLayers/theme/default/img/';
OpenLayers.ImgPath = '../../apps/js/OpenLayers/img/';

OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;

// Define a constant with the base url to the MapFish web service.
//mapfish.SERVER_BASE_URL = '../../../../../'; // '../../';

// Remove pink background when a tile fails to load
OpenLayers.Util.onImageLoadErrorColor = "transparent";

// Lang
OpenLayers.Lang.setCode(GeoNetwork.defaultLocale);

OpenLayers.Util.onImageLoadError = function() {
	this._attempts = (this._attempts) ? (this._attempts + 1) : 1;
	if (this._attempts <= OpenLayers.IMAGE_RELOAD_ATTEMPTS) {
		this.src = this.src;
	} else {
		this.style.backgroundColor = OpenLayers.Util.onImageLoadErrorColor;
		this.style.display = "none";
	}
};

// add Proj4js.defs here
// Proj4js.defs["EPSG:27572"] = "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs";
Proj4js.defs["EPSG:2154"] = "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";
//new OpenLayers.Projection("EPSG:900913")


GeoNetwork.map.printCapabilities = "../../pdf";

// Config for WGS84 based maps
GeoNetwork.map.PROJECTION = "EPSG:4326";
GeoNetwork.map.EXTENT = new OpenLayers.Bounds(-180,-90,180,90);
//GeoNetwork.map.EXTENT = new OpenLayers.Bounds(-5.1,41,9.7,51);
//var OSM =  new OpenLayers.Layer.WMS("OSM", "http://sdi.eea.europa.eu/ows/osm-michelin", 
//        {layers: 'basemap', format: 'image/png'},
//        {
//            //minScale: 20000000, maxScale: 0, maxExtent: new OpenLayers.Bounds(-180, -90, 180, 90)
//        });
//OSM.events.register('move', OSM, function(){
//    console.log(this);
//});
GeoNetwork.map.BACKGROUND_LAYERS = [
   new OpenLayers.Layer.WMS("World coverage", "http://gaur.eea.europa.eu/cgi-bin/mapserv?map=/var/local/gis_sdi_msl/mapserver/base_hydro_admin.map", 
           {layers: 'ne_background,hydrography,OSM_michelin', format: 'image/jpeg'}, 
           {isBaseLayer: true})
//   new OpenLayers.Layer.WMS("Hydro", "http://gaur.eea.europa.eu/cgi-bin/mapserv?map=/var/www/natural_earth/10m_physical/base_hydro_admin.map", 
//           {layers: 'NE_Hydrography', format: 'image/png', transparent: 'true'},
//           {minScale: 50000000, maxScale: 1000000}),
];

// Config for OSM based maps
//GeoNetwork.map.PROJECTION = "EPSG:900913";
////GeoNetwork.map.EXTENT = new OpenLayers.Bounds(-550000, 5000000, 1200000, 7000000);
//GeoNetwork.map.EXTENT = new OpenLayers.Bounds(-20037508, -20037508, 20037508, 20037508.34);
//GeoNetwork.map.BACKGROUND_LAYERS = [
//    new OpenLayers.Layer.OSM()
//    //new OpenLayers.Layer.Google("Google Streets");
//    ];

GeoNetwork.map.MAP_OPTIONS = {
    projection: GeoNetwork.map.PROJECTION,
    maxExtent: GeoNetwork.map.EXTENT,
    restrictedExtent: GeoNetwork.map.EXTENT,
    controls: []
};
GeoNetwork.map.MAIN_MAP_OPTIONS = {
    projection: GeoNetwork.map.PROJECTION,
    maxExtent: GeoNetwork.map.EXTENT,
    restrictedExtent: GeoNetwork.map.EXTENT,
    controls: []
};
