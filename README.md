# Create Rails App

`rails new eleicao-igreja --skip-test --skip-action-mailer --skip-active-storage --skip-action-cable --skip-coffee --skip-turbolinks --webpack=react`

# Heroku Setup

`heroku git:remote -a eleicao-igreja`

```
heroku buildpacks:clear
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add heroku/ruby
```

## Database

* Update sqlite and pg in Gemfile
* Configure production in database.yml
* `heroku addons:create heroku-postgresql`
