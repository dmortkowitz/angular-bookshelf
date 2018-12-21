# Angular Bookshelf

_Welcome to my Angular build of my *Bookshelf* app (name and content, a work in progress). In this app, the user is able to store and review their reading collection, for independent or reading club purposes._

## Project MVP
* Functional user interface (functional)
* Connectivity to Firebase (functional)
* Ability to store book submissions (Title, author, summary, number of pages) (functional)
* Update books as completed 

## Future Updates

* Submission and read-by goal dates
* The ability to plot out daily reading plans (pages per day)
* Sort books by New, To Be Read, Currently Reading, and completed
* Ability to leave private notes, or public reviews, of completed books
* Multiple bookshelves per user, to sort or customize collections
* App will pull book data via API from an open database, such as Google Books or Amazon
* More refined and robust GUI
* User authentication
* Community message boards
* Community chat rooms
* Users will be able to set libraries and reading goals to public or private
* User ability to connect with other readers with matching currently read books, to allow for impromptu and remote book clubs.


## Current bugs
* No known bugs at this time.

## Tools and Frameworks Used
* Angular/CLI
* Typescript
* Javascript (ES6)
* Firebase with  
* CSS/Bookstrap
* jQuery


## Github
>The application is located at: https://github.com/dmortkowitz/angular-bookshelf.git

## Installation Instructions
```
The user will want to download the Git Repository from the app's Github Repository.
Once there, navigate to the unzipped project folder in
```
> A note on installation: This project relies on a Firebase key, which is ignored upon Upload for security reasons. In order for you to install and properly run this application, you will need to acquire a key from Firebase, and create the appropriate api-keys.ts file in the *app* folder, with the correct export const masterFirebaseConfig at top, before the credentials.
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
