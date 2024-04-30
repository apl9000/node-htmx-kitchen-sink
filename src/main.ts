import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as fs from 'fs';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

const loadPartials = (partialsDir: string) => {
  const files = fs.readdirSync(partialsDir);
  const partials = {};

  files.forEach((file) => {
    const name = file.split('.')[0];
    partials[name] = `partials/${file}`;
  });

  return partials;
};

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  app.useStaticAssets({
    root: join(__dirname, 'public'),
    prefix: '/public',
  });

  app.setViewEngine({
    engine: {
      handlebars: require('hbs'),
    },
    layout: 'layout',
    viewExt: 'hbs',
    templates: join(__dirname, 'views'),
    options: {
      partials: loadPartials(join(__dirname, 'views', 'partials')),
    },
  });
  await app.listen(8080, '::');
  console.log(`${await app.getUrl()} awaiting orders!`);
}
bootstrap();
