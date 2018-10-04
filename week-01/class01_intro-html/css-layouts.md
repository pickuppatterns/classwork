# CSS for layouts
Now that you have your document all marked up, you are ready to start creating a visual layout. There are numerous ways to create layouts with CSS and you will be introduced to many of the popular ones as your progress here. We will be starting with one of the more basic layout methods.

## Floats
Floats are not technically meant to be used for full page layout, but for a long time it was the only tool we had, so we had to make it work. 

Floats work by "floating" elements next to each other. So if you want to have two columns of equal width next to each other on your page, you could float them both to the left. This would bring them next to each other. Your CSS might look something like this:
```css
.column {
    width: 50%;
    float: left;
}
```

There are definitely a handful of "gotchas!" in this method that you will need to keep an eye out for. 

## Clearfix

Often when working with floats you will hear about the "clearfix hack". This is a way to clear elements after the floated elements so that they don't move up into spaces you didn't intend for them to invade. Take a look at [this article from css-tricks](https://css-tricks.com/all-about-floats/) to get an idea of how to use a clearfix, and a lot of good information on using floats in general.

## Using Media Queries for Responsive Web Design

Media queries are probably the most common way of creating responsive pages. Media queries are a way of writing different CSS for different situations. You are able to target different media types (`all`, `print`, `screen`, `speech`), as well as different features such as `width`, or `orientation` of the device. [More media features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features).
