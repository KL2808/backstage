import{d as S}from"./MenuBook-fgkuwDyF.js";import{i as V}from"./interopRequireDefault-Y9pwbXtE.js";import{r as _,i as E}from"./createSvgIcon-esOf8MXJ.js";import{a as g,R as e}from"./index-CV65Cz2T.js";import{d as R}from"./Person-B7Zsy34t.js";import{S as o}from"./SearchType-B5Br-vp1.js";import{s as A,M as D}from"./api-CnXCC1gD.js";import{S as I}from"./SearchContext-CALk0UPB.js";import{S as i}from"./Grid-BB-GYNIy.js";import{P}from"./Paper-BZMBdJdO.js";import{T as b}from"./TestApiProvider-BLErwEGl.js";import"./capitalize-BKQXumqD.js";import"./defaultTheme-dorO8Ycy.js";import"./withStyles-5L4Wrt0H.js";import"./hoist-non-react-statics.cjs-DscmM33_.js";import"./createChainedFunction-Da-WpsAN.js";import"./createSvgIcon-BE9FbSc8.js";import"./debounce-DtXjJkxj.js";import"./isMuiElement-DG475NJP.js";import"./ownerWindow-D1FXuRdm.js";import"./useIsFocusVisible-DMiTmV9E.js";import"./index-CpD63NMF.js";import"./useControlled-ltvK4nzt.js";import"./unstable_useId-DsWtIzNz.js";import"./ExpandMore-CGIqGUc-.js";import"./useAsync-cwiHyrW_.js";import"./useMountedState-BG_s6PIB.js";import"./makeStyles-B2ffWluB.js";import"./Box-D_ilMR00.js";import"./typography-Cs1aOEfH.js";import"./Typography-ClGfHewG.js";import"./AccordionDetails-Pkymkb_v.js";import"./toArray-COxZ3wB-.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-CydqjKxS.js";import"./utils-CaJHH84X.js";import"./TransitionGroupContext-C1n1zRT4.js";import"./useTheme-Dmunefpm.js";import"./ButtonBase-Ba4BxsIu.js";import"./IconButton-CiUvO6Eb.js";import"./List-D3T44CW6.js";import"./ListContext-DDd8B5Hf.js";import"./Divider-YBHdkOJo.js";import"./ListItem--gnxU6mZ.js";import"./ListItemIcon-CXXFlTRn.js";import"./ListItemText-Db7RxVPo.js";import"./ApiRef-CiiQxZ8_.js";import"./Tabs-DviUIT5-.js";import"./KeyboardArrowRight-DUUcGvVE.js";import"./FormLabel-ZM__TfMd.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-Cf2zJBza.js";import"./InputLabel-TJ3WLnKL.js";import"./Select-qzrd14FQ.js";import"./Popover-D2nIjoSo.js";import"./Modal-CgSagCB9.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-Cz7V7drg.js";import"./Grow-JHyMhSnP.js";import"./Chip-Ch6PfK9O.js";import"./MenuItem-BVhOlZMx.js";import"./Checkbox-N35HiXJ9.js";import"./SwitchBase-DEe-KNKl.js";import"./lodash-D2SO6J9k.js";import"./useAnalytics-BFZbt2Mh.js";import"./ConfigApi-cQMGuQTo.js";import"./ApiProvider-B6zkipAU.js";import"./index-BDlCPcVq.js";var m={},q=V,w=E;Object.defineProperty(m,"__esModule",{value:!0});var h=m.default=void 0,x=w(g()),O=q(_()),H=(0,O.default)(x.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");h=m.default=H;const Ke={title:"Plugins/Search/SearchType",component:o,decorators:[y=>e.createElement(b,{apis:[[A,new D]]},e.createElement(I,null,e.createElement(i,{container:!0,direction:"row"},e.createElement(i,{item:!0,xs:4},e.createElement(y,null)))))]},p=["value-1","value-2","value-3"],r=()=>e.createElement(P,{style:{padding:10}},e.createElement(o,{name:"Search type",values:p,defaultValue:p[0]})),a=()=>e.createElement(o.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.createElement(S,null)},{value:"value-2",name:"Value Two",icon:e.createElement(h,null)},{value:"value-3",name:"Value Three",icon:e.createElement(R,null)}]}),t=()=>e.createElement(o.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});r.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Accordion"};t.__docgenInfo={description:"",methods:[],displayName:"Tabs"};var l,u,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchType name="Search type" values={values} defaultValue={values[0]} />
    </Paper>;
}`,...(n=(u=r.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};var s,c,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <SearchType.Accordion name="Result Types" defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One',
    icon: <CatalogIcon />
  }, {
    value: 'value-2',
    name: 'Value Two',
    icon: <DocsIcon />
  }, {
    value: 'value-3',
    name: 'Value Three',
    icon: <UsersGroupsIcon />
  }]} />;
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var v,f,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <SearchType.Tabs defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One'
  }, {
    value: 'value-2',
    name: 'Value Two'
  }, {
    value: 'value-3',
    name: 'Value Three'
  }]} />;
}`,...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const Qe=["Default","Accordion","Tabs"];export{a as Accordion,r as Default,t as Tabs,Qe as __namedExportsOrder,Ke as default};
