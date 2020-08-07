The config folder is for storing configurations, environment variables, etc....
THe Routes folder is for storing API routes for our API like /login, etc...
The Models are for storing our Database models and such
The Controllers are for handling the transition between API routes and services
The Services are for business logic

## API Routes

### Unregistered User Routes

    * /airplane-services
    * /flights
    * /free-seats
    * (LATER!!!) /rent-a-car-services

### User Routes

    * /register
    * /login
    * /logout (route may not be needed)
    * /reserve-tickets
    * /rate-aviation-company
    * /rate-flight
    * /cancel-flight-reservation
    * /reserve-rent-a-car
    * /rate-rent-a-car
    * /rate-a-vehlice
    * /cancel-reservation
    * /call-friends
    * /add-friend
    * /remove-friend
    * /find-a-friend

### Admin Routes

    * /add-airports
    * /add-destinations
    * /add-flights
    * /prices
    * /income-report
    * /ratings-report
    * /edit-page

### Superadmin Routes

    * /add-company
    * /delete-company

# Functionality To-Do

## Authentication & Authorization

-   (DONE) User Registration
-   (DONE) User Login
-   (DONE) Route Protection
-   (DONE) OAuth Login
-   (DONE) Confirmation mail for confirming account registration
-   (DONE) Disallow Login if Account Not Confirmed
-   (IN PROGRESS) Company Admin Profile Registration
-   (IN PROGRESS) Company Admin Profile Login

## User Functionality

-   Edit Profile
-   Find Friends
-   Add Friends
-   Remove Friends
-   Accept Friend Requests

### User Flight Functionality

-   View Flight Services
-   Reserve Flight
-   Cancel Flight 3 Hours Before Due Time
-   Rate Service

## Miscalenious

-   (IN PROGRESS) Add a logger (Morgan)
-   (DONE) Write global error handler (404 for not found, 500 for critical errors, 400 for bad request (something went wrong, existing user, etc))
-   (DONE) Try to set a check if database exists, if not, create it
-   (DONE) Setup .env environment variable loading
-   Add Subdomain for admins
-   (IN PROGRESS) Add Request Validators (non-existing email, good field values, etc...)
-   (DONE) Refactor Routes in their respective route files

## Applying Migrations

npx sequelize-cli db:migrate --url 'mysql://user:pass@localhost/dbname' --migrations-path "/home/mmedic/Programming/PUSGS/server/src/migrations"
