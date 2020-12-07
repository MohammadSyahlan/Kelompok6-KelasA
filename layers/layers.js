var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Retailgis_0_1 = new ol.format.GeoJSON();
var features_Retailgis_0_1 = format_Retailgis_0_1.readFeatures(json_Retailgis_0_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Retailgis_0_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Retailgis_0_1.addFeatures(features_Retailgis_0_1);
var lyr_Retailgis_0_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Retailgis_0_1, 
                style: style_Retailgis_0_1,
                interactive: true,
                title: '<img src="styles/legend/Retailgis_0_1.png" /> Retailgis_0'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Retailgis_0_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Retailgis_0_1];
lyr_Retailgis_0_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'origin_id': 'origin_id', 'title': 'title', 'label': 'label', 'distance': 'distance', 'categories': 'categories', });
lyr_Retailgis_0_1.set('fieldImages', {'fid': '', 'id': '', 'origin_id': '', 'title': '', 'label': '', 'distance': '', 'categories': '', });
lyr_Retailgis_0_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'origin_id': 'no label', 'title': 'no label', 'label': 'no label', 'distance': 'no label', 'categories': 'no label', });
lyr_Retailgis_0_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});