"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var initialIssues = [];

var IssueTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueTable, _React$Component);

  function IssueTable() {
    _classCallCheck(this, IssueTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueTable).apply(this, arguments));
  }

  _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      var issueRows = this.props.issues.map(function (issue) {
        return React.createElement(IssueRow, {
          key: issue.id,
          issue: issue
        });
      });
      return React.createElement("table", {
        className: "bordered-table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
        className: "bordered-table"
      }, "Product Name"), React.createElement("th", {
        className: "bordered-table"
      }, "Price"), React.createElement("th", {
        className: "bordered-table"
      }, "Category"), React.createElement("th", {
        className: "bordered-table"
      }, "Image"))), React.createElement("tbody", null, issueRows));
    }
  }]);

  return IssueTable;
}(React.Component);

var IssueRow =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(IssueRow, _React$Component2);

  function IssueRow() {
    _classCallCheck(this, IssueRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueRow).apply(this, arguments));
  }

  _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      var issue = this.props.issue;
      return React.createElement("tr", null, React.createElement("td", {
        className: "bordered-table"
      }, issue.productName), React.createElement("td", {
        className: "bordered-table"
      }, '$' + issue.pricePerUnit), React.createElement("td", {
        className: "bordered-table"
      }, issue.category), React.createElement("td", {
        className: "bordered-table"
      }, issue.imageUrl));
    }
  }]);

  return IssueRow;
}(React.Component);

var IssueAdd =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(IssueAdd, _React$Component3);

  function IssueAdd() {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      var issue = {
        category: form.category.value,
        pricePerUnit: form.pricePerUnit.value.replace('$', ''),
        productName: form.productName.value,
        imageUrl: form.imageUrl.value
      };
      this.props.createIssue(issue);
      form.category.value = " ";
      form.pricePerUnit.value = "$";
      form.productName.value = "";
      form.imageUrl.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        id: "inventoryForm",
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, React.createElement("table", {
        className: "formTable"
      }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, "Category"), React.createElement("td", {
        className: "formTableData"
      }, "Price Per Unit")), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, React.createElement("select", {
        id: "categoryList",
        name: "category"
      }, React.createElement("option", {
        value: " "
      }), React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), React.createElement("option", {
        value: "Accessories"
      }, "Accessories"))), React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "pricePerUnit",
        defaultValue: "$"
      }))), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, "Product Name"), React.createElement("td", {
        className: "formTableData"
      }, "Image URL")), React.createElement("tr", null, React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "productName"
      })), React.createElement("td", {
        className: "formTableData"
      }, React.createElement("input", {
        type: "text",
        name: "imageUrl"
      }))))), React.createElement("button", {
        id: "addButton"
      }, "Add Product"));
    }
  }]);

  return IssueAdd;
}(React.Component);

var IssueList =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(IssueList, _React$Component4);

  function IssueList() {
    var _this2;

    _classCallCheck(this, IssueList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this));
    _this2.state = {
      issues: []
    };
    _this2.createIssue = _this2.createIssue.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(IssueList, [{
    key: "createIssue",
    value: function createIssue(issue) {
      issue.id = this.state.issues.length + 1;
      var newIssueList = this.state.issues.slice();
      newIssueList.push(issue);
      this.setState({
        issues: newIssueList
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setState({
          issues: initialIssues
        });
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "My Company Inventory"), React.createElement("div", {
        id: "tableHeader"
      }, "Showing all available products"), React.createElement("hr", {
        align: "left"
      }), React.createElement(IssueTable, {
        issues: this.state.issues
      }), React.createElement("div", {
        id: "fieldsHeader"
      }, "Add a new product to inventory"), React.createElement("hr", {
        align: "left"
      }), React.createElement(IssueAdd, {
        createIssue: this.createIssue
      }));
    }
  }]);

  return IssueList;
}(React.Component);

var element = React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));