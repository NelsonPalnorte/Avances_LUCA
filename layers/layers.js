ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:103599").setExtent([5019552.021695, 2473088.434096, 5078494.668857, 2505295.004702]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_NuevoAlcanceLUCA_1 = new ol.format.GeoJSON();
var features_NuevoAlcanceLUCA_1 = format_NuevoAlcanceLUCA_1.readFeatures(json_NuevoAlcanceLUCA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:103599'});
var jsonSource_NuevoAlcanceLUCA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NuevoAlcanceLUCA_1.addFeatures(features_NuevoAlcanceLUCA_1);
var lyr_NuevoAlcanceLUCA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NuevoAlcanceLUCA_1, 
                style: style_NuevoAlcanceLUCA_1,
                popuplayertitle: "Nuevo Alcance LUCA",
                interactive: true,
                title: '<img src="styles/legend/NuevoAlcanceLUCA_1.png" /> Nuevo Alcance LUCA'
            });
var format_AreasdeCampensacion20102020_2 = new ol.format.GeoJSON();
var features_AreasdeCampensacion20102020_2 = format_AreasdeCampensacion20102020_2.readFeatures(json_AreasdeCampensacion20102020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:103599'});
var jsonSource_AreasdeCampensacion20102020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasdeCampensacion20102020_2.addFeatures(features_AreasdeCampensacion20102020_2);
var lyr_AreasdeCampensacion20102020_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasdeCampensacion20102020_2, 
                style: style_AreasdeCampensacion20102020_2,
                popuplayertitle: "Areas de Campensacion 2010 - 2020",
                interactive: true,
                title: '<img src="styles/legend/AreasdeCampensacion20102020_2.png" /> Areas de Campensacion 2010 - 2020'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_NuevoAlcanceLUCA_1.setVisible(true);lyr_AreasdeCampensacion20102020_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_NuevoAlcanceLUCA_1,lyr_AreasdeCampensacion20102020_2];
lyr_NuevoAlcanceLUCA_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Codigo proveedor': 'Codigo proveedor', 'Proveedor': 'Proveedor', 'Representante': 'Representante', 'Identificacion': 'Identificacion', 'Expedida': 'Expedida', 'Tipo Proveedor': 'Tipo Proveedor', 'Clasificacion': 'Clasificacion', 'Telefono': 'Telefono', 'Finca': 'Finca', 'Codigo de Finca': 'Codigo de Finca', 'Lote': 'Lote', 'Area': 'Area', 'Vereda': 'Vereda', 'Zona': 'Zona', 'Municipio': 'Municipio', 'Material': 'Material', 'Etapa': 'Etapa', 'N° Palmas': 'N° Palmas', 'D_Plantas (m)': 'D_Plantas (m)', 'Cobertura': 'Cobertura', 'Fecha de siembra': 'Fecha de siembra', 'Fecha actual': 'Fecha actual', 'Edad_palma': 'Edad_palma', 'Tipo': 'Tipo', 'PK_clave': 'PK_clave', 'Perimetro': 'Perimetro', 'UMA': 'UMA', });
lyr_AreasdeCampensacion20102020_2.set('fieldAliases', {'fid': 'fid', 'Proveedor': 'Proveedor', 'Finca': 'Finca', 'Fecha': 'Fecha', 'Area': 'Area', });
lyr_NuevoAlcanceLUCA_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Codigo proveedor': 'TextEdit', 'Proveedor': 'TextEdit', 'Representante': 'TextEdit', 'Identificacion': 'TextEdit', 'Expedida': 'TextEdit', 'Tipo Proveedor': 'TextEdit', 'Clasificacion': 'TextEdit', 'Telefono': 'TextEdit', 'Finca': 'TextEdit', 'Codigo de Finca': 'TextEdit', 'Lote': 'TextEdit', 'Area': 'TextEdit', 'Vereda': 'TextEdit', 'Zona': 'TextEdit', 'Municipio': 'TextEdit', 'Material': 'TextEdit', 'Etapa': 'TextEdit', 'N° Palmas': 'TextEdit', 'D_Plantas (m)': 'TextEdit', 'Cobertura': 'TextEdit', 'Fecha de siembra': 'DateTime', 'Fecha actual': 'DateTime', 'Edad_palma': 'Range', 'Tipo': 'TextEdit', 'PK_clave': 'TextEdit', 'Perimetro': 'TextEdit', 'UMA': 'Range', });
lyr_AreasdeCampensacion20102020_2.set('fieldImages', {'fid': 'TextEdit', 'Proveedor': 'TextEdit', 'Finca': 'TextEdit', 'Fecha': 'TextEdit', 'Area': 'TextEdit', });
lyr_NuevoAlcanceLUCA_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Codigo proveedor': 'no label', 'Proveedor': 'no label', 'Representante': 'no label', 'Identificacion': 'inline label - always visible', 'Expedida': 'no label', 'Tipo Proveedor': 'no label', 'Clasificacion': 'no label', 'Telefono': 'no label', 'Finca': 'inline label - always visible', 'Codigo de Finca': 'no label', 'Lote': 'no label', 'Area': 'no label', 'Vereda': 'no label', 'Zona': 'no label', 'Municipio': 'no label', 'Material': 'no label', 'Etapa': 'no label', 'N° Palmas': 'no label', 'D_Plantas (m)': 'no label', 'Cobertura': 'no label', 'Fecha de siembra': 'no label', 'Fecha actual': 'no label', 'Edad_palma': 'no label', 'Tipo': 'no label', 'PK_clave': 'no label', 'Perimetro': 'no label', 'UMA': 'no label', });
lyr_AreasdeCampensacion20102020_2.set('fieldLabels', {'fid': 'no label', 'Proveedor': 'no label', 'Finca': 'no label', 'Fecha': 'no label', 'Area': 'no label', });
lyr_AreasdeCampensacion20102020_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});