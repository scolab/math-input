'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('prop-types');
/**
 * An autogenerated component that renders the SQRT iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');

var Sqrt = function (_React$Component) {
    _inherits(Sqrt, _React$Component);

    function Sqrt() {
        _classCallCheck(this, Sqrt);

        return _possibleConstructorReturn(this, (Sqrt.__proto__ || Object.getPrototypeOf(Sqrt)).apply(this, arguments));
    }

    _createClass(Sqrt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { width: '48', height: '48', viewBox: '0 0 48 48' },
                React.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    React.createElement('path', { fill: 'none', d: 'M0 0h48v48H0z' }),
                    React.createElement('path', { stroke: this.props.color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M14 29l4 6 9-14h7' })
                )
            );
        }
    }]);

    return Sqrt;
}(React.Component);

Sqrt.propTypes = {
    color: PropTypes.string.isRequired
};


module.exports = Sqrt;