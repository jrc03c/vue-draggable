(()=>{var u=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var a=u((y,n)=>{function d(e){let t=0,s;e=e||{};let i=e.data?e.data:function(){},l=e.mounted?e.mounted:function(){},g=e.unmounted?e.unmounted:function(){};return i.css||(i.css=""),e.data=function(){let o=this;return i.bind(o)()},e.mounted=function(){let o=this;l.bind(o)(),t++,s||(s=document.createElement("style"),document.body.appendChild(s),s.innerHTML=o.css)},e.unmounted=function(){let o=this;g.bind(o)(),t--,t<1&&(document.body.removeChild(s),s=null)},e}typeof n<"u"&&(n.exports=d);typeof window<"u"&&(window.createVueComponentWithCSS=d)});var m=u((v,r)=>{var c=`
  .vue-draggable {
    cursor: default;
  }

  .vue-draggable.has-grab-cursor {
    cursor: grab;
  }

  .vue-draggable.has-grab-cursor.is-being-dragged {
    cursor: grabbing;
  }
`,h=`
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
`,b=a(),f=b({name:"x-draggable",template:h,props:{"custom-classes":{type:String,required:!1,default:()=>""},"is-locked":{type:Boolean,required:!1,default:()=>!1}},data(){return{css:c,isBeingDragged:!1,offset:{x:0,y:0}}},methods:{onMouseDown(e){if(this.isLocked)return;let t=this.$refs.root.getBoundingClientRect();this.isBeingDragged=!0,this.offset.x=e.clientX-t.x,this.offset.y=e.clientY-t.y},onMouseMove(e){if(!this.isLocked&&this.isBeingDragged){let t=this.$refs.root.parentElement.getBoundingClientRect();this.$refs.root.style.position="absolute",this.$refs.root.style.left=e.clientX-this.offset.x-t.x+"px",this.$refs.root.style.top=e.clientY-this.offset.y-t.y+"px"}},onMouseUp(){this.isLocked||(this.isBeingDragged=!1)}},mounted(){this.isLocked||(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),this.$refs.root.style.position="absolute")},unmounted(){this.isLocked||(window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp))}});typeof r<"u"&&(r.exports=f);typeof globalThis<"u"&&(globalThis.DraggableComponent=f)});m();})();
