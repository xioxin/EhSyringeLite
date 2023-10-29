// ==UserScript==
// @name        EhSyringe
// @version     2.11.7
// @author      EhTagTranslation
// @description E 站注射器，将中文翻译注入到 E 站体内。包含全站 UI 翻译和超过 33000 条标签翻译，标签数据库持续更新中。
// @homepage    https://github.com/EhTagTranslation/EhSyringe
// @supportURL  https://github.com/EhTagTranslation/EhSyringe/issues
// @match       *://exhentai.org/*
// @match       *://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*
// @match       *://e-hentai.org/*
// @match       *://*.exhentai.org/*
// @match       *://*.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*
// @match       *://*.e-hentai.org/*
// @match       *://*.hath.network/*
// @namespace   https://github.com/EhTagTranslation/EhSyringe
// @license     MIT
// @compatible  firefox >= 60
// @compatible  edge >= 16
// @compatible  chrome >= 61
// @compatible  safari >= 11
// @compatible  opera >= 48
// @exclude     *://forums.e-hentai.org/*
// @icon        https://fastly.jsdelivr.net/gh/EhTagTranslation/EhSyringe@81d485ee7356eeb4ebcc04f060c894bf5e350c6e/src/assets/logo.svg
// @updateURL   https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.meta.js
// @downloadURL https://github.com/EhTagTranslation/EhSyringe/releases/latest/download/ehsyringe.user.js
// @run-at      document-start
// @grant       unsafeWindow
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @grant       GM_openInTab
// @grant       GM_notification
// ==/UserScript==

/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2904);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(890);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#gmid{display:grid;grid:\"gd3 spa spa\" auto \"gd3 gd4 gd5\" auto/auto 1fr auto}#gmid #gd3{grid-area:gd3}#gmid #spa{grid-area:spa;width:auto}#gmid #gd4{grid-area:gd4;width:auto}#gmid #gd5{grid-area:gd5}div#gd5{position:relative;z-index:3}div#gd5 #ehs-introduce-box img{height:auto;margin:0;width:auto}#ehs-introduce-box{-webkit-box-orient:vertical;-moz-box-orient:vertical;background:#edebdf;border-radius:0 0 6px 0;bottom:0;-webkit-flex-flow:column;flex-flow:column;left:0;overflow:auto;position:absolute;right:-5px;text-align:left;top:0}#ehs-introduce-box,#ehs-introduce-box .ehs-title{-webkit-box-direction:normal;-moz-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}#ehs-introduce-box .ehs-title{-webkit-box-flex:0;-moz-box-flex:0;-webkit-box-orient:horizontal;-moz-box-orient:horizontal;border-bottom:1px solid #5c0d12;-webkit-flex:none;flex:none;-webkit-flex-direction:row;flex-direction:row;line-height:14px;margin:0 8px;padding:3px 0}#ehs-introduce-box .ehs-title .ehs-cn{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#ehs-introduce-box .ehs-title .ehs-en{opacity:.7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#ehs-introduce-box .ehs-title>div{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:auto;flex:auto;overflow:hidden}#ehs-introduce-box .ehs-title>span{-webkit-box-flex:0;-moz-box-flex:0;-webkit-flex:none;flex:none;overflow:hidden}#ehs-introduce-box .ehs-close{cursor:pointer;font-size:16px;line-height:28px;opacity:.8;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:20px}#ehs-introduce-box .ehs-close:hover{opacity:1}#ehs-introduce-box .ehs-close:after{content:\"\\00d7\"}#ehs-introduce-box .ehs-content{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:auto;flex:auto;margin:4px 0;overflow:auto;padding:4px 8px;scrollbar-color:#5c0d12 transparent;scrollbar-width:thin}#ehs-introduce-box .ehs-content::-webkit-scrollbar{height:4px;width:4px}#ehs-introduce-box .ehs-content::-webkit-scrollbar-thumb{background:#5c0d12}#ehs-introduce-box .ehs-content abbr[title]{padding:0 1px}#ehs-introduce-box .ehs-content abbr[title]:after{content:\" (\" attr(title) \")\";font-size:90%}#ehs-introduce-box .ehs-href{-webkit-box-flex:0;-moz-box-flex:0;border-top:1px solid #5c0d12;-webkit-flex:none;flex:none;line-height:24px;margin:0 8px}#ehs-introduce-box .ehs-href:empty{display:none}#ehs-introduce-box:empty{display:none}#ehs-introduce-box img{max-width:100%}:root.ex #ehs-introduce-box{background:#4f535b;border-radius:0}:root.ex #ehs-introduce-box .ehs-title{border-bottom:1px solid #000}:root.ex #ehs-introduce-box .ehs-href{border-top:1px solid #000}:root.ex #ehs-introduce-box .ehs-content{scrollbar-color:#000 transparent}:root.ex #ehs-introduce-box .ehs-content::-webkit-scrollbar-thumb{background:#000}.ehs-no-intro,.ehs-no-translation{opacity:.8}.ehs-no-intro h3,.ehs-no-translation h3{font-size:16px;font-weight:700;opacity:.6;padding:8px;text-align:center}:root.ehs-image-level-0 #ehs-introduce-box .ehs-content img{display:none}:root.ehs-image-level-1 #ehs-introduce-box .ehs-content img[nsfw]{display:none}:root.ehs-image-level-2 #ehs-introduce-box .ehs-content img[nsfw=R18G]{display:none}", "",{"version":3,"sources":["webpack://./src/plugin/introduce/index.less"],"names":[],"mappings":"AAAA,MACI,YAAA,CACA,wDACJ,CAHA,WAOQ,aADR,CANA,WAUQ,aAAA,CACA,UADR,CAVA,WAcQ,aAAA,CACA,UADR,CAdA,WAkBQ,aADR,CAKA,QAEI,iBAAA,CADA,SAFJ,CACA,+BAMQ,WAAA,CAFA,QAAA,CACA,UADR,CAMA,mBAMI,2BAAA,CAAA,wBAAA,CAEA,kBAAA,CADA,uBAAA,CALA,QAAA,CAIA,wBAAA,CAAA,gBAAA,CAJA,MAAA,CACA,aAAA,CAFA,iBAAA,CACA,UAAA,CAEA,eAAA,CAFA,KAEJ,CAJA,iDAMI,4BAAA,CAAA,yBAAA,CADA,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,YAQJ,CAbA,8BAUQ,kBAAA,CAAA,eAAA,CAMA,6BAAA,CAAA,0BAAA,CAJA,+BAAA,CAFA,iBAAA,CAAA,SAAA,CAMA,0BAAA,CAAA,kBAAA,CAHA,gBAAA,CAFA,YAAA,CAGA,aADR,CAbA,sCAmBY,eAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAHZ,CAnBA,sCAyBY,UAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAHZ,CAzBA,kCAiCY,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,SAAA,CADA,eAHZ,CA7BA,mCAqCY,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,SAAA,CADA,eAHZ,CAjCA,8BA0CQ,cAAA,CACA,cAAA,CAEA,gBAAA,CADA,UAAA,CAGA,iBAAA,CANA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAKA,UAJR,CAMQ,oCACI,SAJZ,CAMQ,oCACI,eAJZ,CAhDA,gCAwDQ,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,SAAA,CAEA,YAAA,CADA,aAAA,CAEA,eAAA,CAEA,mCAAA,CADA,oBAJR,CAOQ,mDAEI,UAAA,CADA,SAJZ,CAOQ,yDACI,kBALZ,CA/DA,4CAuEY,aALZ,CAMY,kDACI,4BAAA,CACA,aAJhB,CAtEA,6BA+EQ,kBAAA,CAAA,eAAA,CACA,4BAAA,CADA,iBAAA,CAAA,SAAA,CAGA,gBAAA,CADA,YALR,CAOQ,mCACI,YALZ,CASI,yBACI,YAPR,CAlFA,uBA4FQ,cAPR,CAWA,4BACI,kBAAA,CACA,eATJ,CAOA,uCAIQ,4BARR,CAIA,sCAOQ,yBARR,CACA,yCAUQ,gCARR,CASQ,kEACI,eAPZ,CAYA,kCAEI,UAVJ,CAQA,wCAMQ,cAAA,CAEA,eAAA,CAJA,UAAA,CAGA,WAAA,CAFA,iBALR,CAcA,4DAEQ,YAZR,CAeA,kEAEQ,YAdR,CAiBA,uEAEQ,YAhBR","sourcesContent":["#gmid {\n    display: grid;\n    grid:\n        'gd3 spa spa' auto\n        'gd3 gd4 gd5' auto\n        / auto 1fr auto;\n    #gd3 {\n        grid-area: gd3;\n    }\n    #spa {\n        grid-area: spa;\n        width: auto;\n    }\n    #gd4 {\n        grid-area: gd4;\n        width: auto;\n    }\n    #gd5 {\n        grid-area: gd5;\n    }\n}\n\ndiv#gd5 {\n    z-index: 3;\n    position: relative;\n    #ehs-introduce-box img {\n        margin: 0;\n        width: auto;\n        height: auto;\n    }\n}\n\n#ehs-introduce-box {\n    position: absolute;\n    inset: 0 -5px 0 0;\n    overflow: auto;\n    text-align: left;\n    display: flex;\n    flex-flow: column;\n    border-radius: 0 0 6px 0;\n    background: #edebdf;\n    .ehs-title {\n        flex: none;\n        margin: 0 8px;\n        border-bottom: 1px solid #5c0d12;\n        line-height: 14px;\n        padding: 3px 0;\n        display: flex;\n        flex-direction: row;\n\n        .ehs-cn {\n            font-weight: bold;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n        .ehs-en {\n            opacity: 0.7;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n        }\n\n        > div {\n            overflow: hidden;\n            flex: auto;\n        }\n        > span {\n            overflow: hidden;\n            flex: none;\n        }\n    }\n    .ehs-close {\n        user-select: none;\n        cursor: pointer;\n        font-size: 16px;\n        opacity: 0.8;\n        line-height: 28px;\n        width: 20px;\n        text-align: center;\n        &:hover {\n            opacity: 1;\n        }\n        &::after {\n            content: '\\00d7';\n        }\n    }\n    .ehs-content {\n        flex: auto;\n        overflow: auto;\n        margin: 4px 0;\n        padding: 4px 8px;\n        scrollbar-width: thin;\n        scrollbar-color: #5c0d12 transparent;\n\n        &::-webkit-scrollbar {\n            width: 4px;\n            height: 4px;\n        }\n        &::-webkit-scrollbar-thumb {\n            background: #5c0d12;\n        }\n        abbr[title] {\n            padding: 0 1px;\n            &::after {\n                content: ' (' attr(title) ')';\n                font-size: 90%;\n            }\n        }\n    }\n    .ehs-href {\n        flex: none;\n        border-top: 1px solid #5c0d12;\n        margin: 0 8px;\n        line-height: 24px;\n        &:empty {\n            display: none;\n        }\n    }\n\n    &:empty {\n        display: none;\n    }\n    img {\n        max-width: 100%;\n    }\n}\n\n:root.ex #ehs-introduce-box {\n    background: #4f535b;\n    border-radius: 0;\n    .ehs-title {\n        border-bottom: 1px solid #000;\n    }\n    .ehs-href {\n        border-top: 1px solid #000;\n    }\n    .ehs-content {\n        scrollbar-color: #000 transparent;\n        &::-webkit-scrollbar-thumb {\n            background: #000;\n        }\n    }\n}\n\n.ehs-no-translation,\n.ehs-no-intro {\n    opacity: 0.8;\n    h3 {\n        opacity: 0.6;\n        text-align: center;\n        font-size: 16px;\n        padding: 8px;\n        font-weight: bold;\n    }\n}\n\n//0:hide, 1:non-h 2: R18 3: R18G\n/* nsfw=\"R18\" */\n:root.ehs-image-level-0 #ehs-introduce-box .ehs-content {\n    img {\n        display: none;\n    }\n}\n:root.ehs-image-level-1 #ehs-introduce-box .ehs-content {\n    img[nsfw] {\n        display: none;\n    }\n}\n:root.ehs-image-level-2 #ehs-introduce-box .ehs-content {\n    img[nsfw='R18G'] {\n        display: none;\n    }\n}\n:root.ehs-image-level-3 {\n    // 所有都显示\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2904);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(890);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#eh-syringe-popup-root{font-size:medium;line-height:normal;text-align:left;text-align:initial}#eh-syringe-popup-root input,#eh-syringe-popup-root table,#eh-syringe-popup-root td,#eh-syringe-popup-root th{background:inherit;color:inherit}#eh-syringe-popup-root input{border:none;margin:0;padding:0}#eh-syringe-popup-root input[type=checkbox],#eh-syringe-popup-root input[type=radio]{position:static;top:auto}#eh-syringe-popup-root p{margin:.8em 0;padding:0}#eh-syringe-popup-root a{background:rgba(0,0,0,0);-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;-moz-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;transition:all .28s cubic-bezier(.4,0,.2,1) 0s}#eh-syringe-popup-root,#eh-syringe-popup-root .ehs-panel{background:#f0f0f0;color:#111}#eh-syringe-popup-root .action,#eh-syringe-popup-root .ehs-panel .action{background:#f0f0f0;color:#8041a6}#eh-syringe-popup-root .action.primary,#eh-syringe-popup-root .ehs-panel .action.primary{background:#8041a6;border-color:#8041a6;color:#f0f0f0}#eh-syringe-popup-root .action.primary:hover,#eh-syringe-popup-root .ehs-panel .action.primary:hover{background:#491774}#eh-syringe-popup-root .action.primary:active,#eh-syringe-popup-root .ehs-panel .action.primary:active{background:#ae79c9}#eh-syringe-popup-root #info{color:#8041a6}#eh-syringe-popup-root .hasNew{color:#79252b}#eh-syringe-popup-root a{color:#8041a6}#eh-syringe-popup-root a:hover{color:#491774}#eh-syringe-popup-root a:active{color:#ae79c9}#eh-syringe-popup-root a.minor{color:#a5a3a6}#eh-syringe-popup-root a.minor:hover{color:#d2cdd4}#eh-syringe-popup-root a.minor:active{color:#838185}#eh-syringe-popup-root .logo svg [fill-bg]{fill:#f0f0f0}#eh-syringe-popup-root .logo svg [fill-accent]{fill:#8041a6}#eh-syringe-popup-root .logo svg [fill-sa]{fill:#cfbadc}#eh-syringe-popup-root .logo svg [stroke-bg]{stroke:#f0f0f0}#eh-syringe-popup-root .logo svg [stroke-accent]{stroke:#8041a6}#eh-syringe-popup-root .logo svg [stroke-sa]{stroke:#cfbadc}#eh-syringe-popup-root #settingForm .checkbox-item svg path{stroke:#8041a6}#eh-syringe-popup-root #settingForm input[type=checkbox]{border:2px solid #a09da6}#eh-syringe-popup-root #settingForm input[type=checkbox]:checked{border:2px solid #8041a6}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-runnable-track{border:1px solid #ae79c9}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-track{border:1px solid #ae79c9}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-thumb{background:#f0f0f0;border:2px solid #8041a6}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-thumb{background:#f0f0f0;border:2px solid #8041a6}#eh-syringe-popup-root #settingForm input[type=range]:focus::-webkit-slider-thumb{border:2px solid #8041a6;-webkit-box-shadow:0 0 7px rgba(0,0,0,.2);box-shadow:0 0 7px rgba(0,0,0,.2)}#eh-syringe-popup-root #settingForm input[type=range]:focus::-moz-range-thumb{border:2px solid #8041a6;box-shadow:0 0 7px rgba(0,0,0,.2)}#eh-syringe-popup-root #settingForm input[type=range]:active::-webkit-slider-thumb{background:#fdfdfd;border:2px solid #8041a6;-webkit-box-shadow:0 0 7px 1px rgba(0,0,0,.2);box-shadow:0 0 7px 1px rgba(0,0,0,.2)}#eh-syringe-popup-root #settingForm input[type=range]:active::-moz-range-thumb{background:#fdfdfd;border:2px solid #8041a6;box-shadow:0 0 7px 1px rgba(0,0,0,.2)}#eh-syringe-popup-host{background:#f0f0f0}#eh-syringe-popup-host.ex{background:#313131}:root.ex #eh-syringe-popup-root,:root.ex #eh-syringe-popup-root .ehs-panel{background:#313131;color:#eee}:root.ex #eh-syringe-popup-root .action,:root.ex #eh-syringe-popup-root .ehs-panel .action{background:#313131;color:#ce90f1}:root.ex #eh-syringe-popup-root .action.primary,:root.ex #eh-syringe-popup-root .ehs-panel .action.primary{background:#ce90f1;border-color:#ce90f1;color:#313131}:root.ex #eh-syringe-popup-root .action.primary:hover,:root.ex #eh-syringe-popup-root .ehs-panel .action.primary:hover{background:#e2b9f7}:root.ex #eh-syringe-popup-root .action.primary:active,:root.ex #eh-syringe-popup-root .ehs-panel .action.primary:active{background:#b669e9}:root.ex #eh-syringe-popup-root #info{color:#ce90f1}:root.ex #eh-syringe-popup-root .hasNew{color:#cb8d93}:root.ex #eh-syringe-popup-root a{color:#ce90f1}:root.ex #eh-syringe-popup-root a:hover{color:#e2b9f7}:root.ex #eh-syringe-popup-root a:active{color:#b669e9}:root.ex #eh-syringe-popup-root a.minor{color:#a5a3a6}:root.ex #eh-syringe-popup-root a.minor:hover{color:#d2cdd4}:root.ex #eh-syringe-popup-root a.minor:active{color:#838185}:root.ex #eh-syringe-popup-root .logo svg [fill-bg]{fill:#313131}:root.ex #eh-syringe-popup-root .logo svg [fill-accent]{fill:#ce90f1}:root.ex #eh-syringe-popup-root .logo svg [fill-sa]{fill:#987ca8}:root.ex #eh-syringe-popup-root .logo svg [stroke-bg]{stroke:#313131}:root.ex #eh-syringe-popup-root .logo svg [stroke-accent]{stroke:#ce90f1}:root.ex #eh-syringe-popup-root .logo svg [stroke-sa]{stroke:#987ca8}:root.ex #eh-syringe-popup-root #settingForm .checkbox-item svg path{stroke:#ce90f1}:root.ex #eh-syringe-popup-root #settingForm input[type=checkbox]{border:2px solid #a09da6}:root.ex #eh-syringe-popup-root #settingForm input[type=checkbox]:checked{border:2px solid #ce90f1}:root.ex #eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-runnable-track{border:1px solid #b669e9}:root.ex #eh-syringe-popup-root #settingForm input[type=range]::-moz-range-track{border:1px solid #b669e9}:root.ex #eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-thumb{background:#313131;border:2px solid #ce90f1}:root.ex #eh-syringe-popup-root #settingForm input[type=range]::-moz-range-thumb{background:#313131;border:2px solid #ce90f1}:root.ex #eh-syringe-popup-root #settingForm input[type=range]:focus::-webkit-slider-thumb{border:2px solid #ce90f1;-webkit-box-shadow:0 0 7px rgba(0,0,0,.2);box-shadow:0 0 7px rgba(0,0,0,.2)}:root.ex #eh-syringe-popup-root #settingForm input[type=range]:focus::-moz-range-thumb{border:2px solid #ce90f1;box-shadow:0 0 7px rgba(0,0,0,.2)}:root.ex #eh-syringe-popup-root #settingForm input[type=range]:active::-webkit-slider-thumb{background:#131313;border:2px solid #ce90f1;-webkit-box-shadow:0 0 7px 1px rgba(0,0,0,.2);box-shadow:0 0 7px 1px rgba(0,0,0,.2)}:root.ex #eh-syringe-popup-root #settingForm input[type=range]:active::-moz-range-thumb{background:#131313;border:2px solid #ce90f1;box-shadow:0 0 7px 1px rgba(0,0,0,.2)}#eh-syringe-popup-root{font-family:sans-serif;font-size:12pt;max-width:400px;min-width:240px;overflow:hidden;padding:1px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}#eh-syringe-popup-root .hidden{display:none;visibility:hidden}#eh-syringe-popup-root .ehs-panel{-webkit-box-orient:vertical;-webkit-box-direction:normal;-moz-box-orient:vertical;-moz-box-direction:normal;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-flex-direction:column;flex-direction:column;margin:0 auto}#eh-syringe-popup-root .ehs-panel .header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;line-height:1;margin:16px}#eh-syringe-popup-root .ehs-panel .header>.cushion{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:auto;flex:auto}#eh-syringe-popup-root .ehs-panel .header span{color:#a5a3a6}#eh-syringe-popup-root .ehs-panel .content{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:auto;flex:auto;margin:0 16px;overflow:visible}#eh-syringe-popup-root .ehs-panel .action{-webkit-tap-highlight-color:transparent;border:1px solid #ddd;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:block;font-size:16px;line-height:36px;margin:16px;min-width:64px;outline:0;overflow:visible;padding:0 16px;position:relative;text-align:center;-webkit-text-decoration:none;text-decoration:none;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background .4s cubic-bezier(.25,.8,.25,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);transition:background .4s cubic-bezier(.25,.8,.25,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);-moz-transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow .28s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}#eh-syringe-popup-root .ehs-panel .action.primary{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}#eh-syringe-popup-root .ehs-panel .action.primary:active{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}#eh-syringe-popup-root .ehs-panel .action:disabled{opacity:.6}#eh-syringe-popup-root .ehs-panel .action:focus{border:1px solid #888}#eh-syringe-popup-root #ehs-main-panel{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);-moz-transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root #ehs-main-panel.ehs-hide{-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9)}#eh-syringe-popup-root .logo-box{margin:-16px;overflow:hidden;pointer-events:none;position:relative}#eh-syringe-popup-root .logo{margin:20px 0;text-align:center;-webkit-transform:scale(1) rotate(-45deg);-moz-transform:scale(1) rotate(-45deg);-ms-transform:scale(1) rotate(-45deg);transform:scale(1) rotate(-45deg);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);-moz-transition:transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root .logo #Syringe{pointer-events:all}#eh-syringe-popup-root .logo #Enema{opacity:0;-webkit-transform-origin:61px 86px;-moz-transform-origin:61px 86px;-ms-transform-origin:61px 86px;transform-origin:61px 86px}#eh-syringe-popup-root .logo #Enema2{opacity:1}#eh-syringe-popup-root .logo #Enema,#eh-syringe-popup-root .logo #Enema2,#eh-syringe-popup-root .logo #PushRod{-webkit-transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);-moz-transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1);transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1);transition:width .28s cubic-bezier(.4,0,.2,1),opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root .logo.prominent{-webkit-transform:scale(1.6) rotate(0deg);-moz-transform:scale(1.6) rotate(0deg);-ms-transform:scale(1.6) rotate(0deg);transform:scale(1.6) rotate(0deg)}#eh-syringe-popup-root .logo.prominent #Enema2{opacity:0}#eh-syringe-popup-root .logo.prominent #Enema{opacity:1}#eh-syringe-popup-root .logo.prominent.injection{-webkit-transform:scale(1.6) rotate(0deg) translate(-10px);-moz-transform:scale(1.6) rotate(0deg) translate(-10px);-ms-transform:scale(1.6) rotate(0deg) translate(-10px);transform:scale(1.6) rotate(0deg) translate(-10px)}#eh-syringe-popup-root .logo.prominent.injection #Enema,#eh-syringe-popup-root .logo.prominent.injection #Enema2,#eh-syringe-popup-root .logo.prominent.injection #PushRod{-webkit-transition:width .6s cubic-bezier(.4,0,.2,1),-webkit-transform .6s cubic-bezier(.4,0,.2,1);transition:width .6s cubic-bezier(.4,0,.2,1),-webkit-transform .6s cubic-bezier(.4,0,.2,1);-moz-transition:width .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1),-moz-transform .6s cubic-bezier(.4,0,.2,1);transition:width .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1);transition:width .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1),-webkit-transform .6s cubic-bezier(.4,0,.2,1),-moz-transform .6s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root #info{bottom:30px;font-size:16px;height:24px;left:0;line-height:24px;position:absolute;right:0;text-align:center}#eh-syringe-popup-root .monospace{font-family:Menlo,Consolas,Source Code Pro,Inconsolata,Monaco,Courier New,monospace}#eh-syringe-popup-root table{font-size:14px}#eh-syringe-popup-root #ehs-setting-panel{bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-transition:opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);-moz-transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1);transition:opacity .28s cubic-bezier(.4,0,.2,1),transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1),-moz-transform .28s cubic-bezier(.4,0,.2,1)}#eh-syringe-popup-root #ehs-setting-panel.ehs-show{opacity:1;pointer-events:auto;-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}#eh-syringe-popup-root #ehs-setting-panel #settingForm{font-size:10pt;line-height:12pt}#eh-syringe-popup-root .checkbox-item{padding:4px 0}#eh-syringe-popup-root .checkbox-item label{display:block;position:relative}#eh-syringe-popup-root .checkbox-item svg{height:10px;left:3px;position:absolute;top:3px;width:10px}#eh-syringe-popup-root .checkbox-item svg path{stroke-dasharray:1000;stroke-dashoffset:1000;stroke-width:16px;stroke-linecap:round;stroke-linejoin:round;fill:none}#eh-syringe-popup-root .checkbox-item svg.checked path{stroke-dasharray:113.137,113.137;stroke-dashoffset:0;-webkit-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;-moz-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;transition:all .28s cubic-bezier(.4,0,.2,1) 0s}#eh-syringe-popup-root .checkbox-item svg.checked path+path{-webkit-transition:all .28s cubic-bezier(.4,0,.2,1) .28s;-moz-transition:all .28s cubic-bezier(.4,0,.2,1) .28s;transition:all .28s cubic-bezier(.4,0,.2,1) .28s}#eh-syringe-popup-root .checkbox-item input[type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:16px;margin-right:2px;-webkit-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;-moz-transition:all .28s cubic-bezier(.4,0,.2,1) 0s;transition:all .28s cubic-bezier(.4,0,.2,1) 0s;vertical-align:top;width:16px}#eh-syringe-popup-root .checkbox-item input[type=checkbox]:focus{outline:none}#eh-syringe-popup-root #settingForm input[type=range]{appearance:none;-moz-appearance:none;-webkit-appearance:none;border-radius:8px;width:100%}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-runnable-track{border-radius:10px;-webkit-box-sizing:border-box;box-sizing:border-box;height:6px}#eh-syringe-popup-root #settingForm input[type=range]:focus{outline:none}#eh-syringe-popup-root #settingForm input[type=range]::-webkit-slider-thumb{appearance:none;-moz-appearance:none;-webkit-appearance:none;border-radius:50%;-webkit-box-sizing:border-box;box-sizing:border-box;height:16px;margin-top:-6px;-webkit-transition:all .28s cubic-bezier(.4,0,.2,1);transition:all .28s cubic-bezier(.4,0,.2,1);width:16px}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-track{border-radius:10px;-moz-box-sizing:border-box;box-sizing:border-box;height:6px}#eh-syringe-popup-root #settingForm input[type=range]::-moz-range-thumb{appearance:none;-moz-appearance:none;-webkit-appearance:none;border-radius:50%;-moz-box-sizing:border-box;box-sizing:border-box;height:16px;margin-top:-6px;-moz-transition:all .28s cubic-bezier(.4,0,.2,1);transition:all .28s cubic-bezier(.4,0,.2,1);width:16px}#eh-syringe-popup-root #settingForm h3 span{font-size:20pt;font-weight:400}#eh-syringe-popup-root .image-level{margin:4px}#eh-syringe-popup-root .range-title{margin:0}#eh-syringe-popup-root .range-box{margin:5px}#eh-syringe-popup-root .range-label{-webkit-box-pack:justify;-moz-box-pack:justify;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:space-between;justify-content:space-between}#eh-syringe-popup-root .range-label a{-webkit-box-flex:0;-moz-box-flex:0;display:inline-block;-webkit-flex:none;flex:none;font-size:10pt;text-align:center;width:30px}", "",{"version":3,"sources":["webpack://./src/plugin/popup/index.less"],"names":[],"mappings":"AAAA,uBAEI,gBAAA,CACA,kBAAA,CAFA,eAAA,CAAA,kBAGJ,CAJA,8GAQQ,kBAAA,CACA,aAER,CAXA,6BAaQ,WAAA,CAEA,QAAA,CADA,SAER,CAhBA,qFAoBQ,eAAA,CACA,QAAR,CArBA,yBAyBQ,aAAA,CADA,SACR,CAzBA,yBA4BQ,wBAAA,CAEA,4BAAA,CAAA,oBAAA,CADA,sDAAA,CAAA,mDAAA,CAAA,8CACR,CAOI,yDAEI,kBAAA,CACA,UALR,CAEI,yEAMQ,kBAAA,CACA,aAJZ,CAMY,yFAEI,kBAAA,CADA,oBAAA,CAEA,aAHhB,CAKY,qGACI,kBAFhB,CAIY,uGACI,kBADhB,CAqGA,6BA9FQ,aAJR,CAkGA,+BA3FQ,aAJR,CA+FA,yBAxFQ,aAJR,CAKQ,+BACI,aAHZ,CAKQ,gCACI,aAHZ,CAKQ,+BACI,aAHZ,CAIY,qCACI,aAFhB,CAIY,sCACI,aAFhB,CA6EA,2CApEY,YANZ,CA0EA,+CAjEY,YANZ,CAuEA,2CA9DY,YANZ,CAoEA,6CA3DY,cANZ,CAiEA,iDAxDY,cANZ,CA8DA,6CArDY,cANZ,CA2DA,4DA/CY,cATZ,CAwDA,yDA3CY,wBAVZ,CAWY,iEACI,wBAThB,CAcY,qFACI,wBAZhB,CAcY,wEACI,wBAZhB,CAcY,4EACI,kBAAA,CACA,wBAZhB,CAcY,wEACI,kBAAA,CACA,wBAZhB,CAcY,kFACI,wBAAA,CACA,yCAAA,CAAA,iCAZhB,CAcY,8EACI,wBAAA,CACA,iCAZhB,CAcY,mFAEI,kBAAA,CADA,wBAAA,CAEA,6CAAA,CAAA,qCAZhB,CAcY,+EAEI,kBAAA,CADA,wBAAA,CAEA,qCAZhB,CA0BA,uBACI,kBAxBJ,CA2BA,0BACI,kBAzBJ,CA1GI,2EAEI,kBAAA,CACA,UA4GR,CA/GI,2FAMQ,kBAAA,CACA,aA6GZ,CA3GY,2GAEI,kBAAA,CADA,oBAAA,CAEA,aA8GhB,CA5GY,uHACI,kBA+GhB,CA7GY,yHACI,kBAgHhB,CAIA,sCA9GQ,aA6GR,CACA,wCA3GQ,aA6GR,CAFA,kCAxGQ,aA6GR,CA5GQ,wCACI,aA8GZ,CA5GQ,yCACI,aA8GZ,CA5GQ,wCACI,aA8GZ,CA7GY,8CACI,aA+GhB,CA7GY,+CACI,aA+GhB,CApBA,oDApFY,YA2GZ,CAvBA,wDAjFY,YA2GZ,CA1BA,oDA9EY,YA2GZ,CA7BA,sDA3EY,cA2GZ,CAhCA,0DAxEY,cA2GZ,CAnCA,sDArEY,cA2GZ,CAtCA,qEA/DY,cAwGZ,CAzCA,kEA3DY,wBAuGZ,CAtGY,0EACI,wBAwGhB,CAnGY,8FACI,wBAqGhB,CAnGY,iFACI,wBAqGhB,CAnGY,qFACI,kBAAA,CACA,wBAqGhB,CAnGY,iFACI,kBAAA,CACA,wBAqGhB,CAnGY,2FACI,wBAAA,CACA,yCAAA,CAAA,iCAqGhB,CAnGY,uFACI,wBAAA,CACA,iCAqGhB,CAnGY,4FAEI,kBAAA,CADA,wBAAA,CAEA,6CAAA,CAAA,qCAqGhB,CAnGY,wFAEI,kBAAA,CADA,wBAAA,CAEA,qCAqGhB,CAvEA,uBAGI,sBAAA,CACA,cAAA,CAGA,eAAA,CACA,eAAA,CAPA,eAAA,CAKA,WAAA,CAGA,iBAAA,CAJA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAHA,kBAgFJ,CAlFA,+BAaQ,YAAA,CADA,iBA0ER,CAtFA,kCAmBQ,2BAAA,CAAA,4BAAA,CAAA,wBAAA,CAAA,yBAAA,CADA,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,YAAA,CACA,6BAAA,CAAA,qBAAA,CAFA,aA0ER,CA3FA,0CAyBY,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,YAAA,CAFA,aAAA,CADA,WA0EZ,CAhGA,mDA2BgB,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,SAwEhB,CAnGA,+CA8BgB,aAwEhB,CAtGA,2CAoCY,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,SAAA,CADA,aAAA,CAEA,gBAsEZ,CA3GA,0CAkDY,uCAAA,CASA,qBAAA,CAHA,iBAAA,CAXA,6BAAA,CAAA,0BAAA,CAAA,qBAAA,CAGA,cAAA,CAPA,aAAA,CAEA,cAAA,CADA,gBAAA,CAEA,WAAA,CAUA,cAAA,CALA,SAAA,CAQA,gBAAA,CAFA,cAAA,CATA,iBAAA,CAOA,iBAAA,CADA,4BAAA,CAAA,oBAAA,CAMA,+BAAA,CAAA,4BAAA,CAAA,uBAAA,CAEA,4GAAA,CAAA,oGAAA,CAAA,iGAAA,CAAA,4FAAA,CAAA,4IAAA,CAbA,wBAAA,CAAA,qBAAA,CAAA,oBAAA,CAAA,gBAAA,CAIA,kBA8EZ,CAjEY,kDACI,wGAAA,CAAA,gGAmEhB,CA9DY,yDACI,8GAAA,CAAA,sGAgEhB,CA3DY,mDACI,UA6DhB,CA3DY,gDACI,qBA6DhB,CA7IA,uCAyFQ,0BAAA,CAAA,uBAAA,CAAA,sBAAA,CAAA,kBAAA,CAHA,sGAAA,CAAA,8FAAA,CAAA,uIAAA,CAAA,sFAAA,CAAA,iLA2DR,CAvDQ,gDACI,2BAAA,CAAA,wBAAA,CAAA,uBAAA,CAAA,mBAyDZ,CApJA,iCAkGQ,YAAA,CAFA,eAAA,CAGA,mBAAA,CAFA,iBAyDR,CA1JA,6BAuGQ,aAAA,CADA,iBAAA,CAGA,yCAAA,CAAA,sCAAA,CAAA,qCAAA,CAAA,iCAAA,CADA,iEAAA,CAAA,yDAAA,CAAA,kGAAA,CAAA,iDAAA,CAAA,4IAwDR,CAhKA,sCA2GY,kBAwDZ,CAnKA,oCA8GY,SAAA,CACA,kCAAA,CAAA,+BAAA,CAAA,8BAAA,CAAA,0BAwDZ,CAvKA,qCAkHY,SAwDZ,CA1KA,+GAuHY,yIAAA,CAAA,iIAAA,CAAA,0KAAA,CAAA,yHAAA,CAAA,oNAwDZ,CAnDQ,uCAOI,yCAAA,CAAA,sCAAA,CAAA,qCAAA,CAAA,iCA+CZ,CAtDQ,+CAEQ,SAuDhB,CAzDQ,8CAKQ,SAuDhB,CApDY,iDACI,0DAAA,CAAA,uDAAA,CAAA,sDAAA,CAAA,kDAsDhB,CAvDY,2KAKQ,kGAAA,CAAA,0FAAA,CAAA,kIAAA,CAAA,kFAAA,CAAA,2KAuDpB,CAhMA,6BAmJQ,WAAA,CAMA,cAAA,CAHA,WAAA,CAFA,MAAA,CAGA,gBAAA,CALA,iBAAA,CAGA,OAAA,CAGA,iBAkDR,CA1MA,kCA6JQ,mFAgDR,CA7MA,6BAgKQ,cAgDR,CAhNA,0CAuKQ,QAAA,CAFA,MAAA,CAKA,SAAA,CADA,mBAAA,CALA,iBAAA,CAIA,OAAA,CAFA,KAAA,CAQA,4BAAA,CAAA,yBAAA,CAAA,wBAAA,CAAA,oBAAA,CAHA,sGAAA,CAAA,8FAAA,CAAA,uIAAA,CAAA,sFAAA,CAAA,iLAgDR,CA3CQ,mDAEI,SAAA,CADA,mBAAA,CAEA,0BAAA,CAAA,uBAAA,CAAA,sBAAA,CAAA,kBA6CZ,CAhOA,uDAuLY,cAAA,CACA,gBA4CZ,CApOA,sCA4LQ,aA2CR,CAvOA,4CAgMY,aAAA,CADA,iBA4CZ,CA3OA,0CAqMY,WAAA,CAEA,QAAA,CADA,iBAAA,CAEA,OAAA,CAJA,UA8CZ,CAlPA,+CA0MgB,qBAAA,CACA,sBAAA,CACA,iBAAA,CACA,oBAAA,CACA,qBAAA,CACA,SA2ChB,CAxCY,uDAEQ,gCAAA,CACA,mBAAA,CACA,sDAAA,CAAA,mDAAA,CAAA,8CAyCpB,CA7CY,4DAOQ,wDAAA,CAAA,qDAAA,CAAA,gDAyCpB,CAlQA,2DA+NY,uBAAA,CAAA,oBAAA,CAAA,eAAA,CAIA,6BAAA,CAAA,0BAAA,CAAA,qBAAA,CAFA,WAAA,CACA,gBAAA,CAGA,sDAAA,CAAA,mDAAA,CAAA,8CAAA,CADA,kBAAA,CAJA,UA2CZ,CA3QA,iEAwOY,YAsCZ,CA9QA,sDA8OY,eAAA,CACA,oBAAA,CACA,uBAAA,CACA,iBAAA,CACA,UAmCZ,CArRA,qFAsPY,kBAAA,CACA,6BAAA,CAAA,qBAAA,CAFA,UAqCZ,CA1RA,4DA0PY,YAmCZ,CA7RA,4EA6PY,eAAA,CACA,oBAAA,CACA,uBAAA,CAKA,iBAAA,CADA,6BAAA,CAAA,qBAAA,CAHA,WAAA,CAEA,eAAA,CAGA,mDAAA,CAAA,2CAAA,CAJA,UAuCZ,CAxSA,wEA0QY,kBAAA,CACA,0BAAA,CAAA,qBAAA,CAFA,UAoCZ,CA7SA,wEA8QY,eAAA,CACA,oBAAA,CACA,uBAAA,CAKA,iBAAA,CADA,0BAAA,CAAA,qBAAA,CAHA,WAAA,CAEA,eAAA,CAGA,gDAAA,CAAA,2CAAA,CAJA,UAsCZ,CAxTA,4CA4RgB,cAAA,CADA,eAiChB,CA5TA,oCAiSQ,UA8BR,CA/TA,oCAoSQ,QA8BR,CAlUA,kCAuSQ,UA8BR,CArUA,oCA2SQ,wBAAA,CAAA,qBAAA,CADA,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,YAAA,CACA,qCAAA,CAAA,6BA8BR,CAzUA,sCA6SY,kBAAA,CAAA,eAAA,CAIA,oBAAA,CAJA,iBAAA,CAAA,SAAA,CACA,cAAA,CAEA,iBAAA,CADA,UAiCZ","sourcesContent":["#eh-syringe-popup-root {\n    text-align: initial;\n    font-size: initial;\n    line-height: initial;\n    input,\n    table,\n    th,\n    td {\n        background: inherit;\n        color: inherit;\n    }\n\n    input {\n        border: none;\n        padding: 0;\n        margin: 0;\n    }\n\n    input[type='radio'],\n    input[type='checkbox'] {\n        position: initial;\n        top: initial;\n    }\n    p {\n        padding: 0;\n        margin: 0.8em 0;\n    }\n    a {\n        background: rgba(0, 0, 0, 0);\n        transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n        text-decoration: none;\n    }\n}\n\n// theme\n.theme(@background, @foreground, @shadow, @accent) {\n    @soft-accent: softlight(@accent, @background);\n    &,\n    .ehs-panel {\n        background: @background;\n        color: @foreground;\n\n        .action {\n            background: @background;\n            color: @accent;\n\n            &.primary {\n                border-color: @accent;\n                background: @accent;\n                color: @background;\n            }\n            &.primary:hover {\n                background: softlight(@accent, @foreground);\n            }\n            &.primary:active {\n                background: softlight(@accent, @background);\n            }\n        }\n    }\n\n    #info {\n        color: @accent;\n    }\n    .hasNew {\n        color: softlight(#aa575e, @foreground);\n    }\n    a {\n        color: @accent;\n        &:hover {\n            color: softlight(@accent, @foreground);\n        }\n        &:active {\n            color: softlight(@accent, @background);\n        }\n        &.minor {\n            color: #a5a3a6;\n            &:hover {\n                color: #d2cdd4;\n            }\n            &:active {\n                color: #838185;\n            }\n        }\n    }\n    .logo svg {\n        @sa: lighten(average(@accent, @background), 10%);\n        [fill-bg] {\n            fill: @background;\n        }\n        [fill-accent] {\n            fill: @accent;\n        }\n        [fill-sa] {\n            fill: @sa;\n        }\n        [stroke-bg] {\n            stroke: @background;\n        }\n        [stroke-accent] {\n            stroke: @accent;\n        }\n        [stroke-sa] {\n            stroke: @sa;\n        }\n    }\n\n    #settingForm {\n        .checkbox-item svg path {\n            stroke: @accent;\n        }\n\n        input[type='checkbox'] {\n            border: solid 2px #a09da6;\n            &:checked {\n                border: solid 2px @accent;\n            }\n        }\n\n        input[type='range'] {\n            &::-webkit-slider-runnable-track {\n                border: 1px @soft-accent solid;\n            }\n            &::-moz-range-track {\n                border: 1px @soft-accent solid;\n            }\n            &::-webkit-slider-thumb {\n                background: @background;\n                border: solid 2px @accent;\n            }\n            &::-moz-range-thumb {\n                background: @background;\n                border: solid 2px @accent;\n            }\n            &:focus::-webkit-slider-thumb {\n                border: solid 2px @accent;\n                box-shadow: 0 0 7px @shadow;\n            }\n            &:focus::-moz-range-thumb {\n                border: solid 2px @accent;\n                box-shadow: 0 0 7px @shadow;\n            }\n            &:active::-webkit-slider-thumb {\n                border: solid 2px @accent;\n                background: overlay(@background, @background);\n                box-shadow: 0 0 7px 1px @shadow;\n            }\n            &:active::-moz-range-thumb {\n                border: solid 2px @accent;\n                background: overlay(@background, @background);\n                box-shadow: 0 0 7px 1px @shadow;\n            }\n        }\n    }\n}\n\n#eh-syringe-popup-root {\n    @background: rgb(240, 240, 240);\n    @foreground: #111;\n    @shadow: rgba(0, 0, 0, 0.2);\n    @accent: #8041a6;\n    .theme(@background, @foreground, @shadow, @accent);\n}\n\n#eh-syringe-popup-host {\n    background: rgb(240, 240, 240);\n}\n\n#eh-syringe-popup-host.ex {\n    background: rgb(49, 49, 49);\n}\n\n:root.ex #eh-syringe-popup-root {\n    @background: rgb(49, 49, 49);\n    @foreground: #eee;\n    @shadow: rgba(0, 0, 0, 0.2);\n    @accent: #ce90f1;\n    .theme(@background, @foreground, @shadow, @accent);\n}\n\n#eh-syringe-popup-root {\n    overflow: hidden;\n    white-space: nowrap;\n    font-family: sans-serif;\n    font-size: 12pt;\n    user-select: none;\n    padding: 1px;\n    max-width: 400px;\n    min-width: 240px;\n    position: relative;\n\n    .hidden {\n        visibility: hidden;\n        display: none;\n    }\n\n    .ehs-panel {\n        margin: 0 auto;\n        display: flex;\n        flex-direction: column;\n\n        .header {\n            margin: 16px;\n            line-height: 1;\n            //font-size: 16px;\n            display: flex;\n            > .cushion {\n                flex: auto;\n            }\n            span {\n                color: #a5a3a6;\n            }\n        }\n\n        .content {\n            margin: 0 16px;\n            flex: auto;\n            overflow: visible;\n        }\n\n        .action {\n            display: block;\n            line-height: 36px;\n            font-size: 16px;\n            margin: 16px;\n            box-sizing: border-box;\n            position: relative;\n            user-select: none;\n            cursor: pointer;\n            outline: 0;\n            -webkit-tap-highlight-color: transparent;\n            white-space: nowrap;\n            text-decoration: none;\n            text-align: center;\n            min-width: 64px;\n            padding: 0 16px;\n            border-radius: 4px;\n            overflow: visible;\n            transform: translate3d(0, 0, 0);\n            border: 1px #ddd solid;\n            transition:\n                background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),\n                box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n\n            &.primary {\n                box-shadow:\n                    0 3px 1px -2px rgba(0, 0, 0, 0.2),\n                    0 2px 2px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n            }\n            &.primary:active {\n                box-shadow:\n                    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n            }\n            &:disabled {\n                opacity: 0.6;\n            }\n            &:focus {\n                border: 1px #888 solid;\n            }\n        }\n    }\n\n    #ehs-main-panel {\n        transition:\n            opacity 280ms cubic-bezier(0.4, 0, 0.2, 1),\n            transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1);\n        &.ehs-hide {\n            transform: scale(0.9);\n        }\n    }\n\n    .logo-box {\n        overflow: hidden;\n        position: relative;\n        margin: -16px;\n        pointer-events: none;\n    }\n    .logo {\n        text-align: center;\n        margin: 20px 0;\n        transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1) rotate(-45deg);\n        #Syringe {\n            pointer-events: all;\n        }\n        #Enema {\n            opacity: 0;\n            transform-origin: 61px 86px;\n        }\n        #Enema2 {\n            opacity: 1;\n        }\n        #Enema,\n        #Enema2,\n        #PushRod {\n            transition:\n                width 280ms cubic-bezier(0.4, 0, 0.2, 1),\n                opacity 280ms cubic-bezier(0.4, 0, 0.2, 1),\n                transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        }\n        &.prominent {\n            #Enema2 {\n                opacity: 0;\n            }\n            #Enema {\n                opacity: 1;\n            }\n            transform: scale(1.6) rotate(0deg);\n            &.injection {\n                transform: scale(1.6) rotate(0deg) translate(-10px, 0);\n                #Enema,\n                #Enema2,\n                #PushRod {\n                    transition:\n                        width 600ms cubic-bezier(0.4, 0, 0.2, 1),\n                        transform 600ms cubic-bezier(0.4, 0, 0.2, 1);\n                }\n            }\n        }\n    }\n\n    #info {\n        position: absolute;\n        bottom: 30px;\n        left: 0;\n        right: 0;\n        height: 24px;\n        line-height: 24px;\n        text-align: center;\n        font-size: 16px;\n    }\n\n    .monospace {\n        font-family: Menlo, Consolas, 'Source Code Pro', Inconsolata, Monaco, 'Courier New', monospace;\n    }\n    table {\n        font-size: 14px;\n    }\n\n    #ehs-setting-panel {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        pointer-events: none;\n        opacity: 0;\n        transition:\n            opacity 280ms cubic-bezier(0.4, 0, 0.2, 1),\n            transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transform: scale(1.1);\n\n        &.ehs-show {\n            pointer-events: auto;\n            opacity: 1;\n            transform: scale(1);\n        }\n\n        #settingForm {\n            font-size: 10pt;\n            line-height: 12pt;\n        }\n    }\n    .checkbox-item {\n        padding: 4px 0;\n\n        label {\n            position: relative;\n            display: block;\n        }\n\n        svg {\n            width: 10px;\n            height: 10px;\n            position: absolute;\n            left: 3px;\n            top: 3px;\n            path {\n                stroke-dasharray: 1000;\n                stroke-dashoffset: 1000;\n                stroke-width: 16px;\n                stroke-linecap: round;\n                stroke-linejoin: round;\n                fill: none;\n            }\n\n            &.checked {\n                path {\n                    stroke-dasharray: 113.137, 113.137;\n                    stroke-dashoffset: 0;\n                    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n                }\n                path + path {\n                    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 280ms;\n                }\n            }\n        }\n\n        input[type='checkbox'] {\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            margin-right: 2px;\n            box-sizing: border-box;\n            vertical-align: top;\n            transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n        }\n        input[type='checkbox']:focus {\n            outline: none;\n        }\n    }\n\n    #settingForm {\n        input[type='range'] {\n            appearance: none;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            border-radius: 8px;\n            width: 100%;\n        }\n        input[type='range']::-webkit-slider-runnable-track {\n            height: 6px;\n            border-radius: 10px;\n            box-sizing: border-box;\n        }\n        input[type='range']:focus {\n            outline: none;\n        }\n        input[type='range']::-webkit-slider-thumb {\n            appearance: none;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            height: 16px;\n            width: 16px;\n            margin-top: -6px;\n            box-sizing: border-box;\n            border-radius: 50%;\n            transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        }\n\n        input[type='range']::-moz-range-track {\n            height: 6px;\n            border-radius: 10px;\n            box-sizing: border-box;\n        }\n        input[type='range']::-moz-range-thumb {\n            appearance: none;\n            -moz-appearance: none;\n            -webkit-appearance: none;\n            height: 16px;\n            width: 16px;\n            margin-top: -6px;\n            box-sizing: border-box;\n            border-radius: 50%;\n            transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        }\n\n        h3 {\n            span {\n                font-weight: 400;\n                font-size: 20pt;\n            }\n        }\n    }\n    .image-level {\n        margin: 4px;\n    }\n    .range-title {\n        margin: 0;\n    }\n    .range-box {\n        margin: 5px;\n    }\n    .range-label {\n        display: flex;\n        justify-content: space-between;\n        a {\n            flex: none;\n            font-size: 10pt;\n            width: 30px;\n            text-align: center;\n            display: inline-block;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2904);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(890);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root.eh{color-scheme:light}:root.ex{color-scheme:dark}:root.ehs-hide-icon [ehs-emoji],:root.ehs-hide-icon [ehs-icon]{display:none}td.tc{white-space:nowrap}div.gt,div.gtl,div.gtw{height:16px;line-height:16px;white-space:nowrap}textarea[name=expungexpl]{display:block}body h1#gj{margin:3px 4px}body div#gright{z-index:3}body .g2{padding-bottom:20px}body .gsp{padding-top:10px}body div.gt,body div.gtl,body div.gtw{height:16px;line-height:16px;overflow:hidden}body div#gmid{height:auto}body p.gpc-translate{clear:both;font-size:9pt;margin:-3px auto;padding:0 5px 5px;text-align:center}body div.c6{text-align:left}@media screen and (max-width:990px){body p.gpc-translate{margin-top:25px;visibility:hidden!important}}[ehs-emoji],[ehs-icon]{margin:0 1px!important;max-height:1.25em!important;max-width:2em!important}[ehs-icon]{vertical-align:middle}.ehs-new-tag-complete-translate{display:block;font-weight:bolder;margin-top:4px;opacity:.8;pointer-events:none}.ehs-new-tag-complete-translate:empty{display:none}", "",{"version":3,"sources":["webpack://./src/plugin/syringe/index.less"],"names":[],"mappings":"AAGI,SACI,kBAFR,CAII,SACI,iBAFR,CAMA,+DAGQ,YALR,CASA,MACI,kBAPJ,CAUA,uBAGI,WAAA,CACA,gBAAA,CACA,kBARJ,CAWA,0BACI,aATJ,CAYA,WAEQ,cAXR,CASA,gBAMQ,SAZR,CAMA,SAUQ,mBAbR,CAGA,UAcQ,gBAdR,CAAA,sCAqBQ,WAAA,CACA,gBAAA,CAFA,eAbR,CAPA,cA0BQ,WAhBR,CAVA,qBAiCQ,UAAA,CACA,aAAA,CAJA,gBAAA,CAEA,iBAAA,CADA,iBAdR,CAjBA,YAsCQ,eAlBR,CAqBI,oCAAA,qBAEQ,eAAA,CACA,2BAnBV,CACF,CAuBA,uBAII,sBAAA,CAFA,2BAAA,CACA,uBApBJ,CAwBA,WACI,qBAtBJ,CAyBA,gCACI,aAAA,CAMA,kBAAA,CADA,cAAA,CAEA,UAAA,CACA,mBA3BJ,CAoBI,sCACI,YAlBR","sourcesContent":["// 全局注入样式\n\n:root {\n    &.eh {\n        color-scheme: light;\n    }\n    &.ex {\n        color-scheme: dark;\n    }\n}\n\n:root.ehs-hide-icon {\n    [ehs-icon],\n    [ehs-emoji] {\n        display: none;\n    }\n}\n\ntd.tc {\n    white-space: nowrap;\n}\n\ndiv.gt,\ndiv.gtl,\ndiv.gtw {\n    height: 16px;\n    line-height: 16px;\n    white-space: nowrap;\n}\n\ntextarea[name='expungexpl'] {\n    display: block;\n}\n\nbody {\n    h1#gj {\n        margin: 3px 4px;\n    }\n\n    div#gright {\n        z-index: 3;\n    }\n\n    .g2 {\n        padding-bottom: 20px;\n    }\n\n    .gsp {\n        padding-top: 10px;\n    }\n\n    div.gtl,\n    div.gtw,\n    div.gt {\n        overflow: hidden;\n        height: 16px;\n        line-height: 16px;\n    }\n\n    div#gmid {\n        height: auto;\n    }\n\n    p.gpc-translate {\n        margin: -3px auto;\n        text-align: center;\n        padding: 0px 5px 5px 5px;\n        clear: both;\n        font-size: 9pt;\n    }\n\n    div.c6 {\n        text-align: left;\n    }\n\n    @media screen and (max-width: 990px) {\n        p.gpc-translate {\n            margin-top: 25px;\n            visibility: hidden !important;\n        }\n    }\n}\n\n[ehs-icon],\n[ehs-emoji] {\n    max-height: 1.25em !important;\n    max-width: 2em !important;\n    margin: 0 1px !important;\n}\n\n[ehs-icon] {\n    vertical-align: middle;\n}\n\n.ehs-new-tag-complete-translate {\n    display: block;\n    &:empty {\n        display: none;\n    }\n\n    margin-top: 4px;\n    font-weight: bolder;\n    opacity: 0.8;\n    pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2904);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(890);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".eh-syringe-lite-auto-complete-list{background:#f8f4ec;border-radius:4px;-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);color:#5c0d12;display:block;max-height:50vh;min-height:20px;overflow:auto;padding:8px 0;position:fixed;-moz-text-align-last:left;text-align-last:left;z-index:10000000000000000000}:root.ex .eh-syringe-lite-auto-complete-list{background:#2b2b2b;color:#f1f1f1}.eh-syringe-lite-auto-complete-list:empty,.eh-syringe-lite-auto-complete-list[hidden]{display:none}.eh-syringe-lite-auto-complete-list.exclude .auto-complete-item .en-name:before{content:\"- \"}.eh-syringe-lite-auto-complete-list .auto-complete-item{-webkit-box-pack:justify;-moz-box-pack:justify;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:space-between;justify-content:space-between;line-height:24px;padding:0 8px}.eh-syringe-lite-auto-complete-list .auto-complete-item img{display:inline-block!important;height:8pt;vertical-align:text-top}.eh-syringe-lite-auto-complete-list .auto-complete-item>span{-webkit-box-flex:0;-moz-box-flex:0;-webkit-flex:none;flex:none}.eh-syringe-lite-auto-complete-list .auto-complete-item.selected,.eh-syringe-lite-auto-complete-list .auto-complete-item:hover{background:#e8ecf3}:root.ex .eh-syringe-lite-auto-complete-list .auto-complete-item.selected,:root.ex .eh-syringe-lite-auto-complete-list .auto-complete-item:hover{background:#3e3f40}.eh-syringe-lite-auto-complete-list .auto-complete-item .en-name{color:#5f6368;padding:0 8px}:root.ex .eh-syringe-lite-auto-complete-list .auto-complete-item .en-name{color:#d9d9d9}.eh-syringe-lite-auto-complete-list mark{background:#f5f500;color:inherit}:root.ex .eh-syringe-lite-auto-complete-list mark{background:#727200}", "",{"version":3,"sources":["webpack://./src/plugin/tag-tip/index.less"],"names":[],"mappings":"AAAA,oCACI,kBAAA,CAWA,iBAAA,CACA,wGAAA,CAAA,gGAAA,CAXA,aAAA,CAeA,aAAA,CACA,eAAA,CARA,eAAA,CASA,aAAA,CACA,aAAA,CAXA,cAAA,CAEA,yBAAA,CAAA,oBAAA,CAUA,4BARJ,CATI,6CACI,kBAAA,CACA,aAWR,CAKI,sFAEI,YAHR,CAMI,gFAGY,YANhB,CAxBA,wDAuCQ,wBAAA,CAAA,qBAAA,CACA,cAAA,CAFA,mBAAA,CAAA,oBAAA,CAAA,gBAAA,CAAA,YAAA,CACA,qCAAA,CAAA,6BAAA,CAFA,gBAAA,CADA,aALR,CA/BA,4DA0CY,8BAAA,CACA,UAAA,CACA,uBARZ,CApCA,6DAgDY,kBAAA,CAAA,eAAA,CAAA,iBAAA,CAAA,SATZ,CAYQ,+HAEI,kBAVZ,CAYY,iJACI,kBAThB,CA/CA,iEA6DY,aAAA,CADA,aATZ,CAYY,0EACI,aAVhB,CAtDA,yCAuEQ,kBAAA,CADA,aAZR,CAcQ,kDACI,kBAZZ","sourcesContent":[".eh-syringe-lite-auto-complete-list {\n    background: #f8f4ec;\n    color: #5c0d12;\n\n    :root.ex & {\n        background: #2b2b2b;\n        color: #f1f1f1;\n    }\n\n    position: fixed;\n    min-height: 20px;\n    text-align-last: left;\n    border-radius: 4px;\n    box-shadow:\n        0 1px 3px 0 rgba(0, 0, 0, 0.2),\n        0 1px 1px 0 rgba(0, 0, 0, 0.14),\n        0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    display: block;\n    max-height: 50vh;\n    overflow: auto;\n    padding: 8px 0;\n    z-index: 9999999999999999999;\n    &[hidden],\n    &:empty {\n        display: none;\n    }\n\n    &.exclude {\n        .auto-complete-item {\n            .en-name::before {\n                content: '- ';\n            }\n        }\n    }\n\n    .auto-complete-item {\n        padding: 0 8px;\n        line-height: 24px;\n        display: flex;\n        justify-content: space-between;\n        cursor: pointer;\n        img {\n            display: inline-block !important;\n            height: 8pt;\n            vertical-align: text-top;\n        }\n\n        > span {\n            flex: none;\n        }\n\n        &:hover,\n        &.selected {\n            background: #e8ecf3;\n\n            :root.ex & {\n                background: #3e3f40;\n            }\n        }\n        .en-name {\n            padding: 0 8px;\n            color: #5f6368;\n\n            :root.ex & {\n                color: #d9d9d9;\n            }\n        }\n    }\n\n    mark {\n        color: inherit;\n        background: #f5f500;\n        :root.ex & {\n            background: #727200;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2904);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(890);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5189);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(7855), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_89_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#eh-syringe-popup-button{background:50%/65% no-repeat #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");border:2px solid #6e066e;border-radius:36px;-webkit-box-shadow:0 0 2px 1px rgba(0,0,0,.5);box-shadow:0 0 2px 1px rgba(0,0,0,.5);height:36px;position:fixed;touch-action:none;width:36px;z-index:1000}#eh-syringe-popup-button:hover{cursor:pointer}:root.ex #eh-syringe-popup-button{background-color:#bbb;border-color:#926a92}#eh-syringe-popup-badge{background:#444;border-radius:4px;color:#fff;font-size:12px;height:14px;padding:2px 4px;position:absolute;right:-10px;top:-10px}#eh-syringe-popup-back{background:rgba(0,0,0,.3);bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;-webkit-transition:visibility,opacity .4s;-moz-transition:visibility,opacity .4s;transition:visibility,opacity .4s;visibility:hidden;z-index:2000}#eh-syringe-popup-back.open,#eh-syringe-popup-back.opening{opacity:1;visibility:visible}#eh-syringe-popup-back.closing{opacity:0;visibility:visible}#eh-syringe-popup{background:#f0f0f0;border:1px solid #ca8dca;border-radius:6px;bottom:72px;-webkit-box-shadow:0 0 6px 2px rgba(0,0,0,.5);box-shadow:0 0 6px 2px rgba(0,0,0,.5);overflow:hidden;position:absolute;right:12px}:root.ex #eh-syringe-popup{background:#313131}", "",{"version":3,"sources":["webpack://./src/user-script/popup-host.less"],"names":[],"mappings":"AAAA,yBAUI,yEAAA,CAFA,wBAAA,CADA,kBAAA,CAEA,6CAAA,CAAA,qCAAA,CAHA,WAAA,CALA,cAAA,CACA,iBAAA,CAGA,UAAA,CAMA,YADJ,CAEI,+BACI,cAAR,CAGI,kCACI,qBAAA,CACA,oBADR,CAKA,wBAQI,eAAA,CADA,iBAAA,CAEA,UAAA,CAPA,cAAA,CADA,WAAA,CAKA,eAAA,CAHA,iBAAA,CACA,WAAA,CACA,SACJ,CAMA,uBAOI,yBAAA,CALA,QAAA,CAGA,MAAA,CAIA,SAAA,CARA,cAAA,CAEA,OAAA,CACA,KAAA,CAMA,yCAAA,CAAA,sCAAA,CAAA,iCAAA,CAFA,iBAAA,CAFA,YAAJ,CAWI,2DAEI,SAAA,CADA,kBAJR,CAOI,+BAEI,SAAA,CADA,kBAJR,CASA,kBAMI,kBAAA,CAFA,wBAAA,CAGA,iBAAA,CALA,WAAA,CAGA,6CAAA,CAAA,qCAAA,CAGA,eAAA,CAPA,iBAAA,CAEA,UAFJ,CASI,2BACI,kBAPR","sourcesContent":["#eh-syringe-popup-button {\n    position: fixed;\n    touch-action: none;\n    // bottom: 12px;\n    // right: 12px;\n    width: 36px;\n    height: 36px;\n    border-radius: 36px;\n    border: rgb(110, 6, 110) 2px solid;\n    box-shadow: rgba(0, 0, 0, 0.5) 0 0 2px 1px;\n    background: center/65% no-repeat white url('../assets/logo.svg');\n    z-index: 1000;\n    &:hover {\n        cursor: pointer;\n    }\n\n    :root.ex & {\n        background-color: rgb(187, 187, 187);\n        border-color: rgb(146, 106, 146);\n    }\n}\n\n#eh-syringe-popup-badge {\n    height: 14px;\n    font-size: 12px;\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    padding: 2px 4px;\n    border-radius: 4px;\n    background: #444;\n    color: white;\n}\n\n#eh-syringe-popup-back {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    top: 0;\n    left: 0;\n    z-index: 2000;\n    background: rgba(0, 0, 0, 0.3);\n    visibility: hidden;\n    opacity: 0;\n    transition:\n        visibility,\n        opacity 0.4s;\n    &.open {\n        visibility: visible;\n        opacity: 1;\n    }\n    &.opening {\n        visibility: visible;\n        opacity: 1;\n    }\n    &.closing {\n        visibility: visible;\n        opacity: 0;\n    }\n}\n\n#eh-syringe-popup {\n    position: absolute;\n    bottom: 12px + 36px + 24px;\n    right: 12px;\n    border: #ca8dca solid 1px;\n    box-shadow: rgba(0, 0, 0, 0.5) 0 0 6px 2px;\n    background: rgb(240, 240, 240);\n    border-radius: 6px;\n    overflow: hidden;\n\n    :root.ex & {\n        background: rgb(49, 49, 49);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 890:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 5189:
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 2904:
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 3675:
/***/ (function(module) {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),

/***/ 1062:
/***/ (function(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 3566:
/***/ (function(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 4911:
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 4107:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 552:
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 3227:
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 7855:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1NS4yICg3ODE4MSkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+bG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJsb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTcuMjMxMzAzLCA3MS42NDQ5MzkpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTU3LjIzMTMwMywgLTcxLjY0NDkzOSkgIiB4PSIxOS43MzEzMDI3IiB5PSI1OS44OTQ5Mzk0IiB3aWR0aD0iNzUiIGhlaWdodD0iMjMuNSI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OC4xMzEzNTQsIDQwLjI0NTY4OSkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtODguMTMxMzU0LCAtNDAuMjQ1Njg5KSAiIHg9IjgyLjYzMTM1NDUiIHk9IjE0LjI0NTY4OSIgd2lkdGg9IjExIiBoZWlnaHQ9IjUyIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOS40ODk1OTIsIDE4LjUyNDAyOCkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTA5LjQ4OTU5MiwgLTE4LjUyNDAyOCkgIiB4PSIxMDMuOTg5NTkyIiB5PSIxLjAyNDAyODIxIiB3aWR0aD0iMTEiIGhlaWdodD0iMzUiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTkuNzk4NjE2LCAyOS4xOTY5NTYpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTk5Ljc5ODYxNiwgLTI5LjE5Njk1NikgIiB4PSI4OS41NDg2MTY0IiB5PSIyMi45NDY5NTU1IiB3aWR0aD0iMjAuNSIgaGVpZ2h0PSIxMi41Ij48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNGREJERjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0Ljg2MTY0NywgMTAyLjk4MjQxMSkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMjQuODYxNjQ3LCAtMTAyLjk4MjQxMSkgIiB4PSIxOS4zNjE2NDY3IiB5PSI5Ny40ODI0MTEiIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMSI+PC9yZWN0PgogICAgICAgICAgICA8cGF0aCBkPSJNMjcuNDI2MjQ4LDg2LjM1OTg4MjEgQzI3LjQyNjI0OCw4Ni4zNTk4ODIxIDMzLjA3NjUyMjUsODYuMzY2ODA4MSA0MS4wMjM0NzY0LDg2LjM2NTQyMyBDNDguOTc0NTg1OSw4Ni4zNjU0MjMgNTcuNjQwNDY0LDgzLjM1Njc0NTMgNTcuNjQwNDY0LDgzLjM1Njc0NTMgTDM4LjAxNDc5ODYsMTAyLjk4MjQxMSBMMjQuOTc5OTY1OSw4OS45NDc1Nzc5IEwyNy40MjQ4NjI4LDg2LjM2MTI2NzMgTDI3LjQyNjI0OCw4Ni4zNTk4ODIxIFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGREJERjEiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNOTQuNzIyNTU0OCwzNy41ODM4NDI0IEwxMDUuNjI0MTYzLDI2LjY4MjIzNDIgTDEwMS4yNzg3NTcsMjIuMzM2ODI4MiBMOTAuMzc3MTQ4OSwzMy4yMzg0MzY1IEw5NC43MjI1NTQ4LDM3LjU4Mzg0MjQgWiBNODMuODUxNDIxMiwzMS4wNzMzNTIxIEwxMDEuMjk1MzgsMTMuNjI5MzkzNiBMMTE0LjMzMTU5OCwyNi42NjU2MTE2IEw5Ni44ODYyNTM5LDQ0LjExMDk1NTMgTDgzLjg1MTQyMTIsMzEuMDc2MTIyNiBMODMuODUxNDIxMiwzMS4wNzMzNTIxIFoiIGlkPSLlvaLnirYiIGZpbGw9IiM3ODM2QTAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNNzEuMjkwMzMwNCwyMi44NzI5MDQ3IEM3MC4wODc5Njc2LDI0LjA3NTI2NzYgNzAuMTkwNDczMSwyNi4xMzM2OTA3IDcxLjUwNjQyMzIsMjcuNDQ5NjQwOSBMMTAwLjUxMjczNiw1Ni40NTU5NTMzIEMxMDEuODE0ODM0LDU3Ljc1ODA1MTQgMTAzLjg5NDAzNSw1Ny44NjQ3MTI2IDEwNS4wODgwODcsNTYuNjcwNjYwOSBDMTA2LjI5MDQ0OSw1NS40NjgyOTggMTA2LjE4Nzk0NCw1My40MDk4NzQ5IDEwNC44NzE5OTQsNTIuMDkzOTI0NyBMNzUuODY3MDY2NywyMy4wODg5OTc2IEM3NC41NjQ5Njg2LDIxLjc4Njg5OTUgNzIuNDg0MzgyMSwyMS42Nzg4NTMyIDcxLjI5MDMzMDQsMjIuODcyOTA0NyBaIE02Ni40NjI4NzExLDE4LjA0NTQ0NTMgQzcwLjA3NTUwMDYsMTQuNDMyODE1OCA3Ni4yNzAxNjI5LDE0Ljc3MDgwNzIgODAuMjI3NzEsMTguNzI4MzU0MyBMMTA5LjIzNDAyMiw0Ny43MzQ2NjY1IEMxMTMuMjIzNDI5LDUxLjcyNDA3MzQgMTEzLjUxOTg2NCw1Ny44OTM4MDE5IDEwOS45MTU1NDYsNjEuNDk4MTIwMiBDMTA2LjMwMjkxNiw2NS4xMTA3NDk3IDEwMC4xMDgyNTQsNjQuNzcyNzU4MyA5Ni4xNTA3MDcxLDYwLjgxNTIxMTQgTDY3LjE0NTc3OTksMzEuODEwMjg0MiBDNjMuMTU2MzczMSwyNy44MjA4Nzc0IDYyLjg1ODU1MjgsMjEuNjQ5NzYzNiA2Ni40NjI4NzExLDE4LjA0NTQ0NTMgWiBNOTkuMTMwMjk1Myw3LjEwMzY2NTkxIEM5Ny45MzA3MDI5LDguMzAzMjU4MzMgOTcuOTI3OTMyNCwxMC4yNjE5NDYzIDk5LjEzMDI5NTMsMTEuNDY0MzA5MiBMMTE2LjQ5NjY4MiwyOC44MzA2OTYgQzExNy43MDQ1ODYsMzAuMDM4NTk5NyAxMTkuNjUyMTkyLDMwLjAzNTgyOTMgMTIwLjg1NzMyNSwyOC44MzA2OTYgQzEyMi4wNTU1MzMsMjcuNjMyNDg4NiAxMjIuMDU5Njg4LDI1LjY3MjQxNTUgMTIwLjg1NzMyNSwyNC40NzAwNTI3IEwxMDMuNDkwOTM5LDcuMTAzNjY1OTEgQzEwMi4yODMwMzUsNS44OTU3NjIxMiAxMDAuMzM1NDI5LDUuODk4NTMyNTggOTkuMTMwMjk1Myw3LjEwMzY2NTkxIFogTTk0Ljc4NDg4OTMsMi43NTgyNTk5NyBDOTYuNTE0OTgsMS4wMjIyODYzOCA5OC44NjQxOTgsMC4wNDUyNjU1OTg0IDEwMS4zMTUwNzcsMC4wNDIzOTUwMjI4IEMxMDMuNzY1OTU3LDAuMDM5NTQ5NTQzNiAxMDYuMTE3NDQ3LDEuMDExMDg4NzIgMTA3Ljg1MTU4MiwyLjc0MzAyMjYgTDEyNS4yMTc5NjksMjAuMTA5NDA5MyBDMTI4LjgyMjI4NywyMy43MTM3Mjc3IDEyOC44MDU2NjQsMjkuNTcwMzk4NSAxMjUuMjAxMzQ2LDMzLjE3NDcxNjggQzEyMy40NzE0OTUsMzQuOTEwNDUwNCAxMjEuMTIyNjc3LDM1Ljg4NzQ1MTIgMTE4LjY3MjEzNywzNS44OTA1ODM5IEMxMTYuMjIxNTk3LDM1Ljg5MzY4NjcgMTEzLjg3MDMwMSwzNC45MjI2NjU2IDExMi4xMzYwMzksMzMuMTkxMzM5MyBMOTQuNzY5NjUyLDE1LjgyNDk1MjcgQzkxLjE2NTMzMzcsMTIuMjIwNjM0MyA5MS4xODE5NTYzLDYuMzYzOTYzNTEgOTQuNzg2Mjc0NSwyLjc1OTY0NTIgTDk0Ljc4NDg4OTMsMi43NTgyNTk5NyBaIiBpZD0i5b2i54q2IiBmaWxsPSIjNzgzNkEwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI0Ljk5Nzk1MTYsODkuOTI5NTcwMSBDMjQuOTg0MTIxNSw4OS45NDM0MjIyIDM4LjAxNjE4MzgsMTAyLjk4MTAyNiAzOC4wMTYxODM4LDEwMi45ODEwMjYgQzM4LjAyMTcyNDYsMTAyLjk4NjU2NiA4OC4xNjYzNTI1LDUyLjgzMDg1NjggODguMTY2MzUyNSw1Mi44MzA4NTY4IEw3NS4xMzE1MTk3LDM5Ljc5NjAyNCBMMjQuOTk3OTUxNiw4OS45Mjk1NzAxIFogTTc1LjE0NTM3MTgsMzEuMDg4NTg5NCBMOTYuODcyNDAxOSw1Mi44MTU2MTk0IEw0Mi4zNzgyMTI0LDEwNy4zMDk4MDkgQzQxLjIyODE3NywxMDguNDc0NTkgMzkuNjYxMzIzMywxMDkuMTMyOTY4IDM4LjAyNDQ3OTMsMTA5LjEzOTI5NiBDMzYuMzg3NjM1MiwxMDkuMTQ1NDQ3IDM0LjgxNTgwNzcsMTA4LjQ5OTAzNCAzMy42NTY5MjU4LDEwNy4zNDMwNTQgTDIwLjYxOTMyMjUsOTQuMzA1NDUwOCBDMTguMjIwMTM3NSw5MS45MDYyNjU4IDE4LjIzMjYwNDQsODguMDAxMzU2OCAyMC42NTExODIzLDg1LjU4Mjc3ODkgTDc1LjE0NTM3MTgsMzEuMDg4NTg5NCBaIiBpZD0i5b2i54q2IiBmaWxsPSIjNzgzNkEwIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIwLjU5OTkyOTUsMTAzLjAxNTY1NiBDMjAuNjA0MDg1MiwxMDMuMDExNSAyNC45NTM2NDY4LDEwNy4zNjEwNjIgMjQuOTUzNjQ2OCwxMDcuMzYxMDYyIEMyNC45NDk0OTEyLDEwNy4zNTY5MDYgMjkuMzEwMTM0NiwxMDIuOTk2MjYzIDI5LjMxMDEzNDYsMTAyLjk5NjI2MyBMMjQuOTY0NzI4NSw5OC42NTA4NTY4IEwyMC41OTk5Mjk1LDEwMy4wMTU2NTYgTDIwLjU5OTkyOTUsMTAzLjAxNTY1NiBaIE0yNC45ODEzNTEsODkuOTQzNDIyMiBMMzguMDE3NTY5MSwxMDIuOTc5NjQgTDI5LjI5MDc0MTUsMTExLjcwNjQ2OCBDMjYuODkxNTY2NCwxMTQuMTA4NzE4IDIzLjAwMDU4MDgsMTE0LjExNTUzNCAyMC41OTMwMDM1LDExMS43MjE3MDUgTDE2LjIzOTI4NjIsMTA3LjM2Nzk4OCBDMTMuODQ1NDU3LDEwNC45NjA0MTEgMTMuODUyMjczNSwxMDEuMDY5NDI1IDE2LjI1NDUyMzYsOTguNjcwMjQ5NyBMMjQuOTgxMzUxLDg5Ljk0MzQyMjIgTDI0Ljk4MTM1MSw4OS45NDM0MjIyIFoiIGlkPSLlvaLnirYiIGZpbGw9IiM3ODM2QTAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjAuNTk5OTI5NSwxMDMuMDE1NjU2IEMyMC42MDQwODUyLDEwMy4wMTE1IDI0Ljk1MzY0NjgsMTA3LjM2MTA2MiAyNC45NTM2NDY4LDEwNy4zNjEwNjIgQzI0Ljk0OTQ5MTIsMTA3LjM1NjkwNiAyOS4zMTAxMzQ2LDEwMi45OTYyNjMgMjkuMzEwMTM0NiwxMDIuOTk2MjYzIEwyNC45NjQ3Mjg1LDk4LjY1MDg1NjggTDIwLjU5OTkyOTUsMTAzLjAxNTY1NiBMMjAuNTk5OTI5NSwxMDMuMDE1NjU2IFogTTI0Ljk4MTM1MSw4OS45NDM0MjIyIEwzOC4wMTc1NjkxLDEwMi45Nzk2NCBMMjkuMjkwNzQxNSwxMTEuNzA2NDY4IEMyNi44OTE1NjY0LDExNC4xMDg3MTggMjMuMDAwNTgwOCwxMTQuMTE1NTM0IDIwLjU5MzAwMzUsMTExLjcyMTcwNSBMMTYuMjM5Mjg2MiwxMDcuMzY3OTg4IEMxMy44NDU0NTcsMTA0Ljk2MDQxMSAxMy44NTIyNzM1LDEwMS4wNjk0MjUgMTYuMjU0NTIzNiw5OC42NzAyNDk3IEwyNC45ODEzNTEsODkuOTQzNDIyMiBMMjQuOTgxMzUxLDg5Ljk0MzQyMjIgWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzc4MzZBMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4yNDM0NDE5LDEwNy4zNzIxNDMgTDAuOTc5ODA1MDUxLDEyMi42MzU3OCBDLTAuMjI1MzI4MjgzLDEyMy44NDA5MTQgLTAuMjI4MDk4NzM3LDEyNS43ODg1MiAwLjk3Mjg3OTA0LDEyNi45ODk0OTcgQzIuMTcyNDcxNDYsMTI4LjE4OTA5IDQuMTIxNDYzMDEsMTI4LjE4NDkzNCA1LjMyNTIxMDk4LDEyNi45ODExODYgTDIwLjU4ODg0NzksMTExLjcxNzU0OSBDMjEuNzkyNTk2LDExMC41MTM4MDEgMjEuNzk2NzUxNiwxMDguNTY0ODEgMjAuNTk3MTU5MSwxMDcuMzY1MjE3IEMxOS4zOTYxODE0LDEwNi4xNjQyNCAxNy40NDcxODk5LDEwNi4xNjgzOTUgMTYuMjQzNDQxOSwxMDcuMzcyMTQzIFogTTYwLjk2OTEyNTQsNDcuNDM5NjE2NyBMNjcuNDg2NTQxOCw1My45NTcwMzMxIEM2OC4wODg4NDMsNTQuNTU2Mjc4IDY5LjA2MjY5OTYsNTQuNTU0NDE4MyA2OS42NjI3MDc4LDUzLjk1Mjg3NzUgQzY5Ljk1MjIwNTEsNTMuNjY0ODUxNyA3MC4xMTU0MjY4LDUzLjI3MzYxOTkgNzAuMTE2NDc1OCw1Mi44NjUyNDk0IEM3MC4xMTc1MDUsNTIuNDU2ODc4OSA2OS45NTYyNzYzLDUyLjA2NDgyMTYgNjkuNjY4MjQ4Niw1MS43NzUzMjYzIEw2My4xNTA4MzIyLDQ1LjI1NzkwOTggQzYyLjg2MTQ2MzcsNDQuOTY5Mjc0OCA2Mi40NjkyMTI0LDQ0LjgwNzUyODQgNjIuMDYwNTAyNiw0NC44MDgzMDIyIEM2MS42NTE3OTI4LDQ0LjgwOTA4NzMgNjEuMjYwMTYxMyw0NC45NzIzMjg3IDYwLjk3MTg5NTgsNDUuMjYyMDY1NCBDNjAuMzcwNzE0NCw0NS44NjMyNDY4IDYwLjM2Nzk0MzksNDYuODM4NDM1MiA2MC45NjkxMjU0LDQ3LjQzOTYxNjcgTDYwLjk2OTEyNTQsNDcuNDM5NjE2NyBaIE01Mi4yNDc4Mzg4LDU2LjE2MDkwMzMgTDU4Ljc2NTI1NTIsNjIuNjc4MzE5NyBDNTkuMzY3NTU2NCw2My4yNzc1NjQ2IDYwLjM0MTQxMyw2My4yNzU3MDQ5IDYwLjk0MTQyMTIsNjIuNjc0MTY0MSBDNjEuNTQyOTYyLDYyLjA3NDE1NTkgNjEuNTQ0ODIxNyw2MS4xMDAyOTkzIDYwLjk0NTU3NjgsNjAuNDk3OTk4MSBMNTQuNDI4MTYwNCw1My45ODA1ODE3IEM1NC4xMzkwMzE5LDUzLjY5MjE4NzYgNTMuNzQ3MTgxMiw1My41MzA0NjEzIDUzLjMzODgxMSw1My41MzA5Nzg0IEM1Mi45MzA0NDA5LDUzLjUzMTUwMDQgNTIuNTM5MDAyOSw1My42OTQyMjMyIDUyLjI1MDYwOTIsNTMuOTgzMzUyMSBDNTEuNjQ5NDI3OCw1NC41ODQ1MzM2IDUxLjY0NjY1NzMsNTUuNTU5NzIyIDUyLjI0NzgzODgsNTYuMTYwOTAzMyBMNTIuMjQ3ODM4OCw1Ni4xNjA5MDMzIFogTTQzLjUyNjU1MjEsNjQuODgyMTkgTDUwLjA0Mzk2ODQsNzEuMzk5NjA2NCBDNTAuNjQ2MjY5Nyw3MS45OTg4NTEzIDUxLjYyMDEyNjMsNzEuOTk2OTkxNiA1Mi4yMjAxMzQ1LDcxLjM5NTQ1MDggQzUyLjgyMTY3NTMsNzAuNzk1NDQyNSA1Mi44MjM1MzUsNjkuODIxNTg2IDUyLjIyNDI5MDIsNjkuMjE5Mjg0NyBMNDUuNzA2ODczNyw2Mi43MDE4NjgzIEM0NS40MTc3NDUzLDYyLjQxMzQ3NDEgNDUuMDI1ODk0NSw2Mi4yNTE3NDc4IDQ0LjYxNzUyNDMsNjIuMjUyMjY0OSBDNDQuMjA5MTU0MSw2Mi4yNTI3ODY5IDQzLjgxNzcxNjIsNjIuNDE1NTA5OCA0My41MjkzMjI1LDYyLjcwNDYzODggQzQyLjkyNjc1NTgsNjMuMzA3MjA1NCA0Mi45MjUzNzA2LDY0LjI4MTAwODYgNDMuNTI2NTUyMSw2NC44ODIxOSBMNDMuNTI2NTUyMSw2NC44ODIxOSBaIE0zNC44MDUyNjU0LDczLjYwMzQ3NjYgTDQxLjMyMjY4MTgsODAuMTIwODkzMSBDNDEuOTI0OTgzMSw4MC43MjAxMzc5IDQyLjg5ODgzOTYsODAuNzE4Mjc4MiA0My40OTg4NDc5LDgwLjExNjczNzQgQzQ0LjEwMDM4ODcsNzkuNTE2NzI5MiA0NC4xMDIyNDg0LDc4LjU0Mjg3MjYgNDMuNTAzMDAzNSw3Ny45NDA1NzEzIEwzNi45ODU1ODcxLDcxLjQyMzE1NDkgQzM2LjY5NjQ1ODcsNzEuMTM0NzYwNyAzNi4zMDQ2MDc5LDcwLjk3MzAzNDQgMzUuODk2MjM3Nyw3MC45NzM1NTE1IEMzNS40ODc4Njc1LDcwLjk3NDA3MzYgMzUuMDk2NDI5Niw3MS4xMzY3OTY0IDM0LjgwODAzNTksNzEuNDI1OTI1NCBDMzQuMjA1NDY5Miw3Mi4wMjg0OTIgMzQuMjA0MDg0LDczLjAwMjI5NTIgMzQuODA1MjY1NCw3My42MDM0NzY2IEwzNC44MDUyNjU0LDczLjYwMzQ3NjYgWiIgaWQ9IuW9oueKtiIgZmlsbD0iIzc4MzZBMCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";

/***/ }),

/***/ 3448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(7566)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7566:
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4860:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(3448)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 6278:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(131);
__webpack_require__(5407);
__webpack_require__(5545);
__webpack_require__(1719);
__webpack_require__(9295);
__webpack_require__(9195);
// TODO: Remove from `core-js@4`
__webpack_require__(6803);
__webpack_require__(996);
__webpack_require__(1818);
__webpack_require__(7013);
__webpack_require__(6174);
__webpack_require__(7376);
__webpack_require__(5645);
__webpack_require__(8932);

module.exports = parent;


/***/ }),

/***/ 8756:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(7347);

module.exports = parent;


/***/ }),

/***/ 1187:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(3);
__webpack_require__(8426);

module.exports = parent;


/***/ }),

/***/ 5647:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(4614);

module.exports = parent;


/***/ }),

/***/ 5617:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(5400);

module.exports = parent;


/***/ }),

/***/ 417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(7943);

// TODO: Remove from `core-js@4`
__webpack_require__(2711);
__webpack_require__(1740);

module.exports = parent;


/***/ }),

/***/ 2208:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

__webpack_require__(3520);
__webpack_require__(863);
__webpack_require__(4143);
__webpack_require__(7061);
__webpack_require__(7834);
__webpack_require__(6592);
__webpack_require__(4434);
__webpack_require__(1817);
__webpack_require__(5653);
__webpack_require__(4817);
__webpack_require__(1982);
__webpack_require__(8279);
__webpack_require__(1550);
__webpack_require__(2183);
__webpack_require__(3643);
__webpack_require__(3146);
__webpack_require__(7293);
__webpack_require__(914);
__webpack_require__(8327);
__webpack_require__(7422);
__webpack_require__(3002);
__webpack_require__(8098);
__webpack_require__(1379);
__webpack_require__(287);
__webpack_require__(8074);
__webpack_require__(7996);
__webpack_require__(3290);
__webpack_require__(9394);
__webpack_require__(2027);
__webpack_require__(8865);
__webpack_require__(8800);
__webpack_require__(6421);
__webpack_require__(5741);
__webpack_require__(79);
__webpack_require__(3168);
__webpack_require__(3040);
__webpack_require__(8576);
__webpack_require__(23);
__webpack_require__(5545);
__webpack_require__(1923);
var path = __webpack_require__(2631);

module.exports = path.Array;


/***/ }),

/***/ 6264:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

__webpack_require__(1553);

module.exports = __webpack_require__(2262);


/***/ }),

/***/ 196:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

__webpack_require__(3470);
__webpack_require__(3212);
__webpack_require__(8523);
__webpack_require__(5539);
__webpack_require__(3342);
__webpack_require__(9613);
__webpack_require__(4185);
__webpack_require__(6098);
__webpack_require__(7681);
__webpack_require__(7973);
__webpack_require__(1900);
__webpack_require__(9450);
__webpack_require__(8118);
__webpack_require__(6044);
__webpack_require__(5177);
__webpack_require__(197);
__webpack_require__(5274);
__webpack_require__(5814);
__webpack_require__(2464);
__webpack_require__(1068);
__webpack_require__(6853);
__webpack_require__(6199);
__webpack_require__(4018);
__webpack_require__(5545);
__webpack_require__(5749);
__webpack_require__(7805);
__webpack_require__(7474);
__webpack_require__(5406);
__webpack_require__(1388);
__webpack_require__(9657);
__webpack_require__(9004);
var path = __webpack_require__(2631);

module.exports = path.Object;


/***/ }),

/***/ 9802:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

__webpack_require__(5545);
__webpack_require__(6855);
__webpack_require__(9595);
__webpack_require__(6707);
__webpack_require__(6381);
__webpack_require__(2536);
__webpack_require__(2781);
__webpack_require__(4745);
__webpack_require__(7726);
__webpack_require__(3527);
__webpack_require__(428);
__webpack_require__(5881);
__webpack_require__(8645);
__webpack_require__(4366);
__webpack_require__(9004);
var path = __webpack_require__(2631);

module.exports = path.Reflect;


/***/ }),

/***/ 1501:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

__webpack_require__(187);
__webpack_require__(6361);
__webpack_require__(8975);
__webpack_require__(3902);
__webpack_require__(4769);
__webpack_require__(7014);
__webpack_require__(9048);
__webpack_require__(677);
__webpack_require__(6636);
__webpack_require__(4900);
__webpack_require__(7374);


/***/ }),

/***/ 5018:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

__webpack_require__(5545);
__webpack_require__(3902);
__webpack_require__(7368);
__webpack_require__(688);
__webpack_require__(5723);
__webpack_require__(6880);
__webpack_require__(536);
__webpack_require__(3522);
__webpack_require__(116);
__webpack_require__(677);
__webpack_require__(9607);
__webpack_require__(2072);
__webpack_require__(9104);
__webpack_require__(7027);
__webpack_require__(6636);
__webpack_require__(8354);
__webpack_require__(4900);
__webpack_require__(7374);
__webpack_require__(4215);
__webpack_require__(9159);
__webpack_require__(3533);
__webpack_require__(8969);
__webpack_require__(2674);
__webpack_require__(7547);
__webpack_require__(1923);
__webpack_require__(7452);
__webpack_require__(4191);
__webpack_require__(7937);
__webpack_require__(6811);
__webpack_require__(3738);
__webpack_require__(1815);
__webpack_require__(1735);
__webpack_require__(719);
__webpack_require__(5042);
__webpack_require__(9752);
__webpack_require__(4815);
__webpack_require__(3551);
__webpack_require__(1135);
var path = __webpack_require__(2631);

module.exports = path.String;


/***/ }),

/***/ 7244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* unused reexport */ __webpack_require__(1386);


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* unused reexport */ __webpack_require__(4343);


/***/ }),

/***/ 9206:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* unused reexport */ __webpack_require__(161);


/***/ }),

/***/ 825:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* unused reexport */ __webpack_require__(1488);


/***/ }),

/***/ 9988:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* unused reexport */ __webpack_require__(6154);


/***/ }),

/***/ 3411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* unused reexport */ __webpack_require__(8618);


/***/ }),

/***/ 1386:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(6278);
__webpack_require__(5280);
// TODO: Remove from `core-js@4`
__webpack_require__(7337);
// TODO: Remove from `core-js@4`
__webpack_require__(5522);
__webpack_require__(5577);
__webpack_require__(8134);
__webpack_require__(5070);
__webpack_require__(4612);
__webpack_require__(6817);

module.exports = parent;


/***/ }),

/***/ 4343:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: remove from `core-js@4`
__webpack_require__(7481);

var parent = __webpack_require__(8756);

module.exports = parent;


/***/ }),

/***/ 161:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(1187);
// TODO: Remove from `core-js@4`
__webpack_require__(8682);
__webpack_require__(8291);
__webpack_require__(7315);
__webpack_require__(8597);

module.exports = parent;


/***/ }),

/***/ 1488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(5647);
__webpack_require__(498);
__webpack_require__(5965);
__webpack_require__(5226);
__webpack_require__(6004);
__webpack_require__(5662);
__webpack_require__(9423);
__webpack_require__(5610);
__webpack_require__(7495);
__webpack_require__(636);

module.exports = parent;


/***/ }),

/***/ 6154:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(5617);
__webpack_require__(6130);

module.exports = parent;


/***/ }),

/***/ 8618:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(417);
__webpack_require__(2604);
// TODO: remove from `core-js@4`
__webpack_require__(7197);
__webpack_require__(949);
__webpack_require__(4194);
__webpack_require__(8470);
__webpack_require__(6617);
__webpack_require__(2864);

module.exports = parent;


/***/ }),

/***/ 6717:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(1365);
var tryToString = __webpack_require__(7134);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 7754:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isConstructor = __webpack_require__(6735);
var tryToString = __webpack_require__(7134);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 3979:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(1365);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 2755:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(7088);
var create = __webpack_require__(2990);
var defineProperty = (__webpack_require__(4116).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 4364:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(3313).charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ 7869:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isPrototypeOf = __webpack_require__(1338);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw new $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 9644:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(1930);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 1416:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(9024);

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ 3744:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(6834);
var toAbsoluteIndex = __webpack_require__(1614);
var lengthOfArrayLike = __webpack_require__(755);
var deletePropertyOrThrow = __webpack_require__(6177);

var min = Math.min;

// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = lengthOfArrayLike(O);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else deletePropertyOrThrow(O, to);
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ 8123:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(6834);
var toAbsoluteIndex = __webpack_require__(1614);
var lengthOfArrayLike = __webpack_require__(755);

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ 9610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(5010).forEach);
var arrayMethodIsStrict = __webpack_require__(706);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ 4553:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(3999);
var uncurryThis = __webpack_require__(9272);
var toObject = __webpack_require__(6834);
var isConstructor = __webpack_require__(6735);
var getAsyncIterator = __webpack_require__(1255);
var getIterator = __webpack_require__(444);
var getIteratorDirect = __webpack_require__(6774);
var getIteratorMethod = __webpack_require__(474);
var getMethod = __webpack_require__(6838);
var getBuiltIn = __webpack_require__(6024);
var getBuiltInPrototypeMethod = __webpack_require__(9197);
var wellKnownSymbol = __webpack_require__(7088);
var AsyncFromSyncIterator = __webpack_require__(3169);
var toArray = (__webpack_require__(9630).toArray);

var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');
var arrayIterator = uncurryThis(getBuiltInPrototypeMethod('Array', 'values'));
var arrayIteratorNext = uncurryThis(arrayIterator([]).next);

var safeArrayIterator = function () {
  return new SafeArrayIterator(this);
};

var SafeArrayIterator = function (O) {
  this.iterator = arrayIterator(O);
};

SafeArrayIterator.prototype.next = function () {
  return arrayIteratorNext(this.iterator);
};

// `Array.fromAsync` method implementation
// https://github.com/tc39/proposal-array-from-async
module.exports = function fromAsync(asyncItems /* , mapfn = undefined, thisArg = undefined */) {
  var C = this;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var thisArg = argumentsLength > 2 ? arguments[2] : undefined;
  return new (getBuiltIn('Promise'))(function (resolve) {
    var O = toObject(asyncItems);
    if (mapfn !== undefined) mapfn = bind(mapfn, thisArg);
    var usingAsyncIterator = getMethod(O, ASYNC_ITERATOR);
    var usingSyncIterator = usingAsyncIterator ? undefined : getIteratorMethod(O) || safeArrayIterator;
    var A = isConstructor(C) ? new C() : [];
    var iterator = usingAsyncIterator
      ? getAsyncIterator(O, usingAsyncIterator)
      : new AsyncFromSyncIterator(getIteratorDirect(getIterator(O, usingSyncIterator)));
    resolve(toArray(iterator, mapfn, A));
  });
};


/***/ }),

/***/ 8115:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__(755);

module.exports = function (Constructor, list) {
  var index = 0;
  var length = lengthOfArrayLike(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};


/***/ }),

/***/ 4979:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(3999);
var call = __webpack_require__(4904);
var toObject = __webpack_require__(6834);
var callWithSafeIterationClosing = __webpack_require__(7843);
var isArrayIteratorMethod = __webpack_require__(5087);
var isConstructor = __webpack_require__(6735);
var lengthOfArrayLike = __webpack_require__(755);
var createProperty = __webpack_require__(948);
var getIterator = __webpack_require__(444);
var getIteratorMethod = __webpack_require__(474);

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 2274:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(3999);
var uncurryThis = __webpack_require__(9272);
var IndexedObject = __webpack_require__(4114);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var MapHelpers = __webpack_require__(8322);

var Map = MapHelpers.Map;
var mapGet = MapHelpers.get;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;
var push = uncurryThis([].push);

// `Array.prototype.groupToMap` method
// https://github.com/tc39/proposal-array-grouping
module.exports = function groupToMap(callbackfn /* , thisArg */) {
  var O = toObject(this);
  var self = IndexedObject(O);
  var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var map = new Map();
  var length = lengthOfArrayLike(self);
  var index = 0;
  var key, value;
  for (;length > index; index++) {
    value = self[index];
    key = boundFunction(value, index, O);
    if (mapHas(map, key)) push(mapGet(map, key), value);
    else mapSet(map, key, [value]);
  } return map;
};


/***/ }),

/***/ 3668:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(3999);
var uncurryThis = __webpack_require__(9272);
var IndexedObject = __webpack_require__(4114);
var toObject = __webpack_require__(6834);
var toPropertyKey = __webpack_require__(9954);
var lengthOfArrayLike = __webpack_require__(755);
var objectCreate = __webpack_require__(2990);
var arrayFromConstructorAndList = __webpack_require__(8115);

var $Array = Array;
var push = uncurryThis([].push);

module.exports = function ($this, callbackfn, that, specificConstructor) {
  var O = toObject($this);
  var self = IndexedObject(O);
  var boundFunction = bind(callbackfn, that);
  var target = objectCreate(null);
  var length = lengthOfArrayLike(self);
  var index = 0;
  var Constructor, key, value;
  for (;length > index; index++) {
    value = self[index];
    key = toPropertyKey(boundFunction(value, index, O));
    // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
    // but since it's a `null` prototype object, we can safely use `in`
    if (key in target) push(target[key], value);
    else target[key] = [value];
  }
  // TODO: Remove this block from `core-js@4`
  if (specificConstructor) {
    Constructor = specificConstructor(O);
    if (Constructor !== $Array) {
      for (key in target) target[key] = arrayFromConstructorAndList(Constructor, target[key]);
    }
  } return target;
};


/***/ }),

/***/ 3809:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(9135);
var toAbsoluteIndex = __webpack_require__(1614);
var lengthOfArrayLike = __webpack_require__(755);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 7004:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(3999);
var IndexedObject = __webpack_require__(4114);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE === 1;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var index = lengthOfArrayLike(self);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

module.exports = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod(1)
};


/***/ }),

/***/ 5010:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(3999);
var uncurryThis = __webpack_require__(9272);
var IndexedObject = __webpack_require__(4114);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var arraySpeciesCreate = __webpack_require__(8849);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 3416:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-lastindexof -- safe */
var apply = __webpack_require__(2415);
var toIndexedObject = __webpack_require__(9135);
var toIntegerOrInfinity = __webpack_require__(9935);
var lengthOfArrayLike = __webpack_require__(755);
var arrayMethodIsStrict = __webpack_require__(706);

var min = Math.min;
var $lastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;

// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
module.exports = FORCED ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return apply($lastIndexOf, this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = lengthOfArrayLike(O);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toIntegerOrInfinity(arguments[1]));
  if (index < 0) index = length + index;
  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
  return -1;
} : $lastIndexOf;


/***/ }),

/***/ 9239:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);
var wellKnownSymbol = __webpack_require__(7088);
var V8_VERSION = __webpack_require__(1874);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ 1354:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(6717);
var toObject = __webpack_require__(6834);
var IndexedObject = __webpack_require__(4114);
var lengthOfArrayLike = __webpack_require__(755);

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw new $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ 4029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var isArray = __webpack_require__(4091);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 1736:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toAbsoluteIndex = __webpack_require__(1614);
var lengthOfArrayLike = __webpack_require__(755);
var createProperty = __webpack_require__(948);

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  var n = 0;
  for (; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ 136:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 4354:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var arraySlice = __webpack_require__(1736);

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ 643:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(4091);
var isConstructor = __webpack_require__(6735);
var isObject = __webpack_require__(1930);
var wellKnownSymbol = __webpack_require__(7088);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ 8849:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var arraySpeciesConstructor = __webpack_require__(643);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 9686:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__(755);

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};


/***/ }),

/***/ 5790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var aCallable = __webpack_require__(6717);
var isNullOrUndefined = __webpack_require__(1562);
var lengthOfArrayLike = __webpack_require__(755);
var toObject = __webpack_require__(6834);
var MapHelpers = __webpack_require__(8322);
var iterate = __webpack_require__(6272);

var Map = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;
var push = uncurryThis([].push);

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
module.exports = function uniqueBy(resolver) {
  var that = toObject(this);
  var length = lengthOfArrayLike(that);
  var result = [];
  var map = new Map();
  var resolverFunction = !isNullOrUndefined(resolver) ? aCallable(resolver) : function (value) {
    return value;
  };
  var index, item, key;
  for (index = 0; index < length; index++) {
    item = that[index];
    key = resolverFunction(item);
    if (!mapHas(map, key)) mapSet(map, key, item);
  }
  iterate(map, function (value) {
    push(result, value);
  });
  return result;
};


/***/ }),

/***/ 8533:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var lengthOfArrayLike = __webpack_require__(755);
var toIntegerOrInfinity = __webpack_require__(9935);

var $RangeError = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
module.exports = function (O, C, index, value) {
  var len = lengthOfArrayLike(O);
  var relativeIndex = toIntegerOrInfinity(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};


/***/ }),

/***/ 3169:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var anObject = __webpack_require__(9644);
var create = __webpack_require__(2990);
var getMethod = __webpack_require__(6838);
var defineBuiltIns = __webpack_require__(6233);
var InternalStateModule = __webpack_require__(2108);
var getBuiltIn = __webpack_require__(6024);
var AsyncIteratorPrototype = __webpack_require__(1462);
var createIterResultObject = __webpack_require__(1668);

var Promise = getBuiltIn('Promise');

var ASYNC_FROM_SYNC_ITERATOR = 'AsyncFromSyncIterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ASYNC_FROM_SYNC_ITERATOR);

var asyncFromSyncIteratorContinuation = function (result, resolve, reject) {
  var done = result.done;
  Promise.resolve(result.value).then(function (value) {
    resolve(createIterResultObject(value, done));
  }, reject);
};

var AsyncFromSyncIterator = function AsyncIterator(iteratorRecord) {
  iteratorRecord.type = ASYNC_FROM_SYNC_ITERATOR;
  setInternalState(this, iteratorRecord);
};

AsyncFromSyncIterator.prototype = defineBuiltIns(create(AsyncIteratorPrototype), {
  next: function next() {
    var state = getInternalState(this);
    return new Promise(function (resolve, reject) {
      var result = anObject(call(state.next, state.iterator));
      asyncFromSyncIteratorContinuation(result, resolve, reject);
    });
  },
  'return': function () {
    var iterator = getInternalState(this).iterator;
    return new Promise(function (resolve, reject) {
      var $return = getMethod(iterator, 'return');
      if ($return === undefined) return resolve(createIterResultObject(undefined, true));
      var result = anObject(call($return, iterator));
      asyncFromSyncIteratorContinuation(result, resolve, reject);
    });
  }
});

module.exports = AsyncFromSyncIterator;


/***/ }),

/***/ 9939:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var getBuiltIn = __webpack_require__(6024);
var getMethod = __webpack_require__(6838);

module.exports = function (iterator, method, argument, reject) {
  try {
    var returnMethod = getMethod(iterator, 'return');
    if (returnMethod) {
      return getBuiltIn('Promise').resolve(call(returnMethod, iterator)).then(function () {
        method(argument);
      }, function (error) {
        reject(error);
      });
    }
  } catch (error2) {
    return reject(error2);
  } method(argument);
};


/***/ }),

/***/ 9630:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-iterator-helpers
// https://github.com/tc39/proposal-array-from-async
var call = __webpack_require__(4904);
var aCallable = __webpack_require__(6717);
var anObject = __webpack_require__(9644);
var isObject = __webpack_require__(1930);
var doesNotExceedSafeInteger = __webpack_require__(5252);
var getBuiltIn = __webpack_require__(6024);
var getIteratorDirect = __webpack_require__(6774);
var closeAsyncIteration = __webpack_require__(9939);

var createMethod = function (TYPE) {
  var IS_TO_ARRAY = TYPE === 0;
  var IS_FOR_EACH = TYPE === 1;
  var IS_EVERY = TYPE === 2;
  var IS_SOME = TYPE === 3;
  return function (object, fn, target) {
    anObject(object);
    var MAPPING = fn !== undefined;
    if (MAPPING || !IS_TO_ARRAY) aCallable(fn);
    var record = getIteratorDirect(object);
    var Promise = getBuiltIn('Promise');
    var iterator = record.iterator;
    var next = record.next;
    var counter = 0;

    return new Promise(function (resolve, reject) {
      var ifAbruptCloseAsyncIterator = function (error) {
        closeAsyncIteration(iterator, reject, error, reject);
      };

      var loop = function () {
        try {
          if (MAPPING) try {
            doesNotExceedSafeInteger(counter);
          } catch (error5) { ifAbruptCloseAsyncIterator(error5); }
          Promise.resolve(anObject(call(next, iterator))).then(function (step) {
            try {
              if (anObject(step).done) {
                if (IS_TO_ARRAY) {
                  target.length = counter;
                  resolve(target);
                } else resolve(IS_SOME ? false : IS_EVERY || undefined);
              } else {
                var value = step.value;
                try {
                  if (MAPPING) {
                    var result = fn(value, counter);

                    var handler = function ($result) {
                      if (IS_FOR_EACH) {
                        loop();
                      } else if (IS_EVERY) {
                        $result ? loop() : closeAsyncIteration(iterator, resolve, false, reject);
                      } else if (IS_TO_ARRAY) {
                        try {
                          target[counter++] = $result;
                          loop();
                        } catch (error4) { ifAbruptCloseAsyncIterator(error4); }
                      } else {
                        $result ? closeAsyncIteration(iterator, resolve, IS_SOME || value, reject) : loop();
                      }
                    };

                    if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                    else handler(result);
                  } else {
                    target[counter++] = value;
                    loop();
                  }
                } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
              }
            } catch (error2) { reject(error2); }
          }, reject);
        } catch (error) { reject(error); }
      };

      loop();
    });
  };
};

module.exports = {
  toArray: createMethod(0),
  forEach: createMethod(1),
  every: createMethod(2),
  some: createMethod(3),
  find: createMethod(4)
};


/***/ }),

/***/ 1462:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var shared = __webpack_require__(4219);
var isCallable = __webpack_require__(1365);
var create = __webpack_require__(2990);
var getPrototypeOf = __webpack_require__(4704);
var defineBuiltIn = __webpack_require__(134);
var wellKnownSymbol = __webpack_require__(7088);
var IS_PURE = __webpack_require__(7358);

var USE_FUNCTION_CONSTRUCTOR = 'USE_FUNCTION_CONSTRUCTOR';
var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');
var AsyncIterator = global.AsyncIterator;
var PassedAsyncIteratorPrototype = shared.AsyncIteratorPrototype;
var AsyncIteratorPrototype, prototype;

if (PassedAsyncIteratorPrototype) {
  AsyncIteratorPrototype = PassedAsyncIteratorPrototype;
} else if (isCallable(AsyncIterator)) {
  AsyncIteratorPrototype = AsyncIterator.prototype;
} else if (shared[USE_FUNCTION_CONSTRUCTOR] || global[USE_FUNCTION_CONSTRUCTOR]) {
  try {
    // eslint-disable-next-line no-new-func -- we have no alternatives without usage of modern syntax
    prototype = getPrototypeOf(getPrototypeOf(getPrototypeOf(Function('return async function*(){}()')())));
    if (getPrototypeOf(prototype) === Object.prototype) AsyncIteratorPrototype = prototype;
  } catch (error) { /* empty */ }
}

if (!AsyncIteratorPrototype) AsyncIteratorPrototype = {};
else if (IS_PURE) AsyncIteratorPrototype = create(AsyncIteratorPrototype);

if (!isCallable(AsyncIteratorPrototype[ASYNC_ITERATOR])) {
  defineBuiltIn(AsyncIteratorPrototype, ASYNC_ITERATOR, function () {
    return this;
  });
}

module.exports = AsyncIteratorPrototype;


/***/ }),

/***/ 7843:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9644);
var iteratorClose = __webpack_require__(1489);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 9380:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(7088);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  } catch (error) { return false; } // workaround of old WebKit + `eval` bug
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 8669:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 9773:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(541);
var isCallable = __webpack_require__(1365);
var classofRaw = __webpack_require__(8669);
var wellKnownSymbol = __webpack_require__(7088);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) === 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(2990);
var defineBuiltInAccessor = __webpack_require__(6633);
var defineBuiltIns = __webpack_require__(6233);
var bind = __webpack_require__(3999);
var anInstance = __webpack_require__(7869);
var isNullOrUndefined = __webpack_require__(1562);
var iterate = __webpack_require__(2246);
var defineIterator = __webpack_require__(8718);
var createIterResultObject = __webpack_require__(1668);
var setSpecies = __webpack_require__(4391);
var DESCRIPTORS = __webpack_require__(4777);
var fastKey = (__webpack_require__(9536).fastKey);
var InternalStateModule = __webpack_require__(2108);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first === entry) state.first = next;
          if (state.last === entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind === 'keys') return createIterResultObject(entry.key, false);
      if (kind === 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ 1708:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var defineBuiltIns = __webpack_require__(6233);
var getWeakData = (__webpack_require__(9536).getWeakData);
var anInstance = __webpack_require__(7869);
var anObject = __webpack_require__(9644);
var isNullOrUndefined = __webpack_require__(1562);
var isObject = __webpack_require__(1930);
var iterate = __webpack_require__(2246);
var ArrayIterationModule = __webpack_require__(5010);
var hasOwn = __webpack_require__(5776);
var InternalStateModule = __webpack_require__(2108);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (state) {
  return state.frozen || (state.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    defineBuiltIns(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),

/***/ 4064:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var global = __webpack_require__(2262);
var uncurryThis = __webpack_require__(9272);
var isForced = __webpack_require__(9762);
var defineBuiltIn = __webpack_require__(134);
var InternalMetadataModule = __webpack_require__(9536);
var iterate = __webpack_require__(2246);
var anInstance = __webpack_require__(7869);
var isCallable = __webpack_require__(1365);
var isNullOrUndefined = __webpack_require__(1562);
var isObject = __webpack_require__(1930);
var fails = __webpack_require__(9024);
var checkCorrectnessOfIteration = __webpack_require__(9380);
var setToStringTag = __webpack_require__(4521);
var inheritIfRequired = __webpack_require__(5481);

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ 6541:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(5776);
var ownKeys = __webpack_require__(5290);
var getOwnPropertyDescriptorModule = __webpack_require__(9401);
var definePropertyModule = __webpack_require__(4116);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 4465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(7088);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 9822:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 763:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var requireObjectCoercible = __webpack_require__(3175);
var toString = __webpack_require__(3021);

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ 1668:
/***/ (function(module) {

"use strict";

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ 3797:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var definePropertyModule = __webpack_require__(4116);
var createPropertyDescriptor = __webpack_require__(7334);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 7334:
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(9954);
var definePropertyModule = __webpack_require__(4116);
var createPropertyDescriptor = __webpack_require__(7334);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 6633:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var makeBuiltIn = __webpack_require__(5877);
var defineProperty = __webpack_require__(4116);

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
};


/***/ }),

/***/ 134:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(1365);
var definePropertyModule = __webpack_require__(4116);
var makeBuiltIn = __webpack_require__(5877);
var defineGlobalProperty = __webpack_require__(9875);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 6233:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineBuiltIn = __webpack_require__(134);

module.exports = function (target, src, options) {
  for (var key in src) defineBuiltIn(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 9875:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 6177:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var tryToString = __webpack_require__(7134);

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw new $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ 4777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 3084:
/***/ (function(module) {

"use strict";

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 2015:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var isObject = __webpack_require__(1930);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 5252:
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 7470:
/***/ (function(module) {

"use strict";

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 1060:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(2015);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ 4790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(9422);

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ 7309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_DENO = __webpack_require__(4009);
var IS_NODE = __webpack_require__(3281);

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ 4009:
/***/ (function(module) {

"use strict";

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ 8323:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var UA = __webpack_require__(9422);

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ 103:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(9422);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != 'undefined';


/***/ }),

/***/ 5086:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(9422);

// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 3281:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var classof = __webpack_require__(8669);

module.exports = classof(global.process) === 'process';


/***/ }),

/***/ 6353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(9422);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ 9422:
/***/ (function(module) {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 1874:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var userAgent = __webpack_require__(9422);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 8290:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var userAgent = __webpack_require__(9422);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ 5243:
/***/ (function(module) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 7545:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var getOwnPropertyDescriptor = (__webpack_require__(9401).f);
var createNonEnumerableProperty = __webpack_require__(3797);
var defineBuiltIn = __webpack_require__(134);
var defineGlobalProperty = __webpack_require__(9875);
var copyConstructorProperties = __webpack_require__(6541);
var isForced = __webpack_require__(9762);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 9024:
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 6369:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(3902);
var uncurryThis = __webpack_require__(5448);
var defineBuiltIn = __webpack_require__(134);
var regexpExec = __webpack_require__(2981);
var fails = __webpack_require__(9024);
var wellKnownSymbol = __webpack_require__(7088);
var createNonEnumerableProperty = __webpack_require__(3797);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) !== 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () {
      execCalled = true;
      return null;
    };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ 122:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__(4091);
var lengthOfArrayLike = __webpack_require__(755);
var doesNotExceedSafeInteger = __webpack_require__(5252);
var bind = __webpack_require__(3999);

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 7798:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ 2415:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(4232);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 3999:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(5448);
var aCallable = __webpack_require__(6717);
var NATIVE_BIND = __webpack_require__(4232);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 4232:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 5045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var aCallable = __webpack_require__(6717);
var isObject = __webpack_require__(1930);
var hasOwn = __webpack_require__(5776);
var arraySlice = __webpack_require__(136);
var NATIVE_BIND = __webpack_require__(4232);

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ 4904:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(4232);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 7246:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var hasOwn = __webpack_require__(5776);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 9783:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var aCallable = __webpack_require__(6717);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 5448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classofRaw = __webpack_require__(8669);
var uncurryThis = __webpack_require__(9272);

module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};


/***/ }),

/***/ 9272:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(4232);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 1255:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var AsyncFromSyncIterator = __webpack_require__(3169);
var anObject = __webpack_require__(9644);
var getIterator = __webpack_require__(444);
var getIteratorDirect = __webpack_require__(6774);
var getMethod = __webpack_require__(6838);
var wellKnownSymbol = __webpack_require__(7088);

var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');

module.exports = function (it, usingIterator) {
  var method = arguments.length < 2 ? getMethod(it, ASYNC_ITERATOR) : usingIterator;
  return method ? anObject(call(method, it)) : new AsyncFromSyncIterator(getIteratorDirect(getIterator(it)));
};


/***/ }),

/***/ 9197:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);

module.exports = function (CONSTRUCTOR, METHOD) {
  return global[CONSTRUCTOR].prototype[METHOD];
};


/***/ }),

/***/ 6024:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var isCallable = __webpack_require__(1365);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 6774:
/***/ (function(module) {

"use strict";

// `GetIteratorDirect(obj)` abstract operation
// https://tc39.es/proposal-iterator-helpers/#sec-getiteratordirect
module.exports = function (obj) {
  return {
    iterator: obj,
    next: obj.next,
    done: false
  };
};


/***/ }),

/***/ 474:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(9773);
var getMethod = __webpack_require__(6838);
var isNullOrUndefined = __webpack_require__(1562);
var Iterators = __webpack_require__(2810);
var wellKnownSymbol = __webpack_require__(7088);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 444:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var aCallable = __webpack_require__(6717);
var anObject = __webpack_require__(9644);
var tryToString = __webpack_require__(7134);
var getIteratorMethod = __webpack_require__(474);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw new $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 351:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var isArray = __webpack_require__(4091);
var isCallable = __webpack_require__(1365);
var classof = __webpack_require__(8669);
var toString = __webpack_require__(3021);

var push = uncurryThis([].push);

module.exports = function (replacer) {
  if (isCallable(replacer)) return replacer;
  if (!isArray(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push(keys, element);
    else if (typeof element == 'number' || classof(element) === 'Number' || classof(element) === 'String') push(keys, toString(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};


/***/ }),

/***/ 6838:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(6717);
var isNullOrUndefined = __webpack_require__(1562);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 1634:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var toObject = __webpack_require__(6834);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ 2262:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || this || Function('return this')();


/***/ }),

/***/ 5776:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var toObject = __webpack_require__(6834);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 5079:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 8866:
/***/ (function(module) {

"use strict";

module.exports = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 7981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(6024);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 7029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var fails = __webpack_require__(9024);
var createElement = __webpack_require__(2015);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 4114:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var fails = __webpack_require__(9024);
var classof = __webpack_require__(8669);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 5481:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(1365);
var isObject = __webpack_require__(1930);
var setPrototypeOf = __webpack_require__(8914);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 1499:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var isCallable = __webpack_require__(1365);
var store = __webpack_require__(4219);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var hiddenKeys = __webpack_require__(5079);
var isObject = __webpack_require__(1930);
var hasOwn = __webpack_require__(5776);
var defineProperty = (__webpack_require__(4116).f);
var getOwnPropertyNamesModule = __webpack_require__(6637);
var getOwnPropertyNamesExternalModule = __webpack_require__(7968);
var isExtensible = __webpack_require__(2885);
var uid = __webpack_require__(3635);
var FREEZING = __webpack_require__(7798);

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ 2108:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(1448);
var global = __webpack_require__(2262);
var isObject = __webpack_require__(1930);
var createNonEnumerableProperty = __webpack_require__(3797);
var hasOwn = __webpack_require__(5776);
var shared = __webpack_require__(4219);
var sharedKey = __webpack_require__(4559);
var hiddenKeys = __webpack_require__(5079);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 5087:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(7088);
var Iterators = __webpack_require__(2810);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 4091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(8669);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 1365:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $documentAll = __webpack_require__(3084);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 6735:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var fails = __webpack_require__(9024);
var isCallable = __webpack_require__(1365);
var classof = __webpack_require__(9773);
var getBuiltIn = __webpack_require__(6024);
var inspectSource = __webpack_require__(1499);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 4077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(5776);

module.exports = function (descriptor) {
  return descriptor !== undefined && (hasOwn(descriptor, 'value') || hasOwn(descriptor, 'writable'));
};


/***/ }),

/***/ 9762:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);
var isCallable = __webpack_require__(1365);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 1562:
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 1930:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(1365);
var $documentAll = __webpack_require__(3084);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 7358:
/***/ (function(module) {

"use strict";

module.exports = false;


/***/ }),

/***/ 1661:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(1930);
var classof = __webpack_require__(8669);
var wellKnownSymbol = __webpack_require__(7088);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) === 'RegExp');
};


/***/ }),

/***/ 9437:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(6024);
var isCallable = __webpack_require__(1365);
var isPrototypeOf = __webpack_require__(1338);
var USE_SYMBOL_AS_UID = __webpack_require__(4058);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 3687:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);

module.exports = function (record, fn, ITERATOR_INSTEAD_OF_RECORD) {
  var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
  var next = record.next;
  var step, result;
  while (!(step = call(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};


/***/ }),

/***/ 2246:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(3999);
var call = __webpack_require__(4904);
var anObject = __webpack_require__(9644);
var tryToString = __webpack_require__(7134);
var isArrayIteratorMethod = __webpack_require__(5087);
var lengthOfArrayLike = __webpack_require__(755);
var isPrototypeOf = __webpack_require__(1338);
var getIterator = __webpack_require__(444);
var getIteratorMethod = __webpack_require__(474);
var iteratorClose = __webpack_require__(1489);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw new $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 1489:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var anObject = __webpack_require__(9644);
var getMethod = __webpack_require__(6838);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 8097:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = (__webpack_require__(6844).IteratorPrototype);
var create = __webpack_require__(2990);
var createPropertyDescriptor = __webpack_require__(7334);
var setToStringTag = __webpack_require__(4521);
var Iterators = __webpack_require__(2810);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 8718:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var IS_PURE = __webpack_require__(7358);
var FunctionName = __webpack_require__(7246);
var isCallable = __webpack_require__(1365);
var createIteratorConstructor = __webpack_require__(8097);
var getPrototypeOf = __webpack_require__(4704);
var setPrototypeOf = __webpack_require__(8914);
var setToStringTag = __webpack_require__(4521);
var createNonEnumerableProperty = __webpack_require__(3797);
var defineBuiltIn = __webpack_require__(134);
var wellKnownSymbol = __webpack_require__(7088);
var Iterators = __webpack_require__(2810);
var IteratorsCore = __webpack_require__(6844);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    }

    return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 6844:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);
var isCallable = __webpack_require__(1365);
var isObject = __webpack_require__(1930);
var create = __webpack_require__(2990);
var getPrototypeOf = __webpack_require__(4704);
var defineBuiltIn = __webpack_require__(134);
var wellKnownSymbol = __webpack_require__(7088);
var IS_PURE = __webpack_require__(7358);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 2810:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 755:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(976);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 5877:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var fails = __webpack_require__(9024);
var isCallable = __webpack_require__(1365);
var hasOwn = __webpack_require__(5776);
var DESCRIPTORS = __webpack_require__(4777);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(7246).CONFIGURABLE);
var inspectSource = __webpack_require__(1499);
var InternalStateModule = __webpack_require__(2108);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 8322:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

module.exports = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis(MapPrototype.set),
  get: uncurryThis(MapPrototype.get),
  has: uncurryThis(MapPrototype.has),
  remove: uncurryThis(MapPrototype['delete']),
  proto: MapPrototype
};


/***/ }),

/***/ 6272:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var iterateSimple = __webpack_require__(3687);
var MapHelpers = __webpack_require__(8322);

var Map = MapHelpers.Map;
var MapPrototype = MapHelpers.proto;
var forEach = uncurryThis(MapPrototype.forEach);
var entries = uncurryThis(MapPrototype.entries);
var next = entries(new Map()).next;

module.exports = function (map, fn, interruptible) {
  return interruptible ? iterateSimple({ iterator: entries(map), next: next }, function (entry) {
    return fn(entry[1], entry[0]);
  }) : forEach(map, fn);
};


/***/ }),

/***/ 9938:
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 6119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var bind = __webpack_require__(3999);
var getOwnPropertyDescriptor = (__webpack_require__(9401).f);
var macrotask = (__webpack_require__(9979).set);
var Queue = __webpack_require__(9025);
var IS_IOS = __webpack_require__(5086);
var IS_IOS_PEBBLE = __webpack_require__(103);
var IS_WEBOS_WEBKIT = __webpack_require__(6353);
var IS_NODE = __webpack_require__(3281);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var microtask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!microtask) {
  var queue = new Queue();

  var flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }

  microtask = function (fn) {
    if (!queue.head) notify();
    queue.add(fn);
  };
}

module.exports = microtask;


/***/ }),

/***/ 8945:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(6717);

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw new $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 4915:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isRegExp = __webpack_require__(1661);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw new $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 5222:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var uncurryThis = __webpack_require__(9272);
var call = __webpack_require__(4904);
var fails = __webpack_require__(9024);
var objectKeys = __webpack_require__(2652);
var getOwnPropertySymbolsModule = __webpack_require__(5511);
var propertyIsEnumerableModule = __webpack_require__(8511);
var toObject = __webpack_require__(6834);
var IndexedObject = __webpack_require__(4114);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol('assign detection');
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join('') !== alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 2990:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(9644);
var definePropertiesModule = __webpack_require__(8466);
var enumBugKeys = __webpack_require__(5243);
var hiddenKeys = __webpack_require__(5079);
var html = __webpack_require__(7981);
var documentCreateElement = __webpack_require__(2015);
var sharedKey = __webpack_require__(4559);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 8466:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(2070);
var definePropertyModule = __webpack_require__(4116);
var anObject = __webpack_require__(9644);
var toIndexedObject = __webpack_require__(9135);
var objectKeys = __webpack_require__(2652);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 4116:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var IE8_DOM_DEFINE = __webpack_require__(7029);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(2070);
var anObject = __webpack_require__(9644);
var toPropertyKey = __webpack_require__(9954);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 9401:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var call = __webpack_require__(4904);
var propertyIsEnumerableModule = __webpack_require__(8511);
var createPropertyDescriptor = __webpack_require__(7334);
var toIndexedObject = __webpack_require__(9135);
var toPropertyKey = __webpack_require__(9954);
var hasOwn = __webpack_require__(5776);
var IE8_DOM_DEFINE = __webpack_require__(7029);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 7968:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(8669);
var toIndexedObject = __webpack_require__(9135);
var $getOwnPropertyNames = (__webpack_require__(6637).f);
var arraySlice = __webpack_require__(1736);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) === 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 6637:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(7419);
var enumBugKeys = __webpack_require__(5243);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5511:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 4704:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(5776);
var isCallable = __webpack_require__(1365);
var toObject = __webpack_require__(6834);
var sharedKey = __webpack_require__(4559);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(9822);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 2885:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);
var isObject = __webpack_require__(1930);
var classof = __webpack_require__(8669);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(1416);

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ 1338:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 3711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var InternalStateModule = __webpack_require__(2108);
var createIteratorConstructor = __webpack_require__(8097);
var createIterResultObject = __webpack_require__(1668);
var hasOwn = __webpack_require__(5776);
var objectKeys = __webpack_require__(2652);
var toObject = __webpack_require__(6834);

var OBJECT_ITERATOR = 'Object Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(OBJECT_ITERATOR);

module.exports = createIteratorConstructor(function ObjectIterator(source, mode) {
  var object = toObject(source);
  setInternalState(this, {
    type: OBJECT_ITERATOR,
    mode: mode,
    object: object,
    keys: objectKeys(object),
    index: 0
  });
}, 'Object', function next() {
  var state = getInternalState(this);
  var keys = state.keys;
  while (true) {
    if (keys === null || state.index >= keys.length) {
      state.object = state.keys = null;
      return createIterResultObject(undefined, true);
    }
    var key = keys[state.index++];
    var object = state.object;
    if (!hasOwn(object, key)) continue;
    switch (state.mode) {
      case 'keys': return createIterResultObject(key, false);
      case 'values': return createIterResultObject(object[key], false);
    } /* entries */ return createIterResultObject([key, object[key]], false);
  }
});


/***/ }),

/***/ 7419:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var hasOwn = __webpack_require__(5776);
var toIndexedObject = __webpack_require__(9135);
var indexOf = (__webpack_require__(3809).indexOf);
var hiddenKeys = __webpack_require__(5079);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 2652:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(7419);
var enumBugKeys = __webpack_require__(5243);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 8511:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 9872:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(7358);
var global = __webpack_require__(2262);
var fails = __webpack_require__(9024);
var WEBKIT = __webpack_require__(8290);

// Forced replacement object prototype accessors methods
module.exports = IS_PURE || !fails(function () {
  // This feature detection crashes old WebKit
  // https://github.com/zloirock/core-js/issues/232
  if (WEBKIT && WEBKIT < 535) return;
  var key = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call, es/no-legacy-object-prototype-accessor-methods -- required for testing
  __defineSetter__.call(null, key, function () { /* empty */ });
  delete global[key];
});


/***/ }),

/***/ 8914:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(9783);
var anObject = __webpack_require__(9644);
var aPossiblePrototype = __webpack_require__(3979);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 5735:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var fails = __webpack_require__(9024);
var uncurryThis = __webpack_require__(9272);
var objectGetPrototypeOf = __webpack_require__(4704);
var objectKeys = __webpack_require__(2652);
var toIndexedObject = __webpack_require__(9135);
var $propertyIsEnumerable = (__webpack_require__(8511).f);

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// in some IE versions, `propertyIsEnumerable` returns incorrect result on integer keys
// of `null` prototype objects
var IE_BUG = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-create -- safe
  var O = Object.create(null);
  O[2] = 2;
  return !propertyIsEnumerable(O, 2);
});

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ 1859:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(541);
var classof = __webpack_require__(9773);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 13:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var isCallable = __webpack_require__(1365);
var isObject = __webpack_require__(1930);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5290:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(6024);
var uncurryThis = __webpack_require__(9272);
var getOwnPropertyNamesModule = __webpack_require__(6637);
var getOwnPropertySymbolsModule = __webpack_require__(5511);
var anObject = __webpack_require__(9644);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 2631:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);

module.exports = global;


/***/ }),

/***/ 9669:
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ 1102:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var NativePromiseConstructor = __webpack_require__(9886);
var isCallable = __webpack_require__(1365);
var isForced = __webpack_require__(9762);
var inspectSource = __webpack_require__(1499);
var wellKnownSymbol = __webpack_require__(7088);
var IS_BROWSER = __webpack_require__(7309);
var IS_DENO = __webpack_require__(4009);
var IS_PURE = __webpack_require__(7358);
var V8_VERSION = __webpack_require__(1874);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ 9886:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);

module.exports = global.Promise;


/***/ }),

/***/ 5745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9644);
var isObject = __webpack_require__(1930);
var newPromiseCapability = __webpack_require__(8945);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 3333:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NativePromiseConstructor = __webpack_require__(9886);
var checkCorrectnessOfIteration = __webpack_require__(9380);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(1102).CONSTRUCTOR);

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ 4019:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineProperty = (__webpack_require__(4116).f);

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ 9025:
/***/ (function(module) {

"use strict";

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ 493:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(5280);
__webpack_require__(2604);
var getBuiltIn = __webpack_require__(6024);
var uncurryThis = __webpack_require__(9272);
var shared = __webpack_require__(9065);

var Map = getBuiltIn('Map');
var WeakMap = getBuiltIn('WeakMap');
var push = uncurryThis([].push);

var metadata = shared('metadata');
var store = metadata.store || (metadata.store = new WeakMap());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};

var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};

var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};

var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};

var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { push(keys, key); });
  return keys;
};

var toMetadataKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};

module.exports = {
  store: store,
  getMap: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  toKey: toMetadataKey
};


/***/ }),

/***/ 126:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var anObject = __webpack_require__(9644);
var isCallable = __webpack_require__(1365);
var classof = __webpack_require__(8669);
var regexpExec = __webpack_require__(2981);

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw new $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ 2981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(4904);
var uncurryThis = __webpack_require__(9272);
var toString = __webpack_require__(3021);
var regexpFlags = __webpack_require__(9035);
var stickyHelpers = __webpack_require__(7365);
var shared = __webpack_require__(9065);
var create = __webpack_require__(2990);
var getInternalState = (__webpack_require__(2108).get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(7853);
var UNSUPPORTED_NCG = __webpack_require__(2477);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 9035:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9644);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 5800:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var hasOwn = __webpack_require__(5776);
var isPrototypeOf = __webpack_require__(1338);
var regExpFlags = __webpack_require__(9035);

var RegExpPrototype = RegExp.prototype;

module.exports = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype, R)
    ? call(regExpFlags, R) : flags;
};


/***/ }),

/***/ 7365:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);
var global = __webpack_require__(2262);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') !== null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') !== null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ 7853:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);
var global = __webpack_require__(2262);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.test('\n') && re.flags === 's');
});


/***/ }),

/***/ 2477:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);
var global = __webpack_require__(2262);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ 3175:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(1562);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 2142:
/***/ (function(module) {

"use strict";

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
};


/***/ }),

/***/ 4391:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(6024);
var defineBuiltInAccessor = __webpack_require__(6633);
var wellKnownSymbol = __webpack_require__(7088);
var DESCRIPTORS = __webpack_require__(4777);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 4521:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineProperty = (__webpack_require__(4116).f);
var hasOwn = __webpack_require__(5776);
var wellKnownSymbol = __webpack_require__(7088);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 4559:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(9065);
var uid = __webpack_require__(3635);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 4219:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var defineGlobalProperty = __webpack_require__(9875);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 9065:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(7358);
var store = __webpack_require__(4219);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.33.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.33.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 8114:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9644);
var aConstructor = __webpack_require__(7754);
var isNullOrUndefined = __webpack_require__(1562);
var wellKnownSymbol = __webpack_require__(7088);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 4379:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var toIndexedObject = __webpack_require__(9135);
var toString = __webpack_require__(3021);
var lengthOfArrayLike = __webpack_require__(755);

var $TypeError = TypeError;
var push = uncurryThis([].push);
var join = uncurryThis([].join);

// `String.cooked` method
// https://tc39.es/proposal-string-cooked/
module.exports = function cooked(template /* , ...substitutions */) {
  var cookedTemplate = toIndexedObject(template);
  var literalSegments = lengthOfArrayLike(cookedTemplate);
  if (!literalSegments) return '';
  var argumentsLength = arguments.length;
  var elements = [];
  var i = 0;
  while (true) {
    var nextVal = cookedTemplate[i++];
    if (nextVal === undefined) throw new $TypeError('Incorrect template');
    push(elements, toString(nextVal));
    if (i === literalSegments) return join(elements, '');
    if (i < argumentsLength) push(elements, toString(arguments[i]));
  }
};


/***/ }),

/***/ 8237:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9024);

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ 3313:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var toIntegerOrInfinity = __webpack_require__(9935);
var toString = __webpack_require__(3021);
var requireObjectCoercible = __webpack_require__(3175);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 8165:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/zloirock/core-js/issues/280
var userAgent = __webpack_require__(9422);

module.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(userAgent);


/***/ }),

/***/ 6874:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis = __webpack_require__(9272);
var toLength = __webpack_require__(976);
var toString = __webpack_require__(3021);
var $repeat = __webpack_require__(7955);
var requireObjectCoercible = __webpack_require__(3175);

var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr === '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ 8341:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// adapted from https://github.com/jridgewell/string-dedent
var getBuiltIn = __webpack_require__(6024);
var uncurryThis = __webpack_require__(9272);

var fromCharCode = String.fromCharCode;
var fromCodePoint = getBuiltIn('String', 'fromCodePoint');
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var ZERO_CODE = 48;
var NINE_CODE = 57;
var LOWER_A_CODE = 97;
var LOWER_F_CODE = 102;
var UPPER_A_CODE = 65;
var UPPER_F_CODE = 70;

var isDigit = function (str, index) {
  var c = charCodeAt(str, index);
  return c >= ZERO_CODE && c <= NINE_CODE;
};

var parseHex = function (str, index, end) {
  if (end >= str.length) return -1;
  var n = 0;
  for (; index < end; index++) {
    var c = hexToInt(charCodeAt(str, index));
    if (c === -1) return -1;
    n = n * 16 + c;
  }
  return n;
};

var hexToInt = function (c) {
  if (c >= ZERO_CODE && c <= NINE_CODE) return c - ZERO_CODE;
  if (c >= LOWER_A_CODE && c <= LOWER_F_CODE) return c - LOWER_A_CODE + 10;
  if (c >= UPPER_A_CODE && c <= UPPER_F_CODE) return c - UPPER_A_CODE + 10;
  return -1;
};

module.exports = function (raw) {
  var out = '';
  var start = 0;
  // We need to find every backslash escape sequence, and cook the escape into a real char.
  var i = 0;
  var n;
  while ((i = stringIndexOf(raw, '\\', i)) > -1) {
    out += stringSlice(raw, start, i);
    // If the backslash is the last char of the string, then it was an invalid sequence.
    // This can't actually happen in a tagged template literal, but could happen if you manually
    // invoked the tag with an array.
    if (++i === raw.length) return;
    var next = charAt(raw, i++);
    switch (next) {
      // Escaped control codes need to be individually processed.
      case 'b':
        out += '\b';
        break;
      case 't':
        out += '\t';
        break;
      case 'n':
        out += '\n';
        break;
      case 'v':
        out += '\v';
        break;
      case 'f':
        out += '\f';
        break;
      case 'r':
        out += '\r';
        break;
      // Escaped line terminators just skip the char.
      case '\r':
        // Treat `\r\n` as a single terminator.
        if (i < raw.length && charAt(raw, i) === '\n') ++i;
      // break omitted
      case '\n':
      case '\u2028':
      case '\u2029':
        break;
      // `\0` is a null control char, but `\0` followed by another digit is an illegal octal escape.
      case '0':
        if (isDigit(raw, i)) return;
        out += '\0';
        break;
      // Hex escapes must contain 2 hex chars.
      case 'x':
        n = parseHex(raw, i, i + 2);
        if (n === -1) return;
        i += 2;
        out += fromCharCode(n);
        break;
      // Unicode escapes contain either 4 chars, or an unlimited number between `{` and `}`.
      // The hex value must not overflow 0x10FFFF.
      case 'u':
        if (i < raw.length && charAt(raw, i) === '{') {
          var end = stringIndexOf(raw, '}', ++i);
          if (end === -1) return;
          n = parseHex(raw, i, end);
          i = end + 1;
        } else {
          n = parseHex(raw, i, i + 4);
          i += 4;
        }
        if (n === -1 || n > 0x10FFFF) return;
        out += fromCodePoint(n);
        break;
      default:
        if (isDigit(next, 0)) return;
        out += next;
    }
    start = i;
  }
  return out + stringSlice(raw, start);
};


/***/ }),

/***/ 7955:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(9935);
var toString = __webpack_require__(3021);
var requireObjectCoercible = __webpack_require__(3175);

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n === Infinity) throw new $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ 6618:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $trimEnd = (__webpack_require__(7473).end);
var forcedStringTrimMethod = __webpack_require__(6002);

// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
module.exports = forcedStringTrimMethod('trimEnd') ? function trimEnd() {
  return $trimEnd(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimEnd;


/***/ }),

/***/ 6002:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__(7246).PROPER);
var fails = __webpack_require__(9024);
var whitespaces = __webpack_require__(6182);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ 4835:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $trimStart = (__webpack_require__(7473).start);
var forcedStringTrimMethod = __webpack_require__(6002);

// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
module.exports = forcedStringTrimMethod('trimStart') ? function trimStart() {
  return $trimStart(this);
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
} : ''.trimStart;


/***/ }),

/***/ 7473:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);
var requireObjectCoercible = __webpack_require__(3175);
var toString = __webpack_require__(3021);
var whitespaces = __webpack_require__(6182);

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 1575:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(1874);
var fails = __webpack_require__(9024);
var global = __webpack_require__(2262);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 4172:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var getBuiltIn = __webpack_require__(6024);
var wellKnownSymbol = __webpack_require__(7088);
var defineBuiltIn = __webpack_require__(134);

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ 306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_SYMBOL = __webpack_require__(1575);

/* eslint-disable es/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ 9979:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var apply = __webpack_require__(2415);
var bind = __webpack_require__(3999);
var isCallable = __webpack_require__(1365);
var hasOwn = __webpack_require__(5776);
var fails = __webpack_require__(9024);
var html = __webpack_require__(7981);
var arraySlice = __webpack_require__(136);
var createElement = __webpack_require__(2015);
var validateArgumentsLength = __webpack_require__(1412);
var IS_IOS = __webpack_require__(5086);
var IS_NODE = __webpack_require__(3281);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global.location;
});

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ 1614:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(9935);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 9135:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(4114);
var requireObjectCoercible = __webpack_require__(3175);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9935:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(9938);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(9935);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 6834:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(3175);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 5938:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var isObject = __webpack_require__(1930);
var isSymbol = __webpack_require__(9437);
var getMethod = __webpack_require__(6838);
var ordinaryToPrimitive = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(7088);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 9954:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(5938);
var isSymbol = __webpack_require__(9437);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 541:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(7088);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 3021:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(9773);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 7134:
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3635:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9272);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 4058:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(1575);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 2070:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var fails = __webpack_require__(9024);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 1412:
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 1448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var isCallable = __webpack_require__(1365);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 3833:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var path = __webpack_require__(2631);
var hasOwn = __webpack_require__(5776);
var wrappedWellKnownSymbolModule = __webpack_require__(4285);
var defineProperty = (__webpack_require__(4116).f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 4285:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var wellKnownSymbol = __webpack_require__(7088);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 7088:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var shared = __webpack_require__(9065);
var hasOwn = __webpack_require__(5776);
var uid = __webpack_require__(3635);
var NATIVE_SYMBOL = __webpack_require__(1575);
var USE_SYMBOL_AS_UID = __webpack_require__(4058);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 6182:
/***/ (function(module) {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 7061:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var toIntegerOrInfinity = __webpack_require__(9935);
var addToUnscopables = __webpack_require__(2755);

// `Array.prototype.at` method
// https://tc39.es/ecma262/#sec-array.prototype.at
$({ target: 'Array', proto: true }, {
  at: function at(index) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : O[k];
  }
});

addToUnscopables('at');


/***/ }),

/***/ 7834:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var fails = __webpack_require__(9024);
var isArray = __webpack_require__(4091);
var isObject = __webpack_require__(1930);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var doesNotExceedSafeInteger = __webpack_require__(5252);
var createProperty = __webpack_require__(948);
var arraySpeciesCreate = __webpack_require__(8849);
var arrayMethodHasSpeciesSupport = __webpack_require__(9239);
var wellKnownSymbol = __webpack_require__(7088);
var V8_VERSION = __webpack_require__(1874);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ 6592:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var copyWithin = __webpack_require__(3744);
var addToUnscopables = __webpack_require__(2755);

// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
$({ target: 'Array', proto: true }, {
  copyWithin: copyWithin
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('copyWithin');


/***/ }),

/***/ 4434:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $every = (__webpack_require__(5010).every);
var arrayMethodIsStrict = __webpack_require__(706);

var STRICT_METHOD = arrayMethodIsStrict('every');

// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 1817:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var fill = __webpack_require__(8123);
var addToUnscopables = __webpack_require__(2755);

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ 5653:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $filter = (__webpack_require__(5010).filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(9239);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 1982:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $findIndex = (__webpack_require__(5010).findIndex);
var addToUnscopables = __webpack_require__(2755);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-findindex -- testing
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ 1550:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $findLastIndex = (__webpack_require__(7004).findLastIndex);
var addToUnscopables = __webpack_require__(2755);

// `Array.prototype.findLastIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findlastindex
$({ target: 'Array', proto: true }, {
  findLastIndex: function findLastIndex(callbackfn /* , that = undefined */) {
    return $findLastIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('findLastIndex');


/***/ }),

/***/ 8279:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $findLast = (__webpack_require__(7004).findLast);
var addToUnscopables = __webpack_require__(2755);

// `Array.prototype.findLast` method
// https://tc39.es/ecma262/#sec-array.prototype.findlast
$({ target: 'Array', proto: true }, {
  findLast: function findLast(callbackfn /* , that = undefined */) {
    return $findLast(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('findLast');


/***/ }),

/***/ 4817:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $find = (__webpack_require__(5010).find);
var addToUnscopables = __webpack_require__(2755);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ 3643:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var flattenIntoArray = __webpack_require__(122);
var aCallable = __webpack_require__(6717);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var arraySpeciesCreate = __webpack_require__(8849);

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ 2183:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var flattenIntoArray = __webpack_require__(122);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var toIntegerOrInfinity = __webpack_require__(9935);
var arraySpeciesCreate = __webpack_require__(8849);

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});


/***/ }),

/***/ 3146:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var forEach = __webpack_require__(9610);

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach !== forEach }, {
  forEach: forEach
});


/***/ }),

/***/ 3520:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var from = __webpack_require__(4979);
var checkCorrectnessOfIteration = __webpack_require__(9380);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ 7293:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $includes = (__webpack_require__(3809).includes);
var fails = __webpack_require__(9024);
var addToUnscopables = __webpack_require__(2755);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 914:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(5448);
var $indexOf = (__webpack_require__(3809).indexOf);
var arrayMethodIsStrict = __webpack_require__(706);

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: FORCED }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


/***/ }),

/***/ 863:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var isArray = __webpack_require__(4091);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ 8327:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(9135);
var addToUnscopables = __webpack_require__(2755);
var Iterators = __webpack_require__(2810);
var InternalStateModule = __webpack_require__(2108);
var defineProperty = (__webpack_require__(4116).f);
var defineIterator = __webpack_require__(8718);
var createIterResultObject = __webpack_require__(1668);
var IS_PURE = __webpack_require__(7358);
var DESCRIPTORS = __webpack_require__(4777);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  switch (state.kind) {
    case 'keys': return createIterResultObject(index, false);
    case 'values': return createIterResultObject(target[index], false);
  } return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ 7422:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var IndexedObject = __webpack_require__(4114);
var toIndexedObject = __webpack_require__(9135);
var arrayMethodIsStrict = __webpack_require__(706);

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ 3002:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var lastIndexOf = __webpack_require__(3416);

// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
$({ target: 'Array', proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
  lastIndexOf: lastIndexOf
});


/***/ }),

/***/ 8098:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $map = (__webpack_require__(5010).map);
var arrayMethodHasSpeciesSupport = __webpack_require__(9239);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 4143:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var fails = __webpack_require__(9024);
var isConstructor = __webpack_require__(6735);
var createProperty = __webpack_require__(948);

var $Array = Array;

var ISNT_GENERIC = fails(function () {
  function F() { /* empty */ }
  // eslint-disable-next-line es/no-array-of -- safe
  return !($Array.of.call(F) instanceof F);
});

// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
$({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {
  of: function of(/* ...args */) {
    var index = 0;
    var argumentsLength = arguments.length;
    var result = new (isConstructor(this) ? this : $Array)(argumentsLength);
    while (argumentsLength > index) createProperty(result, index, arguments[index++]);
    result.length = argumentsLength;
    return result;
  }
});


/***/ }),

/***/ 1379:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var setArrayLength = __webpack_require__(4029);
var doesNotExceedSafeInteger = __webpack_require__(5252);
var fails = __webpack_require__(9024);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 8074:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $reduceRight = (__webpack_require__(1354).right);
var arrayMethodIsStrict = __webpack_require__(706);
var CHROME_VERSION = __webpack_require__(1874);
var IS_NODE = __webpack_require__(3281);

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduceRight');

// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 287:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $reduce = (__webpack_require__(1354).left);
var arrayMethodIsStrict = __webpack_require__(706);
var CHROME_VERSION = __webpack_require__(1874);
var IS_NODE = __webpack_require__(3281);

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED = CHROME_BUG || !arrayMethodIsStrict('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: FORCED }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 7996:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var isArray = __webpack_require__(4091);

var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});


/***/ }),

/***/ 3290:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var isArray = __webpack_require__(4091);
var isConstructor = __webpack_require__(6735);
var isObject = __webpack_require__(1930);
var toAbsoluteIndex = __webpack_require__(1614);
var lengthOfArrayLike = __webpack_require__(755);
var toIndexedObject = __webpack_require__(9135);
var createProperty = __webpack_require__(948);
var wellKnownSymbol = __webpack_require__(7088);
var arrayMethodHasSpeciesSupport = __webpack_require__(9239);
var nativeSlice = __webpack_require__(136);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 9394:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $some = (__webpack_require__(5010).some);
var arrayMethodIsStrict = __webpack_require__(706);

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 2027:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var aCallable = __webpack_require__(6717);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var deletePropertyOrThrow = __webpack_require__(6177);
var toString = __webpack_require__(3021);
var fails = __webpack_require__(9024);
var internalSort = __webpack_require__(4354);
var arrayMethodIsStrict = __webpack_require__(706);
var FF = __webpack_require__(4790);
var IE_OR_EDGE = __webpack_require__(8323);
var V8 = __webpack_require__(1874);
var WEBKIT = __webpack_require__(8290);

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ }),

/***/ 8865:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var setSpecies = __webpack_require__(4391);

// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
setSpecies('Array');


/***/ }),

/***/ 8800:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var toObject = __webpack_require__(6834);
var toAbsoluteIndex = __webpack_require__(1614);
var toIntegerOrInfinity = __webpack_require__(9935);
var lengthOfArrayLike = __webpack_require__(755);
var setArrayLength = __webpack_require__(4029);
var doesNotExceedSafeInteger = __webpack_require__(5252);
var arraySpeciesCreate = __webpack_require__(8849);
var createProperty = __webpack_require__(948);
var deletePropertyOrThrow = __webpack_require__(6177);
var arrayMethodHasSpeciesSupport = __webpack_require__(9239);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});


/***/ }),

/***/ 6421:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var arrayToReversed = __webpack_require__(9686);
var toIndexedObject = __webpack_require__(9135);
var addToUnscopables = __webpack_require__(2755);

var $Array = Array;

// `Array.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-array.prototype.toreversed
$({ target: 'Array', proto: true }, {
  toReversed: function toReversed() {
    return arrayToReversed(toIndexedObject(this), $Array);
  }
});

addToUnscopables('toReversed');


/***/ }),

/***/ 5741:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var aCallable = __webpack_require__(6717);
var toIndexedObject = __webpack_require__(9135);
var arrayFromConstructorAndList = __webpack_require__(8115);
var getBuiltInPrototypeMethod = __webpack_require__(9197);
var addToUnscopables = __webpack_require__(2755);

var $Array = Array;
var sort = uncurryThis(getBuiltInPrototypeMethod('Array', 'sort'));

// `Array.prototype.toSorted` method
// https://tc39.es/ecma262/#sec-array.prototype.tosorted
$({ target: 'Array', proto: true }, {
  toSorted: function toSorted(compareFn) {
    if (compareFn !== undefined) aCallable(compareFn);
    var O = toIndexedObject(this);
    var A = arrayFromConstructorAndList($Array, O);
    return sort(A, compareFn);
  }
});

addToUnscopables('toSorted');


/***/ }),

/***/ 79:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var addToUnscopables = __webpack_require__(2755);
var doesNotExceedSafeInteger = __webpack_require__(5252);
var lengthOfArrayLike = __webpack_require__(755);
var toAbsoluteIndex = __webpack_require__(1614);
var toIndexedObject = __webpack_require__(9135);
var toIntegerOrInfinity = __webpack_require__(9935);

var $Array = Array;
var max = Math.max;
var min = Math.min;

// `Array.prototype.toSpliced` method
// https://tc39.es/ecma262/#sec-array.prototype.tospliced
$({ target: 'Array', proto: true }, {
  toSpliced: function toSpliced(start, deleteCount /* , ...items */) {
    var O = toIndexedObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var k = 0;
    var insertCount, actualDeleteCount, newLen, A;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    newLen = doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = $Array(newLen);

    for (; k < actualStart; k++) A[k] = O[k];
    for (; k < actualStart + insertCount; k++) A[k] = arguments[k - actualStart + 2];
    for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];

    return A;
  }
});

addToUnscopables('toSpliced');


/***/ }),

/***/ 3040:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(2755);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flatMap');


/***/ }),

/***/ 3168:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(2755);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');


/***/ }),

/***/ 8576:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var setArrayLength = __webpack_require__(4029);
var deletePropertyOrThrow = __webpack_require__(6177);
var doesNotExceedSafeInteger = __webpack_require__(5252);

// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;

// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_RESULT || !properErrorOnNonWritableLength();

// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];
        else deletePropertyOrThrow(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    } return setArrayLength(O, len + argCount);
  }
});


/***/ }),

/***/ 23:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var arrayWith = __webpack_require__(8533);
var toIndexedObject = __webpack_require__(9135);

var $Array = Array;

// `Array.prototype.with` method
// https://tc39.es/ecma262/#sec-array.prototype.with
$({ target: 'Array', proto: true }, {
  'with': function (index, value) {
    return arrayWith(toIndexedObject(this), $Array, index, value);
  }
});


/***/ }),

/***/ 1553:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var global = __webpack_require__(2262);

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({ global: true, forced: global.globalThis !== global }, {
  globalThis: global
});


/***/ }),

/***/ 1478:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var getBuiltIn = __webpack_require__(6024);
var apply = __webpack_require__(2415);
var call = __webpack_require__(4904);
var uncurryThis = __webpack_require__(9272);
var fails = __webpack_require__(9024);
var isCallable = __webpack_require__(1365);
var isSymbol = __webpack_require__(9437);
var arraySlice = __webpack_require__(136);
var getReplacerFunction = __webpack_require__(351);
var NATIVE_SYMBOL = __webpack_require__(1575);

var $String = String;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')('stringify detection');
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) !== '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) !== '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) !== '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
    if (!isSymbol(value)) return value;
  };
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ 1388:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var setToStringTag = __webpack_require__(4521);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 789:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(4064);
var collectionStrong = __webpack_require__(796);

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ 5280:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(789);


/***/ }),

/***/ 9657:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var setToStringTag = __webpack_require__(4521);

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ 3212:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var assign = __webpack_require__(5222);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 8523:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var create = __webpack_require__(2990);

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ 5749:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var FORCED = __webpack_require__(9872);
var aCallable = __webpack_require__(6717);
var toObject = __webpack_require__(6834);
var definePropertyModule = __webpack_require__(4116);

// `Object.prototype.__defineGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineGetter__: function __defineGetter__(P, getter) {
      definePropertyModule.f(toObject(this), P, { get: aCallable(getter), enumerable: true, configurable: true });
    }
  });
}


/***/ }),

/***/ 3342:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var defineProperties = (__webpack_require__(8466).f);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ 5539:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var defineProperty = (__webpack_require__(4116).f);

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),

/***/ 7805:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var FORCED = __webpack_require__(9872);
var aCallable = __webpack_require__(6717);
var toObject = __webpack_require__(6834);
var definePropertyModule = __webpack_require__(4116);

// `Object.prototype.__defineSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineSetter__: function __defineSetter__(P, setter) {
      definePropertyModule.f(toObject(this), P, { set: aCallable(setter), enumerable: true, configurable: true });
    }
  });
}


/***/ }),

/***/ 9613:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $entries = (__webpack_require__(5735).entries);

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ 4185:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var FREEZING = __webpack_require__(7798);
var fails = __webpack_require__(9024);
var isObject = __webpack_require__(1930);
var onFreeze = (__webpack_require__(9536).onFreeze);

// eslint-disable-next-line es/no-object-freeze -- safe
var $freeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 6098:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var iterate = __webpack_require__(2246);
var createProperty = __webpack_require__(948);

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});


/***/ }),

/***/ 7681:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var fails = __webpack_require__(9024);
var toIndexedObject = __webpack_require__(9135);
var nativeGetOwnPropertyDescriptor = (__webpack_require__(9401).f);
var DESCRIPTORS = __webpack_require__(4777);

var FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ 7973:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var ownKeys = __webpack_require__(5290);
var toIndexedObject = __webpack_require__(9135);
var getOwnPropertyDescriptorModule = __webpack_require__(9401);
var createProperty = __webpack_require__(948);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ 1900:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var fails = __webpack_require__(9024);
var getOwnPropertyNames = (__webpack_require__(7968).f);

// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: getOwnPropertyNames
});


/***/ }),

/***/ 1891:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var NATIVE_SYMBOL = __webpack_require__(1575);
var fails = __webpack_require__(9024);
var getOwnPropertySymbolsModule = __webpack_require__(5511);
var toObject = __webpack_require__(6834);

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ 9450:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var fails = __webpack_require__(9024);
var toObject = __webpack_require__(6834);
var nativeGetPrototypeOf = __webpack_require__(4704);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(9822);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ 8118:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var hasOwn = __webpack_require__(5776);

// `Object.hasOwn` method
// https://tc39.es/ecma262/#sec-object.hasown
$({ target: 'Object', stat: true }, {
  hasOwn: hasOwn
});


/***/ }),

/***/ 5177:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $isExtensible = __webpack_require__(2885);

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
// eslint-disable-next-line es/no-object-isextensible -- safe
$({ target: 'Object', stat: true, forced: Object.isExtensible !== $isExtensible }, {
  isExtensible: $isExtensible
});


/***/ }),

/***/ 197:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var fails = __webpack_require__(9024);
var isObject = __webpack_require__(1930);
var classof = __webpack_require__(8669);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(1416);

// eslint-disable-next-line es/no-object-isfrozen -- safe
var $isFrozen = Object.isFrozen;

var FORCED = ARRAY_BUFFER_NON_EXTENSIBLE || fails(function () { $isFrozen(1); });

// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
$({ target: 'Object', stat: true, forced: FORCED }, {
  isFrozen: function isFrozen(it) {
    if (!isObject(it)) return true;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return true;
    return $isFrozen ? $isFrozen(it) : false;
  }
});


/***/ }),

/***/ 5274:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var fails = __webpack_require__(9024);
var isObject = __webpack_require__(1930);
var classof = __webpack_require__(8669);
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(1416);

// eslint-disable-next-line es/no-object-issealed -- safe
var $isSealed = Object.isSealed;

var FORCED = ARRAY_BUFFER_NON_EXTENSIBLE || fails(function () { $isSealed(1); });

// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
$({ target: 'Object', stat: true, forced: FORCED }, {
  isSealed: function isSealed(it) {
    if (!isObject(it)) return true;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return true;
    return $isSealed ? $isSealed(it) : false;
  }
});


/***/ }),

/***/ 6044:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var is = __webpack_require__(2142);

// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
$({ target: 'Object', stat: true }, {
  is: is
});


/***/ }),

/***/ 5814:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var toObject = __webpack_require__(6834);
var nativeKeys = __webpack_require__(2652);
var fails = __webpack_require__(9024);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 7474:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var FORCED = __webpack_require__(9872);
var toObject = __webpack_require__(6834);
var toPropertyKey = __webpack_require__(9954);
var getPrototypeOf = __webpack_require__(4704);
var getOwnPropertyDescriptor = (__webpack_require__(9401).f);

// `Object.prototype.__lookupGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = toObject(this);
      var key = toPropertyKey(P);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor(O, key)) return desc.get;
      } while (O = getPrototypeOf(O));
    }
  });
}


/***/ }),

/***/ 5406:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var FORCED = __webpack_require__(9872);
var toObject = __webpack_require__(6834);
var toPropertyKey = __webpack_require__(9954);
var getPrototypeOf = __webpack_require__(4704);
var getOwnPropertyDescriptor = (__webpack_require__(9401).f);

// `Object.prototype.__lookupSetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = toObject(this);
      var key = toPropertyKey(P);
      var desc;
      do {
        if (desc = getOwnPropertyDescriptor(O, key)) return desc.set;
      } while (O = getPrototypeOf(O));
    }
  });
}


/***/ }),

/***/ 2464:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var isObject = __webpack_require__(1930);
var onFreeze = (__webpack_require__(9536).onFreeze);
var FREEZING = __webpack_require__(7798);
var fails = __webpack_require__(9024);

// eslint-disable-next-line es/no-object-preventextensions -- safe
var $preventExtensions = Object.preventExtensions;
var FAILS_ON_PRIMITIVES = fails(function () { $preventExtensions(1); });

// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 1068:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var defineBuiltInAccessor = __webpack_require__(6633);
var isObject = __webpack_require__(1930);
var toObject = __webpack_require__(6834);
var requireObjectCoercible = __webpack_require__(3175);

// eslint-disable-next-line es/no-object-getprototypeof -- safe
var getPrototypeOf = Object.getPrototypeOf;
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var setPrototypeOf = Object.setPrototypeOf;
var ObjectPrototype = Object.prototype;
var PROTO = '__proto__';

// `Object.prototype.__proto__` accessor
// https://tc39.es/ecma262/#sec-object.prototype.__proto__
if (DESCRIPTORS && getPrototypeOf && setPrototypeOf && !(PROTO in ObjectPrototype)) try {
  defineBuiltInAccessor(ObjectPrototype, PROTO, {
    configurable: true,
    get: function __proto__() {
      return getPrototypeOf(toObject(this));
    },
    set: function __proto__(proto) {
      var O = requireObjectCoercible(this);
      if (!isObject(proto) && proto !== null || !isObject(O)) return;
      setPrototypeOf(O, proto);
    }
  });
} catch (error) { /* empty */ }


/***/ }),

/***/ 6853:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var isObject = __webpack_require__(1930);
var onFreeze = (__webpack_require__(9536).onFreeze);
var FREEZING = __webpack_require__(7798);
var fails = __webpack_require__(9024);

// eslint-disable-next-line es/no-object-seal -- safe
var $seal = Object.seal;
var FAILS_ON_PRIMITIVES = fails(function () { $seal(1); });

// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  seal: function seal(it) {
    return $seal && isObject(it) ? $seal(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ 6199:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var setPrototypeOf = __webpack_require__(8914);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ 5545:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(541);
var defineBuiltIn = __webpack_require__(134);
var toString = __webpack_require__(1859);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ 4018:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $values = (__webpack_require__(5735).values);

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ 8084:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var aCallable = __webpack_require__(6717);
var newPromiseCapabilityModule = __webpack_require__(8945);
var perform = __webpack_require__(9669);
var iterate = __webpack_require__(2246);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(3333);

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 8404:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var IS_PURE = __webpack_require__(7358);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(1102).CONSTRUCTOR);
var NativePromiseConstructor = __webpack_require__(9886);
var getBuiltIn = __webpack_require__(6024);
var isCallable = __webpack_require__(1365);
var defineBuiltIn = __webpack_require__(134);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ 1946:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var IS_PURE = __webpack_require__(7358);
var IS_NODE = __webpack_require__(3281);
var global = __webpack_require__(2262);
var call = __webpack_require__(4904);
var defineBuiltIn = __webpack_require__(134);
var setPrototypeOf = __webpack_require__(8914);
var setToStringTag = __webpack_require__(4521);
var setSpecies = __webpack_require__(4391);
var aCallable = __webpack_require__(6717);
var isCallable = __webpack_require__(1365);
var isObject = __webpack_require__(1930);
var anInstance = __webpack_require__(7869);
var speciesConstructor = __webpack_require__(8114);
var task = (__webpack_require__(9979).set);
var microtask = __webpack_require__(6119);
var hostReportErrors = __webpack_require__(8866);
var perform = __webpack_require__(9669);
var Queue = __webpack_require__(9025);
var InternalStateModule = __webpack_require__(2108);
var NativePromiseConstructor = __webpack_require__(9886);
var PromiseConstructorDetection = __webpack_require__(1102);
var newPromiseCapabilityModule = __webpack_require__(8945);

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(new TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw new TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state === PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ 5407:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(1946);
__webpack_require__(8084);
__webpack_require__(8404);
__webpack_require__(1537);
__webpack_require__(5806);
__webpack_require__(527);


/***/ }),

/***/ 1537:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var aCallable = __webpack_require__(6717);
var newPromiseCapabilityModule = __webpack_require__(8945);
var perform = __webpack_require__(9669);
var iterate = __webpack_require__(2246);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(3333);

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 5806:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var newPromiseCapabilityModule = __webpack_require__(8945);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(1102).CONSTRUCTOR);

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});


/***/ }),

/***/ 527:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var getBuiltIn = __webpack_require__(6024);
var IS_PURE = __webpack_require__(7358);
var NativePromiseConstructor = __webpack_require__(9886);
var FORCED_PROMISE_CONSTRUCTOR = (__webpack_require__(1102).CONSTRUCTOR);
var promiseResolve = __webpack_require__(5745);

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ 6855:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var functionApply = __webpack_require__(2415);
var aCallable = __webpack_require__(6717);
var anObject = __webpack_require__(9644);
var fails = __webpack_require__(9024);

// MS Edge argumentsList argument is optional
var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
  // eslint-disable-next-line es/no-reflect -- required for testing
  Reflect.apply(function () { /* empty */ });
});

// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
$({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
  apply: function apply(target, thisArgument, argumentsList) {
    return functionApply(aCallable(target), thisArgument, anObject(argumentsList));
  }
});


/***/ }),

/***/ 9595:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var getBuiltIn = __webpack_require__(6024);
var apply = __webpack_require__(2415);
var bind = __webpack_require__(5045);
var aConstructor = __webpack_require__(7754);
var anObject = __webpack_require__(9644);
var isObject = __webpack_require__(1930);
var create = __webpack_require__(2990);
var fails = __webpack_require__(9024);

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target === newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 6707:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var anObject = __webpack_require__(9644);
var toPropertyKey = __webpack_require__(9954);
var definePropertyModule = __webpack_require__(4116);
var fails = __webpack_require__(9024);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var ERROR_INSTEAD_OF_FALSE = fails(function () {
  // eslint-disable-next-line es/no-reflect -- required for testing
  Reflect.defineProperty(definePropertyModule.f({}, 1, { value: 1 }), 1, { value: 2 });
});

// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
$({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !DESCRIPTORS }, {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    var key = toPropertyKey(propertyKey);
    anObject(attributes);
    try {
      definePropertyModule.f(target, key, attributes);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 6381:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var anObject = __webpack_require__(9644);
var getOwnPropertyDescriptor = (__webpack_require__(9401).f);

// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
$({ target: 'Reflect', stat: true }, {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ 2781:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var DESCRIPTORS = __webpack_require__(4777);
var anObject = __webpack_require__(9644);
var getOwnPropertyDescriptorModule = __webpack_require__(9401);

// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
$({ target: 'Reflect', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ 4745:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var anObject = __webpack_require__(9644);
var objectGetPrototypeOf = __webpack_require__(4704);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(9822);

// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
$({ target: 'Reflect', stat: true, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(target) {
    return objectGetPrototypeOf(anObject(target));
  }
});


/***/ }),

/***/ 2536:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var isObject = __webpack_require__(1930);
var anObject = __webpack_require__(9644);
var isDataDescriptor = __webpack_require__(4077);
var getOwnPropertyDescriptorModule = __webpack_require__(9401);
var getPrototypeOf = __webpack_require__(4704);

// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
  if (descriptor) return isDataDescriptor(descriptor)
    ? descriptor.value
    : descriptor.get === undefined ? undefined : call(descriptor.get, receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ 7726:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);

// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
$({ target: 'Reflect', stat: true }, {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ 3527:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var anObject = __webpack_require__(9644);
var $isExtensible = __webpack_require__(2885);

// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
$({ target: 'Reflect', stat: true }, {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible(target);
  }
});


/***/ }),

/***/ 428:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var ownKeys = __webpack_require__(5290);

// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
$({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys
});


/***/ }),

/***/ 5881:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var getBuiltIn = __webpack_require__(6024);
var anObject = __webpack_require__(9644);
var FREEZING = __webpack_require__(7798);

// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
$({ target: 'Reflect', stat: true, sham: !FREEZING }, {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
      if (objectPreventExtensions) objectPreventExtensions(target);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 4366:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var anObject = __webpack_require__(9644);
var aPossiblePrototype = __webpack_require__(3979);
var objectSetPrototypeOf = __webpack_require__(8914);

// `Reflect.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.setprototypeof
if (objectSetPrototypeOf) $({ target: 'Reflect', stat: true }, {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    anObject(target);
    aPossiblePrototype(proto);
    try {
      objectSetPrototypeOf(target, proto);
      return true;
    } catch (error) {
      return false;
    }
  }
});


/***/ }),

/***/ 8645:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var anObject = __webpack_require__(9644);
var isObject = __webpack_require__(1930);
var isDataDescriptor = __webpack_require__(4077);
var fails = __webpack_require__(9024);
var definePropertyModule = __webpack_require__(4116);
var getOwnPropertyDescriptorModule = __webpack_require__(9401);
var getPrototypeOf = __webpack_require__(4704);
var createPropertyDescriptor = __webpack_require__(7334);

// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
  var existingDescriptor, prototype, setter;
  if (!ownDescriptor) {
    if (isObject(prototype = getPrototypeOf(target))) {
      return set(prototype, propertyKey, V, receiver);
    }
    ownDescriptor = createPropertyDescriptor(0);
  }
  if (isDataDescriptor(ownDescriptor)) {
    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));
  } else {
    setter = ownDescriptor.set;
    if (setter === undefined) return false;
    call(setter, receiver, V);
  } return true;
}

// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var MS_EDGE_BUG = fails(function () {
  var Constructor = function () { /* empty */ };
  var object = definePropertyModule.f(new Constructor(), 'a', { configurable: true });
  // eslint-disable-next-line es/no-reflect -- required for testing
  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
});

$({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
  set: set
});


/***/ }),

/***/ 9004:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var global = __webpack_require__(2262);
var setToStringTag = __webpack_require__(4521);

$({ global: true }, { Reflect: {} });

// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global.Reflect, 'Reflect', true);


/***/ }),

/***/ 187:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var global = __webpack_require__(2262);
var uncurryThis = __webpack_require__(9272);
var isForced = __webpack_require__(9762);
var inheritIfRequired = __webpack_require__(5481);
var createNonEnumerableProperty = __webpack_require__(3797);
var getOwnPropertyNames = (__webpack_require__(6637).f);
var isPrototypeOf = __webpack_require__(1338);
var isRegExp = __webpack_require__(1661);
var toString = __webpack_require__(3021);
var getRegExpFlags = __webpack_require__(5800);
var stickyHelpers = __webpack_require__(7365);
var proxyAccessor = __webpack_require__(4019);
var defineBuiltIn = __webpack_require__(134);
var fails = __webpack_require__(9024);
var hasOwn = __webpack_require__(5776);
var enforceInternalState = (__webpack_require__(2108).enforce);
var setSpecies = __webpack_require__(4391);
var wellKnownSymbol = __webpack_require__(7088);
var UNSUPPORTED_DOT_ALL = __webpack_require__(7853);
var UNSUPPORTED_NCG = __webpack_require__(2477);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) !== re1 || NativeRegExp(re2) === re2 || String(NativeRegExp(re1, 'i')) !== '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr += charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  defineBuiltIn(global, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ 8975:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var UNSUPPORTED_DOT_ALL = __webpack_require__(7853);
var classof = __webpack_require__(8669);
var defineBuiltInAccessor = __webpack_require__(6633);
var getInternalState = (__webpack_require__(2108).get);

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.dotAll` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall
if (DESCRIPTORS && UNSUPPORTED_DOT_ALL) {
  defineBuiltInAccessor(RegExpPrototype, 'dotAll', {
    configurable: true,
    get: function dotAll() {
      if (this === RegExpPrototype) return undefined;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).dotAll;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ 3902:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var exec = __webpack_require__(2981);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ 4769:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var DESCRIPTORS = __webpack_require__(4777);
var defineBuiltInAccessor = __webpack_require__(6633);
var regExpFlags = __webpack_require__(9035);
var fails = __webpack_require__(9024);

// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;

var FORCED = DESCRIPTORS && fails(function () {
  var INDICES_SUPPORT = true;
  try {
    RegExp('.', 'd');
  } catch (error) {
    INDICES_SUPPORT = false;
  }

  var O = {};
  // modern V8 bug
  var calls = '';
  var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';

  var addGetter = function (key, chr) {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(O, key, { get: function () {
      calls += chr;
      return true;
    } });
  };

  var pairs = {
    dotAll: 's',
    global: 'g',
    ignoreCase: 'i',
    multiline: 'm',
    sticky: 'y'
  };

  if (INDICES_SUPPORT) pairs.hasIndices = 'd';

  for (var key in pairs) addGetter(key, pairs[key]);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);

  return result !== expected || calls !== expected;
});

// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
  configurable: true,
  get: regExpFlags
});


/***/ }),

/***/ 7014:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(4777);
var MISSED_STICKY = (__webpack_require__(7365).MISSED_STICKY);
var classof = __webpack_require__(8669);
var defineBuiltInAccessor = __webpack_require__(6633);
var getInternalState = (__webpack_require__(2108).get);

var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;

// `RegExp.prototype.sticky` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
if (DESCRIPTORS && MISSED_STICKY) {
  defineBuiltInAccessor(RegExpPrototype, 'sticky', {
    configurable: true,
    get: function sticky() {
      if (this === RegExpPrototype) return;
      // We can't use InternalStateModule.getterFor because
      // we don't add metadata for regexps created by a literal.
      if (classof(this) === 'RegExp') {
        return !!getInternalState(this).sticky;
      }
      throw new $TypeError('Incompatible receiver, RegExp required');
    }
  });
}


/***/ }),

/***/ 9048:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(3902);
var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var isCallable = __webpack_require__(1365);
var anObject = __webpack_require__(9644);
var toString = __webpack_require__(3021);

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (S) {
    var R = anObject(this);
    var string = toString(S);
    var exec = R.exec;
    if (!isCallable(exec)) return call(nativeTest, R, string);
    var result = call(exec, R, string);
    if (result === null) return false;
    anObject(result);
    return true;
  }
});


/***/ }),

/***/ 6361:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var PROPER_FUNCTION_NAME = (__webpack_require__(7246).PROPER);
var defineBuiltIn = __webpack_require__(134);
var anObject = __webpack_require__(9644);
var $toString = __webpack_require__(3021);
var fails = __webpack_require__(9024);
var getRegExpFlags = __webpack_require__(5800);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) !== '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}


/***/ }),

/***/ 7452:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
  anchor: function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  }
});


/***/ }),

/***/ 6880:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var requireObjectCoercible = __webpack_require__(3175);
var toIntegerOrInfinity = __webpack_require__(9935);
var toString = __webpack_require__(3021);
var fails = __webpack_require__(9024);

var charAt = uncurryThis(''.charAt);

var FORCED = fails(function () {
  // eslint-disable-next-line es/no-array-string-prototype-at -- safe
  return '𠮷'.at(-2) !== '\uD842';
});

// `String.prototype.at` method
// https://tc39.es/ecma262/#sec-string.prototype.at
$({ target: 'String', proto: true, forced: FORCED }, {
  at: function at(index) {
    var S = toString(requireObjectCoercible(this));
    var len = S.length;
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : charAt(S, k);
  }
});


/***/ }),

/***/ 4191:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('big') }, {
  big: function big() {
    return createHTML(this, 'big', '', '');
  }
});


/***/ }),

/***/ 7937:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('blink') }, {
  blink: function blink() {
    return createHTML(this, 'blink', '', '');
  }
});


/***/ }),

/***/ 6811:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('bold') }, {
  bold: function bold() {
    return createHTML(this, 'b', '', '');
  }
});


/***/ }),

/***/ 5723:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var codeAt = (__webpack_require__(3313).codeAt);

// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
$({ target: 'String', proto: true }, {
  codePointAt: function codePointAt(pos) {
    return codeAt(this, pos);
  }
});


/***/ }),

/***/ 536:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(5448);
var getOwnPropertyDescriptor = (__webpack_require__(9401).f);
var toLength = __webpack_require__(976);
var toString = __webpack_require__(3021);
var notARegExp = __webpack_require__(4915);
var requireObjectCoercible = __webpack_require__(3175);
var correctIsRegExpLogic = __webpack_require__(4465);
var IS_PURE = __webpack_require__(7358);

// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var nativeEndsWith = uncurryThis(''.endsWith);
var slice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = that.length;
    var end = endPosition === undefined ? len : min(toLength(endPosition), len);
    var search = toString(searchString);
    return nativeEndsWith
      ? nativeEndsWith(that, search, end)
      : slice(that, end - search.length, end) === search;
  }
});


/***/ }),

/***/ 3738:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ 1815:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontcolor') }, {
  fontcolor: function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  }
});


/***/ }),

/***/ 1735:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fontsize') }, {
  fontsize: function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  }
});


/***/ }),

/***/ 7368:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var toAbsoluteIndex = __webpack_require__(1614);

var $RangeError = RangeError;
var fromCharCode = String.fromCharCode;
// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
var $fromCodePoint = String.fromCodePoint;
var join = uncurryThis([].join);

// length should be 1, old FF problem
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length !== 1;

// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
$({ target: 'String', stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  fromCodePoint: function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw new $RangeError(code + ' is not a valid code point');
      elements[i] = code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
    } return join(elements, '');
  }
});


/***/ }),

/***/ 3522:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var notARegExp = __webpack_require__(4915);
var requireObjectCoercible = __webpack_require__(3175);
var toString = __webpack_require__(3021);
var correctIsRegExpLogic = __webpack_require__(4465);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ 116:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var requireObjectCoercible = __webpack_require__(3175);
var toString = __webpack_require__(3021);

var charCodeAt = uncurryThis(''.charCodeAt);

// `String.prototype.isWellFormed` method
// https://github.com/tc39/proposal-is-usv-string
$({ target: 'String', proto: true }, {
  isWellFormed: function isWellFormed() {
    var S = toString(requireObjectCoercible(this));
    var length = S.length;
    for (var i = 0; i < length; i++) {
      var charCode = charCodeAt(S, i);
      // single UTF-16 code unit
      if ((charCode & 0xF800) !== 0xD800) continue;
      // unpaired surrogate
      if (charCode >= 0xDC00 || ++i >= length || (charCodeAt(S, i) & 0xFC00) !== 0xDC00) return false;
    } return true;
  }
});


/***/ }),

/***/ 719:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('italics') }, {
  italics: function italics() {
    return createHTML(this, 'i', '', '');
  }
});


/***/ }),

/***/ 1923:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(3313).charAt);
var toString = __webpack_require__(3021);
var InternalStateModule = __webpack_require__(2108);
var defineIterator = __webpack_require__(8718);
var createIterResultObject = __webpack_require__(1668);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ 5042:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ 9607:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-string-prototype-matchall -- safe */
var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var uncurryThis = __webpack_require__(5448);
var createIteratorConstructor = __webpack_require__(8097);
var createIterResultObject = __webpack_require__(1668);
var requireObjectCoercible = __webpack_require__(3175);
var toLength = __webpack_require__(976);
var toString = __webpack_require__(3021);
var anObject = __webpack_require__(9644);
var isNullOrUndefined = __webpack_require__(1562);
var classof = __webpack_require__(8669);
var isRegExp = __webpack_require__(1661);
var getRegExpFlags = __webpack_require__(5800);
var getMethod = __webpack_require__(6838);
var defineBuiltIn = __webpack_require__(134);
var fails = __webpack_require__(9024);
var wellKnownSymbol = __webpack_require__(7088);
var speciesConstructor = __webpack_require__(8114);
var advanceStringIndex = __webpack_require__(4364);
var regExpExec = __webpack_require__(126);
var InternalStateModule = __webpack_require__(2108);
var IS_PURE = __webpack_require__(7358);

var MATCH_ALL = wellKnownSymbol('matchAll');
var REGEXP_STRING = 'RegExp String';
var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype = RegExp.prototype;
var $TypeError = TypeError;
var stringIndexOf = uncurryThis(''.indexOf);
var nativeMatchAll = uncurryThis(''.matchAll);

var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function () {
  nativeMatchAll('a', /./);
});

var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
  setInternalState(this, {
    type: REGEXP_STRING_ITERATOR,
    regexp: regexp,
    string: string,
    global: $global,
    unicode: fullUnicode,
    done: false
  });
}, REGEXP_STRING, function next() {
  var state = getInternalState(this);
  if (state.done) return createIterResultObject(undefined, true);
  var R = state.regexp;
  var S = state.string;
  var match = regExpExec(R, S);
  if (match === null) {
    state.done = true;
    return createIterResultObject(undefined, true);
  }
  if (state.global) {
    if (toString(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
    return createIterResultObject(match, false);
  }
  state.done = true;
  return createIterResultObject(match, false);
});

var $matchAll = function (string) {
  var R = anObject(this);
  var S = toString(string);
  var C = speciesConstructor(R, RegExp);
  var flags = toString(getRegExpFlags(R));
  var matcher, $global, fullUnicode;
  matcher = new C(C === RegExp ? R.source : R, flags);
  $global = !!~stringIndexOf(flags, 'g');
  fullUnicode = !!~stringIndexOf(flags, 'u');
  matcher.lastIndex = toLength(R.lastIndex);
  return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
};

// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
$({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
  matchAll: function matchAll(regexp) {
    var O = requireObjectCoercible(this);
    var flags, S, matcher, rx;
    if (!isNullOrUndefined(regexp)) {
      if (isRegExp(regexp)) {
        flags = toString(requireObjectCoercible(getRegExpFlags(regexp)));
        if (!~stringIndexOf(flags, 'g')) throw new $TypeError('`.matchAll` does not allow non-global regexes');
      }
      if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
      matcher = getMethod(regexp, MATCH_ALL);
      if (matcher === undefined && IS_PURE && classof(regexp) === 'RegExp') matcher = $matchAll;
      if (matcher) return call(matcher, regexp, O);
    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
    S = toString(O);
    rx = new RegExp(regexp, 'g');
    return IS_PURE ? call($matchAll, rx, S) : rx[MATCH_ALL](S);
  }
});

IS_PURE || MATCH_ALL in RegExpPrototype || defineBuiltIn(RegExpPrototype, MATCH_ALL, $matchAll);


/***/ }),

/***/ 677:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(6369);
var anObject = __webpack_require__(9644);
var isNullOrUndefined = __webpack_require__(1562);
var toLength = __webpack_require__(976);
var toString = __webpack_require__(3021);
var requireObjectCoercible = __webpack_require__(3175);
var getMethod = __webpack_require__(6838);
var advanceStringIndex = __webpack_require__(4364);
var regExpExec = __webpack_require__(126);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ 2072:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $padEnd = (__webpack_require__(6874).end);
var WEBKIT_BUG = __webpack_require__(8165);

// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 9104:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $padStart = (__webpack_require__(6874).start);
var WEBKIT_BUG = __webpack_require__(8165);

// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
$({ target: 'String', proto: true, forced: WEBKIT_BUG }, {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 688:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var toIndexedObject = __webpack_require__(9135);
var toObject = __webpack_require__(6834);
var toString = __webpack_require__(3021);
var lengthOfArrayLike = __webpack_require__(755);

var push = uncurryThis([].push);
var join = uncurryThis([].join);

// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
$({ target: 'String', stat: true }, {
  raw: function raw(template) {
    var rawTemplate = toIndexedObject(toObject(template).raw);
    var literalSegments = lengthOfArrayLike(rawTemplate);
    if (!literalSegments) return '';
    var argumentsLength = arguments.length;
    var elements = [];
    var i = 0;
    while (true) {
      push(elements, toString(rawTemplate[i++]));
      if (i === literalSegments) return join(elements, '');
      if (i < argumentsLength) push(elements, toString(arguments[i]));
    }
  }
});


/***/ }),

/***/ 7027:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var repeat = __webpack_require__(7955);

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ 8354:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var uncurryThis = __webpack_require__(9272);
var requireObjectCoercible = __webpack_require__(3175);
var isCallable = __webpack_require__(1365);
var isNullOrUndefined = __webpack_require__(1562);
var isRegExp = __webpack_require__(1661);
var toString = __webpack_require__(3021);
var getMethod = __webpack_require__(6838);
var getRegExpFlags = __webpack_require__(5800);
var getSubstitution = __webpack_require__(1634);
var wellKnownSymbol = __webpack_require__(7088);
var IS_PURE = __webpack_require__(7358);

var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;

var stringIndexOf = function (string, searchValue, fromIndex) {
  if (fromIndex > string.length) return -1;
  if (searchValue === '') return fromIndex;
  return indexOf(string, searchValue, fromIndex);
};

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    if (!isNullOrUndefined(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) {
        return call(replacer, searchValue, O, replaceValue);
      } else if (IS_PURE && IS_REG_EXP) {
        return replace(toString(O), searchValue, replaceValue);
      }
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = stringIndexOf(string, searchString, 0);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});


/***/ }),

/***/ 6636:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(2415);
var call = __webpack_require__(4904);
var uncurryThis = __webpack_require__(9272);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(6369);
var fails = __webpack_require__(9024);
var anObject = __webpack_require__(9644);
var isCallable = __webpack_require__(1365);
var isNullOrUndefined = __webpack_require__(1562);
var toIntegerOrInfinity = __webpack_require__(9935);
var toLength = __webpack_require__(976);
var toString = __webpack_require__(3021);
var requireObjectCoercible = __webpack_require__(3175);
var advanceStringIndex = __webpack_require__(4364);
var getMethod = __webpack_require__(6838);
var getSubstitution = __webpack_require__(1634);
var regExpExec = __webpack_require__(126);
var wellKnownSymbol = __webpack_require__(7088);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      var fullUnicode;
      if (global) {
        fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ 4900:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(4904);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(6369);
var anObject = __webpack_require__(9644);
var isNullOrUndefined = __webpack_require__(1562);
var requireObjectCoercible = __webpack_require__(3175);
var sameValue = __webpack_require__(2142);
var toString = __webpack_require__(3021);
var getMethod = __webpack_require__(6838);
var regExpExec = __webpack_require__(126);

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ 9752:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {
  small: function small() {
    return createHTML(this, 'small', '', '');
  }
});


/***/ }),

/***/ 7374:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(2415);
var call = __webpack_require__(4904);
var uncurryThis = __webpack_require__(9272);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(6369);
var anObject = __webpack_require__(9644);
var isNullOrUndefined = __webpack_require__(1562);
var isRegExp = __webpack_require__(1661);
var requireObjectCoercible = __webpack_require__(3175);
var speciesConstructor = __webpack_require__(8114);
var advanceStringIndex = __webpack_require__(4364);
var toLength = __webpack_require__(976);
var toString = __webpack_require__(3021);
var getMethod = __webpack_require__(6838);
var arraySlice = __webpack_require__(1736);
var callRegExpExec = __webpack_require__(126);
var regexpExec = __webpack_require__(2981);
var stickyHelpers = __webpack_require__(7365);
var fails = __webpack_require__(9024);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] === 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length !== 4 ||
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ 4215:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(5448);
var getOwnPropertyDescriptor = (__webpack_require__(9401).f);
var toLength = __webpack_require__(976);
var toString = __webpack_require__(3021);
var notARegExp = __webpack_require__(4915);
var requireObjectCoercible = __webpack_require__(3175);
var correctIsRegExpLogic = __webpack_require__(4465);
var IS_PURE = __webpack_require__(7358);

// eslint-disable-next-line es/no-string-prototype-startswith -- safe
var nativeStartsWith = uncurryThis(''.startsWith);
var stringSlice = uncurryThis(''.slice);
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = toString(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = toString(searchString);
    return nativeStartsWith
      ? nativeStartsWith(that, search, index)
      : stringSlice(that, index, index + search.length) === search;
  }
});


/***/ }),

/***/ 4815:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('strike') }, {
  strike: function strike() {
    return createHTML(this, 'strike', '', '');
  }
});


/***/ }),

/***/ 3551:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sub') }, {
  sub: function sub() {
    return createHTML(this, 'sub', '', '');
  }
});


/***/ }),

/***/ 9159:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var requireObjectCoercible = __webpack_require__(3175);
var toIntegerOrInfinity = __webpack_require__(9935);
var toString = __webpack_require__(3021);

var stringSlice = uncurryThis(''.slice);
var max = Math.max;
var min = Math.min;

// eslint-disable-next-line unicorn/prefer-string-slice -- required for testing
var FORCED = !''.substr || 'ab'.substr(-1) !== 'b';

// `String.prototype.substr` method
// https://tc39.es/ecma262/#sec-string.prototype.substr
$({ target: 'String', proto: true, forced: FORCED }, {
  substr: function substr(start, length) {
    var that = toString(requireObjectCoercible(this));
    var size = that.length;
    var intStart = toIntegerOrInfinity(start);
    var intLength, intEnd;
    if (intStart === Infinity) intStart = 0;
    if (intStart < 0) intStart = max(size + intStart, 0);
    intLength = length === undefined ? size : toIntegerOrInfinity(length);
    if (intLength <= 0 || intLength === Infinity) return '';
    intEnd = min(intStart + intLength, size);
    return intStart >= intEnd ? '' : stringSlice(that, intStart, intEnd);
  }
});


/***/ }),

/***/ 1135:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createHTML = __webpack_require__(763);
var forcedStringHTMLMethod = __webpack_require__(8237);

// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('sup') }, {
  sup: function sup() {
    return createHTML(this, 'sup', '', '');
  }
});


/***/ }),

/***/ 3533:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var call = __webpack_require__(4904);
var uncurryThis = __webpack_require__(9272);
var requireObjectCoercible = __webpack_require__(3175);
var toString = __webpack_require__(3021);
var fails = __webpack_require__(9024);

var $Array = Array;
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
// eslint-disable-next-line es/no-string-prototype-iswellformed-towellformed -- safe
var $toWellFormed = ''.toWellFormed;
var REPLACEMENT_CHARACTER = '\uFFFD';

// Safari bug
var TO_STRING_CONVERSION_BUG = $toWellFormed && fails(function () {
  return call($toWellFormed, 1) !== '1';
});

// `String.prototype.toWellFormed` method
// https://github.com/tc39/proposal-is-usv-string
$({ target: 'String', proto: true, forced: TO_STRING_CONVERSION_BUG }, {
  toWellFormed: function toWellFormed() {
    var S = toString(requireObjectCoercible(this));
    if (TO_STRING_CONVERSION_BUG) return call($toWellFormed, S);
    var length = S.length;
    var result = $Array(length);
    for (var i = 0; i < length; i++) {
      var charCode = charCodeAt(S, i);
      // single UTF-16 code unit
      if ((charCode & 0xF800) !== 0xD800) result[i] = charAt(S, i);
      // unpaired surrogate
      else if (charCode >= 0xDC00 || i + 1 >= length || (charCodeAt(S, i + 1) & 0xFC00) !== 0xDC00) result[i] = REPLACEMENT_CHARACTER;
      // surrogate pair
      else {
        result[i] = charAt(S, i);
        result[++i] = charAt(S, i);
      }
    } return join(result, '');
  }
});


/***/ }),

/***/ 7547:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this line from `core-js@4`
__webpack_require__(4083);
var $ = __webpack_require__(7545);
var trimEnd = __webpack_require__(6618);

// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimEnd !== trimEnd }, {
  trimEnd: trimEnd
});


/***/ }),

/***/ 4144:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var trimStart = __webpack_require__(4835);

// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimLeft !== trimStart }, {
  trimLeft: trimStart
});


/***/ }),

/***/ 4083:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var trimEnd = __webpack_require__(6618);

// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
$({ target: 'String', proto: true, name: 'trimEnd', forced: ''.trimRight !== trimEnd }, {
  trimRight: trimEnd
});


/***/ }),

/***/ 2674:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this line from `core-js@4`
__webpack_require__(4144);
var $ = __webpack_require__(7545);
var trimStart = __webpack_require__(4835);

// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
$({ target: 'String', proto: true, name: 'trimStart', forced: ''.trimStart !== trimStart }, {
  trimStart: trimStart
});


/***/ }),

/***/ 8969:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $trim = (__webpack_require__(7473).trim);
var forcedStringTrimMethod = __webpack_require__(6002);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 3293:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var global = __webpack_require__(2262);
var call = __webpack_require__(4904);
var uncurryThis = __webpack_require__(9272);
var IS_PURE = __webpack_require__(7358);
var DESCRIPTORS = __webpack_require__(4777);
var NATIVE_SYMBOL = __webpack_require__(1575);
var fails = __webpack_require__(9024);
var hasOwn = __webpack_require__(5776);
var isPrototypeOf = __webpack_require__(1338);
var anObject = __webpack_require__(9644);
var toIndexedObject = __webpack_require__(9135);
var toPropertyKey = __webpack_require__(9954);
var $toString = __webpack_require__(3021);
var createPropertyDescriptor = __webpack_require__(7334);
var nativeObjectCreate = __webpack_require__(2990);
var objectKeys = __webpack_require__(2652);
var getOwnPropertyNamesModule = __webpack_require__(6637);
var getOwnPropertyNamesExternal = __webpack_require__(7968);
var getOwnPropertySymbolsModule = __webpack_require__(5511);
var getOwnPropertyDescriptorModule = __webpack_require__(9401);
var definePropertyModule = __webpack_require__(4116);
var definePropertiesModule = __webpack_require__(8466);
var propertyIsEnumerableModule = __webpack_require__(8511);
var defineBuiltIn = __webpack_require__(134);
var defineBuiltInAccessor = __webpack_require__(6633);
var shared = __webpack_require__(9065);
var sharedKey = __webpack_require__(4559);
var hiddenKeys = __webpack_require__(5079);
var uid = __webpack_require__(3635);
var wellKnownSymbol = __webpack_require__(7088);
var wrappedWellKnownSymbolModule = __webpack_require__(4285);
var defineWellKnownSymbol = __webpack_require__(3833);
var defineSymbolToPrimitive = __webpack_require__(4172);
var setToStringTag = __webpack_require__(4521);
var InternalStateModule = __webpack_require__(2108);
var $forEach = (__webpack_require__(5010).forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError = global.RangeError;
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var fallbackDefineProperty = function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
};

var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      var $this = this === undefined ? global : this;
      if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError)) throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 8972:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var getBuiltIn = __webpack_require__(6024);
var hasOwn = __webpack_require__(5776);
var toString = __webpack_require__(3021);
var shared = __webpack_require__(9065);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(306);

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ 3470:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(3293);
__webpack_require__(8972);
__webpack_require__(8915);
__webpack_require__(1478);
__webpack_require__(1891);


/***/ }),

/***/ 8915:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var hasOwn = __webpack_require__(5776);
var isSymbol = __webpack_require__(9437);
var tryToString = __webpack_require__(7134);
var shared = __webpack_require__(9065);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(306);

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ 8140:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var FREEZING = __webpack_require__(7798);
var global = __webpack_require__(2262);
var uncurryThis = __webpack_require__(9272);
var defineBuiltIns = __webpack_require__(6233);
var InternalMetadataModule = __webpack_require__(9536);
var collection = __webpack_require__(4064);
var collectionWeak = __webpack_require__(1708);
var isObject = __webpack_require__(1930);
var enforceInternalState = (__webpack_require__(2108).enforce);
var fails = __webpack_require__(9024);
var NATIVE_WEAK_MAP = __webpack_require__(1448);

var $Object = Object;
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray = Array.isArray;
// eslint-disable-next-line es/no-object-isextensible -- safe
var isExtensible = $Object.isExtensible;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = $Object.isFrozen;
// eslint-disable-next-line es/no-object-issealed -- safe
var isSealed = $Object.isSealed;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = $Object.freeze;
// eslint-disable-next-line es/no-object-seal -- safe
var seal = $Object.seal;

var FROZEN = {};
var SEALED = {};
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);
var WeakMapPrototype = $WeakMap.prototype;
var nativeSet = uncurryThis(WeakMapPrototype.set);

// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
var hasMSEdgeFreezingBug = function () {
  return FREEZING && fails(function () {
    var frozenArray = freeze([]);
    nativeSet(new $WeakMap(), frozenArray, 1);
    return !isFrozen(frozenArray);
  });
};

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP) if (IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  defineBuiltIns(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
// Chakra Edge frozen keys fix
} else if (hasMSEdgeFreezingBug()) {
  defineBuiltIns(WeakMapPrototype, {
    set: function set(key, value) {
      var arrayIntegrityLevel;
      if (isArray(key)) {
        if (isFrozen(key)) arrayIntegrityLevel = FROZEN;
        else if (isSealed(key)) arrayIntegrityLevel = SEALED;
      }
      nativeSet(this, key, value);
      if (arrayIntegrityLevel === FROZEN) freeze(key);
      if (arrayIntegrityLevel === SEALED) seal(key);
      return this;
    }
  });
}


/***/ }),

/***/ 2604:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(8140);


/***/ }),

/***/ 7337:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(7061);


/***/ }),

/***/ 5522:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: remove from `core-js@4`
var $ = __webpack_require__(7545);
var $filterReject = (__webpack_require__(5010).filterReject);
var addToUnscopables = __webpack_require__(2755);

// `Array.prototype.filterOut` method
// https://github.com/tc39/proposal-array-filtering
$({ target: 'Array', proto: true, forced: true }, {
  filterOut: function filterOut(callbackfn /* , thisArg */) {
    return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('filterOut');


/***/ }),

/***/ 5577:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $filterReject = (__webpack_require__(5010).filterReject);
var addToUnscopables = __webpack_require__(2755);

// `Array.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
$({ target: 'Array', proto: true, forced: true }, {
  filterReject: function filterReject(callbackfn /* , thisArg */) {
    return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('filterReject');


/***/ }),

/***/ 996:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(1550);


/***/ }),

/***/ 6803:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(8279);


/***/ }),

/***/ 1719:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var fromAsync = __webpack_require__(4553);

// `Array.fromAsync` method
// https://github.com/tc39/proposal-array-from-async
$({ target: 'Array', stat: true }, {
  fromAsync: fromAsync
});


/***/ }),

/***/ 7013:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var arrayMethodIsStrict = __webpack_require__(706);
var addToUnscopables = __webpack_require__(2755);
var $groupToMap = __webpack_require__(2274);
var IS_PURE = __webpack_require__(7358);

// `Array.prototype.groupByToMap` method
// https://github.com/tc39/proposal-array-grouping
// https://bugs.webkit.org/show_bug.cgi?id=236541
$({ target: 'Array', proto: true, name: 'groupToMap', forced: IS_PURE || !arrayMethodIsStrict('groupByToMap') }, {
  groupByToMap: $groupToMap
});

addToUnscopables('groupByToMap');


/***/ }),

/***/ 1818:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var $group = __webpack_require__(3668);
var arrayMethodIsStrict = __webpack_require__(706);
var addToUnscopables = __webpack_require__(2755);

// `Array.prototype.groupBy` method
// https://github.com/tc39/proposal-array-grouping
// https://bugs.webkit.org/show_bug.cgi?id=236541
$({ target: 'Array', proto: true, forced: !arrayMethodIsStrict('groupBy') }, {
  groupBy: function groupBy(callbackfn /* , thisArg */) {
    var thisArg = arguments.length > 1 ? arguments[1] : undefined;
    return $group(this, callbackfn, thisArg);
  }
});

addToUnscopables('groupBy');


/***/ }),

/***/ 9195:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var addToUnscopables = __webpack_require__(2755);
var $groupToMap = __webpack_require__(2274);
var IS_PURE = __webpack_require__(7358);

// `Array.prototype.groupToMap` method
// https://github.com/tc39/proposal-array-grouping
$({ target: 'Array', proto: true, forced: IS_PURE }, {
  groupToMap: $groupToMap
});

addToUnscopables('groupToMap');


/***/ }),

/***/ 9295:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var $group = __webpack_require__(3668);
var addToUnscopables = __webpack_require__(2755);

// `Array.prototype.group` method
// https://github.com/tc39/proposal-array-grouping
$({ target: 'Array', proto: true }, {
  group: function group(callbackfn /* , thisArg */) {
    var thisArg = arguments.length > 1 ? arguments[1] : undefined;
    return $group(this, callbackfn, thisArg);
  }
});

addToUnscopables('group');


/***/ }),

/***/ 8134:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var isArray = __webpack_require__(4091);

// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = Object.isFrozen;

var isFrozenStringArray = function (array, allowUndefined) {
  if (!isFrozen || !isArray(array) || !isFrozen(array)) return false;
  var index = 0;
  var length = array.length;
  var element;
  while (index < length) {
    element = array[index++];
    if (!(typeof element == 'string' || (allowUndefined && element === undefined))) {
      return false;
    }
  } return length !== 0;
};

// `Array.isTemplateObject` method
// https://github.com/tc39/proposal-array-is-template-object
$({ target: 'Array', stat: true, sham: true, forced: true }, {
  isTemplateObject: function isTemplateObject(value) {
    if (!isFrozenStringArray(value, true)) return false;
    var raw = value.raw;
    return raw.length === value.length && isFrozenStringArray(raw, false);
  }
});


/***/ }),

/***/ 4612:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var DESCRIPTORS = __webpack_require__(4777);
var addToUnscopables = __webpack_require__(2755);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var defineBuiltInAccessor = __webpack_require__(6633);

// `Array.prototype.lastIndex` getter
// https://github.com/keithamus/proposal-array-last
if (DESCRIPTORS) {
  defineBuiltInAccessor(Array.prototype, 'lastIndex', {
    configurable: true,
    get: function lastIndex() {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      return len === 0 ? 0 : len - 1;
    }
  });

  addToUnscopables('lastIndex');
}


/***/ }),

/***/ 5070:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var DESCRIPTORS = __webpack_require__(4777);
var addToUnscopables = __webpack_require__(2755);
var toObject = __webpack_require__(6834);
var lengthOfArrayLike = __webpack_require__(755);
var defineBuiltInAccessor = __webpack_require__(6633);

// `Array.prototype.lastIndex` accessor
// https://github.com/keithamus/proposal-array-last
if (DESCRIPTORS) {
  defineBuiltInAccessor(Array.prototype, 'lastItem', {
    configurable: true,
    get: function lastItem() {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      return len === 0 ? undefined : O[len - 1];
    },
    set: function lastItem(value) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      return O[len === 0 ? 0 : len - 1] = value;
    }
  });

  addToUnscopables('lastItem');
}


/***/ }),

/***/ 6174:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(6421);


/***/ }),

/***/ 7376:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(5741);


/***/ }),

/***/ 5645:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(79);


/***/ }),

/***/ 6817:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var addToUnscopables = __webpack_require__(2755);
var uniqueBy = __webpack_require__(5790);

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
$({ target: 'Array', proto: true, forced: true }, {
  uniqueBy: uniqueBy
});

addToUnscopables('uniqueBy');


/***/ }),

/***/ 8932:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(23);


/***/ }),

/***/ 7481:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(1553);


/***/ }),

/***/ 8426:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var getBuiltIn = __webpack_require__(6024);
var uncurryThis = __webpack_require__(9272);
var aCallable = __webpack_require__(6717);
var requireObjectCoercible = __webpack_require__(3175);
var toPropertyKey = __webpack_require__(9954);
var iterate = __webpack_require__(2246);

var create = getBuiltIn('Object', 'create');
var push = uncurryThis([].push);

// `Object.groupBy` method
// https://github.com/tc39/proposal-array-grouping
$({ target: 'Object', stat: true }, {
  groupBy: function groupBy(items, callbackfn) {
    requireObjectCoercible(items);
    aCallable(callbackfn);
    var obj = create(null);
    var k = 0;
    iterate(items, function (value) {
      var key = toPropertyKey(callbackfn(value, k++));
      // in some IE versions, `hasOwnProperty` returns incorrect result on integer keys
      // but since it's a `null` prototype object, we can safely use `in`
      if (key in obj) push(obj[key], value);
      else obj[key] = [value];
    });
    return obj;
  }
});


/***/ }),

/***/ 8682:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(8118);


/***/ }),

/***/ 8291:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var ObjectIterator = __webpack_require__(3711);

// `Object.iterateEntries` method
// https://github.com/tc39/proposal-object-iteration
$({ target: 'Object', stat: true, forced: true }, {
  iterateEntries: function iterateEntries(object) {
    return new ObjectIterator(object, 'entries');
  }
});


/***/ }),

/***/ 7315:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var ObjectIterator = __webpack_require__(3711);

// `Object.iterateKeys` method
// https://github.com/tc39/proposal-object-iteration
$({ target: 'Object', stat: true, forced: true }, {
  iterateKeys: function iterateKeys(object) {
    return new ObjectIterator(object, 'keys');
  }
});


/***/ }),

/***/ 8597:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var ObjectIterator = __webpack_require__(3711);

// `Object.iterateValues` method
// https://github.com/tc39/proposal-object-iteration
$({ target: 'Object', stat: true, forced: true }, {
  iterateValues: function iterateValues(object) {
    return new ObjectIterator(object, 'values');
  }
});


/***/ }),

/***/ 498:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var ReflectMetadataModule = __webpack_require__(493);
var anObject = __webpack_require__(9644);

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.defineMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  defineMetadata: function defineMetadata(metadataKey, metadataValue, target /* , targetKey */) {
    var targetKey = arguments.length < 4 ? undefined : toMetadataKey(arguments[3]);
    ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 5965:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var ReflectMetadataModule = __webpack_require__(493);
var anObject = __webpack_require__(9644);

var toMetadataKey = ReflectMetadataModule.toKey;
var getOrCreateMetadataMap = ReflectMetadataModule.getMap;
var store = ReflectMetadataModule.store;

// `Reflect.deleteMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
    if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
    if (metadataMap.size) return true;
    var targetMetadata = store.get(target);
    targetMetadata['delete'](targetKey);
    return !!targetMetadata.size || store['delete'](target);
  }
});


/***/ }),

/***/ 6004:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var ReflectMetadataModule = __webpack_require__(493);
var anObject = __webpack_require__(9644);
var getPrototypeOf = __webpack_require__(4704);
var $arrayUniqueBy = __webpack_require__(5790);

var arrayUniqueBy = uncurryThis($arrayUniqueBy);
var concat = uncurryThis([].concat);
var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? arrayUniqueBy(concat(oKeys, pKeys)) : pKeys : oKeys;
};

// `Reflect.getMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryMetadataKeys(anObject(target), targetKey);
  }
});


/***/ }),

/***/ 5226:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var ReflectMetadataModule = __webpack_require__(493);
var anObject = __webpack_require__(9644);
var getPrototypeOf = __webpack_require__(4704);

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

// `Reflect.getMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 9423:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var ReflectMetadataModule = __webpack_require__(493);
var anObject = __webpack_require__(9644);

var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadataKeys` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
    var targetKey = arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
    return ordinaryOwnMetadataKeys(anObject(target), targetKey);
  }
});


/***/ }),

/***/ 5662:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var ReflectMetadataModule = __webpack_require__(493);
var anObject = __webpack_require__(9644);

var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.getOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryGetOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 5610:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var ReflectMetadataModule = __webpack_require__(493);
var anObject = __webpack_require__(9644);
var getPrototypeOf = __webpack_require__(4704);

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

// `Reflect.hasMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 7495:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var ReflectMetadataModule = __webpack_require__(493);
var anObject = __webpack_require__(9644);

var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
var toMetadataKey = ReflectMetadataModule.toKey;

// `Reflect.hasOwnMetadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
    var targetKey = arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
    return ordinaryHasOwnMetadata(metadataKey, anObject(target), targetKey);
  }
});


/***/ }),

/***/ 636:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var ReflectMetadataModule = __webpack_require__(493);
var anObject = __webpack_require__(9644);

var toMetadataKey = ReflectMetadataModule.toKey;
var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

// `Reflect.metadata` method
// https://github.com/rbuckton/reflect-metadata
$({ target: 'Reflect', stat: true }, {
  metadata: function metadata(metadataKey, metadataValue) {
    return function decorator(target, key) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetadataKey(key));
    };
  }
});


/***/ }),

/***/ 6130:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var uncurryThis = __webpack_require__(9272);
var toString = __webpack_require__(3021);
var WHITESPACES = __webpack_require__(6182);

var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var NEED_ESCAPING = RegExp('[!"#$%&\'()*+,\\-./:;<=>?@[\\\\\\]^`{|}~' + WHITESPACES + ']', 'g');

// `RegExp.escape` method
// https://github.com/tc39/proposal-regex-escaping
$({ target: 'RegExp', stat: true, forced: true }, {
  escape: function escape(S) {
    var str = toString(S);
    var firstCode = charCodeAt(str, 0);
    // escape first DecimalDigit
    return (firstCode > 47 && firstCode < 58 ? '\\x3' : '') + replace(str, NEED_ESCAPING, '\\$&');
  }
});


/***/ }),

/***/ 7197:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(7545);
var charAt = (__webpack_require__(3313).charAt);
var requireObjectCoercible = __webpack_require__(3175);
var toIntegerOrInfinity = __webpack_require__(9935);
var toString = __webpack_require__(3021);

// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
$({ target: 'String', proto: true, forced: true }, {
  at: function at(index) {
    var S = toString(requireObjectCoercible(this));
    var len = S.length;
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : charAt(S, k);
  }
});


/***/ }),

/***/ 4194:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var createIteratorConstructor = __webpack_require__(8097);
var createIterResultObject = __webpack_require__(1668);
var requireObjectCoercible = __webpack_require__(3175);
var toString = __webpack_require__(3021);
var InternalStateModule = __webpack_require__(2108);
var StringMultibyteModule = __webpack_require__(3313);

var codeAt = StringMultibyteModule.codeAt;
var charAt = StringMultibyteModule.charAt;
var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// TODO: unify with String#@@iterator
var $StringIterator = createIteratorConstructor(function StringIterator(string) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: string,
    index: 0
  });
}, 'String', function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject({ codePoint: codeAt(point, 0), position: index }, false);
});

// `String.prototype.codePoints` method
// https://github.com/tc39/proposal-string-prototype-codepoints
$({ target: 'String', proto: true, forced: true }, {
  codePoints: function codePoints() {
    return new $StringIterator(toString(requireObjectCoercible(this)));
  }
});


/***/ }),

/***/ 949:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(7545);
var cooked = __webpack_require__(4379);

// `String.cooked` method
// https://github.com/tc39/proposal-string-cooked
$({ target: 'String', stat: true, forced: true }, {
  cooked: cooked
});


/***/ }),

/***/ 8470:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var FREEZING = __webpack_require__(7798);
var $ = __webpack_require__(7545);
var shared = __webpack_require__(9065);
var getBuiltIn = __webpack_require__(6024);
var makeBuiltIn = __webpack_require__(5877);
var uncurryThis = __webpack_require__(9272);
var apply = __webpack_require__(2415);
var anObject = __webpack_require__(9644);
var toObject = __webpack_require__(6834);
var isCallable = __webpack_require__(1365);
var lengthOfArrayLike = __webpack_require__(755);
var defineProperty = (__webpack_require__(4116).f);
var createArrayFromList = __webpack_require__(1736);
var cooked = __webpack_require__(4379);
var parse = __webpack_require__(8341);
var whitespaces = __webpack_require__(6182);

var WeakMap = getBuiltIn('WeakMap');
var globalDedentRegistry = shared('GlobalDedentRegistry', new WeakMap());

/* eslint-disable no-self-assign -- prototype methods protection */
globalDedentRegistry.has = globalDedentRegistry.has;
globalDedentRegistry.get = globalDedentRegistry.get;
globalDedentRegistry.set = globalDedentRegistry.set;
/* eslint-enable no-self-assign -- prototype methods protection */

var $Array = Array;
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-freeze -- safe
var freeze = Object.freeze || Object;
// eslint-disable-next-line es/no-object-isfrozen -- safe
var isFrozen = Object.isFrozen;
var min = Math.min;
var charAt = uncurryThis(''.charAt);
var stringSlice = uncurryThis(''.slice);
var split = uncurryThis(''.split);
var exec = uncurryThis(/./.exec);

var NEW_LINE = /([\n\u2028\u2029]|\r\n?)/g;
var LEADING_WHITESPACE = RegExp('^[' + whitespaces + ']*');
var NON_WHITESPACE = RegExp('[^' + whitespaces + ']');
var INVALID_TAG = 'Invalid tag';
var INVALID_OPENING_LINE = 'Invalid opening line';
var INVALID_CLOSING_LINE = 'Invalid closing line';

var dedentTemplateStringsArray = function (template) {
  var rawInput = template.raw;
  // https://github.com/tc39/proposal-string-dedent/issues/75
  if (FREEZING && !isFrozen(rawInput)) throw new $TypeError('Raw template should be frozen');
  if (globalDedentRegistry.has(rawInput)) return globalDedentRegistry.get(rawInput);
  var raw = dedentStringsArray(rawInput);
  var cookedArr = cookStrings(raw);
  defineProperty(cookedArr, 'raw', {
    value: freeze(raw)
  });
  freeze(cookedArr);
  globalDedentRegistry.set(rawInput, cookedArr);
  return cookedArr;
};

var dedentStringsArray = function (template) {
  var t = toObject(template);
  var length = lengthOfArrayLike(t);
  var blocks = $Array(length);
  var dedented = $Array(length);
  var i = 0;
  var lines, common, quasi, k;

  if (!length) throw new $TypeError(INVALID_TAG);

  for (; i < length; i++) {
    var element = t[i];
    if (typeof element == 'string') blocks[i] = split(element, NEW_LINE);
    else throw new $TypeError(INVALID_TAG);
  }

  for (i = 0; i < length; i++) {
    var lastSplit = i + 1 === length;
    lines = blocks[i];
    if (i === 0) {
      if (lines.length === 1 || lines[0].length > 0) {
        throw new $TypeError(INVALID_OPENING_LINE);
      }
      lines[1] = '';
    }
    if (lastSplit) {
      if (lines.length === 1 || exec(NON_WHITESPACE, lines[lines.length - 1])) {
        throw new $TypeError(INVALID_CLOSING_LINE);
      }
      lines[lines.length - 2] = '';
      lines[lines.length - 1] = '';
    }
    for (var j = 2; j < lines.length; j += 2) {
      var text = lines[j];
      var lineContainsTemplateExpression = j + 1 === lines.length && !lastSplit;
      var leading = exec(LEADING_WHITESPACE, text)[0];
      if (!lineContainsTemplateExpression && leading.length === text.length) {
        lines[j] = '';
        continue;
      }
      common = commonLeadingIndentation(leading, common);
    }
  }

  var count = common ? common.length : 0;

  for (i = 0; i < length; i++) {
    lines = blocks[i];
    quasi = lines[0];
    k = 1;
    for (; k < lines.length; k += 2) {
      quasi += lines[k] + stringSlice(lines[k + 1], count);
    }
    dedented[i] = quasi;
  }

  return dedented;
};

var commonLeadingIndentation = function (a, b) {
  if (b === undefined || a === b) return a;
  var i = 0;
  for (var len = min(a.length, b.length); i < len; i++) {
    if (charAt(a, i) !== charAt(b, i)) break;
  }
  return stringSlice(a, 0, i);
};

var cookStrings = function (raw) {
  var i = 0;
  var length = raw.length;
  var result = $Array(length);
  for (; i < length; i++) {
    result[i] = parse(raw[i]);
  } return result;
};

var makeDedentTag = function (tag) {
  return makeBuiltIn(function (template /* , ...substitutions */) {
    var args = createArrayFromList(arguments);
    args[0] = dedentTemplateStringsArray(anObject(template));
    return apply(tag, this, args);
  }, '');
};

var cookedDedentTag = makeDedentTag(cooked);

// `String.dedent` method
// https://github.com/tc39/proposal-string-dedent
$({ target: 'String', stat: true, forced: true }, {
  dedent: function dedent(templateOrFn /* , ...substitutions */) {
    anObject(templateOrFn);
    if (isCallable(templateOrFn)) return makeDedentTag(templateOrFn);
    return apply(cookedDedentTag, this, arguments);
  }
});


/***/ }),

/***/ 2711:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(116);


/***/ }),

/***/ 6617:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(9607);


/***/ }),

/***/ 2864:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(8354);


/***/ }),

/***/ 1740:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
__webpack_require__(3533);


/***/ }),

/***/ 2837:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2262);
var DOMIterables = __webpack_require__(7470);
var DOMTokenListPrototype = __webpack_require__(1060);
var ArrayIteratorMethods = __webpack_require__(8327);
var createNonEnumerableProperty = __webpack_require__(3797);
var wellKnownSymbol = __webpack_require__(7088);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ 131:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(2208);

module.exports = parent;


/***/ }),

/***/ 7347:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(6264);

module.exports = parent;


/***/ }),

/***/ 3:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(196);
__webpack_require__(2837);

module.exports = parent;


/***/ }),

/***/ 4614:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(9802);

module.exports = parent;


/***/ }),

/***/ 5400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(1501);

module.exports = parent;


/***/ }),

/***/ 7943:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var parent = __webpack_require__(5018);

module.exports = parent;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.33.1/node_modules/core-js/features/global-this.js
var global_this = __webpack_require__(6916);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.33.1/node_modules/core-js/features/array/index.js
var array = __webpack_require__(7244);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.33.1/node_modules/core-js/features/object/index.js
var object = __webpack_require__(9206);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.33.1/node_modules/core-js/features/string/index.js
var string = __webpack_require__(3411);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.33.1/node_modules/core-js/features/regexp/index.js
var regexp = __webpack_require__(9988);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.33.1/node_modules/core-js/features/reflect/index.js
var reflect = __webpack_require__(825);
;// CONCATENATED MODULE: ./src/polyfills.ts






// 引入 promise 的 polyfills 会导致 waterfox classic 出错，按需引入
;// CONCATENATED MODULE: ./src/user-script/polyfills.ts

}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/token.class.js
/**
 * Used to create unique typed service identifier.
 * Useful when service has only interface, but don't have a class.
 */
var Token = /** @class */ (function () {
    /**
     * @param name Token name, optional and only used for debugging purposes.
     */
    function Token(name) {
        this.name = name;
    }
    return Token;
}());

//# sourceMappingURL=token.class.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/error/service-not-found.error.js
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Thrown when requested service was not found.
 */
var ServiceNotFoundError = /** @class */ (function (_super) {
    __extends(ServiceNotFoundError, _super);
    function ServiceNotFoundError(identifier) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.name = 'ServiceNotFoundError';
        /** Normalized identifier name used in the error message. */
        _this.normalizedIdentifier = '<UNKNOWN_IDENTIFIER>';
        if (typeof identifier === 'string') {
            _this.normalizedIdentifier = identifier;
        }
        else if (identifier instanceof Token) {
            _this.normalizedIdentifier = "Token<" + (identifier.name || 'UNSET_NAME') + ">";
        }
        else if (identifier && (identifier.name || ((_a = identifier.prototype) === null || _a === void 0 ? void 0 : _a.name))) {
            _this.normalizedIdentifier =
                "MaybeConstructable<" + identifier.name + ">" ||
                    0;
        }
        return _this;
    }
    Object.defineProperty(ServiceNotFoundError.prototype, "message", {
        get: function () {
            return ("Service with \"" + this.normalizedIdentifier + "\" identifier was not found in the container. " +
                "Register it before usage via explicitly calling the \"Container.set\" function or using the \"@Service()\" decorator.");
        },
        enumerable: false,
        configurable: true
    });
    return ServiceNotFoundError;
}(Error));

//# sourceMappingURL=service-not-found.error.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/error/cannot-instantiate-value.error.js
var cannot_instantiate_value_error_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Thrown when DI cannot inject value into property decorated by @Inject decorator.
 */
var CannotInstantiateValueError = /** @class */ (function (_super) {
    cannot_instantiate_value_error_extends(CannotInstantiateValueError, _super);
    function CannotInstantiateValueError(identifier) {
        var _a, _b;
        var _this = _super.call(this) || this;
        _this.name = 'CannotInstantiateValueError';
        /** Normalized identifier name used in the error message. */
        _this.normalizedIdentifier = '<UNKNOWN_IDENTIFIER>';
        // TODO: Extract this to a helper function and share between this and NotFoundError.
        if (typeof identifier === 'string') {
            _this.normalizedIdentifier = identifier;
        }
        else if (identifier instanceof Token) {
            _this.normalizedIdentifier = "Token<" + (identifier.name || 'UNSET_NAME') + ">";
        }
        else if (identifier && (identifier.name || ((_a = identifier.prototype) === null || _a === void 0 ? void 0 : _a.name))) {
            _this.normalizedIdentifier =
                "MaybeConstructable<" + identifier.name + ">" ||
                    0;
        }
        return _this;
    }
    Object.defineProperty(CannotInstantiateValueError.prototype, "message", {
        get: function () {
            return ("Cannot instantiate the requested value for the \"" + this.normalizedIdentifier + "\" identifier. " +
                "The related metadata doesn't contain a factory or a type to instantiate.");
        },
        enumerable: false,
        configurable: true
    });
    return CannotInstantiateValueError;
}(Error));

//# sourceMappingURL=cannot-instantiate-value.error.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/empty.const.js
var EMPTY_VALUE = Symbol('EMPTY_VALUE');
//# sourceMappingURL=empty.const.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/container-instance.class.js
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





/**
 * TypeDI can have multiple containers.
 * One container is ContainerInstance.
 */
var ContainerInstance = /** @class */ (function () {
    function ContainerInstance(id) {
        /** All registered services in the container. */
        this.services = [];
        this.id = id;
    }
    ContainerInstance.prototype.has = function (identifier) {
        return !!this.findService(identifier);
    };
    ContainerInstance.prototype.get = function (identifier) {
        var globalContainer = Container.of(undefined);
        var globalService = globalContainer.findService(identifier);
        var scopedService = this.findService(identifier);
        if (globalService && globalService.global === true)
            return this.getServiceValue(globalService);
        if (scopedService)
            return this.getServiceValue(scopedService);
        /** If it's the first time requested in the child container we load it from parent and set it. */
        if (globalService && this !== globalContainer) {
            var clonedService = __assign({}, globalService);
            clonedService.value = EMPTY_VALUE;
            /**
             * We need to immediately set the empty value from the root container
             * to prevent infinite lookup in cyclic dependencies.
             */
            this.set(clonedService);
            var value = this.getServiceValue(clonedService);
            this.set(__assign(__assign({}, clonedService), { value: value }));
            return value;
        }
        if (globalService)
            return this.getServiceValue(globalService);
        throw new ServiceNotFoundError(identifier);
    };
    ContainerInstance.prototype.getMany = function (identifier) {
        var _this = this;
        return this.findAllServices(identifier).map(function (service) { return _this.getServiceValue(service); });
    };
    ContainerInstance.prototype.set = function (identifierOrServiceMetadata, value) {
        var _this = this;
        if (identifierOrServiceMetadata instanceof Array) {
            identifierOrServiceMetadata.forEach(function (data) { return _this.set(data); });
            return this;
        }
        if (typeof identifierOrServiceMetadata === 'string' || identifierOrServiceMetadata instanceof Token) {
            return this.set({
                id: identifierOrServiceMetadata,
                type: null,
                value: value,
                factory: undefined,
                global: false,
                multiple: false,
                eager: false,
                transient: false,
            });
        }
        if (typeof identifierOrServiceMetadata === 'function') {
            return this.set({
                id: identifierOrServiceMetadata,
                // TODO: remove explicit casting
                type: identifierOrServiceMetadata,
                value: value,
                factory: undefined,
                global: false,
                multiple: false,
                eager: false,
                transient: false,
            });
        }
        var newService = __assign({ id: new Token('UNREACHABLE'), type: null, factory: undefined, value: EMPTY_VALUE, global: false, multiple: false, eager: false, transient: false }, identifierOrServiceMetadata);
        var service = this.findService(newService.id);
        if (service && service.multiple !== true) {
            Object.assign(service, newService);
        }
        else {
            this.services.push(newService);
        }
        if (newService.eager) {
            this.get(newService.id);
        }
        return this;
    };
    /**
     * Removes services with a given service identifiers.
     */
    ContainerInstance.prototype.remove = function (identifierOrIdentifierArray) {
        var _this = this;
        if (Array.isArray(identifierOrIdentifierArray)) {
            identifierOrIdentifierArray.forEach(function (id) { return _this.remove(id); });
        }
        else {
            this.services = this.services.filter(function (service) {
                if (service.id === identifierOrIdentifierArray) {
                    _this.destroyServiceInstance(service);
                    return false;
                }
                return true;
            });
        }
        return this;
    };
    /**
     * Completely resets the container by removing all previously registered services from it.
     */
    ContainerInstance.prototype.reset = function (options) {
        var _this = this;
        if (options === void 0) { options = { strategy: 'resetValue' }; }
        switch (options.strategy) {
            case 'resetValue':
                this.services.forEach(function (service) { return _this.destroyServiceInstance(service); });
                break;
            case 'resetServices':
                this.services.forEach(function (service) { return _this.destroyServiceInstance(service); });
                this.services = [];
                break;
            default:
                throw new Error('Received invalid reset strategy.');
        }
        return this;
    };
    /**
     * Returns all services registered with the given identifier.
     */
    ContainerInstance.prototype.findAllServices = function (identifier) {
        return this.services.filter(function (service) { return service.id === identifier; });
    };
    /**
     * Finds registered service in the with a given service identifier.
     */
    ContainerInstance.prototype.findService = function (identifier) {
        return this.services.find(function (service) { return service.id === identifier; });
    };
    /**
     * Gets the value belonging to `serviceMetadata.id`.
     *
     * - if `serviceMetadata.value` is already set it is immediately returned
     * - otherwise the requested type is resolved to the value saved to `serviceMetadata.value` and returned
     */
    ContainerInstance.prototype.getServiceValue = function (serviceMetadata) {
        var _a;
        var value = EMPTY_VALUE;
        /**
         * If the service value has been set to anything prior to this call we return that value.
         * NOTE: This part builds on the assumption that transient dependencies has no value set ever.
         */
        if (serviceMetadata.value !== EMPTY_VALUE) {
            return serviceMetadata.value;
        }
        /** If both factory and type is missing, we cannot resolve the requested ID. */
        if (!serviceMetadata.factory && !serviceMetadata.type) {
            throw new CannotInstantiateValueError(serviceMetadata.id);
        }
        /**
         * If a factory is defined it takes priority over creating an instance via `new`.
         * The return value of the factory is not checked, we believe by design that the user knows what he/she is doing.
         */
        if (serviceMetadata.factory) {
            /**
             * If we received the factory in the [Constructable<Factory>, "functionName"] format, we need to create the
             * factory first and then call the specified function on it.
             */
            if (serviceMetadata.factory instanceof Array) {
                var factoryInstance = void 0;
                try {
                    /** Try to get the factory from TypeDI first, if failed, fall back to simply initiating the class. */
                    factoryInstance = this.get(serviceMetadata.factory[0]);
                }
                catch (error) {
                    if (error instanceof ServiceNotFoundError) {
                        factoryInstance = new serviceMetadata.factory[0]();
                    }
                    else {
                        throw error;
                    }
                }
                value = factoryInstance[serviceMetadata.factory[1]](this, serviceMetadata.id);
            }
            else {
                /** If only a simple function was provided we simply call it. */
                value = serviceMetadata.factory(this, serviceMetadata.id);
            }
        }
        /**
         * If no factory was provided and only then, we create the instance from the type if it was set.
         */
        if (!serviceMetadata.factory && serviceMetadata.type) {
            var constructableTargetType = serviceMetadata.type;
            // setup constructor parameters for a newly initialized service
            var paramTypes = ((_a = Reflect) === null || _a === void 0 ? void 0 : _a.getMetadata('design:paramtypes', constructableTargetType)) || [];
            var params = this.initializeParams(constructableTargetType, paramTypes);
            // "extra feature" - always pass container instance as the last argument to the service function
            // this allows us to support javascript where we don't have decorators and emitted metadata about dependencies
            // need to be injected, and user can use provided container to get instances he needs
            params.push(this);
            value = new (constructableTargetType.bind.apply(constructableTargetType, __spreadArrays([void 0], params)))();
            // TODO: Calling this here, leads to infinite loop, because @Inject decorator registerds a handler
            // TODO: which calls Container.get, which will check if the requested type has a value set and if not
            // TODO: it will start the instantiation process over. So this is currently called outside of the if branch
            // TODO: after the current value has been assigned to the serviceMetadata.
            // this.applyPropertyHandlers(constructableTargetType, value as Constructable<unknown>);
        }
        /** If this is not a transient service, and we resolved something, then we set it as the value. */
        if (!serviceMetadata.transient && value !== EMPTY_VALUE) {
            serviceMetadata.value = value;
        }
        if (value === EMPTY_VALUE) {
            /** This branch should never execute, but better to be safe than sorry. */
            throw new CannotInstantiateValueError(serviceMetadata.id);
        }
        if (serviceMetadata.type) {
            this.applyPropertyHandlers(serviceMetadata.type, value);
        }
        return value;
    };
    /**
     * Initializes all parameter types for a given target service class.
     */
    ContainerInstance.prototype.initializeParams = function (target, paramTypes) {
        var _this = this;
        return paramTypes.map(function (paramType, index) {
            var paramHandler = Container.handlers.find(function (handler) {
                /**
                 * @Inject()-ed values are stored as parameter handlers and they reference their target
                 * when created. So when a class is extended the @Inject()-ed values are not inherited
                 * because the handler still points to the old object only.
                 *
                 * As a quick fix a single level parent lookup is added via `Object.getPrototypeOf(target)`,
                 * however this should be updated to a more robust solution.
                 *
                 * TODO: Add proper inheritance handling: either copy the handlers when a class is registered what
                 * TODO: has it's parent already registered as dependency or make the lookup search up to the base Object.
                 */
                return ((handler.object === target || handler.object === Object.getPrototypeOf(target)) && handler.index === index);
            });
            if (paramHandler)
                return paramHandler.value(_this);
            if (paramType && paramType.name && !_this.isPrimitiveParamType(paramType.name)) {
                return _this.get(paramType);
            }
            return undefined;
        });
    };
    /**
     * Checks if given parameter type is primitive type or not.
     */
    ContainerInstance.prototype.isPrimitiveParamType = function (paramTypeName) {
        return ['string', 'boolean', 'number', 'object'].includes(paramTypeName.toLowerCase());
    };
    /**
     * Applies all registered handlers on a given target class.
     */
    ContainerInstance.prototype.applyPropertyHandlers = function (target, instance) {
        var _this = this;
        Container.handlers.forEach(function (handler) {
            if (typeof handler.index === 'number')
                return;
            if (handler.object.constructor !== target && !(target.prototype instanceof handler.object.constructor))
                return;
            if (handler.propertyName) {
                instance[handler.propertyName] = handler.value(_this);
            }
        });
    };
    /**
     * Checks if the given service metadata contains a destroyable service instance and destroys it in place. If the service
     * contains a callable function named `destroy` it is called but not awaited and the return value is ignored..
     *
     * @param serviceMetadata the service metadata containing the instance to destroy
     * @param force when true the service will be always destroyed even if it's cannot be re-created
     */
    ContainerInstance.prototype.destroyServiceInstance = function (serviceMetadata, force) {
        if (force === void 0) { force = false; }
        /** We reset value only if we can re-create it (aka type or factory exists). */
        var shouldResetValue = force || !!serviceMetadata.type || !!serviceMetadata.factory;
        if (shouldResetValue) {
            /** If we wound a function named destroy we call it without any params. */
            if (typeof (serviceMetadata === null || serviceMetadata === void 0 ? void 0 : serviceMetadata.value)['destroy'] === 'function') {
                try {
                    serviceMetadata.value.destroy();
                }
                catch (error) {
                    /** We simply ignore the errors from the destroy function. */
                }
            }
            serviceMetadata.value = EMPTY_VALUE;
        }
    };
    return ContainerInstance;
}());

//# sourceMappingURL=container-instance.class.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/container.class.js

/**
 * Service container.
 */
var Container = /** @class */ (function () {
    function Container() {
    }
    /**
     * Gets a separate container instance for the given instance id.
     */
    Container.of = function (containerId) {
        if (containerId === void 0) { containerId = 'default'; }
        if (containerId === 'default')
            return this.globalInstance;
        var container = this.instances.find(function (instance) { return instance.id === containerId; });
        if (!container) {
            container = new ContainerInstance(containerId);
            this.instances.push(container);
            // TODO: Why we are not reseting here? Let's reset here. (I have added the commented code.)
            // container.reset();
        }
        return container;
    };
    Container.has = function (identifier) {
        return this.globalInstance.has(identifier);
    };
    Container.get = function (identifier) {
        return this.globalInstance.get(identifier);
    };
    Container.getMany = function (id) {
        return this.globalInstance.getMany(id);
    };
    Container.set = function (identifierOrServiceMetadata, value) {
        this.globalInstance.set(identifierOrServiceMetadata, value);
        return this;
    };
    /**
     * Removes services with a given service identifiers.
     */
    Container.remove = function (identifierOrIdentifierArray) {
        this.globalInstance.remove(identifierOrIdentifierArray);
        return this;
    };
    /**
     * Completely resets the container by removing all previously registered services and handlers from it.
     */
    Container.reset = function (containerId) {
        if (containerId === void 0) { containerId = 'default'; }
        if (containerId == 'default') {
            this.globalInstance.reset();
            this.instances.forEach(function (instance) { return instance.reset(); });
        }
        else {
            var instance = this.instances.find(function (instance) { return instance.id === containerId; });
            if (instance) {
                instance.reset();
                this.instances.splice(this.instances.indexOf(instance), 1);
            }
        }
        return this;
    };
    /**
     * Registers a new handler.
     */
    Container.registerHandler = function (handler) {
        this.handlers.push(handler);
        return this;
    };
    /**
     * Helper method that imports given services.
     */
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    Container.import = function (services) {
        return this;
    };
    /**
     * All registered handlers. The @Inject() decorator uses handlers internally to mark a property for injection.
     **/
    Container.handlers = [];
    /**  Global container instance. */
    Container.globalInstance = new ContainerInstance('default');
    /** Other containers created using Container.of method. */
    Container.instances = [];
    return Container;
}());

//# sourceMappingURL=container.class.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/typedi@0.10.0/node_modules/typedi/esm5/decorators/service.decorator.js



function Service(optionsOrServiceIdentifier) {
    return function (targetConstructor) {
        var serviceMetadata = {
            id: targetConstructor,
            // TODO: Let's investigate why we receive Function type instead of a constructable.
            type: targetConstructor,
            factory: undefined,
            multiple: false,
            global: false,
            eager: false,
            transient: false,
            value: EMPTY_VALUE,
        };
        if (optionsOrServiceIdentifier instanceof Token || typeof optionsOrServiceIdentifier === 'string') {
            /** We received a Token or string ID. */
            serviceMetadata.id = optionsOrServiceIdentifier;
        }
        else if (optionsOrServiceIdentifier) {
            /** We received a ServiceOptions object. */
            serviceMetadata.id = optionsOrServiceIdentifier.id || targetConstructor;
            serviceMetadata.factory = optionsOrServiceIdentifier.factory || undefined;
            serviceMetadata.multiple = optionsOrServiceIdentifier.multiple || false;
            serviceMetadata.global = optionsOrServiceIdentifier.global || false;
            serviceMetadata.eager = optionsOrServiceIdentifier.eager || false;
            serviceMetadata.transient = optionsOrServiceIdentifier.transient || false;
        }
        Container.set(serviceMetadata);
    };
}
//# sourceMappingURL=service.decorator.js.map
;// CONCATENATED MODULE: ./src/services/index.ts


var services_Container = Container.of('default');
;// CONCATENATED MODULE: ./src/utils/hosts.ts
function isDomain(hostname, domain) {
  return hostname === domain || hostname.endsWith(".".concat(domain));
}
function isEh(hostname) {
  if (hostname === 'forums.e-hentai.org') return false;
  return isDomain(hostname, EH);
}
function isUnion(hostname) {
  return isDomain(hostname, EXU);
}
function isEhGt(hostname) {
  return isDomain(hostname, EHGT);
}
function isEx(hostname) {
  return isDomain(hostname, EX) || isUnion(hostname);
}
function isHathNetwork(hostname) {
  return isDomain(hostname, HATH);
}
function isValidHost(hostname) {
  if (!hostname) return false;
  return isEh(hostname) || isEx(hostname) || isHathNetwork(hostname);
}
var EX = 'exhentai.org';
var EH = 'e-hentai.org';
var EXU = 'exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion';
var EHGT = 'ehgt.org';
var HATH = 'hath.network';
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/tslib@2.6.2/node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function tslib_es6_extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
  tslib_es6_assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return tslib_es6_assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function tslib_es6_spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ var tslib_es6 = ({
  __extends: tslib_es6_extends,
  __assign: tslib_es6_assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays: tslib_es6_spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});

;// CONCATENATED MODULE: ./src/services/logger.ts




var Logger = /*#__PURE__*/_createClass(function Logger() {
  var _this = this;
  _classCallCheck(this, Logger);
  this.prefix =  true ? '💉 脚本 ' : 0;
  this.log = console.log.bind(console, this.prefix);
  this.info = console.info.bind(console, this.prefix);
  this.warn = console.warn.bind(console, this.prefix);
  this.error = console.error.bind(console, this.prefix);
  this.debug = console.debug.bind(console, this.prefix);
  this.time = function (label) {
    var pLabel = "".concat(_this.prefix, " ").concat(label);
    console.time(pLabel);
    return {
      label: label,
      log: (console.timeLog || console.log).bind(console, pLabel),
      end: console.timeEnd.bind(console, pLabel)
    };
  };
});
Logger = __decorate([Service()], Logger);

;// CONCATENATED MODULE: ./src/utils/dom.ts


/** 网页加载后调用 */
function ready(callback) {
  var onError = function onError(ex) {
    var logger = Container.get(Logger);
    logger.error('执行文档加载回调失败', ex);
  };
  var f = function f() {
    try {
      Promise.resolve(callback())["catch"](onError);
    } catch (ex) {
      onError(ex);
    }
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', f, {
      passive: true,
      once: true
    });
  } else {
    setTimeout(f);
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4860);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/idb-keyval@6.2.1/node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
        // @ts-ignore - file size hacks
        request.oncomplete = request.onsuccess = () => resolve(request.result);
        // @ts-ignore - file size hacks
        request.onabort = request.onerror = () => reject(request.error);
    });
}
function createStore(dbName, storeName) {
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    const dbp = promisifyRequest(request);
    return (txMode, callback) => dbp.then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
    if (!defaultGetStoreFunc) {
        defaultGetStoreFunc = createStore('keyval-store', 'keyval');
    }
    return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function dist_get(key, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function dist_set(key, value, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.put(value, key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Set multiple values at once. This is faster than calling set() multiple times.
 * It's also atomic – if one of the pairs can't be added, none will be added.
 *
 * @param entries Array of entries, where each entry is an array of `[key, value]`.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function setMany(entries, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        entries.forEach((entry) => store.put(entry[1], entry[0]));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Get multiple values by their keys
 *
 * @param keys
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function getMany(keys, customStore = defaultGetStore()) {
    return customStore('readonly', (store) => Promise.all(keys.map((key) => promisifyRequest(store.get(key)))));
}
/**
 * Update a value. This lets you see the old value and update it as an atomic operation.
 *
 * @param key
 * @param updater A callback that takes the old value and returns a new value.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function update(key, updater, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => 
    // Need to create the promise manually.
    // If I try to chain promises, the transaction closes in browsers
    // that use a promise polyfill (IE10/11).
    new Promise((resolve, reject) => {
        store.get(key).onsuccess = function () {
            try {
                store.put(updater(this.result), key);
                resolve(promisifyRequest(store.transaction));
            }
            catch (err) {
                reject(err);
            }
        };
    }));
}
/**
 * Delete a particular key from the store.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function del(key, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.delete(key);
        return promisifyRequest(store.transaction);
    });
}
/**
 * Delete multiple keys at once.
 *
 * @param keys List of keys to delete.
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function delMany(keys, customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        keys.forEach((key) => store.delete(key));
        return promisifyRequest(store.transaction);
    });
}
/**
 * Clear all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function clear(customStore = defaultGetStore()) {
    return customStore('readwrite', (store) => {
        store.clear();
        return promisifyRequest(store.transaction);
    });
}
function eachCursor(store, callback) {
    store.openCursor().onsuccess = function () {
        if (!this.result)
            return;
        callback(this.result);
        this.result.continue();
    };
    return promisifyRequest(store.transaction);
}
/**
 * Get all keys in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function dist_keys(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAllKeys) {
            return promisifyRequest(store.getAllKeys());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
}
/**
 * Get all values in the store.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function values(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        if (store.getAll) {
            return promisifyRequest(store.getAll());
        }
        const items = [];
        return eachCursor(store, (cursor) => items.push(cursor.value)).then(() => items);
    });
}
/**
 * Get all entries in the store. Each entry is an array of `[key, value]`.
 *
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */
function entries(customStore = defaultGetStore()) {
    return customStore('readonly', (store) => {
        // Fast path for modern browsers
        // (although, hopefully we'll get a simpler path some day)
        if (store.getAll && store.getAllKeys) {
            return Promise.all([
                promisifyRequest(store.getAllKeys()),
                promisifyRequest(store.getAll()),
            ]).then(([keys, values]) => keys.map((key, i) => [key, values[i]]));
        }
        const items = [];
        return customStore('readonly', (store) => eachCursor(store, (cursor) => items.push([cursor.key, cursor.value])).then(() => items));
    });
}



;// CONCATENATED MODULE: ./src/providers/user-script/storage.ts






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var syncMark = '__sync__';
var AsyncPolyfill = /*#__PURE__*/function () {
  function AsyncPolyfill() {
    _classCallCheck(this, AsyncPolyfill);
    this.listenerId = 1;
    this.listeners = new Map();
    this.store = createStore('EhSyringe', 'keyval');
  }
  _createClass(AsyncPolyfill, [{
    key: "onAllStorageChange",
    value: function () {
      var _onAllStorageChange = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var values, _iterator, _step, name, _iterator2, _step2, _step2$value, _name, listener;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              values = new Map();
              _iterator = _createForOfIteratorHelper(this.listeners.values());
              _context.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 15;
                break;
              }
              name = _step.value.name;
              if (values.has(name)) {
                _context.next = 13;
                break;
              }
              _context.t0 = values;
              _context.t1 = name;
              _context.next = 11;
              return this.get(name);
            case 11:
              _context.t2 = _context.sent;
              _context.t0.set.call(_context.t0, _context.t1, _context.t2);
            case 13:
              _context.next = 4;
              break;
            case 15:
              _context.next = 20;
              break;
            case 17:
              _context.prev = 17;
              _context.t3 = _context["catch"](2);
              _iterator.e(_context.t3);
            case 20:
              _context.prev = 20;
              _iterator.f();
              return _context.finish(20);
            case 23:
              _iterator2 = _createForOfIteratorHelper(this.listeners.values());
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _step2$value = _step2.value, _name = _step2$value.name, listener = _step2$value.listener;
                  listener(_name, undefined, values.get(_name), false);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 17, 20, 23]]);
      }));
      function onAllStorageChange() {
        return _onAllStorageChange.apply(this, arguments);
      }
      return onAllStorageChange;
    }()
  }, {
    key: "onStorageChange",
    value: function onStorageChange(key, oldValue, value) {
      if (!key) {
        void this.onAllStorageChange();
        return;
      }
      var _iterator3 = _createForOfIteratorHelper(this.listeners.values()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _step3.value,
            name = _step3$value.name,
            listener = _step3$value.listener;
          if (name !== key) continue;
          listener(name, oldValue, value, false);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      return dist_get(key, this.store);
    }
  }, {
    key: "set",
    value: function () {
      var _set2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(key, value) {
        var oldValue;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.get(key);
            case 2:
              oldValue = _context2.sent;
              _context2.next = 5;
              return dist_set(key, value, this.store);
            case 5:
              this.onStorageChange(key, oldValue, value);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function set(_x, _x2) {
        return _set2.apply(this, arguments);
      }
      return set;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3(key) {
        var oldValue;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.get(key);
            case 2:
              oldValue = _context3.sent;
              _context3.next = 5;
              return del(key, this.store);
            case 5:
              this.onStorageChange(key, oldValue, undefined);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _delete(_x3) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }, {
    key: "keys",
    value: function () {
      var _keys2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4() {
        var ks;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dist_keys(this.store);
            case 2:
              ks = _context4.sent;
              return _context4.abrupt("return", ks.filter(function (k) {
                return typeof k == 'string';
              }));
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function keys() {
        return _keys2.apply(this, arguments);
      }
      return keys;
    }()
  }, {
    key: "on",
    value: function on(key, listener) {
      var id = this.listenerId++;
      this.listeners.set(id, {
        name: key,
        listener: listener
      });
      return id;
    }
  }, {
    key: "off",
    value: function off(key, id) {
      this.listeners["delete"](id);
    }
  }]);
  return AsyncPolyfill;
}();
var GmAsyncStorage = /*#__PURE__*/function () {
  function GmAsyncStorage() {
    _classCallCheck(this, GmAsyncStorage);
  }
  _createClass(GmAsyncStorage, [{
    key: "get",
    value: function get(key) {
      return Promise.resolve(GM_getValue(key));
    }
  }, {
    key: "set",
    value: function set(key, value) {
      return Promise.resolve(GM_setValue(key, value));
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return Promise.resolve(GM_deleteValue(key));
    }
  }, {
    key: "keys",
    value: function keys() {
      return Promise.resolve(GM_listValues().filter(function (k) {
        return !k.startsWith(syncMark);
      }));
    }
  }, {
    key: "on",
    value: function on(key, listener) {
      return GM_addValueChangeListener(key, listener);
    }
  }, {
    key: "off",
    value: function off(key, id) {
      GM_removeValueChangeListener(id);
    }
  }]);
  return GmAsyncStorage;
}();
var GM_ALL_DEFINED = typeof GM_getValue == 'function' && typeof GM_setValue == 'function' && typeof GM_deleteValue == 'function' && typeof GM_listValues == 'function' && typeof GM_addValueChangeListener == 'function' && typeof GM_removeValueChangeListener == 'function';
var storage = GM_ALL_DEFINED ? new GmAsyncStorage() : new AsyncPolyfill();
var SyncStorageBase = /*#__PURE__*/function () {
  function SyncStorageBase() {
    _classCallCheck(this, SyncStorageBase);
  }
  _createClass(SyncStorageBase, [{
    key: "keys",
    value: function keys() {
      var names = [];
      var prefix = this.KEY_PREFIX;
      var _iterator4 = _createForOfIteratorHelper(this.list()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var key = _step4.value;
          if (!key) break;
          if (key.startsWith(prefix)) {
            names.push(key.slice(prefix.length));
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return names;
    }
  }, {
    key: "key",
    value: function key(_key) {
      return this.KEY_PREFIX + _key;
    }
  }]);
  return SyncStorageBase;
}();
var SyncPolyfill = /*#__PURE__*/function (_SyncStorageBase) {
  _inherits(SyncPolyfill, _SyncStorageBase);
  var _super = _createSuper(SyncPolyfill);
  function SyncPolyfill() {
    var _this;
    _classCallCheck(this, SyncPolyfill);
    _this = _super.apply(this, arguments);
    _this.KEY_PREFIX = 'EH_SYNC_POLYFILL_';
    return _this;
  }
  _createClass(SyncPolyfill, [{
    key: "parse",
    value: function parse(value, defaultValue) {
      if (!value) return defaultValue;
      try {
        return JSON.parse(value);
      } catch (_unused) {
        return defaultValue;
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      var value = localStorage.getItem(this.key(key));
      return this.parse(value);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (value === undefined) {
        return this["delete"](key);
      }
      var jValue = JSON.stringify(value);
      localStorage.setItem(this.key(key), jValue);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      localStorage.removeItem(this.key(key));
    }
  }, {
    key: "list",
    value: /*#__PURE__*/regenerator_default().mark(function list() {
      var i, key;
      return regenerator_default().wrap(function list$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < localStorage.length)) {
              _context5.next = 9;
              break;
            }
            key = localStorage.key(i);
            if (!key) {
              _context5.next = 6;
              break;
            }
            _context5.next = 6;
            return key;
          case 6:
            i++;
            _context5.next = 1;
            break;
          case 9:
          case "end":
            return _context5.stop();
        }
      }, list);
    })
  }]);
  return SyncPolyfill;
}(SyncStorageBase);
var GMSyncStorage = /*#__PURE__*/function (_SyncStorageBase2) {
  _inherits(GMSyncStorage, _SyncStorageBase2);
  var _super2 = _createSuper(GMSyncStorage);
  function GMSyncStorage() {
    var _this2;
    _classCallCheck(this, GMSyncStorage);
    _this2 = _super2.apply(this, arguments);
    _this2.KEY_PREFIX = syncMark;
    return _this2;
  }
  _createClass(GMSyncStorage, [{
    key: "get",
    value: function get(key) {
      return GM_getValue(this.key(key));
    }
  }, {
    key: "set",
    value: function set(key, value) {
      GM_setValue(this.key(key), value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      GM_deleteValue(this.key(key));
    }
  }, {
    key: "list",
    value: function list() {
      return GM_listValues();
    }
  }]);
  return GMSyncStorage;
}(SyncStorageBase);
var GM_ALL_SYNC_DEFINED = typeof GM_getValue == 'function' && typeof GM_setValue == 'function' && typeof GM_deleteValue == 'function' && typeof GM_listValues == 'function';
var syncStorage = GM_ALL_SYNC_DEFINED ? new GMSyncStorage() : new SyncPolyfill();
;// CONCATENATED MODULE: ./src/services/storage.ts




function storage_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = storage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function storage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return storage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return storage_arrayLikeToArray(o, minLen); }
function storage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var ImageLevel;
(function (ImageLevel) {
  ImageLevel[ImageLevel["hide"] = 0] = "hide";
  ImageLevel[ImageLevel["nonH"] = 1] = "nonH";
  ImageLevel[ImageLevel["r18"] = 2] = "r18";
  ImageLevel[ImageLevel["r18g"] = 3] = "r18g";
})(ImageLevel || (ImageLevel = {}));
var Storage = /*#__PURE__*/function () {
  function Storage(logger) {
    var _this = this;
    _classCallCheck(this, Storage);
    this.logger = logger;
    this.defaults = {
      extensionCheck: 0,
      config: {
        translateUi: true,
        translateTag: true,
        translateTimestamp: true,
        showIntroduce: true,
        showIcon: true,
        introduceImageLevel: ImageLevel.r18g,
        autoUpdate: true,
        tagTip: true
      },
      database: undefined,
      databaseInfo: undefined,
      release: undefined,
      origin: 'https://e-hentai.org'
    };
    Object.defineProperty(globalThis, 'storage', {
      value: function value() {
        _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
          var keys, _iterator, _step, key;
          return regenerator_default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.keys();
              case 2:
                keys = _context.sent;
                _iterator = storage_createForOfIteratorHelper(keys);
                _context.prev = 4;
                _iterator.s();
              case 6:
                if ((_step = _iterator.n()).done) {
                  _context.next = 16;
                  break;
                }
                key = _step.value;
                _context.t0 = console;
                _context.t1 = key;
                _context.next = 12;
                return _this.get(key);
              case 12:
                _context.t2 = _context.sent;
                _context.t0.log.call(_context.t0, _context.t1, _context.t2);
              case 14:
                _context.next = 6;
                break;
              case 16:
                _context.next = 21;
                break;
              case 18:
                _context.prev = 18;
                _context.t3 = _context["catch"](4);
                _iterator.e(_context.t3);
              case 21:
                _context.prev = 21;
                _iterator.f();
                return _context.finish(21);
              case 24:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[4, 18, 21, 24]]);
        }))()["catch"](logger.error);
      }
    });
    this.migrate()["catch"](logger.error);
  }
  _createClass(Storage, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(key) {
        var value;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return storage.get(key);
            case 2:
              value = _context2.sent;
              if (!(value == null)) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", this.defaults[key]);
            case 5:
              return _context2.abrupt("return", value);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function get(_x) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "set",
    value: function () {
      var _set = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3(key, value) {
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(value == null)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return", this["delete"](key));
            case 2:
              return _context3.abrupt("return", storage.set(key, value));
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function set(_x2, _x3) {
        return _set.apply(this, arguments);
      }
      return set;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4(key) {
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return storage["delete"](key);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }, {
    key: "keys",
    value: function () {
      var _keys = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee5() {
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return storage.keys();
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function keys() {
        return _keys.apply(this, arguments);
      }
      return keys;
    }()
  }, {
    key: "on",
    value: function on(key, listener) {
      return storage.on(key, listener);
    }
  }, {
    key: "off",
    value: function off(key, listener) {
      return storage.off(key, listener);
    }
  }, {
    key: "migrate",
    value: function () {
      var _migrate = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee6() {
        var keys, keysInCurrentVersion, deletes, _iterator2, _step2, key;
        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.keys();
            case 2:
              keys = _context6.sent;
              keysInCurrentVersion = Object.keys(this.defaults);
              deletes = keys.filter(function (k) {
                return !keysInCurrentVersion.includes(k);
              });
              if (!(deletes.length === 0)) {
                _context6.next = 7;
                break;
              }
              return _context6.abrupt("return");
            case 7:
              this.logger.log("\u8FC1\u79FB\u5B58\u50A8\u7248\u672C\uFF0C\u5220\u9664 ", deletes);
              _iterator2 = storage_createForOfIteratorHelper(deletes);
              _context6.prev = 9;
              _iterator2.s();
            case 11:
              if ((_step2 = _iterator2.n()).done) {
                _context6.next = 17;
                break;
              }
              key = _step2.value;
              _context6.next = 15;
              return this["delete"](key);
            case 15:
              _context6.next = 11;
              break;
            case 17:
              _context6.next = 22;
              break;
            case 19:
              _context6.prev = 19;
              _context6.t0 = _context6["catch"](9);
              _iterator2.e(_context6.t0);
            case 22:
              _context6.prev = 22;
              _iterator2.f();
              return _context6.finish(22);
            case 25:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[9, 19, 22, 25]]);
      }));
      function migrate() {
        return _migrate.apply(this, arguments);
      }
      return migrate;
    }()
  }]);
  return Storage;
}();
Storage = __decorate([Service(), __metadata("design:paramtypes", [Logger])], Storage);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function arrayLikeToArray_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray_arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function unsupportedIterableToArray_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray_arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || unsupportedIterableToArray_unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./src/providers/common/messaging.ts





var Multicast = /*#__PURE__*/function () {
  function Multicast(key) {
    _classCallCheck(this, Multicast);
    this.key = key;
    this.listeners = new Set();
  }
  _createClass(Multicast, [{
    key: "size",
    get: function get() {
      return this.listeners.size;
    }
  }, {
    key: "add",
    value: function add(listener) {
      this.listeners.add(listener);
    }
  }, {
    key: "remove",
    value: function remove(listener) {
      return this.listeners["delete"](listener);
    }
  }, {
    key: "handle",
    value: function () {
      var _handle = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(request) {
        var promises, first, all;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              promises = _toConsumableArray(this.listeners.keys()).map(function (listener) {
                return Promise.resolve(listener(request));
              });
              _context.prev = 1;
              _context.next = 4;
              return Promise.race(promises);
            case 4:
              first = _context.sent;
              _context.next = 7;
              return Promise.all(promises);
            case 7:
              all = _context.sent;
              return _context.abrupt("return", first);
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              Object.defineProperty(_context.t0, 'request', {
                value: request,
                enumerable: true
              });
              if (first) Object.defineProperty(_context.t0, 'firstReply', {
                value: first,
                enumerable: true
              });
              if (all) Object.defineProperty(_context.t0, 'replies', {
                value: all,
                enumerable: true
              });
              throw _context.t0;
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 11]]);
      }));
      function handle(_x) {
        return _handle.apply(this, arguments);
      }
      return handle;
    }()
  }]);
  return Multicast;
}();
var Messaging = /*#__PURE__*/function () {
  function Messaging() {
    _classCallCheck(this, Messaging);
    this.handlers = new Map();
  }
  _createClass(Messaging, [{
    key: "on",
    value: function on(key, listener) {
      var handler = this.handlers.get(key);
      if (!handler) {
        handler = new Multicast(key);
        this.handlers.set(key, handler);
      }
      handler.add(listener);
      return {
        key: key,
        value: listener
      };
    }
  }, {
    key: "off",
    value: function off(listener) {
      var handler = this.handlers.get(listener.key);
      if (!handler) return false;
      return handler.remove(listener.value);
    }
  }, {
    key: "emit",
    value: function () {
      var _emit = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(key, args) {
        var broadcast,
          handler,
          handles,
          _args2 = arguments;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              broadcast = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
              handler = this.handlers.get(key);
              if (!(!handler || handler.size === 0)) {
                _context2.next = 6;
                break;
              }
              if (!broadcast) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", Promise.resolve(undefined));
            case 5:
              return _context2.abrupt("return", Promise.reject(new Error("\u6D88\u606F ".concat(key, " \u8FD8\u672A\u6CE8\u518C\u8FC7\u5904\u7406\u7A0B\u5E8F"))));
            case 6:
              handles = handler.handle(args);
              if (!broadcast) {
                _context2.next = 18;
                break;
              }
              _context2.prev = 8;
              _context2.next = 11;
              return handles;
            case 11:
              return _context2.abrupt("return", _context2.sent);
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](8);
              console.error(_context2.t0);
              return _context2.abrupt("return", undefined);
            case 18:
              return _context2.abrupt("return", handles);
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[8, 14]]);
      }));
      function emit(_x2, _x3) {
        return _emit.apply(this, arguments);
      }
      return emit;
    }()
  }]);
  return Messaging;
}();
var messaging = new Messaging();
;// CONCATENATED MODULE: ./src/providers/user-script/messaging.ts

var messaging_messaging = new Messaging();
;// CONCATENATED MODULE: ./src/services/messaging.ts






var messaging_Messaging = /*#__PURE__*/function () {
  function Messaging(logger) {
    _classCallCheck(this, Messaging);
    this.logger = logger;
  }
  _createClass(Messaging, [{
    key: "on",
    value: function on(key, listener) {
      this.logger.log("\u76D1\u542C\u4E8B\u4EF6", key);
      return messaging_messaging.on(key, listener);
    }
  }, {
    key: "off",
    value: function off(listener) {
      return messaging_messaging.off(listener);
    }
  }, {
    key: "emit",
    value: function emit(key, args) {
      var broadcast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return messaging_messaging.emit(key, args, broadcast);
    }
  }]);
  return Messaging;
}();
messaging_Messaging = __decorate([Service(), __metadata("design:paramtypes", [Logger])], messaging_Messaging);

// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(1062);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(552);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(3566);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(4107);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(4911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.89.0/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(3227);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.31_typescript@5.2.2_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/.pnpm/less-loader@11.1.3_less@4.2.0_webpack@5.89.0/node_modules/less-loader/dist/cjs.js!./src/plugin/introduce/index.less
var introduce = __webpack_require__(8494);
;// CONCATENATED MODULE: ./src/plugin/introduce/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, ":root");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var introduce_update = injectStylesIntoStyleTag_default()(introduce/* default */.Z, options);




       /* harmony default export */ var plugin_introduce = (introduce/* default */.Z && introduce/* default */.Z.locals ? introduce/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/escape-html@1.0.3/node_modules/escape-html/index.js
var escape_html = __webpack_require__(3675);
var escape_html_default = /*#__PURE__*/__webpack_require__.n(escape_html);
;// CONCATENATED MODULE: ./node_modules/.pnpm/emoji-regex@10.3.0/node_modules/emoji-regex/index.mjs
/* harmony default export */ var emoji_regex = (() => {
	// https://mths.be/emoji
	return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
});

;// CONCATENATED MODULE: ./src/services/tagging.ts






var emojiReg = emoji_regex();
var nsDic = {
  r: 'reclass',
  reclass: 'reclass',
  l: 'language',
  language: 'language',
  lang: 'language',
  o: 'other',
  other: 'other',
  p: 'parody',
  parody: 'parody',
  series: 'parody',
  c: 'character',
  "char": 'character',
  character: 'character',
  cos: 'cosplayer',
  coser: 'cosplayer',
  cosplayer: 'cosplayer',
  g: 'group',
  group: 'group',
  creator: 'group',
  circle: 'group',
  a: 'artist',
  artist: 'artist',
  m: 'male',
  male: 'male',
  f: 'female',
  female: 'female',
  x: 'mixed',
  mixed: 'mixed'
};
var shortNsDic = {
  rows: '',
  reclass: 'r',
  language: 'l',
  parody: 'p',
  character: 'c',
  group: 'g',
  artist: 'a',
  cosplayer: 'cos',
  male: 'm',
  female: 'f',
  mixed: 'x',
  other: 'o',
  temp: ''
};
var Tagging = /*#__PURE__*/function () {
  function Tagging() {
    _classCallCheck(this, Tagging);
    this.suggestUrl = 'https://forums.e-hentai.org/index.php?showtopic=246656';
    this.namespaceTranslate = {
      rows: '行名',
      artist: '艺术家',
      cosplayer: 'Coser',
      parody: '原作',
      character: '角色',
      group: '团队',
      language: '语言',
      other: '其他',
      female: '女',
      male: '男',
      mixed: '混',
      reclass: '重新分类',
      temp: '临时'
    };
  }
  _createClass(Tagging, [{
    key: "namespace",
    value: function namespace(ns) {
      if (!ns) return 'temp';
      if (ns in nsDic) return nsDic[ns];
      ns = ns.toLowerCase();
      if (ns in nsDic) return nsDic[ns];
      ns = ns.trim();
      if (ns in nsDic) return nsDic[ns];
      ns = ns[0];
      if (ns in nsDic) return nsDic[ns];
      return 'temp';
    }
  }, {
    key: "ns",
    value: function ns(_ns) {
      var fns = this.namespace(_ns);
      return shortNsDic[fns];
    }
  }, {
    key: "removePara",
    value: function removePara(name) {
      return name.replace(/^<p>(.+?)<\/p>$/, '$1').trim();
    }
  }, {
    key: "markImagesAndEmoji",
    value: function markImagesAndEmoji(text) {
      return text.replace(emojiReg, "<span ehs-emoji>$&</span>").replace(/<img(.*?)>/gi, "<img onerror=\"this.style.display='none'\" ehs-icon $1>");
    }
  }, {
    key: "removeImagesAndEmoji",
    value: function removeImagesAndEmoji(text) {
      return text.replace(emojiReg, '').replace(/<img.*?>/gi, '').trim();
    }
  }, {
    key: "removeHtmlTags",
    value: function removeHtmlTags(text) {
      return text.replace(/<abbr title="(\w+:)?([^"]+)" ns="(\w+)">/gi, '($3:$2)').replace(/<(img|a).*?>/gi, '').replace(/<(p|strong|em|abbr)>/gi, '').replace(/<\/(a|p|strong|em|abbr)>/gi, '').trim();
    }
  }, {
    key: "fullKey",
    value: function fullKey(tag) {
      var ns = 'namespace' in tag ? this.ns(tag.namespace) : tag.ns;
      var key = tag.key.toLowerCase();
      return ns ? "".concat(ns, ":").concat(key) : key;
    }
  }, {
    key: "searchTerm",
    value: function searchTerm(tag) {
      var ns = 'namespace' in tag ? this.ns(tag.namespace) : tag.ns;
      var key = tag.key.toLowerCase();
      var nsP = ns ? "".concat(ns, ":") : '';
      var search = key.includes(' ') ? "\"".concat(key, "$\"") : "".concat(key, "$");
      return nsP + search;
    }
  }, {
    key: "editorUrl",
    value: function editorUrl(tag) {
      var namespace = 'namespace' in tag ? this.namespace(tag.namespace) : this.namespace(tag.ns);
      var key = tag.key.toLowerCase();
      return "https://ehtt.vercel.app/edit/".concat(namespace, "/").concat(encodeURIComponent(key));
    }
  }, {
    key: "makeTagMatchHtml",
    value: function makeTagMatchHtml(suggestion) {
      var markTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mark';
      var tag = suggestion.tag;
      var cnNamespace = this.namespaceTranslate[this.namespace(tag.ns)];
      var cnNameHtml = '';
      var enNameHtml;
      if (tag.ns) {
        cnNameHtml += escape_html_default()(cnNamespace) + '：';
      }
      if (suggestion.match.cn) {
        var range = suggestion.match.cn;
        cnNameHtml += "".concat(escape_html_default()(tag.cn.slice(0, range.start)), "<").concat(markTag, ">").concat(escape_html_default()(tag.cn.slice(range.start, range.end)), "</").concat(markTag, ">").concat(escape_html_default()(tag.cn.slice(range.end)));
      } else {
        cnNameHtml += escape_html_default()(tag.cn);
      }
      if (suggestion.match.key) {
        var _range = suggestion.match.key;
        enNameHtml = "".concat(escape_html_default()(tag.key.slice(0, _range.start)), "<").concat(markTag, ">").concat(escape_html_default()(tag.key.slice(_range.start, _range.end)), "</").concat(markTag, ">").concat(escape_html_default()(tag.key.slice(_range.end)));
      } else {
        enNameHtml = escape_html_default()(tag.key);
      }
      return {
        cn: cnNameHtml,
        en: enNameHtml
      };
    }
  }]);
  return Tagging;
}();
Tagging = __decorate([Service()], Tagging);

;// CONCATENATED MODULE: ./src/plugin/introduce/index.ts











var Introduce = /*#__PURE__*/function () {
  function Introduce(logger, storage, messaging, tagging) {
    var _this = this;
    _classCallCheck(this, Introduce);
    this.logger = logger;
    this.storage = storage;
    this.messaging = messaging;
    this.tagging = tagging;
    this.target = null;
    this.onclick = function (e) {
      var _target$getAttribute;
      var target = _this.findTarget(e.target);
      if (!target) {
        return;
      }
      _this.target = target;
      var isOpen = !!target.style.color;
      if (!isOpen) {
        _this.closeIntroduceBox();
        return;
      }
      var m = /'(.*)'/gi.exec((_target$getAttribute = target.getAttribute('onclick')) !== null && _target$getAttribute !== void 0 ? _target$getAttribute : '');
      if (!(m !== null && m !== void 0 && m[1])) return;
      var m2 = m[1].split(':');
      var namespace = 'temp';
      var tag = '';
      if (m2.length === 1) {
        tag = m2[0];
      } else {
        namespace = m2.shift();
        tag = m2.join(':');
      }
      _this.openIntroduceBox(namespace, tag, function () {
        return _this.target !== target;
      })["catch"](_this.logger.error);
    };
    this.init()["catch"](logger.error);
  }
  _createClass(Introduce, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var conf, tagList, gridRight;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.storage.get('config');
            case 2:
              conf = _context.sent;
              if (conf.showIntroduce) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              tagList = document.querySelector('#taglist');
              this.tagList = tagList;
              gridRight = document.querySelector('#gd5');
              if (tagList && gridRight) {
                _context.next = 10;
                break;
              }
              return _context.abrupt("return");
            case 10:
              this.logger.log('标签介绍');
              this.initIntroduceBox();
              gridRight.insertBefore(this.introduceBox, null);
              tagList.addEventListener('click', this.onclick);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "initIntroduceBox",
    value: function initIntroduceBox() {
      var _this2 = this;
      this.introduceBox = document.createElement('div');
      this.introduceBox.id = 'ehs-introduce-box';
      this.introduceBox.addEventListener('click', function (ev) {
        var target = ev.target;
        if (target instanceof HTMLElement && target.classList.contains('ehs-close')) {
          var selectedTag = _this2.tagList.querySelector('[style*="color"]');
          if (selectedTag) {
            selectedTag.click();
          } else {
            _this2.closeIntroduceBox();
          }
          return;
        }
        while (target) {
          if (target.nodeName === 'A' && 'href' in target) break;
          target = target.parentNode;
        }
        if (target) {
          var a = target;
          ev.preventDefault();
          window.open(a.href, '_BLANK');
        }
      });
    }
  }, {
    key: "findTarget",
    value: function findTarget(node) {
      var isTarget = function isTarget(n) {
        return n.nodeType === Node.ELEMENT_NODE && n.nodeName === 'A' && n.id.startsWith('ta_') && n.parentElement != null && (n.parentElement.classList.contains('gt') || n.parentElement.classList.contains('gtl') || n.parentElement.classList.contains('gtw'));
      };
      while (node) {
        if (isTarget(node)) return node;
        node = node.parentNode;
      }
      return null;
    }
  }, {
    key: "onImageError",
    value: function onImageError(ev) {
      var target = ev.target;
      // eslint-disable-next-line @typescript-eslint/unbound-method
      target.removeEventListener('error', this.onImageError);
      target.referrerPolicy = '';
    }
  }, {
    key: "openIntroduceBox",
    value: function () {
      var _openIntroduceBox = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(namespace, key, canceled) {
        var _this3 = this;
        var timer, tagData, editorUrl, _tagData$links, tagEn;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              timer = this.logger.time('获取标签介绍');
              _context2.next = 3;
              return this.messaging.emit('get-tag', this.tagging.fullKey({
                namespace: namespace,
                key: key
              }));
            case 3:
              tagData = _context2.sent;
              timer.log(tagData);
              timer.end();
              if (!canceled()) {
                _context2.next = 8;
                break;
              }
              return _context2.abrupt("return");
            case 8:
              editorUrl = this.tagging.editorUrl({
                namespace: namespace,
                key: key
              });
              if (tagData) {
                tagEn = "".concat(this.tagging.namespace(tagData.ns), ":").concat(tagData.key); // language=HTML
                this.introduceBox.innerHTML = "\n            <div class=\"ehs-title\">\n                <div title=\"".concat("".concat(this.tagging.removeImagesAndEmoji(tagData.name), "\n").concat(tagEn), "\">\n                    <div class=\"ehs-cn\">", this.tagging.markImagesAndEmoji(tagData.name), "</div>\n                    <div class=\"ehs-en\">").concat(tagEn, "</div>\n                </div>\n                <span class=\"ehs-close\"></span>\n            </div>\n            <div class=\"ehs-content\">\n                ").concat(tagData.intro ? tagData.intro : "\n                    <div class=\"ehs-no-intro\">\n                        <h3>\u65E0\u4ECB\u7ECD</h3>\n                        <center><a href=\"".concat(editorUrl, "\" target=\"_blank\">\u63D0\u4F9B\u4ECB\u7ECD</a></center>\n                    </div> "), "\n            </div>\n            <div class=\"ehs-href\">").concat((_tagData$links = tagData.links) !== null && _tagData$links !== void 0 ? _tagData$links : '', "</div>");
              } else {
                // language=HTML
                this.introduceBox.innerHTML = "\n            <div class=\"ehs-title\">\n                <div title=\"".concat(namespace, ":").concat(key, "\">\n                    <div class=\"ehs-cn\">").concat(namespace, ":").concat(key, "</div>\n                    <div class=\"ehs-en\">\u8BE5\u6807\u7B7E\u5C1A\u672A\u7FFB\u8BD1</div>\n                </div>\n                <span class=\"ehs-close\"></span>\n            </div>\n            <div class=\"ehs-content\">\n                <div class=\"ehs-no-translation\">\n                    <h3>\u8BE5\u6807\u7B7E\u5C1A\u672A\u7FFB\u8BD1</h3>\n                ").concat(namespace === 'temp' ? "\n                    <p>\n                        \u8BE5\u6807\u7B7E\u5C1A\u672A\u6B63\u5F0F\u6DFB\u52A0\u81F3 EH \u6807\u7B7E\u7CFB\u7EDF\u3002\u5728\u63D0\u4F9B\u7FFB\u8BD1\u524D\uFF0C\u9700\u8981\u5728 <a href=\"".concat(this.tagging.suggestUrl, "\" target=\"_blank\">EH \u8BBA\u575B</a>\u53D1\u5E16\u5C06\u8BE5\u6807\u7B7E\u79FB\u52A8\u5230\u5408\u9002\u7684\u547D\u540D\u7A7A\u95F4\u3002\n                    </p>") : "\n                    <center>\n                        <a href=\"".concat(editorUrl, "\" target=\"_blank\">\u63D0\u4F9B\u7FFB\u8BD1</a>\n                    </center>"), "\n                </div>\n            </div>");
              }
              this.introduceBox.querySelectorAll('img').forEach(function (img) {
                img.referrerPolicy = 'no-referrer';
                // eslint-disable-next-line @typescript-eslint/unbound-method
                img.addEventListener('error', _this3.onImageError);
              });
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function openIntroduceBox(_x, _x2, _x3) {
        return _openIntroduceBox.apply(this, arguments);
      }
      return openIntroduceBox;
    }()
  }, {
    key: "closeIntroduceBox",
    value: function closeIntroduceBox() {
      this.introduceBox.innerHTML = '';
    }
  }]);
  return Introduce;
}();
Introduce = __decorate([Service(), __metadata("design:paramtypes", [Logger, Storage, messaging_Messaging, Tagging])], Introduce);

;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isPromise.js

function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subscription.js




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/config.js
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        var onUnhandledError = config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() { }
//# sourceMappingURL=noop.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/errorContext.js

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber = (function (_super) {
    tslib_es6_extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    tslib_es6_extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        captureError(error);
    }
    else {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};
//# sourceMappingURL=Subscriber.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/pipe.js

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Observable.js







var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}
//# sourceMappingURL=Observable.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js


function isInteropObservable(input) {
    return isFunction(input[observable]);
}
//# sourceMappingURL=isInteropObservable.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isIterable.js


function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
//# sourceMappingURL=isIterable.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js


function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js












function innerFrom(input) {
    if (input instanceof Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=innerFrom.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/lift.js

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    tslib_es6_extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/map.js


function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
//# sourceMappingURL=executeSchedule.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
//# sourceMappingURL=mergeInternals.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js


var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map(function (args) { return callOrApply(fn, args); });
}
//# sourceMappingURL=mapOneOrManyArgs.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js







var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike(target)) {
            return mergeMap(function (subTarget) { return fromEvent(subTarget, eventName, options); })(innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/operators/filter.js


function filter(predicate, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}
//# sourceMappingURL=filter.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.31_typescript@5.2.2_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/.pnpm/less-loader@11.1.3_less@4.2.0_webpack@5.89.0/node_modules/less-loader/dist/cjs.js!./src/plugin/tag-tip/index.less
var tag_tip = __webpack_require__(7159);
;// CONCATENATED MODULE: ./src/plugin/tag-tip/index.less

      
      
      
      
      
      
      
      
      

var tag_tip_options = {};

tag_tip_options.styleTagTransform = (styleTagTransform_default());
tag_tip_options.setAttributes = (setAttributesWithoutAttributes_default());

      tag_tip_options.insert = insertBySelector_default().bind(null, ":root");
    
tag_tip_options.domAPI = (styleDomAPI_default());
tag_tip_options.insertStyleElement = (insertStyleElement_default());

var tag_tip_update = injectStylesIntoStyleTag_default()(tag_tip/* default */.Z, tag_tip_options);




       /* harmony default export */ var plugin_tag_tip = (tag_tip/* default */.Z && tag_tip/* default */.Z.locals ? tag_tip/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/plugin/tag-tip/index.ts













var TagTip = /*#__PURE__*/function () {
  function TagTip(storage, logger, messaging, tagging) {
    _classCallCheck(this, TagTip);
    this.storage = storage;
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.selectedIndex = 0;
    this.delimiter = ' ';
    this.ctrlKey = false;
    this.disableExclusionMode = false;
    this.init()["catch"](logger.error);
  }
  _createClass(TagTip, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var _this = this;
        var conf, searchInput;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.storage.get('config');
            case 2:
              conf = _context.sent;
              if (conf.tagTip) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              this.logger.log('标签提示');
              searchInput = document.querySelector('#f_search, #newtagfield, [name=f_search]');
              if (searchInput) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return");
            case 9:
              this.disableExclusionMode = searchInput.id === 'newtagfield';
              this.delimiter = location.pathname.startsWith('/g/') ? ',' : ' ';
              this.inputElement = searchInput;
              this.inputElement.autocomplete = 'off';
              this.autoCompleteList = document.createElement('div');
              this.autoCompleteList.className = 'eh-syringe-lite-auto-complete-list';
              fromEvent(this.inputElement, 'keyup').pipe(filter(function (e) {
                return !new Set(['ArrowUp', 'ArrowDown', 'Enter', 'Meta', 'Control', 'Alt']).has(e.key);
              }), map(function () {
                return _this.inputElement.value;
              })).subscribe(function (s) {
                _this.search(s)["catch"](_this.logger.error);
              });
              fromEvent(this.inputElement, 'keydown').subscribe(function (e) {
                return _this.keydown(e);
              });
              fromEvent(this.inputElement, 'keyup').subscribe(function (e) {
                return _this.checkCtrl(e);
              });
              fromEvent(this.autoCompleteList, 'click').subscribe(function (e) {
                _this.inputElement.focus();
                e.preventDefault();
                e.stopPropagation();
              });
              fromEvent(this.inputElement, 'focus').subscribe(function () {
                return _this.setListPosition();
              });
              fromEvent(window, 'resize').subscribe(function () {
                return _this.setListPosition();
              });
              fromEvent(window, 'scroll').subscribe(function () {
                return _this.setListPosition();
              });
              fromEvent(document, 'click').subscribe(function () {
                _this.autoCompleteList.innerHTML = '';
              });
              document.body.insertBefore(this.autoCompleteList, null);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3(value) {
        var _value$match,
          _this2 = this;
        var values, result, used;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              value = this.inputElement.value = value.replace(/  +/gm, ' ');
              // [^\s,] 空白字符和逗号以外的字符 (用于支持逗号)
              // (?:"|$) 非捕获分组, 引号或文本结束  (用于匹配不完整的引号)
              // [^\s,]+:".+?(?:"|$)     NS:"ab cd"     NS:"ab c...
              // ".+?(?:"|$)]            "ab cd"        "ab c...
              // [^\s,]+:[^\s,]+         NS:abcd
              // [^\s,]+                 abcd
              values = (_value$match = value.match(/([^\s,]+:".+?(?:"|$)|".+?(?:"|$)]|[^\s,]+:[^\s,]+|[^\s,]+)/gim)) !== null && _value$match !== void 0 ? _value$match : [];
              result = [];
              used = new Set();
              _context3.next = 6;
              return Promise.all(values.map( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(v, i) {
                  var sv, svs, suggestions;
                  return regenerator_default().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        sv = values.slice(i);
                        if (!sv.length) {
                          _context2.next = 9;
                          break;
                        }
                        svs = sv.join(_this2.delimiter);
                        if (!(!svs || svs.replace(/\s+/, '').length === 0)) {
                          _context2.next = 5;
                          break;
                        }
                        return _context2.abrupt("return");
                      case 5:
                        _context2.next = 7;
                        return _this2.messaging.emit('suggest-tag', {
                          term: svs,
                          limit: 50
                        });
                      case 7:
                        suggestions = _context2.sent;
                        suggestions.forEach(function (suggestion) {
                          var tag = suggestion.tag;
                          if (used.has(_this2.tagging.fullKey(tag))) return;
                          used.add(_this2.tagging.fullKey(tag));
                          result.push(suggestion);
                        });
                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x2, _x3) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 6:
              this.autoCompleteList.innerHTML = '';
              result.slice(0, 50).forEach(function (tag) {
                _this2.autoCompleteList.insertBefore(_this2.tagElementItem(tag), null);
              });
              this.selectedIndex = -1;
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function search(_x) {
        return _search.apply(this, arguments);
      }
      return search;
    }()
  }, {
    key: "checkCtrl",
    value: function checkCtrl(e) {
      if (this.disableExclusionMode) return;
      this.ctrlKey = e.ctrlKey || e.metaKey;
      if (this.ctrlKey) {
        this.autoCompleteList.classList.add('exclude');
      } else {
        this.autoCompleteList.classList.remove('exclude');
      }
    }
  }, {
    key: "keydown",
    value: function keydown(e) {
      this.checkCtrl(e);
      if (e.code === 'ArrowUp' || e.code === 'ArrowDown') {
        if (e.code === 'ArrowUp') {
          this.selectedIndex--;
          if (this.selectedIndex < 0) {
            this.selectedIndex = this.autoCompleteList.children.length - 1;
          }
        } else {
          this.selectedIndex++;
          if (this.selectedIndex >= this.autoCompleteList.children.length) {
            this.selectedIndex = 0;
          }
        }
        var children = Array.from(this.autoCompleteList.children);
        children.forEach(function (element) {
          element.classList.remove('selected');
        });
        if (this.selectedIndex >= 0 && children[this.selectedIndex]) {
          children[this.selectedIndex].classList.add('selected');
        }
        e.preventDefault();
        e.stopPropagation();
      } else if (e.code === 'Enter') {
        var _children = Array.from(this.autoCompleteList.children);
        if (this.selectedIndex >= 0 && _children[this.selectedIndex]) {
          _children[this.selectedIndex].click();
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }
  }, {
    key: "setListPosition",
    value: function setListPosition() {
      var rect = this.inputElement.getBoundingClientRect();
      this.autoCompleteList.style.left = "".concat(rect.left, "px");
      this.autoCompleteList.style.top = "".concat(rect.bottom, "px");
      this.autoCompleteList.style.minWidth = "".concat(rect.width, "px");
    }
  }, {
    key: "tagElementItem",
    value: function tagElementItem(suggestion) {
      var _this3 = this;
      var tag = suggestion.tag;
      var item = document.createElement('div');
      var cnName = document.createElement('span');
      cnName.className = 'auto-complete-text cn-name';
      var enName = document.createElement('span');
      enName.className = 'auto-complete-text en-name';
      var html = this.tagging.makeTagMatchHtml(suggestion, 'mark');
      cnName.innerHTML = html.cn;
      enName.innerHTML = html.en;
      item.insertBefore(cnName, null);
      item.insertBefore(enName, null);
      item.className = 'auto-complete-item';
      item.onclick = function () {
        var length = suggestion.term.length;
        if (_this3.inputElement.value.endsWith(_this3.delimiter)) {
          length++;
        }
        var exclude = _this3.ctrlKey ? '-' : '';
        _this3.inputElement.value = "".concat(_this3.inputElement.value.slice(0, 0 - length)).concat(exclude).concat(_this3.tagging.searchTerm(tag)).concat(_this3.delimiter);
        _this3.autoCompleteList.innerHTML = '';
      };
      return item;
    }
  }]);
  return TagTip;
}();
TagTip = __decorate([Service(), __metadata("design:paramtypes", [Storage, Logger, messaging_Messaging, Tagging])], TagTip);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || unsupportedIterableToArray_unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
;// CONCATENATED MODULE: ./src/services/ui-translation/helper.ts


function helper_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = helper_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function helper_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return helper_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return helper_arrayLikeToArray(o, minLen); }
function helper_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var dataMaps = [];
function merge(regex, host, plainReplacements, regexReplacements) {
  var hosts = host ? _toConsumableArray(new Set(Array.isArray(host) ? host : [host])).sort() : undefined;
  var map = dataMaps.find(function (d) {
    return JSON.stringify(d.hosts) === JSON.stringify(hosts) && d.regex.source === regex.source;
  });
  if (!map) {
    map = {
      regex: regex,
      hosts: hosts,
      plainReplacements: new Map(),
      regexReplacements: new Map()
    };
    dataMaps.push(map);
  }
  for (var key in plainReplacements) {
    var element = plainReplacements[key];
    map.plainReplacements.set(key, element);
  }
  if (regexReplacements) {
    var _iterator = helper_createForOfIteratorHelper(regexReplacements),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          k = _step$value[0],
          v = _step$value[1];
        map.regexReplacements.set(k, v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}
;// CONCATENATED MODULE: ./src/services/ui-translation/data/archiver.ts

merge(/^\/archiver\.php/, undefined, {
  'Current Funds:': '现有资金',
  'Estimated Size: \xA0 ': '预计大小：',
  'Download Cost: \xA0 ': '下载费用：',
  'Free!': '免费！',
  'Insufficient Funds': '余额不足',
  'Download Original Archive': '下载原始档案',
  'Download Resample Archive': '下载重采样档案',
  original: '原始',
  resample: '重采样',
  ' download of this archive on ': '档案下载，时间：',
  cancel: '取消',
  'Locating archive server and preparing file for download...': '定位归档服务器并准备下载文件...',
  '(this can take several minutes)': '(这可能需要几分钟时间)',
  'Please wait...': '请稍候...',
  Close: '取消',
  'H@H Downloader': 'H@H 下载器',
  'N/A': '不适用',
  Original: '原图',
  Free: '免费',
  'You must have a H@H client assigned to your account to use this feature.': '您必须拥有 H@H 客户端才能使用此功能',
  'Your H@H client appears to be offline.': '您的 H@H 客户端处于离线状态',
  'Turn it on, then try again.': '请启动 H@H 客户端后重试',
  'Downloads should start processing within a couple of minutes.': '下载会在几分钟内开始'
}, [[/^You unlocked an? $/, '已解锁'], [/^An original resolution/, '原始分辨率'], [/^A (\d+x) resolution/, '$1 分辨率'], [/ download has been queued for client $/, '的下载请求已添加到下载队列，目标客户端 ']]);
merge(/^\/archive\//, '*.hath.network', {
  'The file was successfully prepared, and is ready for download.': '文件已准备就绪，可供下载',
  'Click Here To Start Downloading': '点击此处开始下载',
  'You can also copy this link to a download manager.': '您也可以将链接复制到下载软件中'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/bitcoin.ts

merge(/^\/bitcoin\.php/, undefined, {
  'Bitcoin Donation': '比特币捐赠',
  '\n\t\tBitcoin (BTC) and Bitcoin Cash (BCH) are decentralized virtual currencies. This page allows you to donate these coins from an exchange service or a local wallet, track the confirmation process of the transaction, and apply the donated coins as a USD donation or Adopt-a-Server slots. This is not a custodial service; all coins sent to these addresses are considered donated to this site and cannot be withdrawn. ': '\n\t\t比特币 (BTC) 和比特币现金 (BCH) 是去中心化的虚拟货币。本页面允许您从交易所或本地钱包捐赠并跟踪交易过程，并能够将捐赠的虚拟货币作为美元捐赠或领养服务器。这不是一个保管服务，所有发送到这些地址的虚拟货币都被认为是捐赠给本网站的，无法撤回。',
  'Read this thread for more information about donating and how to buy coins': '阅读此帖子以了解更多关于捐赠和如何购买虚拟货币的信息',
  ' Bitcoin (BTC)': ' 比特币 (BTC)',
  ' Bitcoin Cash (BCH)': ' 比特币现金 (BCH)',
  'Generate an address first...': '请先生成地址',
  'Not Created - Click To Generate': '未创建 - 点击生成',
  'Your Bitcoin (BTC) Donation Wallet Address': '您的比特币 (BTC) 捐赠钱包地址',
  'IMPORTANT: ONLY USE THIS ADDRESS FOR BITCOIN (BTC)': '重要提示：只能将此地址用于比特币 (BTC)',
  'OTHER CRYPTO SENT TO THIS ADDRESS WILL BE LOST': '发送到此地址的其他类型加密货币都将丢失',
  'Your Bitcoin Cash (BCH) Donation Wallet Address': '您的比特币现金 (BCH) 捐赠钱包地址',
  'If your wallet cannot send to this address, ': '如果您的钱包无法发送到此地址，请',
  'switch to legacy addresses': '切换到传统地址',
  'We automatically ': '当旧地址被使用时，我们会自动',
  'generate a new address': '生成一个新地址',
  ' when the old one is used. You will still be credited if you reuse recent addresses, but please use the currently displayed address whenever possible.': '。如果您重复使用最近的地址，仍然会被计入，但请尽可能使用当前显示的地址。',
  'You can only manually create a new address once every 24 hours.': '每 24 小时，您只能手动创建一次新地址。',
  'Send a Bitcoin (BTC) Wallet Address PM': '私信发送比特币 (BTC) 钱包地址',
  'Send a Bitcoin Cash (BCH) Wallet Address PM': '私信发送比特币现金 (BCH) 钱包地址',
  'You can use this form to send a private message from the gallery system with your wallet address. This guarantees that a given wallet address belongs to you and that it exists in the E-Hentai system.': '您可以通过此表单以图库系统 (Gallery System) 的名义发送一条包含钱包地址的私信。这样能够保证此钱包地址属于您，并存在于 E-Hentai 系统中。',
  'Member name: ': '收件人：',
  Send: '发送',
  'You already sent a wallet message to that member.': '您已经向此用户发送了包含钱包地址的私信。',
  'Member not found.': '未找到此用户。',
  'Recent Bitcoin (BTC) Donations': '最近的比特币 (BTC) 捐赠',
  'Recent Bitcoin Cash (BCH) Donations': '最近的比特币现金 (BCH) 捐赠',
  'New donations will typically show up here in less than two minutes. It will show as ': '新的捐赠通常会在两分钟内显示在这里，但在被纳入一个区块并达到两个确认之前会处于 ',
  ' until it has been included in a block and has two confirmations. This usually takes less than an hour, but can take longer in some cases. When it has been marked as ': ' 状态。这通常不需要一个小时，但在某些情况下可能会花费更长时间。只有当状态变更为 ',
  ', you can apply it below to make it take effect.': ' 时才能通过下方按钮完成捐赠。',
  'No transactions in the past year.': '在过去一年内没有交易',
  Pending: '待定',
  Accepted: '已接受',
  'Available To Apply: ': '可用余额：',
  ' \xA0 \xA0 \xA0 Donation Total: ': ' \xA0 \xA0 \xA0 捐赠总额：',
  ' \xA0 \xA0 \xA0 Adopt-a-Server Days: ': ' \xA0 \xA0 \xA0 领养服务器天数：',
  'Current Conversion Rate: ': '当前汇率：',
  'Apply BTC as Donation': '使用 BTC 捐赠',
  'Apply BCH as Donation': '使用 BCH 捐赠',
  'use max': '最大',
  'Apply Donation': '我要捐赠',
  'Apply BCH as Adopt-a-Server': '使用 BCH 领养服务器',
  'Apply BTC as Adopt-a-Server': '使用 BTC 领养服务器',
  'Select slot duration..': '选择时长..',
  '1 Month @ $10/month $10': '1 个月 @ $10/月 $10',
  '3 Month @ $9/month $27': '3 个月 @ $9/月 $27',
  '6 Month @ $8/month $48': '6 个月 @ $8/月 $48',
  '1 Year @ $7/month $84': '1 年 @ $7/月 $84',
  '2 Year @ $6/month $144': '2 年 @ $6/月 $144',
  '3 Year @ $5/month $180': '3 年 @ $5/月 $180',
  'Purchase Slots': '我要领养',
  'Donated coins are applied as the equivalent value in USD at the time of your choosing, using the site rate which is calculated from recent real-world value.': '捐赠的虚拟货币在您使用时会以最近平均历史价格作为网站的汇率转换为美元。',
  'The site rate will never drop sharply, it adjusts slowly over time if the real-world value is higher than or less than 90% of the site rate.': '网站的汇率永远不会急剧下降，只有当实际汇率高于网站汇率，或低于网站汇率的 90% 时，才会随着时间推移缓慢调整。',
  'The conversion rates right now are ': '当前汇率：',
  ' for Bitcoin, and ': ' (比特币) \xA0 ',
  ' for Bitcoin Cash.': ' (比特币现金)',
  'Donation Level': '捐赠等级',
  'EXP Bonus': '经验加成',
  'Daily Bonus': '每日奖励',
  'Daily Hath': '每日 Hath',
  'Free Archives': '免费档案配额',
  'You did not donate anything yet, but we still love you.': '您还没有捐赠，但我们仍然爱您。',
  'Bronze Star': '铜星',
  'Silver Star': '银星',
  'Gold Star': '金星',
  'Tri Star': '三星',
  'Quint Star': '五星',
  'Septua Star': '七星',
  'Honorary Catgirl': '荣誉猫娘',
  'Bitcoin (BTC) Spending History': '比特币 (BTC) 消费历史',
  'Bitcoin Cash (BCH) Spending History': '比特币现金 (BCH) 消费历史',
  'No coins have been applied yet': '目前还没有使用此类虚拟货币',
  'Adopt-a-Server Slots': '服务器领养日志',
  'No slots have been adopted yet': '目前还没有领养服务器'
}, [[/^Refunded (.*?) Hath/, '已退还 $1 Hath'], [/^(\$.*?) Donation$/, '捐赠 $1'], [/^A wallet address PM was sent to user (.+?) \(uid=(\d+)\)$/, '您的钱包地址已私信发送给 $1 (UID $2)。'], [/^Awarded for a total donation of (\$\d+).$/, '授予的捐赠总额为 $1。'], [/^(\d+) GB \/ week$/, '$1 GB / 周'], [/^Catgirl Lv.(\d)$/, '猫娘 Lv.$1'], [/^Insufficient (BCH|BTC) available.\s?/, '$1 余额不足。'], [/You have ([\d.]+) (BCH|BTC) pending, but these need to be confirmed first.$/, '您有 $1 $2 待确认，请等到确认完成后再操作。']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/bounty.ts

merge(/^\/bounty(_post)?\.php/, undefined, {
  'Bounty List': '悬赏列表',
  'Most Wanted Standard Bounties': '热门标准悬赏',
  'Most Wanted Translation Bounties': '热门翻译悬赏',
  'Most Wanted Editing Bounties': '热门编辑悬赏',
  'Post New Bounty': '发布新悬赏',
  'Search Bounties': '搜索悬赏',
  'Bounty Type: ': '悬赏类型：',
  All: '全部',
  Standard: '标准',
  Translation: '翻译',
  Editing: '编辑',
  ' \xA0 Bounty Status: ': ' \xA0 悬赏状态：',
  'Last Updated': '最后更新',
  'Bounty Headline': '悬赏标题',
  'Bounty Type': '悬赏类型',
  'Bounty Status': '悬赏状态',
  'Total Bounty': '总赏金',
  'Posted By': '发布者',
  'Open/New': '开放/新创建',
  'Open/Accepted': '开放/已接受',
  'Closed/Reserved': '关闭/已保留',
  'Closed/Claimed': '关闭/已认领',
  'Closed/Completed': '关闭/已完成',
  'You are currently an Unranked Bounty Hunter.': '您当前是未评级赏金猎人。',
  'Bounty Poster:': '发布者：',
  'Posted Date:': '发布日期：',
  'Bounty Status:': '悬赏状态：',
  'Min Hunter Rank:': '最低等级要求：',
  Unranked: '未评级',
  'Current Reward:': '当前赏金：',
  '< Prev 10': '< 上一页',
  'Next 10 >': '下一页 >',
  'Bounty Headline:': '悬赏标题：',
  'A short one-liner consistently describing the bounty.': '一句话描述悬赏内容。',
  'This will appear on the Bounty Overview screen.': '它会显示在悬赏概览页面。',
  'Detailed Bounty Description:': '悬赏详情：',
  'Remember to be specific. Bounties like "Requesting ': '请注意要具体。悬赏如 “请求 ',
  ' Hentai" is not very specific, and any bounty claim featuring anything that matches would be accepted; bounties like "Any ': ' Hentai” 不是很具体，包含匹配内容的悬赏认领都可以被接受；悬赏如 “任何我没有的 ',
  ' Hentai I don\'t have" would require an actual list; and so on. If you have any minimum quality/resolution demands, make sure to include this as well.': ' Hentai” 需要一个确切的列表；以此类推。如果您有任何最低质量/分辨率要求，请务必包含在内。',
  'The more precise you can define your bounty, the higher the chance you will be satisfied with its result. Keep in mind that if your bounty is vague and someone technically fulfills it (as determined by a Bounty Moderator), your posted reward is forfeit.': '您的悬赏内容定义的越精确，您对其结果的满意度就会越高。请记住，如果您的悬赏内容含糊不清，而某人在技术上满足了它 (由悬赏版主裁定)，您发布的奖励会被没收。',
  'Wanted Poster:': '悬赏海报：',
  'You can optionally upload a thumbnail, cover page, an image from an incomplete collection, or any other relevant image to further specify the bounty. (JPG/PNG)': '您可以选择上传缩略图、封面、不完整合集的图像或任何其他相关的图像，以进一步指定悬赏。(JPG/PNG)',
  'Offered Reward:': '悬赏金额：',
  'The reward you offer for this bounty, in Credits and/or Hath. The minimum allowed is 25000 Credits or 5 Hath.': '您为此悬赏提供的赏金，以 Credits 和/或 Hath 计。最低要求 25000 Credits 或 5 Hath。',
  'Bounty Type:': '悬赏类型：',
  'If this bounty is for a translation or editing job, select the corresponding type and provide a link to the source material.': '如果此悬赏为翻译或编辑工作，请选择相应的类型并提供源材料的链接。',
  'Otherwise, select Standard.': '否则，请选择标准。',
  'Minimum Hunter Rank:': '最低等级要求：',
  'This is the minimum rank a Bounty Hunter needs to accept or claim this bounty. The default recommended setting will allow unranked hunters, but exclude those who have an inordinate number of rejected claims.': '这是赏金猎人能够接受或认领此悬赏所需的最低等级。默认推荐设置将允许未评级的猎人，但不会包括那些曾被多次拒绝认领的猎人。',
  'Accepted Delivery:': '交付方式：',
  'These are the delivery methods you accept for this bounty. If you only want galleries posted to E-Hentai Galleries, you do not need to change this.': '请选择您接受的交付方式。如果您只是希望将图库发布到 E-Hentai，则无需更改此设置。',
  'Posted to the E-Hentai Galleries System': '发布到 E-Hentai 图库系统',
  'Archive download at a file locker service': '通过文件保管服务下载归档文件',
  'BitTorrent download at a public tracker': '通过使用公共 tracker 的 BT 下载',
  'Other; specify in bounty description': '其他，请在悬赏描述中指定',
  'Please verify that the information is correct before you submit this bounty.': '在提交此悬赏之前，请确认信息正确。',
  'Post Bounty': '发布悬赏',
  'Bounty Posted By:': '发布者：',
  'Contact Poster': '联系发布者',
  Updated: '更新于',
  'Bounties that are ': '状态为 ',
  ' are open to be accepted and claimed. If you intent to fulfill a bounty within a reasonable amount of time, you can optionally ': ' 的悬赏可以被接受和认领。如果您打算在合理的时间内完成悬赏，可以先 ',
  accept: '接受',
  ' the bounty first. These expire after a month.': ' 悬赏，此状态会在一个月后过期。',
  'After a bounty has been ': '若悬赏被 ',
  claimed: '认领',
  ', the original poster of the bounty has seven days to accept or dispute it. If there is a dispute or the acceptance period expires, a Bounty Moderator will decide the outcome of the bounty.': '，悬赏发布者有七天时间来选择接受认领或提出质疑。如果出现争议或接受期限过期，将由悬赏版主裁定悬赏的结果。',
  'A rejected claim cannot be resubmitted, and will affect your rank.': '被拒绝的认领不能重新提交，并且会影响您的等级。',
  'You have not yet accepted or claimed this bounty.': '您尚未接受或认领此悬赏。',
  'Your rank (Unranked) is insufficient to accept this bounty.': '您的等级 (未评级) 不足以接受此悬赏。',
  'For accepting a bounty, you can enter a short comment here. For claiming a bounty, you must enter all the necessary details for where the bounty can be found.': '接受悬赏时，您可以在此处输入简短的评论。认领悬赏时，则必须提供悬赏所需的所有详细信息。',
  'If you intend to claim this bounty, make sure that all necessary URLs entered above are correct, and that they match the accepted delivery methods of this bounty. Do not, for instance, submit a link to a torrent file if that delivery method is not accepted. All information required to determine the validity of a claim MUST be posted in the claim itself.': '如果您准备认领此悬赏，请确保上方提供的所有必要 URL 都是正确的，并且与此悬赏的指定交付方式相匹配。例如，请不要在发布者不接受 BT 下载的情况下提供一个指向种子文件的链接。为保证认领的有效性，必须在认领请求中包含所有必要的信息。',
  'In order to claim a bounty, you have to post a deposit of 1000 credits. This is returned to you if the claim is accepted, but if the claim is found to be invalid, it will be forfeit.': '要认领悬赏，您必须支付 1000 Credits 的保证金。如果认领被接受，保证金将退还给您，但如果认领被判定无效，则会被没收。',
  'Accept Bounty': '接受悬赏',
  'Claim Bounty': '认领悬赏',
  'You can add additional rewards as long as the bounty has not been accepted or claimed. Rewards lock in after 15 minutes and can then only be rescinded after a month or if the bounty is cancelled. You will have no saying in whether a claim is accepted or not.': '只要悬赏未被认领，您就可以增加额外赏金。赏金会在 15 分钟后被锁定，只能在一个月后或悬赏被取消时才能撤回。您无权决定是否接受认领。',
  'You have ': '您拥有 ',
  '. Minimum is ': '。最低要求 ',
  ' or ': ' 或 ',
  '.': '。',
  'Submit Additional Reward': '提交额外赏金',
  'You must enter a minimum additional reward of 5000 C or 1 Hath.': '您必须输入最低额外赏金 (5000 C 或 1 Hath)。',
  'You can no longer add rewards for this bounty.\n\n\t\t': '您无法再为此悬赏增加赏金。',
  'Grant Date': '授予日期',
  Amount: '赏金',
  'Added By': '添加者',
  'Original Bounty': '初始赏金',
  'Claim Date': '认领日期',
  Status: '状态',
  'Bounty Hunter': '赏金猎人',
  Rating: '等级',
  'This bounty has not been accepted or claimed by anyone.': '此悬赏尚未被任何人接受或认领。',
  'Bounty Accepted': '悬赏接受',
  'Bounty Reserved': '悬赏保留',
  'Claim Pending': '认领待定',
  'Claim Disputed': '认领争议',
  'Claim Accepted': '认领接受',
  '\n\tn/t\n\t\n\t': '',
  'Comments from Bounty Poster:': '悬赏发布者评论：',
  '(No comment was given.)': '(未提供评论)',
  'This claim has been accepted, and the bounty has been closed.\n\t': '此认领已被接受，悬赏已关闭。',
  'This claim has been disputed, and is pending ruling by a Bounty Moderator.\n\t': '此认领存在争议，正在等待悬赏版主裁决。'
}, [[/^Showing /, '正在显示'], [/All Open Bounties$/, '所有未完成悬赏'], [/All Reserved Bounties$/, '所有已保留悬赏'], [/All Claimed Bounties$/, '所有已认领悬赏'], [/All Completed Bounties$/, '所有已完成悬赏'], [/Bounties Posted By Me$/, '我发布的悬赏'], [/Bounties Boosted By Me$/, '我加价的悬赏'], [/Bounties Accepted By Me$/, '我接受的悬赏'], [/Bounties Reserved For Me$/, '我保留的悬赏'], [/Bounties Claimed By Me$/, '我认领的悬赏'], [/Bounties Completed By Me$/, '我完成的悬赏'], [/^Rank ([A-Z])$/, '$1 级'], [/^Remaining Claim Dispute Time: /, '剩余认领争议时间：'], [/(\d+) days and (\d+) hours/, '$1 天 $2 小时']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/common.ts

merge(/.*/, undefined, {
  'Front Page': '首页',
  Watched: '订阅',
  Popular: '热门',
  Torrents: '种子',
  Favorites: '收藏',
  'My ': '我的',
  Home: '主页',
  Uploads: '上传',
  Toplists: '排行',
  Bounties: '悬赏',
  News: '新闻',
  Forums: '论坛',
  Wiki: '维基',
  Overview: '概况',
  'My Stats': '我的统计',
  'My Settings': '我的设置',
  'My Tags': '我的标签',
  Stats: '统计',
  Settings: '设置',
  Tags: '标签',
  Donations: '捐赠',
  'Hath Exchange': 'Hath 交易',
  'GP Exchange': 'GP 交易',
  'Credit Log': 'Credit 记录',
  'Karma Log': 'Karma 记录',
  Front: '首页',
  LoFi: '低保真版',
  ToS: '服务条款',
  Advertise: '广告',
  Onion: '洋葱网址',
  'E-Hentai Galleries: The Free Hentai Doujinshi, Manga and Image Gallery System': 'E-Hentai: 一个免费的绅士同人志、漫画和图像的图库系统',
  'Now With Layers': '有了洋葱网址',
  Doujinshi: '同人志',
  Manga: '漫画',
  'Artist CG': '画师CG',
  'Game CG': '游戏CG',
  Western: '西方',
  'Non-H': '无H',
  'Image Set': '图集',
  'Asian Porn': '亚洲色情',
  Misc: '杂项',
  Private: '私有',
  'Search Keywords': '搜索关键词',
  Search: '搜索',
  Clear: '清除',
  'Show Advanced Options': '显示高级选项',
  'Hide Advanced Options': '隐藏高级选项',
  ' Browse Expunged Galleries': '只显示已删除的图库',
  ' Require Gallery Torrent': '只显示有种子的图库',
  'Between ': '介于 ',
  ' and ': ' 和 ',
  ' pages': ' 页',
  'Minimum Rating: ': '最低评分：',
  'Any Rating': '无限制',
  '2 Stars': '2 星',
  '3 Stars': '3 星',
  '4 Stars': '4 星',
  '5 Stars': '5 星',
  'Disable custom filters for:': '禁用自定义过滤器：',
  ' Language': ' 语言',
  ' Uploader': ' 上传者',
  ' Tags': ' 标签',
  'Show File Search': '显示文件搜索',
  'Hide File Search': '隐藏文件搜索',
  'Select a file to upload, then hit File Search. All public galleries containing this exact file will be displayed.': '请选择要搜索的图像文件后点击“文件搜索”。将列出包含此文件的所有公开图库。',
  'File Search': '文件搜索',
  'For color images, the system can also perform a similarity lookup to find resampled images.': '对于彩色图像，系统还可以执行相似性查询以找到重采样过的图像。',
  ' Use Similarity Scan': ' 使用相似性查询',
  ' Only Search Covers': ' 仅搜索封面',
  'The keyword ': '关键词 ',
  ' is short and will be searched as an exact tag only.': ' 太短，因此只会搜索精确匹配的标签。',
  'The term ': '关键词 ',
  ' uses unsupported syntax or is otherwise not valid.': ' 无效或使用了不支持的语法。',
  'The provided date is invalid or outside the range of posted galleries.': '提供的日期无效或超出已发布图库的日期范围。',
  'The page range minimum cannot be above 1000.': '页数最小值最多为 1000。',
  'The page range maximum cannot be below 10.': '页数最大值至少为 10。',
  'Your page range filter is too narrow.': '页数范围差至少为 20。',
  'You provided too many keywords. Use fewer keywords, or combine keywords with quotes. (Ignored ': '使用的关键词过多。请减少关键词或使用引号组合关键词。(已忽略 ',
  'No hits found': '什么也没有',
  'No unfiltered results found.': '没有未过滤的结果',
  'Disable Filters': '禁用过滤器',
  '<< First': '<< 首页',
  '< Prev': '< 上一页',
  '< Jump': '< 跳页',
  '< Seek': '< 搜寻',
  'Jump/Seek': '跳页/搜寻',
  'Seek >': '搜寻 >',
  'Jump >': '跳页 >',
  'Next >': '下一页 >',
  'Last >>': '末页 >>',
  'date or offset': '日期或偏移量',
  'Enter a year or date in YYYY, (YY)YY-MM or (YY)YY-MM-DD format to seek to, or the number of days to jump backwards or forwards, or a number followed by w, m and y to jump weeks, months or years respectively.': '请输入要跳转的年份或日期，格式为 YYYY，(YY)YY-MM 或 (YY)YY-MM-DD；\r或者输入要向前或向后跳转的天数，输入数字后可以加 w，m，y 分别跳转周，月，年',
  'Set the date to seek from or to.': '设置要跳转的日期',
  'Use Date Selector': '日期选择器',
  Minimal: '最小化',
  'Minimal+': '最小化 + 关注标签',
  Compact: '紧凑 + 标签',
  Extended: '扩展',
  Thumbnail: '缩略图',
  Published: '发布时间',
  Title: '标题',
  Uploader: '上传者',
  'reclass:': '重新分类：',
  'language:': '语言：',
  'parody:': '原作：',
  'character:': '角色：',
  'group:': '社团：',
  'artist:': '艺术家：',
  'cosplayer:': 'Coser：',
  'female:': '女性：',
  'male:': '男性：',
  'mixed:': '混合：',
  'other:': '其他：',
  'temp:': '临时：',
  '(Disowned)': '(已放弃)',
  'No torrents available': '无可用种子',
  'Show torrents': '查看种子',
  'It is the dawn of a new day!': '新的一天开始了！',
  'Reflecting on your journey so far, you find that you are a little wiser.': '回想一下你迄今为止的旅程，你发现你更聪明了。',
  'You gain ': '你获得了 ',
  ' EXP, ': ' 经验，',
  ' Credits, ': ' Credits，',
  ' Credits!': ' Credits！',
  ' Credits and ': ' Credits 和 ',
  ' GP!': ' GP！',
  ' GP and ': ' GP 和 ',
  ' Hath!': ' Hath！',
  'You have encountered a monster!': '你遇到了怪物！',
  'Click here to fight in the HentaiVerse.': '点击此处进入 HentaiVerse 战斗',
  'Favorites 0': '收藏夹 0',
  'Favorites 1': '收藏夹 1',
  'Favorites 2': '收藏夹 2',
  'Favorites 3': '收藏夹 3',
  'Favorites 4': '收藏夹 4',
  'Favorites 5': '收藏夹 5',
  'Favorites 6': '收藏夹 6',
  'Favorites 7': '收藏夹 7',
  'Favorites 8': '收藏夹 8',
  'Favorites 9': '收藏夹 9',
  'Create New': '新建',
  Rename: '重命名',
  Cancel: '取消',
  Close: '关闭',
  Confirm: '确定',
  Save: '保存',
  None: '无',
  Yes: '是',
  No: '否',
  'No (Private)': '否 (私有)',
  'No (Expunged)': '否 (已删除)',
  'No (Deleted)': '否 (已移除)',
  'No (Replaced)': '否 (已替换)',
  'The site is currently in Read Only/Failover Mode. Some functionality will not be available. Details may be available on ': '网站当前处于只读/故障转移模式，部分功能会不可用。详情请关注 ',
  'The site is currently in Read Only Mode. This page is therefore not available.': '网站当前处于只读模式，因此本页面不可用。',
  'This content is not available in Russia.RU': '此内容在俄罗斯 (RU) 不可用'
}, [[/^(\d+) pages?$/, '$1 页'], [/^Found about ([\d,]+) results?./, '找到约 $1 个结果。'], [/^Found ([\d,]+\+?) results?./, '找到 $1 个结果。'], [/^Found hundreds of results./, '找到数百结果。'], [/^Found thousands of results./, '找到数千结果。'], [/^Found many results./, '找到许多结果。'], [/\s?Filtered ([\d,]+) galler(ies|y) from this page.\s?/, '已从此页面过滤 $1 个结果。'], [/\s?Excluded ([\d,]+) galler(ies|y) from this page.\s?/, '已从此页面排除 $1 个结果。'], [/\s?Excluded ([\d,]+) galler(ies|y) and filtered ([\d,]+) galler(ies|y) from this page.\s?/, '已从此页面排除 $1 个结果，过滤 $3 个结果。']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/exchange.ts

merge(/^\/exchange\.php\?/, undefined, {
  'The Hath Exchange': 'Hath 交易',
  'The GP Exchange': 'GP 交易',
  'Last 8 Hours (per kGP)': '最近 8 小时 (每 kGP)',
  'Last 24 Hours (per kGP)': '最近 24 小时 (每 kGP)',
  'Last 8 Hours (per Hath)': '最近 8 小时 (每 Hath)',
  'Last 24 Hours (per Hath)': '最近 24 小时 (每 Hath)',
  'Buy Hath': '买进 Hath',
  'Sell Hath': '卖出 Hath',
  'Buy GP': '买进 GP',
  'Sell GP': '卖出 GP',
  '\n\t\t\t\tCount: ': '数量：',
  ' Hath \xA0\n\t\t\t\tBid Price/Hath: ': ' Hath \xA0 买入单价：',
  ' Hath \xA0\n\t\t\t\tAsk Price/Hath: ': ' Hath \xA0 卖出单价：',
  'Buy Hath!': '买进 Hath',
  'Sell Hath!': '卖出 Hath',
  ' kGP \xA0\n\t\t\t\tBid Price/kGP: ': ' kGP \xA0 买入单价：',
  ' kGP \xA0\n\t\t\t\tAsk Price/kGP: ': ' kGP \xA0 卖出单价：',
  'Buy GP!': '买进 GP',
  'Sell GP!': '卖出 GP',
  Spread: '挂单交易',
  'Recent Transactions': '最近成交',
  'Bid (Buyers)': '买单',
  'Ask (Sellers)': '卖单',
  Time: '时间',
  Seller: '卖家',
  Buyer: '买家',
  Volume: '成交量',
  'Unit Cost': '单价',
  High: '最高',
  Low: '最低',
  Avg: '平均',
  Vol: '成交'
}, [[/^Available: ([\d,]+) (\w+)$/, '可用：$1 $2']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/favorites.ts

merge(/^\/favorites\.php/, undefined, {
  'Show All Favorites': '显示所有收藏夹',
  'Order: ': '排序：',
  'Published Time': '发布时间',
  'Favorited Time': '收藏时间',
  Favorited: '收藏时间',
  'Favorited:': '收藏于：',
  'Delete Selected': '删除选中收藏',
  'Change Category': '移动到'
}, [[/^Note: /, '备注：']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/gallery.ts

merge(/^\/g\//, undefined, {
  'Contact Uploader': '联系上传者',
  'Posted:': '发布于：',
  'Parent:': '父级：',
  'Visible:': '显示：',
  'Language:': '语言：',
  'Japanese \xA0': '日语 \xA0',
  'English \xA0': '英语 \xA0',
  'Chinese \xA0': '汉语 \xA0',
  'Dutch \xA0': '荷兰语 \xA0',
  'French \xA0': '法语 \xA0',
  'German \xA0': '德语 \xA0',
  'Hungarian \xA0': '匈牙利语 \xA0',
  'Italian \xA0': '意大利语 \xA0',
  'Korean \xA0': '韩语 \xA0',
  'Polish \xA0': '波兰语 \xA0',
  'Portuguese \xA0': '葡萄牙语 \xA0',
  'Russian \xA0': '俄语 \xA0',
  'Spanish \xA0': '西班牙语 \xA0',
  'Thai \xA0': '泰语 \xA0',
  'Vietnamese \xA0': '越南语 \xA0',
  'This gallery has been translated from the original language text.': '此图库已从原始语言翻译',
  'This gallery is a rewrite, which means that a new text has been made up based on the visual content, but with little regard to the original language text.': '此图库存在内容改写，这意味着根据视觉内容创作了新的文本，与原始文本关联不大',
  'File Size:': '文件大小：',
  'Length:': '页数：',
  'Favorited:': '收藏：',
  Never: '从未',
  Once: '1 次',
  'Rating:': '评分：',
  'Not Yet Rated': '还没有评分',
  'Thanks for rating!': '感谢评分！',
  'Rating failed.': '评分失败。',
  ' Add to Favorites': ' 添加到收藏夹',
  'A Quick Note About Tagging': '关于标签系统的简单说明',
  'While tagging is relatively straight-forward, there are a number of established guidelines that determine when adding a particular tag is proper and when it is not. Before you put any significant amount of effort into it, we therefore ask that you skim through the ': '虽然打标签相对简单，但有许多既定准则可以确定何时添加特定标签是正确的。因此，在您投入其中之前，我们要求您阅读',
  'Basic Tagging Guidelines': '基本标签指南',
  ' and ': '和',
  'Fetish Listing': '恋物标签列表',
  '. This will likely save both you and the tagging moderators from doing unnecessary work. In particular, you should note the following:': '。这能有效避免您和标签版主进行不必要的工作。特别需要注意以下几点：',
  '- These are galleries, not individual images. ': '● 这些是「图库」而非单张图像，',
  'Do not tag stuff that is only featured in a few images.': '请勿标记仅出现在少量图像中的内容。',
  '- If a tag is ambiguous or frequently misused, you may have to specify a ': '● 如果某个标签不明确或经常被误用，则可能需要指定',
  namespace: '命名空间',
  '; ': '，',
  'see the Wiki': '参见 Wiki',
  '.': '。',
  '- The ': '● 您对标签的影响',
  power: '权重',
  ' with which you can affect tagging is determined by a number of factors, such as your account age and whether or not you are active on the ': '取决于多种因素，例如您的帐户资历、您是否活跃于',
  forums: '论坛等',
  '- The forums is also where ': '● 论坛也是',
  'everything about tagging is discussed': '讨论标签相关内容',
  '. If you have any comments, suggestions or questions about tagging, this is where you should take it.': '的地方。如果您对标签有任何意见、建议或问题，可以在这里讨论。',
  'Alright Already': '好的',
  'Vote Up': '顶',
  'Vote Down': '踩',
  'Withdraw Vote': '撤销投票',
  'Show Tagged Galleries': '含有此标签的图库',
  'Show Tag Definition': '显示标签定义',
  'Add New Tag': '添加新标签',
  'Enter new tags, separated with comma': '输入新标签，使用半角逗号分隔',
  Tag: '打标签',
  'No tags have been added for this gallery yet.': '当前图库还没有标签。',
  'This gallery has been replaced; tags can no longer be added on this version.': '当前图库已被替换，不允许在此版本添加新的标签。',
  'Report Gallery': '举报图库',
  'Archive Download': '归档下载',
  'Petition to Expunge': '申请删除',
  'Expunge Petition Sent': '已发送删除申请',
  'Show Expunge Log': '显示删除日志',
  'Petition to Rename': '申请重命名',
  'Rename Petition Sent': '已发送重命名申请',
  'Show Gallery Stats': '查看统计',
  'Multi-Page Viewer': '多页查看器',
  'There are newer versions of this gallery available:': '此图库有更新的版本可用：',
  'Back to Gallery': '返回图库',
  '4 rows': '4 行',
  '10 rows': '10 行',
  '20 rows': '20 行',
  '40 rows': '40 行',
  Normal: '普通',
  Large: '大图',
  'Contact Poster': '联系评论者',
  'Uploader Comment': '上传者评论',
  'Score ': '分数 ',
  'Vote+': '顶',
  'Vote-': '踩',
  'Last edited on ': '最后编辑于 ',
  'click to show all': '显示全部',
  'Post New Comment': '发送新评论',
  'Enter your comments here, then hit Post Comment. If the last comment posted is yours, this will be appended to that post.': '在此处输入您的评论，然后点击发表评论。如果最后一条评论是您的，则新评论会被附加到最后一条评论下。',
  'Post Comment': '发表评论',
  'Gallery not found. If you just added this gallery, you may have to wait a short while before it becomes available.': '没有找到图库。如果您刚刚添加了此图库，可能需要等待一段时间后才能变得可用。',
  'This gallery has been removed or is unavailable.': '此图库已被删除或无法使用。',
  'You will be redirected to the front page momentarily.': '您将在几秒后返回首页。',
  '(Click here to continue)': '(点此继续)',
  'Please wait...': '请稍候...',
  'Sorry about that.': '非常抱歉。',
  'Content Warning': '内容警告',
  'This gallery has been flagged as ': '此图库已被标记为',
  'Offensive For Everyone': '“对所有人具有攻击性”',
  '. Due to its content, it should not be viewed by anyone.': '。基于其内容，任何人都不应观看。',
  '(And if you choose to ignore this warning, you lose all rights to complain about it.)': '(如果您选择无视这一警告，您就失去了所有投诉的权利)',
  'View Gallery': '浏览图库',
  'Get Me Outta Here': '带我离开这里',
  'Never Warn Me Again': '不再提醒'
}, [[/^(\d+) times$/, '$1 次'], [/^Average: ([\d.]+)$/, '平均值：$1'], [/^Rate as ([\d.]+) stars?$/, '$1 星'], [/^Torrent Download \((\d+)\)$/, '种子下载 ($1)'], [/^, added (\d\d\d\d-\d\d-\d\d \d\d:\d\d)$/, '，更新于 $1'], [/^Page (\d+): /, '第 $1 页：'], [/^Posted on (\d\d \w+ \d\d\d\d, \d\d:\d\d) by:\s*$/, '评论时间：$1 \xA0作者：'], [/^Posted on (\d\d \w+ \d\d\d\d, \d\d:\d\d)\s*/, '评论时间：$1'], [/^There (is|are) ([\d,]+) more comments? below the viewing threshold - $/, '还有 $2 条评论尚未显示 - '], [/^This gallery is unavailable due to a copyright claim by (.*)\.$/, '由于 $1 提出的版权要求，此图库无法使用']]);
merge(/^\/g\/\w+\/\w+\/.*act=expunge/, undefined, {
  'Submit New Expunge Petition': '提交新的删除申请',
  'Specify a valid objective reason why this gallery should be expunged.': '请说明申请删除此图库的客观原因。',
  ' This gallery is a duplicate of equal or lower quality of an earlier posted gallery.': '此图库是之前发布的图库的质量相同或较低的副本。',
  ' A newer higher-quality and clearly marked copy of this gallery has been uploaded.': '此图库的更高质量和标记清楚的副本已上传。',
  ' This gallery contains either illicit content like child porn or anything else forbidden by the ': '此图库包含非法内容，如儿童色情或其他列于',
  ', or otherwise falls under the ': '的禁止内容，或列于',
  'Expunge Guidelines': '删除指南',
  ' (specify below).': '的内容 (在下方详细描述)。',
  ' This gallery contains either illicit content like child porn or anything else that has been banned.': '此图库包含非法内容，如儿童色情或其他已被禁止的内容。',
  ' Content has been defaced by adding content-obstructing scanmarks, censorship or advertisements beyond what is present in the original artist release, or has been intentionally degraded to the point where legibility is an issue.': '图库内容被污损，添加了与内容无关的扫描水印、审查或广告，超出了原作者发布的内容或被故意降低画质，以至于影响了易读性。',
  'Enter a reason for this expunge here. Note that submitting petitions with subjective reasons along the line of "I hate this content/artist/uploader/etc" are NOT valid and can cause account penalties/restrictions.': '在此处输入删除的详细原因。请注意，“我讨厌此内容/艺术家/上传者”等主观理由是无效的，并且可能导致帐户处罚/限制。',
  'Enter the URL of the conflicting gallery, if applicable.': '如有必要，在此处输入冲突图库的 URL。',
  'Create New Petition': '提交新申请',
  'Cancel Expunge Petition': '撤回删除申请',
  'You must specify a valid expunge type to start new expunge petition.': '您必须选择一个删除类型才能提交新的删除申请。',
  'You must provide a reason to start a new expunge petition.': '您必须提供一个理由才能提交新的删除申请。',
  'You must provide a link to the conflicting gallery to start a new expunge petition of this type.': '您必须提供冲突图库的链接才能提交此类型的删除申请。',
  'Pending Expunge Petition': '待处理的删除申请',
  'Active Expunge Petition': '完成的删除申请',
  'Rejected Expunge Petition': '否决的删除申请',
  'Active Expunge Petition (Pending Appeal)': '完成的删除申请 (申诉中)',
  'Revoked Expunge Petition': '撤销的删除申请',
  'Submitted:': '提交于：',
  'Expunge Type:': '删除类型：',
  Duplicate: '重复',
  Replaced: '已替换',
  Forbidden: '违规内容',
  Defaced: '污损',
  'Expunge Reason:': '删除原因：',
  'Conflict Gallery:': '冲突图库：',
  'Appeal Reason:': '申诉原因：',
  ', who added:': '，并评论',
  'Add a comment with this vote (optional)': '为投票添加一个评论 (可选)',
  'Vote +': '支持',
  'Vote -': '反对',
  'You have already voted ': '您已为此申请投出',
  FOR: '支持',
  AGAINST: '反对',
  ' this expunge petition.': '票',
  ' this appeal.': '票',
  'This petition will be ': '此申请将被',
  'This appeal will take effect in approximately ': '此申请将被撤销，除非在 ',
  ACTIVATED: '激活',
  REJECTED: '否决',
  REVOKED: '撤销',
  ' in approximately ': '，除非在 ',
  ' unless sufficiently upvoted.': ' 内有足够的支持票',
  ' unless sufficiently downvoted.': ' 内有足够的反对票',
  'This petition was ': '此申请已被',
  'This expunge petition is active and prevents the gallery from being listed by default.': '此删除申请已激活，图库已在列表中默认隐藏。',
  'If you have an objective reason for why this gallery should not have been expunged, you can initiate an appeal below.': '如果您有客观原因说明不应该删除此图库，可以在下方提出申诉。',
  'Appeals must not be submitted if the gallery should be expunged but the wrong expunge type was used.': '如果图库应该被删除但使用了错误的删除类型，则不得提交申诉。',
  'Note that submitting invalid appeals can lead to account restrictions/penalities.': '请注意，提交无效申诉可能会导致帐户受到限制/处罚。',
  'Enter a valid reason for why this expunge petition should be revoked here.': '请在此处输入应撤销此删除申请的正当理由。',
  'Create New Appeal': '提交新申诉',
  'An appeal has been submitted for this expunge petition.': '已针对此删除申请提出申诉。',
  'You cannot currently start an expunge for this gallery.': '您目前无法为此图库提交删除申请。',
  'You cannot start additional expunges on this gallery.': '您无法为此图库提交更多删除申请。',
  'This petition is being processed and can no longer be voted on.': '此申请正在处理，无法继续投票。',
  'New expunges for this gallery can currently only be started by trusted users.': '目前只有可信用户能为此图库提交新的删除申请。'
}, [[/^(\d\d\d\d-\d\d-\d\d \d\d:\d\d) by (.*)$/, '$1 由 $2'], [/^on (\d\d\d\d-\d\d-\d\d \d\d:\d\d) by (.*)$/, '投票于 $1 由 $2'], [/^(\d+) minutes?$/, '$1 分钟'], [/^ on (\d\d\d\d-\d\d-\d\d \d\d:\d\d)$/, '，于 $1']]);
merge(/^\/g\/\w+\/\w+\/.*report=/, undefined, {
  'Report Type': '举报类型',
  '[Select a complaint type...]': '[请选择一个举报类型...]',
  Content: '内容',
  'DMCA/Copyright Infringement': 'DMCA / 侵犯版权',
  'Child Pornography': '儿童色情',
  'Other Illicit Content': '其他非法内容',
  Technical: '技术',
  'Excessive Updates': '频繁更新',
  'Reversion/Split/Undisown Request': '回退/拆分/恢复所有权请求',
  'If you log on with an account, we will remember your provided contact details.': '如果您使用帐户登录，我们将记住您提供的联系信息。',
  'We remember and automatically fill in any previous contact details you have entered.': '我们会记住并自动填充您曾经输入的联系信息。',
  'Your email address': '您的电子邮件地址',
  'Please provide a working email address.': '请提供有效的电子邮件地址。',
  'Your full legal name': '您的全名',
  'Aliases and pseudonyms cannot be used.': '不能使用别名和假名。',
  "Copyright holder's full name": '版权所有者的全名',
  'Enter if you are not the copyright holder. You must be an authorized agent.': '如果您不是版权所有者，请输入。您必须是授权代理。',
  'Company Name': '公司名称',
  Optional: '可选',
  'Phone Number': '电话号码',
  Address: '地址',
  'Your contact address': '您的联系地址',
  City: '城市',
  'Your city of residence': '您居住的城市',
  'State / Province': '州 / 省',
  'Your state or province of residence, if applicable': '您居住的州或省，如果适用',
  Country: '国家',
  'Your country of residence': '您居住的国家',
  'Describe the original work': '描述原作',
  'Describe the nature of the copyrighted work.': '描述版权作品的性质。',
  'Include links to original work or evidence of source material.': '包括原作或源材料的链接。',
  'Please describe the nature of this work and provide any relevant links.': '请描述此作品的性质并提供任何相关链接。',
  'Digital signature': '数字签名',
  'Enter your name to sign this submission': '输入您的姓名以签署此提交',
  Acknowledgement: '确认',
  "By submitting this form, you attest, under penalty of perjury, that you have a good faith belief that use of the material in this report is not authorized by the copyright owner, its agent, or the law; AND you are authorized to act on behalf of the copyright owner; AND you understand that you may be liable for any damages, including costs and attorneys' fees, if you knowingly materially misrepresent reported material.": '通过提交此表单，您声明，根据伪证处罚，您有充分的信心相信本报告中的材料未经版权所有者、其代理人或法律授权；并且您有权代表版权所有者行使权利；并且您了解，如果您故意提供错误的材料，您的利益可能会因此受到损害，包括支出和律师费。',
  'Send Report': '发送报告',
  'Report Details': '报告详情',
  'Please describe the illicit content of this gallery. Include the specific pages where the content in question can be found.': '请描述此图库的非法内容。包括可以找到有问题内容的特定页面。',
  'Details of illicit content and what pages you found it on. Using this form for copyright-related requests or anything else that is not actual illicit content can get you blocked from using this site.': '非法内容的详细信息以及发现位置。如果使用此表单进行与版权相关的请求或其他任何与实际非法内容无关的请求，可能会导致您无法继续使用本网站。',
  'Provide any relevant details. If the gallery has excessive updates that are not allowed under the community guidelines, it will be locked for further updates.': '提供任何相关细节。图库频繁更新不符合社区指南，会被锁定以防止继续更新。',
  'Please provide additional details.': '请提供详细信息。',
  'Provide any relevant details. If valid content has been removed from the gallery, it will be reverted. If valid content has been replaced with other valid content, it will be split into two separate galleries.': '提供任何相关细节。如果图库中的有效内容被删除，则会被恢复。如果有效内容被其他有效内容替换，将被拆分成两个单独的图库。'
}, []);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/gallerypopups.ts

merge(/^\/gallerypopups\.php\?.*act=rename/, undefined, {
  'Uploader:': '上传者：',
  'Roman Script': '罗马音',
  'Japanese Script': '日文',
  'Not Set': '未设置',
  'Blank Vote': '空投票',
  ' New': ' 新',
  Submit: '提交'
});
merge(/^\/gallerypopups\.php\?.*act=addfav/, undefined, {
  'Choose a favorite category to save this gallery under. You can also add a note to it if you wish.': '请选择一个分类保存您的收藏，您也可以添加一些备注。',
  'Favorite Note (Max 200 Characters)': '收藏备注 (最多 200 字符)',
  'Add to Favorites': '添加到收藏',
  'Remove from Favorites': '从收藏中移除',
  'Apply Changes': '应用更改'
}, [[/(\d+) \/ (\d+) favorite note slots? used./, '已使用 $1 个备注，共 $2 个。']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/hathperks.ts

merge(/^\/hathperks\.php/, undefined, {
  'By running the Hentai@Home client, you will over time gain special bonus points known as ': '通过运行 Hentai@Home 客户端，您会随着时间的推移获得特殊的奖励积分，即 ',
  '. These are rewards for people who help keeping this site free, fast and responsive by donating bandwidth and computer resources, and can be exchanged here for ': '。这是给予捐献带宽和计算机资源，帮助网站保持自由与快速的人的奖励，可以在本页面兑换 ',
  ', which grant beneficial effects on E-Hentai Galleries and in the HentaiVerse.': '，以提升 E-Hentai 和 HentaiVerse 体验。',
  'If running H@H is not an option, you can exchange Credits for Hath at the ': '如果您无法运行 H@H，可以在这里使用 Credits 交换 Hath：',
  'While the Hath Perks for the HentaiVerse cannot be obtained in any other way, most of the ones that are specific for Galleries will also get unlocked by making a donation on the ': '虽然用于 HentaiVerse 的 Hath Perks 不能通过其他方法获取，但关于图库的大部分 Hath Perks 还可以通过',
  'Donation Screen': '捐赠',
  '. These will be refunded if you buy them for Hath, and later make a qualifying donation. There is also an option to "adopt" H@H clients that will grant you Hath over time as if you were running it yourself.': '获取。如果您已经使用 Hath 购买，在达成符合条件的捐赠后将获得退款。此外还有一个“领养” H@H 客户端的选项，它会随着时间的推移而授予您 Hath，就好像自己运行它一样。',
  'You currently have ': '您现在拥有 ',
  ' Hath.': ' Hath。',
  ' Activated!': ' 已激活！',
  Description: '描述',
  Obtained: '已获得',
  Purchase: '购买',
  'Free with a $20 donation.': '捐赠 $20 免费解锁',
  'Free with a $50 donation.': '捐赠 $50 免费解锁',
  'Free with a $100 donation.': '捐赠 $100 免费解锁',
  'Ads-Be-Gone': '广告不见了',
  'Makes ads be gone.': '让广告消失。',
  'Source Nexus': '原始之力',
  'Unlocks the Original Images functionality on E-Hentai Galleries. This allows you to browse most files with the original, non-resampled version.': '解锁 E-Hentai 图库的原始图像功能，这允许您直接浏览大部分图像的原始非重采样版本。',
  'Multi-Page Viewer': '多页查看器',
  'Unlocks the Multi-Page Viewer function on E-Hentai Galleries. This allows you to view all images from a gallery on one page. (': '解锁 E-Hentai 图库的多页查看器功能，这允许您在单个页面上查看图库中的所有图像。(',
  demo: '演示',
  'More Thumbs': '更多缩略图',
  'Increases the maximum number of thumbnail rows to 10.': '将最大缩略图行数增加到 10。',
  'Thumbs Up': '超多缩略图',
  'Further increases the maximum number of thumbnail rows to 20.': '将最大缩略图行数增加到 20。',
  'All Thumbs': '全部缩略图',
  'Further increases the maximum number of thumbnail rows to 40.': '将最大缩略图行数增加到 40。',
  'More Pages': '更多页面',
  'Increases all limits on how many pages you can view by a factor of two.': '将图像限制变为原来的 2 倍。',
  'Lots of Pages': '超多页面',
  'Increases all limits on how many pages you can view by a factor of five.': '将图像限制变为原来的 5 倍。',
  'Too Many Pages': '全部页面',
  'Increases all limits on how many pages you can view by a factor of ten.': '将图像限制变为原来的 10 倍。',
  'More Favorite Notes I': '更多收藏备注 I',
  'Increases the number of favorite note slots to 10000.': '将收藏备注限制增加到 10000。',
  'More Favorite Notes II': '更多收藏备注 II',
  'Increases the number of favorite note slots to 25000.': '将收藏备注限制增加到 25000。',
  'Paging Enlargement I': '页面扩大 I',
  'Increases the number of results you can show per page on the index, search and torrent pages to 50.': '将索引、搜索和种子页面的结果数量变为 50。',
  'Paging Enlargement II': '页面扩大 II',
  'Increases the number of results you can show per page on the index, search and torrent pages to 100.': '将索引、搜索和种子页面的结果数量变为 100。',
  // https://ehwiki.org/wiki/Hath_Perks/Chinese
  'Postage Paid': '邮费已付',
  'You no longer have to pay postage or CoD fees on messages sent through MoogleMail.': '您使用莫古利邮局可免收邮费和货到付款手续费。',
  'Vigorous Vitality': '生机勃勃',
  'Increases your base health by 10%.': '增加您的基础生命值 10%。',
  'Effluent Ether': '溢流以太',
  'Increases your base mana by 10%.': '增加您的基础魔力值 10%。',
  'Suffusive Spirit': '心灵坚强',
  'Increases your base spirit by 10%.': '增加您的基础灵力值 10%。',
  'Resplendent Regeneration': '辉煌再起',
  'Increases your in-combat regeneration by 50%.': '增强您战斗中的再生能力 50%。',
  'Enigma Energizer': '谜之劲量',
  'Doubles the bonus from the riddlemaster, and increases duration to 50 turns.': '加倍御谜士的奖励，持续回合数增加至 50 回合。',
  'Yakety Sax': '叶克蒂·萨克斯',
  'Monsters will never catch you when fleeing.': '您逃跑时不会被怪物抓到。',
  'Soul Catcher': '灵魂捕手',
  'Get ten free soul fragments per day.': '每天可得到十片免费的灵魂碎片。',
  'These are added automatically if you have opened HV at some point during the past 30 days.': '如果您最近 30 天内还有开启游戏将会自动增加。',
  'Extra Strength Formula': '特强配方',
  'Happy Pills are twice as effective at improving monster morale.': '快乐药丸会加倍恢复怪物的士气值。',
  "That's Good Eatin'": '这倒是挺好吃的！',
  'Increases monster food recovery amount by 20%.': '增加怪物食物的饱足感 20%。',
  'Coupon Clipper': '食利者',
  '10% discount on all purchases at the Item Shop.': '在道具店的所有购物享 10% 折扣。',
  'Long Gone Before Daylight': '黎明之前',
  'The first energy drink used in a day gives twice the normal amount of stamina.': '每天的第一瓶能量饮料恢复量加倍。',
  'Dark Descent': '黑暗后裔',
  "Halve the required number of amnesia shards for reseting an item's potential.": '重置装备潜能的重铸碎片所需数量减半。',
  'Eminent Elementalist': '元素大师',
  'Increases effective Elemental Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础元素魔法熟练度的 10% 会增加到有效熟练度里。',
  'Divine Warmage': '圣战法师',
  'Increases effective Divine Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础神圣魔法熟练度的 10% 会增加到有效熟练度里。',
  'Death and Decay': '死亡凋零',
  'Increases effective Forbidden Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础黑暗魔法熟练度的 10% 会增加到有效熟练度里。',
  'Evil Enchantress': '邪恶的女巫',
  'Increases effective Deprecating Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础减益魔法熟练度的 10% 会增加到有效熟练度里。',
  'Force of Nature': '大自然的力量',
  'Increases effective Supportive Magic Proficiency by 10% of your natural base proficiency.': '您自身的基础增益魔法熟练度的 10% 会增加到有效熟练度里。',
  'Manehattan Project': '曼哈顿计划',
  'Significantly boosts the damage output of the Orbital Friendship Cannon.': '大幅提升「友情小马炮」的杀伤力。',
  'Follower of Snowflake': '雪花的信徒',
  'Displays your unyielding devotion to Snowflake, the Goddess of Loot and Harvest.': '雪花 ─ 专司战利品与收获的女神。宣示您对她不屈不挠的奉献精神。',
  'Thinking Cap': '深思',
  'Increases EXP gain by 25%. For calculation purposes, this bonus is added to the HentaiVerse training bonus.': '所有取得的经验值提升 25%。为计算方便，此奖励被合并到 HentaiVerse 训练奖励。',
  Mentats: '晶算师',
  'Increases this EXP bonus to 50%.': '提升经验值奖励至 50%。',
  'Learning Chip': '学习晶片',
  'Increases this EXP bonus to 75%.': '提升经验值奖励至 75%。',
  'Cybernetic Implants': '神经植入物',
  'Increases this EXP bonus to 100%.': '提升经验值奖励至 100%。',
  'Innate Arcana I': '天赋奥术 I',
  'Applies a 10% upkeep discount on autocast spells.': '维持自动施法所需魔力减少10%。',
  'Innate Arcana II': '天赋奥术 II',
  'Increases the upkeep discount on autocast spells to 20%.': '维持自动施法所需魔力减少20%。',
  'Innate Arcana III': '天赋奥术 III',
  'Increases the upkeep discount on autocast spells to 30%.': '维持自动施法所需魔力减少30%。',
  'Innate Arcana IV': '天赋奥术 IV',
  'Increases the upkeep discount on autocast spells to 40%.': '维持自动施法所需魔力减少40%。',
  'Innate Arcana V': '天赋奥术 V',
  'Increases the upkeep discount on autocast spells to 50%.': '维持自动施法所需魔力减少50%。',
  'Crystarium I': '水晶矿脉 I',
  'Whenever a monster drops a crystal in the HentaiVerse, you will receive an additional bonus crystal.': '在 HentaiVerse 里每当一只怪物掉落一颗水晶时，您将会再获得一颗水晶作为追加奖励。',
  'Crystarium II': '水晶矿脉 II',
  'Further increases the number of crystals received per drop to three.': '进一步提高水晶掉落数量至三倍。',
  'Crystarium III': '水晶矿脉 III',
  'Further increases the number of crystals received per drop to five.': '进一步提高水晶掉落数量至五倍。',
  'Crystarium IV': '水晶矿脉 IV',
  'Further increases the number of crystals received per drop to seven.': '进一步提高水晶掉落数量至七倍。',
  'Crystarium V': '水晶矿脉 V',
  'Further increases the number of crystals received per drop to ten.': '进一步提高水晶掉落数量至十倍。',
  'Tokenizer I': '令牌技师 I',
  'Doubles the chance of random mob token drops.': '打怪的令牌掉落率变成双倍。',
  'Tokenizer II': '令牌技师 II',
  'Triples the chance of random mob token drops.': '打怪的令牌掉落率变成三倍。',
  'Tokenizer III': '令牌技师 III',
  'Quadruples the chance of random mob token drops.': '打怪的令牌掉落率变成四倍。',
  'Hoarder I': '囤积者 I',
  'The first 200 equips placed in storage do not count towards your equipment limit.': '放置于仓库的前 200 件装备不计入您的装备数量限制。',
  'Hoarder II': '囤积者 II',
  'Increases the equipment storage allowance to 400 equips.': '将装备数量限制增加到 400。',
  'Hoarder III': '囤积者 III',
  'Increases the equipment storage allowance to 600 equips.': '将装备数量限制增加到 600。',
  'Hoarder IV': '囤积者 IV',
  'Increases the equipment storage allowance to 800 equips.': '将装备数量限制增加到 800。',
  'Hoarder V': '囤积者 V',
  'Increases the equipment storage allowance to 1000 equips.': '将装备数量限制增加到 1000。',
  'Repair Bear Mk.1': '修理熊 Mk.1',
  'The latest invention from Moogle Dynamics, the Repair Bear will follow you around and help you keep your equipment in good shape at all times. This reduces effective equipment wear by half.': '莫古利动力学的最新发明，修理熊会随侍在侧帮助您的装备随时保持良好状态。有效装备耗损程度将减少一半。',
  'Repair Bear Mk.2': '修理熊 Mk.2',
  'Further hones the skills of your Repair Bear, making it better at maintaining your equipment. Effective equipment wear is reduced to 25% of normal.': '进一步磨练您的修理熊的技巧，使它精于维护您的装备。有效装备耗损程度减少为正常值的 25%。',
  'Repair Bear Mk.3': '修理熊 Mk.3',
  'Trains your Repair Bear to the penultimate level, making those pesky forge visits (almost) a distant memory. Effective equipment wear is reduced to 10% of normal.': '将您的修理熊培训至完全体，让那些烦人的锻造次数 (几乎) 成为遥远的记忆。有效装备耗损程度减少为正常值的 10%。',
  'Repair Bear Mk.4': '修理熊 Mk.4',
  'The pinnacle of Repair Bear Technology, providing the ultimate in-the-field preventive equipment maintenance. Equipment wear is fully eliminated, and defeat durability loss is cut by half.': '修理熊科技的顶尖之作，提供这门领域最高端的预防性装备维护技术。装备耗损完全消除，被击倒时的耐久度损耗减半。',
  'Dæmon Duality I': '双重守护精灵 I',
  'Increases attack damage and magic damage by 10%.': '提升攻击伤害和魔法伤害各 10%。',
  'Dæmon Duality II': '双重守护精灵 II',
  'Increases attack damage and magic damage by 15%.': '提升攻击伤害和魔法伤害各 15%。',
  'Dæmon Duality III': '双重守护精灵 III',
  'Increases attack damage and magic damage by 20%.': '提升攻击伤害和魔法伤害各 20%。',
  'Dæmon Duality IV': '双重守护精灵 IV',
  'Increases attack damage and magic damage by 25%.': '提升攻击伤害和魔法伤害各 25%。',
  'Dæmon Duality V': '双重守护精灵 V',
  'Increases attack damage and magic damage by 30%.': '提升攻击伤害和魔法伤害各 30%。',
  'Dæmon Duality VI': '双重守护精灵 VI',
  'Increases attack damage and magic damage by 35%.': '提升攻击伤害和魔法伤害各 35%。',
  'Dæmon Duality VII': '双重守护精灵 VII',
  'Increases attack damage and magic damage by 40%.': '提升攻击伤害和魔法伤害各 40%。',
  'Dæmon Duality VIII': '双重守护精灵 VIII',
  'Increases attack damage and magic damage by 45%.': '提升攻击伤害和魔法伤害各 45%。',
  'Dæmon Duality IX': '双重守护精灵 IX',
  'Increases attack damage and magic damage by 50%.': '提升攻击伤害和魔法伤害各 50%。'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/hentaiathome.ts

merge(/^\/hentaiathome\.php\??$/, undefined, {
  'Hentai@Home Clients': 'Hentai@Home 客户端',
  'H@H Region': 'H@H 地区',
  'Current Network Load': '当前网络负载',
  'Hits/sec': '命中/秒',
  Coverage: '覆盖率',
  'Hits/GB': '命中/GB',
  Quality: '质量',
  'North and South America': '北美洲和南美洲',
  'Europe and Africa': '欧洲和非洲',
  'Asia and Oceania': '亚洲和大洋洲',
  'Chinese Dominion': '中国大陆',
  Global: '全球',
  '\n\tCurrent Network Load shows how much raw bandwidth is currently used to serve images. This includes requests served by H@H as well as direct requests from the image servers.': '当前网络负载显示当前用于提供图像的原始带宽量。这包括 H@H 服务的请求以及来自图像服务器的直接请求。',
  '\n\tH@H Miss% shows the percentage of requests for the region that would have gone to a H@H client if one was available, but where no client was ready to serve the request.': 'H@H 缓存未命中% 显示此区域没有 H@H 客户端能为 H@H 请求提供服务的百分比。',
  '\n\tCoverage denotes the average number of times a static file range partition can be found within a given region, indicating the total available storage capacity.': '覆盖率表示此区域内一组文件的平均存在次数，代表着总可用存储量。',
  '\n\tHits/GB shows the average number of hits per minute per gigabyte of allocated disk space for all online clients in the region for the last 24 hours.': '命中/GB 显示过去 24 小时内此区域所有在线客户端分配的每 GB 磁盘空间每分钟的平均命中次数。',
  'Your Active Clients': '您的活动客户端',
  'To add more clients, ': '要添加更多客户端，请',
  'PM Tenboro': '联系 Tenboro',
  '. Make sure to read the requirements first to make sure that you qualify. Include the specs for the client in the message, and specify whether it is a home connection or a VPS/Dedicated. Each client requires its own unique public IPv4 address to run, and must either be reachable directly from the internet, or have a port forwarded. These are technical requirements, and it is not possible to make any exceptions.': '。请务必先阅读要求以确保您符合资格。在消息中包含客户端的规格，并说明它是家庭连接还是 VPS/独立服务器。每个客户端都需要拥有唯一的公共 IPv4 地址才能运行，并且必须可以直接从 Internet 访问，或者使用端口转发。这些都是技术要求，不可能有任何例外。',
  Client: '客户端',
  Status: '状态',
  Created: '创建于',
  'Last Seen': '最后在线于',
  'Files Served': '提供的文件',
  'Client IP': '客户端 IP',
  Port: '端口',
  Version: '版本',
  'Max Speed': '最大速度',
  Trust: '信任',
  Hitrate: '命中率',
  Hathrate: 'Hath 产出率',
  Country: '国家/地区',
  Online: '在线',
  Offline: '离线',
  'Not available when offline': '离线状态下不可用',
  'Apply for H@H participation': '参与申请 H@H',
  'For information on how to participate in the Hentai@Home Project, please refer to the ': '有关如何参与 Hentai@Home 项目的信息，请参阅 ',
  'Hentai@Home Project FAQ': 'Hentai@Home 项目常见问题解答 (英文)',
  '. Make sure that you have read and understand this BEFORE you submit an application. If you need to add more than one client, or if you have a headless server that cannot run SpeedTest, you have to ': '。在提交申请之前，请确保您已阅读并理解此内容。如果您需要添加多个客户端，或者您有一台无法运行 SpeedTest 的无头服务器，则必须',
  '. Otherwise, use the form below.': '。否则，请使用下面的表格。',
  'Max Outgoing Speed': '最大出站速率',
  'The maximum outgoing speed you want to use for this client.': '此客户端允许的最大出站 (上传) 速度。',
  'This should be less than or equal to your connection speed.': '此速度应当小于等于您的连接速度。',
  'Max Transfer per Hour': '每小时最大传输量',
  'The maximum total outgoing data transfer the client can use per hour.': '客户端每小时可使用的最大传出数据总量。',
  ' MB/hour': ' MB/小时',
  'Disk Cache Size': '磁盘缓存大小',
  'The maximum allowed disk space usage for the image cache.': '允许缓存占用的最大磁盘空间。',
  'Speed Test': '速度测试结果',
  'Go to ': '前往 ',
  ' and run a test against your closest server. After the test completes, paste the result URL here.\n\t\t\t': ' 使用距离最近的测速服务器进行测试。将测速结果 URL 粘贴在此处。',
  'AT LEAST 80 Mbit/s UPLOAD ': '要求：至少 80 Mbps 上传速度 ',
  AND: '和',
  ' 80 Mbit/s DOWNLOAD speed required.': ' 80 Mbps 下载速度',
  'Submit Application': '提交申请',
  'If this is a headless server that cannot run speedtest, contact ': '如果是一台无法运行 SpeedTest 的无头服务器，请联系 ',
  'BOTH measurements in my test above are at least 80 Mbit/s *': '我的测速两个值均大于 80 Mbps *',
  'This client will be run on a computer/server that is online 24/7 **': '此客户端将在一台 24 小时在线的计算机/服务器上运行 **',
  'If your connection speed is below the requirement, the resources taken up by tracking the client outweight those saved by having it in the network.': '如果链接速度低于要求，追踪客户端所消耗的资源将超过您客户端的贡献。',
  'This does not mean that you cannot restart the computer for updates or turn it off when you go on a vacation. It does however mean that if you shut it down at night, running H@H is not possible.': '您可以重启计算机进行系统更新，或者在去度假时关闭它。但是如果您每晚都需要关闭它，那它不适合运行 H@H。',
  'If the auto-detected country is wrong, contact Tenboro to have an override applied. Include the correct country, client ID and IP address in your message, and ': '如果自动检测的国家/地区错误，请联系 Tenboro 以进行更改。在消息中包含正确的国家/地区、客户端 ID 和 IP 地址，并',
  'make sure to keep your client running': '确保您的客户端保持运行',
  '. Having the client set to the wrong country will make it perform worse than it would otherwise do. If the country is shown in ': '。位于错误的国家/地区的客户端的性能表现将不如预期。如果国家/地区显示为 ',
  red: '红色',
  ' that means it has been moved outside of its home region and will not be assigned new ranges. Contact Tenboro if you need to change the home region.': '，则意味着它已被迁移出其所在地区，不会再被分配新的范围。如果您需要更改所在地区，请联系 Tenboro。',
  'Free Archive Quota: ': '免费的存档配额：',
  ', measured in a 168-hour sliding window. Clients must be ': '，按照最近 168 小时的在线时间进行计算。客户端必须保持',
  healthy: '健康',
  ' and must have been running for more than 24 hours straight to qualify.': '并运行超过 24 小时才能获得资格。',
  'Client Download': '客户端下载',
  'The current version of Hentai@Home is ': 'Hentai@Home 的当前版本是',
  '. You can find the release notes for this version ': '。此版本的发行说明见',
  here: '发行说明 (英文)',
  File: '文件',
  Size: '大小',
  'Source Code': '源代码',
  'Please verify that the size and cryptographic hashes correspond to the file you download. For more information about file validation, see these links: ': '请验证您下载的文件的大小和哈希值与上方给出的数值相对应。有关文件验证的更多信息，请参阅以下链接 (英文)：',
  'Hentai@Home is an Open Source project released under the GNU General Public Licence v3. The source code and build scripts for Windows and Linux-like systems can be found above.': 'Hentai@Home 是在 GNU 通用公共许可证 v3 下发布的开源项目。Windows 和类 Linux 系统的源代码和构建脚本可以在上面找到。',
  'Unfortunately, we cannot accept clients with less than 80 Mbit/s outgoing speed.': '抱歉，我们无法接受出站速率低于 80 Mbps 的客户端。',
  'Unfortunately, we cannot accept clients that are frequently offline.': '抱歉，我们无法接受经常离线的客户端。'
}, [[/^([\d.]+) \/ min$/, '$1 / 分钟'], [/^([\d.]+) \/ day$/, '$1 / 天'], [/^([\d.]+) ([KMGTP]B)\/hour$/, '$1 $2/小时'], [/^([\d.]+) ([KMGTP]B) per week$/, '每周 $1 $2'], [/^Must be at least ([\d.]+) ([KMGTP]B)\/s$/, '不小于 $1 $2/s'], [/^Must be at least ([\d.]+) ([KMGTP]B)\/hour, or 0 for unlimited.$/, '必须至少为 $1 $2/小时，填 0 表示无限制'], [/^ Must be at least ([\d.]+) ([KMGTP]B). More is better, but space must be dedicated.$/, '至少为 $1 $2。越多越好，但空间必须专用。'], [/^Max Burst Speed must be at least ([\d.]+) ([KMGTP]B)\/s.$/, '最大出站速率必须至少为 $1 $2/s。'], [/^Transfer Limit must be 0 or at least ([\d.]+) ([KMGTP]B)\/hour.$/, '传输量必须至少为 $1 $2/小时。'], [/^Disk Space must be at least ([\d.]+) ([KMGTP]B).$/, '磁盘空间必须至少为 $1 $2。']]);
merge(/^\/hentaiathome\.php\?.*act=settings/, undefined, {
  'Client ID:': '客户端 ID：',
  'Client Key:': '客户端 Key：',
  'Current Value: ': '现值：',
  'New Value: ': '新值：',
  'Port for Incoming Connections': '监听端口',
  'Can be 443 (recommended) or most numbers between 1024 and 65534. This port must be opened in your firewall, and forwarded from any NAT-based cable/xDSL modems or routers you connect to the internet through.': '可以使用 443 (推荐) 或 1024~65534 的大部分端口。此端口必须在您的防火墙中打开，并经由您连接到 Internet 的任何基于 NAT 的电缆/xDSL 调制解调器或路由器转发。',
  'Note: The port cannot be changed while the client is running.': '注意：客户端运行时不能更改端口。',
  'Client Name': '客户端名称',
  'You can set a custom name for this client here. This will be used in the various listings this client appears in.': '您可以在这里为此客户端设置自定义名称。它会用于此客户端出现的各种列表中。',
  'Maximum Upload Rate': '最大上传速率',
  'Turning on the client-side speed limit makes the client enforce this as the maximum speed, which reduces the burstiness of the load. This will increase CPU usage and can reduce the performance of the client. You should only enable this if H@H noticeably affects your home network performance.': '打开客户端侧速度限制会使客户端以设置的最大速度运行，从而减少负载的突发性。但这会增加 CPU 使用率，降低客户端的性能。仅当 H@H 明显影响您的家庭网络性能时才应启用此功能。',
  'Static Range allocation is limited to 1 per 5 KB/s.': '每 1 组静态范围至少 5 KB/s。',
  ' KBytes/s': ' KB/s',
  ' Enable Client-Side Speed Limit (recommended only for home networks)': ' 启用客户端侧的速度限制 (仅建议家庭网络开启)',
  'Note: 1 KB/s or KBps (Kilo': '注意：1 KB/s 或 KBps (千',
  bytes: '字节',
  ' per Second) is equivalent to 8 Kb/s or Kbps (Kilo': '每秒) 相当于 8 Kb/s 或 Kbps (千',
  bits: '比特',
  ' per Second). Internet speeds are typically advertised as the latter (Mbps or Mbit/s), and this is also what Speedtest uses, so make sure you use the right one. Do not set this higher than the upload bandwidth of your internet connection.': '每秒)。Internet 速度通常被宣传为后者（Mbps 或 Mbit/s），Speedtest也使用这种表示方式，因此请确保使用正确的速度。您不应将此设置为高于 Internet 连接的上行带宽。',
  'To reduce the upload rate for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.': '降低该客户端的上传速率需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',
  'Maximum Disk Cache Size': '最大磁盘缓存大小',
  'How much disk space to reserve for this client. Must be at least 10 GiB, but the more you assign the better your client will perform. The reserved space must always be available.': '希望为此客户端保留多少磁盘空间。最少 10 GiB，但是保留的越多，客户端表现的越好。保留空间必须始终可用。',
  'Static Range allocation is limited to 1 per 250 MiB.': '静态范围分配限制为每 250 MiB 磁盘空间 1 组。',
  ' Verify cache integrity on next startup': ' 下次启动时验证缓存完整性',
  'To reduce the disk space for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.': '降低该客户端所需的磁盘空间需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',
  'Advanced Settings': '高级设置',
  'The settings below are optional advanced settings.': '以下设置项为可选的高级设置',
  'Reset Client Key': '重置客户端 Key',
  'If you believe your client key has been compromised, you can reset the key by checking this box. You will have to re-enter the key the next time the client starts.': '如果您认为您的客户端 Key 已泄露，可以通过选中复选框来重置密钥。下次客户端启动时，您必须重新输入密钥。',
  ' Reset Client Key': ' 重置客户端 Key',
  'Monthly Data Transfer Target': '每月数据流量限制',
  Unlimited: '无限',
  ' GB per month': ' GB 每月',
  'If you have a monthly data cap, you can provide it here. If the system detects that you are likely to exceed this target, it will reduce the priority of ranges on your client to reduce the load, but it is not guaranteed to stay below this value. Leave at 0 to limit with max speed alone. Must be at least 1000 GB if set.': '如果你有每月数据限额，请在此设置。如果系统检测到你可能超过此限额，它将会降低客户端上的静态范围的优先度，以降低网络负载，但并不能保证低于设定值。保留为 0 表示仅限制最大速度。最低限制为 1000 GB。',
  'Static Range allocation is limited to 1 per 5 GB.': '每 1 组静态范围至少 5 GB。',
  'To reduce the monthly data transfer target for this client below this level, you must first shut it down, then check the "Remove static ranges if necessary" option.': '降低该客户端的每月数据流量限制需要先关闭客户端，然后勾选“必要时移除静态范围”选项。',
  'Minimum Free Disk Space': '磁盘最小剩余空间',
  'Use Default': '默认',
  'If this value is set, the client will stop running if the free space on the disk decreases below this value. The client will exit if free space drops below 1 GiB even if this is not set.': '如果设置了此值，则当磁盘上的可用空间低于此值时，客户端会停止运行。即使未设置，当可用空间低于 1 GiB 时，客户端也会退出。',
  'Reset Static Ranges': '重置静态范围',
  'Your client will be assigned ranges of files to cache and serve. This toggle clears these ranges. ': '您的客户端会被分配到一段文件范围用于缓存和提供服务。此复选框用于重置这些范围。',
  'DO NOT DO THIS UNLESS YOU LOST YOUR CACHE. IT WILL NOT FIX OTHER CLIENT ISSUES. DOING THIS REGULARLY WILL REVOKE YOUR CLIENT.': '除非您丢失了缓存，否则不要执行此操作。它不会修复客户端的其他任何问题。定期执行此操作将吊销您的客户端。',
  'This client currently has ': '此客户端当前被分配了 ',
  ' Reset Static Ranges': ' 重置静态范围',
  'Warning: You should ': '警告：',
  never: '不要',
  ' reset your static ranges ': '重置您的静态范围，',
  unless: '除非',
  ' the cache has been deleted or is otherwise lost. It should ': '缓存已被删除或以其他方式丢失。如果缓存因任何原因被清除，则',
  always: '必须',
  ' be reset if the cache has been cleared for whatever reason, or the client will encounter serious trust issues.': '重置静态范围，否则客户端将遇到严重的信任问题。',
  'Miscellaneous Toggles': '杂项开关',
  'Various toggles to optimize client behavior.': '用于优化客户端行为的各种开关。',
  ' Disable logging to disk. This will reduce disk activity by a small amount. Errors are still logged.': ' 停止向磁盘写入日志。启用后能轻微减少磁盘活动。错误仍会被记录。',
  ' Run in low-memory mode. This will somewhat reduce memory requirements, but will lead to increased disk activity.': ' 以低内存模式运行。启用后能在一定程度上减少内存占用，但会导致磁盘活动增加。',
  ' Use this client as your designated H@H Downloader. Only necessary if you have multiple clients.': ' 将此客户端用作指定的 H@H 下载器。仅当您有多个客户端时才需要。',
  'Changes will be applied within roughly two minutes. If you decrease the disk cache space, it will not take effect until next restart.': '更改将在大约两分钟内生效。如果减少了磁盘缓存空间，则需要重新启动才会生效。',
  ' Allow removing static ranges if necessary (client must be shut down)': '必要时允许移除静态范围（需要重启客户端）',
  'Apply Settings': '应用设置',
  '[Back to Overview]': '[返回总览]'
}, [[/^This is the maximum speed the client can use to serve files, measured in kilobytes per second. Must be at least ([\d.]+) ([KMGTP]B)\/s. Actual utilization will be at most 80% of this over time.$/, '这是客户端可以用来提供文件的最大速度，以每秒千字节为单位。必须至少为 $1 $2/s。随着时间的推移，利用率最多会达到此值的 80%。'], [/^This client currently has ([\d.]+) static ranges assigned. Each requires at least 250 MiB of disk space, so you cannot reduce it below ([\d.]+) GiB without removing ranges.$/, '此客户端已分配 $1 组静态范围。每组需要至少 250 MiB 磁盘空间，所以您无法减少至低于 $2 GiB，除非移除静态范围。'], [/^This client currently has ([\d.]+) static ranges assigned. Each requires at least 5 KB\/s of upload rate, so you cannot reduce it below ([\d.]+) KB\/s without removing ranges.$/, '此客户端已分配 $1 组静态范围。每组需要至少 5 KB/s 上传速率，所以您无法减少至低于 $2 KB/s，除非移除静态范围。'], [/^This client currently has ([\d.]+) static ranges assigned. Each requires at least 5 GB of monthly data transfer, so you cannot reduce it below ([\d.]+) GB without removing ranges.$/, '此客户端已分配 $1 组静态范围。每组需要至少 5 GB 的每月数据流量，所以您无法减少至低于 $2 GB，除非移除静态范围。'], [/^ static range\(s\) assigned: P(\d+) = $/, ' 组静态范围：P$1 = '], [/^([\d.]+) ([KMGTP]B)\/hour$/, '$1 $2/小时'], [/^([\d.]+) ([KMGTP]B)\/s$/, '$1 $2/s']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/home.ts

merge(/^\/home\.php/, undefined, {
  'Image Limits': '图像限制',
  'You are currently at ': '当前：',
  ' towards a limit of ': '，限制为 ',
  '.': '。',
  'Reset Cost: ': '重置限制花费：',
  'Reset Limit': '重置限制',
  'Nothing to reset.': '没有可重置的限制。',
  'Image limit was successfully reset.': '图像限制已成功重置。',
  'You will be returned to the Management Interface momentarily.': '您将在几秒后返回管理界面。',
  '(Click here to continue)': '(点此继续)',
  'Please wait...': '请稍候...',
  EHTracker: 'EH 种子服务器',
  ' uploaded': '上传量',
  downloaded: '下载量',
  'up/down ratio': '分享率',
  'torrent completes': '完成种子',
  'gallery completes': '完成图库',
  seedmins: '做种时长',
  'Show My Torrents': '显示我的种子',
  'If you misplace any of your personalized torrents, hit the button below to reset your key.': '如果您错误地分发了私有种子，请点击下面的按钮重置您的 Key。',
  'This will immediately invalidate all of your personalized torrents in play.': '这会立即注销您全部的私有种子。',
  'Your current key is: ': '您当前的 Key 是：',
  'Reset Torrent Key': '重置种子 Key',
  'Total GP Gained': '获得的总 GP',
  'GP from gallery visits': 'GP 来自图库浏览',
  'GP from torrent completions': 'GP 来自种子完成',
  'GP from archive downloads': 'GP 来自存档下载',
  'GP from Hentai@Home': 'GP 来自 Hentai@Home',
  '\n\t\t\tYou are currently not featured on any toplists...\n\t\t': '您当前没有上榜...',
  'You are currently: ': '您现在是：',
  'on the ': ' (在',
  ' toplist': '榜)',
  'Moderation Power': '愿力',
  'Current Moderation Power': '当前愿力',
  Base: '基础',
  Awards: '奖励',
  Tagging: '打标签',
  Level: '等级',
  'Forum Activity': '论坛活跃',
  'Uploads/H@H': '上传 / H@H',
  'Account Age': '账户资历',
  '(capped to 25)': '(不超过 25)'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/image.ts

merge(/^\/(s|mpv)\//, undefined, {
  'Show all galleries with this file': '显示所有包含此图像的图库',
  'Get forum image link': '生成用于论坛的图像链接',
  'Click here if the image fails loading': '重新加载图像',
  'Close Image Viewer': '关闭图像查看器',
  'Go Fullscreen - F11 or ESC to cancel': '全屏 - F11 或 ESC 退出',
  'Align Left, Scale Down Only': '左对齐，仅当图像大于浏览器宽度时缩放',
  'Align Center, Scale Down Only': '居中对齐，仅当图像大于浏览器宽度时缩放',
  'Align Center, Scale To Fit': '居中对齐，始终缩放图像以适应浏览器宽度',
  'Show Thumbnail Pane': '显示缩略图侧栏',
  'Hide Thumbnail Pane': '隐藏缩略图侧栏',
  'Reload broken image': '重新加载图像',
  'Open image in normal viewer': '在普通查看器中打开图像',
  'Show galleries with this image': '显示所有包含此图像的图库',
  'Get forum link to image': '生成用于论坛的图像链接'
}, [[/^Page (\d+) - /, '第 $1 页 - '], [/^Download original (.*?) source$/, '下载原图 ($1)'], [/^Download original (.*?)B$/, '下载原图 $1B']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/karma.ts

merge(/^\/karma\.php/, undefined, {
  '\n\tYou are about to imbue ': '您将要赋予 ',
  ' with ': ' ',
  ' karma.': ' karma。',
  '\n\tIf you wish, you can leave a short message below.\n': '\n\t如果您愿意，可以在下方简短留言。\n',
  Imbue: '赋予',
  '\nYou cannot imbue yourself with Karma!\n': '您不能赋予自己 Karma！',
  'Please wait longer between karma imbue attempts.': '请在赋予 Karma 之间等待更长时间。',
  'You have imbued ': '你向 ',
  'Your Karma Influence Power has been drained, and is now ': '您的 Karma 影响力已消耗，现在为 ',
  '\nYou have imbued this member with karma too recently.': '您最近赋予过此用户 Karma。',
  'Time remaining before you can imbue this member again:': '距离下次可赋予此用户的时间为：'
}, [[/^ with ([\d.]+) points? of karma.$/, '赋予了 $1 点 Karma。'], [/^([\d.]+) days and ([\d.]+) hours$/, '$1 天 $2 小时'], [/^([\d.]+) hours and ([\d.]+) minutes$/, '$1 小时 $2 分钟'], [/^([\d.]+) days$/, '$1 天'], [/^([\d.]+) hours$/, '$1 小时'], [/^([\d.]+) minutes$/, '$1 分钟']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/lofi.ts

merge(/^\/lofi\//, undefined, {
  '< Prev Page': '< 上一页',
  'Next Page >': '下一页 >',
  'E-Hentai Lo-Fi Galleries: The Mobile Hentai Experience': 'E-Hentai 低保真图库：移动 Hentai 体验',
  'Posted:': '发布：',
  'Category:': '类别：',
  'Tags:': '标签：',
  'Rating:': '评分：',
  'Go To First Page': '前往第一页',
  '\n\tImage Resolution: \xA0 ': '图像分辨率：',
  'Back to Gallery Page': '返回图库页',
  'Back to Front Page': '返回首页'
}, [[/^(\d\d\d\d-\d\d-\d\d \d\d:\d\d) by (.*)$/, '$1 \xA0 上传者：$2']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/login.ts

merge(/^\/bounce_login\.php/, undefined, {
  'This page requires you to log on.': '此页面需要登录才能访问',
  'User:': '用户：',
  'Pass:': '密码：',
  'Login!': '登录',
  '\xA0or\xA0': ' 或 ',
  Register: '注册'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/logs.ts

merge(/^\/logs\.php/, undefined, {
  Date: '日期',
  Amount: '金额',
  Information: '信息',
  'Total Karma: ': '总 Karma：',
  From: '来自',
  Topic: '主题',
  Comment: '附言',
  'Show Older >': '下一页 >'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/mytags.ts

merge(/^\/mytags/, undefined, {
  'New Tagset': '新建标签集',
  ' Enable': ' 启用',
  '#default': '#默认',
  'Enter a single tag to flag, watch or hide': '输入要标记、关注或隐藏的标签',
  ' Watched': ' 关注',
  ' Hidden': ' 隐藏',
  'Action:': '操作：',
  'Delete Selected': '删除选中项',
  'Confirm Delete': '确认删除',
  'Select All': '全选',
  'Enable flagging and watching for tags in this set': '启用此标签集中标签的标记和关注',
  'Watch galleries with this tag': '关注带有此标签的图库',
  'Hide galleries with this tag': '隐藏带有此标签的图库',
  'Default tag color for this tagset. Tags in this set that do not have a set flag color will use this color. A default color will be used if neither is set.': '此标签集的默认标签颜色。如果此标签集中的标签没有设置颜色，则使用此颜色。如果两者都没有设置，则使用默认颜色。',
  '(optional) The weight of this tag. This is used to order flagged tags if several are present, as well as calculating the contribution of this tag towards the soft tag filter and watching threshold.': '(可选) 此标签的权重。如果存在多个标签，则用于对标记的标签进行排序，同时也用于计算此标签对于软标签过滤器和订阅的权重。'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/news.ts

merge(/^\/news\.php/, undefined, {
  'Latest Site Status Updates': '最新网站状态',
  'You can follow ': '您可以',
  'follow us on Twitter': '在推特上关注我们',
  ' to receive these site status updates if the site is ever unavailable.': '以便在网站不可用时获取网站状态信息。 ',
  'Site Update Log': '网站更新日志',
  'Previous Years: \xA0 ': '往年： ',
  'Show Older News': '显示更早的新闻'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/popular.ts

merge(/^\/popular/, undefined, {
  'Currently Popular Recent Galleries': '当下流行的新图库'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/search.ts

merge(/^\/\?.*f_shash=.*$/, undefined, {
  'Showing results for file:': '正在显示以下文件的搜索结果：',
  'Similarity Scan was disabled for this search. You must start a new search to alter this.': '在本次搜索中，相似性查询已禁用。要更改相似性查询设置，您必须重新搜索。',
  'Similarity Scan was enabled for this search. You must start a new search to alter this.': '在本次搜索中，相似性查询已启用。要更改相似性查询设置，您必须重新搜索。',
  'No file was uploaded, or the uploaded file was invalid.': '没有上传文件，或上传的文件无效',
  'The uploaded file was detected as monotone. Only exact file matches are displayed.': '上传的文件被检测为单色图，仅显示完全匹配的文件'
}, []);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/stats.ts

merge(/^\/stats\.php/, undefined, {
  'Visitor Statistics': '访客统计',
  'Your galleries have had a total of ': '你的图库共计有 ',
  'This gallery has had a total of ': '此图库共计有 ',
  ' visit.': ' 名访客。',
  ' visits.': ' 名访客。',
  Ranking: '名次',
  Score: '分数',
  ' All-Time': '所有时间',
  ' Past Year': '年排行',
  ' Past Month': '月排行',
  ' Yesterday': '日排行',
  'Not in Top 1000': '1000 名以外',
  'Yearly Stats': '年度统计',
  Visits: '访问',
  Hits: '点击',
  'Last 12 Months': '最近 12 个月',
  Jan: '1 月',
  Feb: '2 月',
  Mar: '3 月',
  Apr: '4 月',
  May: '5 月',
  Jun: '6 月',
  Jul: '7 月',
  Aug: '8 月',
  Sep: '9 月',
  Oct: '10 月',
  Nov: '11 月',
  Dec: '12 月',
  'Daily Stats': '每日统计',
  '1st': '1 日',
  '2nd': '2 日',
  '3rd': '3 日',
  '4th': '4 日',
  '5th': '5 日',
  '6th': '6 日',
  '7th': '7 日',
  '8th': '8 日',
  '9th': '9 日',
  '10th': '10 日',
  '11th': '11 日',
  '12th': '12 日',
  '13th': '13 日',
  '14th': '14 日',
  '15th': '15 日',
  '16th': '16 日',
  '17th': '17 日',
  '18th': '18 日',
  '19th': '19 日',
  '20th': '20 日',
  '21st': '21 日',
  '22nd': '22 日',
  '23rd': '23 日',
  '24th': '24 日',
  '25th': '25 日',
  '26th': '26 日',
  '27th': '27 日',
  '28th': '28 日',
  '29th': '29 日',
  '30th': '30 日',
  '31st': '31 日',
  'The number of total visits on your galleries.': '图库总访问次数',
  'The number of total image accesses on your galleries.': '图库中图像访问次数',
  'Back to Gallery': '返回图库'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/tools.ts

merge(/^\/tools\.php\?.*act=track_expunge/, 'repo.e-hentai.org', {
  'State: \xA0 [': '状态： [',
  All: '全部',
  Expunged: '已删除',
  'Revoked/Rejected': '已撤销/已拒绝',
  'Pending All': '待处理',
  'Pending Expunge': '待删除',
  'Pending Appeal': '待申诉',
  'Type: \xA0 ': '类型： ',
  ' Forbidden': ' 违规内容',
  ' Duplicate': ' 重复',
  ' Replaced': ' 已替换',
  ' Defaced': ' 污损',
  ' \xA0 Involving UID: ': ' \xA0 包含 UID：',
  Go: '查询',
  '< Prev Page': '< 上一页',
  'Next Page >': '下一页 >',
  'There are no recent expunges matching this filter.': '没有符合条件的最近删除记录。',
  Active: '已生效',
  Rejected: '已拒绝',
  Revoked: '已撤销',
  'Pending Expunge (Activating)': '待删除 (生效中)',
  'Pending Expunge (Rejecting)': '待删除 (拒绝中)',
  'Pending Appeal (Activating)': '待申诉 (生效中)',
  'Pending Appeal (Rejecting)': '待申诉 (拒绝中)',
  'Expunge Submitted:': '删除提交时间：',
  'Appeal Submitted:': '申诉提交时间：',
  'Expunge Type:': '删除类型：',
  'Conflict Gallery:': '冲突图库：',
  'Expunge Activated:': '删除生效时间：',
  'Expunge Rejected:': '删除拒绝时间：',
  'Expunge Revoked:': '删除撤销时间：'
}, [[/^Forbidden \(([\d+-]+)\)$/, '违规内容 ($1)'], [/^Duplicate \(([\d+-]+)\)$/, '重复 ($1)'], [/^Replaced \(([\d+-]+)\)$/, '已替换 ($1)'], [/^Defaced \(([\d+-]+)\)$/, '污损 ($1)']]);
merge(/^\/tools\.php\?.*act=track_rename/, 'repo.e-hentai.org', {
  '\nFilter: \xA0\n[': '状态： [',
  All: '全部',
  Renamed: '已重命名',
  Pending: '待处理',
  '] \xA0\nInvolving UID:\n': '] \xA0 包含 UID：',
  Go: '查询',
  '< Prev Page': '< 上一页',
  'Next Page >': '下一页 >',
  'No results found': '没有符合条件的记录。',
  'OrgE:': '原始英文标题：',
  'CurE:': '当前英文标题：',
  'OrgJ:': '原始日文标题：',
  'CurJ:': '当前日文标题：',
  '(blank)': '(空)',
  ' for ': ' 支持 ',
  'by ': '由 '
}, []);
merge(/^\/tools\.php\?.*act=taglist/, 'repo.e-hentai.org', {
  'Tagging data for user ': '',
  ' (uid=': ' 的标签数据 (UID = ',
  Started: '发起',
  Voted: '投票',
  January: '一月',
  February: '二月',
  March: '三月',
  April: '四月',
  May: '五月',
  June: '六月',
  July: '七月',
  August: '八月',
  September: '九月',
  October: '十月',
  November: '十一月',
  December: '十二月',
  Year: '年度',
  Total: '总计',
  Tag: '标签',
  Score: '权重',
  Gallery: '图库',
  Timestamp: '时间'
}, [[/^Showing (\d+) recent tags:$/, '最近 $1 个标签：'], [/^Showing the last (\d+) of (\d+) recent tags:$/, '最近 $2 个标签中的最后 $1 个：']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/toplist.ts

merge(/^\/(toplist|home)\.php/, undefined, {
  'Galleries All-Time': '图库总排行',
  'Galleries Past Year': '图库年排行',
  'Galleries Past Month': '图库月排行',
  'Galleries Yesterday': '图库日排行',
  'Uploader All-Time': '上传总排行',
  'Uploader Past Year': '上传年排行',
  'Uploader Past Month': '上传月排行',
  'Uploader Yesterday': '上传日排行',
  'Tagging All-Time': '标签总排行',
  'Tagging Past Year': '标签年排行',
  'Tagging Past Month': '标签月排行',
  'Tagging Yesterday': '标签日排行',
  'Hentai@Home All-Time': 'Hentai@Home 总排行',
  'Hentai@Home Past Year': 'Hentai@Home 年排行',
  'Hentai@Home Past Month': 'Hentai@Home 月排行',
  'Hentai@Home Yesterday': 'Hentai@Home 日排行',
  'EHTracker All-Time': '做种总排行',
  'EHTracker Past Year': '做种年排行',
  'EHTracker Past Month': '做种月排行',
  'EHTracker Yesterday': '做种日排行',
  'Cleanup All-Time': '清理总排行',
  'Cleanup Past Year': '清理年排行',
  'Cleanup Past Month': '清理月排行',
  'Cleanup Yesterday': '清理日排行',
  'Rating & Reviewing All-Time': '评分 & 评论总排行',
  'Rating & Reviewing Past Year': '评分 & 评论年排行',
  'Rating & Reviewing Past Month': '评分 & 评论月排行',
  'Rating & Reviewing Yesterday': '评分 & 评论日排行'
});
merge(/^\/toplist\.php/, undefined, {
  'EHG Toplists': 'EHG 排行榜',
  'Gallery Toplists': '图库排行',
  'Uploader Toplists': '上传排行',
  'Tagging Toplists': '标签排行',
  'Hentai@Home Toplists': 'Hentai@Home 排行',
  'EHTracker Toplists': '做种排行',
  'Cleanup Toplists': '清理排行',
  'Rating & Reviewing Toplists': '评分 & 评论排行',
  'Error: Non-existing toplist.': '错误：排行榜不存在。'
});
merge(/^\/toplist\.php\?tl=1/, undefined, {
  Name: '标题'
});
merge(/^\/toplist\.php\?tl=[2-7]/, undefined, {
  Rank: '排名',
  Score: '得分',
  Name: '用户名'
});
;// CONCATENATED MODULE: ./src/services/ui-translation/data/torrents.ts

merge(/^\/(gallery)?torrents\.php/, undefined, {
  'Status: ': '状态：',
  All: '全部',
  Seeded: '有种',
  Unseeded: '无种',
  ' \xA0 \xA0 \xA0 \xA0 Show: ': ' |  显示：',
  'All Torrents': '全部种子',
  'Only My Torrents': '我的种子',
  'Search Torrents': '搜索种子',
  Added: '添加于',
  'Torrent Name': '种子名',
  Gallery: '图库 ID',
  Size: '文件大小',
  Seeds: '做种',
  Peers: '下载',
  DLs: '完成',
  '\nNote that you cannot add torrents directly to this page. To upload torrents to this system, visit the torrent screen for a gallery.\n': '注意：您无法直接将种子添加到此页面。请在图库中上传。',
  'Posted:': '发布于：',
  'Size:': '文件大小：',
  'Seeds:': '做种：',
  'Peers:': '下载：',
  'Downloads:': '完成：',
  'Uploader:': '上传者：',
  Information: '信息',
  Expunged: '已删除',
  '0 torrents were found for this gallery.': '当前图库还没有种子',
  'New Torrents:': '新种子：',
  '\n\t\tYou can add a torrent for this gallery by uploading it here. The maximum torrent file size is 10 MB.': '您可以在这里上传来为此图库添加种子。最大 Torrent 文件大小为 10 MB。',
  '\n\t\tIf you are creating the torrent yourself, set this as announce tracker: ': '如果您自己创建 Torrent，请将此地址设置为 Announce Tracker：',
  '\n\t\tNote that you have to download the finished torrent from this site after uploading for stats to be recorded.\n\t': '请注意，您必须在上传后从此站点下载已完成的种子，以便记录统计信息。',
  'Upload Torrent': '上传种子',
  'Close Window': '关闭窗口',
  Posted: '发布于',
  DLers: '下载',
  Completes: '完成',
  'Personalized Torrent': '私有种子',
  '(Just For You - this makes sure to record your stats)\n': '(只属于您 - 确保记录您的下载统计信息)',
  'Redistributable Torrent': '可再分发种子',
  '(use if you want a file you can post or give to others)': '(如果您想再发布或提供给其他人使用)',
  'No comments were given for this torrent.': '此种子没有评论',
  'Vote to Expunge': '投票删除',
  'Back to Index': '返回'
}, [[/^Showing ([\d,]+)-([\d,]+) of ([\d,]+)$/, '$1 - $2，共 $3 个结果'], [/^([\d,]+) torrents? (was|were) found for this gallery.$/, '找到了 $1 个种子。']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/uconfig.ts

merge(/^\/uconfig\.php/, undefined, {
  'Selected Profile:': '当前配置：',
  'Delete Profile': '删除配置',
  'Set as Default': '设为默认',
  'Image Load Settings': '图像加载设置',
  'Do you wish to load images through the Hentai@Home Network, if available?': '如果可用，是否希望通过 Hentai@Home 网络加载图像？',
  ' Any client (Recommended)': ' 任意客户端 (推荐)',
  ' Default port clients only (Can be slower. Enable if behind firewall/proxy that blocks outgoing non-standard ports.)': ' 仅使用默认端口的客户端 (可能稍慢。当防火墙或代理阻止非标准端口的流量时启用此项。)',
  ' No [Modern/HTTPS] (Donator only. You will not be able to browse as many pages. Recommended only if having severe problems.)': ' 否 [现代/HTTPS] (仅限赞助者。配额消耗会加快，只有出现严重的问题时才启用。)',
  ' No [Legacy/HTTP] (Donator only. May not work by default in modern browsers. Recommended for legacy/outdated browsers only.)': ' 否 [传统/HTTP] (仅限赞助者。可能无法在现代浏览器中使用，只推荐在过时的浏览器中启用。)',
  'You appear to be browsing the site from ': '看起来您正在 ',
  ' or use a VPN or proxy in this country, which means the site will try to load images from H@H clients in this general geographic region. If this is incorrect, or if you want to use a different region for any reason (like if you are using a split tunneling VPN), you can select a different country below.': ' 浏览此网页，或者使用了此处的 VPN/代理，这意味着网站会尝试通过此区域的 H@H 客户端加载图像。如果此结果不正确，或者您希望通过其他地区的 H@H 客户端加载图像 (例如您正在使用分割隧道 VPN)，可以在下方选择一个不同的区域。',
  '\n\t\tBrowsing Country: ': '浏览区域：',
  'Auto-Detect': '自动检测',
  Afghanistan: 'Afghanistan (阿富汗)',
  'Aland Islands': 'Aland Islands (奥兰群岛)',
  Albania: 'Albania (阿尔巴尼亚)',
  Algeria: 'Algeria (阿尔及利亚)',
  'American Samoa': 'American Samoa (美属萨摩亚)',
  Andorra: 'Andorra (安道尔)',
  Angola: 'Angola (安哥拉)',
  Anguilla: 'Anguilla (安圭拉)',
  Antarctica: 'Antarctica (南极洲)',
  'Antigua and Barbuda': 'Antigua and Barbuda (安提瓜和巴布达)',
  Argentina: 'Argentina (阿根廷)',
  Armenia: 'Armenia (亚美尼亚)',
  Aruba: 'Aruba (阿鲁巴)',
  'Asia/Pacific Region': 'Asia/Pacific Region (亚太地区)',
  Australia: 'Australia (澳大利亚)',
  Austria: 'Austria (奥地利)',
  Azerbaijan: 'Azerbaijan (阿塞拜疆)',
  Bahamas: 'Bahamas (巴哈马)',
  Bahrain: 'Bahrain (巴林)',
  Bangladesh: 'Bangladesh (孟加拉国)',
  Barbados: 'Barbados (巴巴多斯)',
  Belarus: 'Belarus (白俄罗斯)',
  Belgium: 'Belgium (比利时)',
  Belize: 'Belize (伯利兹)',
  Benin: 'Benin (贝宁)',
  Bermuda: 'Bermuda (百慕大)',
  Bhutan: 'Bhutan (不丹)',
  Bolivia: 'Bolivia (玻利维亚)',
  'Bonaire Saint Eustatius and Saba': 'Bonaire Saint Eustatius and Saba (博内尔、圣尤斯特歇斯和萨巴)',
  'Bosnia and Herzegovina': 'Bosnia and Herzegovina (波斯尼亚和黑塞哥维那)',
  Botswana: 'Botswana (博茨瓦纳)',
  'Bouvet Island': 'Bouvet Island (布维岛)',
  Brazil: 'Brazil (巴西)',
  'British Indian Ocean Territory': 'British Indian Ocean Territory (英属印度洋领地)',
  'Brunei Darussalam': 'Brunei Darussalam (文莱)',
  Bulgaria: 'Bulgaria (保加利亚)',
  'Burkina Faso': 'Burkina Faso (布基纳法索)',
  Burundi: 'Burundi (布隆迪)',
  Cambodia: 'Cambodia (柬埔寨)',
  Cameroon: 'Cameroon (喀麦隆)',
  Canada: 'Canada (加拿大)',
  'Cape Verde': 'Cape Verde (佛得角)',
  'Cayman Islands': 'Cayman Islands (开曼群岛)',
  'Central African Republic': 'Central African Republic (中非共和国)',
  Chad: 'Chad (乍得)',
  Chile: 'Chile (智利)',
  China: 'China (中国大陆)',
  'Christmas Island': 'Christmas Island (圣诞岛)',
  'Cocos Islands': 'Cocos Islands (科科斯群岛)',
  Colombia: 'Colombia (哥伦比亚)',
  Comoros: 'Comoros (科摩罗)',
  Congo: 'Congo (刚果)',
  'Congo The Democratic Republic of the': 'Congo The Democratic Republic of the (刚果民主共和国)',
  'Cook Islands': 'Cook Islands (库克群岛)',
  'Costa Rica': 'Costa Rica (哥斯达黎加)',
  "Cote D'Ivoire": "Cote D'Ivoire (科特迪瓦)",
  Croatia: 'Croatia (克罗地亚)',
  Cuba: 'Cuba (古巴)',
  Curacao: 'Curacao (库拉索)',
  Cyprus: 'Cyprus (塞浦路斯)',
  'Czech Republic': 'Czech Republic (捷克共和国)',
  Denmark: 'Denmark (丹麦)',
  Djibouti: 'Djibouti (吉布提)',
  Dominica: 'Dominica (多米尼加)',
  'Dominican Republic': 'Dominican Republic (多米尼加共和国)',
  Ecuador: 'Ecuador (厄瓜多尔)',
  Egypt: 'Egypt (埃及)',
  'El Salvador': 'El Salvador (萨尔瓦多)',
  'Equatorial Guinea': 'Equatorial Guinea (赤道几内亚)',
  Eritrea: 'Eritrea (厄立特里亚)',
  Estonia: 'Estonia (爱沙尼亚)',
  Ethiopia: 'Ethiopia (埃塞俄比亚)',
  Europe: 'Europe (欧洲)',
  'Falkland Islands': 'Falkland Islands (马尔维纳斯群岛)',
  'Faroe Islands': 'Faroe Islands (法罗群岛)',
  Fiji: 'Fiji (斐济)',
  Finland: 'Finland (芬兰)',
  France: 'France (法国)',
  'French Guiana': 'French Guiana (法属圭亚那)',
  'French Polynesia': 'French Polynesia (法属波利尼西亚)',
  'French Southern Territories': 'French Southern Territories (法属南部领地)',
  Gabon: 'Gabon (加蓬)',
  Gambia: 'Gambia (冈比亚)',
  Georgia: 'Georgia (格鲁吉亚)',
  Germany: 'Germany (德国)',
  Ghana: 'Ghana (加纳)',
  Gibraltar: 'Gibraltar (直布罗陀)',
  Greece: 'Greece (希腊)',
  Greenland: 'Greenland (格陵兰)',
  Grenada: 'Grenada (格林纳达)',
  Guadeloupe: 'Guadeloupe (瓜德罗普)',
  Guam: 'Guam (关岛)',
  Guatemala: 'Guatemala (危地马拉)',
  Guernsey: 'Guernsey (根西岛)',
  Guinea: 'Guinea (几内亚)',
  'Guinea-Bissau': 'Guinea-Bissau (几内亚比绍)',
  Guyana: 'Guyana (圭亚那)',
  Haiti: 'Haiti (海地)',
  'Heard Island and McDonald Islands': 'Heard Island and McDonald Islands (赫德岛和麦克唐纳群岛)',
  'Holy See (Vatican City State)': 'Holy See (Vatican City State) (梵蒂冈)',
  Honduras: 'Honduras (洪都拉斯)',
  'Hong Kong': 'Hong Kong (香港特别行政区)',
  Hungary: 'Hungary (匈牙利)',
  Iceland: 'Iceland (冰岛)',
  India: 'India (印度)',
  Indonesia: 'Indonesia (印度尼西亚)',
  Iran: 'Iran (伊朗)',
  Iraq: 'Iraq (伊拉克)',
  Ireland: 'Ireland (爱尔兰)',
  'Isle of Man': 'Isle of Man (马恩岛)',
  Israel: 'Israel (以色列)',
  Italy: 'Italy (意大利)',
  Jamaica: 'Jamaica (牙买加)',
  Japan: 'Japan (日本)',
  Jersey: 'Jersey (泽西岛)',
  Jordan: 'Jordan (约旦)',
  Kazakhstan: 'Kazakhstan (哈萨克斯坦)',
  Kenya: 'Kenya (肯尼亚)',
  Kiribati: 'Kiribati (基里巴斯)',
  Kuwait: 'Kuwait (科威特)',
  Kyrgyzstan: 'Kyrgyzstan (吉尔吉斯斯坦)',
  "Lao People's Democratic Republic": "Lao People's Democratic Republic (老挝)",
  Latvia: 'Latvia (拉脱维亚)',
  Lebanon: 'Lebanon (黎巴嫩)',
  Lesotho: 'Lesotho (莱索托)',
  Liberia: 'Liberia (利比里亚)',
  Libya: 'Libya (利比亚)',
  Liechtenstein: 'Liechtenstein (列支敦士登)',
  Lithuania: 'Lithuania (立陶宛)',
  Luxembourg: 'Luxembourg (卢森堡)',
  Macau: 'Macau (澳门特别行政区)',
  Macedonia: 'Macedonia (马其顿)',
  Madagascar: 'Madagascar (马达加斯加)',
  Malawi: 'Malawi (马拉维)',
  Malaysia: 'Malaysia (马来西亚)',
  Maldives: 'Maldives (马尔代夫)',
  Mali: 'Mali (马里)',
  Malta: 'Malta (马耳他)',
  'Marshall Islands': 'Marshall Islands (马绍尔群岛)',
  Martinique: 'Martinique (马提尼克)',
  Mauritania: 'Mauritania (毛里塔尼亚)',
  Mauritius: 'Mauritius (毛里求斯)',
  Mayotte: 'Mayotte (马约特)',
  Mexico: 'Mexico (墨西哥)',
  Micronesia: 'Micronesia (密克罗尼西亚)',
  Moldova: 'Moldova (摩尔多瓦)',
  Monaco: 'Monaco (摩纳哥)',
  Mongolia: 'Mongolia (蒙古)',
  Montenegro: 'Montenegro (黑山)',
  Montserrat: 'Montserrat (蒙特塞拉特)',
  Morocco: 'Morocco (摩洛哥)',
  Mozambique: 'Mozambique (莫桑比克)',
  Myanmar: 'Myanmar (缅甸)',
  Namibia: 'Namibia (纳米比亚)',
  Nauru: 'Nauru (瑙鲁)',
  Nepal: 'Nepal (尼泊尔)',
  Netherlands: 'Netherlands (荷兰)',
  'New Caledonia': 'New Caledonia (新喀里多尼亚)',
  'New Zealand': 'New Zealand (新西兰)',
  Nicaragua: 'Nicaragua (尼加拉瓜)',
  Niger: 'Niger (尼日尔)',
  Nigeria: 'Nigeria (尼日利亚)',
  Niue: 'Niue (纽埃)',
  'Norfolk Island': 'Norfolk Island (诺福克岛)',
  'North Korea': 'North Korea (朝鲜)',
  'Northern Mariana Islands': 'Northern Mariana Islands (北马里亚纳群岛)',
  Norway: 'Norway (挪威)',
  Oman: 'Oman (阿曼)',
  Pakistan: 'Pakistan (巴基斯坦)',
  Palau: 'Palau (帕劳)',
  'Palestinian Territory': 'Palestinian Territory (巴勒斯坦)',
  Panama: 'Panama (巴拿马)',
  'Papua New Guinea': 'Papua New Guinea (巴布亚新几内亚)',
  Paraguay: 'Paraguay (巴拉圭)',
  Peru: 'Peru (秘鲁)',
  Philippines: 'Philippines (菲律宾)',
  'Pitcairn Islands': 'Pitcairn Islands (皮特凯恩群岛)',
  Poland: 'Poland (波兰)',
  Portugal: 'Portugal (葡萄牙)',
  'Puerto Rico': 'Puerto Rico (波多黎各)',
  Qatar: 'Qatar (卡塔尔)',
  Reunion: 'Reunion (留尼汪)',
  Romania: 'Romania (罗马尼亚)',
  'Russian Federation': 'Russian Federation (俄罗斯)',
  Rwanda: 'Rwanda (卢旺达)',
  'Saint Barthelemy': 'Saint Barthelemy (圣巴泰勒米)',
  'Saint Helena': 'Saint Helena (圣赫勒拿)',
  'Saint Kitts and Nevis': 'Saint Kitts and Nevis (圣基茨和尼维斯)',
  'Saint Lucia': 'Saint Lucia (圣卢西亚)',
  'Saint Martin': 'Saint Martin (圣马丁)',
  'Saint Pierre and Miquelon': 'Saint Pierre and Miquelon (圣皮埃尔和密克隆)',
  'Saint Vincent and the Grenadines': 'Saint Vincent and the Grenadines (圣文森特和格林纳丁斯)',
  Samoa: 'Samoa (萨摩亚)',
  'San Marino': 'San Marino (圣马力诺)',
  'Sao Tome and Principe': 'Sao Tome and Principe (圣多美和普林西比)',
  'Saudi Arabia': 'Saudi Arabia (沙特阿拉伯)',
  Senegal: 'Senegal (塞内加尔)',
  Serbia: 'Serbia (塞尔维亚)',
  Seychelles: 'Seychelles (塞舌尔)',
  'Sierra Leone': 'Sierra Leone (塞拉利昂)',
  Singapore: 'Singapore (新加坡)',
  'Sint Maarten': 'Sint Maarten (荷属圣马丁)',
  Slovakia: 'Slovakia (斯洛伐克)',
  Slovenia: 'Slovenia (斯洛文尼亚)',
  'Solomon Islands': 'Solomon Islands (所罗门群岛)',
  Somalia: 'Somalia (索马里)',
  'South Africa': 'South Africa (南非)',
  'South Georgia and the South Sandwich Islands': 'South Georgia and the South Sandwich Islands (南乔治亚岛和南桑威奇群岛)',
  'South Korea': 'South Korea (韩国)',
  'South Sudan': 'South Sudan (南苏丹)',
  Spain: 'Spain (西班牙)',
  'Sri Lanka': 'Sri Lanka (斯里兰卡)',
  Sudan: 'Sudan (苏丹)',
  Suriname: 'Suriname (苏里南)',
  'Svalbard and Jan Mayen': 'Svalbard and Jan Mayen (斯瓦尔巴和扬马延)',
  Swaziland: 'Swaziland (斯威士兰)',
  Sweden: 'Sweden (瑞典)',
  Switzerland: 'Switzerland (瑞士)',
  'Syrian Arab Republic': 'Syrian Arab Republic (叙利亚)',
  Taiwan: 'Taiwan (中国台湾)',
  Tajikistan: 'Tajikistan (塔吉克斯坦)',
  Tanzania: 'Tanzania (坦桑尼亚)',
  Thailand: 'Thailand (泰国)',
  'Timor-Leste': 'Timor-Leste (东帝汶)',
  Togo: 'Togo (多哥)',
  Tokelau: 'Tokelau (托克劳)',
  Tonga: 'Tonga (汤加)',
  'Trinidad and Tobago': 'Trinidad and Tobago (特立尼达和多巴哥)',
  Tunisia: 'Tunisia (突尼斯)',
  Turkey: 'Turkey (土耳其)',
  Turkmenistan: 'Turkmenistan (土库曼斯坦)',
  'Turks and Caicos Islands': 'Turks and Caicos Islands (特克斯和凯科斯群岛)',
  Tuvalu: 'Tuvalu (图瓦卢)',
  Uganda: 'Uganda (乌干达)',
  Ukraine: 'Ukraine (乌克兰)',
  'United Arab Emirates': 'United Arab Emirates (阿拉伯联合酋长国)',
  'United Kingdom': 'United Kingdom (英国)',
  'United States': 'United States (美国)',
  'United States Minor Outlying Islands': 'United States Minor Outlying Islands (美国本土外小岛屿)',
  Uruguay: 'Uruguay (乌拉圭)',
  Uzbekistan: 'Uzbekistan (乌兹别克斯坦)',
  Vanuatu: 'Vanuatu (瓦努阿图)',
  Venezuela: 'Venezuela (委内瑞拉)',
  Vietnam: 'Vietnam (越南)',
  'Virgin Islands British': 'Virgin Islands British (英属维尔京群岛)',
  'Virgin Islands U.S.': 'Virgin Islands U.S. (美属维尔京群岛)',
  'Wallis and Futuna': 'Wallis and Futuna (瓦利斯和富图纳)',
  'Western Sahara': 'Western Sahara (西撒哈拉)',
  Yemen: 'Yemen (也门)',
  Zambia: 'Zambia (赞比亚)',
  Zimbabwe: 'Zimbabwe (津巴布韦)',
  'Image Size Settings': '图像大小设置',
  'Images are normally resampled to 1280 pixels of horizontal resolution for online viewing. You can select one of the following alternative resolutions.': '通常情况下，图像会被重采样到 1280 像素宽度用于在线浏览，您也可以手动指定重采样分辨率。',
  ' Auto': ' 自动',
  'Use original images instead of the resampled versions? Resampled images will still be used if you select a horizonal resolution different than "Auto" above and the image in question is wider, or if the original image is larger than 10 MiB (or 4 MiB for galleries older than one year).': '在阅读时优先加载原图而非重采样版本？当选择了“自动”以外的分辨率且原图宽度大于设定值，或原图大于 10 MiB (一年前发布的图库 4 MiB) 时，仍会加载重采样版本。',
  ' Prefer resampled images': ' 优先加载重采样版本',
  ' Prefer original images': ' 优先加载原图',
  'While the site will automatically scale down images to fit your screen width, you can also manually restrict the maximum display size of an image. Like the automatic scaling, this does not resample the image, as the resizing is done browser-side. (0 = no limit)': '虽然图像会自动根据窗口缩小，您也可以手动指定最大显示大小。图像仅在浏览器端缩放，并没有被重新采样。(0 为不限制)',
  'Horizontal:': '宽/横向',
  'Vertical:': '高/纵向',
  ' pixels': ' px',
  'Gallery Name Display': '图库显示名称',
  'Many galleries have both an English/Romanized title and a title in Japanese script. Which gallery name would you like as default?': '许多图库都同时拥有英文/罗马音标题和日文标题，您希望默认显示哪一个？',
  ' Default Title': ' 默认标题 (英文/罗马音)',
  ' Japanese Title (if available)': ' 日文标题 (如果有)',
  'Archiver Settings': '归档设置',
  'The default behavior for the Archiver is to confirm the cost and selection for original or resampled archive, then present a link that can be clicked or copied elsewhere. You can change this behavior here.': '默认归档下载方式为手动选择原始或重采样画质，然后手动点击或复制下载链接。您可以在这里修改归档下载方式。',
  ' Manual Select, Manual Start (Default)': ' 手动选择，手动下载 (默认)',
  ' Manual Select, Auto Start': ' 手动选择，自动下载',
  ' Auto Select Original, Manual Start': ' 自动选择原始画质，手动下载',
  ' Auto Select Original, Auto Start': ' 自动选择原始画质，自动下载',
  ' Auto Select Resample, Manual Start': ' 自动选择重采样画质，手动下载',
  ' Auto Select Resample, Auto Start': ' 自动选择重采样画质，自动下载',
  'Front Page / Search Settings': '首页 / 搜索设置',
  'What categories would you like to show by default on the front page and in searches?': '您希望首页和搜索页面默认显示哪些类别？',
  'Which display mode would you like to use on the front and search pages?': '您希望首页和搜索页面使用哪种显示模式？',
  ' Minimal': ' 最小化',
  ' Minimal+': ' 最小化 + 关注标签',
  ' Compact': ' 紧凑 + 标签',
  ' Extended': ' 扩展',
  ' Thumbnail': ' 缩略图',
  'Which display style would you like for the search range indicator?': '您希望搜索范围指示器采用哪种显示样式？',
  ' Normal': ' 普通',
  ' Disabled': ' 禁用',
  'Here you can choose and rename your favorite categories.': '您可以在这里重命名您的收藏夹。',
  'Default sort order for galleries on your favorites page:': '收藏页面的默认排序方式？',
  ' By last gallery update time': ' 以图库最近更新时间排序',
  ' By favorited time': ' 以收藏时间排序',
  'Search Result Count': '搜索结果数',
  'How many results would you like per page for the index/search page and torrent search pages? (Hath Perk: Paging Enlargement Required)': '索引和搜索页面每页显示多少条数据？ (需要 Hath Perk：「页面扩大」)',
  ' 25 results': ' 25 个',
  ' 50 results': ' 50 个',
  ' 100 results': ' 100 个',
  'Thumbnail Settings': '缩略图设置',
  'How would you like the mouse-over thumbnails on the front page to load when using Minimal or Compact display mode?': '在最小化和紧凑列表模式下，您希望鼠标悬停缩略图何时加载？',
  ' On mouse-over (pages load faster, but there may be a slight delay before a thumb appears)': ' 鼠标悬停时 (页面加载快，缩略图加载有延迟)',
  ' On page load (pages take longer to load, but there is no delay for loading a thumb after the page has loaded)': ' 页面加载时 (页面加载时间更长，但是显示的时候无需等待)',
  'You can set a default thumbnail configuration for all galleries you visit.': '图库详情页缩略图设置。',
  'Size: ': '大小：',
  ' Large': ' 大图',
  'Rows:': '行数：',
  'Thumbnail Scaling': '缩略图缩放',
  '%': ' %',
  'Thumbnails on the thumbnail and extended gallery list views can be scaled to a custom value between 75% and 150%.': '在扩展和缩略图列表模式下，图库缩略图可以缩放为 75% 到 150% 之间的自定义值。',
  Ratings: '评分',
  'By default, galleries that you have rated will appear with red stars for ratings of 2 stars and below, green for ratings between 2.5 and 4 stars, and blue for ratings of 4.5 or 5 stars. You can customize this by entering your desired color combination below.': '默认情况下，您评为 2 星及以下的图库会显示为红星，2.5 ~ 4 星显示为绿星，4.5 ~ 5 星显示为蓝星。您可以将其设定为其他颜色组合。',
  'Each letter represents one star. The default RRGGB means R(ed) for the first and second star, G(reen) for the third and fourth, and B(lue) for the fifth. You can also use (Y)ellow for the normal stars. Any five-letter R/G/B/Y combo works.': '每个字母代表一颗星, 默认的 RRGGB 表示第一第二颗星显示为红色 R(ed)，第三第四颗星显示为绿色 G(reen)，第五颗星显示为蓝色 B(lue)。您也可以使用黄色 (Y)ellow。R/G/B/Y 中任何的五个字母组合都是有效的。',
  'Tag Watching Threshold': '标签订阅阈值',
  'Recently uploaded galleries will be included on the watched screen if it has at least one watched tag with positive weight, and the sum of weights on its watched tags add up to this value or higher. This threshold can be set between 0 and 9999.': '您可以将标签加入「我的标签」并设置一个正权重来关注它们。如果一个最近上传的图库所有已关注标签的权重之和大于等于设定值，则它会出现在「订阅」里。此值可以设定为 0 ~ 9999。',
  'Tag Filtering Threshold': '标签过滤阈值',
  'You can soft filter tags by adding them to ': '您可以将标签加入「',
  ' with a negative weight. If a gallery has tags that add up to weight below this value, it is filtered from view. This threshold can be set between 0 and -9999.': '」并设置一个负权重来软过滤它们。如果一个图库所有标签的权重之和小于设定值，则它会被过滤。此值可以设定为 0 ~ -9999。',
  'Show Filtered Removal Count': '显示过滤数量',
  'Show the "Your custom filters removed XX galleries from this page" readout?': '显示“您的过滤器已从此页面移除 XX 个结果”的消息？',
  ' Yes': ' 是',
  ' No': ' 否',
  'Excluded Languages': '排除语言',
  'If you wish to hide galleries in certain languages from the gallery list and searches, select them from the list below.': '如果您希望在图库列表和搜索结果中隐藏某些语言的图库，请从下面的列表中选择它们。',
  'Note that matching galleries will never appear regardless of your search query.': '请注意，无论搜索查询如何，匹配的图库都不会出现。',
  Original: '原始',
  Translated: '翻译',
  Rewrite: '改写',
  All: '所有',
  Japanese: '日语',
  English: '英语',
  Chinese: '汉语',
  Dutch: '荷兰语',
  French: '法语',
  German: '德语',
  Hungarian: '匈牙利语',
  Italian: '意大利语',
  Korean: '韩语',
  Polish: '波兰语',
  Portuguese: '葡萄牙语',
  Russian: '俄语',
  Spanish: '西班牙语',
  Thai: '泰语',
  Vietnamese: '越南语',
  'N/A': '无语言',
  Other: '其他',
  'Excluded Uploaders': '排除上传者',
  'If you wish to hide galleries from certain uploaders from the gallery list and searches, add them below. Put one username per line.': '如果您希望在图库列表和搜索结果中隐藏某些上传者上传的图库，请把他们的用户名填写在下方，每行一个。',
  'Note that galleries from these uploaders will never appear regardless of your search query.': '请注意，无论搜索查询如何，这些上传者上传的图库都不会出现。',
  'You are currently using ': '已使用 ',
  ' of ': '/',
  ' exclusion slots.\n': '。',
  'Viewport Override': '移动端虚拟宽度',
  px: ' px',
  'Allows you to override the virtual width of the site for mobile devices. This is normally determined automatically by your device based on its DPI. Sensible values at 100% thumbnail scale are between 640 and 1400.': '允许您覆盖移动设备的虚拟宽度，默认是根据 DPI 自动计算的，100% 缩略图比例下的合理值在 640 到 1400 之间。',
  'Gallery Comments': '图库评论',
  'Sort order for gallery comments:': '评论排序方式：',
  ' Oldest comments first': ' 最早的评论',
  ' Recent comments first': ' 最近的评论',
  ' By highest score': ' 分数最高',
  'Show gallery comment votes:': '显示评论投票数：',
  ' On score hover or click': ' 悬停或点击时',
  ' Always': ' 总是',
  'Gallery Tags': '图库标签',
  'Sort order for gallery tags:': '图库标签排序方式：',
  ' Alphabetical': ' 按字母排序',
  ' By tag power': ' 按标签权重',
  'Gallery Page Numbering': '图库页码',
  'Show gallery page numbers:\n\t': '在图库详情页缩略图下方显示页码：',
  'Multi-Page Viewer': '多页查看器',
  'Always use the Multi-Page Viewer? There will still be a link to manually start it if this is left disabled.': '总是使用多页查看器？禁用此选项时，仍可以手动启动多页查看器。',
  ' Nope': ' 否',
  ' Yup': ' 是',
  'Multi-Page Viewer Display Style:': '显示样式：',
  ' Align left; Only scale if image is larger than browser width': ' 左对齐；仅当图像大于浏览器宽度时缩放',
  ' Align center; Only scale if image is larger than browser width': ' 居中对齐；仅当图像大于浏览器宽度时缩放',
  ' Align center; Always scale images to fit browser width': ' 居中对齐；始终缩放图像以适应浏览器宽度',
  'Multi-Page Viewer Thumbnail Pane:': '显示缩略图侧栏：',
  ' Show': ' 显示',
  ' Hide': ' 隐藏',
  Apply: '应用',
  'Settings were updated': '设置更新完毕'
}, [[/ \(Default\)$/, ' (默认)']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/upload.ts

var data = {
  'Gallery List': '图库列表',
  'Manage Folders': '管理文件夹',
  'Create Gallery': '创建图库',
  'Create New Gallery': '创建新图库',
  'Unpublished Galleries': '未发布图库',
  'Published Galleries': '已发布图库',
  'Empty Galleries': '空图库',
  'Gallery Name ': '图库名称',
  'Date Added ': '添加时间 ',
  Files: '文件数',
  'Public Category': '发布类别',
  'Available Actions': '操作',
  View: '查看',
  Manage: '管理',
  Publish: '发布',
  Disown: '脱离关系',
  'Collapse Open Folders': '折叠文件夹',
  '+ All': '+ 全选',
  '- All': '- 全不选',
  'Loading folder, please wait...': '正在加载文件夹，请稍候...',
  'Set public category for selected galleries: ': '设置选中的发布分类: ',
  'Move selected galleries to folder: ': '移动到文件夹: ',
  Go: '执行',
  'Folder Name': '文件夹名称',
  '(No folders have been added yet.)': '(尚未创建文件夹)',
  'Display Order': '显示顺序',
  Delete: '删除',
  'New folder name': '新文件夹名称',
  'Create Folder': '创建文件夹',
  'Save and Auto-Reorder': '保存并自动排序',
  'Save Changes': '保存更改',
  'Saving...': '保存中...',
  'New Gallery': '新图库',
  'Main Gallery Title': '主标题',
  'The main english or romanized title for this gallery.': '图库的主标题 (英文或罗马音)。',
  'Main gallery title (English Script)': '主标题 (英语)',
  'Japanese Script Title': '日文标题',
  'The original title in Japanese script, if applicable.': '原始的日文标题 (如果有)。',
  'Original gallery title (Japanese Script) (Optional)': '原始标题 (日语) (可选)',
  'Gallery Category': '图库分类',
  'The publicly listed category for this gallery.': '图库在公开列表中所属的分类。',
  '(Private / Unlisted)': '(私有 / 不公开)',
  'Gallery Language': '图库语言',
  'The primary language for this gallery. Can only be changed here for new unpublished galleries; set with tags for published/updated galleries.': '图库的主要语言。仅新建立且未发布的图库可更改此选项，已发布/已更新的图库需要通过标签系统更改。',
  Common: '常用',
  'Japanese / No Text': '日语 / 无字',
  Chinese: '汉语',
  English: '英语',
  French: '法语',
  Korean: '韩语',
  Portuguese: '葡萄牙语',
  Russian: '俄语',
  Spanish: '西班牙语',
  Textless: '无字',
  Speechless: '无言',
  'Text Cleaned': '文字清除',
  Others: '其他',
  Albanian: '阿尔巴尼亚语',
  Arabic: '阿拉伯语',
  Bulgarian: '保加利亚语',
  Catalan: '加泰罗尼亚语',
  Cebuano: '宿务语',
  Croatian: '克罗地亚语',
  Czech: '捷克语',
  Danish: '丹麦语',
  Dutch: '荷兰语',
  Esperanto: '世界语',
  Finnish: '芬兰语',
  German: '德语',
  Greek: '希腊语',
  Hindi: '印地语',
  Hungarian: '匈牙利语',
  Indonesian: '印尼语',
  Italian: '意大利语',
  Javanese: '爪哇语',
  Latin: '拉丁语',
  Norwegian: '挪威语',
  Persian: '波斯语',
  Polish: '波兰语',
  Romanian: '罗马尼亚语',
  Serbian: '塞尔维亚语',
  Slovak: '斯洛伐克语',
  Swedish: '瑞典语',
  Tagalog: '他加禄语',
  Thai: '泰国语',
  Turkish: '土耳其语',
  Ukrainian: '乌克兰语',
  Vietnamese: '越南语',
  'Official / Textless': '官方 / 无字',
  'This was officially published in this language, or the gallery has no text.': '官方发布于此语言，或者图库无字',
  Translated: '翻译',
  'This is a fan translation based on the original text.': '基于原始文字翻译',
  Rewrite: '改写',
  'This is a fan rewrite with new made-up text.': '使用新的文字改写',
  'Gallery Folder': '图库文件夹',
  'The folder this gallery will be displayed under in the uploader gallery list. This is only used to help you organize your gallery uploads.': '图库文件夹仅在上传者的图库列表中显示，仅用于帮助整理上传的图库。',
  Unsorted: '未分类',
  'or new folder: ': '或新建文件夹：',
  'Uploader Comment': '上传者评论',
  'Any comments or additional relevant information for this gallery. This will always show up as the topmost comment, and cannot be voted down.': '关于此图库的任何评论或其他相关信息。将始终显示在评论的最顶部，并且不能投票。',
  'You can write an optional uploader comment here.': '您可以在此处添加上传者评论。(可选)',
  'Date Added:': '添加时间：',
  'Not created yet': '尚未创建',
  'Date Posted:': '发布时间：',
  'Not published yet': '尚未发布',
  'Uploaded Files:': '上传文件数：',
  'Total Filesize:': '总文件大小：',
  '(empty)': '(空白)',
  'Parent Gallery:': '父级图库：',
  'Child Gallery:': '子图库：',
  'Expunged:': '删除：',
  'Visible:': '可见：',
  'No (Unpublished)': '否 (未发布)',
  'Show Public Gallery': '查看图库',
  'Show Gallery Stats': '查看统计',
  'Delete Gallery': '删除图库',
  'Disown Gallery': '脱离与图库的关系',
  'I have read and agree with the ': '我已阅读并同意',
  'Publish Gallery': '发布图库',
  'Upload Files': '上传文件',
  'Accepted Images: JPG < 20 MB, PNG < 50 MB, GIF < 10 MB. Accepted Archive Formats: ZIP. Max Resolution: 20000 x 20000.': '图像：JPG < 20 MB, PNG < 50 MB, GIF < 10 MB；归档：ZIP。最大分辨率：20000 x 20000。',
  'Max 2,000 files and 10 GB per gallery. Do not upload more than 500MB at a time, less if you have a slow connection.': '每个图库最多包含 2000 张图像或 10 GB。一次上传的大小不应超过 500 MB，如果连接速度较慢，可以尝试以更小归档上传。',
  'Start Upload': '开始上传',
  'Select one or more image or archive files and click Start Upload to add files to this gallery.': '选择一个或多个图像或归档文件，然后点击“开始上传”，以添加文件到此图库。',
  'Uploading...': '上传中...',
  'Starting upload...': '开始上传...',
  'Finished processing ': '已处理 ',
  ' of ': ' / ',
  'Processing...': '正在处理...',
  'Processing ': '正在处理 ',
  'Finishing backend sync...': '正在完成后端同步...',
  '\n\t\tNo files have been added yet\n\t\t': '尚未添加任何文件',
  'Added ': '已添加 ',
  'Revert Changes': '撤销更改',
  'Apply Changes': '应用更改',
  'Automatic Resorting': '自动排序',
  'Select a sorting method...': '选择排序方式...',
  'Remove Exact Duplicates': '删除完全重复的图像',
  'Natural Sort': '自然排序',
  'Lexical Sort': '字典排序',
  'Time Added (Recent First), then Natural Sort': '按添加时间 (最近的在前)，然后按自然排序',
  'Time Added (Recent Last), then Natural Sort': '按添加时间 (最近的在后)，然后按自然排序',
  'Time Added (Recent First), then Lexical Sort': '按添加时间 (最近的在前)，然后按字典排序',
  'Time Added (Recent Last), then Lexical Sort': '按添加时间 (最近的在后)，然后按字典排序',
  'Time Added (Recent First), then Current Order': '按添加时间 (最近的在前)，然后按当前顺序',
  'Time Added (Recent Last), then Current Order': '按添加时间 (最近的在后)，然后按当前顺序',
  'Perform Auto-Sort': '执行自动排序',
  'Natural Sort will sort filenames with numbers in natural ascending order (8, 9, 10, 11, 12) regardless of padding. This is the recommended auto-sorting method.': '自然排序将按数字递增顺序 (8, 9, 10, 11, 12) 排序此图库中的图像。这是推荐的自动排序方式。',
  'Lexical Sort will sort filenames with numbers in strict lexicographic order (1, 10, 11, 12, 2). Unless numbers are zero-padded, this can lead to unexpected results.': '字典排序将按字典顺序 (1, 10, 11, 12, 2) 排序此图库中的图像。若数字不包含前导 0，使用此方式会导致错误的结果。',
  'Time Added Sort will sort the pages based on the creation time of the gallery to which they were first added. For example, sorting by Time Added (Recent First) will sort any files that were added to the current gallery first, followed by the files first added to the previous version of the gallery, and so on.': '按添加时间排序将按照图像第一次添加到图库的时间进行排序。例如，按添加时间 (最近的在前) 排序将按照图像第一次添加到当前图库的时间进行排序，然后按照图像第一次添加到上一个版本图库的时间进行排序，以此类推。',
  'Note that you can always delete the updated gallery and start over if you make a mistake.': '请注意，如果您犯了错误，可以随时删除更新后的图库并重新开始。',
  'Please confirm that you wish to publish the gallery:': '请确认您希望发布图库：',
  'Doing so will lock it for new file additions and modifications. If you wish to add or replace files in this gallery later, a copy will be created for this purpose. Published galleries can no longer be deleted, but you can disown them after a week.': '发布后将锁定图库，不再允许添加或修改图像。如果您希望在发布后继续添加或替换图像，则需要创建一个图库的新副本。发布后的图库无法删除，但您可以在一周后与其脱离关系。',
  'The gallery was successfully published. It will take a few minutes before it becomes publicly listed.': '图库已成功发布，将在几分钟后被列入公共图库列表。',
  'You will be returned to the Management Interface momentarily.': '您将在几秒后返回管理界面。',
  '(Click here to continue)': '(点此继续)',
  'Please wait...': '请稍候...',
  'This gallery has been published, and images can therefore no longer be added, deleted or rearranged.': '此图库已经发布，因此不能再添加、删除或重新排序图像。',
  'You can create an editable copy of this gallery by clicking the button below. This new version will be linked in': '您可以通过点击下方的按钮来创建一个此图库的可编辑副本。新的副本',
  'as a child gallery of the currently published one, and will also link back to the old gallery as its parent.\n': '将作为子图库关联到当前图库，同时新图库也会将当前图库关联为父图库。',
  'The old gallery will remain until the new one is published. Updates that remove valid content will be reverted.': '旧图库将保留到新图库发布。恶意删除有效内容的更改会被还原。',
  'Create New Version': '创建新版本',
  'A new version of the gallery was successfully created. The previous version will remain publicly listed while you make updates to this version.': '新版本的图库已成功创建。旧版本将保留到新版本发布。',
  'To cancel and keep the previous version, simply delete this gallery.': '要取消并保留旧版本，只需删除此图库。',
  'Please confirm that you wish to delete this unpublished gallery.': '请确认您希望删除此未发布的图库。',
  'This action cannot be undone.': '此操作无法撤销。',
  'The gallery was successfully deleted.': '图库已成功删除。',
  'Please confirm that you wish to disown this gallery. You will no longer be publicly listed as the uploader unless the gallery was published in the last week, and you will not be able to make further changes to it.': '请确认您希望与此图库脱离关系。在一周后，您将不再被公开列为上传者。并且您将不能再对其进行修改。',
  'Gallery not found.': '图库未找到。',
  'Rate limitation for new posters is in effect. You have to wait a while before you can post more galleries.': '针对新上传者的图库发布速率限制已生效，您必须等待一段时间才能继续发布图库。',
  'You cannot publish an empty gallery.': '您不能发布一个空图库',
  'You must agree with the Terms of Service to continue.': '您必须同意服务条款才能继续',
  'You must give the gallery a title to continue.': '您必须给图库命名才能继续',
  'Apply or revert the active reorder before continuing.': '您必须应用或还原当前的排序才能继续'
};
var regexData = [[/^Uploading: (\d+)%$/, '上传中：$1%'], [/^ images? so far\.$/, ' 张图像。'], [/^ images? so far$/, ' 张图像'], [/^ new images? to the gallery. /, ' 张新图像。'], [/^ uploaded files?, added $/, ' 个文件，已添加 '], [/You have added a total of $/, '您目前总共添加了 '], [/^Category of (.*?) can no longer be changed.$/, '无法更改 $1 的分类。']];
merge(/^\/upld\//, undefined, data, regexData);
merge(/^\//, 'upld.e-hentai.org', data, regexData);
merge(/^\//, 'upload.e-hentai.org', data, regexData);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/watched.ts

merge(/^\/watched/, undefined, {
  'Watched Tag Galleries': '关注的标签',
  'You do not have any watched tags. You can change your watched tags from ': '您还没有关注任何标签。可在此处修改关注的标签：'
}, [[/^Showing results for ([\d,]+) watched tags?$/, '关注的 $1 个标签的结果']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data/thirdparty.ts

// E-Hentai Downloader
merge(/^\/g\//, undefined, {
  'E-Hentai Downloader ': 'E-Hentai 下载器 ',
  'Download Archive': '下载档案 ',
  ' Number Images': ' 图像编号',
  'Pages Range ': '页面范围 ',
  'File Name ': '文件名 ',
  'Path Name ': '文件夹名 ',
  Basic: '基本',
  Advanced: '高级',
  Feedback: '反馈',
  'Download ': '同时下载 ',
  ' images at the same time (≤ 5 is recommended)': ' 张图像 (建议 ≤5 张)',
  'Abort downloading current image after ': '无响应 ',
  ' second(s) (0 is never abort)': ' 秒后终止当前图像下载 (0 为永不终止)',
  ' Abort downloading current image if speed is less than ': ' 当速度低于 ',
  ' KB/s in ': ' KB/s，持续 ',
  ' second(s)': ' 秒后终止当前图像下载',
  'Skip current image after retried ': '重试 ',
  ' time(s)': ' 次后跳过当前图像',
  'Delay ': '延迟 ',
  ' second(s) before requesting next image': ' 秒后请求下一张图像',
  ' Number images (001：01.jpg, 002：01_theme.jpg, 003：02.jpg...) (Separator ': ' 使用数字编号图像 (如 001：01.jpg, 002：01_theme.jpg, 003：02.jpg...) (分隔符 ',
  ' Number images with original page number if pages range is set': ' 如果设置了页面范围，则使用原始页码对图像进行编号',
  ' Retry automatically when images download failed': ' 图像下载失败后自动重试',
  ' Get downloaded images automatically when canceled downloading': ' 取消下载时自动获取已下载完成的图像',
  'Set folder name as ': '将文件夹名称设置为 ',
  ' (if you don\'t want to create folder, use "': ' (如果不想创建文件夹请使用 "',
  'Set Zip file name as ': '将 Zip 文件名设置为 ',
  ' Show inputs to recheck file name and folder name before downloading': ' 显示文件名和文件夹名的输入框以供确认',
  ' Never show notification if torrents are available': ' 不显示有种子可用的提示',
  // Never: '从不', // 与页面中收藏 Never 从未 冲突。有好的冲突解决的方案时再修改。
  'When current tab is not focused': '当前标签页失去焦点时',
  Always: '总是',
  ' show download progress in title': ' 在标题栏中显示下载进度',
  ' Disable requesting and showing image limits': ' 不显示图像配额',
  ' Disable pre-calculating image limits cost': ' 不显示预计成本',
  '\t\t\t\t\t\t\t* Available templates: \t\t\t\t\t\t\t': ' * 可用模板： ',
  ' Gallery GID | \t\t\t\t\t\t\t': ' 图库 GID | ',
  ' Gallery token | \t\t\t\t\t\t\t': ' 图库 token | ',
  ' Gallery title': '图库标题',
  ' Gallery sub-title': '图库副标题',
  ' Gallery category': '图库分类',
  ' Gallery uploader': '图库上传者',
  'Set compression level as ': '压缩级别 ',
  ' (0 ~ 9, 0 is only store, not recommended to enable)': ' (0 ~ 9, 0 为仅存储，不建议开启)',
  ' Stream files and create Zip with file descriptors ': ' 流式传输文件并使用文件描述符创建 Zip ',
  ' Force download resized image (never download original image) ': ' 强制下载重采样图像 (从不下载原图) ',
  ' Never get new image URL when failed to download image ': ' 图像下载失败时，不要获取新的图像地址 ',
  ' Never send "nl" GET parameter when getting new image URL ': ' 获取新图像地址时，不带 "nl" 参数 ',
  " Never show warning when it's in peak hours now ": ' 在高峰时段下载时不显示警告 ',
  ' Never show warning when downloading a large gallery (>= 300 MB) ': ' 下载大型图库时不显示警告 (≥ 300 MB) ',
  ' Use File System to handle large Zip file': ' 使用文件系统处理大型 Zip 文件，',
  'when gallery is larger than ': '如果图库大于 ',
  ' MB (0 is always)': ' MB (0 为总是使用) ',
  ' Play silent music during the process to avoid downloading freeze ': ' 在下载过程中播放无声音频，避免下载冻结 ',
  'Record and save gallery info as ': '将图库信息记录并保存为 ',
  'File info.txt': '文件 info.txt',
  'Zip comment': '压缩文件注释',
  '...which includes ': '...包括 ',
  'Title & Gallery Link': '标题和图库链接',
  Metadatas: '元数据',
  'Page Links': '页面链接',
  ' Replace forbidden characters with full-width characters instead of dash (-)': ' 使用全角字符替换禁用字符，而不是使用破折号 (-)',
  ' Force drop downloaded images data when pausing download': ' 暂停下载时强制中断并删除未下载完的图像',
  ' Save as CBZ (Comic book archive) file': ' 以 CBZ (漫画归档) 文件格式保存 ',
  ' Pass cookies manually when downloading images ': ' 下载图像时手动传递 cookie ',
  'Download original images from ': '下载原图，通过 ',
  'current origin': '当前站点',
  '\t\t\t\t\t\t\t(1) This may reduce memory usage but some decompress softwares may not support the Zip file. See ': ' (1) 开启压缩可以减少体积，但部分解压软件可能不支持。查看 ',
  ' for more info.\t\t\t\t\t\t': ' 获取更多信息',
  '\t\t\t\t\t\t\t(2) Enable these options may save your image viewing limits ': ' (2) 开启这些选项可能可以节约您的图像配额 ',
  '(See wiki)': '(请看 wiki)',
  ', but may also cause some download problems.\t\t\t\t\t\t': '，但是可能也会导致一些下载问题。',
  '\t\t\t\t\t\t\t(3) If enabled you can save larger Zip files (probably ~1GB).\t\t\t\t\t\t': ' (3) 开启后可以保存更大的 Zip 文件 (约 ~1GB)',
  '\t\t\t\t\t\t\t(4) If enabled will play slient music to avoid downloading freeze when page is in background ': ' (4) 开启后会播放无声音频以避免页面在后台时下载被冻结 ',
  '(See issue)': '(请看这里)',
  '. Only needed if you have the problem, because the audio-playing icon maybe annoying.\t\t\t\t\t\t': '。只有当您遇到相关问题时才需开启，因为音乐播放图标可能会很烦人。',
  'Comic book archive': '漫画归档 (CBZ)',
  ' is a file type to archive comic images, you can open it with some comic viewer like CDisplay/CDisplayEX, or just extract it as a Zip file. To keep the order of images, you can also enable numbering images.\t\t\t\t\t\t': ' 是一种归档漫画图像的文件类型，您可以使用 CDisplay/CDisplayEX 等漫画查看器打开它，或者直接将其视为 Zip 文件解压。为了保持图像的顺序，您还可以启用对图像进行编号。',
  "\t\t\t\t\t\t\t(6) If you cannot original images, but you've already logged in and your account is not blocked or used up your limits, it may caused by your cookies is not sent to the server. This feature may helps you to pass your current cookies to the download request, but please enable it ONLY if you cannot download any original images.\t\t\t\t\t\t": ' (6) 如果您无法下载原图，但是您已经登录并且您的帐户没有被阻止或用完您的限制，这可能是因为您的 cookie 没有被发送到服务器。此功能可以帮助您将当前的 cookie 传递给下载请求，但只有当您无法下载任何原图时才应该启用它。',
  "\t\t\t\t\t\t\t(7) If you have already logged in, but the script detects that you're not logged in, you can enable this to skip login check. Please note that if you are not logged in actually, the script will not work as expect.\t\t\t\t\t\t": ' (7) 如果您已经登录，但脚本检测到您没有登录，您可以启用此功能以跳过登录检查。请注意，如果您实际没有登录，则脚本不会按预期工作。',
  '\t\t\t\t\t\t\t(8) If you have problem to download on the same site, like account session is misleading, you can force redirect original download link to another domain. Pass cookies manually may be needed.\t\t\t\t\t\t': ' (8) 如果您无法通过当前站点下载原图，例如账户会话异常，您可以强制将原始下载链接重定向到另一个域。可能需要同时开启手动传递 cookie。',
  'eg. -10,12,14-20,27,30-40/2,50-60/3,70-': '例如 -10,12,14-20,50-60/3,70-',
  'Download ranges of pages, split each range with comma (,)\rExample: \r-10:   Download from page 1 to 10\r12:   Download page 12\r14-20:   Download from page 14 to 20\r27:   Download page 27\r30-40/2:   Download each 2 pages in 30-40 (30, 32, 34, 36, 38, 40)\r50-60/3:   Download each 3 pages in 50-60 (50, 53, 56, 59)\r70-:   Download from page 70 to the last page': '需要下载的页面范围，使用半角逗号 ( , ) 分隔\r例如：\r-10:       下载 1-10 页\r12:         下载 12 页\r14-20:    下载 14-20 页\r50-60/3: 在 50-60 范围内每隔 3 页下载 (50, 53, 56, 59)\r70-:        下载 70-最后一页',
  'You can find GID and token at the address bar like this: exhentai.org/g/[GID]/[Token]/': '您可以在地址栏中找到 GID 和 token，如 exhentai.org/g/[GID]/[Token]/',
  'This title is the English title or Latin transliteration, you can find it as the first line of the title.': '此标题是英文标题或拉丁文音译，它是页面中第一行标题。',
  'This title is the original language title, you can find it as the second line of the title.': '此标题是原始标题，它是页面中第二行标题。',
  'This tag means the sort name of the gallery, and its output string is upper.': '此标记代表图库的分类名称，且输出的字符串为大写',
  'You can find it at the left of the gallery page.': '您可以在图库左侧找到它',
  'Pause (Downloading images will keep downloading)': '暂停 (下载中的图像会继续下载)',
  'Pause (Downloading images will be aborted)': '暂停 (下载中的图像会中断下载)',
  Resume: '继续',
  'Not download? Click here to download': '还未下载？点此开始',
  "If an error occured and script doesn't work, click ": '如果出现错误导致脚本无法工作，请点击 ',
  here: '此处',
  ' to force get your downloaded images.': ' 强制获取已下载的图像。',
  'Pages URL is MPV link': '页面 URL 是 MPV 链接',
  'Fetching Gallery Pages URL From MPV...': '从 MPV 获取图库页面 URL...',
  'Pending...': '等待中...',
  'Downloading...': '下载中...',
  'Succeed!': '成功！',
  'Force Paused': '强制暂停',
  'Force Abort': '强制中止',
  'Fetch images failed.': '获取图像失败。',
  'Generating Zip file...': '生成 Zip 文件...',
  'Generating Blob object...': '生成 Blob 对象...',
  'Tags:': '标签：',
  'Uploader Comment:': '上传者评论：'
}, [[/^Image Limits: (\d+)\/(\d+)$/, '图像配额：$1/$2'], [/^Estimated Limits Cost: (\d+)$/, '预计成本：$1'], [/^...or (\d+) \+ (\d+) GP if you don't have enough viewing limits.\n/, '...或者 $1 + $2 GP (如果您没有足够的图像配额)\r'], [/1 point per 0.1 MB since August 2019, less than 0.1 MB will also be counted.\nDuring peak hours, downloading original images will cost GPs.\nFor gallery uploaded 1 year ago, downloading original images will cost GPs since July 2023.\nThe GP cost is the same as resetting viewing limits.\nEstimated GP cost is a bit more than using offical archive download, in case the sum of each images will be larger than the packed.$/, '自 2019 年 8 月起，每 0.1 MB 消耗一点配额，不足 0.1 MB 也计算在内。\r高峰期下载原图将消耗 GP，自 2023 年 7 月起，下载 1 年前上传的图库\r原图也需要消耗 GP，数量与重置图像限制所需的相同。\rGP 成本预计会比直接使用官方归档下载略高，因为每张图像的体积总和比压缩包大。'], [/^ Force as logged in \(actual login state: (\w+?), uid: (-?\d+)\) $/, ' 强制登录 (实际登录状态: $1，uid: $2) '], [/^Total: (\d+) \| Downloading: (\d+) \| Succeed: (\d+) \| Failed: (\d+)$/, '总计：$1 | 下载中：$2 | 成功：$3 | 失败：$4'], [/^Start downloading at /, '下载开始于 '], [/^Finish downloading at /, '下载完成于 '], [/^Fetching Gallery Pages URL /, '获取图库页面 URL '], [/^Retrying /, '重试中 '], [/^Failed! /, '失败！'], [/^Category: /, '分类：'], [/^Uploader: /, '上传者：'], [/^Rating: /, '评分：']]);
;// CONCATENATED MODULE: ./src/services/ui-translation/data.ts




























;// CONCATENATED MODULE: ./src/services/ui-translation/index.ts



function ui_translation_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = ui_translation_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function ui_translation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ui_translation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ui_translation_arrayLikeToArray(o, minLen); }
function ui_translation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






function hostMatches(hostname, hosts) {
  if (hosts == null) return true;
  var _iterator = ui_translation_createForOfIteratorHelper(hosts),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var candidate = _step.value;
      if (hostname === candidate) return true;
      if (candidate.includes('*')) {
        var reg = new RegExp("^".concat(candidate.replace(/\\/g, '\\\\').replace(/\./g, '\\.').replace(/\*/g, '.*'), "$"));
        if (reg.test(hostname)) return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}
var UiTranslation = /*#__PURE__*/function () {
  function UiTranslation(logger) {
    _classCallCheck(this, UiTranslation);
    this.logger = logger;
  }
  _createClass(UiTranslation, [{
    key: "get",
    value: function get() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location;
      var results = {
        plainReplacements: new Map(),
        regexReplacements: new Map()
      };
      if (!url || !isValidHost(url.hostname)) {
        return results;
      }
      var path = url.pathname + url.search;
      this.logger.log('获取 UI 翻译：', path);
      dataMaps.filter(function (d) {
        return d.regex.test(path) && hostMatches(location.hostname, d.hosts);
      }).forEach(function (d) {
        var _iterator2 = ui_translation_createForOfIteratorHelper(d.plainReplacements),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
              k = _step2$value[0],
              v = _step2$value[1];
            results.plainReplacements.set(k, v);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _iterator3 = ui_translation_createForOfIteratorHelper(d.regexReplacements),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
              _k = _step3$value[0],
              _v = _step3$value[1];
            results.regexReplacements.set(_k, _v);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      });
      return results;
    }
  }]);
  return UiTranslation;
}();
UiTranslation = __decorate([Service(), __metadata("design:paramtypes", [Logger])], UiTranslation);

;// CONCATENATED MODULE: ./package.json
var package_namespaceObject = JSON.parse('{"name":"ehsyringe","displayName":"EhSyringe","version":"2.11.7","description":"E 站注射器，将中文翻译注入到 E 站体内。","author":"EhTagTranslation","repository":{"type":"git","url":"git+https://github.com/EhTagTranslation/EhSyringe.git"},"license":"MIT","bugs":"https://github.com/EhTagTranslation/EhSyringe/issues","homepage":"https://github.com/EhTagTranslation/EhSyringe","type":"module","scripts":{"start:monkey":"webpack serve --mode=development --env type=user-script","start:ext":"webpack --mode=development --watch --env type=web-ext","start:chrome":"pnpm run start:ext --env vendor=chrome","start:firefox":"pnpm run start:ext --env vendor=firefox","build":"webpack --mode=production","build:monkey":"pnpm run build --env type=user-script","build:ext":"pnpm run build --env type=web-ext","build:chrome":"pnpm run build:ext --env vendor=chrome && web-ext build -s dist -a releases -n ehsyringe.chrome.zip -o","build:firefox":"pnpm run build:ext --env vendor=firefox && web-ext build -s dist -a releases -n ehsyringe.firefox.xpi -o","lint":"eslint ./src/**/*.ts","format":"prettier --ignore-path .gitignore --write .","clean":"rimraf dist releases"},"devDependencies":{"@babel/core":"^7.23.2","@babel/plugin-transform-runtime":"^7.23.2","@babel/preset-env":"^7.23.2","@babel/runtime":"^7.23.2","@types/chrome":"^0.0.248","@types/escape-html":"^1.0.3","@types/node":"^20.8.9","@types/tampermonkey":"^4.20.4","@types/webextension-polyfill":"^0.10.5","@typescript-eslint/eslint-plugin":"^6.9.0","@typescript-eslint/parser":"^6.9.0","@webextension-toolbox/webpack-webextension-plugin":"^3.2.1","babel-loader":"^9.1.3","copy-webpack-plugin":"^11.0.0","css-loader":"^6.8.1","cssnano":"^6.0.1","eslint":"^8.52.0","eslint-config-prettier":"^9.0.0","eslint-plugin-prettier":"^5.0.1","execa":"^8.0.1","glob":"^10.3.10","html-webpack-plugin":"^5.5.3","less":"^4.2.0","less-loader":"^11.1.3","postcss":"^8.4.31","postcss-import":"^15.1.0","postcss-loader":"^7.3.3","postcss-preset-env":"^9.2.0","prettier":"^3.0.3","rimraf":"^5.0.5","semver":"^7.5.4","style-loader":"^3.3.3","ts-loader":"^9.5.0","tsconfig-paths-webpack-plugin":"^4.1.0","type-fest":"^4.6.0","typescript":"^5.2.2","web-ext":"^7.8.0","webpack":"^5.89.0","webpack-bundle-analyzer":"^4.9.1","webpack-cli":"^5.1.4","webpack-dev-server":"^4.15.1","webpack-userscript":"^2.5.8","yargs":"^17.7.2"},"dependencies":{"core-js":"^3.33.1","emoji-regex":"^10.3.0","escape-html":"^1.0.3","idb-keyval":"^6.2.1","lit-html":"^3.0.1","rxjs":"^7.8.1","tslib":"^2.6.2","typedi":"^0.10.0","webextension-polyfill":"^0.10.0"}}');
;// CONCATENATED MODULE: ./src/info.ts

var packageJson = package_namespaceObject;
;// CONCATENATED MODULE: ./src/services/sync-storage.ts


function sync_storage_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = sync_storage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function sync_storage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return sync_storage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return sync_storage_arrayLikeToArray(o, minLen); }
function sync_storage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






var SyncStorage = /*#__PURE__*/function () {
  function SyncStorage(logger, async) {
    _classCallCheck(this, SyncStorage);
    this.logger = logger;
    this.async = async;
    this.defaults = {
      version: packageJson.version,
      databaseMap: undefined,
      databaseSha: undefined,
      config: this.async.defaults.config
    };
    var oldVer = this.get('version');
    if (packageJson.version !== oldVer) {
      this.migrate();
      this.set('version', packageJson.version);
    }
  }
  _createClass(SyncStorage, [{
    key: "get",
    value: function get(key) {
      var value = syncStorage.get(key);
      if (value == null) return this.defaults[key];
      return value;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (value == null) return this["delete"](key);
      return syncStorage.set(key, value);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return syncStorage["delete"](key);
    }
  }, {
    key: "keys",
    value: function keys() {
      return syncStorage.keys();
    }
  }, {
    key: "migrate",
    value: function migrate() {
      var keys = this.keys();
      if (keys.length === 0) return;
      this.logger.log("\u8FC1\u79FB\u540C\u6B65\u5B58\u50A8\u7248\u672C\uFF0C\u5220\u9664 ", keys);
      var _iterator = sync_storage_createForOfIteratorHelper(keys),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          this["delete"](key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return SyncStorage;
}();
SyncStorage = __decorate([Service(), __metadata("design:paramtypes", [Logger, Storage])], SyncStorage);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./src/services/date-time.ts



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DateTime_1;


var base = {
  hourCycle: 'h23'
};
var timeFormatter = new Intl.DateTimeFormat(undefined, _objectSpread({
  hour: 'numeric',
  minute: 'numeric'
}, base));
var dateTimeFormatter = new Intl.DateTimeFormat(undefined, _objectSpread({
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}, base));
var noYearDateTimeFormatter = new Intl.DateTimeFormat(undefined, _objectSpread({
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}, base));
var DateTime = DateTime_1 = /*#__PURE__*/function () {
  function DateTime() {
    _classCallCheck(this, DateTime);
  }
  _createClass(DateTime, [{
    key: "absolute",
    value: function absolute(hisTime) {
      var nowTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
      var his = new Date(hisTime);
      var now = new Date(nowTime);
      if (his.getFullYear() === now.getFullYear()) {
        if (his.getMonth() === now.getMonth() && his.getDate() === now.getDate()) {
          return "\u4ECA\u5929 ".concat(timeFormatter.format(his));
        }
        return noYearDateTimeFormatter.format(his);
      }
      return dateTimeFormatter.format(his);
    }
  }, {
    key: "relative",
    value: function relative(diffTime) {
      var nYear = diffTime / DateTime_1.year;
      var nMonth = diffTime / DateTime_1.month;
      var nDay = diffTime / DateTime_1.day;
      var nHour = diffTime / DateTime_1.hour;
      var nMin = diffTime / DateTime_1.minute;
      // Note: 一天前 不是 昨天，一年前 也不是 去年
      if (nYear >= 1) return "".concat(Math.floor(nYear), " \u5E74\u524D");else if (nMonth >= 1) return "".concat(Math.floor(nMonth), " \u4E2A\u6708\u524D");else if (nDay >= 1) return "".concat(Math.floor(nDay), " \u5929\u524D");else if (nHour >= 1) return "".concat(Math.floor(nHour), " \u5C0F\u65F6\u524D");else if (nMin >= 1) return "".concat(Math.floor(nMin), " \u5206\u949F\u524D");else if (nMin >= 0) return '刚刚';else if (nMin > -1) return '马上';else if (nHour > -1) return "".concat(Math.floor(-nMin), " \u5206\u949F\u540E");else if (nDay > -1) return "".concat(Math.floor(-nHour), " \u5C0F\u65F6\u540E");else if (nMonth > -1) return "".concat(Math.floor(-nDay), " \u5929\u540E");else if (nYear > -1) return "".concat(Math.floor(-nMonth), " \u4E2A\u6708\u540E");else return "".concat(Math.floor(-nYear), " \u5E74\u540E");
    }
  }, {
    key: "diff",
    value: function diff() {
      var hisTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var nowTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
      var maxRelativeDiff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DateTime_1.day * 7;
      hisTime = typeof hisTime === 'number' ? hisTime : hisTime.getTime();
      nowTime = typeof nowTime === 'number' ? nowTime : nowTime.getTime();
      if (!hisTime) return 'N/A';
      var diffTime = nowTime - hisTime;
      if (diffTime >= maxRelativeDiff) {
        return this.absolute(hisTime, nowTime);
      } else {
        return this.relative(diffTime);
      }
    }
  }]);
  return DateTime;
}();
DateTime.second = 1000;
DateTime.minute = DateTime_1.second * 60;
DateTime.hour = DateTime_1.minute * 60;
DateTime.day = DateTime_1.hour * 24;
DateTime.month = DateTime_1.day * (365.25 / 12);
DateTime.year = DateTime_1.month * 12;
DateTime = DateTime_1 = __decorate([Service()], DateTime);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.31_typescript@5.2.2_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/.pnpm/less-loader@11.1.3_less@4.2.0_webpack@5.89.0/node_modules/less-loader/dist/cjs.js!./src/plugin/syringe/index.less
var syringe = __webpack_require__(1424);
;// CONCATENATED MODULE: ./src/plugin/syringe/index.less

      
      
      
      
      
      
      
      
      

var syringe_options = {};

syringe_options.styleTagTransform = (styleTagTransform_default());
syringe_options.setAttributes = (setAttributesWithoutAttributes_default());

      syringe_options.insert = insertBySelector_default().bind(null, ":root");
    
syringe_options.domAPI = (styleDomAPI_default());
syringe_options.insertStyleElement = (insertStyleElement_default());

var syringe_update = injectStylesIntoStyleTag_default()(syringe/* default */.Z, syringe_options);




       /* harmony default export */ var plugin_syringe = (syringe/* default */.Z && syringe/* default */.Z.locals ? syringe/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/plugin/syringe/index.ts






function syringe_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = syringe_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function syringe_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return syringe_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return syringe_arrayLikeToArray(o, minLen); }
function syringe_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }











function isElement(node, nodeName) {
  return node instanceof HTMLElement && (nodeName == null || node.localName === nodeName);
}
function isText(node) {
  return node != null && node.nodeType === Node.TEXT_NODE;
}
var TagNodeRef = /*#__PURE__*/function () {
  function TagNodeRef(node, fullKey, original, service) {
    _classCallCheck(this, TagNodeRef);
    this.node = node;
    this.fullKey = fullKey;
    this.original = original;
    this.service = service;
    node.setAttribute(TagNodeRef.ATTR, this.original);
    node.setAttribute('lang', 'en');
    Object.defineProperty(node, 'ehs', {
      value: this
    });
    if (!node.hasAttribute('title')) {
      node.title = this.fullKey;
    }
  }
  _createClass(TagNodeRef, [{
    key: "alive",
    get: function get() {
      return !!this.node.parentElement;
    }
  }, {
    key: "translate",
    value: function translate(tagMap) {
      if (!this.alive) return true;
      if (!this.service.config.translateTag) {
        this.node.textContent = this.original;
        this.node.setAttribute('lang', 'en');
        return true;
      }
      if (!tagMap) {
        return false;
      }
      var value = tagMap[this.fullKey];
      if (!value) {
        return false;
      }
      value = this.service.tagging.markImagesAndEmoji(value);
      if (this.original[1] === ':') {
        value = "".concat(this.original[0], ":").concat(value);
      }
      this.node.innerHTML = value;
      this.node.setAttribute('lang', 'cmn-Hans');
      return true;
    }
  }], [{
    key: "create",
    value: function create(node, service) {
      var _node$textContent;
      var parentElement = isText(node) ? node.parentElement : node;
      if (!parentElement || parentElement.hasAttribute(this.ATTR)) {
        return true;
      }
      var aId = parentElement.id;
      var aTitle = parentElement.title;
      var fullKeyCandidate;
      if (aTitle) {
        var _aTitle$split = aTitle.split(':'),
          _aTitle$split2 = _slicedToArray(_aTitle$split, 2),
          namespace = _aTitle$split2[0],
          key = _aTitle$split2[1];
        fullKeyCandidate = service.tagging.fullKey({
          namespace: namespace,
          key: key
        });
      } else if (aId) {
        var id = aId;
        if (id.startsWith('ta_')) id = id.slice(3);
        var _id$replace$split = id.replace(/_/gi, ' ').split(':'),
          _id$replace$split2 = _slicedToArray(_id$replace$split, 2),
          _namespace = _id$replace$split2[0],
          _key = _id$replace$split2[1];
        fullKeyCandidate = _key ? service.tagging.fullKey({
          namespace: _namespace,
          key: _key
        }) : service.tagging.fullKey({
          namespace: '',
          key: _namespace
        });
      }
      if (!fullKeyCandidate) return false;
      var fullKey = fullKeyCandidate;
      var text = (_node$textContent = node.textContent) !== null && _node$textContent !== void 0 ? _node$textContent : '';
      return new TagNodeRef(parentElement, fullKey, text, service);
    }
  }]);
  return TagNodeRef;
}();
TagNodeRef.ATTR = 'ehs-tag';
var Syringe = /*#__PURE__*/function () {
  function Syringe(storage, uiTranslation, logger, messaging, tagging, time) {
    var _this = this;
    _classCallCheck(this, Syringe);
    this.storage = storage;
    this.uiTranslation = uiTranslation;
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.time = time;
    this.tags = [];
    this.documentEnd = false;
    this.skipNode = new Set(['TITLE', 'LINK', 'META', 'HEAD', 'SCRIPT', 'BR', 'HR', 'STYLE', 'MARK']);
    this.config = this.getAndInitConfig();
    this.uiData = this.uiTranslation.get();
    storage.async.on('config', function (k, ov, nv) {
      if (nv) _this.updateConfig(nv);
    });
    this.init();
  }
  _createClass(Syringe, [{
    key: "translateTags",
    value: function translateTags(tagMap) {
      var _tagMap, _tagMap2;
      var tags = this.tags.filter(function (t) {
        return t.alive;
      });
      this.tags = tags;
      (_tagMap = tagMap) !== null && _tagMap !== void 0 ? _tagMap : tagMap = this.tagMap;
      (_tagMap2 = tagMap) !== null && _tagMap2 !== void 0 ? _tagMap2 : tagMap = this.storage.get('databaseMap');
      this.tagMap = tagMap;
      tags.forEach(function (t) {
        return t.translate(tagMap);
      });
    }
  }, {
    key: "updateConfig",
    value: function updateConfig(config) {
      this.config = config;
      this.storage.set('config', config);
      this.setRootAttrs();
      this.translateTags();
    }
  }, {
    key: "getAndInitConfig",
    value: function getAndInitConfig() {
      var _this2 = this;
      this.storage.async.get('config').then(function (conf) {
        _this2.updateConfig(conf);
      })["catch"](this.logger.error);
      return this.storage.get('config');
    }
  }, {
    key: "codePatch",
    value: function codePatch() {
      // 该方案同时在 V2、V3 和 UserScript 生效
      // 注意 actualCode 是在事件回调内部运行的，要挂载变量需要显式写 `window.varName = xxx`
      var actualCode = "\n            window.toggle_advsearch_pane = function toggle_advsearch_pane(b) {\n                document.getElementById('advdiv').style.display == 'none' ? show_advsearch_pane(b) : hide_advsearch_pane(b);\n            }\n            window.toggle_filesearch_pane = function toggle_filesearch_pane(b) {\n                document.getElementById('fsdiv').style.display == 'none' ? show_filesearch_pane(b) : hide_filesearch_pane(b);\n            }\n            ";
      document.documentElement.setAttribute('onreset', actualCode);
      document.documentElement.dispatchEvent(new Event('reset'));
      document.documentElement.removeAttribute('onreset');
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;
      ready(function () {
        _this3.documentEnd = true;
        _this3.codePatch();
      });
      this.setRootAttrs();
      var body = document.body;
      if (body) {
        var nodes = [];
        var nodeIterator = document.createNodeIterator(body);
        var node = nodeIterator.nextNode();
        while (node) {
          nodes.push(node);
          this.translateNode(node);
          node = nodeIterator.nextNode();
        }
        this.logger.debug("\u6709 ".concat(nodes.length, " \u4E2A\u8282\u70B9\u5728\u6CE8\u5165\u524D\u52A0\u8F7D"), nodes);
      } else {
        this.logger.debug("\u6CA1\u6709\u8282\u70B9\u5728\u6CE8\u5165\u524D\u52A0\u8F7D");
      }
      this.observer = new MutationObserver(function (mutations) {
        var _iterator = syringe_createForOfIteratorHelper(mutations),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mutation = _step.value;
            if (mutation.type === 'attributes') {
              _this3.translateNode(mutation.target);
            } else {
              var _iterator2 = syringe_createForOfIteratorHelper(mutation.addedNodes),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _node = _step2.value;
                  _this3.translateNode(_node);
                  if (_this3.documentEnd && _node.childNodes) {
                    var _nodeIterator = document.createNodeIterator(_node);
                    var childNode = _nodeIterator.nextNode();
                    while (childNode) {
                      _this3.translateNode(childNode);
                      childNode = _nodeIterator.nextNode();
                    }
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      this.observer.observe(document.documentElement, {
        attributeFilter: ['title', 'placeholder', 'label', 'value'],
        childList: true,
        subtree: true
      });
      this.updateTagMap();
      this.messaging.on('tag-updated', function () {
        return _this3.updateTagMap();
      });
    }
  }, {
    key: "updateTagMap",
    value: function updateTagMap() {
      var _this4 = this;
      if (this.updatingTagMap) return;
      var updatingTagMap;
      updatingTagMap = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var timer, currentSha, data, tagMap, key;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              timer = _this4.logger.time('获取替换数据');
              _context.prev = 1;
              currentSha = _this4.storage.get('databaseSha');
              _context.next = 5;
              return _this4.messaging.emit('get-tag-map', {
                ifNotMatch: currentSha
              });
            case 5:
              data = _context.sent;
              if (data.map) {
                tagMap = {};
                for (key in data.map) {
                  tagMap[key] = data.map[key].name;
                }
                _this4.translateTags(tagMap);
                _this4.storage.set('databaseMap', tagMap);
                _this4.storage.set('databaseSha', data.sha);
                _this4.logger.log('替换数据已更新', data.sha);
              } else {
                _this4.logger.log('替换数据已经最新', data.sha);
              }
              _context.next = 12;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              _this4.logger.error(_context.t0);
            case 12:
              _context.prev = 12;
              timer.end();
              if (_this4.updatingTagMap === updatingTagMap) {
                _this4.updatingTagMap = undefined;
                updatingTagMap = undefined;
              }
              return _context.finish(12);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 9, 12, 16]]);
      }))();
      this.updatingTagMap = updatingTagMap;
    }
  }, {
    key: "setRootAttrs",
    value: function setRootAttrs() {
      var _node$classList;
      var node = document.documentElement;
      if (!node) return;
      if (isEx(location.hostname)) {
        node.classList.add('ex');
      } else if (isEh(location.hostname)) {
        node.classList.add('eh');
      } else if ('matchMedia' in window) {
        var matchesDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (matchesDarkTheme) {
          node.classList.add('ex');
        } else {
          node.classList.add('eh');
        }
      }
      (_node$classList = node.classList).remove.apply(_node$classList, _toConsumableArray(_toConsumableArray(node.classList.values()).filter(function (k) {
        return k.startsWith('ehs');
      })));
      if (!this.config.showIcon) {
        node.classList.add('ehs-hide-icon');
      }
      if (this.config.translateTag) {
        node.classList.add('ehs-translate-tag');
      }
      if (this.config.translateUi) {
        node.setAttribute('lang', 'cmn-Hans');
      } else {
        node.setAttribute('lang', 'en');
      }
      node.classList.add("ehs-image-level-".concat(this.config.introduceImageLevel));
    }
  }, {
    key: "translateNode",
    value: function translateNode(node) {
      if (!node.nodeName || this.skipNode.has(node.nodeName) || node.parentNode && this.skipNode.has(node.parentNode.nodeName)) {
        return;
      }
      var handled = this.translateTag(node);
      /* tag 处理过的ui不再处理*/
      if (!handled && this.config.translateUi) {
        this.translateUi(node);
      }
    }
  }, {
    key: "isTagContainer",
    value: function isTagContainer(node) {
      if (!node) {
        return false;
      }
      return node.classList.contains('gt') || node.classList.contains('gtl') || node.classList.contains('gtw');
    }
  }, {
    key: "translateTag",
    value: function translateTag(node) {
      var parentElement = node.parentElement;
      var ref;
      if ((parentElement === null || parentElement === void 0 ? void 0 : parentElement.id) === 'tagname_newtagcomplete-list' && isElement(node)) {
        // 翻译我的标签提示
        if (node.querySelector('.ehs-new-tag-complete-translate')) return false;
        var elTrans = document.createElement('span');
        var tag = node.getAttribute('data-value');
        if (!tag) return false;
        elTrans.id = tag;
        elTrans.classList.add('ehs-new-tag-complete-translate');
        node.appendChild(elTrans);
        ref = TagNodeRef.create(elTrans, this);
      } else if (!isText(node) || !parentElement) {
        return false;
      } else if (parentElement.nodeName === 'MARK' || parentElement.classList.contains('auto-complete-text')) {
        // 不翻译搜索提示的内容
        return true;
      } else if (!this.isTagContainer(parentElement) && !this.isTagContainer(parentElement === null || parentElement === void 0 ? void 0 : parentElement.parentElement)) {
        // 标签只翻译已知的位置
        return false;
      } else {
        ref = TagNodeRef.create(node, this);
      }
      if (typeof ref == 'boolean') return ref;
      ref.translate(this.tagMap);
      this.tags.push(ref);
      return true;
    }
  }, {
    key: "translateUiText",
    value: function translateUiText(text) {
      var _this5 = this;
      var plain = this.uiData.plainReplacements.get(text);
      if (plain != null) return plain;
      var repText = text;
      var _iterator3 = syringe_createForOfIteratorHelper(this.uiData.regexReplacements),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
            k = _step3$value[0],
            v = _step3$value[1];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          repText = repText.replace(k, v);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (this.config.translateTimestamp !== false) {
        repText = repText.replace(/\d\d\d\d-\d\d-\d\d \d\d:\d\d/g, function (t) {
          var date = Date.parse(t + 'Z');
          if (!date) return t;
          return "".concat(_this5.time.diff(date, undefined, DateTime.hour));
        });
        repText = repText.replace(/\d\d (January|February|March|April|May|June|July|August|September|October|November|December) \d\d\d\d, \d\d:\d\d/gi, function (t) {
          var date = Date.parse(t + ' UTC');
          if (!date) return t;
          return "".concat(_this5.time.diff(date, undefined, DateTime.hour));
        });
      }
      if (repText !== text) return repText;
      return undefined;
    }
  }, {
    key: "translateUi",
    value: function translateUi(node) {
      var _node$parentElement;
      if (isElement(node) && node.title) {
        var translation = this.translateUiText(node.title);
        if (translation != null) {
          node.title = translation;
        }
      }
      if (isText(node)) {
        var _node$textContent2;
        var text = (_node$textContent2 = node.textContent) !== null && _node$textContent2 !== void 0 ? _node$textContent2 : '';
        var _translation = this.translateUiText(text);
        if (_translation != null) {
          node.textContent = _translation;
        }
        return;
      }
      if (isElement(node, 'input') || isElement(node, 'textarea')) {
        if (node.placeholder) {
          var _translation2 = this.translateUiText(node.placeholder);
          if (_translation2 != null) {
            node.placeholder = _translation2;
          }
        } else if (node.type === 'submit' || node.type === 'button') {
          var _translation3 = this.translateUiText(node.value);
          if (_translation3 != null) {
            node.value = _translation3;
          }
        }
        return;
      }
      if (isElement(node, 'optgroup')) {
        var _translation4 = this.translateUiText(node.label);
        if (_translation4 != null) {
          node.label = _translation4;
        }
        return;
      }
      // 导航链接，一体化处理，不再处理文本节点（原文使用子元素和媒体查询实现页面宽度改变时文本自动更改为缩写）
      if (isElement(node, 'a') && (node === null || node === void 0 || (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 || (_node$parentElement = _node$parentElement.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.id) === 'nb') {
        var _node$textContent3;
        var _translation5 = this.translateUiText((_node$textContent3 = node.textContent) !== null && _node$textContent3 !== void 0 ? _node$textContent3 : '');
        if (_translation5 != null) {
          node.textContent = _translation5;
        }
      }
      if (isElement(node, 'p') && node.classList.contains('gpc')) {
        var _node$textContent4, _node$parentElement2;
        /* 兼容熊猫书签，单独处理页码，保留原页码Element，防止熊猫书签取不到报错*/
        var _text = (_node$textContent4 = node.textContent) !== null && _node$textContent4 !== void 0 ? _node$textContent4 : '';
        var p = document.createElement('p');
        p.textContent = _text.replace(/Showing ([\d,]+) - ([\d,]+) of ([\d,]+) images?/, '$1 - $2，共 $3 张图像');
        p.className = 'gpc-translate';
        (_node$parentElement2 = node.parentElement) === null || _node$parentElement2 === void 0 || _node$parentElement2.insertBefore(p, node);
        node.style.display = 'none';
      }
      if (isElement(node, 'div')) {
        var _node$parentElement3;
        /* E-Hentai-Downloader 兼容处理 */
        if (node.id === 'gdd') {
          var div = document.createElement('div');
          div.textContent = node.textContent;
          div.style.display = 'none';
          node.insertBefore(div, null);
        }
        /* 熊猫书签 兼容处理 2 */
        if (((_node$parentElement3 = node.parentElement) === null || _node$parentElement3 === void 0 ? void 0 : _node$parentElement3.id) === 'gdo4' && node.classList.contains('ths') && node.classList.contains('nosel')) {
          var _div = document.createElement('div');
          _div.textContent = node.textContent;
          _div.style.display = 'none';
          _div.className = 'ths';
          node.parentElement.insertBefore(_div, node);
        }
      }
    }
  }]);
  return Syringe;
}();
Syringe = __decorate([Service(), __metadata("design:paramtypes", [SyncStorage, UiTranslation, Logger, messaging_Messaging, Tagging, DateTime])], Syringe);

;// CONCATENATED MODULE: ./src/plugin/auto-update.ts









var AutoUpdate = /*#__PURE__*/function () {
  function AutoUpdate(logger, storage, messaging) {
    _classCallCheck(this, AutoUpdate);
    this.logger = logger;
    this.storage = storage;
    this.messaging = messaging;
    this.init()["catch"](logger.error);
  }
  _createClass(AutoUpdate, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var conf;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.messaging.emit('check-extension', undefined, true)["catch"](this.logger.error);
              _context.next = 3;
              return this.storage.get('config');
            case 3:
              conf = _context.sent;
              if (conf.autoUpdate) {
                _context.next = 6;
                break;
              }
              return _context.abrupt("return");
            case 6:
              this.messaging.emit('update-database', {
                force: false
              })["catch"](this.logger.error);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }]);
  return AutoUpdate;
}();
AutoUpdate = __decorate([Service(), __metadata("design:paramtypes", [Logger, Storage, messaging_Messaging])], AutoUpdate);

;// CONCATENATED MODULE: ./src/providers/user-script/menu.ts







var MenuProvider = /*#__PURE__*/function () {
  function MenuProvider(logger) {
    _classCallCheck(this, MenuProvider);
    this.logger = logger;
    logger.warn("\u4E0D\u652F\u6301\u53F3\u952E\u83DC\u5355");
  }
  _createClass(MenuProvider, [{
    key: "createMenu",
    value: function createMenu(_info) {
      return;
    }
  }]);
  return MenuProvider;
}();
MenuProvider = __decorate([Service(), __metadata("design:paramtypes", [Logger])], MenuProvider);
var provider = services_Container.get(MenuProvider);
var createMenu = provider.createMenu.bind(provider);
;// CONCATENATED MODULE: ./src/providers/user-script/utils.ts

var _notification = typeof GM_notification == 'function' ? GM_notification : function (detailsOrText, ondoneOrTitle, image, onclick) {
  var _notification$title, _notification$text, _notification$onclick, _notification$ondone;
  var notification = _typeof(detailsOrText) == 'object' ? detailsOrText : {
    text: String(detailsOrText),
    image: image,
    onclick: onclick,
    highlight: false
  };
  notification.id = "".concat(Math.random() * 1000000000);
  if (typeof ondoneOrTitle == 'function') {
    notification.ondone = ondoneOrTitle;
  } else if (ondoneOrTitle) {
    notification.title = ondoneOrTitle;
  }
  alert("".concat((_notification$title = notification.title) !== null && _notification$title !== void 0 ? _notification$title : '', "\n\n").concat((_notification$text = notification.text) !== null && _notification$text !== void 0 ? _notification$text : ''));
  (_notification$onclick = notification.onclick) === null || _notification$onclick === void 0 || _notification$onclick.call(notification);
  (_notification$ondone = notification.ondone) === null || _notification$ondone === void 0 || _notification$ondone.call(notification, true);
};
var _openInTab = typeof GM_openInTab == 'function' ? GM_openInTab : function (url) {
  var opened = window.open(url);
  return {
    close: function close() {
      var _this$onclose;
      opened === null || opened === void 0 || opened.close();
      (_this$onclose = this.onclose) === null || _this$onclose === void 0 || _this$onclose.call(this);
      this.closed = true;
    },
    closed: false
  };
};
function openInTab(url) {
  _openInTab(url, {
    active: true,
    insert: true,
    setParent: true
  });
}
function sendNotification(info) {
  _notification({
    text: info.message,
    title: info.title,
    onclick: info.action
  });
}
function setBadge(info) {
  var badge = document.getElementById('eh-syringe-popup-badge');
  if (badge) {
    if (info.text != null) {
      badge.innerText = info.text;
      badge.style.visibility = info.text ? 'visible' : 'hidden';
    }
    if (info.background != null) {
      badge.style.background = info.background;
    }
  }
}
;// CONCATENATED MODULE: ./src/plugin/tag-context-menu.ts







var TagContextMenu = /*#__PURE__*/function () {
  function TagContextMenu(tagging) {
    var _this = this;
    _classCallCheck(this, TagContextMenu);
    this.tagging = tagging;
    this.documentUrlPatterns = ['*://exhentai.org/*', '*://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*', '*://e-hentai.org/*', '*://*.exhentai.org/*', '*://*.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/*', '*://*.e-hentai.org/*'];
    this.title = '提交标签翻译';
    this.targetUrlPatterns = ['*://exhentai.org/tag/*', '*://exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/tag/*', '*://e-hentai.org/tag/*', '*://*.exhentai.org/tag/*', '*://*.exhentai55ld2wyap5juskbm67czulomrouspdacjamjeloj7ugjbsad.onion/tag/*', '*://*.e-hentai.org/tag/*'];
    this.contexts = ['link'];
    this.onclick = function (info) {
      var _info$url, _info$url$split$pop$r, _info$url$split$pop, _seg$pop;
      if (!((_info$url = info.url) !== null && _info$url !== void 0 && _info$url.includes('/tag/'))) {
        return;
      }
      var seg = (_info$url$split$pop$r = (_info$url$split$pop = info.url.split('/').pop()) === null || _info$url$split$pop === void 0 ? void 0 : _info$url$split$pop.replace(/\+/g, ' ').split(':')) !== null && _info$url$split$pop$r !== void 0 ? _info$url$split$pop$r : [];
      var namespace = seg.length <= 1 ? 'temp' : seg[0];
      var key = (_seg$pop = seg.pop()) !== null && _seg$pop !== void 0 ? _seg$pop : '';
      openInTab(_this.tagging.editorUrl({
        namespace: namespace,
        key: key
      }));
    };
    this.init();
  }
  _createClass(TagContextMenu, [{
    key: "init",
    value: function init() {
      createMenu(this);
    }
  }]);
  return TagContextMenu;
}();
TagContextMenu = __decorate([Service(), __metadata("design:paramtypes", [Tagging])], TagContextMenu);

;// CONCATENATED MODULE: ./src/services/http.ts






var Http = /*#__PURE__*/function () {
  function Http() {
    _classCallCheck(this, Http);
  }
  _createClass(Http, [{
    key: "json",
    value: function () {
      var _json = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(url) {
        var method,
          res,
          _args = arguments;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'GET';
              _context.next = 3;
              return fetch(url, {
                method: method
              });
            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();
            case 6:
              return _context.abrupt("return", _context.sent);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function json(_x) {
        return _json.apply(this, arguments);
      }
      return json;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(url) {
        var method,
          progress,
          responseType,
          res,
          dataCache,
          receivedSize,
          reader,
          _data,
          data,
          pos,
          _i,
          _dataCache,
          piece,
          _args2 = arguments;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              method = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'GET';
              progress = _args2.length > 2 ? _args2[2] : undefined;
              responseType = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 'arraybuffer';
              _context2.next = 5;
              return fetch(url, {
                method: method,
                redirect: 'follow',
                cache: 'no-cache'
              });
            case 5:
              res = _context2.sent;
              if (!(res.status >= 300 || !res.body)) {
                _context2.next = 8;
                break;
              }
              throw new Error("".concat(method, " ").concat(url, " ").concat(res.statusText, " (").concat(res.status, ")"));
            case 8:
              dataCache = [];
              receivedSize = 0;
              reader = res.body.getReader();
            case 11:
              _context2.next = 13;
              return reader.read();
            case 13:
              _data = _context2.sent;
              if (!_data.done) {
                _context2.next = 16;
                break;
              }
              return _context2.abrupt("break", 21);
            case 16:
              dataCache.push(_data.value);
              receivedSize += _data.value.byteLength;
              progress === null || progress === void 0 || progress(receivedSize);
            case 19:
              _context2.next = 11;
              break;
            case 21:
              data = new Uint8Array(receivedSize);
              pos = 0;
              for (_i = 0, _dataCache = dataCache; _i < _dataCache.length; _i++) {
                piece = _dataCache[_i];
                data.set(piece, pos);
                pos += piece.byteLength;
              }
              if (!(responseType === 'arraybuffer')) {
                _context2.next = 26;
                break;
              }
              return _context2.abrupt("return", data.buffer);
            case 26:
              return _context2.abrupt("return", JSON.parse(new TextDecoder().decode(data)));
            case 27:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function download(_x2) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }]);
  return Http;
}();
Http = __decorate([Service()], Http);

;// CONCATENATED MODULE: ./src/services/database.ts



function database_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = database_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function database_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return database_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return database_arrayLikeToArray(o, minLen); }
function database_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var Database = /*#__PURE__*/function () {
  function Database(http, logger) {
    _classCallCheck(this, Database);
    this.http = http;
    this.logger = logger;
  }
  _createClass(Database, [{
    key: "getLatestVersion",
    value: function () {
      var _getLatestVersion = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var githubDownloadUrl, info;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              githubDownloadUrl = 'https://api.github.com/repos/ehtagtranslation/Database/releases/latest';
              _context.next = 3;
              return this.http.json(githubDownloadUrl);
            case 3:
              info = _context.sent;
              if ('target_commitish' in info) {
                _context.next = 10;
                break;
              }
              if (!(typeof info.message != 'string')) {
                _context.next = 7;
                break;
              }
              throw new Error('响应有误');
            case 7:
              if (!info.message.startsWith('API rate limit exceeded')) {
                _context.next = 9;
                break;
              }
              throw new Error('GitHub API 调用次数超过限制，请稍后再试');
            case 9:
              throw new Error(info.message);
            case 10:
              return _context.abrupt("return", info);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getLatestVersion() {
        return _getLatestVersion.apply(this, arguments);
      }
      return getLatestVersion;
    }()
  }, {
    key: "dataUrls",
    value: function dataUrls(version) {
      var dataJson = /<!\x2D\x2D([\s\S]+?)\x2D\x2D>/gi.exec(version.body);
      if (!dataJson) throw new Error("GitHub \u53D1\u5E03\u6570\u636E\u65E0\u6CD5\u89E3\u6790\uFF0C\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u63D2\u4EF6\u7248\u672C");
      try {
        var data = JSON.parse(dataJson[1]);
        var sha = data.mirror;
        if (typeof sha != 'string') throw new Error();
        return ["https://fastly.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@".concat(sha, "/db.html.json"), "https://gcore.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@".concat(sha, "/db.html.json"), "https://cdn.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@".concat(sha, "/db.html.json"), "https://testingcf.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@".concat(sha, "/db.html.json"), "https://test1.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@".concat(sha, "/db.html.json"), "https://originfastly.jsdelivr.net/gh/EhTagTranslation/DatabaseReleases@".concat(sha, "/db.html.json"), "https://cdn.statically.io/gh/EhTagTranslation/DatabaseReleases/".concat(sha, "/db.html.json"), "https://rawcdn.githack.com/EhTagTranslation/DatabaseReleases/".concat(sha, "/db.html.json")];
      } catch (_unused) {
        throw new Error("GitHub \u53D1\u5E03\u6570\u636E\u65E0\u6CD5\u89E3\u6790\uFF0C\u53EF\u80FD\u9700\u8981\u66F4\u65B0\u63D2\u4EF6\u7248\u672C");
      }
    }
  }, {
    key: "getData",
    value: function () {
      var _getData = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(version, progress) {
        var urls, asset, errors, _iterator, _step, url, _result$head, result, e;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              urls = this.dataUrls(version);
              asset = version.assets.find(function (asset) {
                return asset.name === 'db.html.json';
              });
              errors = [];
              _iterator = database_createForOfIteratorHelper(urls);
              _context2.prev = 4;
              _iterator.s();
            case 6:
              if ((_step = _iterator.n()).done) {
                _context2.next = 23;
                break;
              }
              url = _step.value;
              _context2.prev = 8;
              _context2.next = 11;
              return this.http.download(url, 'GET', function (loaded) {
                var total = asset != null ? asset.size : 0;
                if (total > 0) progress === null || progress === void 0 || progress(loaded / total);else progress === null || progress === void 0 || progress(0);
              }, 'json');
            case 11:
              result = _context2.sent;
              if (!((result === null || result === void 0 || (_result$head = result.head) === null || _result$head === void 0 ? void 0 : _result$head.sha) === version.target_commitish && result !== null && result !== void 0 && result.data)) {
                _context2.next = 15;
                break;
              }
              this.logger.log("\u4ECE ".concat(url, " \u4E0B\u8F7D\u6210\u529F"));
              return _context2.abrupt("return", result);
            case 15:
              _context2.next = 21;
              break;
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](8);
              errors.push(_context2.t0);
              this.logger.warn("\u5C1D\u8BD5\u4ECE ".concat(url, " \u4E0B\u8F7D\u5931\u8D25"), _context2.t0);
            case 21:
              _context2.next = 6;
              break;
            case 23:
              _context2.next = 28;
              break;
            case 25:
              _context2.prev = 25;
              _context2.t1 = _context2["catch"](4);
              _iterator.e(_context2.t1);
            case 28:
              _context2.prev = 28;
              _iterator.f();
              return _context2.finish(28);
            case 31:
              if (!(errors.length === 0)) {
                _context2.next = 33;
                break;
              }
              throw new Error('没有获取到有效的文件');
            case 33:
              e = errors[errors.length - 1];
              Object.defineProperty(e, 'errors', {
                value: errors,
                enumerable: true
              });
              throw e;
            case 36:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[4, 25, 28, 31], [8, 17]]);
      }));
      function getData(_x, _x2) {
        return _getData.apply(this, arguments);
      }
      return getData;
    }()
  }]);
  return Database;
}();
Database = __decorate([Service(), __metadata("design:paramtypes", [Http, Logger])], Database);

;// CONCATENATED MODULE: ./src/services/badge-loading.ts






var BadgeLoading = /*#__PURE__*/function () {
  function BadgeLoading(logger) {
    _classCallCheck(this, BadgeLoading);
    this.logger = logger;
    this.loadingStrArr = [[''], ['⢎⠀', '⢆⡀', '⢄⡠', '⢀⡰', '⠀⡱', '⠈⠱', '⠊⠑', '⠎⠁'], ['    ', '·   ', ' ·  ', '  · ', '   ·']];
    this.frame = 0;
    this.index = 0;
    this.interval = undefined;
    this.text = '';
    this.loadingString = [''];
    this.color = '';
    this.extname = 'EhSyringe';
  }
  _createClass(BadgeLoading, [{
    key: "setColor",
    value: function setColor() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#4A90E2';
      setBadge({
        background: color
      });
    }
  }, {
    key: "setText",
    value: function setText(text) {
      setBadge({
        text: text
      });
    }
  }, {
    key: "set",
    value: function set(text, color) {
      var _this = this;
      var loading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (this.index !== loading) {
        this.index = loading;
        this.loadingString = this.loadingStrArr[this.index] || [''];
        this.frame = 0;
      }
      this.text = text;
      this.setColor(color);
      if (loading) {
        if (!this.interval) {
          this.interval = setInterval(function () {
            _this.setText("".concat(_this.text).concat(_this.loadingString[_this.frame] || ''));
            _this.frame++;
            if (!_this.loadingString[_this.frame]) {
              _this.frame = 0;
            }
          }, 100);
        }
      } else {
        this.frame = 0;
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = undefined;
        }
        this.setText(this.text);
      }
    }
  }]);
  return BadgeLoading;
}();
BadgeLoading = __decorate([Service(), __metadata("design:paramtypes", [Logger])], BadgeLoading);

;// CONCATENATED MODULE: ./src/utils/promise.ts
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
;// CONCATENATED MODULE: ./src/plugin/database-updater.ts





function database_updater_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function database_updater_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? database_updater_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : database_updater_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }








var database_updater_defaultStatus = {
  run: false,
  progress: 0,
  info: '',
  complete: false,
  error: false
};
var DatabaseUpdater = /*#__PURE__*/function () {
  function DatabaseUpdater(logger, messaging, storage, database, badge) {
    var _this = this;
    _classCallCheck(this, DatabaseUpdater);
    this.logger = logger;
    this.messaging = messaging;
    this.storage = storage;
    this.database = database;
    this.badge = badge;
    this._lastCheckData = {
      sha: '',
      check: 0,
      githubRelease: null
    };
    this.downloadStatus = database_updater_objectSpread({}, database_updater_defaultStatus);
    this.checked = false;
    this.messaging.on('update-database', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(_ref) {
        var force, recheck, version, updating, success;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              force = _ref.force, recheck = _ref.recheck;
              if (!(_this.checked && !force)) {
                _context.next = 4;
                break;
              }
              _this.logger.log('跳过');
              return _context.abrupt("return", undefined);
            case 4:
              _context.next = 6;
              return _this.checkVersion(recheck);
            case 6:
              version = _context.sent;
              _context.t0 = version !== null && version !== void 0 && version.sha;
              if (!_context.t0) {
                _context.next = 17;
                break;
              }
              _context.t1 = !!force;
              if (_context.t1) {
                _context.next = 16;
                break;
              }
              _context.t2 = version.sha;
              _context.next = 14;
              return _this.messaging.emit('get-tag-sha', undefined);
            case 14:
              _context.t3 = _context.sent;
              _context.t1 = _context.t2 !== _context.t3;
            case 16:
              _context.t0 = _context.t1;
            case 17:
              if (!_context.t0) {
                _context.next = 33;
                break;
              }
              _context.next = 20;
              return _this.updating;
            case 20:
              updating = _this.update();
              _this.updating = updating;
              _context.next = 24;
              return updating;
            case 24:
              success = _context.sent;
              _this.updating = undefined;
              if (!success) {
                _context.next = 31;
                break;
              }
              _this.logger.log('有新版本并更新', version);
              return _context.abrupt("return", version);
            case 31:
              _this.logger.log('更新新版本失败', version);
              return _context.abrupt("return", undefined);
            case 33:
              _this.logger.log('没有新版本');
              return _context.abrupt("return", undefined);
            case 35:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    this.messaging.on('check-database', /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(_ref3) {
        var force;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              force = _ref3.force;
              _context2.next = 3;
              return _this.checkVersion(force);
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    this.init()["catch"](logger.error);
  }
  _createClass(DatabaseUpdater, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3() {
        var storage;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.storage.get('release');
            case 2:
              storage = _context3.sent;
              if (storage && storage.check > this._lastCheckData.check) {
                Object.assign(this._lastCheckData, storage);
              }
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "lastCheckData",
    get: function get() {
      return this._lastCheckData;
    },
    set: function set(value) {
      if (value && value.check > this.lastCheckData.check) {
        Object.assign(this._lastCheckData, value);
        this.storage.set('release', this._lastCheckData)["catch"](this.logger.error);
      }
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4() {
        var _this2 = this;
        var data, e;
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              // 重置下载状态
              this.initDownloadStatus();
              _context4.prev = 1;
              _context4.next = 4;
              return this.download();
            case 4:
              data = _context4.sent;
              _context4.next = 7;
              return this.messaging.emit('update-tag', data.data);
            case 7:
              this.badge.set('OK', '#00C801');
              this.pushDownloadStatus({
                run: true,
                info: '更新完成',
                progress: 100,
                complete: true
              });
              void sleep(2500).then(function () {
                if (_this2.downloadStatus.complete) {
                  _this2.badge.set('', '#4A90E2');
                  _this2.initDownloadStatus();
                }
              });
              return _context4.abrupt("return", true);
            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](1);
              e = _context4.t0;
              this.logger.error(e);
              this.badge.set('ERR', '#C80000');
              this.pushDownloadStatus({
                run: false,
                error: true,
                info: e !== null && e !== void 0 && e.message ? e.message : '更新失败'
              });
              return _context4.abrupt("return", false);
            case 20:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[1, 13]]);
      }));
      function update() {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "initDownloadStatus",
    value: function initDownloadStatus() {
      this.downloadStatus = database_updater_objectSpread({}, database_updater_defaultStatus);
      void this.messaging.emit('updating-database', this.downloadStatus, true);
    }
  }, {
    key: "pushDownloadStatus",
    value: function pushDownloadStatus() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.downloadStatus = database_updater_objectSpread(database_updater_objectSpread({}, this.downloadStatus), data);
      void this.messaging.emit('updating-database', this.downloadStatus, true);
    }
  }, {
    key: "checkVersion",
    value: function () {
      var _checkVersion = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee5() {
        var force,
          time,
          lastCheckData,
          info,
          _args5 = arguments;
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              force = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : false;
              if (force) {
                _context5.next = 6;
                break;
              }
              // 限制每 5 分钟最多请求 1 次
              time = new Date().getTime();
              lastCheckData = this.lastCheckData;
              if (!(time - lastCheckData.check <= 1000 * 60 * 5 && lastCheckData.githubRelease)) {
                _context5.next = 6;
                break;
              }
              return _context5.abrupt("return", lastCheckData);
            case 6:
              _context5.next = 8;
              return this.database.getLatestVersion();
            case 8:
              info = _context5.sent;
              this.lastCheckData = {
                sha: info.target_commitish,
                githubRelease: info,
                check: Date.now()
              };
              this.checked = true;
              return _context5.abrupt("return", this.lastCheckData);
            case 12:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function checkVersion() {
        return _checkVersion.apply(this, arguments);
      }
      return checkVersion;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee6() {
        var _checkData$githubRele,
          _this3 = this;
        var checkData, info, timer, data;
        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this.badge.set('', '#4A90E2', 2);
              this.pushDownloadStatus({
                run: true,
                info: '加载中'
              });
              _context6.next = 4;
              return this.checkVersion();
            case 4:
              checkData = _context6.sent;
              if (checkData !== null && checkData !== void 0 && (_checkData$githubRele = checkData.githubRelease) !== null && _checkData$githubRele !== void 0 && _checkData$githubRele.target_commitish) {
                _context6.next = 8;
                break;
              }
              this.logger.debug('checkData', checkData);
              throw new Error('无法获取版本信息');
            case 8:
              info = checkData.githubRelease;
              timer = this.logger.time("\u5F00\u59CB\u4E0B\u8F7D");
              _context6.prev = 10;
              this.pushDownloadStatus({
                info: '0%',
                progress: 0
              });
              this.badge.set('0', '#4A90E2', 1);
              _context6.next = 15;
              return this.database.getData(info, function (progress) {
                var percent = Math.floor(progress * 100);
                _this3.pushDownloadStatus({
                  info: "".concat(percent, "%"),
                  progress: percent
                });
                _this3.badge.set(percent.toFixed(0), '#4A90E2', 1);
              });
            case 15:
              data = _context6.sent;
              this.pushDownloadStatus({
                info: '下载完成',
                progress: 100
              });
              this.badge.set('100', '#4A90E2', 1);
              return _context6.abrupt("return", {
                release: info,
                data: data
              });
            case 19:
              _context6.prev = 19;
              timer.end();
              return _context6.finish(19);
            case 22:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[10,, 19, 22]]);
      }));
      function download() {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }]);
  return DatabaseUpdater;
}();
DatabaseUpdater = __decorate([Service(), __metadata("design:paramtypes", [Logger, messaging_Messaging, Storage, Database, BadgeLoading])], DatabaseUpdater);

;// CONCATENATED MODULE: ./src/plugin/suggest.ts



function suggest_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = suggest_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function suggest_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return suggest_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return suggest_arrayLikeToArray(o, minLen); }
function suggest_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






var Suggest = /*#__PURE__*/function () {
  function Suggest(logger, messaging, tagging) {
    var _this = this;
    _classCallCheck(this, Suggest);
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.nsScore = {
      other: 10,
      female: 9,
      male: 8.5,
      mixed: 8,
      language: 2,
      artist: 2.5,
      cosplayer: 2.4,
      group: 2.2,
      parody: 3.3,
      character: 2.8,
      reclass: 1,
      rows: 0,
      temp: 0.1
    };
    this.tagList = [];
    this.sha = '';
    messaging.on('suggest-tag', function (args) {
      return _this.getSuggests(args.term, args.limit);
    });
    this.update()["catch"](logger.error);
  }
  _createClass(Suggest, [{
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var v;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.messaging.emit('get-tag-map', {
                ifNotMatch: this.sha
              });
            case 2:
              v = _context.sent;
              if (v.map) this.tagList = Object.values(v.map);
              this.sha = v.sha;
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function update() {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "markTag",
    value: function markTag(tag, search, term) {
      var score = 0;
      var ns = this.tagging.namespace(tag.ns);
      var match = {};
      var key = tag.key;
      var keyIdx = tag.key.indexOf(search);
      if (keyIdx >= 0) {
        score += this.nsScore[ns] * (search.length + 1) / key.length * (keyIdx === 0 ? 2 : 1);
        match.key = {
          start: keyIdx,
          end: keyIdx + search.length
        };
      }
      var name = tag.cn.toLowerCase();
      var nameIdx = name.indexOf(search);
      if (nameIdx >= 0) {
        score += this.nsScore[ns] * (search.length + 1) / name.length * (nameIdx === 0 ? 2 : 1);
        match.cn = {
          start: nameIdx,
          end: nameIdx + search.length
        };
      }
      if (tag.introSearch) {
        var intro = tag.introSearch;
        var introIdx = intro.indexOf(search);
        if (introIdx >= 0) {
          score += this.nsScore[ns] * (search.length + 1) / intro.length * 0.5;
        }
      }
      return {
        tag: tag,
        term: term,
        match: match,
        score: score
      };
    }
  }, {
    key: "getSuggests",
    value: function () {
      var _getSuggests = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(term) {
        var limit,
          timer,
          sTerm,
          col,
          tagList,
          ns,
          suggestions,
          _iterator,
          _step,
          tag,
          st,
          _args2 = arguments;
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              limit = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : -1;
              if (term) {
                _context2.next = 3;
                break;
              }
              return _context2.abrupt("return", []);
            case 3:
              _context2.next = 5;
              return this.update();
            case 5:
              if (this.tagList.length) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return", []);
            case 7:
              timer = this.logger.time("\u641C\u7D22\uFF1A".concat(term));
              sTerm = term.toLowerCase().normalize();
              col = sTerm.indexOf(':');
              tagList = this.tagList;
              if (col >= 1) {
                ns = this.tagging.ns(sTerm.slice(0, col));
                if (ns) {
                  sTerm = sTerm.slice(col + 1);
                  tagList = tagList.filter(function (tag) {
                    return tag.ns === ns;
                  });
                }
              }
              if (sTerm.slice(0, 1) === '"') {
                sTerm = sTerm.slice(1);
              }
              suggestions = [];
              _iterator = suggest_createForOfIteratorHelper(tagList);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  tag = _step.value;
                  st = this.markTag(tag, sTerm, term);
                  if (st.score > 0) suggestions.push(st);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              suggestions.sort(function (st1, st2) {
                return st2.score - st1.score;
              });
              if (limit > 0) {
                suggestions = suggestions.slice(0, limit);
              }
              this.logger.debug("\u641C\u7D22\uFF1A".concat(term), suggestions);
              timer.end();
              return _context2.abrupt("return", suggestions);
            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getSuggests(_x) {
        return _getSuggests.apply(this, arguments);
      }
      return getSuggests;
    }()
  }]);
  return Suggest;
}();
Suggest = __decorate([Service(), __metadata("design:paramtypes", [Logger, messaging_Messaging, Tagging])], Suggest);

;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/Subject.js






var Subject = (function (_super) {
    tslib_es6_extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));

var AnonymousSubject = (function (_super) {
    tslib_es6_extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js


var BehaviorSubject = (function (_super) {
    tslib_es6_extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
            throw thrownError;
        }
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, (this._value = value));
    };
    return BehaviorSubject;
}(Subject));

//# sourceMappingURL=BehaviorSubject.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/util/EmptyError.js

var EmptyError = createErrorClass(function (_super) { return function EmptyErrorImpl() {
    _super(this);
    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
}; });
//# sourceMappingURL=EmptyError.js.map
;// CONCATENATED MODULE: ./node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/dist/esm5/internal/firstValueFrom.js


function firstValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function (resolve, reject) {
        var subscriber = new SafeSubscriber({
            next: function (value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function () {
                if (hasConfig) {
                    resolve(config.defaultValue);
                }
                else {
                    reject(new EmptyError());
                }
            },
        });
        source.subscribe(subscriber);
    });
}
//# sourceMappingURL=firstValueFrom.js.map
;// CONCATENATED MODULE: ./src/plugin/tag-database.ts





function tag_database_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function tag_database_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? tag_database_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : tag_database_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }








/* 数据存储结构版本, 如果不同 系统会自动执行 storageTagData 重新构建数据*/
/* 注意这是本地数据结构, 主要用于 storageTagData内解析方法发生变化, 重新加载数据的, 与线上无关*/
var DATA_STRUCTURE_VERSION = 12;
var TagDatabase = /*#__PURE__*/function () {
  function TagDatabase(storage, logger, messaging, tagging) {
    var _this = this;
    _classCallCheck(this, TagDatabase);
    this.storage = storage;
    this.logger = logger;
    this.messaging = messaging;
    this.tagging = tagging;
    this.tagMap = new BehaviorSubject(undefined);
    messaging.on('get-tag', function (key) {
      return firstValueFrom(_this.mapView.pipe(map(function (v) {
        return v.map[key];
      })));
    });
    messaging.on('get-tag-map', function (_ref) {
      var ifNotMatch = _ref.ifNotMatch;
      return firstValueFrom(_this.mapView.pipe(map(function (v) {
        if (ifNotMatch === v.sha) return {
          sha: v.sha,
          map: undefined
        };
        return {
          sha: v.sha,
          map: v.map
        };
      })));
    });
    messaging.on('get-tag-sha', function () {
      return firstValueFrom(_this.mapView.pipe(map(function (v) {
        return v.sha;
      })));
    });
    this.init()["catch"](logger.error);
  }
  _createClass(TagDatabase, [{
    key: "mapView",
    get: function get() {
      return this.tagMap.pipe(filter(function (v) {
        return v != null;
      }));
    }
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var _this2 = this;
        var data, dataMap, timer;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.storage.get('databaseInfo');
            case 2:
              data = _context.sent;
              _context.next = 5;
              return this.storage.get('database');
            case 5:
              dataMap = _context.sent;
              this.messaging.on('update-tag', function (data) {
                return _this2.update(data);
              });
              if (!(!data || data.version !== DATA_STRUCTURE_VERSION || !dataMap || !data.sha)) {
                _context.next = 17;
                break;
              }
              this.tagMap.next({
                sha: '',
                map: {}
              });
              timer = this.logger.time('数据结构变化, 重新构建数据');
              _context.next = 12;
              return this.storage.migrate();
            case 12:
              _context.next = 14;
              return this.messaging.emit('update-database', {
                force: true
              });
            case 14:
              timer.end();
              _context.next = 18;
              break;
            case 17:
              this.tagMap.next(tag_database_objectSpread(tag_database_objectSpread({}, data), {}, {
                map: dataMap
              }));
            case 18:
              this.logger.log('标签数据库初始化完成');
              this.tagMap.subscribe({
                next: function next() {
                  void _this2.messaging.emit('tag-updated', undefined, true);
                }
              });
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "update",
    value: function update(tagDB) {
      var _this3 = this;
      var timer = this.logger.time('构建数据');
      var sha = tagDB.head.sha;
      var map = {};
      var check = Date.now();
      tagDB.data.forEach(function (nsData) {
        var namespace = nsData.namespace;
        if (namespace === 'rows') return;
        for (var key in nsData.data) {
          var t = nsData.data[key];
          var fullKey = _this3.tagging.fullKey({
            namespace: namespace,
            key: key
          });
          var name = _this3.tagging.removePara(t.name);
          var ehTag = {
            ns: _this3.tagging.ns(namespace),
            key: key,
            name: name,
            cn: _this3.tagging.removeImagesAndEmoji(name),
            introSearch: ''
          };
          if (t.intro) {
            ehTag.intro = t.intro;
            ehTag.introSearch += '\0' + _this3.tagging.removeHtmlTags(t.intro).toLowerCase();
          }
          if (t.links) {
            ehTag.links = t.links;
            ehTag.introSearch += '\0' + _this3.tagging.removeHtmlTags(t.links).toLowerCase();
          }
          map[fullKey] = ehTag;
        }
      });
      this.tagMap.next({
        map: map,
        sha: sha
      });
      // 后台继续处理，直接返回
      this.storage.set('databaseInfo', {
        sha: sha,
        check: check,
        version: DATA_STRUCTURE_VERSION
      })["catch"](this.logger.error);
      this.storage.set('database', map)["catch"](this.logger.error);
      timer.end();
    }
  }]);
  return TagDatabase;
}();
TagDatabase = __decorate([Service(), __metadata("design:paramtypes", [Storage, Logger, messaging_Messaging, Tagging])], TagDatabase);

;// CONCATENATED MODULE: ./src/plugin/image-context-menu.ts







var ImageContextMenu = /*#__PURE__*/function () {
  function ImageContextMenu() {
    _classCallCheck(this, ImageContextMenu);
    this.documentUrlPatterns = ["*://".concat(EX, "/*"), "*://".concat(EXU, "/*"), "*://".concat(EH, "/*"), "*://*.".concat(EX, "/*"), "*://*.".concat(EXU, "/*"), "*://*.".concat(EH, "/*")];
    this.title = "\u663E\u793A\u6240\u6709\u5305\u542B\u6B64\u56FE\u50CF\u7684\u56FE\u5E93";
    this.targetUrlPatterns = ["*://".concat(EX, "/t/*.jpg"), "*://".concat(EXU, "/t/*.jpg"), "*://s.".concat(EX, "/t/*.jpg"), "*://s.".concat(EXU, "/t/*.jpg"), "*://".concat(EHGT, "/*.jpg"), "*://ul.".concat(EHGT, "/*.jpg"), "*://*.".concat(HATH, ":*/h/*"), "*://*.".concat(HATH, "/h/*")];
    this.contexts = ['image', 'link'];
    this.onclick = function (info) {
      if (!info.url) return;
      var url = new URL(info.url);
      var match = /[a-f0-9]{40}/i.exec(url.pathname);
      if (!match) return;
      var base = "https://".concat(EX);
      if (isEhGt(url.hostname)) base = "https://".concat(EH);else if (isUnion(url.hostname)) base = "http://".concat(EXU);
      openInTab("".concat(base, "/?f_shash=").concat(match[0]));
    };
    this.init();
  }
  _createClass(ImageContextMenu, [{
    key: "init",
    value: function init() {
      createMenu(this);
    }
  }]);
  return ImageContextMenu;
}();
ImageContextMenu = __decorate([Service(), __metadata("design:paramtypes", [])], ImageContextMenu);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.2/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/lit-html@3.0.1/node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),b=y(2),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r.createTreeWalker(r,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x)}return[C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t)}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l())}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1}c++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n]}o!==l?.index&&(h=E.nextNode(),o++)}return E.currentNode=r,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r}o&&!e&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class k extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}class H extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const z={S:e,A:h,P:o,C:1,M:P,L:S,R:u,V:N,D:M,I:R,H,N:I,U:k,B:L},Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.0.1");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{})}return h._$AI(t),h};
//# sourceMappingURL=lit-html.js.map

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.31_typescript@5.2.2_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/.pnpm/less-loader@11.1.3_less@4.2.0_webpack@5.89.0/node_modules/less-loader/dist/cjs.js!./src/plugin/popup/index.less
var popup = __webpack_require__(4908);
;// CONCATENATED MODULE: ./src/plugin/popup/index.less

      
      
      
      
      
      
      
      
      

var popup_options = {};

popup_options.styleTagTransform = (styleTagTransform_default());
popup_options.setAttributes = (setAttributesWithoutAttributes_default());

      popup_options.insert = insertBySelector_default().bind(null, ":root");
    
popup_options.domAPI = (styleDomAPI_default());
popup_options.insertStyleElement = (insertStyleElement_default());

var popup_update = injectStylesIntoStyleTag_default()(popup/* default */.Z, popup_options);




       /* harmony default export */ var plugin_popup = (popup/* default */.Z && popup/* default */.Z.locals ? popup/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/plugin/popup/index.ts






var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function popup_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function popup_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? popup_ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : popup_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }











var Popup = /*#__PURE__*/function () {
  function Popup(logger, messaging, storage, time) {
    var _this = this;
    _classCallCheck(this, Popup);
    this.logger = logger;
    this.messaging = messaging;
    this.storage = storage;
    this.time = time;
    this.defaults = function () {
      return {
        sha: '',
        info: '',
        updateTime: '',
        updateTimeFull: '',
        newSha: '',
        versionInfo: '',
        updateAvailable: false,
        updateButtonDisabled: false,
        showSettingPanel: false,
        progress: 0,
        animationState: 0,
        configValue: popup_objectSpread({}, _this.configOriginal)
      };
    };
    this.testAnimationIndex = 0;
    this.testAnimationList = [[1, 0], [1, 10], [1, 30], [1, 80], [1, 100], [2, 100], [2, 5], [1, 5], [0, 0]];
    this.openLink = function (ev) {
      if (ev.target instanceof HTMLAnchorElement) {
        var href = ev.target.href;
        if (href && !href.startsWith(document.location.origin + document.location.pathname)) {
          ev.preventDefault();
          openInTab(href);
          _this.provider.close();
        }
      }
    };
    this.downloadStatus = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(data) {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.state.updateButtonDisabled = data.run;
              _this.state.animationState = data.run ? 1 : 0;
              _this.state.info = data.info;
              _this.state.progress = data.progress || 0;
              if (!data.complete) {
                _context.next = 18;
                break;
              }
              _context.next = 7;
              return sleep(1000);
            case 7:
              _this.state.progress = 100;
              _this.state.animationState = 2;
              _this.state.updateButtonDisabled = false;
              _context.next = 12;
              return _this.checkVersion();
            case 12:
              _context.next = 14;
              return sleep(500);
            case 14:
              _this.state.progress = 5;
              _context.next = 17;
              return sleep(500);
            case 17:
              _this.state.animationState = 1;
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  _createClass(Popup, [{
    key: "loadConfig",
    value: function () {
      var _loadConfig = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2() {
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = popup_objectSpread;
              _context2.t1 = popup_objectSpread({}, this.storage.defaults.config);
              _context2.next = 4;
              return this.storage.get('config');
            case 4:
              _context2.t2 = _context2.sent;
              this.configOriginal = (0, _context2.t0)(_context2.t1, _context2.t2);
              this.state.configValue = popup_objectSpread({}, this.configOriginal);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function loadConfig() {
        return _loadConfig.apply(this, arguments);
      }
      return loadConfig;
    }()
  }, {
    key: "testAnimation",
    value: function testAnimation() {
      var a = this.testAnimationList[this.testAnimationIndex];
      this.testAnimationIndex++;
      if (!this.testAnimationList[this.testAnimationIndex]) {
        this.testAnimationIndex = 0;
      }
      this.state.animationState = a[0];
      this.state.progress = a[1];
    }
  }, {
    key: "checkVersion",
    value: function () {
      var _checkVersion = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee3() {
        var _yield$this$storage$g;
        var currentSha, updateTime, data, hasNewData, message;
        return regenerator_default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.state.versionInfo = '检查中...';
              _context3.next = 3;
              return this.messaging.emit('get-tag-sha', undefined);
            case 3:
              currentSha = _context3.sent;
              _context3.next = 6;
              return this.storage.get('databaseInfo');
            case 6:
              _context3.t1 = _yield$this$storage$g = _context3.sent;
              _context3.t0 = _context3.t1 === null;
              if (_context3.t0) {
                _context3.next = 10;
                break;
              }
              _context3.t0 = _yield$this$storage$g === void 0;
            case 10:
              if (!_context3.t0) {
                _context3.next = 14;
                break;
              }
              _context3.t2 = void 0;
              _context3.next = 15;
              break;
            case 14:
              _context3.t2 = _yield$this$storage$g.check;
            case 15:
              updateTime = _context3.t2;
              this.state.sha = currentSha ? currentSha.slice(0, 7) : 'N/A';
              this.state.updateTime = updateTime ? this.time.diff(updateTime) : 'N/A';
              this.state.updateTimeFull = updateTime ? new Date(updateTime).toLocaleString() : 'N/A';
              _context3.prev = 19;
              _context3.next = 22;
              return this.messaging.emit('check-database', {
                force: true
              });
            case 22:
              data = _context3.sent;
              this.logger.log('Release Data', data);
              hasNewData = this.state.updateAvailable = data.sha !== currentSha;
              if (hasNewData) {
                this.state.newSha = data.sha.slice(0, 7);
                this.state.versionInfo = "\u6709\u66F4\u65B0\uFF01";
              } else {
                this.state.versionInfo = '已是最新版本';
              }
              _context3.next = 33;
              break;
            case 28:
              _context3.prev = 28;
              _context3.t3 = _context3["catch"](19);
              this.logger.error('获取失败', _context3.t3);
              message = (_context3.t3 instanceof Error ? _context3.t3.message : '未知错误') || '未知错误';
              this.state.versionInfo = "\u83B7\u53D6\u5931\u8D25\uFF1A".concat(message);
            case 33:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[19, 28]]);
      }));
      function checkVersion() {
        return _checkVersion.apply(this, arguments);
      }
      return checkVersion;
    }()
  }, {
    key: "updateButtonClick",
    value: function () {
      var _updateButtonClick = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee4() {
        return regenerator_default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.state.updateButtonDisabled = true;
              _context4.next = 3;
              return this.messaging.emit('update-database', {
                force: true,
                recheck: false
              });
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function updateButtonClick() {
        return _updateButtonClick.apply(this, arguments);
      }
      return updateButtonClick;
    }()
  }, {
    key: "logoTemplate",
    value: function logoTemplate() {
      var progress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var PushRodStyle = "transform: translate(".concat(progress / 400 * 70, "px, 0)");
      var EnemaStyle = "transform: scaleX(".concat(progress / 100, ")");
      return b(_templateObject || (_templateObject = _taggedTemplateLiteral(["<svg width=\"160\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">\n            <defs>\n                <clipPath id=\"clip\">\n                    <rect width=\"200\" height=\"200\" />\n                </clipPath>\n            </defs>\n            <g id=\"Syringe\" clip-path=\"url(#clip)\">\n                <g id=\"PushRod\" style=\"", "\">\n                    <g transform=\"translate(-39 -312)\">\n                        <g transform=\"translate(131 403)\" fill-bg stroke-accent stroke-width=\"6\">\n                            <rect width=\"78\" height=\"18\" rx=\"6\" stroke=\"none\" />\n                            <rect x=\"3\" y=\"3\" width=\"72\" height=\"12\" rx=\"3\" fill=\"none\" />\n                        </g>\n                        <g transform=\"translate(203 391)\" fill-bg stroke-accent stroke-width=\"6\">\n                            <rect width=\"18\" height=\"43\" rx=\"9\" stroke=\"none\" />\n                            <rect x=\"3\" y=\"3\" width=\"12\" height=\"37\" rx=\"6\" fill=\"none\" />\n                        </g>\n                    </g>\n                </g>\n                <g transform=\"translate(56 85)\" fill-bg stroke-accent stroke-width=\"6\">\n                    <rect width=\"83\" height=\"30\" rx=\"6\" stroke=\"none\" />\n                    <rect x=\"3\" y=\"3\" width=\"77\" height=\"24\" rx=\"3\" fill=\"none\" />\n                </g>\n                <g id=\"Enema\" style=\"", "\">\n                    <rect width=\"70\" height=\"27\" transform=\"translate(61 86)\" fill-sa />\n                </g>\n                <path\n                    id=\"Enema2\"\n                    d=\"M27.426,86.36s5.65.007,13.6.006S57.64,83.357,57.64,83.357L38.015,102.982,24.409,89.377l3.015-3.015Z\"\n                    transform=\"translate(107.906 10.036) rotate(45)\"\n                    fill-sa\n                />\n                <g transform=\"translate(-39 -312)\">\n                    <g transform=\"translate(95 397)\" fill=\"none\" stroke-accent stroke-width=\"6\">\n                        <rect width=\"83\" height=\"30\" rx=\"6\" stroke=\"none\" />\n                        <rect x=\"3\" y=\"3\" width=\"77\" height=\"24\" rx=\"3\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(82 403)\" fill-sa stroke-accent stroke-width=\"6\">\n                        <rect width=\"19\" height=\"18\" rx=\"6\" stroke=\"none\" />\n                        <rect x=\"3\" y=\"3\" width=\"13\" height=\"12\" rx=\"3\" fill=\"none\" />\n                    </g>\n                    <rect width=\"29\" height=\"6\" rx=\"3\" transform=\"translate(58 409)\" fill-accent />\n                    <g transform=\"translate(172 381)\" fill-bg stroke-accent stroke-width=\"6\">\n                        <rect width=\"18\" height=\"62\" rx=\"9\" stroke=\"none\" />\n                        <rect x=\"3\" y=\"3\" width=\"12\" height=\"56\" rx=\"6\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(119 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(131 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(144 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                    <g transform=\"translate(156 398)\" fill-bg stroke-accent stroke-width=\"3\">\n                        <rect width=\"4\" height=\"11\" rx=\"2\" stroke=\"none\" />\n                        <rect x=\"1.5\" y=\"1.5\" width=\"1\" height=\"8\" rx=\"0.5\" fill=\"none\" />\n                    </g>\n                </g>\n            </g>\n        </svg>"])), PushRodStyle, EnemaStyle);
    }
  }, {
    key: "changeConfigValue",
    value: function changeConfigValue(key, value) {
      this.state.configValue = popup_objectSpread(popup_objectSpread({}, this.state.configValue), {}, _defineProperty({}, key, value));
    }
  }, {
    key: "changeConfigUnsaved",
    value: function changeConfigUnsaved() {
      var _this2 = this;
      if (!this.configOriginal) return false;
      var keys = [].concat(_toConsumableArray(Object.keys(this.configOriginal)), _toConsumableArray(Object.keys(this.state.configValue)));
      return keys.some(function (key) {
        return _this2.configOriginal[key] !== _this2.state.configValue[key];
      });
    }
  }, {
    key: "saveConfig",
    value: function () {
      var _saveConfig = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee5() {
        return regenerator_default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.storage.set('config', this.state.configValue);
            case 2:
              _context5.next = 4;
              return this.loadConfig();
            case 4:
              _context5.next = 6;
              return sleep(200);
            case 6:
              this.provider.close();
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function saveConfig() {
        return _saveConfig.apply(this, arguments);
      }
      return saveConfig;
    }()
  }, {
    key: "settingPanelTemplate",
    value: function settingPanelTemplate() {
      var _this3 = this;
      var state = this.state;
      var checkboxList = [{
        key: 'translateUi',
        name: '翻译界面'
      }, {
        key: 'translateTag',
        name: '翻译标签'
      }, {
        key: 'translateTimestamp',
        name: '翻译时间戳'
      }, {
        key: 'showIntroduce',
        name: '标签介绍'
      }, {
        key: 'showIcon',
        name: '显示标签图标'
      }, {
        key: 'tagTip',
        name: '搜索提示'
      }, {
        key: 'autoUpdate',
        name: '自动更新'
      }];
      return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            <div id=\"ehs-setting-panel\" class=\"ehs-panel ", "\">\n                <div class=\"header\">\n                    <div>\u8BBE\u7F6E</div>\n                    <div class=\"cushion\"></div>\n                    <div>\n                        <a\n                            href=\"#\"\n                            @click=\"", "\"\n                            >\u2715</a\n                        >\n                    </div>\n                </div>\n                <form id=\"settingForm\" class=\"content\">\n                    ", "\n                    <div class=\"image-level\">\n                        <p class=\"range-title\">\n                            \u4ECB\u7ECD\u56FE\u7247:\n                            <span\n                                >", "</span\n                            >\n                        </p>\n                        <div class=\"range-box\">\n                            <input\n                                type=\"range\"\n                                min=\"0\"\n                                max=\"300\"\n                                @change=", "\n                                .value=\"", "\"\n                            />\n                        </div>\n                        <div class=\"range-label\" @click=\"", "\">\n                            <a href=\"#\" @click=\"", "\"\n                                >\u7981\u7528</a\n                            >\n                            <a href=\"#\" @click=\"", "\"\n                                >\u975EH</a\n                            >\n                            <a href=\"#\" @click=\"", "\"\n                                >R18</a\n                            >\n                            <a href=\"#\" @click=\"", "\"\n                                >R18G</a\n                            >\n                        </div>\n                    </div>\n                </form>\n                <button\n                    @click=\"", "\"\n                    class=\"action ", "\"\n                >\n                    \u4FDD\u5B58\n                </button>\n            </div>\n        "])), state.showSettingPanel ? 'ehs-show' : '', function (ev) {
        state.showSettingPanel = false;
        ev.preventDefault();
      }, checkboxList.map(function (item) {
        return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                            <div class=\"checkbox-item\">\n                                <label>\n                                    <input\n                                        type=\"checkbox\"\n                                        @change=", "\n                                        ?checked=\"", "\"\n                                    />\n                                    ", "\n                                    <svg\n                                        class=\"", "\"\n                                        viewBox=\"0 0 100 100\"\n                                        xmlns=\"http://www.w3.org/2000/svg\"\n                                    >\n                                        <path d=\"M 10 10 L 90 90\"></path>\n                                        <path d=\"M 90 10 L 10 90\"></path>\n                                    </svg>\n                                </label>\n                            </div>\n                        "])), function (e) {
          return _this3.changeConfigValue(item.key, e.target.checked);
        }, _this3.state.configValue[item.key], item.name, _this3.state.configValue[item.key] ? 'checked' : '');
      }), ['隐藏全部', '隐藏色情图片', '隐藏引起不适的图片', '全部显示'][state.configValue.introduceImageLevel], function (e) {
        var value = Math.round(parseInt(e.target.value, 10) / 100);
        _this3.changeConfigValue('introduceImageLevel', value + 1);
        _this3.changeConfigValue('introduceImageLevel', value);
      }, String(state.configValue.introduceImageLevel * 100), function (ev) {
        return ev.preventDefault();
      }, function () {
        return _this3.changeConfigValue('introduceImageLevel', ImageLevel.hide);
      }, function () {
        return _this3.changeConfigValue('introduceImageLevel', ImageLevel.nonH);
      }, function () {
        return _this3.changeConfigValue('introduceImageLevel', ImageLevel.r18);
      }, function () {
        return _this3.changeConfigValue('introduceImageLevel', ImageLevel.r18g);
      }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee6() {
        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this3.saveConfig();
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      })), this.changeConfigUnsaved() ? 'primary' : '');
    }
  }, {
    key: "mainPanelTemplate",
    value: function mainPanelTemplate() {
      var _this4 = this;
      var state = this.state;
      return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<div id=\"ehs-main-panel\" class=\"ehs-panel ", "\">\n            <div class=\"header\">\n                <div>\n                    <a href=\"", "\" class=\"monospace minor\">v", "</a>\n                </div>\n                <div class=\"cushion\"></div>\n                <div>\n                    <a\n                        id=\"settingSwitch\"\n                        href=\"#\"\n                        @click=\"", "\"\n                        >\u8BBE\u7F6E</a\n                    >\n                </div>\n            </div>\n            <div class=\"content\">\n                <div class=\"logo-box\" style=\"height: 205px;\">\n                    <div\n                        class=\"logo ", "\"\n                        @click=\"", "\"\n                    >\n                        ", "\n                    </div>\n                    <div id=\"info\">", "</div>\n                </div>\n                <table>\n                    <tr>\n                        <th>TAG\u7248\u672C\uFF1A</th>\n                        <td>\n                            <a href=\"https://github.com/EhTagTranslation/Database/tree/", "\" class=\"monospace\"\n                                >", "</a\n                            >\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>\u4E0A\u6B21\u66F4\u65B0\uFF1A</th>\n                        <td>\n                            <span>", "</span>\n                        </td>\n                    </tr>\n                    <tr>\n                        <th>\u66F4\u65B0\u68C0\u67E5\uFF1A</th>\n                        <td>\n                            <span class=\"", "\">\n                                ", "\n                                <a\n                                    class=\"monospace ", "\"\n                                    href=\"https://github.com/EhTagTranslation/Database/tree/", "\"\n                                >\n                                    ", "\n                                </a>\n                            </span>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <button\n                @click=\"", "\"\n                ?disabled=", "\n                class=\"action ", "\"\n                id=\"updateButton\"\n            >\n                \u66F4\u65B0\n            </button>\n        </div>"])), state.showSettingPanel ? 'ehs-hide' : '', packageJson.homepage, packageJson.version, function (ev) {
        state.showSettingPanel = true;
        ev.preventDefault();
      }, ['', 'prominent', 'prominent injection'][state.animationState] || '', function () {
        _this4.testAnimation();
      }, this.logoTemplate(state.progress), state.info, state.sha, state.sha || ' --- ', state.updateTime || ' --- ', state.updateAvailable ? 'hasNew' : '', state.versionInfo, state.updateAvailable ? '' : 'hidden', state.newSha, state.newSha || '', function () {
        return _this4.updateButtonClick();
      }, state.updateButtonDisabled, state.updateAvailable ? 'primary' : '');
    }
  }, {
    key: "template",
    value: function template() {
      var state = this.state;
      return x(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([" <div id=\"eh-syringe-popup-root\">\n            ", " ", "\n        </div>"])), this.mainPanelTemplate(), state.configValue ? this.settingPanelTemplate() : T);
    }
  }, {
    key: "mount",
    value: function mount(el, provider) {
      var _this5 = this;
      if (this.el != null) throw new Error('Injected twice');
      this.el = el;
      this.provider = provider;
      this.resetState();
      this.updateView();
      provider.onopen(function () {
        return _this5.onopen()["catch"](_this5.logger.error);
      });
      provider.onclose(function () {
        return _this5.onclose();
      });
    }
  }, {
    key: "resetState",
    value: function resetState() {
      var _this6 = this;
      this.state = new Proxy(this.defaults(), {
        set: function set(target, key, value, receiver) {
          var r = Reflect.set(target, key, value, receiver);
          _this6.updateView();
          return r;
        }
      });
    }
  }, {
    key: "onopen",
    value: function () {
      var _onopen = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee7() {
        return regenerator_default().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              this.resetState();
              _context7.next = 3;
              return this.loadConfig();
            case 3:
              this.updateView();
              _context7.next = 6;
              return sleep(0);
            case 6:
              _context7.next = 8;
              return this.checkVersion();
            case 8:
              if (!this.downloadStatusSub) {
                this.downloadStatusSub = this.messaging.on('updating-database', this.downloadStatus);
              }
              this.el.addEventListener('click', this.openLink);
            case 10:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function onopen() {
        return _onopen.apply(this, arguments);
      }
      return onopen;
    }()
  }, {
    key: "onclose",
    value: function onclose() {
      if (this.downloadStatusSub) {
        this.messaging.off(this.downloadStatusSub);
        this.downloadStatusSub = undefined;
      }
      this.el.removeEventListener('click', this.openLink);
      this.state.showSettingPanel = false;
    }
  }, {
    key: "updateView",
    value: function updateView() {
      j(this.template(), this.el);
    }
  }]);
  return Popup;
}();
Popup = __decorate([Service(), __metadata("design:paramtypes", [Logger, messaging_Messaging, Storage, DateTime])], Popup);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.89.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.31_typescript@5.2.2_webpack@5.89.0/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/.pnpm/less-loader@11.1.3_less@4.2.0_webpack@5.89.0/node_modules/less-loader/dist/cjs.js!./src/user-script/popup-host.less
var popup_host = __webpack_require__(3703);
;// CONCATENATED MODULE: ./src/user-script/popup-host.less

      
      
      
      
      
      
      
      
      

var popup_host_options = {};

popup_host_options.styleTagTransform = (styleTagTransform_default());
popup_host_options.setAttributes = (setAttributesWithoutAttributes_default());

      popup_host_options.insert = insertBySelector_default().bind(null, ":root");
    
popup_host_options.domAPI = (styleDomAPI_default());
popup_host_options.insertStyleElement = (insertStyleElement_default());

var popup_host_update = injectStylesIntoStyleTag_default()(popup_host/* default */.Z, popup_host_options);




       /* harmony default export */ var user_script_popup_host = (popup_host/* default */.Z && popup_host/* default */.Z.locals ? popup_host/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/user-script/popup-host.ts






function getNumber(key, defaultValue) {
  var value = localStorage.getItem(key);
  if (!value) return defaultValue;
  var parsed = Number.parseFloat(value);
  if (Number.isNaN(parsed)) return defaultValue;
  return parsed;
}
function clamp(value, min, max) {
  if (value < min) value = min;else if (value > max) value = max;
  return value;
}
var clampX = function clampX(value) {
  return clamp(value, 4, document.documentElement.clientWidth - 44);
};
var clampY = function clampY(value) {
  return clamp(value, 4, document.documentElement.clientHeight - 44);
};
function dragButton(el, click) {
  var initX = clampX(getNumber("eh-popup-button-x", 0.02) * document.documentElement.clientWidth);
  var initY = clampY(getNumber("eh-popup-button-y", 0.02) * document.documentElement.clientHeight);
  // set the element's init position:
  el.style.bottom = "".concat(initY, "px");
  el.style.right = "".concat(initX, "px");
  var mouseX = 0,
    mouseY = 0,
    startX = 0,
    startY = 0;
  el.addEventListener('pointerdown', dragMouseDown, {
    passive: false
  });
  el.addEventListener('click', elementClick, {
    passive: false
  });
  var moved = false;
  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    startX = mouseX = e.clientX;
    startY = mouseY = e.clientY;
    moved = false;
    document.addEventListener('pointerup', closeDragElement, {
      passive: false
    });
    document.addEventListener('pointermove', elementDrag, {
      passive: false
    });
  }
  function elementDrag(e) {
    e.preventDefault();
    var currentX = Number.parseFloat(el.style.right);
    var currentY = Number.parseFloat(el.style.bottom);
    // calculate the new cursor position:
    var diffX = mouseX - e.clientX;
    var diffY = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    var nextX = clampX(currentX + diffX);
    var nextY = clampY(currentY + diffY);
    // set the element's new position:
    el.style.right = "".concat(nextX, "px");
    el.style.bottom = "".concat(nextY, "px");
    if (Math.abs(mouseX - startX) + Math.abs(mouseY - startY) > 10) {
      moved = true;
    }
  }
  function closeDragElement(e) {
    e.preventDefault();
    // stop moving when mouse button is released:
    document.removeEventListener('pointerup', closeDragElement);
    document.removeEventListener('pointermove', elementDrag);
    var finalX = clampX(Number.parseFloat(el.style.right));
    var finalY = clampY(Number.parseFloat(el.style.bottom));
    el.style.right = "".concat(finalX, "px");
    el.style.bottom = "".concat(finalY, "px");
    localStorage.setItem("eh-popup-button-x", String(finalX / document.documentElement.clientWidth));
    localStorage.setItem("eh-popup-button-y", String(finalY / document.documentElement.clientHeight));
  }
  function elementClick(e) {
    if (moved) {
      moved = false;
      return;
    }
    click(e);
  }
}
function shouldShowPopup() {
  if (isHathNetwork(location.hostname)) return false;
  if (/^\/mpv\//i.test(location.pathname) || location.pathname === '/archiver.php' || location.pathname === '/gallerytorrents.php' || location.pathname === '/gallerypopups.php') return false;
  return true;
}
function createPopup() {
  if (!shouldShowPopup()) {
    return;
  }
  var button = document.body.appendChild(document.createElement('div'));
  button.id = 'eh-syringe-popup-button';
  button.title = packageJson.displayName;
  var badge = button.appendChild(document.createElement('div'));
  badge.id = 'eh-syringe-popup-badge';
  setBadge({
    text: ''
  });
  var popupBack = document.body.appendChild(document.createElement('div'));
  popupBack.id = 'eh-syringe-popup-back';
  popupBack.lang = 'cmn-Hans';
  var popup = popupBack.appendChild(document.createElement('div'));
  popup.id = 'eh-syringe-popup';
  var closeListeners = [];
  var openListeners = [];
  popupBack.classList.add('close');
  popupBack.ontransitionend = function (ev) {
    if (ev.target !== popupBack) return;
    if (popupBack.classList.contains('opening')) {
      popupBack.classList.remove('opening', 'close');
      popupBack.classList.add('open');
    }
    if (popupBack.classList.contains('closing')) {
      popupBack.classList.remove('closing', 'open');
      popupBack.classList.add('close');
      closeListeners.forEach(function (l) {
        return l();
      });
    }
  };
  var open = function open() {
    openListeners.forEach(function (l) {
      return l();
    });
    popupBack.classList.add('opening');
  };
  var close = function close() {
    popupBack.classList.add('closing');
  };
  services_Container.get(Popup).mount(popup, {
    close: close,
    onopen: function onopen(listener) {
      openListeners.push(listener);
    },
    onclose: function onclose(listener) {
      closeListeners.push(listener);
    }
  });
  popupBack.addEventListener('click', function (ev) {
    if (ev.target === popupBack && popupBack.classList.contains('open')) close();
  });
  dragButton(button, function () {
    if (popupBack.classList.contains('close')) open();
  });
}
;// CONCATENATED MODULE: ./src/user-script/index.ts













function main() {
  services_Container.get(DatabaseUpdater);
  services_Container.get(TagDatabase);
  services_Container.get(Syringe);
  function start() {
    services_Container.get(TagContextMenu);
    services_Container.get(ImageContextMenu);
    services_Container.get(Suggest);
    services_Container.get(AutoUpdate);
    services_Container.get(TagTip);
    services_Container.get(Introduce);
    createPopup();
  }
  ready(start);
}
// 为轻型用户脚本实现添加简单过滤
var LOADED_KEY = "EhTagTranslation:EhSyringeLoaded";
if (!(LOADED_KEY in window)) {
  Object.defineProperty(window, LOADED_KEY, {
    value: true
  });
  if (isValidHost(location.hostname)) {
    main();
  }
}
}();
/******/ })()
;
//# sourceMappingURL=ehsyringe.user.js.map