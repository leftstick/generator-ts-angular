## What does `Use html5 mode` mean while generating ##

Well, once you choose `Yes` for `Use html5 mode`, I am going to use:

```javascript
$locationProvider.html5Mode({
    enabled: true,
    requireBase: true
});
```

in `ts/fw/config/RouterConfig.ts` for the application. Otherwise, i am going to use:

```javascript
$locationProvider.html5Mode(false);
```

In case you may have no idea what this `html5Mode` method is, let me explain in short, once `html5Mode(false)` the frontend route is parsed with `#/` in URL, and without `#/` in URL if `$locationProvider.html5Mode({ enabled: true, requireBase: true });`.

For more information: "Hashbang and HTML5 Modes" chapter at [read more](https://docs.angularjs.org/guide/$location)


## How to involve external library ##

```bash
npm install --save <external library>
```

Open `ts/fw/ext/main.ts`, `import` it, and append the module name to `export` array if provided.

## Why Dependency Injection looks so weird in this skeleton ##

This is because [ng-annotate](https://github.com/olov/ng-annotate) is chosen for for providing quick DI.

## How to add new route ##

You will find a `Routes.ts` in each "feature" folder, it's an `Array` to be exported, and each `object` in it is used to describe a `Route`.

You can easily append more to an exist `feature`, or add a new `feature` with route.

## Why `main.ts` exist in each folder ##

The `main.ts` in each folder takes the responsibility for managing all modules in that folder, according to such concept, it's more robust to extend functionality without modifying other features.

## How to use jquery ##

```bash
npm install --save jquery
```

If you'd like to add [jquery](http://jquery.com/) as replacement of `jqLite`, you have to modify the `webpack.config.dev.js` and `webpack.config.prod.js` with following plugin added:

```javascript
new webpack.ProvidePlugin({
    $: 'jquery',
    'window.jQuery': 'jquery'
})
```

>This is because `AngularJS` internally check if `window.jQuery` provided


## References ##

1. [yeoman](http://yeoman.io/)
2. [webpack](http://webpack.github.io/)
3. [typescript](http://www.typescriptlang.org/)
4. [angular](https://angularjs.org/)
