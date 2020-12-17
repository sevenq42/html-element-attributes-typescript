export namespace EnumHtmlAttributes {

  export const GeneralAttributes = {
    accesskey: 'accesskey',
    autocapitalize: 'autocapitalize',
    autofocus: 'autofocus',
    class: 'class',
    contenteditable: 'contenteditable',
    dir: 'dir',
    draggable: 'draggable',
    enterkeyhint: 'enterkeyhint',
    hidden: 'hidden',
    id: 'id',
    inputmode: 'inputmode',
    is: 'is',
    itemid: 'itemid',
    itemprop: 'itemprop',
    itemref: 'itemref',
    itemscope: 'itemscope',
    itemtype: 'itemtype',
    lang: 'lang',
    nonce: 'nonce',
    slot: 'slot',
    spellcheck: 'spellcheck',
    style: 'style',
    tabindex: 'tabindex',
    title: 'title',
    translate: 'translate',
  } as const
  export type GeneralAttributes = keyof typeof GeneralAttributes

  export const a = {
    ...GeneralAttributes,
    accesskey: 'accesskey',
    charset: 'charset',
    coords: 'coords',
    download: 'download',
    href: 'href',
    hreflang: 'hreflang',
    name: 'name',
    ping: 'ping',
    referrerpolicy: 'referrerpolicy',
    rel: 'rel',
    rev: 'rev',
    shape: 'shape',
    tabindex: 'tabindex',
    target: 'target',
    type: 'type'
  } as const
  export type a = typeof a[keyof typeof a]

  export const abbr = {...GeneralAttributes, title: 'title'} as const
  export type abbr = typeof abbr[keyof typeof abbr]

  export const applet = {
    ...GeneralAttributes,
    align: 'align',
    alt: 'alt',
    archive: 'archive',
    code: 'code',
    codebase: 'codebase',
    height: 'height',
    hspace: 'hspace',
    name: 'name',
    object: 'object',
    vspace: 'vspace',
    width: 'width'
  } as const
  export type applet = typeof applet[keyof typeof applet]

  export const area = {
    ...GeneralAttributes,
    accesskey: 'accesskey',
    alt: 'alt',
    coords: 'coords',
    download: 'download',
    href: 'href',
    hreflang: 'hreflang',
    nohref: 'nohref',
    ping: 'ping',
    referrerpolicy: 'referrerpolicy',
    rel: 'rel',
    shape: 'shape',
    tabindex: 'tabindex',
    target: 'target',
    type: 'type'
  } as const
  export type area = typeof area[keyof typeof area]

  export const audio = {
    ...GeneralAttributes,
    autoplay: 'autoplay',
    controls: 'controls',
    crossorigin: 'crossorigin',
    loop: 'loop',
    muted: 'muted',
    preload: 'preload',
    src: 'src'
  } as const
  export type audio = typeof audio[keyof typeof audio]

  export const base = {...GeneralAttributes, href: 'href', target: 'target'} as const
  export type base = typeof base[keyof typeof base]

  export const basefont = {...GeneralAttributes, color: 'color', face: 'face', size: 'size'} as const
  export type basefont = typeof basefont[keyof typeof basefont]

  export const bdo = {...GeneralAttributes, dir: 'dir'} as const
  export type bdo = typeof bdo[keyof typeof bdo]

  export const blockquote = {...GeneralAttributes, cite: 'cite'} as const
  export type blockquote = typeof blockquote[keyof typeof blockquote]

  export const body = {
    ...GeneralAttributes,
    alink: 'alink',
    background: 'background',
    bgcolor: 'bgcolor',
    link: 'link',
    text: 'text',
    vlink: 'vlink'
  } as const
  export type body = typeof body[keyof typeof body]

  export const br = {...GeneralAttributes, clear: 'clear'} as const
  export type br = typeof br[keyof typeof br]

  export const button = {
    ...GeneralAttributes,
    accesskey: 'accesskey',
    autofocus: 'autofocus',
    disabled: 'disabled',
    form: 'form',
    formaction: 'formaction',
    formenctype: 'formenctype',
    formmethod: 'formmethod',
    formnovalidate: 'formnovalidate',
    formtarget: 'formtarget',
    name: 'name',
    tabindex: 'tabindex',
    type: 'type',
    value: 'value'
  } as const
  export type button = typeof button[keyof typeof button]

  export const canvas = {...GeneralAttributes, height: 'height', width: 'width'} as const
  export type canvas = typeof canvas[keyof typeof canvas]

  export const caption = {...GeneralAttributes, align: 'align'} as const
  export type caption = typeof caption[keyof typeof caption]

  export const col = {
    ...GeneralAttributes,
    align: 'align',
    char: 'char',
    charoff: 'charoff',
    span: 'span',
    valign: 'valign',
    width: 'width'
  } as const
  export type col = typeof col[keyof typeof col]

  export const colgroup = {
    ...GeneralAttributes,
    align: 'align',
    char: 'char',
    charoff: 'charoff',
    span: 'span',
    valign: 'valign',
    width: 'width'
  } as const
  export type colgroup = typeof colgroup[keyof typeof colgroup]

  export const data = {...GeneralAttributes, value: 'value'} as const
  export type data = typeof data[keyof typeof data]

  export const del = {...GeneralAttributes, cite: 'cite', datetime: 'datetime'} as const
  export type del = typeof del[keyof typeof del]

  export const details = {...GeneralAttributes, open: 'open'} as const
  export type details = typeof details[keyof typeof details]

  export const dfn = {...GeneralAttributes, title: 'title'} as const
  export type dfn = typeof dfn[keyof typeof dfn]

  export const dialog = {...GeneralAttributes, open: 'open'} as const
  export type dialog = typeof dialog[keyof typeof dialog]

  export const dir = {...GeneralAttributes, compact: 'compact'} as const
  export type dir = typeof dir[keyof typeof dir]

  export const div = {...GeneralAttributes, align: 'align'} as const
  export type div = typeof div[keyof typeof div]

  export const dl = {...GeneralAttributes, compact: 'compact'} as const
  export type dl = typeof dl[keyof typeof dl]

  export const embed = {...GeneralAttributes, height: 'height', src: 'src', type: 'type', width: 'width'} as const
  export type embed = typeof embed[keyof typeof embed]

  export const fieldset = {...GeneralAttributes, disabled: 'disabled', form: 'form', name: 'name'} as const
  export type fieldset = typeof fieldset[keyof typeof fieldset]

  export const font = {...GeneralAttributes, color: 'color', face: 'face', size: 'size'} as const
  export type font = typeof font[keyof typeof font]

  export const form = {
    ...GeneralAttributes,
    accept: 'accept',
    'accept-charset': 'accept-charset',
    action:
      'action', autocomplete:
      'autocomplete', enctype:
      'enctype', method:
      'method', name:
      'name', novalidate:
      'novalidate', target:
      'target'
  } as const
  export
  type form = typeof form[keyof typeof form]

  export const frame = {
    ...GeneralAttributes,
    frameborder: 'frameborder',
    longdesc: 'longdesc',
    marginheight: 'marginheight',
    marginwidth: 'marginwidth',
    name: 'name',
    noresize: 'noresize',
    scrolling: 'scrolling',
    src: 'src'
  } as const
  export type frame = typeof frame[keyof typeof frame]

  export const frameset = {...GeneralAttributes, cols: 'cols', rows: 'rows'} as const
  export type frameset = typeof frameset[keyof typeof frameset]

  export const h1 = {...GeneralAttributes, align: 'align'} as const
  export type h1 = typeof h1[keyof typeof h1]

  export const h2 = {...GeneralAttributes, align: 'align'} as const
  export type h2 = typeof h2[keyof typeof h2]

  export const h3 = {...GeneralAttributes, align: 'align'} as const
  export type h3 = typeof h3[keyof typeof h3]

  export const h4 = {...GeneralAttributes, align: 'align'} as const
  export type h4 = typeof h4[keyof typeof h4]

  export const h5 = {...GeneralAttributes, align: 'align'} as const
  export type h5 = typeof h5[keyof typeof h5]

  export const h6 = {...GeneralAttributes, align: 'align'} as const
  export type h6 = typeof h6[keyof typeof h6]

  export const head = {...GeneralAttributes, profile: 'profile'} as const
  export type head = typeof head[keyof typeof head]

  export const hr = {...GeneralAttributes, align: 'align', noshade: 'noshade', size: 'size', width: 'width'} as const
  export type hr = typeof hr[keyof typeof hr]

  export const html = {...GeneralAttributes, manifest: 'manifest', version: 'version'} as const
  export type html = typeof html[keyof typeof html]

  export const iframe = {
    ...GeneralAttributes,
    align: 'align',
    allow: 'allow',
    allowfullscreen: 'allowfullscreen',
    allowpaymentrequest: 'allowpaymentrequest',
    allowusermedia: 'allowusermedia',
    frameborder: 'frameborder',
    height: 'height',
    loading: 'loading',
    longdesc: 'longdesc',
    marginheight: 'marginheight',
    marginwidth: 'marginwidth',
    name: 'name',
    referrerpolicy: 'referrerpolicy',
    sandbox: 'sandbox',
    scrolling: 'scrolling',
    src: 'src',
    srcdoc: 'srcdoc',
    width: 'width'
  } as const
  export type iframe = typeof iframe[keyof typeof iframe]

  export const img = {
    ...GeneralAttributes,
    align: 'align',
    alt: 'alt',
    border: 'border',
    crossorigin: 'crossorigin',
    decoding: 'decoding',
    height: 'height',
    hspace: 'hspace',
    ismap: 'ismap',
    loading: 'loading',
    longdesc: 'longdesc',
    name: 'name',
    referrerpolicy: 'referrerpolicy',
    sizes: 'sizes',
    src: 'src',
    srcset: 'srcset',
    usemap: 'usemap',
    vspace: 'vspace',
    width: 'width'
  } as const
  export type img = typeof img[keyof typeof img]

  export const input = {
    ...GeneralAttributes,
    accept: 'accept',
    accesskey: 'accesskey',
    align: 'align',
    alt: 'alt',
    autocomplete: 'autocomplete',
    autofocus: 'autofocus',
    checked: 'checked',
    dirname: 'dirname',
    disabled: 'disabled',
    form: 'form',
    formaction: 'formaction',
    formenctype: 'formenctype',
    formmethod: 'formmethod',
    formnovalidate: 'formnovalidate',
    formtarget: 'formtarget',
    height: 'height',
    ismap: 'ismap',
    list: 'list',
    max: 'max',
    maxlength: 'maxlength',
    min: 'min',
    minlength: 'minlength',
    multiple: 'multiple',
    name: 'name',
    pattern: 'pattern',
    placeholder: 'placeholder',
    readonly: 'readonly',
    required: 'required',
    size: 'size',
    src: 'src',
    step: 'step',
    tabindex: 'tabindex',
    title: 'title',
    type: 'type',
    usemap: 'usemap',
    value: 'value',
    width: 'width'
  } as const
  export type input = typeof input[keyof typeof input]

  export const ins = {...GeneralAttributes, cite: 'cite', datetime: 'datetime'} as const
  export type ins = typeof ins[keyof typeof ins]

  export const isindex = {...GeneralAttributes, prompt: 'prompt'} as const
  export type isindex = typeof isindex[keyof typeof isindex]

  export const label = {...GeneralAttributes, accesskey: 'accesskey', for: 'for', form: 'form'} as const
  export type label = typeof label[keyof typeof label]

  export const legend = {...GeneralAttributes, accesskey: 'accesskey', align: 'align'} as const
  export type legend = typeof legend[keyof typeof legend]

  export const li = {...GeneralAttributes, type: 'type', value: 'value'} as const
  export type li = typeof li[keyof typeof li]

  export const link = {
    ...GeneralAttributes,
    as: 'as',
    charset: 'charset',
    color: 'color',
    crossorigin: 'crossorigin',
    disabled: 'disabled',
    href: 'href',
    hreflang: 'hreflang',
    imagesizes: 'imagesizes',
    imagesrcset: 'imagesrcset',
    integrity: 'integrity',
    media: 'media',
    nonce: 'nonce',
    referrerpolicy: 'referrerpolicy',
    rel: 'rel',
    rev: 'rev',
    sizes: 'sizes',
    target: 'target',
    title: 'title',
    type: 'type'
  } as const
  export type link = typeof link[keyof typeof link]

  export const map = {...GeneralAttributes, name: 'name'} as const
  export type map = typeof map[keyof typeof map]

  export const menu = {...GeneralAttributes, compact: 'compact'} as const
  export type menu = typeof menu[keyof typeof menu]

  export const meta = {
    ...GeneralAttributes,
    charset: 'charset', content: 'content',
    'http-equiv': 'http-equiv',
    name:
      'name', scheme:
      'scheme'
  } as const
  export
  type meta = typeof meta[keyof typeof meta]

  export const meter = {
    ...GeneralAttributes,
    high: 'high',
    low: 'low',
    max: 'max',
    min: 'min',
    optimum: 'optimum',
    value: 'value'
  } as const
  export type meter = typeof meter[keyof typeof meter]

  export const object = {
    ...GeneralAttributes,
    align: 'align',
    archive: 'archive',
    border: 'border',
    classid: 'classid',
    codebase: 'codebase',
    codetype: 'codetype',
    data: 'data',
    declare: 'declare',
    form: 'form',
    height: 'height',
    hspace: 'hspace',
    name: 'name',
    standby: 'standby',
    tabindex: 'tabindex',
    type: 'type',
    typemustmatch: 'typemustmatch',
    usemap: 'usemap',
    vspace: 'vspace',
    width: 'width'
  } as const
  // fixme export type object = typeof object[keyof typeof object]

  export const ol = {
    ...GeneralAttributes,
    compact: 'compact',
    reversed: 'reversed',
    start: 'start',
    type: 'type'
  } as const
  export type ol = typeof ol[keyof typeof ol]

  export const optgroup = {...GeneralAttributes, disabled: 'disabled', label: 'label'} as const
  export type optgroup = typeof optgroup[keyof typeof optgroup]

  export const option = {
    ...GeneralAttributes,
    disabled: 'disabled',
    label: 'label',
    selected: 'selected',
    value: 'value'
  } as const
  export type option = typeof option[keyof typeof option]

  export const output = {...GeneralAttributes, for: 'for', form: 'form', name: 'name'} as const
  export type output = typeof output[keyof typeof output]

  export const p = {...GeneralAttributes, align: 'align'} as const
  export type p = typeof p[keyof typeof p]

  export const param = {
    ...GeneralAttributes,
    name: 'name',
    type: 'type',
    value: 'value',
    valuetype: 'valuetype'
  } as const
  export type param = typeof param[keyof typeof param]

  export const pre = {...GeneralAttributes, width: 'width'} as const
  export type pre = typeof pre[keyof typeof pre]

  export const progress = {...GeneralAttributes, max: 'max', value: 'value'} as const
  export type progress = typeof progress[keyof typeof progress]

  export const q = {...GeneralAttributes, cite: 'cite'} as const
  export type q = typeof q[keyof typeof q]

  export const script = {
    ...GeneralAttributes,
    async: 'async',
    charset: 'charset',
    crossorigin: 'crossorigin',
    defer: 'defer',
    integrity: 'integrity',
    language: 'language',
    nomodule: 'nomodule',
    nonce: 'nonce',
    referrerpolicy: 'referrerpolicy',
    src: 'src',
    type: 'type'
  } as const
  export type script = typeof script[keyof typeof script]

  export const select = {
    ...GeneralAttributes,
    autocomplete: 'autocomplete',
    autofocus: 'autofocus',
    disabled: 'disabled',
    form: 'form',
    multiple: 'multiple',
    name: 'name',
    required: 'required',
    size: 'size',
    tabindex: 'tabindex'
  } as const
  export type select = typeof select[keyof typeof select]

  export const slot = {...GeneralAttributes, name: 'name'} as const
  export type slot = typeof slot[keyof typeof slot]

  export const source = {
    ...GeneralAttributes,
    media: 'media',
    sizes: 'sizes',
    src: 'src',
    srcset: 'srcset',
    type: 'type'
  } as const
  export type source = typeof source[keyof typeof source]

  export const style = {...GeneralAttributes, media: 'media', nonce: 'nonce', title: 'title', type: 'type'} as const
  export type style = typeof style[keyof typeof style]

  export const table = {
    ...GeneralAttributes,
    align: 'align',
    bgcolor: 'bgcolor',
    border: 'border',
    cellpadding: 'cellpadding',
    cellspacing: 'cellspacing',
    frame: 'frame',
    rules: 'rules',
    summary: 'summary',
    width: 'width'
  } as const
  export type table = typeof table[keyof typeof table]

  export const tbody = {
    ...GeneralAttributes,
    align: 'align',
    char: 'char',
    charoff: 'charoff',
    valign: 'valign'
  } as const
  export type tbody = typeof tbody[keyof typeof tbody]

  export const td = {
    ...GeneralAttributes,
    abbr: 'abbr',
    align: 'align',
    axis: 'axis',
    bgcolor: 'bgcolor',
    char: 'char',
    charoff: 'charoff',
    colspan: 'colspan',
    headers: 'headers',
    height: 'height',
    nowrap: 'nowrap',
    rowspan: 'rowspan',
    scope: 'scope',
    valign: 'valign',
    width: 'width'
  } as const
  export type td = typeof td[keyof typeof td]

  export const textarea = {
    ...GeneralAttributes,
    accesskey: 'accesskey',
    autocomplete: 'autocomplete',
    autofocus: 'autofocus',
    cols: 'cols',
    dirname: 'dirname',
    disabled: 'disabled',
    form: 'form',
    maxlength: 'maxlength',
    minlength: 'minlength',
    name: 'name',
    placeholder: 'placeholder',
    readonly: 'readonly',
    required: 'required',
    rows: 'rows',
    tabindex: 'tabindex',
    wrap: 'wrap'
  } as const
  export type textarea = typeof textarea[keyof typeof textarea]

  export const tfoot = {
    ...GeneralAttributes,
    align: 'align',
    char: 'char',
    charoff: 'charoff',
    valign: 'valign'
  } as const
  export type tfoot = typeof tfoot[keyof typeof tfoot]

  export const th = {
    ...GeneralAttributes,
    abbr: 'abbr',
    align: 'align',
    axis: 'axis',
    bgcolor: 'bgcolor',
    char: 'char',
    charoff: 'charoff',
    colspan: 'colspan',
    headers: 'headers',
    height: 'height',
    nowrap: 'nowrap',
    rowspan: 'rowspan',
    scope: 'scope',
    valign: 'valign',
    width: 'width'
  } as const
  export type th = typeof th[keyof typeof th]

  export const thead = {
    ...GeneralAttributes,
    align: 'align',
    char: 'char',
    charoff: 'charoff',
    valign: 'valign'
  } as const
  export type thead = typeof thead[keyof typeof thead]

  export const time = {...GeneralAttributes, datetime: 'datetime'} as const
  export type time = typeof time[keyof typeof time]

  export const tr = {
    ...GeneralAttributes,
    align: 'align',
    bgcolor: 'bgcolor',
    char: 'char',
    charoff: 'charoff',
    valign: 'valign'
  } as const
  export type tr = typeof tr[keyof typeof tr]

  export const track = {
    ...GeneralAttributes,
    default: 'default',
    kind: 'kind',
    label: 'label',
    src: 'src',
    srclang: 'srclang'
  } as const
  export type track = typeof track[keyof typeof track]

  export const ul = {...GeneralAttributes, compact: 'compact', type: 'type'} as const
  export type ul = typeof ul[keyof typeof ul]

  export const video = {
    ...GeneralAttributes,
    autoplay: 'autoplay',
    controls: 'controls',
    crossorigin: 'crossorigin',
    height: 'height',
    loop: 'loop',
    muted: 'muted',
    playsinline: 'playsinline',
    poster: 'poster',
    preload: 'preload',
    src: 'src',
    width: 'width'
  } as const
  export type video = typeof video[keyof typeof video]

}
