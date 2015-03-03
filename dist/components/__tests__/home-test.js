System.register([], function (_export) {
  return {
    setters: [],
    execute: function () {
      "use strict";

      jest.dontMock("../home.js");

      describe("Home", function () {
        var React = require("react/addons");
        var TestUtils = React.addons.TestUtils;
        var Home = require("../home.js");
        var home = null;

        beforeEach(function () {
          home = TestUtils.renderIntoDocument(React.createElement(Home, null));
        });

        it("contains the word React", function () {
          expect(home.getDOMNode().textContent).toContain("React");
        });

        it("has a list of included items", function () {
          var items = TestUtils.scryRenderedDOMComponentsWithTag(home, "li");
          expect(items.length).toBeGreaterThan(0);
        });
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvX190ZXN0c19fL2hvbWUtdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxVQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUU1QixjQUFRLENBQUMsTUFBTSxFQUFFLFlBQVc7QUFDMUIsWUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLFlBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3ZDLFlBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqQyxZQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLGtCQUFVLENBQUMsWUFBVztBQUNwQixjQUFJLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDLG9CQUFDLElBQUksT0FBRSxDQUFDLENBQUM7U0FDOUMsQ0FBQyxDQUFDOztBQUVILFVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxZQUFXO0FBQ3ZDLGdCQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxRCxDQUFDLENBQUM7O0FBRUgsVUFBRSxDQUFDLDhCQUE4QixFQUFFLFlBQVc7QUFDNUMsY0FBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLGdDQUFnQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuRSxnQkFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekMsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvX190ZXN0c19fL2hvbWUtdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9