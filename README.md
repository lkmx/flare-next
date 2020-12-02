![Flare](./flare.png)

# Flare

Flare is a design system for front-end agile development. 

Flare's paradigm helps to understand the user interface from a simple and structured standpoint, introducing an abstraction layer that shapes a common language between analysts, designers, coders and testers.

The design system implementation is focused in the separation of content, design and code; specially when combined with a static-site generator. Making it ideal for front-end agile software projects where the three aspects evolve at different pace with an impact either on quality or development time.

Currently Flare is in an early version 0.3.0 and it provides with a VueJS implementation tested in Gridsome.

## Set up

### Gridsome

Install Gridsome and create a new project using the CLI:

````bash
gridsome create flare-project
cd flare-project
````

Install **flare** using npm

````bash
npm install --save git://github.com/lkmx/flare.git#0.3.0
````

Create a file `sass/style.scss` in your `src` directory and import flare's stylesheet.

````sass
@import "~@lkmx/flare/src/flare";
````

Import flare's components into your main.js file and make sure VueJS uses it.

````javascript
import './sass/style.scss';

import Flare from '@lkmx/flare';

export default function (Vue, { router, head, isClient }) {
    // Other setup
    Vue.use(Flare);  
}

````

