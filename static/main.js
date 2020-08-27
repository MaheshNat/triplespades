(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center auth\">\n  <div class=\"col-xs-12 col-md-6\">\n    <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n      <app-spinner></app-spinner>\n    </div>\n    <form\n      #authForm=\"ngForm\"\n      (ngSubmit)=\"onSubmit(authForm)\"\n      *ngIf=\"!isLoading\"\n      class=\"shadow login\"\n    >\n      <h3 class=\"text-center\">Login</h3>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n          type=\"email\"\n          id=\"email\"\n          name=\"email\"\n          class=\"form-control\"\n          ngModel\n          required\n          email\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          class=\"form-control\"\n          ngModel\n          required\n          minlength=\"6\"\n        />\n      </div>\n      <div>\n        <button\n          class=\"btn btn-primary\"\n          type=\"submit\"\n          [disabled]=\"!authForm.valid\"\n          [ngStyle]=\"{ cursor: !authForm.valid ? 'not-allowed' : 'default' }\"\n        >\n          Login\n        </button>\n      </div>\n    </form>\n    <div class=\"alert alert-danger error\" *ngIf=\"error && !isLoading\">\n      {{ error }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center auth\">\n  <div class=\"col-xs-12 col-md-6\">\n    <div *ngIf=\"isLoading\" style=\"text-align: center\">\n      <app-spinner></app-spinner>\n    </div>\n    <form\n      #authForm=\"ngForm\"\n      (ngSubmit)=\"onSubmit(authForm)\"\n      *ngIf=\"!isLoading\"\n      class=\"shadow login\"\n    >\n      <h3 class=\"text-center\">Register</h3>\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input\n          type=\"text\"\n          id=\"name\"\n          name=\"name\"\n          class=\"form-control\"\n          ngModel\n          required\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n          type=\"email\"\n          id=\"email\"\n          name=\"email\"\n          class=\"form-control\"\n          ngModel\n          required\n          email\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          id=\"password\"\n          name=\"password\"\n          class=\"form-control\"\n          ngModel\n          required\n          minlength=\"6\"\n        />\n      </div>\n      <div>\n        <button\n          class=\"btn btn-primary\"\n          type=\"submit\"\n          [disabled]=\"!authForm.valid\"\n          [ngStyle]=\"{ cursor: !authForm.valid ? 'not-allowed' : 'default' }\"\n        >\n          Login\n        </button>\n      </div>\n    </form>\n    <div class=\"alert alert-danger error\" *ngIf=\"error && !isLoading\">\n      {{ error }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/game.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/game.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Your Cards</h4>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"modal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row justify-content-center\" style=\"margin-top: 1em;\">\n        <div class=\"col-xs-2\">\n          <img\n            *ngFor=\"let card of game.cards\"\n            class=\"img-responsive\"\n            style=\"max-width: 100px; margin: 1em;\"\n            [src]=\"getImage(card)\"\n            alt=\"\"\n            (click)=\"playCard(card); modal.dismiss('Played card')\"\n          />\n        </div>\n      </div>\n    </div>\n  </ng-template>\n  <div class=\"row justify-content-center\">\n    <button\n      class=\"btn btn-lg btn-outline-primary col-2\"\n      style=\"margin: 0 auto; margin-top: 2em;\"\n      (click)=\"open(content)\"\n    >\n      Your Cards\n    </button>\n  </div>\n  <div [ngSwitch]=\"game.gameMode\">\n    <!-- BIDDING -->\n    <div *ngSwitchCase=\"gameMode.BIDDING\">\n      <div class=\"jumbotron text-center\" style=\"margin-top: 2em; padding: 2em;\">\n        <h1>Seconds left to bid: {{ game.time }}</h1>\n        <h3>Player Name: {{ this.user.name }}</h3>\n      </div>\n      <div class=\"text-center jumbotron\" style=\"margin-top: 2em; padding: 2em;\">\n        <h2>\n          The current highest bidder is\n          <strong>{{ game.highestBidPlayer.name }}</strong>\n          with a bid of\n          <strong>{{ game.highestBidPlayer.bid }}</strong>\n        </h2>\n      </div>\n      <div class=\"row justify-content-center\" style=\"margin-top: 1em;\">\n        <div class=\"col-xs-6\" style=\"margin-right: 1em;\">\n          <button class=\"btn-sm btn-danger\" (click)=\"decrementBidValue()\">\n            <h4>-</h4>\n          </button>\n        </div>\n        <div class=\"col-xs-6\" style=\"margin-right: 1em;\">\n          <mat-slider\n            min=\"125\"\n            max=\"250\"\n            step=\"5\"\n            thumbLabel\n            tickInterval=\"1\"\n            [(value)]=\"bidValue\"\n          ></mat-slider>\n        </div>\n        <div class=\"col-xs-6\" style=\"margin-right: 1em;\">\n          <button class=\"btn-sm btn-success\" (click)=\"incrementBidValue()\">\n            <h4>+</h4>\n          </button>\n        </div>\n        <div class=\"col-xs-6\" style=\"margin-right: 1em;\">\n          <h3>\n            <span class=\"badge badge-secondary\">\n              {{ bidValue }}\n            </span>\n          </h3>\n        </div>\n        <div class=\"col-xs-6\">\n          <button\n            class=\"btn btn-success\"\n            (click)=\"onBid()\"\n            [disabled]=\"bidValue <= game.highestBidPlayer.bid\"\n            [ngStyle]=\"{\n              cursor:\n                bidValue <= game.highestBidPlayer.bid\n                  ? 'not-allowed'\n                  : 'default'\n            }\"\n          >\n            Bid\n          </button>\n        </div>\n      </div>\n    </div>\n    <!-- TRUMP SUIT SELECTION -->\n    <div *ngSwitchCase=\"gameMode.TRUMP_SELECTION\">\n      <div *ngIf=\"user.name === game.highestBidPlayer.name\" class=\"text-center\">\n        <h1>Select A Trump suit</h1>\n        <div class=\"row justify-content-center\" style=\"margin: 0 auto;\">\n          <img\n            *ngFor=\"let suit of suits\"\n            [src]=\"suit\"\n            [alt]=\"suit\"\n            class=\"img-responsive col\"\n            style=\"max-width: 200px; margin: 1em;\"\n            (click)=\"gameService.onTrumpSuitSelection(suit.substring(35, 36))\"\n          />\n        </div>\n      </div>\n      <div *ngIf=\"user.name !== game.highestBidPlayer.name\">\n        <h1>\n          Waiting for {{ game.highestBidPlayer.name }} to select the trump\n          suit...\n        </h1>\n      </div>\n    </div>\n    <!-- PARTNER CARD SELECTION -->\n    <div *ngSwitchCase=\"gameMode.PARTNER_SELECTION\">\n      <div *ngIf=\"user.name === game.highestBidPlayer.name\" class=\"text-center\">\n        <h1>Select A Partner Card</h1>\n        <div class=\"row justify-content-center\" style=\"margin: 0 auto;\">\n          <img\n            *ngFor=\"let card of gameService.allCards\"\n            [src]=\"getImage(card)\"\n            [alt]=\"card.name\"\n            class=\"img-responsive col\"\n            style=\"max-width: 100px; margin: 1em;\"\n            (click)=\"gameService.onPartnerCardSelection(card)\"\n          />\n        </div>\n      </div>\n      <div *ngIf=\"user.name !== game.highestBidPlayer.name\">\n        <h1>\n          Waiting for {{ game.highestBidPlayer.name }} to select the partner\n          card...\n        </h1>\n      </div>\n    </div>\n    <!-- PLAYING -->\n    <div *ngSwitchCase=\"gameMode.PLAYING\">\n      <div class=\"jumbotron text-center\" style=\"margin-top: 2em;\">\n        <h3>\n          Player Name: {{ this.user.name }}, Trump Suit:\n          {{ this.gameService.getSuit(game.trumpSuit) }}, Partner Card:\n          {{ game.partnerCard.name + ' of ' + game.partnerCard.suit }}\n        </h3>\n        <h1>\n          Turn: {{ game.players[game.turn].name }}\n          <strong>{{\n            user.name === game.players[game.turn].name ? '(Your Turn)' : ''\n          }}</strong>\n        </h1>\n        <p class=\"lead\">\n          {{\n            user.name === game.players[game.turn].name\n              ? \"Click a card from the 'your cards' modal to play\"\n              : ''\n          }}\n        </p>\n        <div class=\"alert alert-danger\" *ngIf=\"wrongSuit\">\n          You have a card with the same suit as the first card in the current\n          hand, so you cannot place a card with a different suit that is not the\n          trump.\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"wrongTrump\">\n          You have a card with the same suit as the first card in the current\n          hand (which is not the trump suit), so you cannot place a card\n          belonging to the trump suit.\n        </div>\n      </div>\n      <div class=\"jumbotron text-center\" style=\"margin-top: 2em;\">\n        <h1>Hand:</h1>\n        <div class=\"row justify-content-center\" style=\"margin-top: 1em;\">\n          <div class=\"col-xs-2\">\n            <img\n              *ngFor=\"let card of game.hand\"\n              class=\"img-responsive\"\n              style=\"max-width: 100px; margin: 1em;\"\n              [src]=\"getImage(card)\"\n              alt=\"\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"jumbotron text-center\" style=\"margin-top: 2em;\">\n        <h1>Collected Cards:</h1>\n        <div class=\"row justify-content-center\" style=\"margin-top: 1em;\">\n          <div class=\"col-xs-2\">\n            <img\n              *ngFor=\"let card of game.collectedCards\"\n              class=\"img-responsive\"\n              style=\"max-width: 100px; margin: 1em;\"\n              [src]=\"getImage(card)\"\n              alt=\"\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"gameMode.END\">\n      <div\n        class=\"jumbotron text-center\"\n        style=\"margin-top: 2em;\"\n        [ngClass]=\"game.won ? 'win' : 'loss'\"\n      >\n        <div *ngIf=\"game.won\">\n          <h1>The partnership team won!!!</h1>\n          <h2>\n            The partnership team collected {{ game.score }} points, which is\n            greater than the bid of {{ game.highestBidPlayer.bid }}\n          </h2>\n        </div>\n        <div *ngIf=\"!game.won\">\n          <h1>The partnership team lost.</h1>\n          <h2>\n            The partnership team collected {{ game.score }} points, which is\n            less than the bid of {{ game.highestBidPlayer.bid }}\n          </h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" routerLinkActive=\"active\" routerLink=\"/\"\n      >Triple Spades</a\n    >\n  </div>\n  <button\n    class=\"navbar-toggler\"\n    (click)=\"isCollapsed = !isCollapsed\"\n    [attr.aria-expanded]=\"!isCollapsed\"\n    type=\"button\"\n    aria-controls=\"nav\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"nav\" [ngbCollapse]=\"isCollapsed\">\n    <ul class=\"nav navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          *ngIf=\"!isAuthenticated\"\n          routerLinkActive=\"active\"\n          routerLink=\"/auth\"\n          >Login</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          *ngIf=\"!isAuthenticated\"\n          routerLinkActive=\"active\"\n          routerLink=\"/register\"\n          >Register</a\n        >\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isAuthenticated\">\n        <a\n          class=\"nav-link\"\n          routerLinkActive=\"active\"\n          [routerLink]=\"game.started ? '/game' : '/waiting-room'\"\n          >{{ game.started ? 'Game' : 'Waiting Room' }}</a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/scoreboard\"\n          >Score Board</a\n        >\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"nav-link\" *ngIf=\"isAuthenticated\">\n        <a style=\"cursor: pointer\" (click)=\"onLogout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center shadow\" style=\"margin-top: 2em\">\n  <h1>Welcome to Triple Spades</h1>\n  <div class=\"row justify-content-center\">\n    <img\n      class=\"img img-responsive col\"\n      src=\"https://maheshnat.me/static/media/TripleSpades.a4c96515.gif\"\n      alt=\"Demo gif\"\n    />\n  </div>\n  <br />\n  <button class=\"btn btn-lg btn-primary\" (click)=\"onNavigate()\">\n    Play Now\n  </button>\n  <hr />\n  <h3>Rules</h3>\n  <h5>\n    <a href=\"https://www.youtube.com/watch?v=-WdOp0SG6MY\"\n      >Hackathon Submission Video (Covers gameplay process and rules)\n    </a>\n  </h5>\n  <ol class=\"text-left\">\n    <li>\n      Before the game begins, players bid in a random fashion, based on their\n      cards. This bid number is the amount of points the player's partnership\n      will have to collect in order to win.\n    </li>\n    <li>\n      The highest bidder at the end of 30 seconds will be able to decide a\n      'trump' and 'partner' card. The trump card is the card a player can lay\n      down to overthrow a higher rank card if they do not have the suit they\n      need to put down during the playing section. The player with the partner\n      card will be partners with the highest bidder.\n    </li>\n    <li>\n      Next, the gameplay process begins, during which each player puts down a\n      card with the same suit as the first card played. If they do not have the\n      suit they can put down a card of the trump to overthrow the card for a\n      higher value or put down a card of another suit for a lower vlaue.\n    </li>\n    <li>\n      After each hand, the player with the highest card based on the trump suit\n      and card ranks collects the entire hand, and gains a number of points\n      equal to the number of points in the hand (5's = 5 points, 10's/Face Cards\n      = 10 points, everything else = 0 points).\n    </li>\n    <li>\n      This process repeats until all players run out of their cards, and if the\n      partnership (highest bidder + player with partner card) have collected a\n      number of points equal to or above the highest bid, they win, otherwise,\n      they lose.\n    </li>\n  </ol>\n  <hr />\n  <h3>\n    Tech Stack\n    <a href=\"https://github.com/Black-Triple/triplespades\">(Github)</a>\n  </h3>\n  <ul class=\"text-left\">\n    <li>Front End: Angular 8 (HTML/CSS, TypeScript)</li>\n    <li>Back End: Flask API (Python)</li>\n    <li>Database: mongoDB</li>\n    <li>Authentication: JWT</li>\n    <li>Realtime communication: SocketIO</li>\n  </ul>\n  <hr />\n  <p>\n    Submitted to Atlassian Codegeist hackathon by\n    <a href=\"https://maheshnat.me\">Mahesh Natamai</a>\n  </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/scoreboard/scoreboard.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scoreboard/scoreboard.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!scoreboard\" class=\"row justify-content-center text-center\">\n  <div class=\"col\">\n    <div\n      class=\"spinner-border text-primary\"\n      role=\"status\"\n      style=\"width: 3rem; height: 3rem;\"\n    >\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n</div>\n<div class=\"table-responsive\" *ngIf=\"scoreboard\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Start Time</th>\n        <th scope=\"col\">End Time</th>\n        <th scope=\"col\">Max Bid</th>\n        <th scope=\"col\">Bidder Name</th>\n        <th scope=\"col\">Trump Suit</th>\n        <th scope=\"col\">Partner Card</th>\n        <th scope=\"col\">Score</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr\n        *ngFor=\"let score of scoreboard; let i = index\"\n        [ngClass]=\"score['score'] >= score['max_bid'] ? 'win' : 'loss'\"\n      >\n        <td>{{ i + 1 }}</td>\n        <td>{{ score['start_time'] }}</td>\n        <td>{{ score['end_time'] }}</td>\n        <td>{{ score['max_bid'] }}</td>\n        <td>{{ score['bidder_name'] }}</td>\n        <td>{{ score['trump_suit'] }}</td>\n        <td>{{ score['partner_card'] }}</td>\n        <td>{{ score['score'] }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/waiting-room/waiting-room.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/waiting-room/waiting-room.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Players In Room:</h1>\n\n<ul class=\"list-group\" style=\"margin-top: 2em;\">\n  <li\n    class=\"list-group-item list-group-item-success\"\n    *ngFor=\"let player of players\"\n  >\n    {{ player.name }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register.component */ "./src/app/auth/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scoreboard/scoreboard.component */ "./src/app/scoreboard/scoreboard.component.ts");
/* harmony import */ var _waiting_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./waiting-room/waiting-room.component */ "./src/app/waiting-room/waiting-room.component.ts");










