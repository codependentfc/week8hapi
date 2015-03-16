# Hapi Routes

## REST

The idea this week is to build a RESTful api. This keeps your endpoint URIs simple by making use the the 'verbs' the http methods (GET,POST,PUT,DELETE) provide.

For enlightenment and examples, please read [this excellent articlee](http://mark-kirby.co.uk/2013/creating-a-true-rest-api/).

One thing worth noting, (and covered in the article above), is how to work around the inability of plain html to issue PUT and DELETE requests. 

>One way of doing this is to define in the API the 
>actual call you want to use to replace POST:

>POST: /user/1?method=put
>POST: /user/1?method=delete
>The API can then convert the POST call into the appropriate method, and funnel it into the same route.

See `server.js` for some fictional routes describing a basic blog.

## Hapi

Nelson's [excellent resource](https://github.com/nelsonic/learn-hapi) should get you up and running.

For further information see the [API docs](http://hapijs.com/api), and the [hapi tutorials](http://hapijs.com/tutorials).

## Instructions

1. Clone this repo

2. run `npm install`

3. run `node server.js`

