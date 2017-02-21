/**
 * Id generator
 * @class ClayId
 */
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = require('uuid');

/** @lends ClayId */

var ClayId = function () {
  function ClayId() {
    (0, _classCallCheck3.default)(this, ClayId);
  }

  (0, _createClass3.default)(ClayId, [{
    key: 'generate',

    /**
     * Generate a new id string
     * @returns {string}
     */
    value: function generate() {
      return uuid.v4();
    }
  }]);
  return ClayId;
}();

module.exports = ClayId;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXlfaWQuanMiXSwibmFtZXMiOlsidXVpZCIsInJlcXVpcmUiLCJDbGF5SWQiLCJ2NCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBSUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztBQUVBOztJQUNNQyxNOzs7Ozs7OztBQUNKOzs7OytCQUlZO0FBQ1YsYUFBT0YsS0FBS0csRUFBTCxFQUFQO0FBQ0Q7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJILE1BQWpCIiwiZmlsZSI6ImNsYXlfaWQuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJZCBnZW5lcmF0b3JcbiAqIEBjbGFzcyBDbGF5SWRcbiAqL1xuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkJylcblxuLyoqIEBsZW5kcyBDbGF5SWQgKi9cbmNsYXNzIENsYXlJZCB7XG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIG5ldyBpZCBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdlbmVyYXRlICgpIHtcbiAgICByZXR1cm4gdXVpZC52NCgpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDbGF5SWRcbiJdfQ==