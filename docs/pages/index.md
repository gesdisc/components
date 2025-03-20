---
meta:
    title: 'Terra UI Components: A collection of web components for working with Earthdata services.'
    description: Hand-crafted Earthdata custom elements.
toc: false
---

<div class="splash">
<div class="splash-start">
  <div class="text-logo">Terra UI Components</div>

  A set of Earth Data components that work everywhere! Built with browser standards at their core, these easy-to-use elements work seamlessly with any framework — React, Vue, Angular, or whatever you prefer.

  Working in Jupyter Notebooks? These components shine there too! Visualize your data without the headache of integrating multiple systems just to access the data or create the visualization you need.

  No complicated setup — just drop them in and start exploring Earth Data right away!

</div>
</div>

## Quick Start

Add the following code to your page.

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nasa-terra/components@%VERSION%/%CDNDIR%/themes/horizon.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@nasa-terra/components@%VERSION%/%CDNDIR%/terra-ui-components-autoloader.js"></script>
```

Now you have access to all of the Terra UI Components! Try adding a button:

```html:preview:expanded:no-codepen
<terra-button>Click me</terra-button>
```

:::tip
This will activate Terra UI Components autoloader, which registers components on the fly as you use them. To learn more about it, or for other ways to install Terra UI Components, refer to the [installation instructions](getting-started/installation).
:::

## What are Web Components?

Web Components are different from framework components – they're built using [native browser standards](https://developer.mozilla.org/en-US/docs/Web/Web_Components) rather than framework-specific code. This means they work directly in the browser without any additional libraries or frameworks needed. Unlike React or Vue components that require their respective ecosystems, Web Components are framework-agnostic by nature.

When you use Terra UI Components, you're using elements that run natively in modern browsers. They encapsulate their styles and behavior, so they won't clash with your existing code. This makes them perfect for projects that might need to migrate between frameworks or for organizations where different teams use different technologies.
