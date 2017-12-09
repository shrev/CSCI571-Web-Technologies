webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n  background-image: url(\"http://cs-server.usc.edu:45678/hw/hw8/images/background.png\")\n}\n.container-fluid\n{\n\tmargin-top: 10px;\n  width:80%;\n}\nh4\n{\n\ttext-align: center;\n\tpadding-top: 20px;\n\tfont-weight: bold !important;\n}\n.form-group\n{\n\twidth: 100%;\n}\n#ticker\n{\n\twidth: 100%;\n}\n\n.col-md-3{\n\t margin-top:20px;\n}\n.col-md-6{\n\t margin-top:20px;\n}\n.example-full-width {\n  width: 100%;\n}\n\n:host {\n  display: block;\n  overflow: hidden; /* Hide everything that doesn't fit compoennt */\n}\n.parent {\n  height: 100%;\n  width: 200%;      /* Make the parent element to take up twice\n                       of the component's width */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;    /* Align all children in a row */\n  div { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; }  /* Evenly divide width between children */\n}\n\ntr:nth-child(odd){background-color: #f2f2f2}\n\n@media only screen \nand (min-device-width : 320px) \nand (max-device-width : 480px) {\n\n.container-fluid\n{\n  margin-top: 10px;\n  width:100%;\n}\n\n}\n\n\ntable {\n    border-collapse: collapse;\n    width: 100%;\n    margin-top: 10px;\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n    font-size: 12px;\n}\n\n.mat-sort-header-arrow\n{\n  display:none !important;\n}\n\n.cdk-visually-hidden\n{\n  display:none !important;\n}\n\n.mat-sort-container\n{\n  display: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n    <h4>Stock Market Search</h4>\n    <form class=\"form-inline\">\n      <div class=\"form-group row\">\n       <label for=\"ticker\" class=\"control-label col-md-3\" style=\"font-size:12px\">Enter Stock Ticker Symbol:<span style=\"color: red\">*</span></label>\n       <div class=\"col-md-5\">\n              <form>\n        <mat-form-field class=\"example-full-width\">\n       <div>\n             <input matInput class=\"form-control\" id=\"ticker\" placeholder=\"e.g AAPL\" aria-label=\"Stock\" [matAutocomplete]=\"auto\" [formControl]=\"stockCtrl\" />\n            <mat-autocomplete #auto=\"matAutocomplete\" style=\"position:absolute!important\">\n              <mat-option *ngFor=\"let stock of filteredStocks | async\" [value]=\"stock.Symbol\">\n                  {{stock.Symbol}}-{{stock.Name}}\n                </mat-option>\n            </mat-autocomplete>\n    </div>\n    </mat-form-field>\n  </form>\n              <div id=\"validation\" style=\"margin-top:-10px;font-size:10px\"></div>\n         </div>\n         <div class=\"col-md-4\">\n          <button type=\"button\" class=\"btn btn-primary\" id=\"submit_button\" disabled><span class=\"glyphicon glyphicon-search\"></span> Get Quote</button>\n          <button type=\"button\" class=\"btn btn-default\" id=\"clear\" style=\"background-color:#F0F0F0\"><span class=\"glyphicon glyphicon-refresh\"></span> Clear</button>\n         </div>\n    </div>\n    </form>\n    </div>\n  </div>\n  <hr style=\"color: white;margin-top: 0;margin-bottom: 5px\">\n</div>\n\n\n<slide-panel [activePane]=\"isLeftVisible ? 'left' : 'right'\" >\n  <div leftPane>\n    <div class=\"container-fluid\">\n       <div class=\"well\" style=\"background-color: white; padding:20px\">\n      <div id=\"info_panel\" class=\"panel panel-default\">\n    <div class=\"panel-heading\" style=\"background-color:#F0F0F0;overflow:hidden;\" >\n     <div style=\"display:flex\">\n    <button  type=\"button\" id=\"dir2\" class=\"btn btn-default\" (click)=\"myEvent($event)\" style=\"text-align:center;background-color:#F8F8F8;z-index: 2;flex:0.4\"><span class=\"glyphicon glyphicon-chevron-left\"></span></button>\n    <div style=\"font-weight:bold;text-align:center;flex:15\">Stock Price</div>\n     </div>\n        \n    </div>\n    <div class=\"panel-body\">\n  <ul class=\"nav nav-pills\">\n  <li class=\"active\" id=\"curr_stock\"><a href=\"javascript:donothing(this.parentElement)\"><span class=\"glyphicon glyphicon-time\"></span> Current Stock</a></li>\n  <li id=\"his_charts\"><a href=\"javascript:donothing(this)\"><span class=\"glyphicon glyphicon-align-right\" style=\" transform: rotate(90deg); \"></span> Historical Charts</a></li>\n  <li id=\"news_feeds\"><a href=\"javascript:donothing(this)\"><span class=\"glyphicon glyphicon-link\"></span> News Feeds</a></li>\n  </ul>\n  <hr style=\"color:#F0F0F0;margin-top:10px;margin-bottom:10px\">\n     \n    \n        <div class=\"col-md-12\" id=\"his_text\" style=\"display:none;margin-top:30px\">\n  <div class=\"progress\" id=\"pbar3\" style=\"margin-top:75px;margin-bottom:40px\">\n  <div class=\"progress-bar progress-bar-striped active\" id=\"pbar4\" role=\"progressbar\"\n  aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n \n  </div>\n</div>\n <div id=\"his_text_1\"></div>\n\n  <div id=\"hist_error\" style=\"display:none;text-align: center;width:100%;padding:12px;border-color:red;background-color:  #ffb3b3\">\n     Error Failed to Get Historical Charts Data\n  </div>\n</div>\n  <div class=\"col-md-12\" id=\"news_text\" style=\"display:none;margin-top:30px\">\n     <div class=\"progress\" id=\"pbar5\" style=\"margin-top:75px;margin-bottom:40px\">\n  <div class=\"progress-bar progress-bar-striped active\" id=\"pbar6\" role=\"progressbar\"\n  aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n  </div>\n  </div>\n  <div id=\"news_text_1\">\n  </div>\n  <div id=\"news_error\" style=\"display:none;text-align: center;width:100%;padding:12px;border-color:red;background-color:  #ffb3b3\">\n     Error Failed to Get News Data\n  </div>\n</div>\n  <div id=\"curr_text\" class=\"row\">\n      <div class=\"col-md-6\">\n         <div class=\"row\">\n  <div class=\"col-sm-6\"><span style=\"font-weight:bold\">Stock Details</span></div>\n  <div class=\"col-sm-6\" style=\"text-align: right\">\n    <button id=\"fav\" disabled (click)= \"favEvent()\"   val=0 style=\"background-color:#F8F8F8;text-align:center\"><span id=\"fav_icon_empty\"  class=\"glyphicon glyphicon-star-empty\" style=\"width:20px;height:20px\"></span> <span id=\"fav_icon_show\" class=\"glyphicon glyphicon-star\" style=\"display:none;color:gold;width:20px;height:20px\"></span></button>\n    <button id=\"fb\" disabled style=\"text-align:center\"><img src=\"http://cs-server.usc.edu:45678/hw/hw8/images/facebook.png\" style=\"width:20px;height:20px\"></button>\n  </div>\n  </div>\n  <div class=\"col-md-12\"  style=\"margin-top:30px\">\n  <div class=\"progress\" id=\"pbar1\" style=\"margin-top:75px;margin-bottom:40px\">\n  <div class=\"progress-bar progress-bar-striped active\" id= \"pbar2\" role=\"progressbar\"\n  aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\">\n  </div>\n</div>\n<table id=\"stock_info_tab\">\n  <tbody id=\"tbody_1\">\n</tbody>\n  </table>\n  <div id=\"info_error\" style=\"display:none;text-align: center;width:100%;padding:12px;border-color:red;background-color:  #ffb3b3\">\n     Error Failed to Get Currrent Stock Data\n  </div>\n  </div>\n</div>\n  <div class=\"col-md-6\">\n   <ul class=\"nav nav-tabs\">\n  <li id='price' class=\"active\"><a href=\"javascript:donothing(this)\">Price</a></li>\n  <li id='sma' ><a href=\"javascript:donothing(this)\">SMA</a></li>\n  <li id='ema'><a href=\"javascript:donothing(this)\">EMA</a></li>\n  <li id='stoch'><a href=\"javascript:donothing(this)\">STOCH</a></li>\n  <li id='rsi'><a href=\"javascript:donothing(this)\">RSI</a></li>\n  <li id='cci'><a href=\"javascript:donothing(this)\">CCI</a></li>\n  <li id='adx'><a href=\"javascript:donothing(this)\">ADX</a></li>\n    <li id='bbands'><a href=\"javascript:donothing(this)\">BBANDS</a></li>\n     <li id='macd'><a href=\"javascript:donothing(this)\">MACD</a></li>\n</ul>\n<div class=\"col-md-12\" id=\"indicator\" style=\"display:block;padding:5px\">\n     <div class=\"progress\" id=\"pbar7\" style=\"margin-top:40px;margin-bottom:40px\">\n  <div class=\"progress-bar progress-bar-striped active\" id=\"pbar8\" role=\"progressbar\"\n  aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:20%\">\n  \n</div>\n</div>\n<div id=\"indicator_1\"></div>\n<div id=\"indicator_error\" style=\"display:none;text-align: center;width:100%;padding:12px;border-color:red;background-color:  #ffb3b3\">\n     Error Failed to Get Price Data\n  </div>\n</div>\n\n  </div>\n  </div>\n</div>\n</div>\n  </div>\n  </div>\n</div>\n\n\n\n  <div rightPane>\n<div class=\"container-fluid\">\n        <div class=\"well\" style=\"background-color: white; padding:20px\">\n  <div id=\"favorite_panel\" class=\"panel panel-default\" style=\"border-color:#F0F0F0\">\n    <div class=\"panel-heading\" style=\"background-color:#F0F0F0;overflow:hidden; \" >\n      <div>\n      <div style=\"float:left\">\n        <span style=\"font-weight: bold;font-size: 13px\">Favorite List</span>\n      </div>\n      <div style=\"float:right\">\n      <div class=\"checkbox\" (click)=\"autorefresh()\" id=\"off\" style=\"float:left;margin-top: 0px;margin-bottom: 0px\">\n      <label style=\"height:12px !important\">\n        <input type=\"checkbox\" data-toggle=\"toggle\" data-size=\"small\">\n       </label>\n      </div>\n      <div style=\"float:right\">\n        <button  class=\"btn btn-default\" (click)=\"refresh()\" style=\"background-color:#F8F8F8\"><span class=\"glyphicon glyphicon-refresh\"></span></button>\n        <button  type=\"button\" id=\"dir1\" disabled class=\"btn btn-default\" (click)=\"myEvent($event)\" style=\"background-color:#F8F8F8\"><span class=\"glyphicon glyphicon-chevron-right\"></span></button>\n      </div>\n      </div>\n    </div>\n  </div>\n    <div class=\"panel-body\">\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <div class=\"col-md-4\" style=\"margin-top: 0px;text-align: center;display: flex;\n    align-items: center;\">\n          <label style=\"font-weight:bold;vertical-align: middle\" > Sort By</label>   \n        </div>\n        <div class=\"dropdown col-md-6\" style=\"margin-top:0px;padding:0px\">\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" style=\"width: 100%;margin:0px\"><div id=\"dop1\" style=\"float: left\">Default</div><div id=\"c1\" style=\"float:right;text-align: right\"> <span class=\"caret\" style=\"transform: rotate(180deg);margin-top:4px\"></span><br><span class=\"caret\" style=\"margin-bottom:3px;margin-top: 1px\"></span></div></button>\n  <ul class=\"dropdown-menu\" style=\"width:100%\">\n    <li><a href=\"javascript:donothing();\" id=\"ddef\">Default</a></li>\n    <li><a href=\"javascript:donothing();\" id=\"dsym\">Symbol</a></li>\n    <li><a href=\"javascript:donothing();\" id=\"dspr\">Price</a></li>\n    <li><a href=\"javascript:donothing();\" id=\"dv\" >Volume</a></li>\n    <li><a href=\"javascript:donothing();\" id=\"dc\">Change</a></li>\n    <li><a href=\"javascript:donothing();\" id=\"dcp\">Change Percentage</a></li>\n  </ul>\n</div>\n      </div>\n      <div class=\"col-md-5\">\n           <div class=\"col-md-4\" style=\"margin-top: 0px;text-align: center;display: flex;\n    align-items: center;\">\n          <label style=\"font-weight:bold;vertical-align: middle;display: inline-block\" > Order By</label>   \n        </div>\n           <div class=\"dropdown col-md-6\" style=\"margin-top:0px;padding:0px\">\n           <button disabled class=\"btn btn-default dropdown-toggle\" id=\"dop2b\" type=\"button\" data-toggle=\"dropdown\" style=\"width: 100%;margin:0px\"><div id=\"dop2\" style=\"float: left\">Ascending</div><div id=\"c2\" style=\"float:right;text-align: right\"> <span class=\"caret\" style=\"transform: rotate(180deg);margin-top:4px\"></span><br><span class=\"caret\" style=\"margin-bottom:3px;margin-top: 1px\"></span></div></button>\n  <ul class=\"dropdown-menu\">\n    <li><a href=\"javascript:donothing();\" id=\"dasc\">Ascending</a></li>\n    <li><a href=\"javascript:donothing();\" id=\"ddes\">Descending</a></li>\n  </ul>\n</div>\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n\n  <table class=\".table-responsive\" matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th id=\"tsym\" mat-sort-header=\"symbol\">Symbol</th>\n    <th id=\"tsp\" mat-sort-header=\"price\">Stock Price</th>\n    <th  id=\"tch\" mat-sort-header=\"change\" style=\"margin-right:0px;padding-right:2px;display: inline-block !important;\">Change </th>\n    <th id=\"tchp\" mat-sort-header=\"changep\" style=\"margin-left:0px;padding-left: 2px;display: inline-block !important;\"> (Change Percent) </th>\n    <th style=\"margin-right:0px;padding-right:2px;display: inline-block !important;\"></th>\n    <th id=\"tv\" mat-sort-header=\"volume\">Volume</th>\n    <th id=\"trash\"></th>\n  </tr>\n\n    <tr *ngFor=\"let stockTable of sortedData\">\n    <td><a name=\"{{stockTable.ind}}\" href=\"javascript:donothing();\" onclick=\"favLink(this)\">{{stockTable.symbol}}</a></td>\n    <td>{{stockTable.price}}</td>\n    <td style=\"margin-right:0px;padding-right:2px;display: inline-block !important;\">{{stockTable.change}}</td>\n    <td style=\"margin-right:0px;padding-right:2px;display: inline-block !important;\">{{stockTable.changep}}</td>\n    <td style=\"margin-right:0px;padding-right:2px;display: inline-block !important;\"><img src=\"{{stockTable.link}}\" style=\"width:auto;height:15px\"></td>\n    <td>{{stockTable.volume}}</td>\n    <td><button  id=\"{{stockTable.symbol}}\" type=\"button\" (click)=\"deleteFav($event)\" onclick=\"del(this)\" class=\"btn btn-default\" style=\"background-color:#F0F0F0\"><span id=\"{{stockTable.symbol}}\" class=\"glyphicon glyphicon-trash\"></span></button></td>\n  </tr>\n\n</table>\n\n\n\n  </div>\n</div>\n</div>\n</div>\n</div>\n</div>\n</slide-panel>\n\n <canvas id=\"canvas\" width=\"1000px\" height=\"600px\" \n           style=\"display:none;\"></canvas>\n<script type=\"text/javascript\">window.fav=\"\";</script>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};







var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.isLeftVisible = false;
        this.stocks = [];
        this.stockTable = [];
        this.stockCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.filteredStocks = this.stockCtrl.valueChanges
            .distinctUntilChanged()
            .map(function (stock) { return stock ? _this.filterStocks(stock) : []; });
    }
    AppComponent.prototype.myEvent = function (event) {
        if (this.isLeftVisible)
            this.isLeftVisible = false;
        else
            this.isLeftVisible = true;
        console.log("reached here");
    };
    AppComponent.prototype.deleteFav = function (event) {
        console.log(event.srcElement);
        console.log(event.target);
        var target = event.target || event.srcElement || event.currentTarget;
        console.log(target);
        var idAttr = target.attributes.id;
        var symbol = idAttr.nodeValue;
        this.sortedData = this.sortedData.filter(function (obj) {
            return obj.symbol !== symbol;
        });
        this.stockTable = this.stockTable.filter(function (obj) {
            return obj.symbol !== symbol;
        });
    };
    AppComponent.prototype.getSymbols = function (symbol) {
        return __awaiter(this, void 0, void 0, function () {
            var api, response, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = "http://st-env.us-west-1.elasticbeanstalk.com/api/getSymbols?symbol=" + symbol;
                        return [4 /*yield*/, this.http.get(api).toPromise()];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        for (i = 1; i < response.json().length; i++) {
                            this.stocks = this.stocks.filter(function (obj) {
                                console.log("objsym:" + obj.symbol);
                                console.log("respsym:" + response.json()[i]["Symbol"]);
                                return obj.Symbol !== response.json()[i]["Symbol"];
                            });
                            console.log(this.stocks);
                            this.stocks.push(response.json()[i]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.favEvent = function () {
        var jobj = localStorage.getItem('favItem');
        this.obj = JSON.parse(jobj);
        console.log("val ang:" + this.obj['fav']);
        if (this.obj['fav'] == 0) {
            var k = this.obj['symbol'];
            var c = Number(this.obj['change']).toFixed(2);
            var cp = Number(this.obj['changep']).toFixed(2);
            var nobj = { symbol: this.obj['symbol'], price: +this.obj['last'], change: "" + c + " (" + cp + "%) ", volume: Number(this.obj['volume']).toLocaleString(), link: this.obj['link'], ind: this.obj['ind'], c: this.obj['last'], cp: this.obj['changep'], v: +this.obj['volume'] };
            this.stockTable.push(nobj);
            this.sortedData = this.stockTable.slice();
            this.obj['fav'] = 1;
            localStorage.setItem('favItem', JSON.stringify(this.obj));
        }
        else {
            var symbol = this.obj['symbol'];
            this.sortedData = this.sortedData.filter(function (obj) {
                return obj.symbol !== symbol;
            });
            this.stockTable = this.stockTable.filter(function (obj) {
                return obj.symbol !== symbol;
            });
            this.obj['fav'] = 0;
            localStorage.setItem('favItem', JSON.stringify(this.obj));
        }
    };
    AppComponent.prototype.filterStocks = function (symbol) {
        if (symbol != "" && symbol.length % 2 == 1)
            this.getSymbols(symbol);
        return this.stocks.filter(function (stock) {
            return stock.Symbol.toLowerCase().indexOf(symbol.toLowerCase()) === 0;
        });
    };
    AppComponent.prototype.sortData = function (sort) {
        var _this = this;
        var data = this.stockTable.slice();
        if (!sort.active || sort.direction == '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction == 'asc';
            switch (sort.active) {
                case 'symbol': return _this.compare(a.symbol, b.symbol, isAsc);
                case 'price': return _this.compare(a.price, b.price, isAsc);
                case 'change': return _this.compare(a.c, b.c, isAsc);
                case 'changep': return _this.compare(a.cp, b.cp, isAsc);
                case 'volume': return _this.compare(a.v, b.v, isAsc);
                default: return 0;
            }
        });
    };
    AppComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    AppComponent.prototype.autorefresh = function () {
        var _this = this;
        var slide = "" + localStorage.getItem('slide');
        if (slide == "" + 0) {
            this.id = setInterval(function () { _this.refresh(); }, 5000);
            console.log(this.id);
            localStorage.setItem('slide', "1");
        }
        else {
            clearInterval(this.id);
            localStorage.setItem('slide', "0");
        }
    };
    AppComponent.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, symbol, api, response, obj, count, j, l, k, o, g, num, sd, d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.sortedData.length)) return [3 /*break*/, 4];
                        symbol = this.sortedData[i].symbol;
                        api = "http://st-env.us-west-1.elasticbeanstalk.com/api/getStock?symbol=" + symbol;
                        return [4 /*yield*/, this.http.get(api).toPromise()];
                    case 2:
                        response = _a.sent();
                        obj = response.json();
                        obj = obj["Time Series (Daily)"];
                        console.log(obj);
                        count = 0;
                        for (k in obj) {
                            if (count == 0)
                                j = obj[k];
                            if (count == 1)
                                l = obj[k];
                            if (count == 2)
                                break;
                            count++;
                        }
                        console.log(j['close']);
                        o = j['4. close'] - l['4. close'];
                        g = "(" + Number(o / l['4. close'] * 100).toFixed(2) + "%)";
                        console.log(g + ")");
                        if (this.sortedData[i].change.includes('-') && o > 0)
                            this.sortedData[i].link = "http://cs-server.usc.edu:45678/hw/hw8/images/Up.png";
                        if (this.sortedData[i].change.includes('-') == false && o < 0)
                            "http://cs-server.usc.edu:45678/hw/hw8/images/Down.png";
                        num = Number(o).toFixed(2);
                        this.sortedData[i].change = num;
                        this.sortedData[i].c = o;
                        this.sortedData[i].cp = o / l['4. close'] * 100;
                        this.sortedData[i].changep = g;
                        this.sortedData[i].price = +j['4. close'];
                        this.sortedData[i].volume = Number(j['5. volume']).toLocaleString();
                        this.sortedData[i].v = +j['5. volume'];
                        console.log(l);
                        console.log(j);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        for (sd in this.sortedData) {
                            for (d in this.stockTable) {
                                if (this.stockTable[d].symbol == this.sortedData[sd].symbol) {
                                    this.stockTable[d].price = this.sortedData[sd].price;
                                    this.stockTable[d].volume = this.sortedData[sd].volume;
                                    this.stockTable[d].change = this.sortedData[sd].change;
                                    this.stockTable[d].link = this.sortedData[sd].link;
                                    this.stockTable[d].c = this.sortedData[sd].c;
                                    this.stockTable[d].cp = this.sortedData[sd].cp;
                                    this.stockTable[d].v = this.sortedData[sd].v;
                                }
                            }
                        }
                        console.log(this.stockTable);
                        return [2 /*return*/, 0];
                }
            });
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slide__ = __webpack_require__("../../../../../src/app/slide/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__slide__["a" /* SlidePanelComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatSortModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/slide/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_component__ = __webpack_require__("../../../../../src/app/slide/slide.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__slide_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/slide/slide.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  overflow: hidden; /* Hide everything that doesn't fit compoennt */\n}\n.parent {\n  height: 100%;\n  width: 200%;      /* Make the parent element to take up twice\n                       of the component's width */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;    /* Align all children in a row */\n  div { -webkit-box-flex: 1; -ms-flex: 1; flex: 1; }  /* Evenly divide width between children */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/slide/slide.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:200%;display:flex\" [@slide]=\"activePane\">\n  <div style=\"flex:1\"><ng-content select=\"[leftPane]\"></ng-content></div>\n  <div style=\"flex:1\"><ng-content select=\"[rightPane]\"></ng-content></div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/slide/slide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlidePanelComponent = (function () {
    function SlidePanelComponent() {
        this.activePane = 'right';
    }
    return SlidePanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], SlidePanelComponent.prototype, "activePane", void 0);
SlidePanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'slide-panel',
        styles: [__webpack_require__("../../../../../src/app/slide/slide.component.css")],
        template: __webpack_require__("../../../../../src/app/slide/slide.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('slide', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('left', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translateX(0)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('right', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translateX(-50%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(300))
            ])
        ]
    })
], SlidePanelComponent);

//# sourceMappingURL=slide.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map