"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _store = _interopRequireDefault(require("./store"));

require("./styles/index.less");

var _vant = require("vant");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入全局样式
_vue["default"].use(_vant.Button);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');