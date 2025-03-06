import{R as o}from"./index-CV65Cz2T.js";import{d as v,a as k}from"./ChevronRight-DuCVwUxh.js";import{c as f}from"./index-DSEhRz7_.js";import{m as z}from"./makeStyles-CkJZxfhX.js";import{B as h}from"./Box-Y2gNioDL.js";import{S as H}from"./Grid-DEL9PDyy.js";import{I as b}from"./IconButton-shkqm6j7.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-sTyAg92d.js";import"./capitalize-52YtlJa-.js";import"./defaultTheme-WHYcXxGo.js";import"./withStyles-C_eMWQcb.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./useControlled-DPQJ7hKL.js";import"./createSvgIcon-BoOF83CO.js";import"./debounce-DJZHKdQ4.js";import"./isMuiElement-DG475NJP.js";import"./useIsFocusVisible-CkxE1YbK.js";import"./index-BBoiwMTC.js";import"./unstable_useId-DsWtIzNz.js";import"./typography-0XlFLCN0.js";import"./ButtonBase-DtZzUmL6.js";import"./TransitionGroupContext-C1n1zRT4.js";const $=e=>{const t=e==="dark"?"16%":"97%";return`
    hsl(0, 0%, ${t}) 0%,
    hsla(0, 0%, ${t}, 0.987) 8.1%,
    hsla(0, 0%, ${t}, 0.951) 15.5%,
    hsla(0, 0%, ${t}, 0.896) 22.5%,
    hsla(0, 0%, ${t}, 0.825) 29%,
    hsla(0, 0%, ${t}, 0.741) 35.3%,
    hsla(0, 0%, ${t}, 0.648) 41.2%,
    hsla(0, 0%, ${t}, 0.55) 47.1%,
    hsla(0, 0%, ${t}, 0.45) 52.9%,
    hsla(0, 0%, ${t}, 0.352) 58.8%,
    hsla(0, 0%, ${t}, 0.259) 64.7%,
    hsla(0, 0%, ${t}, 0.175) 71%,
    hsla(0, 0%, ${t}, 0.104) 77.5%,
    hsla(0, 0%, ${t}, 0.049) 84.5%,
    hsla(0, 0%, ${t}, 0.013) 91.9%,
    hsla(0, 0%, ${t}, 0) 100%
  `},R=100,g=10,D=z(e=>({root:{position:"relative",display:"flex",flexFlow:"row nowrap",alignItems:"center"},container:{overflow:"auto",scrollbarWidth:0,"&::-webkit-scrollbar":{display:"none"}},fade:{position:"absolute",width:R,height:`calc(100% + ${g}px)`,transition:"opacity 300ms",pointerEvents:"none"},fadeLeft:{left:-g,background:`linear-gradient(90deg, ${$(e.palette.type)})`},fadeRight:{right:-g,background:`linear-gradient(270deg, ${$(e.palette.type)})`},fadeHidden:{opacity:0},button:{position:"absolute"},buttonLeft:{left:-e.spacing(2)},buttonRight:{right:-e.spacing(2)}}),{name:"BackstageHorizontalScrollGrid"});function G(e){const[[t,i],l]=o.useState([0,0]);return o.useLayoutEffect(()=>{const n=e.current;if(!n){l([0,0]);return}const a=()=>{const r=n.scrollLeft,s=n.scrollWidth-n.offsetWidth-n.scrollLeft;l([r,s])};return a(),n.addEventListener("scroll",a),window.addEventListener("resize",a),()=>{n.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[e]),[t,i]}function _(e,t,i){const[l,n]=o.useState(0);return o.useLayoutEffect(()=>{if(l===0)return;const a=window.performance.now(),r=requestAnimationFrame(s=>{if(!e.current)return;const m=s-a,p=Math.abs(l)*m/t,c=Math.max(i,p)*Math.sign(l);e.current.scrollBy({left:c});const u=l-c;Math.sign(l)!==Math.sign(u)?n(0):n(u)});return()=>cancelAnimationFrame(r)},[e,l,t,i]),n}function S(e){const{scrollStep:t=100,scrollSpeed:i=50,minScrollDistance:l=5,children:n,...a}=e,r=D(e),s=o.useRef(),[m,p]=G(s),y=_(s,i,l),c=u=>{s.current&&y(u?t:-t)};return o.createElement(h,{...a,className:r.root},o.createElement(H,{container:!0,direction:"row",wrap:"nowrap",className:r.container,ref:s},n),o.createElement(h,{className:f(r.fade,r.fadeLeft,{[r.fadeHidden]:m===0})}),o.createElement(h,{className:f(r.fade,r.fadeRight,{[r.fadeHidden]:p===0})}),m>0&&o.createElement(b,{title:"Scroll Left",onClick:()=>c(!1),className:f(r.button,r.buttonLeft,{})},o.createElement(v,null)),p>0&&o.createElement(b,{title:"Scroll Right",onClick:()=>c(!0),className:f(r.button,r.buttonRight,{})},o.createElement(k,null)))}S.__docgenInfo={description:`Horizontal scrollable component with arrows to navigate

@public`,methods:[],displayName:"HorizontalScrollGrid",props:{scrollStep:{required:!1,tsType:{name:"number"},description:""},scrollSpeed:{required:!1,tsType:{name:"number"},description:""},minScrollDistance:{required:!1,tsType:{name:"number"},description:""}}};const N={height:0,padding:150,margin:20},T={width:800,height:400,margin:20},x=[.2,.3,.4,.5,.6,.7,.8,.9,1],lt={title:"Layout/HorizontalScrollGrid",component:S},d=()=>o.createElement("div",{style:T},o.createElement(S,null,x.map(e=>{const t={backgroundColor:`rgba(0, 185, 151, ${e})`};return o.createElement("div",{style:{...t,...N},key:e})})));d.__docgenInfo={description:"",methods:[],displayName:"Default"};var w,E,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={containerStyle}>
    <HorizontalScrollGrid>
      {opacityArray.map(element => {
      const style = {
        backgroundColor: \`rgba(0, 185, 151, \${element})\`
      };
      return <div style={{
        ...style,
        ...cardContentStyle
      }} key={element} />;
    })}
    </HorizontalScrollGrid>
  </div>`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const at=["Default"];export{d as Default,at as __namedExportsOrder,lt as default};
