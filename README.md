
# Retrievbit

<div align="center">
  <img src="src/assets/retrievbit-logo.svg" style="width:80%;" alt="Retrievbit Logo" align="center" />
  <p>Modern, multilingual content platform built with Astro</p>
</div>

---

[![GitHub License](https://img.shields.io/github/license/astrogon/astrogon?color=red)](https://github.com/astrogon/astrogon/blob/main/LICENSE) [![Repo Size](https://img.shields.io/github/repo-size/astrogon/astrogon)](https://github.com/astrogon/astrogon) ![GitHub branch check runs](https://img.shields.io/github/check-runs/astrogon/astrogon/main) [![Website](https://img.shields.io/website?up_message=online&up_color=limegreen&down_message=offline&down_color=yellow&url=https%3A%2F%2Fastrogon.reednel.com%2F)](https://astrogon.reednel.com/)

> **Note**: This project is a fork of [Astrogon](https://github.com/astrogon/astrogon), a multipurpose website template built with Astro JS, Tailwind, and React. We've customized it to create a modern multilingual content platform.

## 🚀 Features

### 🌐 Multilingual Support

- **English & Spanish** content out of the box
- Easy to add more languages
- Automatic language detection and switching
- SEO-optimized URLs for each language

### 📚 Content Collections

- **Blog**
  - Categories and Tags for organization
  - Featured posts support
  - Reading time estimation
  - Author profiles

- **Tutorials**
  - Step-by-step guides
  - Recipe-style formatting
  - Cooking mode feature
  - Print-friendly versions

- **Concepts**
  - Elegant content presentation
  - Clean, focused reading experience
  - Easy navigation between related concepts
  - Responsive design for all devices

- **Documentation**
  - Hierarchical structure
  - Search functionality
  - Table of contents
  - Versioning support

- **Portfolio**
  - Project showcase
  - Filterable by category
  - Responsive image galleries
  - Project details and links

#### Content Components & Features

- **Accordion**/collapsible section
- **Tabs** section
- **Code Block** with syntax highlighting
- **Quote Block**
- **Notice Blocks** - note, tip, info, & warning
- **Embedded YouTube Video**
- Integrated **LaTeX** support for inline and block mathematical expressions
- All the standard **MD/MDX** features, including footnotes, tables, and more

### ✨ Key Features

- **Dark/Light Mode**
  - Automatic system preference detection
  - Smooth theme switching
  - Persistent user preference

- **Enhanced Content Discovery**
  - Full-text search across all content
  - Related content suggestions
  - Table of contents with smooth scrolling
  - Category and tag filtering

- **Performance Optimized**
  - Blazing fast page loads with Astro
  - Optimized images and assets
  - Lazy loading for better performance
  - Minimal JavaScript footprint

- **Developer Experience**
  - Clean, modular codebase
  - TypeScript support
  - Component-based architecture
  - Easy theming system

- **SEO & Social**
  - SEO-optimized structure
  - Open Graph and Twitter cards
  - Sitemap generation
  - RSS feed support

Every one of these features was designed with modularity and customizability in mind, for the smoothest development experience possible. For more details, see [docs/customization.md](docs/customization.md).

## Recommended Technologies

- [Git](https://git-scm.com)
- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [Visual Studio Code](https://code.visualstudio.com/)

See [docs/tech-stack.md](docs/tech-stack.md) for more details.

## Development Instructions

1. Fork this repository to your own GitHub account, then clone it to your local machine
2. Use Node 22: `nvm install 22` or `nvm use 22`
3. From the project directory, install Node dependencies: `npm install`
4. From the project directory, build: `npm run dev`
   1. Alternately*: `npx astro build`, `npx wrangler dev`
5. See your changes live at `http://localhost:4321`

> *This is relevant if you intend to deploy your site to Cloudflare. Starting with Astro 5.8, Node 18 is unsupported, but the old Cloudflare Pages uses 18 by default. Wrangler appears to be necessary to use the new Cloudflare Workers. Read more about [Astro deployment on Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/#cloudflare-workers).

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/luiscm17/retrievbit.git
   cd retrievbit
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser to `http://localhost:4321`

## 🚀 Deployment

Deploy to your favorite platform:

- [Vercel](https://vercel.com)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- Or any static hosting service

## 📝 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Retrievbit is a customized fork of [Astrogon](https://github.com/astrogon/astrogon), created by [reednel](https://github.com/reednel). Special thanks to the original authors and contributors for their work on this amazing template.

Original Astrogon was inspired by:

- [astroplate](https://github.com/zeon-studio/astroplate) by zeon-studio
- [astro-design-system](https://github.com/jordienr/astro-design-system) by jordienr
- [manual](https://github.com/TheOtterlord/manual) by TheOtterlord

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
