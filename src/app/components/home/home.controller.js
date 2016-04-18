import GoogleMapsLoader from 'google-maps';

export default class HomeController {
  constructor () {
    'ngInject';
    GoogleMapsLoader.KEY = 'AIzaSyDmIIHOqkLhhGE1zFXuAeKImyh-HWBS8mU';
    
    var styles = [
      {
        stylers: [
          { hue: '#323330' },
          { saturation: -100 },
          { invert_lightness: true }
        ]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { lightness: 1 },
          { visibility: 'on' }
        ]
      }, {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          { visibility: 'on' },
          { lightness: 1 },
          { visibility: 'on' }
        ]
      }
    ];

    GoogleMapsLoader.load(function (google) {
      var styledMap = new google.maps.StyledMapType(styles,
        {name: 'Styled Map'});

      var map = new google.maps.Map(document.querySelector('#map'), {
        center: {lat: 36.1515676, lng: -95.9885456},
        zoom: 15,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      });
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
    });
  }
}
