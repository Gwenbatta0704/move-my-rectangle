/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Rectangle.ts":
/*!*****************************!*\
  !*** ./src/js/Rectangle.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Rectangle = function () {\n  function Rectangle(ctx, canvas) {\n    this.speedX = 3;\n    this.speedY = 4;\n    this.canvas = canvas;\n    this.width = Math.ceil(settings_1.settings.minWidth + Math.random() * (settings_1.settings.maxWidth - settings_1.settings.minWidth));\n    this.height = Math.trunc(this.width * settings_1.settings.heightRatio);\n    this.x = this.width / 2 + Math.random() * (canvas.width - this.width / 2 - this.width / 2);\n    this.y = this.height / 2 + Math.random() * (canvas.height - this.height / 2 - this.height / 2);\n    this.x = Math.ceil(this.x);\n    this.y = Math.ceil(this.y);\n    this.color = \"hsl(\".concat(settings_1.settings.colors[Math.floor(Math.random() * settings_1.settings.colors.length)], \", \").concat(Math.ceil(Math.random() * 100), \"%, \").concat(Math.ceil(Math.random() * 100), \"%)\");\n    this.ctx = ctx;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.translate(this.x, this.y);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);\n    this.ctx.restore();\n  };\n\n  Rectangle.prototype.update = function () {\n    if (this.x < 0 || this.x > this.canvas.width) {\n      this.speedX = -this.speedX;\n    }\n\n    if (this.y < 0 || this.y > this.canvas.height) {\n      this.speedY = -this.speedY;\n    }\n\n    this.x += this.speedX;\n    this.y += this.speedY;\n    this.draw();\n  };\n\n  return Rectangle;\n}();\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0gsR0FURDs7QUFVSjtBQUFDLENBekNEOztBQUFhQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy9qcy9SZWN0YW5nbGUudHM/ODA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSB7XHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHNwZWVkWCA9IDM7XHJcbiAgICBwcml2YXRlIHNwZWVkWSA9IDQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLndpZHRoID0gTWF0aC5jZWlsKHNldHRpbmdzLm1pbldpZHRoK01hdGgucmFuZG9tKCkqKHNldHRpbmdzLm1heFdpZHRoLXNldHRpbmdzLm1pbldpZHRoKSk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnRydW5jKHRoaXMud2lkdGgqc2V0dGluZ3MuaGVpZ2h0UmF0aW8pO1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMud2lkdGgvMitNYXRoLnJhbmRvbSgpKigoY2FudmFzLndpZHRoLXRoaXMud2lkdGgvMiktKHRoaXMud2lkdGgvMikpO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuaGVpZ2h0LzIrTWF0aC5yYW5kb20oKSooKGNhbnZhcy5oZWlnaHQtdGhpcy5oZWlnaHQvMiktKHRoaXMuaGVpZ2h0LzIpKTtcclxuICAgICAgICB0aGlzLnggPSBNYXRoLmNlaWwodGhpcy54KTtcclxuICAgICAgICB0aGlzLnkgPSBNYXRoLmNlaWwodGhpcy55KTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gYGhzbCgke3NldHRpbmdzLmNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqc2V0dGluZ3MuY29sb3JzLmxlbmd0aCldfSwgJHtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDApfSUsICR7TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqMTAwKX0lKWA7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgdGhpcy5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC10aGlzLndpZHRoLzIsIC10aGlzLmhlaWdodC8yLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy54IDwwIHx8IHRoaXMueD4gdGhpcy5jYW52YXMud2lkdGgpe1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkWCA9IC10aGlzLnNwZWVkWFxyXG4gICAgICAgIH1pZiAodGhpcy55IDwwIHx8IHRoaXMueT4gdGhpcy5jYW52YXMuaGVpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFkgPSAtdGhpcy5zcGVlZFlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjdHgiLCJjYW52YXMiLCJ3aWR0aCIsIk1hdGgiLCJjZWlsIiwic2V0dGluZ3NfMSIsIm1pbldpZHRoIiwicmFuZG9tIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJ0cnVuYyIsImhlaWdodFJhdGlvIiwieCIsInkiLCJjb2xvciIsImNvbG9ycyIsImZsb29yIiwibGVuZ3RoIiwiY29uY2F0IiwiUmVjdGFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicmVzdG9yZSIsInNwZWVkWCIsInNwZWVkWSIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Rectangle.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/js/Rectangle.ts\");\n\nvar rectangles = [];\nvar canvas = document.getElementById(\"my-canvas\");\nvar ctx = canvas.getContext('2d');\n\nfunction updateCanvasSize() {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n}\n\nwindow.addEventListener('resize', function (event) {\n  updateCanvasSize();\n});\nupdateCanvasSize();\ncanvas.addEventListener('click', function (event) {\n  rectangles.push(new Rectangle_1.Rectangle(ctx, canvas));\n  console.log(rectangles);\n});\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  for (var _i = 0, rectangles_1 = rectangles; _i < rectangles_1.length; _i++) {\n    var rectangle = rectangles_1[_i];\n    rectangle.update();\n  }\n\n  requestAnimationFrame(animate);\n}\n\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFnQixFQUFoQztBQUVBLElBQU1DLE1BQU0sR0FBc0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFsQztBQUNBLElBQU1DLEdBQUcsR0FBNkJILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUF0Qzs7QUFFQSxTQUFTQyxnQkFBVCxHQUF5QjtBQUNyQkwsUUFBTSxDQUFDTSxLQUFQLEdBQWVDLE1BQU0sQ0FBQ0MsVUFBdEI7QUFDQVIsUUFBTSxDQUFDUyxNQUFQLEdBQWdCRixNQUFNLENBQUNHLFdBQXZCO0FBQ0g7O0FBRURILE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBQ0MsS0FBRCxFQUFNO0FBQ3BDUCxrQkFBZ0I7QUFDbkIsQ0FGRDtBQUdBQSxnQkFBZ0I7QUFHaEJMLE1BQU0sQ0FBQ1csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ0MsS0FBRCxFQUFNO0FBQ25DYixZQUFVLENBQUNjLElBQVgsQ0FBZ0IsSUFBSUMscUJBQUosQ0FBY1gsR0FBZCxFQUFtQkgsTUFBbkIsQ0FBaEI7QUFFQWUsU0FBTyxDQUFDQyxHQUFSLENBQVlqQixVQUFaO0FBQ0gsQ0FKRDs7QUFNQSxTQUFTa0IsT0FBVCxHQUFnQjtBQUNaZCxLQUFHLENBQUNlLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CbEIsTUFBTSxDQUFDTSxLQUEzQixFQUFrQ04sTUFBTSxDQUFDUyxNQUF6Qzs7QUFDQSxPQUF3QixxQ0FBeEIsRUFBd0JVLHdCQUF4QixFQUF3QkEsSUFBeEIsRUFBb0M7QUFBL0IsUUFBTUMsU0FBUyxtQkFBZjtBQUNEQSxhQUFTLENBQUNDLE1BQVY7QUFDSDs7QUFDREMsdUJBQXFCLENBQUNMLE9BQUQsQ0FBckI7QUFDSDs7QUFDREEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmUtbXktcmVjdGFuZ2xlLy4vc3JjL2pzL21haW4udHM/NGI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XHJcblxyXG5jb25zdCByZWN0YW5nbGVzOiBSZWN0YW5nbGVbXSA9IFtdO1xyXG5cclxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXktY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5jb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNhbnZhc1NpemUoKSB7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHtcclxuICAgIHVwZGF0ZUNhbnZhc1NpemUoKTtcclxufSlcclxudXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG5cclxuXHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgcmVjdGFuZ2xlcy5wdXNoKG5ldyBSZWN0YW5nbGUoY3R4LCBjYW52YXMpKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnNvbGUubG9nKHJlY3RhbmdsZXMpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAoY29uc3QgcmVjdGFuZ2xlIG9mIHJlY3RhbmdsZXMpIHtcclxuICAgICAgICByZWN0YW5nbGUudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbn1cclxuYW5pbWF0ZSgpOyJdLCJuYW1lcyI6WyJyZWN0YW5nbGVzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ1cGRhdGVDYW52YXNTaXplIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwdXNoIiwiUmVjdGFuZ2xlXzEiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsIl9pIiwicmVjdGFuZ2xlIiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  minWidth: 50,\n  maxWidth: 200,\n  heightRatio: 0.4,\n  colors: ['253', '227', '250', '209', '202']\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsVUFBUSxFQUFFLEVBRFU7QUFFcEJDLFVBQVEsRUFBRSxHQUZVO0FBR3BCQyxhQUFXLEVBQUUsR0FITztBQUlwQkMsUUFBTSxFQUFFLENBQ0osS0FESSxFQUVKLEtBRkksRUFHSixLQUhJLEVBSUosS0FKSSxFQUtKLEtBTEk7QUFKWSxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBtaW5XaWR0aDogNTAsXHJcbiAgICBtYXhXaWR0aDogMjAwLFxyXG4gICAgaGVpZ2h0UmF0aW86IDAuNCxcclxuICAgIGNvbG9yczogW1xyXG4gICAgICAgICcyNTMnLFxyXG4gICAgICAgICcyMjcnLFxyXG4gICAgICAgICcyNTAnLFxyXG4gICAgICAgICcyMDknLFxyXG4gICAgICAgICcyMDInXHJcbiAgICBdXHJcbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHRSYXRpbyIsImNvbG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmove_my_rectangle"] = self["webpackChunkmove_my_rectangle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;