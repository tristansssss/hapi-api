'use strict'

const Hapi = require('@hapi/hapi');
const { routes } = require("./routes/routes")

const init = async () => {

  const server = Hapi.server({
    host: '0.0.0.0',
    port: process.env.PORT || 8080
  });

  // the await expression causes async function execution to pause until a promise is settled
  // In other words we dont want to continue until our plugin has been registered

  // allows you to locate requests by IP
  await server.register(
    {
      plugin: require("hapi-geo-locate"),
      options: {
        enabledByDefault: true
      }

    }
  )

  server.route(routes);


  await server.start();
  console.log(`Server started on: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
});

init();