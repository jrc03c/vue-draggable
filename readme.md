# Intro

A draggable component for Vue apps.

# To-dos & known issues

- There's a significant bug in the current build that screws up mouse interactions for some (but not all) descendant elements of a draggable component.

# Installation

```bash
npm install --save @jrc03c/vue-draggable
```

# Usage

```js
const { createApp } = require("vue")
const VueDraggableComponent = require("@jrc03c/vue-draggable")

const app = createApp({
  components: {
    "x-draggable": VueDraggableComponent,
  },

  template: `
    <x-draggable>
      This is draggable!
    </x-draggable>
  `,
})

app.mount(...)
```

# API

## Props

### `is-locked`

A boolean indicating whether or not the element is locked in position.

### `x`

A number representing the x-position of the element. Can be used to set the position of the element programmatically instead of by dragging the element.

### `y`

A number representing the y-position of the element. Can be used to set the position of the element programmatically instead of by dragging the element.

## Events

### `drag-start`

Is emitted when dragging starts.

### `drag-move`

Is emitted when dragging continues (i.e., when the mouse moves again while dragging the element).

### `drag-end`

Is emitted when dragging stops.
