
    function initMap(){
      // Map options
      var options = {
        zoom:4.5,
        center:{lat:31.8617,lng:104.1954},
        mapTypeId: 'terrain',
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
           style: google.maps.ZoomControlStyle.LARGE
                 }
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Listen for click on map
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });

      // Array of markers
      var markers = [
        {
          coords:{lat:22.824,lng:108.32},
          name:"Zhuang People",
          iconImage:'images/zhuang.png',
          content:'<div style="width:200px;min-height:50px"><h4>Zhuang People</h4><p>The Zhuang ethnic group is the largest of the 55 minorities in China. About 18 million live in the south and southeast. Their main homeland is in the Guangxi Zhuang Autonomous Region and Yunnan Province. </p><img src="images/Zhuang.webp" alt="miao" width="200px" ><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal1">Learn More</button></div>'
        },
        {
          coords:{lat:42.100,lng:124.92},
          name:"Manchu People",
          iconImage:'images/man.png',
          content:'<div style="width:200px;min-height:50px"><h4>Manchu People</h4><p>They are the creators of the Qing Empire. The Forbidden City is where you can see how the Manchu dynastic clan lived together.</p><img src="images/man.webp" alt="miao" width="200px" ><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal3">Learn More</button></div>'
        },
        {
          coords:{lat:40.817,lng:111.765},
          name:"Mongolians",
          iconImage:'images/mongo.png',
          content:'<div style="width:200px;min-height:50px"><h4>Mongolians</h4><p>The Mongolian ethnic group is best known for conquering most of Eurasia and establishing a large empire almost 1,000 years ago.</p><img src="images/mon.webp" alt="miao" width="200px" ><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal4">Learn More</button></div>'
        },
        {
          coords:{lat:28.311,lng:109.739},
          name:"Miao People",
          iconImage:'images/miao.png',
          content:'<div style="width:200px;min-height:50px"><h4>Miao People</h4><p>The Miao ethnic group consists of about 10 million people in China. The Miao people are called the ethic group of singing and dancing.</p><img src="images/miao.jpg" alt="miao" width="200px" ><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal5">Learn More</button></div>'
        },
        {
          coords:{lat:31,lng:88},
          name:"Zang People",
          iconImage:'images/zang.png',
          content:'<div style="width:200px;min-height:50px"><h4>Zang People</h4><p>About 6 million live in China, and 3 million of them live in Tibet that was their former stronghold. Physically, the Tibetans are well adapted to living at high altitude. Many are devout Buddhists.</p><img src="images/zang.webp" alt="miao" width="200px" ><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal8">Learn More</button></div>'
        },
        {
          coords:{lat:27.9,lng:103.26},
          name:"Yi People",
          iconImage:'images/yipeople.png',
          content:'<div style="width:200px;min-height:50px"><h4>Yi People</h4><p>They make terraced fields, love to make music, and are often accomplished musicians on both traditional and modern instruments. They also love dancing with almost acrobatic skill.</p><img src="images/yi.webp" alt="miao" width="200px" ><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal11">Learn More</button></div>'
        }
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }

        groupContent = [
        "The Zhuang ethnic group is the largest of the 55 minorities in China. About 18 million live in the south and southeast.",
        "They are the creators of the Qing Empire. The Forbidden City is where you can see how the Manchu dynastic clan lived together.",
        "The Mongolian ethnic group is best known for conquering most of Eurasia and establishing a large empire almost 1,000 years ago.",
        "The Miao ethnic group consists of about 10 million people in China. The Miao people are called the ethic group of singing and dancing.",
        "Like the Miao, the Dong are known for fine Lusheng music. They are famed for distinctive polyphonal musical concerts, and their architecture and craftsmanship.",
        "They make terraced fields, love to make music, and are often accomplished musicians on both traditional and modern instruments. They also love dancing with almost acrobatic skill."
        ];




          // Add elements to the table
          for (var j = 1; j < 7; j++) {
          table.rows[j].cells[0].innerHTML = markers[j-1].name;
          table.rows[j].cells[1].innerHTML = groupContent[j-1];
        }
    }  }



// I have tried using .textContent .innerText but they all didn't work
        // var theDiv = markers[1].content;
        // var text = theDiv.contents();
        // console.log(text);
        // console.log(markers[1].content);
          // console.log(groupContent[i]);
// list = document.getElementById('menu1');
//           list.innerHTML += groupName;
//           list.innerHTML += groupContent;


  // Some ethinic group area is too small to be seen on the map, so it lacks of aesthestics when making all of them polygons
  // Define the LatLng coordinates for the polygon's path.
//   var triangleCoords = [
//     [{ lat: 24.73, lng: 105.100 },
//     { lat: 26.2154, lng: 111.25 },
//     { lat: 22.058, lng: 109.838 },
//     { lat: 22.221, lng: 107.377 }],
//
//     [{ lat: 42, lng: 124 },
//     { lat: 42.5, lng: 125.4 },
//     { lat: 41.9, lng: 124.9 }],
//
//     [{ lat: 41, lng: 106 },
//     { lat: 46, lng: 119 },
//     { lat: 44, lng: 121.5 },
//     { lat: 39, lng: 108 }],
//
//     [{ lat: 37.53, lng: 104.60 },
//     { lat: 39.29, lng: 106.47 },
//     { lat: 37.64, lng: 107.43 },
//     { lat: 35.61, lng: 106.02 }],
//
//     [{ lat: 37.53, lng: 104.60 },
//     { lat: 39.29, lng: 106.47 },
//     { lat: 37.64, lng: 107.43 },
//     { lat: 35.61, lng: 106.02 }],
// ];

/*  // Construct the polygon.
  for(var j = 0;j < triangleCoords.length;j++){
    // Add polygons
    var bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords[j],
      strokeColor: "lightgrey",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "white",
      fillOpacity: 0.35,
    });
  bermudaTriangle.setMap(map);
}*/
