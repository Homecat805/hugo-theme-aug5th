---
title: "Markdown Syntax - Lists and Code Blocks"
date: 2023-07-20T05:16:58Z
draft: false
author: "Homecat"
categories: "Hugo Theme"
tags: ["Markdown"]
thumbnail: "https://pic.imgdb.cn/item/6455e0c10d2dde5777849ac7.jpg"
headline: true
---

Markdown is a lightweight markup language used to add formatting elements to plain text documents. This article shows the syntax and effect of lists、code and code blocks in hugo theme Aug5th.

<!--more--> 



## Lists

### Ordered Lists

Syntax

```
1. First item
2. Second item
3. Third item
4. Fourth item 
```

1. First item
2. Second item
3. Third item
4. Fourth item 

### Unordered Lists

Syntax

```
- First item
- Second item
- Third item
- Fourth item 
```

- First item
- Second item
- Third item
- Fourth item 

### Nested Lists

Syntax

```
1. First item
    - First item
    - Second item
    - Third item
2. Second item
    - First item
    - Second item
3. Third item
    - First item
    - Second item
```

1. First item
    - First item
    - Second item
    - Third item
2. Second item
    - First item
    - Second item
3. Third item
    - First item
    - Second item



## Code

Syntax

```
Shortcodes have access to parameters delimited in the shortcode declaration via `.Get`, page- and site-level variables, and also the following shortcode-specific fields.
```

Shortcodes have access to parameters delimited in the shortcode declaration via `.Get`, page- and site-level variables, and also the following shortcode-specific fields.

## Code Blocks

### Normal

Syntax  

~~~
```
<!doctype html> 
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Example HTML5 Document Example</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```
~~~

```
<!doctype html> 
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Example HTML5 Document Example</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

### HTML

Syntax  

~~~
```html
<!doctype html> 
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Example HTML5 Document Example</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```
~~~

```html
<!doctype html> 
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Example HTML5 Document Example</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```
### JAVASCRIPT

Syntax  

~~~
```js
$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('#totoc').fadeIn(250);
    }else {
        $('#totoc').fadeOut(250);
    };
});
```
~~~

```js
$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('#totoc').fadeIn(250);
    }else{
        $('#totoc').fadeOut(250);
    };
});
```



