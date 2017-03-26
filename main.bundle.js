webpackJsonp([1,4],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* unused harmony export Dataset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Dataset = (function () {
    function Dataset(_id, title, description, questions) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.questions = questions;
    }
    return Dataset;
}());
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getDataset = function (id) {
        return this.http.get('http://localhost:4200/assets/dataset.json')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'DB error'); });
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
//# sourceMappingURL=/Users/akateiva/Dev/cdli/src/api.service.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRadioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionRadioComponent = (function () {
    function QuestionRadioComponent() {
        this.question = "Do the people in the picture look healthy?";
        this.choices = ['Yes', 'No'];
    }
    QuestionRadioComponent.prototype.ngOnInit = function () {
    };
    QuestionRadioComponent.prototype.reset = function () {
        this.answer = [];
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], QuestionRadioComponent.prototype, "question", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], QuestionRadioComponent.prototype, "choices", void 0);
    QuestionRadioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-question-radio',
            template: __webpack_require__(528),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionRadioComponent);
    return QuestionRadioComponent;
}());
//# sourceMappingURL=/Users/akateiva/Dev/cdli/src/question-radio.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionTextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionTextComponent = (function () {
    function QuestionTextComponent() {
        this.question = "Enter the license plate seen in the picture.";
        this.answer = "";
    }
    QuestionTextComponent.prototype.ngOnInit = function () {
    };
    QuestionTextComponent.prototype.reset = function () {
        this.answer = "";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], QuestionTextComponent.prototype, "question", void 0);
    QuestionTextComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-question-text',
            template: __webpack_require__(529),
            styles: [__webpack_require__(522)]
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionTextComponent);
    return QuestionTextComponent;
}());
//# sourceMappingURL=/Users/akateiva/Dev/cdli/src/question-text.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 353;


