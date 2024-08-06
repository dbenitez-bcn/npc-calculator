# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm i
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Testing

Execute entire test suit

```bash
npm run test
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Create new icon
- First create a new vue componen and add the svg code inside template tag
``` html
<!-- myIcon.vue -->
<template>
    <svg style="width: 100%; height: 100%;">
        <path d="M7,10L12,15L17,10H7Z"></path>
    </svg>
</template>
```
- Then import it and add it to the custom set
``` typescript 
// custom.ts
import myIcon from "myIcon.vue";

export const customAliases = {
    // ...
    myIcon
};
```
- The use it
``` html
<!-- myIcon.vue -->
<template>
    <v-icon icon="$myIcon" />
</template>
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
