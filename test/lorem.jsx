const text = `# Feature highlights..占位文字

*   [x] **[safe][section-security] by default**
    (no \`dangerouslySetInnerHTML\` or XSS attacks)
*   [x] **[components][section-components]**
    (pass your own component to use instead of \`<h2>\` for \`## hi\`)
*   [x] **[plugins][section-plugins]**
    (many plugins you can pick and choose from)
*   [x] **[compliant][section-syntax]**
    (100% to CommonMark, 100% to GFM with a plugin)

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [\`Markdown\`](#markdown)
    *   [\`defaultUrlTransform(url)\`](#defaulturltransformurl)
    *   [\`AllowElement\`](#allowelement)
    *   [\`Components\`](#components)
    *   [\`ExtraProps\`](#extraprops)
    *   [\`Options\`](#options)
    *   [\`UrlTransform\`](#urltransform)

## What is this?

This package is a [React][] component that can be given a string of markdown
that it’ll safely render to React elements.
You can pass plugins to change how markdown is transformed and pass components
that will be used instead of normal HTML elements.

*   to learn markdown, see this [cheatsheet and tutorial][commonmark-help]
*   to try out \`react-markdown\`, see [our demo][demo]

\`js\`

\`\`\`c
#include <stdio.h>
\`\`\`


## When should I use this?

There are other ways to use markdown in React out there so why use this one?
The three main reasons are that they often rely on \`dangerouslySetInnerHTML\`,
have bugs with how they handle markdown, or don’t let you swap elements for
components.
\`react-markdown\` builds a virtual DOM, so React only replaces what changed,
from a syntax tree.
That’s supported because we use [unified][], specifically [remark][] for
markdown and [rehype][] for HTML, which are popular tools to transform content
with plugins.

$$x^2+1=5$$
`

export default text;