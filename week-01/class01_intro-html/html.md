# HTML5
HTML is a markup language. It's job is to markup the content in a logical way. You should use HTML tags to describe the content. Doing this is often refered to as writing "semantic HTML". Writing semantic HTML is important for a number of reasons, not just because it is what you are supposed to do. Semantic HTML can improve your site's SEO(search engine optimization), and it will improve how accessible your site is. 
 
## Let's Talk about `<div>`'s

According to MDN:
> The HTML Content Division element (`<div>`) is the generic container for flow content. It has no effect on the content or layout until styled using CSS.

Basically, a `<div>` is just a generic container for you to drop content in. It doesn't actually do anything and it doesn't have any meaning (semantically). While there is nothing technically wrong with using `<div>`'s there are often better options. 

## HTML5 Semantic Layouts

HTML5 introduced several new semantic layout elements to help. For example: Your whole page probably has a header. The header area probably has your site title, a logo, and a main navigation element. You should wrap all of those parts in a `<header></header>` tag. This helps the browser find important information about your page. 

You can also use the `<main></main>` tag to wrap all the main content of your page. This is handy for helping assistive technology to jump to the important content instead of getting stuck in a sidebar or other non-main content. 

Many of the semantic layout elements such as `<header>`, `<footer>`, `<main>`, `<aside>`, `<section>`, and `<article>` don't actually change the visual appearance of the page. You will use CSS to visually adapt the layout of the page.

A common pattern for your HTML might look something like this:
```html
<header>
    <h1>Title</h1>
    <h2>Subtitle</h2>
    <nav>[links here]</nav>
</header>
<main>
    <header>
        <h2>Title</h2>
        <p>Author info</p>
    </header>
    [content]
</main>
<aside>
    [side content like more links, or maybe some general information]
</aside>
<footer>
    <nav>[more links]</nav>
    [copyright]
</footer>
```
Which might be used to create a page like this:
```
 ____________
|   header   |
|____________|
|  main  | a |
|        | s |
|        | i |
|        | d |
|        | e |
|________|___|
|   footer   |
|____________|
```

You can read more about semantic elements on [w3schools: HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp) or go more indepth on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
