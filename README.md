# VeganMeetsBackEnd
VeganMeets is an app that helps people find and support restaurants that have vegan options.

## API Endpoints
## Register a new user
### POST /register
https://example.com/register

Expects object:
```
{
    "firstName": "test",
    "lastName": "test",
    "email": "test@test.com",
    "username": "test",
    "password": "test123"
}
```
## Log in a user
###  POST /login
https://example.com/login

Expects object:

```
{
    "username": "test",
    "password": "test123"
}
```

Returns Object:

```
{
    "message": "Welcome 'username'",
    "token": "token"
}
```