# 🚰 Node HTMX Kitchen Sink

A kitchen sink for building UI apps with NestJS, HTMX, Handlebars, TailwindCSS and few other utensils.

- 🧪 [NestJS](https://nestjs.com/) – for scalable server-side applications
- ⚡ [HTMX](https://htmx.org/) – for modern, server-driven interactivity
- 🧼 [Handlebars](https://handlebarsjs.com/) – for clean server-side templating
- 🎨 [TailwindCSS](https://tailwindcss.com/) – for rapid UI styling

> A collection of recipes, components, and patterns to help you rapidly build interactive web apps without a heavy frontend stack.

🔗 **[Live Demo](https://stingray-app-dkeuh.ondigitalocean.app/)**

## ⚙️ Getting Started

Fork the project, install and start developing.

### 1. Clone and Install

```bash
git clone https://github.com/apl9000/node-htmx-kitchen-sink.git

cd node-htmx-kitchen-sink

npm install
```

### Running the app

#### Development

```bash
$ npm run dev
```

#### Production

```bash
$ npm run start:prod
```

### Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 💡 What's Included?

- HTMX demos for GET, POST, modals, and partial updates
- Clean NestJS controller/service architecture
- Layouts and partials with Handlebars
- Tailwind setup out of the box
- Development hot-reloading

## 📂 Project Structure

```csharp
htmx-nestjs-kitchen-sink/
├── src/
│   ├── public/            # Static assets
│   ├── views/             # Handlebars views
│   │   ├── layouts/
│   │   ├── partials/
│   │   └── ...
│   ├── app.controller.ts  # Core controller logic
│   └── main.ts            # App bootstrap
├── package.json
└── README.md

```

## Contributing

This repo is open for contributions! Feel free to fork, open issues, or submit PRs to expand the component library or improve the dev experience.

</br>

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=74ddc8671028&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)
