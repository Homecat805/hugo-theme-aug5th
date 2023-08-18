---
title: "Shortcodes Syntax"
date: 2023-04-26T06:04:57Z
draft: false
author: "Homecat"
categories: "Hugo THeme"
tags: ["Hugo","Shortcodes"]
thumbnail: ""
headline: true

---

Shortcodes are simple snippets inside your content files calling built-in or custom templates. They are created to circumvent the limitations of Markdown Syntax.

<!--more--> 


## Carousel

Carousel is a useful shortcode in this hugo theme, Used to display multiple images with their information.

### Syntax

```
{{</* carousel src="carousel_sample" */>}}
```

{{< carousel src="carousel_sample" >}}

### Data

Shortcode carousel extracts data file from the built-in directory **data**, here is an example of a data file.

```
{
    "total": "4",
    "cover": "https://pic.imgdb.cn/item/641d1f1ea682492fcc264d90.jpg",
    "item": [
        { 
            "id": "1",
            "title": "Liberary of Shanghai Jiaotong University", 
            "description": "The old library was completed in October 1919. It has both the Romanesque Corinthian order style and the detailed sculpture and contrast color of Baroque architecture. When I was studying in school, this was a library for social sciences, and now it is used as an exhibition hall and archives for school history.",
            "url": "https://pic.imgdb.cn/item/63b953ccbe43e0d30e1de2c2.jpg",
            "memo": "Write something",
            "author": "Homecat"
        },
        { 
            "id": "2",
            "title": "Aida", 
            "description": "Aida’s Synopsis. Split into four acts, Verdi’s Aida opera is a story of heartbreak and betrayal. Set in the midst of a war between Egypt and Ethiopia, this moving and timelessly tragic love story centres on the ill-fated and forbidden romance of Aida and Radamès. In Aida, Verdi created rich and captivating characters.",
            "url": "https://pic2.imgdb.cn/item/6449ffcd0d2dde57774972e1.jpg",
            "memo": "Write something",
            "author": "Homecat"
        },
        { 
            "id": "3",
            "title": "South Padre Island, Texas, USA", 
            "description": "South Padre Island is located a few miles off the coast of the Gulf of Mexico in Texas and is the largest and longest barrier island in the state. Barrier islands like South Padre Island are usually parallel to the coast and serve as the first line of defense for the continent against storms. South Padre Island is connected to the mainland through a bridge, and every year thousands of tourists come to the island to swim, row, fish, fly kites, or lie comfortably on the beach basking in the sun. In addition, there are various exquisite sand castles distributed on the island, which are eye-catching and created by artists from around the world.",
            "url": "https://pic2.imgdb.cn/item/6449ffcd0d2dde577749726b.jpg",
            "memo": "Write something",
            "author": "Jeff R Clow / Getty Images"
        },
        { 
            "id": "4",
            "title": "Walden", 
            "description": "Walden is the record of the American writer Thoreau who lived alone on the bank of Walden Lake, describing what he saw, heard and thought for more than two years. The book advocates simple life, loves the scenery of nature, has rich content, profound significance, and vivid language.",
            "url": "https://pic2.imgdb.cn/item/644a02920d2dde57774cdda4.jpg",
            "memo": "Write something",
            "author": "birderslibrary.com"
        }
    ]
 }
```

## Figure

Syntax

```golang
{{</* figure 
    src="https://pic.imgdb.cn/item/63beb6b5be43e0d30e3aa660.jpg" 
    title="Description of image."
    author="Author" 
*/>}}
```

{{<figure 
    src="https://pic.imgdb.cn/item/63beb6b5be43e0d30e3aa660.jpg" 
    title="Description of image."
    author="Homecat" 
>}}


## Screen

Syntax

```
{{</* screen */>}}
Change detected, rebuilding site.<br>
2023-04-27 01:44:58.285 +0000<br>
Source changed WRITE "/src/tester/content/blog/shortcodes-syntax.en.md"<br>
Total in 48 ms
{{</* /screen */>}}
```

{{< screen >}}
Change detected, rebuilding site.<br>
2023-04-27 01:44:58.285 +0000<br>
Source changed WRITE "/src/tester/content/blog/shortcodes-syntax.en.md"<br>
Total in 48 ms
{{< /screen >}}

