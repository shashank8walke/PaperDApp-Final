'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\acm\\paperDApp-master\\paperDApp-master\\components\\Header.js';


var HeaderFile = function (_Component) {
  (0, _inherits3.default)(HeaderFile, _Component);

  function HeaderFile() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HeaderFile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderFile.__proto__ || (0, _getPrototypeOf2.default)(HeaderFile)).call.apply(_ref, [this].concat(args))), _this), _this.onClickMyDocs = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, address;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                address = accounts[0];

                _routes.Router.pushRoute('/documents/my/' + address);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onClickMyReceivedDocs = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var accounts, address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _context2.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context2.sent;
                address = accounts[0];

                _routes.Router.pushRoute('/documents/my/received/' + address);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.onClickUsers = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var accounts, address;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                _context3.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context3.sent;
                address = accounts[0];

                _routes.Router.pushRoute('/users/allUsers/' + address);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(HeaderFile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', size: 'huge', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file alternate outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), 'PaperDApp', _react2.default.createElement(_semanticUiReact.Label.Detail, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'paper plane outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', inverted: true, color: 'purple', className: 'item', onClick: this.onClickUsers, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'All Users'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'users', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }))), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', inverted: true, color: 'red', className: 'item', onClick: this.onClickMyDocs, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'My Created Docs'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }))), _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', inverted: true, color: 'violet', className: 'item', onClick: this.onClickMyReceivedDocs, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Received Docs'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }))), _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', inverted: true, color: 'green', className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Documents'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file alternate', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })))), _react2.default.createElement(_routes.Link, { route: '/documents/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Add Document', icon: 'add circle', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }))));
    }
  }]);

  return HeaderFile;
}(_react.Component);

exports.default = HeaderFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJyZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJCdXR0b24iLCJJY29uIiwiTGFiZWwiLCJMaW5rIiwiUm91dGVyIiwid2ViMyIsIkhlYWRlckZpbGUiLCJvbkNsaWNrTXlEb2NzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhZGRyZXNzIiwicHVzaFJvdXRlIiwib25DbGlja015UmVjZWl2ZWREb2NzIiwib25DbGlja1VzZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUSxBQUFNLEFBQU8sQUFBTTs7QUFDM0IsQUFBUSxBQUFLLEFBQWE7O0FBQzFCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7Ozs7Ozs7Ozs7Ozs7O29OLEFBQ0o7MkZBQWdCLGlCQUFBLEFBQU8sT0FBUDtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDZDtzQkFEYyxBQUNkLEFBQU07Z0NBRFE7dUJBRVMsY0FBQSxBQUFLLElBRmQsQUFFUyxBQUFTOzttQkFBMUI7QUFGUSxvQ0FHUjtBQUhRLDBCQUdFLFNBSEYsQUFHRSxBQUFTLEFBQ3pCOzsrQkFBQSxBQUFPLDZCQUpPLEFBSWQsQUFBa0M7O21CQUpwQjttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7OztlLEFBT2hCOzJGQUF3QixrQkFBQSxBQUFPLE9BQVA7c0JBQUE7d0VBQUE7b0JBQUE7K0NBQUE7bUJBQ3RCO3NCQURzQixBQUN0QixBQUFNO2lDQURnQjt1QkFFQyxjQUFBLEFBQUssSUFGTixBQUVDLEFBQVM7O21CQUExQjtBQUZnQixxQ0FHaEI7QUFIZ0IsMEJBR04sU0FITSxBQUdOLEFBQVMsQUFDekI7OytCQUFBLEFBQU8sc0NBSmUsQUFJdEIsQUFBMkM7O21CQUpyQjttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBOzs7OztlLEFBT3hCOzJGQUFlLGtCQUFBLEFBQU8sT0FBUDtzQkFBQTt3RUFBQTtvQkFBQTsrQ0FBQTttQkFDYjtzQkFEYSxBQUNiLEFBQU07aUNBRE87dUJBRVUsY0FBQSxBQUFLLElBRmYsQUFFVSxBQUFTOzttQkFBMUI7QUFGTyxxQ0FHUDtBQUhPLDBCQUdHLFNBSEgsQUFHRyxBQUFTLEFBQ3pCOzsrQkFBQSxBQUFPLCtCQUpNLEFBSWIsQUFBb0M7O21CQUp2QjttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBOzs7Ozs7Ozs7OzZCQU1OLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx3Q0FBTSxPQUFQLEFBQWEsVUFBUyxNQUF0QixBQUEyQjtvQkFBM0I7c0JBQUEsQUFBa0M7QUFBbEM7eUJBQWtDLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUFsQyxBQUFrQztBQUFBO1VBQThDLDZCQUFDLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFBYztBQUFkO0FBQUEseUJBQWMsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBRmxHLEFBQ0UsQUFDRSxBQUFnRixBQUFjLEFBRWhHO0FBRmdHOzZCQUUvRixjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQyx5Q0FBTyxVQUFSLEFBQWlCLFFBQU8sVUFBeEIsTUFBaUMsT0FBakMsQUFBdUMsVUFBUyxXQUFoRCxBQUEwRCxRQUFPLFNBQVMsS0FBMUUsQUFBK0U7b0JBQS9FO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjtvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLDhCQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFKSixBQUNBLEFBRUUsQUFDRSxBQUlKO0FBSkk7NEJBSUosQUFBQyx5Q0FBTyxVQUFSLEFBQWlCLFFBQU8sVUFBeEIsTUFBaUMsT0FBakMsQUFBdUMsT0FBTSxXQUE3QyxBQUF1RCxRQUFPLFNBQVMsS0FBdkUsQUFBNEU7b0JBQTVFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjtvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLG9DQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFYSixBQVFBLEFBRUUsQUFDRSxBQUlKO0FBSkk7NEJBSUosQUFBQyx5Q0FBTyxVQUFSLEFBQWlCLFFBQU8sVUFBeEIsTUFBaUMsT0FBakMsQUFBdUMsVUFBUyxXQUFoRCxBQUEwRCxRQUFPLFNBQVMsS0FBMUUsQUFBK0U7b0JBQS9FO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjtvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLGtDQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFsQkosQUFlQSxBQUVFLEFBQ0UsQUFJSjtBQUpJOzRCQUlKLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLFVBQVIsQUFBaUIsUUFBTyxVQUF4QixNQUFpQyxPQUFqQyxBQUF1QyxTQUFRLFdBQS9DLEFBQXlEO29CQUF6RDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSw4QkFBQyxjQUFELHdCQUFBLEFBQVEsV0FBUSxRQUFoQjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBMUJOLEFBc0JBLEFBQ0UsQUFFRSxBQUNFLEFBS047QUFMTTs2QkFLTixBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLGdCQUFlLE1BQS9CLEFBQW9DLGNBQWEsU0FBakQ7b0JBQUE7c0JBckNOLEFBQ0UsQUFJRSxBQStCQSxBQUNFLEFBTVA7QUFOTzs7Ozs7O0EsQUEzRGUsQUFvRXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJDOi9hY20vcGFwZXJEQXBwLW1hc3Rlci9wYXBlckRBcHAtbWFzdGVyIn0=