// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAWn5qdXATV8YgzqaKlm2147VvOJox1Iak',
    authDomain: 'beleza-pontual.firebaseapp.com',
    databaseURL: 'https://beleza-pontual.firebaseio.com',
    projectId: 'beleza-pontual',
    storageBucket: 'beleza-pontual.appspot.com',
    messagingSenderId: '526123908705'
  }
};
