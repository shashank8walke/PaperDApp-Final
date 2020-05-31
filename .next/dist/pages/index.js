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

var _LayoutIndex = require('../components/LayoutIndex');

var _LayoutIndex2 = _interopRequireDefault(_LayoutIndex);

var _semanticUiReact = require('semantic-ui-react');

var _file = require('../ethereum/file');

var _file2 = _interopRequireDefault(_file);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _fileinstance = require('../ethereum/fileinstance');

var _fileinstance2 = _interopRequireDefault(_fileinstance);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\acm\\paperDApp-master\\paperDApp-master\\pages\\index.js?entry';


var PaperIndex = function (_Component) {
  (0, _inherits3.default)(PaperIndex, _Component);

  function PaperIndex() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PaperIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PaperIndex.__proto__ || (0, _getPrototypeOf2.default)(PaperIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      accountAdd: '',
      accountName: '',
      status: true,
      name: '',
      email: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 2;
                _context.next = 5;
                return _file2.default.methods.register(_this.state.name, _this.state.email).send({ from: _this.state.accountAdd });

              case 5:
                _routes.Router.pushRoute('/');
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 11:
                _this.setState({ loading: false });
                _this.setState({ status: true, accountName: name });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 8]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PaperIndex, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var tryAdd, statusA, i, iname, iadd;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                tryAdd = _context2.sent;

                this.setState({ accountAdd: tryAdd[0] });
                this.setState({ visible: false, visibility: true });
                _context2.next = 7;
                return _file2.default.methods.accountStatus(this.state.accountAdd).call();

              case 7:
                statusA = _context2.sent;

                this.setState({ status: statusA });
                _context2.next = 11;
                return _file2.default.methods.getUserNames().call();

              case 11:
                iname = _context2.sent;
                _context2.next = 14;
                return _file2.default.methods.getUserAddress().call();

              case 14:
                iadd = _context2.sent;

                if (this.state.status) {
                  for (i = 0; i < iadd.length; i++) {
                    if (iadd[i] == this.state.accountAdd) {
                      this.setState({ accountName: iname[i] });
                    }
                  }
                }

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this3 = this;

      var items = this.props.files.map(function (address, index) {
        return {
          color: 'violet',
          meta: 'File Name',
          description: 'File Hash : ' + address,
          extra: _react2.default.createElement(_routes.Link, { route: '/documents/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'blue', icon: true, labelPosition: 'left', __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'eye', __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          }), 'View File')),
          header: _this3.props.names[index],
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(_LayoutIndex2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('div', { style: this.state.status ? { display: 'none' } : {}, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { position: 'top center', color: 'orange', size: 'huge', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'file alternate outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), 'PaperDApp', _react2.default.createElement(_semanticUiReact.Label.Detail, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'paper plane outline', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'You are not registered please registered'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'User Id(Account Address)'), _react2.default.createElement(_semanticUiReact.Form.Input, {
        disabled: true,
        fluid: true,
        value: this.state.accountAdd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement(_semanticUiReact.Label, { basic: true, color: 'red', pointing: 'above', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'Dont change this...It\'s Your Unique Account Address!!!')), _react2.default.createElement(_semanticUiReact.Segment, { basic: true, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, 'Fill Details Below')), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, 'Your Name'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Your Name',
        value: this.state.name,
        onChange: function onChange(event) {
          _this4.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), _react2.default.createElement(_semanticUiReact.Label, { basic: true, color: 'red', pointing: 'above', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, 'Enter Your Name here..!!')), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, 'Your Email'), _react2.default.createElement(_semanticUiReact.Input, {
        placeholder: 'Your Email',
        value: this.state.email,
        onChange: function onChange(event) {
          _this4.setState({ email: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), _react2.default.createElement(_semanticUiReact.Label, { basic: true, color: 'red', pointing: 'above', __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, 'Enter Your Email Address here..!!')), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'red', icon: true, labelPosition: 'left', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add user', __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), 'Register!'))), _react2.default.createElement('div', { style: this.state.status ? {} : { display: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, 'All Documents ', _react2.default.createElement(_semanticUiReact.Label, { size: 'big', basic: true, color: 'red', pointing: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, ' Welcome... ', this.state.accountName, '!!', _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      })), ' '), _react2.default.createElement(_routes.Link, { route: '/documents/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { animated: 'fade', inverted: true, color: 'blue', icon: true, labelPosition: 'left', className: 'item', floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), 'Add Document'), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add', __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      })))), this.renderItems()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var files, i, names, n, fileInstance;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _file2.default.methods.getDeployedFiles().call();

              case 2:
                files = _context3.sent;
                names = [];
                i = 0;

              case 5:
                if (!(i < files.length)) {
                  _context3.next = 14;
                  break;
                }

                fileInstance = (0, _fileinstance2.default)(files[i]);
                _context3.next = 9;
                return fileInstance.methods.getFileName().call();

              case 9:
                n = _context3.sent;

                names.push(n);

              case 11:
                i++;
                _context3.next = 5;
                break;

              case 14:
                return _context3.abrupt('return', { files: files, names: names });

              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getInitialProps() {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return PaperIndex;
}(_react.Component);

exports.default = PaperIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJyZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dEluZGV4IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJGb3JtIiwiTWVzc2FnZSIsIklucHV0IiwiTGFiZWwiLCJEaXZpZGVyIiwiU2VnbWVudCIsImZpbGUiLCJMaW5rIiwiUm91dGVyIiwid2ViMyIsIkZpbGVJbnN0YW5jZSIsIkhlYWRlciIsIlBhcGVySW5kZXgiLCJzdGF0ZSIsImFjY291bnRBZGQiLCJhY2NvdW50TmFtZSIsInN0YXR1cyIsIm5hbWUiLCJlbWFpbCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJyZWdpc3RlciIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImV0aCIsImdldEFjY291bnRzIiwidHJ5QWRkIiwidmlzaWJsZSIsInZpc2liaWxpdHkiLCJhY2NvdW50U3RhdHVzIiwiY2FsbCIsInN0YXR1c0EiLCJnZXRVc2VyTmFtZXMiLCJpbmFtZSIsImdldFVzZXJBZGRyZXNzIiwiaWFkZCIsImkiLCJsZW5ndGgiLCJpdGVtcyIsInByb3BzIiwiZmlsZXMiLCJtYXAiLCJhZGRyZXNzIiwiaW5kZXgiLCJjb2xvciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsImV4dHJhIiwiaGVhZGVyIiwibmFtZXMiLCJmbHVpZCIsImRpc3BsYXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlckl0ZW1zIiwiZ2V0RGVwbG95ZWRGaWxlcyIsImZpbGVJbnN0YW5jZSIsImdldEZpbGVOYW1lIiwibiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVEsQUFBTSxBQUFRLEFBQU0sQUFBTSxBQUFTLEFBQU8sQUFB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REY7eUJBQ0UsQUFBQyx5Q0FBUSxVQUFULEFBQWtCLFFBQU8sVUFBekIsTUFBa0MsT0FBbEMsQUFBd0MsUUFBTyxNQUEvQyxNQUFvRCxlQUFwRCxBQUFrRSxRQUFPLFdBQXpFLEFBQW1GLFFBQU8sU0FBMUYsQUFBa0c7b0JBQWxHO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjtvQkFBQTtzQkFBQSxBQUF3QjtBQUF4Qjt5QkFBd0IsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQXhCLEFBQXdCO0FBQUE7VUFEMUIsQUFDRSxBQUNBLGlDQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFQUixBQUdFLEFBQ0UsQUFFRSxBQUNFLEFBSUw7QUFKSztrQkE5RFosQUFDRSxBQXNERSxBQVdHLEFBQUssQUFJYjs7Ozs7Ozs7Ozs7O3VCQXhJcUIsZUFBQSxBQUFLLFFBQUwsQUFBYSxtQixBQUFiLEFBQWdDOzttQkFBOUM7QSxrQ0FFRjtBLHdCQUVBLEEsQUFGTTtvQixBQUVKOzs7c0JBQUUsSUFBRSxNLEFBQU07OztBQUVSOztBLCtCQUFlLDRCQUFhLE0sQUFBYixBQUFhLEFBQU07O3VCQUM5QixhQUFBLEFBQWEsUUFBYixBQUFxQixjLEFBQXJCLEFBQW1DOzttQkFBN0M7QSw4QkFDQTs7c0JBQUEsQUFBTSxLQUFOLEFBQVc7O21CQUpVO0E7Ozs7O2tEQU1oQixFQUFDLE9BQUQsT0FBTyxPLEFBQVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQXRCYyxBQXVKekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovYWNtL3BhcGVyREFwcC1tYXN0ZXIvcGFwZXJEQXBwLW1hc3RlciJ9