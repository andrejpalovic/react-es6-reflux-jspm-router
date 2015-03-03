System.register(["react"], function (_export) {
	var React, Header;
	return {
		setters: [function (_react) {
			React = _react["default"];
		}],
		execute: function () {
			"use strict";

			Header = React.createClass({
				displayName: "Header",

				render: function render() {
					return React.createElement(
						"nav",
						{ className: "navbar navbar-default", role: "navigation" },
						React.createElement(
							"div",
							{ className: "navbar-header" },
							React.createElement(
								"button",
								{ type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1" },
								React.createElement(
									"span",
									{ className: "sr-only" },
									"Toggle Navigation"
								),
								React.createElement("span", { className: "icon-bar" }),
								React.createElement("span", { className: "icon-bar" }),
								React.createElement("span", { className: "icon-bar" })
							),
							React.createElement(
								"a",
								{ className: "navbar-brand", href: "#" },
								React.createElement("i", { className: "fa fa-home" }),
								React.createElement("span", null)
							)
						),
						React.createElement(
							"div",
							{ className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
							React.createElement(
								"ul",
								{ className: "nav navbar-nav" },
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#/" },
										"Dashboard"
									)
								),
								React.createElement(
									"li",
									null,
									React.createElement(
										"a",
										{ href: "#/paymant" },
										"Payment"
									)
								)
							)
						)
					);
				}
			});

			_export("default", Header);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7S0FBTyxLQUFLLEVBRVIsTUFBTTs7O0FBRkgsUUFBSzs7Ozs7QUFFUixTQUFNLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzlCLFVBQU0sRUFBQSxrQkFBRTtBQUNQLFlBQ0M7O1FBQUssU0FBUyxFQUFDLHVCQUF1QixFQUFDLElBQUksRUFBQyxZQUFZO01BQ3BEOztTQUFLLFNBQVMsRUFBQyxlQUFlO09BQzVCOztVQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGVBQWUsRUFBQyxlQUFZLFVBQVUsRUFBQyxlQUFZLCtCQUErQjtRQUNoSDs7V0FBTSxTQUFTLEVBQUMsU0FBUzs7U0FBeUI7UUFDbEQsOEJBQU0sU0FBUyxFQUFDLFVBQVUsR0FBUTtRQUNsQyw4QkFBTSxTQUFTLEVBQUMsVUFBVSxHQUFRO1FBQ2xDLDhCQUFNLFNBQVMsRUFBQyxVQUFVLEdBQVE7UUFDM0I7T0FDVDs7VUFBRyxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxHQUFHO1FBQ2xDLDJCQUFHLFNBQVMsRUFBQyxZQUFZLEdBQUs7UUFDOUIsaUNBQWE7UUFDWDtPQUNBO01BQ0w7O1NBQUssU0FBUyxFQUFDLDBCQUEwQixFQUFDLEVBQUUsRUFBQyw4QkFBOEI7T0FDMUU7O1VBQUksU0FBUyxFQUFDLGdCQUFnQjtRQUM1Qjs7O1NBQUk7O1lBQUcsSUFBSSxFQUFDLElBQUk7O1VBQWM7U0FBSztRQUNyQzs7O1NBQUk7O1lBQUcsSUFBSSxFQUFDLFdBQVc7O1VBQVk7U0FBSztRQUNuQztPQUNEO01BQ0YsQ0FDTjtLQUNIO0lBQ0QsQ0FBQzs7c0JBQ2EsTUFBTSIsImZpbGUiOiJsYXlvdXRzL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9