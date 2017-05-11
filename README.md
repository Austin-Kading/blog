### Description
Blog:

Blog is an application where users can go to make posts on topics in a blog.

### Quickstart

Install required Gems
>  `bundle install`

Create a database on your local computer
>  `be rake db:create`

Create migrations
>  `be rake db:migrate`

Seed the database
>  `be rake db:seed`

Run the server
>  `be shotgun`

As needed, create models & migrations with the `rake` tasks:

```
rake generate:migration  # Create an empty migration in db/migrate, e.g., rake generate:migration NAME=create_tasks
rake generate:model      # Create an empty model in app/models, e.g., rake generate:model NAME=User
```
