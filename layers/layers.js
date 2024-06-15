var wms_layers = [];


        var lyr_OpenStreetMapHOT_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap.HOT',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DIYogyakarta_1 = new ol.format.GeoJSON();
var features_DIYogyakarta_1 = format_DIYogyakarta_1.readFeatures(json_DIYogyakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIYogyakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIYogyakarta_1.addFeatures(features_DIYogyakarta_1);
var lyr_DIYogyakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIYogyakarta_1, 
                style: style_DIYogyakarta_1,
                popuplayertitle: "DI Yogyakarta",
                interactive: true,
    title: 'DI Yogyakarta<br />\
    <img src="styles/legend/DIYogyakarta_1_0.png" /> Bantul<br />\
    <img src="styles/legend/DIYogyakarta_1_1.png" /> Gunung Kidul<br />\
    <img src="styles/legend/DIYogyakarta_1_2.png" /> Kulon Progo<br />\
    <img src="styles/legend/DIYogyakarta_1_3.png" /> Sleman<br />\
    <img src="styles/legend/DIYogyakarta_1_4.png" /> Yogyakarta<br />\
    <img src="styles/legend/DIYogyakarta_1_5.png" /> <br />'
        });
var format_jaringan_jalan_2 = new ol.format.GeoJSON();
var features_jaringan_jalan_2 = format_jaringan_jalan_2.readFeatures(json_jaringan_jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaringan_jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaringan_jalan_2.addFeatures(features_jaringan_jalan_2);
var lyr_jaringan_jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jaringan_jalan_2, 
                style: style_jaringan_jalan_2,
                popuplayertitle: "jaringan_jalan",
                interactive: true,
                title: '<img src="styles/legend/jaringan_jalan_2.png" /> jaringan_jalan'
            });
var format_ESTehIndonesia_3 = new ol.format.GeoJSON();
var features_ESTehIndonesia_3 = format_ESTehIndonesia_3.readFeatures(json_ESTehIndonesia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTehIndonesia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTehIndonesia_3.addFeatures(features_ESTehIndonesia_3);
var lyr_ESTehIndonesia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTehIndonesia_3, 
                style: style_ESTehIndonesia_3,
                popuplayertitle: "ES Teh Indonesia",
                interactive: true,
                title: '<img src="styles/legend/ESTehIndonesia_3.png" /> ES Teh Indonesia'
            });
var format_Kompetitor_4 = new ol.format.GeoJSON();
var features_Kompetitor_4 = format_Kompetitor_4.readFeatures(json_Kompetitor_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kompetitor_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kompetitor_4.addFeatures(features_Kompetitor_4);
var lyr_Kompetitor_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kompetitor_4, 
                style: style_Kompetitor_4,
                popuplayertitle: "Kompetitor",
                interactive: true,
    title: 'Kompetitor<br />\
    <img src="styles/legend/Kompetitor_4_0.png" /> ES Teh Nusantara<br />\
    <img src="styles/legend/Kompetitor_4_1.png" /> Haus! <br />\
    <img src="styles/legend/Kompetitor_4_2.png" /> The Kota<br />'
        });

lyr_OpenStreetMapHOT_0.setVisible(true);lyr_DIYogyakarta_1.setVisible(true);lyr_jaringan_jalan_2.setVisible(true);lyr_ESTehIndonesia_3.setVisible(true);lyr_Kompetitor_4.setVisible(true);
var layersList = [lyr_OpenStreetMapHOT_0,lyr_DIYogyakarta_1,lyr_jaringan_jalan_2,lyr_ESTehIndonesia_3,lyr_Kompetitor_4];
lyr_DIYogyakarta_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KODE_KEC': 'KODE_KEC', 'KODE_KAB': 'KODE_KAB', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'jml_pnddk': 'jml_pnddk', });
lyr_jaringan_jalan_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Ruas': 'Ruas', 'Kewenangan': 'Kewenangan', 'Sumber': 'Sumber', 'Lokasi_Kab': 'Lokasi_Kab', 'Fungsi': 'Fungsi', 'Keterangan': 'Keterangan', 'Sumber_3': 'Sumber_3', });
lyr_ESTehIndonesia_3.set('fieldAliases', {'Nama': 'Nama', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Kompetitor_4.set('fieldAliases', {'Nama': 'Nama', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Brand': 'Brand', });
lyr_DIYogyakarta_1.set('fieldImages', {'OBJECTID': 'Hidden', 'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_KEC': 'Hidden', 'KODE_KAB': 'Hidden', 'KODE_PROP': 'Hidden', 'KABUPATEN': 'TextEdit', 'jml_pnddk': 'Hidden', });
lyr_jaringan_jalan_2.set('fieldImages', {'Shape_Leng': 'Hidden', 'Ruas': 'TextEdit', 'Kewenangan': 'Hidden', 'Sumber': 'Hidden', 'Lokasi_Kab': 'TextEdit', 'Fungsi': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber_3': 'Hidden', });
lyr_ESTehIndonesia_3.set('fieldImages', {'Nama': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Kompetitor_4.set('fieldImages', {'Nama': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Brand': 'TextEdit', });
lyr_DIYogyakarta_1.set('fieldLabels', {'PROVINSI': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', });
lyr_jaringan_jalan_2.set('fieldLabels', {'Ruas': 'no label', 'Lokasi_Kab': 'no label', 'Fungsi': 'no label', 'Keterangan': 'no label', });
lyr_ESTehIndonesia_3.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Kompetitor_4.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Latitude': 'no label', 'Longitude': 'no label', 'Brand': 'no label', });
lyr_Kompetitor_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});