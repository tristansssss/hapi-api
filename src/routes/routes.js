const routes = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return "<h1>Hello World!!</h1>"
  }
},
{
  method: 'GET',
  path: '/users/{user?}',
  handler: (request, h) => {
    return h.redirect('/');
  }
},
{
  method: 'GET',
  path: '/{any*}',
  handler: (request, h) => {
    return "<h1>Oh no! you must be lost</h1>"
  }
},
{
  method: 'GET',
  path: '/location',
  handler: (request, h) => {
    if (request.location){
      return request.location

    } else {
      return "<h1>Your location is not enabled by default</h1>"
    }
  }
},
]

module.exports = { routes }