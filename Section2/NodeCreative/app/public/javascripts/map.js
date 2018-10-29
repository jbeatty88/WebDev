Plotly.d3.csv('javascripts/resorts.csv', function(err, rows){
  
  var classArray = unpack(rows, 'class');
  var classes = [...new Set(classArray)];

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var data = classes.map(function(classes) {
    var rowsFiltered = rows.filter(function(row) {
        return (row.class === classes);
    });
    return {
       type: 'scattermapbox',
       name: classes,
       lat: unpack(rowsFiltered, 'reclat'),
       lon: unpack(rowsFiltered, 'reclong')
    };
  });
  
  var layout = {
	 title: 'Ski Resorts of Utah',
	 font: {
		 color: 'white'
	 },
    dragmode: 'zoom', 
    mapbox: {
      center: {
        lat: 39.3210, 
        lon: -111.0937
      }, 
      domain: {
        x: [0, 1], 
        y: [0, 1]
      }, 
      style: 'dark', 
      zoom: 5.6
    }, 
    margin: {
      r: 20, 
      t: 40, 
      b: 20, 
      l: 20, 
      pad: 0
    }, 
    paper_bgcolor: '#191A1A', 
    plot_bgcolor: '#191A1A', 
    showlegend: true,
	 annotations: [{
		 x: 0,
       y: 0,
       xref: 'paper',
       yref: 'paper',
		 text: 'Source: <a href="http://powderlin.es/api.html" style="color: rgb(255,255,255)">POWDERLINES</a>',
		 showarrow: false
	 }]
  };
  
  Plotly.setPlotConfig({
    mapboxAccessToken: 'pk.eyJ1IjoiZXRwaW5hcmQiLCJhIjoiY2luMHIzdHE0MGFxNXVubTRxczZ2YmUxaCJ9.hwWZful0U2CQxit4ItNsiQ'
  });
  
  Plotly.plot('graphDiv', data, layout);
});


 