const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
    { path: 'register', component: _auth_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    {
        path: 'waiting-room',
        component: _waiting_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_9__["WaitingRoomComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: 'game',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    { path: 'scoreboard', component: _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_8__["ScoreboardComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _game_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.service */ "./src/app/game/game.service.ts");





let AppComponent = class AppComponent {
    constructor(authService, gameService, socketService) {
        this.authService = authService;
        this.gameService = gameService;
        this.socketService = socketService;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.authService.autoLogin();
            this.userSub = this.authService.user.subscribe((user) => {
                this.user = user;
            });
            let context = this;
            window.addEventListener('beforeunload', (e) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield context.socketService.emit('leave', context.user.name);
            }));
        });
    }
    ngOnDestroy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.userSub.unsubscribe();
            this.socketSub.unsubscribe();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _game_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/register.component */ "./src/app/auth/register.component.ts");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scoreboard/scoreboard.component */ "./src/app/scoreboard/scoreboard.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _waiting_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./waiting-room/waiting-room.component */ "./src/app/waiting-room/waiting-room.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
            _auth_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_11__["GameComponent"],
            _scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_12__["ScoreboardComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _waiting_room_waiting_room_component__WEBPACK_IMPORTED_MODULE_15__["WaitingRoomComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbCollapseModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModalModule"],
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptorService"],
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthInterceptorService = class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((user) => {
            if (!user)
                return next.handle(req);
            const modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('auth', user.token),
            });
            return next.handle(modifiedReq);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  margin-top: 2em;\n}\n\n.error {\n  margin-top: 1em;\n}\n\n.shadow {\n  padding: 2em;\n}\n\n.login {\n  border-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgge1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5lcnJvciB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLnNoYWRvdyB7XG4gIHBhZGRpbmc6IDJlbTtcbn1cblxuLmxvZ2luIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthComponent = class AuthComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.error = null;
    }
    onSubmit(form) {
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password).subscribe((resData) => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/waiting-room']);
        }, (errorMessage) => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
        });
    }
};
AuthComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.component.html"),
        styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            const isAuth = !!user;
            if (isAuth)
                return true;
            return this.router.createUrlTree(['/auth']);
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");









