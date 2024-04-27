module.exports = {
  proxy: '0.0.0.0:3000', // assuming your NestJS runs on port 3000
  files: ['src/public/**/*.*', 'src/**/*.hbs'], // Watch handlebars templates and static files
  ignore: [],
  port: 3001, // browser-sync server port
  open: false,
};
