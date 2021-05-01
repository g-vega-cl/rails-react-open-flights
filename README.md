# README

- https://www.youtube.com/watch?v=oyjzi837wME

## Databases
1. Create the db with rails db:create
2. Build the db models
    * They are in the app/models folder.
    * In db/migrate we can also see the db migrations.
    * (This is code) that builds code. Metaprogramming! :D.
3. Run `rails db:migrate`
    * This creates the schema file in db/

* has_many allows you to put many records on a db of another db.
* in seeds.rb you place the data you want to be there at the beginning of the application.

## The api
1. We use fast_jsonapi -> In Gemfile add: gem 'fast_jsonapi'
    * Then do bundle install
2. Now we create an airline serializer and a review serializer. This is to decide the attributes exposed to the api (min 13).
    * A serializer folder is created
    * In the serializers, you define what's exposed to the world (the api)

## Routes controllers
1. Create a route controller -> routes.rb
2. Create pages_controller.rb in the controllers folder. It's called like that because in routes.rb we said: pages#index
3. You create your controllers for example airlines_controller and you define all the backend there. CRUD

* Note **Strong Parameters** 
`Strong Parameters:
Strong Parameters is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted. 

It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.

In addition, parameters can be marked as required and flow through a predefined raise/rescue flow to end up as a 400 Bad Request with no effort.`

* Note in bash do `rails routes` and it will show us the routes we created. You can test these with postman. eg: localhost:3000/api/v1/airlines.json