let AuthService = class AuthService {
    constructor(http, router, socketService) {
        this.http = http;
        this.router = router;
        this.socketService = socketService;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.EXPIRES_IN = 86400;
    }
    register(name, email, password) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl}/register`, {
            name: name,
            email: email,
            password: password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((resData) => {
            const expirationDate = new Date(new Date().getTime() + this.EXPIRES_IN * 1000);
            const user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](resData.name, email, resData.token, expirationDate, true);
            this.user.next(user);
            this.autoLogout(this.EXPIRES_IN * 1000);
            localStorage.setItem('userData', JSON.stringify(user));
            this.socketService.emit('join', user.name);
            this.router.navigate(['/auth']);
        }));
    }
    login(email, password) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl}/login`, {
            email: email,
            password: password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((resData) => {
            const expirationDate = new Date(new Date().getTime() + this.EXPIRES_IN * 1000);
            const user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](resData.name, email, resData.token, expirationDate, true);
            this.user.next(user);
            this.autoLogout(this.EXPIRES_IN * 1000);
            localStorage.setItem('userData', JSON.stringify(user));
            this.socketService.emit('join', user.name);
            this.router.navigate(['/auth']);
        }));
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData)
            return;
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](userData.name, userData.email, userData._token, new Date(userData._tokenExpirationDate), true);
        if (user.token) {
            this.user.next(user);
            const expirationDate = new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDate);
            this.socketService.emit('join', user.name);
            this.router.navigate(['/waiting-room']);
        }
    }
    logout() {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl}/logout`, {
            name: this.user.value.name,
            email: this.user.value.email,
            token: this.user.value.token,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((message) => {
            const expirationDate = new Date(new Date().getTime() + this.EXPIRES_IN * 1000);
            const user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](this.user.value.name, this.user.value.email, null, expirationDate, false);
            this.socketService.emit('leave', user.name);
            this.user.next(null);
            localStorage.removeItem('userData');
            if (this.tokenExpirationTimer)
                clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
            this.router.navigate(['/auth']);
        }));
    }
    autoLogout(expiresIn) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expiresIn);
    }
    handleError(errorRes) {
        let errorMessage = 'An unknown error occured!';
        console.log(errorRes.error);
        if (!errorRes.error)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        switch (errorRes.error) {
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Incorrect password.';
                break;
            case 'ALREADY_AUTHENTICATED':
                errorMessage =
                    'You are already logged in from another tab. Log out from another tab or close the current tab to continue.';
            case 'USER_EXISTS':
                errorMessage =
                    'Another user with that email exists. Please try logging in if you have already registered or register with a different email.';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/register.component.css":
/*!*********************************************!*\
  !*** ./src/app/auth/register.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth {\n  margin-top: 2em;\n}\n\n.error {\n  margin-top: 1em;\n}\n\n.shadow {\n  padding: 2em;\n}\n\n.login {\n  border-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aCB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmVycm9yIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4uc2hhZG93IHtcbiAgcGFkZGluZzogMmVtO1xufVxuXG4ubG9naW4ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/register.component.ts":
/*!********************************************!*\
  !*** ./src/app/auth/register.component.ts ***!
  \********************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegisterComponent = class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.error = null;
    }
    onSubmit(form) {
        this.isLoading = true;
        this.authService
            .register(form.value.name, form.value.email, form.value.password)
            .subscribe((resData) => {
            this.isLoading = false;
            this.router.navigate(['/waiting-room']);
        }, (errorMessage) => {
            this.error = errorMessage;
            this.isLoading = false;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name, email, _token, _tokenExpirationDate, authenticated) {
        this.name = name;
        this.email = email;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
        this.authenticated = authenticated;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
            return null;
        return this._token;
    }
}
User.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: Date },
    { type: Boolean }
];


/***/ }),

/***/ "./src/app/game/card.model.ts":
/*!************************************!*\
  !*** ./src/app/game/card.model.ts ***!
  \************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
class Card {
    constructor(suit, name, rank, pointValue, image) {
        this.suit = suit;
        this.name = name;
        this.rank = rank;
        this.pointValue = pointValue;
        this.image = image;
    }
    short() {
        return `${this.name} of ${this.suit}s`;
    }
}
Card.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game.service */ "./src/app/game/game.service.ts");
/* harmony import */ var _game_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game.model */ "./src/app/game/game.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let GameComponent = class GameComponent {
    constructor(socketService, authService, gameService, modalService) {
        this.socketService = socketService;
        this.authService = authService;
        this.gameService = gameService;
        this.modalService = modalService;
        this.bidValue = 125;
        this.suits = [];
        this.gameMode = _game_model__WEBPACK_IMPORTED_MODULE_5__["GameMode"];
        this.wrongSuit = false;
        this.wrongTrump = false;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
    ngOnInit() {
        for (let suit of ['AC', 'AD', 'AH', 'AS'])
            this.suits.push('../../assets/images/playing_cards/' + suit + '.png');
        this.authService.user.subscribe((user) => {
            this.user = user;
        });
        this.gameService.game.subscribe((game) => {
            this.game = game;
        });
    }
    onBid() {
        if (this.bidValue === 250)
            this.socketService.emit('max_bid', {
                name: this.user.name,
                bid: 250,
            });
        else
            this.socketService.emit('bid', {
                name: this.user.name,
                bid: this.bidValue,
            });
    }
    incrementBidValue() {
        this.bidValue += this.bidValue === 250 ? 0 : 5;
    }
    decrementBidValue() {
        this.bidValue -= this.bidValue === 125 ? 0 : 5;
    }
    getImage(card) {
        return `assets/images/playing_cards/${card.name.toUpperCase() + card.suit.charAt(0).toUpperCase()}.png`;
    }
    playCard(card) {
        if (this.user.name === this.game.players[this.game.turn].name) {
            if (this.game.hand.length > 0 &&
                card.suit !== this.game.hand[0].suit &&
                this.game.cards.findIndex((card) => card.suit === this.game.hand[0].suit) !== -1 &&
                card.suit.charAt(0) !== this.game.trumpSuit) {
                this.wrongTrump = false;
                this.wrongSuit = true;
            }
            else if (this.game.hand.length > 0 &&
                card.suit.charAt(0) === this.game.trumpSuit &&
                this.game.cards.findIndex((card) => card.suit === this.game.hand[0].suit) !== -1 &&
                this.game.hand[0].suit.charAt(0) !== this.game.trumpSuit) {
                this.wrongSuit = false;
                this.wrongTrump = true;
            }
            else {
                this.game.cards.splice(this.game.cards.findIndex((_card) => _card === card), 1);
                if (this.game.hand.length === this.game.players.length - 1) {
                    this.socketService.emit('hand_end', card);
                    if (this.game.cards.length === 0)
                        this.socketService.emit('playing_end', null);
                }
                else
                    this.socketService.emit('play_card', card);
                this.gameService.game.next(this.game);
                this.wrongSuit = false;
                this.wrongTrump = false;
            }
        }
    }
};
GameComponent.ctorParameters = () => [
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/game.component.html"),
        styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/game/game.model.ts":
/*!************************************!*\
  !*** ./src/app/game/game.model.ts ***!
  \************************************/
/*! exports provided: Game, GameMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMode", function() { return GameMode; });
/* harmony import */ var _shared_player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/player.model */ "./src/app/shared/player.model.ts");
/* harmony import */ var _card_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.model */ "./src/app/game/card.model.ts");


class Game {
    constructor(highestBidPlayer, started, gameMode, cards, players, startTime, turn, hand = [], collectedCards = [], trumpSuit, partnerCard, partner, score, won = false, time = 30, endTime) {
        this.highestBidPlayer = highestBidPlayer;
        this.started = started;
        this.gameMode = gameMode;
        this.cards = cards;
        this.players = players;
        this.startTime = startTime;
        this.turn = turn;
        this.hand = hand;
        this.collectedCards = collectedCards;
        this.trumpSuit = trumpSuit;
        this.partnerCard = partnerCard;
        this.partner = partner;
        this.score = score;
        this.won = won;
        this.time = time;
        this.endTime = endTime;
    }
}
Game.ctorParameters = () => [
    { type: _shared_player_model__WEBPACK_IMPORTED_MODULE_0__["Player"] },
    { type: Boolean },
    { type: undefined },
    { type: Array },
    { type: Array },
    { type: Date },
    { type: Number },
    { type: Array },
    { type: Array },
    { type: String },
    { type: _card_model__WEBPACK_IMPORTED_MODULE_1__["Card"] },
    { type: Boolean },
    { type: Number },
    { type: Boolean },
    { type: Number },
    { type: Date }
];
var GameMode;
(function (GameMode) {
    GameMode[GameMode["BIDDING"] = 0] = "BIDDING";
    GameMode[GameMode["TRUMP_SELECTION"] = 1] = "TRUMP_SELECTION";
    GameMode[GameMode["PARTNER_SELECTION"] = 2] = "PARTNER_SELECTION";
    GameMode[GameMode["PLAYING"] = 3] = "PLAYING";
    GameMode[GameMode["END"] = 4] = "END";
})(GameMode || (GameMode = {}));


/***/ }),

/***/ "./src/app/game/game.service.ts":
/*!**************************************!*\
  !*** ./src/app/game/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _game_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.model */ "./src/app/game/game.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_player_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/player.model */ "./src/app/shared/player.model.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");










let GameService = class GameService {
    constructor(socketService, router, http, authService) {
        this.socketService = socketService;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.game = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _game_model__WEBPACK_IMPORTED_MODULE_3__["Game"](null, false));
        this.TRUMP_SELECTION_TIME = 15000;
        this.PARTNER_CARD_SELECTION_TIME = 15000;
        this.BIDDING_TIME = 30000;
        this.authService.user.subscribe((user) => {
            this.user = user;
        });
        this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl}/cards`).subscribe((cards) => {
            this.allCards = cards;
        });
        this.game.subscribe((game) => (this.gameValue = game));
        this.socketService.listen('bid').subscribe((data) => {
            this.gameValue.highestBidPlayer = new _shared_player_model__WEBPACK_IMPORTED_MODULE_5__["Player"](data.name, data.bid, true);
            this.update();
        });
        this.socketService.listen('start_selection').subscribe((data) => {
            clearInterval(this.timeInterval);
            clearTimeout(this.selectionStartTimeout);
            this.gameValue.gameMode = _game_model__WEBPACK_IMPORTED_MODULE_3__["GameMode"].TRUMP_SELECTION;
            this.update();
            if (this.user.name === this.gameValue.highestBidPlayer.name) {
                this.trumpSelectionTimeout = setTimeout(() => {
                    clearInterval(this.timeInterval);
                    this.gameValue.trumpSuit = ['S', 'C', 'H', 'D'][Math.floor(Math.random() * 4)];
                    this.socketService.emit('trump_selection', this.gameValue.trumpSuit);
                    this.gameValue.gameMode = _game_model__WEBPACK_IMPORTED_MODULE_3__["GameMode"].PARTNER_SELECTION;
                    this.update();
                }, this.TRUMP_SELECTION_TIME);
            }
        });
        this.socketService
            .listen('trump_selection')
            .subscribe((trumpSuit) => {
            this.gameValue.trumpSuit = trumpSuit;
            this.gameValue.gameMode = _game_model__WEBPACK_IMPORTED_MODULE_3__["GameMode"].PARTNER_SELECTION;
            this.update();
            if (this.user.name === this.gameValue.highestBidPlayer.name) {
                this.partnerCardSelectionTimeout = setTimeout(() => {
                    clearInterval(this.timeInterval);
                    this.gameValue.partnerCard = this.allCards[Math.floor(Math.random() * this.allCards.length)];
                    this.socketService.emit('partner_selection', this.gameValue.partnerCard);
                    this.update();
                }, this.PARTNER_CARD_SELECTION_TIME);
            }
        });
        this.socketService
            .listen('partner_selection')
            .subscribe((partnerCard) => {
            this.gameValue.partnerCard = partnerCard;
            this.gameValue.partner = this.gameValue.cards
                .map((card) => card.rank + card.suit)
                .includes(this.gameValue.partnerCard.rank + this.gameValue.partnerCard.suit);
            this.update();
        });
        this.socketService.listen('start_playing').subscribe((turn) => {
            this.gameValue.turn = turn;
            this.gameValue.gameMode = _game_model__WEBPACK_IMPORTED_MODULE_3__["GameMode"].PLAYING;
            this.update();
        });
        this.socketService.listen('play_card').subscribe((card) => {
            this.gameValue.hand.push(card);
            this.gameValue.turn =
                (this.gameValue.turn + 1) % this.gameValue.players.length;
            this.update();
        });
        this.socketService.listen('hand_end').subscribe((card) => {
            this.gameValue.hand.push(card);
            this.gameValue.turn = this.getHandWinner();
            console.log(this.gameValue.turn);
            if (this.user.name === this.gameValue.players[this.gameValue.turn].name) {
                this.gameValue.collectedCards = this.gameValue.collectedCards.concat(this.gameValue.hand);
            }
            this.gameValue.hand = [];
            this.update();
        });
        this.socketService.listen('playing_end').subscribe(() => {
            const score = this.gameValue.collectedCards.reduce((acc, card) => acc + card['point_value'], 0);
            console.log(this.gameValue.partner);
            if (this.user.name === this.gameValue.highestBidPlayer.name) {
                if (this.gameValue.partner) {
                    this.socketService.emit('score_final', score * 2);
                    console.log(1);
                }
                this.socketService.emit('score', score);
                console.log(2);
            }
            else if (this.gameValue.partner) {
                this.socketService.emit('score', score);
                console.log(3);
            }
        });
        this.socketService.listen('score_final').subscribe((score) => {
            this.gameValue.gameMode = _game_model__WEBPACK_IMPORTED_MODULE_3__["GameMode"].END;
            this.gameValue.score = score;
            this.gameValue.endTime = new Date();
            if (this.gameValue.score >= this.gameValue.highestBidPlayer.bid)
                this.gameValue.won = true;
            if (this.gameValue.partner) {
                this.http
                    .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl}/game`, {
                    start_time: this.gameValue.startTime,
                    end_time: this.gameValue.endTime,
                    max_bid: this.gameValue.highestBidPlayer.bid,
                    bidder_name: this.gameValue.highestBidPlayer.name,
                    trump_suit: this.getSuit(this.gameValue.trumpSuit),
                    partner_card: `${this.gameValue.partnerCard.name} of ${this.gameValue.partnerCard.suit}`,
                    score: this.gameValue.score,
                })
                    .subscribe((data) => console.log(data));
            }
            this.gameValue.started = false;
            this.update();
        });
        this.socketService.listen('end_game').subscribe(() => {
            this.game.next(new _game_model__WEBPACK_IMPORTED_MODULE_3__["Game"](null, false));
            clearInterval(this.timeInterval);
            clearTimeout(this.selectionStartTimeout);
            this.router.navigate(['/']);
        });
    }
    startGame(defaultBidder, cards, players, startTime) {
        const game = new _game_model__WEBPACK_IMPORTED_MODULE_3__["Game"](new _shared_player_model__WEBPACK_IMPORTED_MODULE_5__["Player"](defaultBidder, 125, true), true, _game_model__WEBPACK_IMPORTED_MODULE_3__["GameMode"].BIDDING, cards, players, startTime);
        this.game.next(game);
        this.timeInterval = setInterval(() => {
            if (game.time > 0)
                game.time--;
            this.game.next(game);
        }, 1000);
        this.selectionStartTimeout = setTimeout(() => {
            this.socketService.emit('start_selection', null);
        }, this.BIDDING_TIME);
    }
    onTrumpSuitSelection(trumpSuit) {
        clearTimeout(this.trumpSelectionTimeout);
        clearTimeout(this.timeInterval);
        this.gameValue.trumpSuit = trumpSuit;
        this.gameValue.gameMode = _game_model__WEBPACK_IMPORTED_MODULE_3__["GameMode"].PARTNER_SELECTION;
        this.update();
        this.socketService.emit('trump_selection', trumpSuit);
    }
    onPartnerCardSelection(partnerCard) {
        clearTimeout(this.partnerCardSelectionTimeout);
        clearTimeout(this.timeInterval);
        this.gameValue.partnerCard = partnerCard;
        this.gameValue.gameMode = _game_model__WEBPACK_IMPORTED_MODULE_3__["GameMode"].PLAYING;
        this.update();
        this.socketService.emit('partner_selection', partnerCard);
        this.socketService.emit('start_playing', this.gameValue.players.findIndex((player) => player.name === this.gameValue.highestBidPlayer.name));
    }
    getHandWinner() {
        let shiftedPlayers = this.gameValue.players.slice();
        if (this.gameValue.turn !== this.gameValue.players.length - 1)
            shiftedPlayers = this.gameValue.players
                .slice(this.gameValue.turn + 1)
                .concat(this.gameValue.players.slice(0, this.gameValue.turn + 1));
        let winner = 0;
        let winnerCard = this.gameValue.hand[0];
        for (let i = 1; i < this.gameValue.hand.length; i++) {
            let card = this.gameValue.hand[i];
            if (winnerCard.suit.charAt(0) === this.gameValue.trumpSuit) {
                if (card.suit.charAt(0) === this.gameValue.trumpSuit &&
                    parseInt(card.rank) > parseInt(winnerCard.rank)) {
                    winner = i;
                    winnerCard = card;
                }
            }
            else {
                if (card.suit.charAt(0) === this.gameValue.trumpSuit) {
                    winner = i;
                    winnerCard = card;
                }
                else if (parseInt(card.rank) > parseInt(winnerCard.rank) &&
                    card.suit === this.gameValue.hand[0].suit) {
                    winner = i;
                    winnerCard = card;
                }
            }
        }
        console.log(this.gameValue.hand, winner, winnerCard);
        return this.gameValue.players.findIndex((player) => player === shiftedPlayers[winner]);
    }
    getSuit(suit) {
        switch (suit) {
            case 'H':
                return 'Hearts';
            case 'S':
                return 'Spades';
            case 'C':
                return 'Clubs';
            case 'D':
                return 'Diamonds';
        }
    }
    update() {
        this.game.next(this.gameValue);
    }
};
GameService.ctorParameters = () => [
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], GameService);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _game_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/game.service */ "./src/app/game/game.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(authService, gameService, router) {
        this.authService = authService;
        this.gameService = gameService;
        this.router = router;
        this.isAuthenticated = false;
        this.isCollapsed = false;
    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
        });
        this.gameSub = this.gameService.game.subscribe((game) => {
            this.game = game;
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
        this.gameSub.unsubscribe();
    }
    onLogout() {
        this.authService.logout().subscribe((resData) => {
            this.router.navigate(['/auth']);
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _game_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _game_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/game.service */ "./src/app/game/game.service.ts");





let HomeComponent = class HomeComponent {
    constructor(router, authService, gameService) {
        this.router = router;
        this.authService = authService;
        this.gameService = gameService;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
        });
    }
    onNavigate() {
        if (this.isAuthenticated && this.gameService.game.value.started)
            this.router.navigate(['/game']);
        else if (this.isAuthenticated)
            this.router.navigate(['/waiting-room']);
        else
            this.router.navigate(['/auth']);
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _game_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/scoreboard/scoreboard.component.css":
/*!*****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlYm9hcmQvc2NvcmVib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/scoreboard/scoreboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/scoreboard/scoreboard.component.ts ***!
  \****************************************************/
/*! exports provided: ScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function() { return ScoreboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ScoreboardComponent = class ScoreboardComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/game`)
            .subscribe((scoreboard) => {
            this.scoreboard = scoreboard.map((score) => {
                score['start_time'] = `${new Date(score['start_time']).toLocaleDateString()} at ${new Date(score['start_time']).toLocaleTimeString()}`;
                score['end_time'] = `${new Date(score['end_time']).toLocaleDateString()} at ${new Date(score['end_time']).toLocaleTimeString()}`;
                return score;
            });
        });
    }
};
ScoreboardComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ScoreboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scoreboard',
        template: __webpack_require__(/*! raw-loader!./scoreboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/scoreboard/scoreboard.component.html"),
        styles: [__webpack_require__(/*! ./scoreboard.component.css */ "./src/app/scoreboard/scoreboard.component.css")]
    })
], ScoreboardComponent);



