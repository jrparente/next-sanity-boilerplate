<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Next.js + Sanity CMS Boilerplate</h3>
<p align="center"> A starter project to integrate Sanity CMS with Next.js 14 and TailwindCSS. <br /> 
<a href="https://github.com/jrparente/next-sanity-boilerplate"><strong>Explore the docs »</strong></a> 
<br /> <br /> 
<a href="https://github.com/jrparente/next-sanity-boilerplate/issues">Report Bug</a> · 
<a href="https://github.com/jrparente/next-sanity-boilerplate/issues">Request Feature</a> 
</p>

</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project integrates **Next.js 14**, **Sanity CMS**, and **TailwindCSS** to provide a fully functional starter for developers who want a streamlined and scalable website setup. It includes Sanity Studio embedded within the Next.js project, allowing content creators to manage the website directly from a `/admin` route.

The main goal of this boilerplate is to provide a simple and maintainable structure, making it easy to scale as your content grows.

### Features:

- Seamless integration with Sanity CMS for dynamic content management.
- TailwindCSS for fast and responsive styling.
- Optimized image handling via Sanity’s CDN.
- Modular and scalable structure with server-side rendering and static site generation.
- A built-in admin interface for managing content via Sanity Studio.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]
- [![Sanity][Sanity-url]][Sanity-url]
- [![TailwindCSS][TailwindCSS-url]][TailwindCSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get this project set up and running on your local machine, follow these simple steps.

### Prerequisites

Ensure that you have the following installed on your machine:

- Node.js >= 14.x
- npm or yarn
- Sanity Account

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jrparente/next-sanity-boilerplate.git
   ```
2. Navigate to the project directory
   ```sh
    cd next-sanity-boilerplate
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a new Sanity project:
   ```sh
   npm create sanity@latest
   ```
5. Add your Sanity project details to .env.local:
   ```sh
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_dataset
   ```
6. Run the development server:
   ```sh
   npm run dev
   ```
7. Access Sanity Studio at: `http://localhost:3000/admin`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This boilerplate serves as a foundational setup for creating dynamic, content-rich websites. You can easily extend it by adding new content types in Sanity, and the TailwindCSS integration ensures that the styling is responsive and customizable.

To create new content blocks or page layouts:

1. Create a new schema in Sanity Studio.
2. Create new Components in the `components` directory.
3. Fetch the data in the relevant page or component using Sanity's GROQ queries in your server components.

You can find a step-by-step guide on how to use this project in the <a href="https://medium.com/the-balancing-act/integrating-sanity-cms-with-next-js-14-app-router-tailwindcss-a-step-by-step-guide-3eaeda8599ab" target="_black">Medium article</a>.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Joana Parente - [@joana_r_parente](https://twitter.com/joana_r_parente) - jrparente@gmail.com

Project Link: [https://github.com/jrparente/next-sanity-boilerplate](https://github.com/jrparente/next-sanity-boilerplate)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jrparente/next-sanity-boilerplate.svg?style=for-the-badge
[contributors-url]: https://github.com/jrparente/next-sanity-boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jrparente/next-sanity-boilerplate.svg?style=for-the-badge
[forks-url]: https://github.com/jrparente/next-sanity-boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/jrparente/next-sanity-boilerplate.svg?style=for-the-badge
[stars-url]: https://github.com/jrparente/next-sanity-boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/jrparente/next-sanity-boilerplate.svg?style=for-the-badge
[issues-url]: https://github.com/jrparente/next-sanity-boilerplate/issues
[license-shield]: https://img.shields.io/github/license/jrparente/next-sanity-boilerplate.svg?style=for-the-badge
[license-url]: https://github.com/jrparente/next-sanity-boilerplate/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/joanaparente
[product-screenshot]: public/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Sanity-url]: https://img.shields.io/badge/sanity-000000?style=for-the-badge&logo=sanity&logoColor=white
[TailwindCSS-url]: https://img.shields.io/badge/tailwindcss-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
