/**
 * Create a ClayId instance
 * @function create
 * @returns {ClayId}
 */
'use strict';

var ClayId = require('./clay_id');

/** @lends create */
function create() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(ClayId, [null].concat(args)))();
}

module.exports = create;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJDbGF5SWQiLCJyZXF1aXJlIiwiY3JlYXRlIiwiYXJncyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBOztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmOztBQUVBO0FBQ0EsU0FBU0MsTUFBVCxHQUEwQjtBQUFBLG9DQUFOQyxJQUFNO0FBQU5BLFFBQU07QUFBQTs7QUFDeEIsNENBQVdILE1BQVgsZ0JBQXFCRyxJQUFyQjtBQUNEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCSCxNQUFqQiIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGUgYSBDbGF5SWQgaW5zdGFuY2VcbiAqIEBmdW5jdGlvbiBjcmVhdGVcbiAqIEByZXR1cm5zIHtDbGF5SWR9XG4gKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBDbGF5SWQgPSByZXF1aXJlKCcuL2NsYXlfaWQnKVxuXG4vKiogQGxlbmRzIGNyZWF0ZSAqL1xuZnVuY3Rpb24gY3JlYXRlICguLi5hcmdzKSB7XG4gIHJldHVybiBuZXcgQ2xheUlkKC4uLmFyZ3MpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG4iXX0=