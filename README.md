<p align="center">
  <img src="assets/case-study-banner.svg" alt="Sunlectric Solar WordPress theme showcase" width="100%">
</p>

<p align="center"><strong>COMMERCIAL SOLAR · WORDPRESS · VERSION 1.10.1</strong></p>

<p align="center">
  <a href="https://rawpowered.github.io/Sunlectric-Solar-WordPress-Showcase/">Case study</a> ·
  <a href="demo.html">One-page preview</a> ·
  <a href="demo-multipage.html">Multi-page preview</a> ·
  <a href="https://github.com/RawPowered">Contact the developer</a>
</p>

<p align="center">
  <a href="demo.html"><img src="docs/previews/desktop-fold.jpg" alt="Sunlectric commercial solar homepage, desktop first screen" width="100%"></a>
</p>

<p align="center"><small>Static design preview captured October 28, 2026. Hero Studio can replace this slide's copy and media.</small></p>

# Sunlectric Solar WordPress

A commercial solar WordPress theme by **Joseph Edwards (RawPowered)**. Sunlectric pairs a photographic homepage with a custom Hero Studio for managing slides, text, media, motion, and calls to action. The theme also includes responsive navigation, site-wide design controls, and one-page or multi-page presentation options.

The charcoal, lime, and glass styling in the [case study](https://rawpowered.github.io/Sunlectric-Solar-WordPress-Showcase/) frames the work. The solar website uses its own navy, gold, orange, and blue identity.

## Explore the design

| View | What to inspect |
| --- | --- |
| [One-page preview](demo.html) | Hero, services, project story, questions, and consultation path |
| [Multi-page preview](demo-multipage.html) | Homepage with separate About Us and Contact Us pages |
| [About Us](about.html) | Company story and editorial page layout |
| [Contact Us](contact.html) | Inquiry layout and optional OpenStreetMap placement |
| [Hero Studio case study](https://rawpowered.github.io/Sunlectric-Solar-WordPress-Showcase/#studio) | Illustrated editor structure and timing controls |

### Desktop and mobile

<p align="center">
  <a href="docs/previews/desktop.jpg"><img src="docs/previews/desktop-fold.jpg" alt="Sunlectric desktop homepage first screen. Open the full-page image." width="66%"></a>
  <a href="docs/previews/mobile.jpg"><img src="docs/previews/mobile-fold.jpg" alt="Sunlectric mobile homepage first screen. Open the full-page image." width="29%"></a>
</p>

<p align="center"><small>Click either image for the full-page static preview.</small></p>

### Supporting pages and footer

<p align="center">
  <a href="docs/previews/about.jpg"><img src="docs/previews/about.jpg" alt="Sunlectric About Us page preview" width="48%"></a>
  <a href="docs/previews/contact.jpg"><img src="docs/previews/contact.jpg" alt="Sunlectric Contact Us page preview" width="48%"></a>
</p>

<p align="center">
  <a href="docs/previews/footer-no-map.jpg"><img src="docs/previews/footer-no-map.jpg" alt="Sunlectric standard footer" width="48%"></a>
  <a href="docs/previews/footer-with-map.jpg"><img src="docs/previews/footer-with-map.jpg" alt="Sunlectric footer with OpenStreetMap" width="48%"></a>
</p>

These images document the repository's October 28 responsive HTML representation of the theme. The hosted lab currently uses different Hero Studio copy and slide settings. The [case study's Hero Studio graphic](https://rawpowered.github.io/Sunlectric-Solar-WordPress-Showcase/#studio) illustrates the editor layout; it is not a screenshot of WordPress Admin.

## Hero Studio

**Appearance → Hero Studio** manages the bundled WordPress homepage hero. The editor supports up to eight slides; three are enabled in the starter setup.

| Control | Capability |
| --- | --- |
| Slide strip | Select, add, remove, and preview image or video slides |
| Element inspector | Edit eyebrow, headline, supporting text, two buttons, and background separately |
| Typography | Inherit theme or hero fonts, or choose a custom family. Set headline size for desktop and mobile, weight, line height, letter spacing, and color |
| Media and overlay | Choose a still image or muted MP4/WebM video with image poster; adjust overlay type, color, and opacity |
| Motion timeline | Set slide transitions, layer entry and exit styles, delay and duration; reset the stagger when needed |
| Playback | Choose slideshow or a single static slide, autoplay timing, navigation, pause control, and subtle desktop parallax |
| Preview | Check desktop, mobile, and full-screen playback before saving |

Reduced-motion preferences suppress decorative transitions and automatic playback. The first hero slide is rendered in HTML before the front-end script runs. An Elementor-built homepage manages its own hero content.

## Theme options

| Area | Settings |
| --- | --- |
| Presentation | One scrolling page or a multi-page site with About Us and Contact Us |
| Typography | Site body, heading, and navigation fonts, including selected Google Fonts |
| Brand colors | Main palette and header colors |
| Header and menu | Main, scrolled, and mobile logos; sticky header, scroll shrink, and menu transitions |
| Contact | Form recipient and preview mode until a recipient is configured |
| Map | Keyless OpenStreetMap on Contact Us or above every page footer |

The Denver map point is an example. The theme includes [OpenStreetMap attribution](https://www.openstreetmap.org/copyright). The contact form sends through WordPress mail and does not store submissions in the site database; delivery depends on the host's mail setup.

## Build and compatibility

<table>
  <tr>
    <td align="center" width="33%"><img src="assets/icons/wordpress-glass.webp" width="64" height="64" alt=""><br><strong>WordPress 6.4+</strong><br>Theme templates and settings</td>
    <td align="center" width="33%"><img src="assets/icons/php-glass.webp" width="64" height="64" alt=""><br><strong>PHP 7.4+</strong><br>Server-rendered homepage</td>
    <td align="center" width="33%"><img src="assets/icons/javascript-glass.webp" width="64" height="64" alt=""><br><strong>JavaScript</strong><br>Hero Studio and front-end interactions</td>
  </tr>
  <tr>
    <td align="center"><img src="assets/icons/html5-glass.webp" width="64" height="64" alt=""><br><strong>HTML5</strong><br>Page structure</td>
    <td align="center"><img src="assets/icons/css3-glass.webp" width="64" height="64" alt=""><br><strong>CSS3</strong><br>Responsive layouts</td>
    <td align="center"><img src="assets/icons/webp-glass.webp" width="64" height="64" alt=""><br><strong>WebP</strong><br>Compressed theme imagery</td>
  </tr>
</table>

The starter layouts run with WordPress core. Free Elementor is optional for a separately built homepage. Below-the-fold photos load lazily; the first hero image loads eagerly. Theme asset URLs use file-specific cache versions so editor CSS and JavaScript update together.

**Hosted check, October 30, 2026:** Version 1.10.1 was installed on a WordPress 7.1.4 lab. The full-width Hero Studio, slide strip, element inspector, timeline, desktop and mobile previews, and three-slide homepage rendered successfully. The browser reported no console errors. The lab URL remains internal to testing.

## Availability

This public repository contains a case study and static HTML previews. The installable WordPress theme and PHP source are maintained in a separate private repository. Contact [Joseph Edwards](https://github.com/RawPowered) for access and terms.

The solar photographs are generic commercial stock. The previews contain no production database, credentials, submissions, or client uploads. Contact actions in the HTML preview do not submit information.
