# Starter

This project was created to be boiler plate for an Angular app with Firestore

## Includes:
* Bulma
* Font-Awesome
* Angular-Firestore/Firebase
* Angular Material

##### Note: Firestore/Firebase is used for Authentication. Bulma is used for sytling of login component if you remove either you will need to fix that component.

## Configure

To use you must configure a Firestore from google and place the API key/credentials into the environment(.prod).ts file.

The login component defaultly has Google auth chosen for the login method so that must also be configured in your Firestore project from google.

The main component has a route that is route guarded by an Authorization service that checks if you are authorized. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
