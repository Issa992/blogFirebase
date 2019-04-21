// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// updat fire base conf
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDDrjHLd6YAZZWljwDqfyUMBIJj-3u9UGI",
    authDomain: "blogfirebase-d8760.firebaseapp.com",
    databaseURL: "https://blogfirebase-d8760.firebaseio.com",
    projectId: "blogfirebase-d8760",
    storageBucket: "blogfirebase-d8760.appspot.com",
    messagingSenderId: "1081395414948"
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