/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(465);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/akateiva/Dev/cdli/src/main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(525),
            styles: [__webpack_require__(523)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/akateiva/Dev/cdli/src/app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__intro_overlay_intro_overlay_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__labeling_dialog_labeling_dialog_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_radio_question_radio_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_text_question_text_component__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__intro_overlay_intro_overlay_component__["a" /* IntroOverlayComponent */],
                __WEBPACK_IMPORTED_MODULE_6__labeling_dialog_labeling_dialog_component__["a" /* LabelingDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_8__question_radio_question_radio_component__["a" /* QuestionRadioComponent */],
                __WEBPACK_IMPORTED_MODULE_9__question_text_question_text_component__["a" /* QuestionTextComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__api_service__["a" /* ApiService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/akateiva/Dev/cdli/src/app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroOverlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroOverlayComponent = (function () {
    function IntroOverlayComponent() {
        this.hidden = false;
    }
    IntroOverlayComponent.prototype.ngOnInit = function () {
    };
    IntroOverlayComponent.prototype.close = function () {
        this.hidden = true;
    };
    IntroOverlayComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-intro-overlay',
            template: __webpack_require__(526),
            styles: [__webpack_require__(519)]
        }), 
        __metadata('design:paramtypes', [])
    ], IntroOverlayComponent);
    return IntroOverlayComponent;
}());
//# sourceMappingURL=/Users/akateiva/Dev/cdli/src/intro-overlay.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_radio_question_radio_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_text_question_text_component__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelingDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
;
var LabelingDialogComponent = (function () {
    function LabelingDialogComponent(api) {
        this.api = api;
        this.redirectMessage = false;
        this.datasets = [{
                name: "Healthy People",
                datapoints: [
                    { image: 'assets/JPEG/healthy1.jpg' },
                    { image: 'assets/JPEG/healthy2.jpg' },
                    { image: 'assets/JPEG/healthy3.jpg' },
                    { image: 'assets/JPEG/healthy4.jpg' },
                ]
            }, {
                name: "License plates",
                datapoints: [
                    { image: 'assets/JPEG/lp1.jpg' },
                    { image: 'assets/JPEG/lp2.jpg' },
                    { image: 'assets/JPEG/lp3.jpg' },
                    { image: 'assets/JPEG/lp4.jpg' },
                    { image: 'assets/JPEG/lp5.jpg' }
                ] }, {
                name: "City Planning",
                datapoints: [
                    { image: 'assets/JPEG/street1.jpg' },
                    { image: 'assets/JPEG/street2.jpg' },
                    { image: 'assets/JPEG/street3.jpg' },
                    { image: 'assets/JPEG/street4.jpg' },
                    { image: 'assets/JPEG/street5.jpg' }
                ] }
        ];
        this.question2 = "What sort of purpose does this facade serve?";
        this.answers2 = ["Commercial", "Residential"];
        this.currentDataset = 0;
        this.currentDatapoint = 0;
    }
    LabelingDialogComponent.prototype.ngOnInit = function () {
        this.api.getDataset(1).subscribe(function (res) { return console.log(res); }, function (error) { return console.log(error); });
    };
    LabelingDialogComponent.prototype.submitAnswer = function () {
        if (!this.nextDatapoint()) {
        }
    };
    LabelingDialogComponent.prototype.skipAnswer = function () {
        if (!this.nextDatapoint()) {
        }
    };
    LabelingDialogComponent.prototype.skipDataset = function () {
        if (!this.nextDataset()) {
        }
    };
    LabelingDialogComponent.prototype.nextDatapoint = function () {
        if (this.currentDatapoint >= this.datasets[this.currentDataset].datapoints.length - 1) {
            return this.nextDataset();
        }
        this.currentDatapoint += 1;
        if (this.currentDataset == 0)
            this.q1.reset();
        if (this.currentDataset == 1)
            this.q2.reset();
        if (this.currentDataset == 2)
            this.q3.reset();
        return true;
    };
    LabelingDialogComponent.prototype.nextDataset = function () {
        if (this.currentDataset >= this.datasets.length - 1) {
            this.redirectMessage = true;
            window.location.href = 'https://goo.gl/forms/ImjRmiTj6LNmO8oC3';
            return false;
        }
        this.currentDatapoint = 0;
        this.currentDataset += 1;
        return true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('q1'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__question_radio_question_radio_component__["a" /* QuestionRadioComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__question_radio_question_radio_component__["a" /* QuestionRadioComponent */]) === 'function' && _a) || Object)
    ], LabelingDialogComponent.prototype, "q1", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('q2'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__question_text_question_text_component__["a" /* QuestionTextComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__question_text_question_text_component__["a" /* QuestionTextComponent */]) === 'function' && _b) || Object)
    ], LabelingDialogComponent.prototype, "q2", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('q3'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__question_radio_question_radio_component__["a" /* QuestionRadioComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__question_radio_question_radio_component__["a" /* QuestionRadioComponent */]) === 'function' && _c) || Object)
    ], LabelingDialogComponent.prototype, "q3", void 0);
    LabelingDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-labeling-dialog',
            template: __webpack_require__(527),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _d) || Object])
    ], LabelingDialogComponent);
    return LabelingDialogComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/akateiva/Dev/cdli/src/labeling-dialog.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/akateiva/Dev/cdli/src/environment.js.map

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, ".container {\n  position: fixed;\n  width: 100%;\n  height: 100%; }\n  .container .content {\n    color: white;\n    margin: 4em;\n    padding: 2em;\n    border-radius: 2em;\n    background-color: rgba(10, 10, 10, 0.95);\n    text-align: center;\n    min-height: 50%; }\n    .container .content a {\n      font-size: 2em;\n      color: #288c28;\n      -webkit-transition: 0.25s ease;\n      transition: 0.25s ease; }\n    .container .content a:hover {\n      color: #3cf03c; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, ".panel {\n  background-color: #ecf0f1;\n  border-radius: 0.25rem;\n  border: 1px solid black;\n  margin: 0.25rem;\n  margin-bottom: 0.5rem;\n  padding: 0.5rem; }\n  .panel h1 {\n    font-size: 1.3rem;\n    line-height: 1.5rem;\n    font-weight: 300; }\n\n.panel#dataset {\n  color: #d35400;\n  color: grey; }\n  .panel#dataset h1 {\n    color: #d35400;\n    display: inline-block;\n    margin: 0.5em; }\n  .panel#dataset .progress {\n    color: grey;\n    float: right;\n    margin: 0.75em; }\n\n.panel#datapoint {\n  min-height: 16rem; }\n\n.panel#question {\n  min-height: 20.8rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .panel#question .content {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .panel#question .footer {\n    font-size: 1rem; }\n\n.btn {\n  background-color: black;\n  color: white;\n  border: 0;\n  padding: 0.5em;\n  font-size: inherit; }\n\n.btn-primary {\n  background-color: #27ae60; }\n  .btn-primary:hover {\n    background-color: #1e8449; }\n  .btn-primary:active {\n    background-color: #1e8449;\n    position: relative;\n    top: 1px; }\n\n.btn-secondary {\n  background-color: #34495e; }\n  .btn-secondary:hover {\n    background-color: #22303d; }\n  .btn-secondary:active {\n    background-color: #22303d;\n    position: relative;\n    top: 1px; }\n\n.loading {\n  position: absolute;\n  background-color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<app-intro-overlay></app-intro-overlay>\n<app-labeling-dialog></app-labeling-dialog>\n"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!hidden\">\n    <div class=\"content\">\n        <h1>Welcome</h1>\n        <div class=\"clearfix\">\n            <div class=\"md-col md-col-6\">\n\t\t\t<h2>Task Description</h2>\n            Welcome to the Collaborative Data Labelling Interface test. The objective of this test is to evaluate the usability of this interface. The test consists of 3 data sets to which labels have to be applied. Morever, each data set will contain 5 data points. Please select or enter the most applicable label and press submit.\n            </div>\n            <div class=\"md-col md-col-6\"><h2>Evaluation</h2>\n\t\t\t\tAfter you complete the test, you will be redirected to a Google Form and asked for feedback.\n\t\t\t\t<h2>THANK YOU</h2>\n\t          <p><a href=\"#\" (click)=\"close()\">Start</a></p>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<div class=\"max-width-4 mx-auto\">\n    <div class=\"clearfix container\">\n        <div class=\"sm-col sm-col-12 md-col md-col-6 \">\n            <div class=\"panel\" id=\"dataset\">\n                <h1><i class=\"fa fa-database\" aria-hidden=\"true\"></i> Dataset: {{datasets[currentDataset].name}}</h1>\n                <span class=\"progress\"> Q: {{currentDatapoint+1}}/{{datasets[currentDataset].datapoints.length}} | Set: {{currentDataset+1}}/{{datasets.length}}</span></div>\n            <div class=\"panel\" id=\"datapoint\">\n                <img [src]=\"datasets[currentDataset].datapoints[currentDatapoint].image\" class=\"fit\">\n            </div>\n        </div>\n        <div class=\"sm-col sm-col-12 md-col md-col-6\">\n            <div class=\"panel\" id=\"question\">\n                <h1>Quizz</h1>\n                <div class=\"content\">\n                    <app-question-radio #q1 *ngIf=\"currentDataset==0\"></app-question-radio>\n                    <app-question-text #q2 *ngIf=\"currentDataset==1\"></app-question-text>\n                    <app-question-radio #q3 *ngIf=\"currentDataset==2\" [question]='question2' [choices]='answers2'></app-question-radio>\n                    <div *ngIf=\"redirectMessage\" id=\"redirect-message\">You will now be redirected to a Google form to submit feedback on this test. If the redirect doesn't work, please click <a href=\"https://goo.gl/forms/ImjRmiTj6LNmO8oC3\">here</a></div>\n                </div>\n                <div class=\"footer\">\n                    <button class=\"btn btn-primary\" (click)=\"submitAnswer()\" ><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Submit\n                    </button>\n                    <button class=\"btn btn-secondary\" (click)=\"skipAnswer()\" ><i class=\"fa fa-step-forward\" aria-hidden=\"true\"></i> Skip</button>\n                    <button class=\"btn btn-secondary\" (click)=\"skipDataset()\" ><i class=\"fa fa-fast-forward\" aria-hidden=\"true\"></i> Skip dataset</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<h4>{{question}}</h4>\n<p>\n    <label *ngFor=\"let choice of choices\">\n        <input type=\"radio\" name=\"gender\" value=\"{{choice}}\" [(ngModel)]=\"answer\">\n        {{choice}}\n    </label>\n</p>"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<h4>{{question}}</h4>\n<p>\n    <input type=\"text\" width=\"100%\" length=\"64\" [(ngModel)]=\"answer\">\n</p>"

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(354);


/***/ })

},[803]);
//# sourceMappingURL=main.bundle.js.map