---
meta:
    title: Installation
    description: Choose the installation method that works best for you.
---

# Installation

You can load Terra UI Components via CDN or by installing it locally. If you're using a framework, make sure to check out the sections for [Jupyter Notebooks](#jupyter), [React](#react), [Vue](#vue), and [Angular](#angular) for additional information.

## CDN Installation (Easiest)

### Autoloader

The autoloader is the easiest and most efficient way to use Terra UI Components. A lightweight script watches the DOM for unregistered  components and lazy loads them for you — even if they're added dynamically.

While convenient, autoloading may lead to a [Flash of Undefined Custom Elements](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/). The linked article describes some ways to alleviate it.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nasa-terra/components@%VERSION%/%CDNDIR%/themes/horizon.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@nasa-terra/components@%VERSION%/%CDNDIR%/terra-ui-components-autoloader.js"></script>
```

### Traditional

The traditional CDN loader registers all components up front. Note that, if you're only using a handful of components, it will be much more efficient to stick with the autoloader. However, you can also [cherry pick](#cherry-picking) components if you want to load specific ones up front.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nasa-terra/components@%VERSION%/%CDNDIR%/themes/horizon.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@nasa-terra/components@%VERSION%/%CDNDIR%/terra-ui-components.js" ></script>
```

## NPM installation

If you don't want to use the CDN, you can install Terra UI Components from npm with the following command.

```bash
npm install @nasa-terra/components
```

## Cherry Picking

Cherry picking can be done from [the CDN](#cdn-installation-easiest) or from [npm](#npm-installation). This approach will load only the components you need up front, while limiting the number of files the browser has to download. The disadvantage is that you need to import each individual component.

Here's an example that loads only the button component. Again, if you're not using a module resolver, you'll need to adjust the path to point to the folder Terra UI is in.

```html
<link rel="stylesheet" href="/path/to/terra-ui-components/%NPMDIR%/themes/horizon.css" />

<script type="module" data-terra-ui-components="/path/to/terra-ui-components/%NPMDIR%">
    import '@nasa-terra/components/%NPMDIR%/components/button/button.js'

    // <terra-button> is ready to use!
</script>
```

## Jupyter

We offer a Jupyter widget version of every component to ensure you can not only render components in Jupyter Notebooks, but also communicate back and forth from the other cells in your notebook. This makes the components an easy, drop-in part of your notebooks!

### Installation

You can use the widgets by installing via pip: `pip install terra-ui-components`

## React

We offer a React version of every component to provide an idiomatic experience for React users. You can easily toggle between HTML and React examples throughout the documentation.

### Installation

To add Terra UI Components to your React app, install the package from npm.

```bash
npm install @nasa-terra/components
```

Next, include the Horizon Design System theme and set the base path for icons and other assets.

```jsx
// App.jsx
import '@nasa-terra/components/%NPMDIR%/themes/horizon.css'
import { setBasePath } from '@nasa-terra/components/%NPMDIR%/utilities/base-path'

setBasePath('https://cdn.jsdelivr.net/npm/@nasa-terra/components@%VERSION%/%CDNDIR%/')
```

:::tip
If you'd rather not use the CDN for assets, you can create a [build task](https://webpack.js.org/plugins/copy-webpack-plugin/) that copies `node_modules/@nasa-terra/components/%NPMDIR%/assets` into your app's `public` directory. Then you can point the base path to that folder instead.
:::

## Angular

Angular [plays nice](https://custom-elements-everywhere.com/#angular) with custom elements, so you can use Terra UI Components in your Angular apps with ease.

### Installation

The documentation page is a work in progress, come back soon for instructions on integrating with Angular, or please let us know and we can prioritize adding this section.

## Vue

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use Terra UI Components in your Vue apps with ease.

### Installation

The documentation page is a work in progress, come back soon for instructions on integrating with Vue, or please let us know and we can prioritize adding this section.