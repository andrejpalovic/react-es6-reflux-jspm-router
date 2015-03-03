System.register([], function (_export) {
  var React, Home;
  return {
    setters: [],
    execute: function () {
      "use strict";

      React = require("react");
      Home = React.createClass({
        displayName: "Home",

        getInitialState: function getInitialState() {
          return {
            items: ["Browserify", "Babel", "Bootstrap", "Modernizr", "Jest"]
          };
        },

        render: function render() {
          return React.createElement(
            "div",
            { className: "hero-unit" },
            React.createElement(
              "h1",
              null,
              "'Allo, 'Allo!"
            ),
            React.createElement(
              "p",
              null,
              "This is a React component.",
              React.createElement("br", null),
              "You now also have:"
            ),
            React.createElement(
              "ul",
              null,
              this.state.items.map(this.renderItem)
            )
          );
        },

        renderItem: function renderItem(item, index) {
          return React.createElement(
            "li",
            { key: index },
            item
          );
        }
      });

      module.exports = Home;
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQUksS0FBSyxFQUVMLElBQUk7Ozs7OztBQUZKLFdBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBRXhCLFVBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDM0IsdUJBQWUsRUFBQSwyQkFBRztBQUNoQixpQkFBTztBQUNMLGlCQUFLLEVBQUUsQ0FDTCxZQUFZLEVBQ1osT0FBTyxFQUNQLFdBQVcsRUFDWCxXQUFXLEVBQ1gsTUFBTSxDQUNQO1dBQ0YsQ0FBQztTQUNIOztBQUVELGNBQU0sRUFBQSxrQkFBRztBQUNQLGlCQUNFOztjQUFLLFNBQVMsRUFBQyxXQUFXO1lBQ3hCOzs7O2FBQXNCO1lBQ3RCOzs7O2NBQTZCLCtCQUFLOzthQUNUO1lBQ3pCOzs7Y0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUFNO1dBQzVDLENBQ047U0FDSDs7QUFFRCxrQkFBVSxFQUFBLG9CQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDdEIsaUJBQU87O2NBQUksR0FBRyxFQUFFLEtBQUssQUFBQztZQUFFLElBQUk7V0FBTSxDQUFDO1NBQ3BDO09BQ0YsQ0FBQzs7QUFFRixZQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==