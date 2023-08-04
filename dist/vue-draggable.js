(()=>{var u=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var a=u((y,n)=>{function d(e){let t=0,s;e=e||{};let i=e.data?e.data:function(){},l=e.mounted?e.mounted:function(){},g=e.unmounted?e.unmounted:function(){};return i.css||(i.css=""),e.data=function(){let o=this;return i.bind(o)()},e.mounted=function(){let o=this;l.bind(o)(),t++,s||(s=document.createElement("style"),document.body.appendChild(s),s.innerHTML=o.css)},e.unmounted=function(){let o=this;g.bind(o)(),t--,t<1&&(document.body.removeChild(s),s=null)},e}typeof n<"u"&&(n.exports=d);typeof window<"u"&&(window.createVueComponentWithCSS=d)});var b=u((w,r)=>{var h=`
  .vue-draggable {
    cursor: default;
  }

  .vue-draggable.has-grab-cursor {
    cursor: grab;
  }

  .vue-draggable.has-grab-cursor.is-being-dragged {
    cursor: grabbing;
  }
`,c=`
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
`,m=a(),f=m({name:"x-draggable",template:c,emits:["drag-start","drag-move","drag-end"],props:{"is-locked":{type:Boolean,required:!1,default:()=>!1},x:{type:Number,required:!1,default:()=>0},y:{type:Number,required:!1,default:()=>0}},data(){return{css:h,isBeingDragged:!1,mouseButtonIsDown:!1,offset:{x:0,y:0}}},watch:{x(){this.$refs.root.style.position="absolute",this.$refs.root.style.left=this.x+"px"},y(){this.$refs.root.style.position="absolute",this.$refs.root.style.top=this.y+"px"}},methods:{onMouseDown(e){if(this.isLocked)return;let t=this.$refs.root.getBoundingClientRect();this.mouseButtonIsDown=!0,this.offset.x=e.clientX-t.x,this.offset.y=e.clientY-t.y},onMouseMove(e){if(!this.isLocked&&(this.mouseButtonIsDown&&!this.isBeingDragged&&(this.$emit("drag-start"),this.isBeingDragged=!0),this.isBeingDragged)){this.$emit("drag-move");let t=this.$refs.root.parentElement.getBoundingClientRect();this.$refs.root.style.position="absolute",this.$refs.root.style.left=e.clientX-this.offset.x-t.x+"px",this.$refs.root.style.top=e.clientY-this.offset.y-t.y+"px"}},onMouseUp(){this.isLocked||(this.$emit("drag-end"),this.mouseButtonIsDown=!1,this.isBeingDragged=!1)}},mounted(){this.isLocked||(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),this.$refs.root.style.position="absolute")},unmounted(){this.isLocked||(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp))}});typeof r<"u"&&(r.exports=f);typeof globalThis<"u"&&(globalThis.DraggableComponent=f)});b();})();
