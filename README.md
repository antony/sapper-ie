# Sapper IE

IE and Windows Edge barely qualify as browsers, but they are able to render HTML/CSS and execute JS, in a form. These modifications to the language help incapable browsers render websites.

## Status:

It Works!

- IE11 - Fully working
- Edge - Fully working

## Changes from default Sapper

1. Polyfils in template.html (via Polyfill.io):

* default
* fetch
* Array.prototype.find
* Object.values (not strictly necessary - but useful)

2. Non-legacy (regular build) has rest spread so that Edge works (wow)

```js
!legacy && babel({
    extensions: ['.js', '.mjs', '.html', '.svelte'],
    exclude: ['node_modules/@babel/**'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-object-rest-spread'
    ]
  }),
```

3. Special run mode to run the app via bable for easy local testing

```sh
npm run build:dev
```

## Running

Don't expect this to work in IE/Edge in dev mode.

```
npm run build # has shimport hack for easier debugging
node __sapper__/build
```
