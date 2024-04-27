import { Controller, Get, Render, Req, Post } from '@nestjs/common';

const layout = {
  title: 'NestJS Kitchen 🚰',
  description:
    'A kitchen sink for building UI apps with NestJS, HTMX, Handlebars, TailwindCSS and few other utensils.',
  links: [],
};
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json');
const dependencies = [
  ...Object.keys(pkg.dependencies).map((name) => ({
    name,
    version: pkg.dependencies[name],
    dev: false,
  })),
  ...Object.keys(pkg.devDependencies).map((name) => ({
    name,
    version: pkg.devDependencies[name],
    dev: true,
  })),
];

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {
      ...layout,
      message: 'Check Check Check it out!',
    };
  }

  @Post('search')
  @Render('search_results')
  search(@Req() request) {
    console.log(request.body);
    return {
      query: request.body.q,
      results: request.body.q
        ? dependencies.filter(({ name }) =>
          name.toLowerCase().startsWith(request.body.q.toLowerCase()),
        )
        : dependencies,
    };
  }

  // @Get('results/:slug')
  // @Render('search_result')
  // about(@Req() request) {
  //   return mockContactsData.filter(
  //     (result) => result.email === request.params.slug,
  //   )[0];
  // }
}
