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

var _fileinstance = require('../ethereum/fileinstance');

var _fileinstance2 = _interopRequireDefault(_fileinstance);

var _semanticUiReact = require('semantic-ui-react');

var _ipfs = require('../ipfs/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\acm\\paperDApp-master\\paperDApp-master\\components\\UploadForm.js';


var UploadForm = function (_Component) {
  (0, _inherits3.default)(UploadForm, _Component);

  function UploadForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UploadForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UploadForm.__proto__ || (0, _getPrototypeOf2.default)(UploadForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      file: null,
      loading: false,
      errorMessage: '',
      fileBuffer: null,
      fileHash: '',
      name: ''
    }, _this.onChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var file, reader;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = event.target.files[0];

                _this.setState({ file: file });
                reader = new window.FileReader();

                reader.readAsArrayBuffer(file);
                reader.onloadend = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                  var fileBuffer;
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return Buffer.from(reader.result);

                        case 2:
                          fileBuffer = _context.sent;

                          console.log(fileBuffer);
                          _this.setState({ fileBuffer: fileBuffer });

                        case 5:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2);
                }));

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onAdd = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                //this.setState({loadinga:true});
                _context3.next = 3;
                return _ipfs2.default.add(_this.state.fileBuffer, function (err, hashID) {
                  console.log(hashID);
                  _this.setState({ fileHash: hashID[0].hash });
                  console.log(_this.state.fileHash);
                });

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(), _this.onSubmit = function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
        var fileInstance, accounts;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.preventDefault();
                /*await ipfs.add(this.state.fileBuffer, (err, hashID) => {
                  console.log(hashID);
                  this.setState({ fileHash:hashID[0].hash });
                  console.log(this.state.fileHash);
                });*/
                fileInstance = (0, _fileinstance2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });
                _context4.prev = 3;
                _context4.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context4.sent;
                _context4.next = 9;
                return fileInstance.methods.addNewVersion(_this.state.fileHash, _this.state.name).send({
                  from: accounts[0]
                });

              case 9:
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4['catch'](3);

                _this.setState({ errorMessage: _context4.t0.message });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this2, [[3, 11]]);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UploadForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Your Name'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Your Name', value: this.state.name, onChange: function onChange(event) {
          _this3.setState({ name: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, 'Upload updated file'), _react2.default.createElement(_semanticUiReact.Input, {
        type: 'file',
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'blue', icon: true, labelPosition: 'left', onClick: this.onAdd, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'upload', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), 'Upload')), _react2.default.createElement(_semanticUiReact.Message, { error: true, heading: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'purple', icon: true, labelPosition: 'left', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'certificate', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), 'Update'));
    }
  }]);

  return UploadForm;
}(_react.Component);

exports.default = UploadForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFVwbG9hZEZvcm0uanMiXSwibmFtZXMiOlsicmVhY3QiLCJDb21wb25lbnQiLCJGaWxlSW5zdGFuY2UiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiSWNvbiIsImlwZnMiLCJ3ZWIzIiwiVXBsb2FkRm9ybSIsInN0YXRlIiwiZmlsZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJmaWxlQnVmZmVyIiwiZmlsZUhhc2giLCJuYW1lIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpbGVzIiwic2V0U3RhdGUiLCJyZWFkZXIiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWRlbmQiLCJCdWZmZXIiLCJmcm9tIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm9uQWRkIiwicHJldmVudERlZmF1bHQiLCJhZGQiLCJlcnIiLCJoYXNoSUQiLCJoYXNoIiwib25TdWJtaXQiLCJmaWxlSW5zdGFuY2UiLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFkZE5ld1ZlcnNpb24iLCJzZW5kIiwibWVzc2FnZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFRLEFBQUssQUFBTSxBQUFRLEFBQVE7O0FBQ25DLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBR1g7Ozs7Ozs7Ozs7Ozs7OztvTixBQUNKO1lBQU0sQUFDRyxBQUNQO2VBRkksQUFFTSxBQUNWO29CQUhJLEFBR1csQUFDZjtrQkFKSSxBQUlTLEFBQ2I7Z0JBTEksQUFLTyxBQUNYO1ksQUFOSSxBQU1FO0FBTkYsQUFDSixhLEFBUUY7MkZBQVcsa0JBQUEsQUFBTyxPQUFQO2tCQUFBO3dFQUFBO29CQUFB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Q0Esd0NBQUEsQUFBQztjQUFELEFBQ00sQUFDTDtrQkFBWSxLQUZiLEFBRWtCOztvQkFGbEI7c0JBSkYsQUFJRSxBQUlBO0FBSkE7QUFDQywwQkFHRCxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsT0FBakIsQUFBdUIsUUFBTyxNQUE5QixNQUFtQyxlQUFuQyxBQUFpRCxRQUFPLFNBQVMsS0FBakUsQUFBc0U7b0JBQXRFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFWTixBQUNFLEFBUUUsQUFLRiw0QkFBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxTQUFmLEFBQXVCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQWRGLEFBY0UsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixVQUFTLE1BQWhDLE1BQXFDLGVBQXJDLEFBQW1ELFFBQU8sU0FBVyxLQUFBLEFBQUssTUFBMUUsQUFBZ0Y7b0JBQWhGO3NCQUFBLEFBQXlGO0FBQXpGO3lCQUF5RixBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBekYsQUFBeUY7QUFBQTtVQWhCN0YsQUFDRSxBQWVFLEFBR0w7Ozs7O0FBR0gsQSxBQTdFeUI7O2tCQTZFekIsQUFBZSIsImZpbGUiOiJVcGxvYWRGb3JtLmpzIiwic291cmNlUm9vdCI6IkM6L2FjbS9wYXBlckRBcHAtbWFzdGVyL3BhcGVyREFwcC1tYXN0ZXIifQ==