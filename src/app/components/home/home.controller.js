import GoogleMapsLoader from 'google-maps';

export default class HomeController {
  constructor (MeetupsService) {
    'ngInject';
    GoogleMapsLoader.KEY = GOOGLE_MAP_KEY;
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
        center: {lat: 36.159385, lng: -95.993746},
        zoom: 15,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      });

      var marker = new google.maps.Marker({
        position: {lat: 36.159385, lng: -95.993746},
        map: map,
        icon: './img/marker.png',
        title: '36 Degrees North'
      });
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
    });

    MeetupsService.nextEvent().$promise.then(results => {
      this.event = results;
    });
  }
}
