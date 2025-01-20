import{r as d,H as l}from"./plugin-Bt8Z_rkz.js";import{R as e}from"./index-CTjT7uj6.js";import{s as u}from"./api-CKDuuaL7.js";import{S as a}from"./Grid-D0t_NOHX.js";import{m as h}from"./makeStyles-Z1piKFaZ.js";import{w as g}from"./appWrappers-BZUuTqUn.js";import{T as S}from"./TestApiProvider-CoiMLMhd.js";import"./iframe-BHkRdUrh.js";import"../sb-preview/runtime.js";import"./index-Dj_lShYJ.js";import"./ApiRef-BSBwTmJJ.js";import"./Plugin-BnFuRug-.js";import"./componentData-CM4hSmEF.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./index-DNAWfEOe.js";import"./useRouteRef-D0BCYqYb.js";import"./defaultTheme-BrZMNV87.js";import"./capitalize-CPKBZ2U-.js";import"./withStyles-BoERxSk9.js";import"./hoist-non-react-statics.cjs-DzIEFHQI.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-CxejcRCW.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-DvLPikTD.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./MockTranslationApi-7lcFbsnT.js";import"./index-CFaqwFgm.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-_rA3tygc.js";import"./toArray-DrgApUvy.js";import"./TranslationApi-eOxINumg.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./mapValues-r4uG88u0.js";import"./toString-C6iK1gA3.js";import"./ApiProvider-CuNQiN7Z.js";import"./index-BRV0Se7Z.js";import"./CssBaseline-qxBnr2ND.js";import"./ThemeProvider-D-Ryobkw.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const ce={title:"Plugins/Home/Components/SearchBar",decorators:[r=>g(e.createElement(e.Fragment,null,e.createElement(S,{apis:[[u,{query:()=>Promise.resolve({results:[]})}]]},e.createElement(r,null))),{mountedRoutes:{"/hello-search":d}})]},t=()=>e.createElement(a,{container:!0,justifyContent:"center",spacing:6},e.createElement(a,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row"},e.createElement(l,{placeholder:"Search"}))),f=h(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),o=()=>{const r=f();return e.createElement(a,{container:!0,justifyContent:"center",spacing:6},e.createElement(a,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row"},e.createElement(l,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})))};t.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};var s,n,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar placeholder="Search" />
      </Grid>
    </Grid>;
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const classes = useStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar classes={{
        root: classes.searchBar
      }} InputProps={{
        classes: {
          notchedOutline: classes.searchBarOutline
        }
      }} placeholder="Search" />
      </Grid>
    </Grid>;
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const pe=["Default","CustomStyles"];export{o as CustomStyles,t as Default,pe as __namedExportsOrder,ce as default};
