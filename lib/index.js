"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _First = _interopRequireDefault(require("./components/First"));

var _CodeEditor = _interopRequireDefault(require("./components/CodeEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  ReactDemo: _First["default"],
  CodeEditor: _CodeEditor["default"]
};
exports["default"] = _default;