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
# To-Do
## API Functionalities:
 * Unregistered Users
    * Lookup flight information, free seats
    * Lookup rent-a-car information
 * Registered Users
    * User Registration (OAuth/Email/Password)
    * User Login/Logout
    * Search Friends
    * Add/Remove Friends
    * Reserve/Decline Airplane Tickets
    * Give a grade to the Air company
    * (later) Reserve/Decline Rent-a-car
    * (later) Give a grade to the Rent-a-car company
 * Admins
    * Airplane Admins
        * Define destinations
        * Add new flights for destinations
        * Adjust price tickets
        * Get reports of sold tickets
        * Get user ratings of their company
        * Get Income Reports
        * Edit Airplane Company Page
    * (later) Rent - a - car Admins
        * Define available vehlices
        * Adjust pricing
        * Get reports of free and taken vehlices for a given period
        * User rating
        * Get Income Reports
        * Edit Airplane Company Page
    * Super Admin
        * Register a new Rent-a-Car or Aviation company
## Finalization
- Write global error handler
- (!!!DONE!!!) Try to set a check if database exists, if not, create it
- Setup .env environment variable loading

## Applying Migrations
npx sequelize-cli db:migrate --url 'mysql://user:pass@localhost/dbname' --migrations-path "/home/mmedic/Programming/PUSGS/server/src/migrations"