/***/ }),

/***/ "./src/app/shared/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/shared/player.model.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(name, bid, highestBidder) {
        this.name = name;
        this.bid = bid;
        this.highestBidder = highestBidder;
    }
}
Player.ctorParameters = () => [
    { type: String },
    { type: Number },
    { type: Boolean }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 6px solid #2101cf;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #2101cf transparent transparent transparent;\n}\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNFQUE4RDtVQUE5RCw4REFBOEQ7RUFDOUQseURBQXlEO0FBQzNEO0FBQ0E7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZHMtcmluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLmxkcy1yaW5nIGRpdiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MXB4O1xuICBoZWlnaHQ6IDUxcHg7XG4gIG1hcmdpbjogNnB4O1xuICBib3JkZXI6IDZweCBzb2xpZCAjMjEwMWNmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICBib3JkZXItY29sb3I6ICMyMTAxY2YgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xufVxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcbn1cbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
};
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
        styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/shared/spinner/spinner.component.css")]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let SocketService = class SocketService {
    constructor() {
        this.URI = 'http://127.0.0.1:5000/';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.URI);
    }
    listen(event) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((subscriber) => {
            this.socket.on(event, (data) => {
                console.log(`event ${event} listened with data ${data}`);
                subscriber.next(data);
            });
        });
    }
    emit(event, data) {
        console.log(`event ${event} emitted with data ${data}`);
        return this.socket.emit(event, data);
    }
};
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SocketService);



