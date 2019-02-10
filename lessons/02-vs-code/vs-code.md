---
title: VS Code
path: '/visual-studio-code'
description: 'Using and customizing Visual Studio Code'
---

# VS Code

[Visual Studio Code](vs-code) (VS Code) is a editor built to suit the needs of web developers. We'll learn about how to use the features provided by it and customizing it to make our web development easier.

However, many features we learning here doesn't applies to VS Code only, but works with other editor as well (you may need to configure manually). So rest assured that what you'll learn today will help you in your coding exercise, even though you don't use VS Code.

## Creating Document

In this section, we'll going to talk about how to create document with VS Code.

### Markdown

Markdown is a markup language with text formatting syntax. It's the de facto markup language for developer.

- If you go to most repo in [GitHub], the bottom of the repo will display the content of the `README.md` file in the folder.
- Many form that support rich text editing also supports markup, e.g. Issue and Pull Request form in GitHub, Jira etc.
- Many tools have been built to support markdown. For instance, this website content is generated with markdown. You can see all the markdown [here][website-repo].

You can learn markdown in few minutes. Just go through this [cheatsheet][markdown-cheatsheet] and you're good to go.

A good thing about writing markdown with VS Code is that how VS Code preview markdown file works almost similar to GitHub, therefore you can edit a file locally and preview how it looks like in VS Code directly.

To edit and preview a markdown file in VS Code:

1. create a file that ends with `.md`, e.g. `my-note.md`.
1. create some content with markdown.
1. press `[Ctrl] + [Shift] + P`
1. right click the preview file tab and press "Split Right", and then you can drag it to the right panel.

### Emmet

- speed up repetitive typing with TAB
- built into VS Code
- plugins available for most editors
- using CSS selectors to generate HTML
- cursor is usually placed at where you need to typing next

**span**

```html
<span></span>
```

**span.special**

```html
<span class="special"></span>
```

**.my-class**

```html
<div class="my-class"></div>
```

**section.class-1.class-2#main-section**

```html
<section class="class-1 class-2" id="main-section"></section>
```

- just like in CSS:

| Selector | Description |
| -------- | ----------- |
| >        | children    |
| +        | sibling     |

**ul>li.item**

```html
<ul>
  <li class="item"></li>
</ul>
```

**.nav+.main-content+.footer**

```html
<div class="nav"></div>
<div class="main-content"></div>
<div class="footer"></div>
```

**ul.list>li.item\*5**

```html
<ul class="list">
  <li class="item"></li>
  <li class="item"></li>
  <li class="item"></li>
  <li class="item"></li>
  <li class="item"></li>
</ul>
```

### Exercises

1. Find from internet the emmet shortcut to generate base html5 structure
1. What would be the code for generating the following structure:
   ```html
   <div>
     <ul>
       <li></li>
       <li></li>
       <li></li>
     </ul>
   </div>
   ```
1. What would be the code for generating a table with 10 rows and 2 columns?
1. Create a code for generating the following structure:
   ```html
   <html>
     <head>
       <title></title>
     </head>
     <body></body>
   </html>
   ```

## Editing Document

### Go To

### Multi-Cursor & Line Manipulation

### Renaming

### Exercise

## Customizing VS Code

### Themes

### Code Snippets

### Exercise

> Credit: Emmet exercises adapted from [this gist](https://gist.github.com/cirops/4715058)

[vs-code]: https://code.visualstudio.com/
[github]: https://github.com/
[website-repo]: https://github.com/malcolm-kee/frontend-developer-toolbox
[markdown-cheatsheet]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
