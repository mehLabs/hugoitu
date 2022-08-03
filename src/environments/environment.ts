// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'hugoiturrieta-fffd1',
    appId: '1:5424846916:web:c1a1928b2a8664c8bfc411',
    databaseURL: 'https://hugoiturrieta-fffd1-default-rtdb.firebaseio.com',
    storageBucket: 'hugoiturrieta-fffd1.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyBAB-snb_Yz7vkBjdInjZVTIzcJ_R58PKw',
    authDomain: 'hugoiturrieta-fffd1.firebaseapp.com',
    messagingSenderId: '5424846916',
    measurementId: 'G-SCTV3X6WND',
  },
  production: false,
  
  dev: {
    serverUrl:"http://localhost:7000", //serverUrl:"https://hugoitu.herokuapp.com",
    localUrl:"http://localhost:7000"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
