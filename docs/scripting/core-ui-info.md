---
layout: page
title: Core UI | Info
parent: Scripting
badge: INTERNAL
badge_color: red
---

## Information

### What is Core UI?

Core UI is a new UI and design system Mojang is building to replace JSON UI on bedrock, and to carry to other platforms. A talk given by a Mojang developer about this can be found [here](https://www.youtube.com/watch?v=qDevZETe8OE), though it is a little old.

### Tech Stack & Integration

_Notes on how CoreUI works, and how it interacts with things_

#### General:

-   Core UI is built using web technologies, and all Core UI components are built in **[ReactJS](https://reactjs.org/)**
-   Core UI is organized into "components". A component is basic, generally resuable piece of functionality, such as a modal, button, or textbox. Components can also be composed together to form more specialized components, and build up entire screens of the user interface

#### Bedrock Engine:

**Architecture**

-   In Minecraft Bedrock, Core UI components and pages are rendered using **[Coherent Labs Gameface](https://coherent-labs.com/products/coherent-gameface/)**
-   The UI passes data and requests functionality via a system of **facets** and **feature flags**. Facets are a concept common to all forms of scripting integration in the Bedrock engine, and can be found in the Scripting API and Gametests as well. a Facet and Feature Flag list for Core UI is available [here](./core-ui-facets.md)
-   Javascript written for Core UI should be able to target the ES6 Standard.
    ::: warning
    Gameface does not have complete parity with the feature sets found in a browser.
    For HTML, refer to:

    -   [HTML Tags](https://coherent-labs.com/Documentation/cpp-gameface/d7/dd9/html_elements.html)

    For JS, refer to:

    -   [JS DOM Events](https://coherent-labs.com/Documentation/cpp-gameface/d8/d37/js_events.html)

    For CSS, refer to:

    -   [CSS properties](https://coherent-labs.com/Documentation/cpp-gameface/df/d2c/css_props.html)
    -   [CSS selectors](https://coherent-labs.com/Documentation/cpp-gameface/dd/d76/css_selectors.html)

**Properties**

-   the `window.__bedrockProvidedCohtmljs` property is a boolean property which determines
-   Facets appear to be registered via the `window.engine` object, which Gameface makes available. Documentation on this object can be found [here](https://coherent-labs.com/Documentation/cpp-gameface/df/d01/javascript_virtual_machine.html). the `engine.on()` and `engine.off()` functions are the points of interest here.

**File Structure**

-   Core UI files are currently stored at `data/gui/dist/hbui`. This means that in order to tinker with Core UI on Windows, which is the preffered platform to work with it, you'll need to have dumped the game using a tool like UWPDumper, or be using a version launcher which unpacks the files for you, such as [MCMrArm's](https://github.com/MCMrARM/mc-w10-version-launcher).

-   in that folder, the files are used as follows:

```
data/gui/dist/hbui
 | COMMITHASH - this file has the commit hash of this particular UI version. the first 5 characters of this hash are referenced below as <HASH>
 | VERSION - the internal Core UI version. Serves no purpose currently, as there are no corresponding official changelogs or documentation
 | en_US.lang - this file holds language translation key/value pairs for any language translation keys used in the UI.
 | routes.json - this file holds all the different pages, or "routes" that are available. Ex. the main achievements list is one route (/achievements/).
 | sound_definitions.json - this file holds all the sounds that the UI can trigger via the sounds facet.
 | index.html - the main file loaded by Gameface whenever a Core UI page is loaded.
 | index-<HASH>.js - the main javascript file. This is where all the logic for each Core UI route defined in routes.json is held.
 | index-<HASH>.css - the styling for Core UI for left-to-right languages.
 | index-<HASH>.rtl.css - the styling fore Core UI for right-to-left languages.
 | assets - this folder holds all the sound and image assets for the UI
 | fonts - this folder holds all the fonts referenced by the styling
```

-   **note:** you don't have to restrict yourself to just the one index.html and JS file. You can create relative links to other HTML files from your main UI, depending on how you'd like to organize.

**Misc. notes**

-   On routes: Bedrock appears to have the capacity to make parts of the internal scene stack router available, to allow Core UI pages to redirect to pages using JSON UI. Currently only one such route exists: `/persona/<piece ID>`, where `<piece ID>` is the internal UUID of the persona item.
