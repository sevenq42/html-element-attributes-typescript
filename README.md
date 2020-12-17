## Map of HTML attributes, grouped by HTML Element, written as a Typescript Namespace
e.g.
```typescript
import {EnumHtmlAttributes} from 'html-element-attributes-typescript'
// BOTH JAVASCRIPT/RUNTIME objects ...
const myWidgetStyle = EnumHtmlAttributes.div.align
// TRUE: myWidgetStyle === 'align'

// ... AND TYPESCRIPT/COMPILE-TIME types
type myWidgetStyleType = typeof EnumHtmlAttributes.div.align
// TRUE: myWidgetStyle extends 'align'
// TRUE: myWidgetStyle extends EnumHtmlAttributes.div

type MyWidgetData = {
    [P in EnumHtmlAttributes.div]: string
}
const data: MyWidgetData = {
    // known 'div' property
    align: 'blah',
    // TS Error2322 - unknown property
    unknowHref: 'whatever'
}
```


__Based on https://github.com/wooorm/html-element-attributes__