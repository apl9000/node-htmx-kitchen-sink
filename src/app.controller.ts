import { Controller, Get, Render, Req, Post } from '@nestjs/common';
import mockContactsData from './mock-contacts-data';

const layout = {
  title: 'NestJS Kitchen Sink',
  // description of an montreal based artist
  description:
    'A kitchen sink for buildig UI NestJS apps leveraging HTMX, Handlebars, TailwindCSS and few other utensils.',
  links: [],
};

@Controller()
export class AppController {
  @Get()
  @Render('pages/index')
  root() {
    return {
      ...layout,
      message: 'Check Check Check it out!',
    };
  }

  @Post('search')
  @Render('components/search_results')
  search(@Req() request) {
    console.log(request.body);
    return {
      query: request.body.q,
      results: request.body.q
        ? mockContactsData.filter(({ first_name }) =>
          first_name.toLowerCase().startsWith(request.body.q.toLowerCase()),
        )
        : mockContactsData,
    };
  }

  @Get('results/:slug')
  @Render('search_result')
  about(@Req() request) {
    return mockContactsData.filter(
      (result) => result.email === request.params.slug,
    )[0];
  }
}
