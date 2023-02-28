"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: {
    //   存放分类数组的属性
    catagtory: [],
    currentCatagtory: '' // 当前激活的分类

  },
  mutations: {
    // 会认为载荷是要更新的数组
    updateCatagtory: function updateCatagtory(state, payload) {
      state.catagtory = payload; // 赋值分类
    },
    // 更新当前的激活分类
    updateCurrentCatagtory: function updateCurrentCatagtory(state, payload) {
      state.currentCatagtory = payload;
    }
  },
  actions: {
    getCatagtory: function getCatagtory(context) {
      var _ref, channels;

      return regeneratorRuntime.async(function getCatagtory$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get('http://ttapi.research.itcast.cn/app/v1_0/channels'));

            case 2:
              _ref = _context.sent;
              channels = _ref.data.data.channels;
              // 需要通过mutation才能修改state
              context.commit('updateCatagtory', channels); // 更新数组

              context.commit('updateCurrentCatagtory', channels[0].id); // 更新当前激活id

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;