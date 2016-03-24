# Material Design Colors | Placeholders

Offer all palette color of Material Design as Sass placeholders.
The advantage of use Sass placeholders, is that you will have all the official palette available, but not generating css compiled, only when you use in your Sass code.

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
