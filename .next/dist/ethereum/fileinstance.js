'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _File = require('./build/File');

var _File2 = _interopRequireDefault(_File);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_File2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmaWxlaW5zdGFuY2UuanMiXSwibmFtZXMiOlsicmVhY3QiLCJ3ZWIzIiwiY29tcGlsZWRGaWxlSW5zdGFuY2UiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7OztBQUNBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFpQyxBQUFqQyxBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQVksQUFDekI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsZUFBcUIsQUFBaEMsQUFBdEIsWUFBaUUsQUFBakUsQUFBUCxBQUNEO0FBRkQiLCJmaWxlIjoiZmlsZWluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6IkM6L2FjbS9wYXBlckRBcHAtbWFzdGVyL3BhcGVyREFwcC1tYXN0ZXIifQ==