/***/ }),

/***/ "./src/app/waiting-room/waiting-room.component.css":
/*!*********************************************************!*\
  !*** ./src/app/waiting-room/waiting-room.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhaXRpbmctcm9vbS93YWl0aW5nLXJvb20uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/waiting-room/waiting-room.component.ts":
/*!********************************************************!*\
  !*** ./src/app/waiting-room/waiting-room.component.ts ***!
  \********************************************************/
/*! exports provided: WaitingRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingRoomComponent", function() { return WaitingRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_player_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/player.model */ "./src/app/shared/player.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _game_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game/game.service */ "./src/app/game/game.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");









let WaitingRoomComponent = class WaitingRoomComponent {
    constructor(socketService, gameService, authService, http, router) {
        this.socketService = socketService;
        this.gameService = gameService;
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.players = [];
    }
    ngOnInit() {
        this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl}/players`)
            .subscribe((players) => {
            this.players = players.map((player) => new _shared_player_model__WEBPACK_IMPORTED_MODULE_4__["Player"](player));
        });
        this.authService.user.subscribe((user) => {
            this.user = user;
        });
        this.socketService.emit('join', this.user.name);
        this.socketService.listen('join').subscribe((playerName) => {
            console.log(`${playerName} joined`);
            this.players.push(new _shared_player_model__WEBPACK_IMPORTED_MODULE_4__["Player"](playerName));
        });
        this.socketService.listen('leave').subscribe((playerName) => {
            console.log(`${playerName} left`);
            this.players.splice(this.players.findIndex((_player) => _player.name === playerName), 1);
        });
        this.socketService
            .listen('start_game')
            .subscribe((data) => {
            this.gameService.startGame(data['default_bidder'], data['cards'][this.players.findIndex((player) => player.name === this.user.name)], this.players, new Date());
            this.router.navigate(['/game']);
        });
    }
    ngOnDestroy() { }
};
WaitingRoomComponent.ctorParameters = () => [
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] },
    { type: _game_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
WaitingRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-waiting-room',
        template: __webpack_require__(/*! raw-loader!./waiting-room.component.html */ "./node_modules/raw-loader/index.js!./src/app/waiting-room/waiting-room.component.html"),
        styles: [__webpack_require__(/*! ./waiting-room.component.css */ "./src/app/waiting-room/waiting-room.component.css")]
    })
], WaitingRoomComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "http://127.0.0.1:5000",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mahesh/Documents/Web_Development/Projects/Black-Triple/server/client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map