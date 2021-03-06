// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyBZaPK5hWDzeFzSxLvY6Tn7nVRNN2JcCyA',
    authDomain: 'platzisaquare.firebaseapp.com',
    databaseURL: 'https://platzisaquare.firebaseio.com',
    projectId: 'platzisaquare',
    storageBucket: 'platzisaquare.appspot.com',
    messagingSenderId: '787258412189',
    appId: '1:787258412189:web:07094bd614aa9303411874'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
