// $(function () {
//   var rating = parseFloat($('#meter-container')[0].attributes.rating.value);
//   $('#meter-container').highcharts({

//     chart: {
//       type: 'gauge',
//       plotBackgroundColor: null,
//       plotBackgroundImage: null,
//       plotBorderWidth: 0,
//       plotShadow: false
//     },

//     title: {
//       text: 'Reubometer'
//     },

//     pane: {
//       startAngle: -150,
//       endAngle: 150,
//       background: [{
//         backgroundColor: {
//           linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//           stops: [
//           [0, '#FFF'],
//           [1, '#333']
//           ]
//         },
//         borderWidth: 0,
//         outerRadius: '109%'
//       }, {
//         backgroundColor: {
//           linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//           stops: [
//           [0, '#333'],
//           [1, '#FFF']
//           ]
//         },
//         borderWidth: 1,
//         outerRadius: '107%'
//       }, {
//                 // default background
//               }, {
//                 backgroundColor: '#DDD',
//                 borderWidth: 0,
//                 outerRadius: '105%',
//                 innerRadius: '103%'
//               }]
//             },

//         // the value axis
//         yAxis: {
//           min: 0,
//           max: 11,

//           minorTickInterval: 'auto',
//           minorTickWidth: 1,
//           minorTickLength: 10,
//           minorTickPosition: 'inside',
//           minorTickColor: '#666',

//           tickPixelInterval: 30,
//           tickWidth: 2,
//           tickPosition: 'inside',
//           tickLength: 10,
//           tickColor: '#666',
//           labels: {
//             step: 2,
//             rotation: 'auto'
//           },
//           title: {
//             text: 'flavor/bite'
//           },
//           plotBands: [{
//             from: 0,
//             to: 3,
//                 color: '#DF5353' // red
//               }, {
//                 from: 3,
//                 to: 6,
//                 color: '#DDDF0D' // yellow
//               }, {
//                 from: 6,
//                 to: 11,
//                 color: '#55BF3B' // green
//               }]
//             },

//             series: [{
//               name: 'Rating',
//               data: [rating],
//               tooltip: {
//                 valueSuffix: ' fv/Bt'
//               }
//             }]

//           },
//     // Add some life
//     function (chart) {
//       if (chart.renderer.forExport) {
//         setInterval(function () {
//           var point = chart.series[0].points[0],
//           newVal,
//           inc = Math.round((Math.random() - 0.5) * 10);

//           newVal = point.y + inc;
//           if (newVal < 0 || newVal > 12) {
//             newVal = point.y - inc;
//           }

//           point.update(newVal);

//         }, 3000);
//       }
//     });

// $('text').last().hide()

// });