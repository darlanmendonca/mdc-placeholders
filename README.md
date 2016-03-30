# Material Design Colors | Placeholders

Offer all palette color of Material Design as Sass placeholders.
The advantage of use Sass placeholders, is that you will have all the official palette available, but not generating css compiled, only when you use in your Sass code.

<img src="http://www.freetemplatesonline.com/wp-content/uploads/2015/08/Color-Style-Google-design-guidelines.png" width='100%' alt="Preview Material Design Colors">

Use Sass @extend to extend palette colors, and shaders, to background or text color. Examples:

Code below, extend as background color, the palette blue, and all shaders, to a class called .mdc-background-primary.

```sass
.mdc-background-primary {
  @extend %mdc-background-blue;
}
```

Resulting in css compiled

```css
.mdc-background-primary {
  background: #2196F3;
  color: 
}

.mdc-background-primary.mdc-50 {
  background: #E3F2FD;
}
/* and continue to .mdc-100, .mdc-200, and all shaders color extended.*/
```


In your html, you just use:

```html
<div class="mdc-background-primary"></div> <!-- get the default shade of primary color setted, in this case, blue color. -->
```

And to set shades, use:

```html
<div class="mdc-background-primary mdc-700">
```

Has two placeholders to extend, %mdc-background-*, and %mdc-text-color-*, where * is the color.

```%mdc-background-*``` define background color and right text color, in contrast.

```%mdc-text-color-*``` define text color

You can too use variables directly in your Sass files, the variables that define colors are Sass maps. The name of variables is $mdc-COLOR, and each key has named of shade, i.e. color red:

```sass
$mdc-red: (
  50 : #FFEBEE,
  100: #FFCDD2,
  200: #EF9A9A,
  300: #E57373,
  400: #EF5350,
  500: #F44336,
  600: #E53935,
  700: #D32F2F,
  800: #C62828,
  900: #B71C1C,
  a100: #FF8A80,
  a200: #FF5252,
  a400: #FF1744,
  a700: #D50000
);


// to access in your sass files, use map-get(variable, shade), i.e.
.border-top {
  border: 1px solid map-get($mdc-red, 500);
}
```

See all [Material Design palette collor](https://www.google.com/design/spec/style/color.html#color-color-palette)
