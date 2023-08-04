// -----------------------------------------------------------------------------
// CSS
// -----------------------------------------------------------------------------

const css = /* css */ `
  .vue-draggable {
    cursor: default;
  }

  .vue-draggable.has-grab-cursor {
    cursor: grab;
  }

  .vue-draggable.has-grab-cursor.is-being-dragged {
    cursor: grabbing;
  }
`

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------

const template = /* html */ `
  <div
    :class="{
      'has-grab-cursor': !isLocked,
      'is-being-dragged': isBeingDragged,
    }"
    @mousedown.prevent.stop="onMouseDown"
    class="vue-draggable"
    ref="root">
    <slot></slot>
  </div>
`

// -----------------------------------------------------------------------------
// JS
// -----------------------------------------------------------------------------

const createVueComponentWithCSS = require("@jrc03c/vue-component-with-css")

const DraggableComponent = createVueComponentWithCSS({
  name: "x-draggable",
  template,

  props: {
    "custom-classes": {
      type: String,
      required: false,
      default: () => "",
    },

    "is-locked": {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },

  data() {
    return {
      css,
      isBeingDragged: false,
      offset: { x: 0, y: 0 },
    }
  },

  methods: {
    onMouseDown(event) {
      if (this.isLocked) return
      const rect = this.$refs.root.getBoundingClientRect()
      this.isBeingDragged = true
      this.offset.x = event.clientX - rect.x
      this.offset.y = event.clientY - rect.y
    },

    onMouseMove(event) {
      if (this.isLocked) return

      if (this.isBeingDragged) {
        const parentRect = this.$refs.root.parentElement.getBoundingClientRect()
        this.$refs.root.style.position = "absolute"

        this.$refs.root.style.left =
          event.clientX - this.offset.x - parentRect.x + "px"

        this.$refs.root.style.top =
          event.clientY - this.offset.y - parentRect.y + "px"
      }
    },

    onMouseUp() {
      if (this.isLocked) return
      this.isBeingDragged = false
    },
  },

  mounted() {
    if (this.isLocked) return
    window.addEventListener("mousemove", this.onMouseMove)
    window.addEventListener("mouseup", this.onMouseUp)
    this.$refs.root.style.position = "absolute"
  },

  unmounted() {
    if (this.isLocked) return
    window.removeEventListener("mousemove", this.onMouseMove)
    window.removeEventListener("mouseup", this.onMouseUp)
  },
})

if (typeof module !== "undefined") {
  module.exports = DraggableComponent
}

if (typeof globalThis !== "undefined") {
  globalThis.DraggableComponent = DraggableComponent
}
