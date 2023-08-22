// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import Constants from "src/app/core/constants/constants";

export const environment = {
  production: false,
  youTube_Base_Url: Constants.YOUTUBE_BASE_URL,
  youTube_API_key: Constants.YOUTUBE_API_KEY,
  stackOverflow_Base_Url: Constants.STACKOVERFLOW_BASE_URL,
  gitHub_Base_Url: Constants.GITHUB_BASE_URL,
  google_API_key: Constants.GOOGLE_API_KEY,
  google_Cx_ID: Constants.GOOGLE_CX_ID,
  google_Base_Url: Constants.GOOGLE_BASE_URL
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
