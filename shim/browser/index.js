/**
 * Id generator for ClayDB
 * @module clay-id
 */

'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = require('./create');
var ClayId = require('./clay_id');

var lib = create({});

(0, _assign2.default)(lib, ClayId, {
  create: create,
  ClayId: ClayId
});

module.exports = lib;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInJlcXVpcmUiLCJDbGF5SWQiLCJsaWIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFVBQVIsQ0FBZjtBQUNBLElBQU1DLFNBQVNELFFBQVEsV0FBUixDQUFmOztBQUVBLElBQUlFLE1BQU1ILE9BQU8sRUFBUCxDQUFWOztBQUVBLHNCQUFjRyxHQUFkLEVBQW1CRCxNQUFuQixFQUEyQjtBQUN6QkYsZ0JBRHlCO0FBRXpCRTtBQUZ5QixDQUEzQjs7QUFLQUUsT0FBT0MsT0FBUCxHQUFpQkYsR0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJZCBnZW5lcmF0b3IgZm9yIENsYXlEQlxuICogQG1vZHVsZSBjbGF5LWlkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNyZWF0ZSA9IHJlcXVpcmUoJy4vY3JlYXRlJylcbmNvbnN0IENsYXlJZCA9IHJlcXVpcmUoJy4vY2xheV9pZCcpXG5cbmxldCBsaWIgPSBjcmVhdGUoe30pXG5cbk9iamVjdC5hc3NpZ24obGliLCBDbGF5SWQsIHtcbiAgY3JlYXRlLFxuICBDbGF5SWRcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gbGliXG4iXX0=