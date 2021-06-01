---
layout: page
title: CoreUI | Components
parent: Scripting
badge: INTERNAL
badge_color: red
---

::: tip
In the below examples, `document.createElement()` is used for clarity. In actual minified Core UI files, this is typically `a.a.createElement()`.

Additionally, all code samples assume component name deobfuscation. The names used come from the WIP [Core UI Remapper]() tool.
:::

## Button

### Parameters

-   `variant`: Controls the look and style of the button. Available options are `primary`,`secondary`,`destructive`,`default`, and `accordion`
    -   **note:** Funnily enough, `default` isn't actually the default style of the button. If the parameter is not supplied, the button will be a `secondary` button
-   `delayedclick`: Currently Unknown, needs testing.
-   `onClick`: a lamba or function which will be executed when the button is clicked.
-   `gamepadIndex`: Currently Unknown, needs testing
-   `autofocus`: needs testing to verify effects
-   `inputLegend`: the text supplied here shows up when you add an `InputLegend` component to your route.
-   `soundEffectPressed`: a sound from `sound_definitions.json` which will play when the button is pressed

### Code Sample

```js
document.createElement(
	button,
	{
		delayedClick: true,
		onClick: () => {},
		gamepadIndex: 0,
		autofocus: true,
		inputLegend: 'inputlegendtext',
		variant: 'primary',
		soundEffectPressed: 'random.click',
	},
	'Primary Button'
)
```

## Text

### Parameters

-   `variant`: the text sizing and styling. Available options are `header1`,`header2`,`header3`,`header4A`,`header4B`,`header5A`,`header5B`,`subtitle1`,`subtitle2`,`body`,`paragraphs`,`captionShort`,`captionLong`,`primaryButton`, and`secondaryButton`
    -   **note:** if not provided, will default to `paragraphs`
-   `color`: the text color. Available options are `white`,`grey`,`black`,`red`,`green`,`yellow`, and `darkGrey`
-   `verticalAlign`: Currently Unknown, needs testing
-   `shadow`: boolean value, determines if the text has a shadow
-   `tag`: Currently Unknown, needs testing
-   `children`: Other elements can be supplied here to nest into the text
-   `align`: needs testing to verify effects

### Code Sample

```js
document.createElement(
	text,
	{ variant: 'header4A', color: 'white' },
	'Hello Webtech World!'
)
```

## Modal

### Parameters

-   `buttonArray`
-   `animationOrigin`
-   `content`
-   `title`
-   `version`: appears to have no effeect
-   `icon`
-   `isHidden`
-   `onClose`
-   `showCopyright`: appears to have no effect
-   `showVersion`: appeears to have no effect

### Code Sample

```js
document.createElement(Modal, { content: 'Hello Modal!' }, '')
```

## AchievementListItem
