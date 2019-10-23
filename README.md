# VeganMeetsBackEnd
VeganMeets is an app that helps people find and support restaurants that have vegan options.

## API Endpoints
## Register a new user
### POST api/use/register
https://example.com/user/register

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
###  POST api/user/login
https://example.com/user/login

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