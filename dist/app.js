System.register(["react", "./layouts/shell", "./payment/payment", "./dashboard/dashboard", "react-router"], function (_export) {
   var React, Shell, Paymant, Dashboard, Router, Route, mountNode, routes;
   return {
      setters: [function (_react) {
         React = _react["default"];
      }, function (_layoutsShell) {
         Shell = _layoutsShell["default"];
      }, function (_paymentPayment) {
         Paymant = _paymentPayment["default"];
      }, function (_dashboardDashboard) {
         Dashboard = _dashboardDashboard["default"];
      }, function (_reactRouter) {
         Router = _reactRouter["default"];
      }],
      execute: function () {
         "use strict";

         Route = Router.Route;
         mountNode = document.getElementById("app");
         routes = React.createElement(
            Route,
            { handler: Shell },
            React.createElement(Route, { name: "Dashboard", path: "/", handler: Dashboard }),
            React.createElement(Route, { name: "Paymant", path: "/paymant", handler: Paymant })
         );

         Router.run(routes, function (Handler) {
            React.render(React.createElement(Handler, null), mountNode);
         });
      }
   };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO09BQ08sS0FBSyxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUNULE1BQU0sRUFDVCxLQUFLLEVBRUosU0FBUyxFQUVWLE1BQU07OztBQVRILGNBQUs7O0FBQ0wsY0FBSzs7QUFDTCxnQkFBTzs7QUFDUCxrQkFBUzs7QUFDVCxlQUFNOzs7OztBQUNULGNBQUssR0FBSSxNQUFNLENBQUMsS0FBSztBQUVwQixrQkFBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBRTNDLGVBQU0sR0FDUDtBQUFDLGlCQUFLO2NBQUMsT0FBTyxFQUFFLEtBQUssQUFBQztZQUNwQixvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRSxTQUFTLEFBQUMsR0FBRztZQUN2RCxvQkFBQyxLQUFLLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxPQUFPLEFBQUMsR0FBRztVQUNwRDs7QUFHWCxlQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLE9BQU8sRUFBRTtBQUNwQyxpQkFBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxPQUFPLE9BQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztVQUNyQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=