System.register(["react", "react-router", "./header"], function (_export) {
  var React, Router, Header, Route, RouteHandler, Link, Shell;
  return {
    setters: [function (_react) {
      React = _react["default"];
    }, function (_reactRouter) {
      Router = _reactRouter["default"];
    }, function (_header) {
      Header = _header["default"];
    }],
    execute: function () {
      "use strict";

      Route = Router.Route;
      RouteHandler = Router.RouteHandler;
      Link = Router.Link;
      Shell = React.createClass({
        displayName: "Shell",

        render: function render() {
          return React.createElement(
            "div",
            null,
            React.createElement(Header, null),
            React.createElement(
              "div",
              { className: "container-fluid" },
              React.createElement(RouteHandler, null)
            )
          );
        }

      });

      _export("default", Shell);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvc2hlbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFPLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNQLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUczQixLQUFLOzs7QUFORixXQUFLOztBQUNMLFlBQU07O0FBQ04sWUFBTTs7Ozs7QUFDUCxXQUFLLEdBQXlCLE1BQU0sQ0FBcEMsS0FBSztBQUFFLGtCQUFZLEdBQVcsTUFBTSxDQUE3QixZQUFZO0FBQUUsVUFBSSxHQUFLLE1BQU0sQ0FBZixJQUFJO0FBRzNCLFdBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsY0FBTSxFQUFBLGtCQUFHO0FBQ1AsaUJBQ0M7OztZQUNDLG9CQUFDLE1BQU0sT0FBRTtZQUNSOztnQkFBSyxTQUFTLEVBQUMsaUJBQWlCO2NBQy9CLG9CQUFDLFlBQVksT0FBRTthQUNWO1dBQ0QsQ0FDTjtTQUNIOztPQUVILENBQUM7O3lCQUVhLEtBQUsiLCJmaWxlIjoibGF5b3V0cy9zaGVsbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9