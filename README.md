# Starter

This project was created to be boiler plate for an Angular app with Firestore

## Includes:
* Bulma
* Font-Awesome
* Angular-Firestore/Firebase
* Angular Material

##### Note: Firestore/Firebase is used for Authentication. Bulma is used for the styling of the login component; if you remove either you will need to fix that component.

## Configure

To use you must configure a Firestore project from google and place the API key/credentials into the environment(.prod).ts file.

The login component defaultly has Google and Twitter authorization chosen for the login methods so those must also be configured in your Firestore project from google.

The main component has a route guard using an authorization service that checks if you logged in. 
The login component has a check to see if you are already logged in and then redirects to the main component.

To override Bulma variables through the project use the styles.scss global stylesheet.
###### Note: The full import of Bulma should be left at the bottom of the file to prevent overriding your own variables.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
