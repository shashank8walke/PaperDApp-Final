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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _fileinstance = require('../../ethereum/fileinstance');

var _fileinstance2 = _interopRequireDefault(_fileinstance);

var _semanticUiReact = require('semantic-ui-react');

var _UploadForm = require('../../components/UploadForm');

var _UploadForm2 = _interopRequireDefault(_UploadForm);

var _fileSaver = require('file-saver');

var _ipfs = require('../../ipfs/ipfs');

var _ipfs2 = _interopRequireDefault(_ipfs);

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\acm\\paperDApp-master\\paperDApp-master\\pages\\documents\\show.js?entry';


var DocumentShow = function (_Component) {
  (0, _inherits3.default)(DocumentShow, _Component);

  function DocumentShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DocumentShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DocumentShow.__proto__ || (0, _getPrototypeOf2.default)(DocumentShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false,
      account: '',
      owner: '',
      receiver: '',
      add: '',
      nameR: '',
      loading: false,
      errorMessage: ''
    }, _this.onDownload = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var fileBuf, blob;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              /*const chunks = [];
              for await (const chunk of ipfs.cat(ipfsHash)) {
                chunks.push(chunk)
              }
              console.log(Buffer.concat(chunks).toString())*/
              _context.next = 3;
              return _ipfs2.default.cat(_this.props.fileHash);

            case 3:
              fileBuf = _context.sent;
              blob = new Blob([fileBuf]);

              try {
                (0, _fileSaver.saveAs)(blob, _this.props.fileName);
              } catch (e) {
                console.log(e);
              }

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onShare = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var fileInstance, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                fileInstance = (0, _fileinstance2.default)(_this.props.address);

                console.log(_this.props.address);
                console.log(_this.state.addR);
                console.log(_this.state.nameR);
                _this.setState({ loading: true, errorMessage: '' });
                _context2.prev = 6;
                _context2.next = 9;
                return _web2.default.eth.getAccounts();

              case 9:
                accounts = _context2.sent;
                _context2.next = 12;
                return fileInstance.methods.setReceiver(_this.state.addR, _this.state.nameR).send({
                  from: accounts[0]
                });

              case 12:
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](6);

                _this.setState({ errorMessage: _context2.t0.message });

              case 17:
                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[6, 14]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DocumentShow, [{
    key: 'componentDidMount',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var accounts;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context3.sent;

                this.setState({ owner: this.props.fileOwner, receiver: this.props.receiver[0] });
                this.setState({ account: accounts[0] });
                if (this.state.owner == this.state.account || this.state.receiver == this.state.account) {
                  this.setState({ visible: true });
                }

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _ref4.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Document Details'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Reveal, { animated: 'move right', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Reveal.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        color: 'red',
        header: this.props.fileName,
        extra: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, 'File Hash: ', this.props.fileHash, ' '),
        meta: 'File Name',
        description: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, _react2.default.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }), ' Created On: ', this.props.date),
        style: { overflowWrap: 'break-word' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement(_semanticUiReact.Card, {
        color: 'red',
        header: this.props.fileOwnerName,
        meta: 'Owner Name',
        extra: _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, 'Owner Address: ', this.props.fileOwner, ' '),
        style: { overflowWrap: 'break-word' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), _react2.default.createElement(_semanticUiReact.Reveal.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { color: 'red', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'red', icon: true, labelPosition: 'left', style: { marginTop: '50px', marginLeft: '80px' }, href: this.props.fileURL, download: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'eye', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), 'View File'))))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('div', { style: this.state.visible ? { display: 'none' } : {}, __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', basic: true, color: 'red', pointing: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), ' You cannot make changes to this file...!!')), _react2.default.createElement('div', { style: this.state.visible ? {} : { display: 'none' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'medium', basic: true, color: 'green', pointing: 'below', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, 'Make changes to this file here!!', _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      })), _react2.default.createElement(_UploadForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })))), _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '50px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'brown', icon: true, labelPosition: 'left', style: { marginRight: '10px' }, onClick: this.onDownload, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'download', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), 'Download File'), _react2.default.createElement(_routes.Link, { route: '/documents/' + this.props.address + '/versions', __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'brown', icon: true, labelPosition: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'truck', __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), 'Track Update History'))), _react2.default.createElement(_semanticUiReact.Segment, { style: this.state.account == this.state.owner ? {} : { display: 'none' }, basic: true, textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, 'To share file for editing purpose')), _react2.default.createElement(_semanticUiReact.Form, { style: this.state.account == this.state.owner ? {} : { display: 'none' }, onSubmit: this.onShare, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, 'Receiver Name'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Receiver Name', value: this.state.nameR, onChange: function onChange(event) {
          _this3.setState({ nameR: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, 'Receiver Address'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Receiver Address', value: this.state.addR, onChange: function onChange(event) {
          _this3.setState({ addR: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, heading: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'brown', icon: true, labelPosition: 'left', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'certificate', __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), 'Share File')), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
        var fileInstance, summary, receiver, address, fileName, fileHash, fileOwnerName, date, fileOwner;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                fileInstance = (0, _fileinstance2.default)(props.query.address);
                _context4.next = 3;
                return fileInstance.methods.getSummary().call();

              case 3:
                summary = _context4.sent;
                _context4.next = 6;
                return fileInstance.methods.getReceiver().call();

              case 6:
                receiver = _context4.sent;
                address = props.query.address;
                fileName = summary[0];
                fileHash = summary[1];
                fileOwnerName = summary[3];
                date = summary[2];
                fileOwner = summary[4];
                return _context4.abrupt('return', {
                  address: address,
                  fileName: fileName,
                  fileHash: fileHash,
                  date: date,
                  fileOwnerName: fileOwnerName,
                  fileURL: "https://ipfs.infura.io/ipfs/" + summary[1],
                  fileOwner: fileOwner,
                  receiver: receiver
                });

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getInitialProps(_x2) {
        return _ref5.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return DocumentShow;
}(_react.Component);

exports.default = DocumentShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkb2N1bWVudHNcXHNob3cuanMiXSwibmFtZXMiOlsicmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGaWxlSW5zdGFuY2UiLCJDYXJkIiwiUmV2ZWFsIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiR3JpZCIsIkljb24iLCJMYWJlbCIsIkZvcm0iLCJNZXNzYWdlIiwiSW5wdXQiLCJTZWdtZW50IiwiRGl2aWRlciIsIlVwbG9hZEZvcm0iLCJzYXZlQXMiLCJpcGZzIiwiTGluayIsIndlYjMiLCJEb2N1bWVudFNob3ciLCJzdGF0ZSIsInZpc2libGUiLCJhY2NvdW50Iiwib3duZXIiLCJyZWNlaXZlciIsImFkZCIsIm5hbWVSIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uRG93bmxvYWQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2F0IiwicHJvcHMiLCJmaWxlSGFzaCIsImZpbGVCdWYiLCJibG9iIiwiQmxvYiIsImZpbGVOYW1lIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvblNoYXJlIiwiZmlsZUluc3RhbmNlIiwiYWRkcmVzcyIsImFkZFIiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwic2V0UmVjZWl2ZXIiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJmaWxlT3duZXIiLCJkYXRlIiwib3ZlcmZsb3dXcmFwIiwiZmlsZU93bmVyTmFtZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJmaWxlVVJMIiwiZGlzcGxheSIsIm1hcmdpblJpZ2h0IiwidGFyZ2V0IiwidmFsdWUiLCJxdWVyeSIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsImdldFJlY2VpdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBUSxBQUFNLEFBQU8sQUFBTyxBQUFXLEFBQU0sQUFBTSxBQUFPLEFBQU0sQUFBUyxBQUFPLEFBQVM7O0FBQ3pGLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUzs7QUFDVCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUNKO2VBQVEsQUFDSSxBQUNWO2VBRk0sQUFFSSxBQUNWO2FBSE0sQUFHQyxBQUNQO2dCQUpNLEFBSUksQUFDVjtXQUxNLEFBS0YsQUFDSjthQU5NLEFBTUEsQUFDTjtlQVBNLEFBT0csQUFDVDtvQixBQVJNLEFBUU87QUFSUCxBQUNOLGEsQUF3Q0Ysc0ZBQWEsbUJBQUE7bUJBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQ1g7b0JBQUEsQUFBTSxBQUNOO0FBRlc7Ozs7OzhCQUFBO3FCQU9XLGVBQUEsQUFBSyxJQUFJLE1BQUEsQUFBSyxNQVB6QixBQU9XLEFBQW9COztpQkFBcEM7QUFQSyxpQ0FRTDtBQVJLLHFCQVFFLElBQUEsQUFBSSxLQUFLLENBUlgsQUFRRSxBQUFTLEFBQUMsQUFDdkI7O2tCQUFJLEFBQ0E7dUNBQUEsQUFBTyxNQUFLLE1BQUEsQUFBSyxNQUFqQixBQUF1QixBQUMxQjtBQUZELGdCQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1Y7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDYjtBQWJVOztpQkFBQTtpQkFBQTs4QkFBQTs7QUFBQTtrQkFBQTtBLGUsQUFrQmI7MkZBQVUsa0JBQUEsQUFBTSxPQUFOOzBCQUFBO3dFQUFBO29CQUFBOytDQUFBO21CQUNSO3NCQUFBLEFBQU0sQUFDQTtBQUZFLCtCQUVhLDRCQUFhLE1BQUEsQUFBSyxNQUYvQixBQUVhLEFBQXdCLEFBQzdDOzt3QkFBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCO3dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7d0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQUFqQixBQUF1QixBQUN2QjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQU50QixBQU1SLEFBQWMsQUFBNkI7aUNBTm5DO2lDQUFBO3VCQVFtQixjQUFBLEFBQUssSUFSeEIsQUFRbUIsQUFBUzs7bUJBQTFCO0FBUkYscUNBQUE7aUNBQUE7b0NBVUUsQUFBYSxRQUFiLEFBQXFCLFlBQVksTUFBQSxBQUFLLE1BQXRDLEFBQTRDLE1BQUssTUFBQSxBQUFLLE1BQXRELEFBQTRELE9BQTVELEFBQW1FO3dCQUNsRSxTQVhILEFBVUUsQUFBd0UsQUFDdkUsQUFBUztBQUQ4RCxBQUM1RSxpQkFESTs7bUJBVkY7aUNBQUE7QUFBQTs7bUJBQUE7aUNBQUE7a0RBY0o7O3NCQUFBLEFBQUssU0FBUyxFQUFDLGNBQWEsYUFkeEIsQUFjSixBQUFjLEFBQWtCOzttQkFFbEM7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FoQlQsQUFnQk4sQUFBYyxBQUFTOzttQkFoQmpCO21CQUFBO2lDQUFBOztBQUFBO2tDQUFBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkExQmUsY0FBQSxBQUFLLEksQUFBTCxBQUFTOzttQkFBMUI7QSxxQ0FDTjs7cUJBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxLQUFBLEFBQUssTUFBWixBQUFrQixXQUFVLFVBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUE5RCxBQUFjLEFBQXFDLEFBQW9CLEFBQ3ZFO3FCQUFBLEFBQUssU0FBUyxFQUFDLFNBQVEsU0FBdkIsQUFBYyxBQUFTLEFBQVMsQUFDaEM7b0JBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFPLEtBQUEsQUFBSyxNQUF4QixBQUE4QixXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFBVSxLQUFBLEFBQUssTUFBdEUsQUFBNEUsU0FBVSxBQUNwRjt1QkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFBUyxBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkF3Q0s7bUJBRU47OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHFDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLFVBQVIsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztlQUFELEFBQ1UsQUFDUjtnQkFBVyxLQUFBLEFBQUssTUFGbEIsQUFFd0IsQUFDdEI7K0JBQVMsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFNBQUEsRUFBa0Isb0JBQUEsQUFBSyxNQUF2QixBQUE2QixVQUh4QyxBQUdXLEFBQ1Q7Y0FKRixBQUlTLEFBQ1A7cUNBQWUsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsU0FBQTs7c0JBQUs7d0JBQUwsQUFBSztBQUFBO0FBQUEsWUFBbUIsc0JBQUEsQUFBSyxNQUw5QyxBQUtpQixBQUFtQyxBQUNsRDtlQUFRLEVBQUUsY0FOWixBQU1VLEFBQWdCOztvQkFOMUI7c0JBREYsQUFDRSxBQVFBO0FBUkE7QUFDRSwwQkFPRixBQUFDO2VBQUQsQUFDVSxBQUNSO2dCQUFVLEtBQUEsQUFBSyxNQUZqQixBQUV1QixBQUNyQjtjQUhGLEFBR1MsQUFDUDsrQkFBUyxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsU0FBQSxFQUFxQix3QkFBQSxBQUFLLE1BQTFCLEFBQWdDLFdBSjNDLEFBSVcsQUFDVDtlQUFRLEVBQUUsY0FMWixBQUtVLEFBQWdCOztvQkFMMUI7c0JBVkosQUFDRSxBQVNFLEFBUUY7QUFSRTtBQUNFLDJCQU9ILGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDRDQUFVLE9BQVgsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsT0FBakIsQUFBdUIsT0FBTSxNQUE3QixNQUFrQyxlQUFsQyxBQUFnRCxRQUFPLE9BQU8sRUFBQyxXQUFELEFBQVcsUUFBTyxZQUFoRixBQUE4RCxBQUE2QixVQUFTLE1BQU0sS0FBQSxBQUFLLE1BQS9HLEFBQXFILFNBQVMsVUFBOUg7b0JBQUE7c0JBQUEsQUFBdUk7QUFBdkk7eUJBQXVJLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUF2SSxBQUF1STtBQUFBO1VBdEJqSixBQUNFLEFBQ0UsQUFrQkUsQUFDRSxBQUNFLEFBS1Isa0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUEsU0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBVSxFQUFFLFNBQXZCLEFBQXFCLEFBQVcsV0FBNUMsQUFBdUQ7b0JBQXZEO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHdDQUFNLE1BQVAsQUFBWSxPQUFNLE9BQWxCLE1BQXdCLE9BQXhCLEFBQThCLE9BQU0sVUFBcEMsQUFBNkM7b0JBQTdDO3NCQUFBLEFBQW9EO0FBQXBEO3lCQUFvRCxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBcEQsQUFBb0Q7QUFBQTtVQUZ0RCxBQUNBLEFBQ0UsQUFFRixnRUFBQSxjQUFBLFNBQUssT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsS0FBSSxFQUFFLFNBQXZDLEFBQXFDLEFBQVc7b0JBQWhEO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLHdDQUFNLE1BQVAsQUFBWSxVQUFTLE9BQXJCLE1BQTJCLE9BQTNCLEFBQWlDLFNBQVEsVUFBekMsQUFBa0Q7b0JBQWxEO3NCQUFBO0FBQUE7U0FBMkYsb0RBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBRDNGLEFBQ0EsQUFBMkYsQUFDekY7QUFEeUY7MkJBQ3pGLEFBQUMsc0NBQVcsU0FBUyxLQUFBLEFBQUssTUFBMUIsQUFBZ0M7b0JBQWhDO3NCQW5DTixBQUVFLEFBMkJFLEFBSUEsQUFFRSxBQUlKO0FBSkk7NkJBSUosQUFBQyw0Q0FBVSxPQUFPLEVBQUMsV0FBbkIsQUFBa0IsQUFBVztvQkFBN0I7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixTQUFRLE1BQS9CLE1BQW9DLGVBQXBDLEFBQWtELFFBQU8sT0FBTyxFQUFDLGFBQWpFLEFBQWdFLEFBQWMsVUFBUyxTQUFTLEtBQWhHLEFBQXFHO29CQUFyRztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBREYsQUFDRTtBQUFBO1VBRkosQUFDRSxBQUlBLGtDQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE9BQWpCLEFBQXVCLFNBQVEsTUFBL0IsTUFBb0MsZUFBcEMsQUFBa0Q7b0JBQWxEO3NCQUFBLEFBQXlEO0FBQXpEO3lCQUF5RCxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBekQsQUFBeUQ7QUFBQTtVQTdDakUsQUF1Q0UsQUFLRSxBQUNJLEFBR04sMkNBQUEsQUFBQywwQ0FBUSxPQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBUyxLQUFBLEFBQUssTUFBMUIsQUFBZ0MsUUFBaEMsQUFBeUMsS0FBSyxFQUFFLFNBQWhFLEFBQThELEFBQVcsVUFBVSxPQUFuRixNQUF5RixXQUF6RixBQUFtRztvQkFBbkc7c0JBQUEsQUFDSTtBQURKO3lCQUNJLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQWpETixBQWdERSxBQUNJLEFBR0osdURBQUEsQUFBQyx1Q0FBSyxPQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBUyxLQUFBLEFBQUssTUFBMUIsQUFBZ0MsUUFBaEMsQUFBeUMsS0FBSyxFQUFFLFNBQTdELEFBQTJELEFBQVcsVUFBVSxVQUFVLEtBQTFGLEFBQStGLFNBQVMsT0FBUyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQXhILEFBQThIO29CQUE5SDtzQkFBQSxBQUNBO0FBREE7eUJBQ0MsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0NBQUEsQUFBQyx3Q0FBTSxhQUFQLEFBQW1CLGlCQUFnQixPQUFPLEtBQUEsQUFBSyxNQUEvQyxBQUFxRCxPQUFPLFVBQVUsa0JBQUEsQUFBQyxPQUFVLEFBQUM7aUJBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBNUIsQUFBYyxBQUFxQixBQUFRO0FBQTdIO29CQUFBO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSxxQ0FBQSxBQUFDLHdDQUFNLGFBQVAsQUFBbUIsb0JBQW1CLE9BQU8sS0FBQSxBQUFLLE1BQWxELEFBQXdELE1BQU0sVUFBVSxrQkFBQSxBQUFDLE9BQVUsQUFBQztpQkFBQSxBQUFLLFNBQVMsRUFBQyxNQUFNLE1BQUEsQUFBTSxPQUEzQixBQUFjLEFBQW9CLEFBQVE7QUFBOUg7b0JBQUE7c0JBTEYsQUFDQSxBQUlFLEFBRUY7QUFGRTsyQkFFRixBQUFDLDBDQUFRLE9BQVQsTUFBZSxTQUFmLEFBQXVCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQVBBLEFBT0EsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixTQUFRLE1BQS9CLE1BQW9DLGVBQXBDLEFBQWtELFFBQU8sU0FBVyxLQUFBLEFBQUssTUFBekUsQUFBK0U7b0JBQS9FO3NCQUFBLEFBQXdGO0FBQXhGO3lCQUF3RixBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBeEYsQUFBd0Y7QUFBQTtVQTVEMUYsQUFvREUsQUFRQSxBQUVBOztvQkFBQTtzQkE5REYsQUE4REUsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQWhFSixBQUNFLEFBK0RFLEFBSUw7QUFKSztBQUFBOzs7Ozs2RyxBQXRJdUI7Ozs7O21CQUNyQjtBLCtCQUFlLDRCQUFhLE1BQUEsQUFBTSxNLEFBQW5CLEFBQXlCOzt1QkFFeEIsYUFBQSxBQUFhLFFBQWIsQUFBcUIsYSxBQUFyQixBQUFrQzs7bUJBQWxEO0E7O3VCQUNpQixhQUFBLEFBQWEsUUFBYixBQUFxQixjLEFBQXJCLEFBQW1DOzttQkFBcEQ7QSxxQ0FDQTtBLDBCQUFVLE1BQUEsQUFBTSxNLEFBQU0sQUFDdEI7QSwyQkFBVyxRLEFBQUEsQUFBUSxBQUNuQjtBLDJCQUFXLFFBQ1gsQSxBQURXLEFBQVE7QSxnQ0FDSCxRLEFBQUEsQUFBUSxBQUN4QjtBLHVCQUFPLFEsQUFBQSxBQUFRLEFBQ2Y7QSw0QkFBWSxRLEFBQUEsQUFBUTs7MkJBQ25CLEFBRUw7NEJBRkssQUFHTDs0QkFISyxBQUlMO3dCQUpLLEFBS0w7aUNBTEssQUFNTDsyQkFBUyxpQ0FBK0IsUUFObkMsQUFNbUMsQUFBUSxBQUNoRDs2QkFQSyxBQVFMOzRCLEFBUks7QUFBQSxBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUF2QnFCLEFBd0ozQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L2FjbS9wYXBlckRBcHAtbWFzdGVyL3BhcGVyREFwcC1tYXN0ZXIifQ==