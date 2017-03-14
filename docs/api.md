## What does `Use html5 mode` mean while generating ##

Well, once you choose `Yes` for `Use html5 mode`, I am going to use:

```javascript
$locationProvider.html5Mode({
    enabled: true,
    requireBase: true
});
```

in `ts/core/configurations/route.ts` for the application. Otherwise, i am going to use:

```javascript
$locationProvider.html5Mode(false);
```

In case you may have no idea what this is about, let me explain in short, once `html5Mode(false)` is set, the frontend route is parsed with `#/` in URL, otherwise no `#/` in URL(requires specifical backend support).

For more information: "Hashbang and HTML5 Modes" chapter at [read more](https://docs.angularjs.org/guide/$location)


## How to involve external library ##

```bash
npm install --save <external library>
```

Open `ts/core/externals/index.ts`, `import` it, and append the module name to `export` array if the external library is an `angular` module.

## Why Dependency Injection looks so weird in this skeleton ##

This is because [ng-annotate](https://github.com/olov/ng-annotate) is chosen for for providing quick DI.

## How to add new route ##

You will find a `route.ts` in each "feature" folder, it's an `Array` of `IRoute`.

You can easily append more to an exist `feature`, or add a new `feature` with route.

## Why `index.ts` exist in each folder ##

The `index.ts` in each folder takes the responsibility for managing all modules in that folder, according to such concept, it's more robust to extend functionality without modifying other parts.

## How to use jquery ##

```bash
npm install --save jquery
```

If you'd like to add [jquery](http://jquery.com/) as replacement of `jqLite`, you have to modify the `webpack.config.common.js` with following plugin added:

```javascript
new webpack.ProvidePlugin({
    $: 'jquery',
    'window.jQuery': 'jquery'
})
```

>This is because `AngularJS` internally check if `window.jQuery` provided


## References ##

1. [yeoman](http://yeoman.io/)
2. [webpack](https://webpack.js.org/)
3. [typescript](http://www.typescriptlang.org/)
4. [angular](https://angularjs.org/)
