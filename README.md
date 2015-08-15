# tetris

A reagent application to play Tetris.

See demo below.

<iframe width="270" height="600" src="https://dl.dropboxusercontent.com/u/8353494/reagent-tetris/index.html" frameborder="0" allowfullscreen></iframe>

## Development Mode

```
lein clean
lein figwheel
```

[Figwheel](https://github.com/bhauman/lein-figwheel) will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build

```
lein clean
lein cljsbuild once min
```
