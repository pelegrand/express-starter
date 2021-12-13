# EXPRESS-STARTER ⚡️ ⚡️ ⚡️


## Environment variables

First of all create and set up your .env file like .env.sample file 

## Dependencies

### Prisma :pushpin:

This template uses Prisma as orm.

For full documentation please visit : <a href="https://www.prisma.io/docs/getting-started/quickstart">Prisma.io</a>

You can initialize Prisma with this command : 

```bash
npm run prisma-init
```
It will create a schema.prisma and a seed.js files into a new prisma directory.

In schema.prisma you have to adapt the provider which is postgresql by default.

Once it's done, you can run :

```bash
npm run db-init
```
it will pull your database and generate the schema.prisma related to it.

If you want to seed your database you can fill the seed.js file and create the data files.

Once it's done, you can run : 

```bash
npm run db-seed
```
### Other dependencies :pushpin:

This template uses : 

<ul>
   <li><a href="https://github.com/sidorares/node-mysql2#readme">Mysql2</a></li>
   <li><a href="https://github.com/ranisalt/node-argon2#readme">Argon2</a></li>
   <li><a href="https://github.com/expressjs/cors#readme">Cors</a></li>
   <li><a href="https://github.com/motdotla/dotenv#readme">Dotenv</a></li>
   <li><a href="https://github.com/Abazhenov/express-async-handler">Express-async-handler</a></li>
   <li><a href="https://jwt.io/">Jsonwebtoken</a></li>
   <li><a href="https://swagger.io/">Swagger</a></li>
   <li><a href="https://eslint.org/">Eslint</a></li>
   <li><a href="https://prettier.io/">Prettier</a></li>
</ul>


## Let's go code your server

```bash
npm start
```


