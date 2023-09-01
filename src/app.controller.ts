import { Controller, Get, Render, Req, Post } from '@nestjs/common';

const results = [
  {
    id: 1,
    first_name: 'Kacie',
    last_name: 'Winward',
    email: 'kwinward0@vinaora.com',
    gender: 'Female',
    ip_address: '54.49.159.161',
  },
  {
    id: 2,
    first_name: 'Sybille',
    last_name: 'Scone',
    email: 'sscone1@hc360.com',
    gender: 'Female',
    ip_address: '87.61.165.132',
  },
  {
    id: 3,
    first_name: 'Nellie',
    last_name: 'Acomb',
    email: 'nacomb2@sohu.com',
    gender: 'Female',
    ip_address: '122.207.235.2',
  },
  {
    id: 4,
    first_name: 'Reggi',
    last_name: 'Hesey',
    email: 'rhesey3@biglobe.ne.jp',
    gender: 'Female',
    ip_address: '68.156.71.99',
  },
  {
    id: 5,
    first_name: 'Kahlil',
    last_name: 'Glanister',
    email: 'kglanister4@craigslist.org',
    gender: 'Male',
    ip_address: '188.118.176.35',
  },
  {
    id: 6,
    first_name: 'Townie',
    last_name: 'Sterry',
    email: 'tsterry5@jimdo.com',
    gender: 'Male',
    ip_address: '16.14.177.100',
  },
  {
    id: 7,
    first_name: 'Hermon',
    last_name: 'Foale',
    email: 'hfoale6@google.com',
    gender: 'Male',
    ip_address: '235.229.47.248',
  },
  {
    id: 8,
    first_name: 'Catarina',
    last_name: 'Le Teve',
    email: 'cleteve7@psu.edu',
    gender: 'Female',
    ip_address: '56.135.223.48',
  },
  {
    id: 9,
    first_name: 'Eugenie',
    last_name: 'Kuban',
    email: 'ekuban8@unicef.org',
    gender: 'Genderqueer',
    ip_address: '190.13.120.219',
  },
  {
    id: 10,
    first_name: 'Fionna',
    last_name: 'Hudd',
    email: 'fhudd9@utexas.edu',
    gender: 'Female',
    ip_address: '61.115.76.33',
  },
  {
    id: 11,
    first_name: 'Leonerd',
    last_name: 'Blackler',
    email: 'lblacklera@skyrock.com',
    gender: 'Male',
    ip_address: '29.200.40.235',
  },
  {
    id: 12,
    first_name: 'Ransell',
    last_name: 'Govan',
    email: 'rgovanb@scribd.com',
    gender: 'Male',
    ip_address: '157.195.205.169',
  },
  {
    id: 13,
    first_name: 'Kary',
    last_name: 'Myrkus',
    email: 'kmyrkusc@acquirethisname.com',
    gender: 'Female',
    ip_address: '179.129.189.39',
  },
  {
    id: 14,
    first_name: 'Billy',
    last_name: 'Balsom',
    email: 'bbalsomd@biblegateway.com',
    gender: 'Male',
    ip_address: '4.192.228.141',
  },
  {
    id: 15,
    first_name: 'Emmet',
    last_name: 'Shapcott',
    email: 'eshapcotte@rakuten.co.jp',
    gender: 'Male',
    ip_address: '248.155.248.76',
  },
  {
    id: 16,
    first_name: 'Jammal',
    last_name: 'Wissby',
    email: 'jwissbyf@people.com.cn',
    gender: 'Male',
    ip_address: '173.155.202.170',
  },
  {
    id: 17,
    first_name: 'Fionna',
    last_name: 'Broadberry',
    email: 'fbroadberryg@imageshack.us',
    gender: 'Female',
    ip_address: '203.215.205.249',
  },
  {
    id: 18,
    first_name: 'Shelly',
    last_name: 'Willder',
    email: 'swillderh@businessweek.com',
    gender: 'Female',
    ip_address: '21.225.252.62',
  },
  {
    id: 19,
    first_name: 'Mikey',
    last_name: 'Clemendet',
    email: 'mclemendeti@reference.com',
    gender: 'Bigender',
    ip_address: '128.107.160.166',
  },
  {
    id: 20,
    first_name: 'Ealasaid',
    last_name: 'Durrans',
    email: 'edurransj@cnet.com',
    gender: 'Genderfluid',
    ip_address: '242.19.255.64',
  },
];

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {
      title: 'Nextjs, HTMX/Handlebars TailwindCSS Boilerplate',
      message: 'hello world',
    };
  }

  @Post('search')
  @Render('search_results')
  search(@Req() request) {
    console.log(request.body);
    return {
      query: request.body.q,
      results: request.body.q
        ? results.filter(({ first_name }) =>
          first_name.toLowerCase().startsWith(request.body.q.toLowerCase()),
        )
        : results,
    };
  }

  @Get('results/:slug')
  @Render('search_result')
  about(@Req() request) {
    console.log(request.params);

    return results.filter((result) => result.email === request.params.slug)[0];
  }
}
