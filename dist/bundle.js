/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributesCard\": () => (/* binding */ AttributesCard),\n/* harmony export */   \"default\": () => (/* binding */ AppCard)\n/* harmony export */ });\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\n\n\nvar AttributesCard;\n(function (AttributesCard) {\n    AttributesCard[\"anime\"] = \"anime\";\n    AttributesCard[\"character\"] = \"character\";\n    AttributesCard[\"quote\"] = \"quote\";\n})(AttributesCard || (AttributesCard = {}));\nclass AppCard extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            anime: null,\n            character: null,\n            quote: null\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d;\n        const section = this.ownerDocument.createElement('section');\n        const h2 = this.ownerDocument.createElement('h2');\n        h2.innerText = `${this.anime}`;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(h2);\n        const h3 = this.ownerDocument.createElement('h3');\n        h3.innerText = `${this.character}`;\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(h3);\n        const h4 = this.ownerDocument.createElement('h4');\n        h4.innerText = `${this.quote}`;\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(h4);\n        const btn = this.ownerDocument.createElement('button');\n        btn.innerText = \"Add favorite\";\n        btn.addEventListener('click', () => {\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_0__.addNewQuote)({\n                payload: {\n                    anime: String(this.anime),\n                    character: String(this.character),\n                    quote: String(this.quote),\n                }\n            }));\n        });\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(btn);\n    }\n}\ncustomElements.define('app-card', AppCard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppCard\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n        }\n        const dashboard = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(dashboard);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppDashboard)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _services_getApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/getApi */ \"./src/services/getApi.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nclass AppDashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const data = yield (0,_services_getApi__WEBPACK_IMPORTED_MODULE_1__.getApi)();\n            this.render(data);\n            if (_store_index__WEBPACK_IMPORTED_MODULE_3__.appState.FavQuote.length === 0) {\n                const action = yield (0,_services_getApi__WEBPACK_IMPORTED_MODULE_1__.getApi)();\n                (0,_store_index__WEBPACK_IMPORTED_MODULE_3__.dispatch)(action);\n            }\n            else {\n                this.render(data);\n            }\n        });\n    }\n    render(data) {\n        var _a, _b;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n        }\n        const tittle = this.ownerDocument.createElement('h1');\n        tittle.innerText = \"Quotes\";\n        const sectionQuote = this.ownerDocument.createElement('section');\n        sectionQuote.appendChild(tittle);\n        data.forEach((e) => {\n            const cards = this.ownerDocument.createElement('app-card');\n            cards.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.AttributesCard.anime, e.anime);\n            cards.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.AttributesCard.character, e.character);\n            cards.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.AttributesCard.quote, e.quote);\n            sectionQuote.appendChild(cards);\n        });\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sectionQuote);\n        const favTittle = this.ownerDocument.createElement('h1');\n        favTittle.innerText = \"Favorite Quotes\";\n        const sectionFavorites = this.ownerDocument.createElement('section');\n        sectionFavorites.appendChild(favTittle);\n        _store_index__WEBPACK_IMPORTED_MODULE_3__.appState.FavQuote.forEach((fav, i) => {\n            const cards = this.ownerDocument.createElement('app-card');\n            cards.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.AttributesCard.anime, fav.anime);\n            cards.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.AttributesCard.character, fav.character);\n            cards.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_2__.AttributesCard.quote, fav.quote);\n            sectionFavorites.appendChild(cards);\n        });\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(sectionFavorites);\n    }\n}\ncustomElements.define('app-dashboard', AppDashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getApi.ts":
/*!********************************!*\
  !*** ./src/services/getApi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApi\": () => (/* binding */ getApi)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getApi() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://animechan.vercel.app/api/quotes');\n            const response = yield data.json();\n            console.log(response);\n            return response;\n        }\n        catch (error) {\n            console.log('error');\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/getApi.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewQuote\": () => (/* binding */ addNewQuote),\n/* harmony export */   \"getQuotes\": () => (/* binding */ getQuotes)\n/* harmony export */ });\n/* harmony import */ var _services_getApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getApi */ \"./src/services/getApi.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst getQuotes = () => __awaiter(void 0, void 0, void 0, function* () {\n    const Quotes = (0,_services_getApi__WEBPACK_IMPORTED_MODULE_0__.getApi)();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.QuoteActions.GET,\n        payload: []\n    };\n});\nconst addNewQuote = ({ payload }) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.QuoteActions.ADD,\n        payload\n    };\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.ts\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\n\nconst emptyState = {\n    FavQuote: [],\n};\nlet appState = _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get({\n    key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE,\n    defaultValue: emptyState\n});\nlet observers = [];\nconst keepStore = (state) => _utils_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set({ key: _utils_storage__WEBPACK_IMPORTED_MODULE_0__.PersistanceKeys.STORE, value: state });\nconst notifyObservers = () => { observers.forEach((o) => o.render()); };\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    const newState = (0,_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer)(action, clone);\n    appState = newState;\n    keepStore(newState);\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.QuoteActions.ADD:\n            return Object.assign(Object.assign({}, currentState), { FavQuote: [\n                    payload,\n                    ...currentState.FavQuote,\n                ] });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.QuoteActions.GET:\n            return Object.assign(Object.assign({}, currentState), { FavQuote: payload });\n        default:\n            return currentState;\n    }\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuoteActions\": () => (/* binding */ QuoteActions)\n/* harmony export */ });\nvar QuoteActions;\n(function (QuoteActions) {\n    QuoteActions[\"ADD\"] = \"ADD\";\n    QuoteActions[\"GET\"] = \"GET\";\n})(QuoteActions || (QuoteActions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PersistanceKeys\": () => (/* binding */ PersistanceKeys),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys || (PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    get,\n    set,\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/utils/storage.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;