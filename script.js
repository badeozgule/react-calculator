function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const buttonList = [{
  "key": "C",
  "name": "clear",
  "type": "function",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 67,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 46,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 12,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "±",
  "name": "plus-minus",
  "type": "operation",
  "fontAwesome": "fa-plus-minus",
  "keyCodes": [{
    "keyCode": 187,
    "shiftKey": true,
    "altKey": true
  }]
}, {
  "key": "%",
  "name": "percent",
  "type": "operation",
  "fontAwesome": "fa-percent",
  "keyCodes": [{
    "keyCode": 53,
    "shiftKey": true,
    "altKey": false
  }]
}, {
  "key": "/",
  "name": "divide",
  "type": "operation",
  "fontAwesome": "fa-divide",
  "keyCodes": [{
    "keyCode": 111,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 191,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 220,
    "shiftKey": true,
    "altKey": false
  }]
}, {
  "key": "7",
  "name": "seven",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 55,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 103,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "8",
  "name": "eight",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 56,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 104,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "9",
  "name": "nine",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 57,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 105,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "x",
  "name": "multiply",
  "type": "operation",
  "fontAwesome": "fa-xmark",
  "keyCodes": [{
    "keyCode": 106,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 88,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 56,
    "shiftKey": true,
    "altKey": false
  }]
}, {
  "key": "4",
  "name": "four",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 52,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 100,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "5",
  "name": "five",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 53,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 101,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "6",
  "name": "six",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 54,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 102,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "-",
  "name": "subtract",
  "type": "operation",
  "fontAwesome": "fa-minus",
  "keyCodes": [{
    "keyCode": 109,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 189,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 189,
    "shiftKey": true,
    "altKey": false
  }]
}, {
  "key": "1",
  "name": "one",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 49,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 97,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "2",
  "name": "two",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 50,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 98,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "3",
  "name": "three",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 51,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 99,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "+",
  "name": "add",
  "type": "operation",
  "fontAwesome": "fa-plus",
  "keyCodes": [{
    "keyCode": 107,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 187,
    "shiftKey": true,
    "altKey": false
  }]
}, {
  "key": "0",
  "name": "zero",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 48,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 96,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 45,
    "shiftKey": true,
    "altKey": true
  }]
}, {
  "key": ".",
  "name": "decimal",
  "type": "number",
  "fontAwesome": "",
  "keyCodes": [{
    "keyCode": 190,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 110,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 188,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 44,
    "shiftKey": false,
    "altKey": false
  }]
}, {
  "key": "=",
  "name": "equals",
  "type": "operation",
  "fontAwesome": "fa-equals",
  "keyCodes": [{
    "keyCode": 13,
    "shiftKey": false,
    "altKey": false
  }, {
    "keyCode": 187,
    "shiftKey": false,
    "altKey": false
  }]
}];
let error = new Audio("https://cdn.freesound.org/previews/638/638640_433684-lq.mp3");
let click = new Audio("https://cdn.freesound.org/previews/670/670268_12672694-lq.mp3");
let del = new Audio("https://cdn.freesound.org/previews/268/268822_4486188-lq.mp3");
const classVal = (name, type) => {
  return name === "clear" ? "btn-primary" : name === "equals" ? "btn-secondary" : "btn-" + type;
};
class GithubCorner extends React.Component {
  render() {
    const {
      url = '#'
    } = this.props;
    return /*#__PURE__*/React.createElement("a", {
      href: url,
      target: "_blank",
      rel: "noreferrer noopener",
      className: "github-corner",
      "aria-label": "View source on GitHub"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "80",
      height: "80",
      viewBox: "0 0 250 250",
      ariaHidden: "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
      fill: "currentColor",
      style: {
        transformOrigin: "130px 106px"
      },
      class: "octo-arm"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
      fill: "currentColor",
      class: "octo-body"
    })));
  }
}
class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: null
    };
    this.panelRef = React.createRef();
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel() {
    if (this.state.maxHeight) {
      this.setState({
        maxHeight: null
      });
    } else {
      const panelHeight = this.panelRef.current.clientHeight;
      const contentHeight = this.panelRef.current.scrollHeight;
      const newMaxHeight = `${panelHeight + contentHeight}px`;
      this.setState({
        maxHeight: newMaxHeight
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isDialogOpen !== this.props.isDialogOpen) {
      if (!this.props.isDialogOpen) {
        this.setState({
          maxHeight: null
        });
      }
    }
  }
  render() {
    const {
      title,
      result,
      math,
      desc
    } = this.props;
    const isAccordionOpen = this.state.maxHeight ? true : false;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: this.state.maxHeight
      },
      className: isAccordionOpen ? "accordion open" : "accordion"
    }, /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: this.togglePanel
    }, /*#__PURE__*/React.createElement("div", {
      className: "top"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("span", null, "\u2003", result)), /*#__PURE__*/React.createElement("div", {
      className: "icon"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-minus"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-plus"
    }))), /*#__PURE__*/React.createElement("div", {
      ref: this.panelRef,
      className: "panel"
    }, math, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), desc, " ", /*#__PURE__*/React.createElement("b", null, result, "."))));
  }
}
class Dialog extends React.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "handleDialogCallback", () => {
      this.props.handleDialogCallback(false);
    });
    this.state = {};
  }
  render() {
    return /*#__PURE__*/React.createElement("dialog", {
      open: this.props.mode
    }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("h3", null, "Calculator ", /*#__PURE__*/React.createElement("span", null, "Input Logic")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("b", null, "Immediate execution logic"), " is a way of processing data in real-time. This means that the results are calculated according to the order of the entries."), /*#__PURE__*/React.createElement("p", null, "On the other hand, the ", /*#__PURE__*/React.createElement("b", null, "formula/expression logic"), " will follow the order of operations and calculate the expression. This means that multiplication and division are evaluated before addition and subtraction."), /*#__PURE__*/React.createElement("p", null, "In short, formula logic observes the order of operation precedence, whereas immediate execution logic does not."), /*#__PURE__*/React.createElement("div", {
      class: "example"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Example:"), "\u20038 - 2 * 3 + 5 / 5"), /*#__PURE__*/React.createElement(AccordionItem, {
      isDialogOpen: this.props.mode,
      title: "Immediate execution logic:",
      result: "4.6",
      math: "8 - 2 * 3 + 5 / 5 = 4.6",
      desc: "It perform the operations from left to right, ignoring the order of operations. First, we subtract 2 from 8 to get 6. Next, we multiply 6 by 3 to get 18. Then, we add 5 to 18 to get 23. Finally, we divide 23 by 5 to get"
    }), /*#__PURE__*/React.createElement(AccordionItem, {
      isDialogOpen: this.props.mode,
      title: "Fomula/expression logic:",
      result: "3",
      math: "8 - (2 * 3) + (5 / 5) = 3",
      desc: "We would follow the order of operations. We would first perform the multiplication of 2 and 3 to get 6, and then subtract 6 from 8 to get 2. Next, we would perform the division of 5 by 5 to get 1, and add 1 to 2 to get 3. Therefore, the result using formula/expression logic would be"
    }))), /*#__PURE__*/React.createElement("button", {
      class: "btn-primary",
      onClick: this.handleDialogCallback
    }, "Done")));
  }
}
class Screen extends React.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "convertToArrayItem", item => {
      let holder = "";
      let display = "";
      let splitFormula = [];
      item.split("").map((char, index) => {
        if (char >= '0' && char <= '9' || char === ".") {
          if (item.charAt(index - 1) === "-" && (item.charAt(index - 2) === "/" || item.charAt(index - 2) === "x")) {
            splitFormula.pop();
            holder += "-";
          }
          holder += char;
          if (index === item.length - 1) {
            if (char === "." || char === "0") {
              splitFormula = [...splitFormula, holder];
            } else {
              splitFormula = [...splitFormula, parseFloat(holder)];
            }
          }
        } else {
          if (holder === "" && char === "-") {
            splitFormula = [...splitFormula, char];
          } else {
            splitFormula = [...splitFormula, parseFloat(holder), char];
            holder = "";
          }
        }
      });
      this.setState({
        arrayContainer: splitFormula
      }, () => {
        // this.props.runCalculation ? this.outputValue() : null;
        // this.outputValue();
      });
    });
    _defineProperty(this, "calculateFormulaLogic", () => {
      let val = this.props.value;
      let formula = val.replace(/x/g, "*");
      if (!(formula.slice(-1) >= "0" && formula.slice(-1) <= "9")) {
        formula = formula.slice(0, val.length - 1);
      }
      if (!this.state.arrayContainer.length || this.state.arrayContainer.length === 1 && (this.state.arrayContainer.toString().charAt(0) === "0" || this.state.arrayContainer.toString().charAt(0) === 0)) {
        this.setState({
          result: parseFloat(eval(formula), 10)
        }, () => {
          this.props.handleCalculationResult(this.state.result);
        });
      } else if (!(this.props.value.indexOf("x") === -1 && this.props.value.indexOf("/") === -1 && this.props.value.indexOf("-") === -1 && this.props.value.indexOf("+") === -1)) {
        this.setState({
          result: parseFloat(eval(formula), 10),
          arrayContainer: [...this.state.arrayContainer, "=", parseFloat(eval(formula), 10)]
        }, () => {
          this.props.handleCalculationResult(this.state.result);
        });
      } else {
        this.setState({
          result: parseFloat(eval(formula), 10)
        }, () => {
          this.props.handleCalculationResult(this.state.result);
        });
      }
    });
    _defineProperty(this, "calculateImmediateExecutionLogic", () => {
      let holder = "";
      let arr = [];

      //     alert("1236");
      //     // let val = this.props.value;

      //     if (this.state.arrayContainer.indexOf("=") >= -1) {

      //       this.setState({
      //         arrayContainer: this.state.arrayContainer.slice(0, -2),
      //       });

      //       // arr = this.state.arrayContainer.slice(this.state.arrayContainer.length - 2);
      //       // this.converToArrayItem(val);
      //     }

      this.state.arrayContainer.map((item, i) => {
        if (typeof item === "string") {
          if (item === "x") {
            holder = holder + "*";
          } else {
            holder = holder + item;
          }
        } else {
          holder = parseFloat(eval(holder + item), 10);
        }
      });
      if (!this.state.arrayContainer.length || this.state.arrayContainer.length === 1 && (this.state.arrayContainer.toString().charAt(0) === "0" || this.state.arrayContainer.toString().charAt(0) === 0)) {
        this.setState({
          result: holder
        }, () => {
          this.props.handleCalculationResult(this.state.result);
        });
      } else if (!(this.props.value.indexOf("x") === -1 && this.props.value.indexOf("/") === -1 && this.props.value.indexOf("-") === -1 && this.props.value.indexOf("+") === -1)) {
        this.setState({
          result: holder,
          arrayContainer: [...this.state.arrayContainer, "=", holder]
        }, () => {
          this.props.handleCalculationResult(this.state.result);
        });
      }
    });
    _defineProperty(this, "detailedScreenStyle", () => {
      let holder = "";

      // if (this.props.runCalculation) {
      //   this.setState({ arrayContainer: [...this.state.arrayContainer, "=" , this.state.result]});
      // } 

      return /*#__PURE__*/React.createElement(React.Fragment, null, this.state.arrayContainer.map((item, i) => typeof item === "string" ? /*#__PURE__*/React.createElement("span", null, " ", item, " ") : item));
    });
    _defineProperty(this, "outputValue", () => {
      // this.setState({arrayContainer: [...this.state.arrayContainer, "="]}, ()=> {
      if (this.props.logic === "Formula Logic") {
        this.calculateFormulaLogic();
      } else {
        this.calculateImmediateExecutionLogic();
      }
      // });
    });
    this.state = {
      // item: "3+5x6/-26/4",
      item: this.props.value,
      arrayContainer: [],
      result: "0"
    };
  }
  componentDidMount() {
    // this.convertToArrayItem(this.state.item);
    this.convertToArrayItem(this.props.value);
  }
  componentDidUpdate(prevProps) {
    // if (prevProps.logic !== this.props.logic || prevProps.value !== this.props.value) {
    if (prevProps.logic !== this.props.logic) {
      if (this.state.arrayContainer.indexOf("=") > -1) {
        console.log("yes1");
        console.log(this.state.arrayContainer);
        this.setState({
          arrayContainer: this.state.arrayContainer.slice(0, -2)
        }, () => {
          this.outputValue();
          console.log(this.state.arrayContainer);
        });
      } else {
        console.log("no");
      }
    }
    if (prevProps.value !== this.props.value) {
      this.convertToArrayItem(this.props.value);
    }
    if (prevProps.runCalculation !== this.props.runCalculation) {
      this.props.runCalculation ? this.outputValue() : null;
    }
    if (this.props.calculationResult === null && prevProps.calculationResult !== this.props.calculationResult && prevProps.value !== "0" && this.props.value === "0" && this.props.delKeyPressed) {
      this.setState({
        result: "0"
      });
    }
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "screen"
    }, /*#__PURE__*/React.createElement("div", {
      className: "detail"
    }, this.detailedScreenStyle()), /*#__PURE__*/React.createElement("div", {
      id: "display",
      className: "result"
    }, this.props.runCalculation ? this.state.result : this.state.arrayContainer.slice(-1), /*#__PURE__*/React.createElement("i", {
      className: this.props.delKeyPressed ? "fa-solid fa-delete-left" : "fa-solid"
    })), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      value: this.props.value
    }));
  }
}
class Button extends React.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "buttonTypes", props => {
      if (this.props.icon !== false) {
        return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
          className: `fa-solid ${this.props.icon}`
        }), /*#__PURE__*/React.createElement("var", null, this.props.buttonKey));
      } else {
        return /*#__PURE__*/React.createElement("span", null, this.props.buttonKey);
      }
    });
    _defineProperty(this, "buttonPressed", event => {
      // const pressedButton = this.props.pressedButton;
      const pressedButton = this.props.calculationResult !== null ? this.props.calculationResult.toString() : this.props.pressedButton;
      const value = this.props.buttonKey;
      const type = this.props.type;
      let result = "";
      let sound = "";

      //     if (this.props.calculationResult !== null) {
      //       this.props.handleCalculationResult(null); ///////////
      //     }

      if (value === "=") {
        if (pressedButton.slice(-1) === "x" || pressedButton.slice(-1) === "/" || pressedButton.slice(-1) === "+" || pressedButton.slice(-1) === "-") {
          result = pressedButton;
          sound = "error";
        } else if (!(pressedButton.indexOf("x") === -1 & pressedButton.indexOf("/") === -1 && pressedButton.indexOf("-") === -1 && pressedButton.indexOf("+") === -1)) {
          result = pressedButton;
          sound = "click";
          this.props.handleRunCalculation(true);
        } else {
          result = pressedButton;
          sound = "error";
        }
      } else {
        this.props.handleCalculationResult(null);
        if (value === "C") {
          result = "0";
          sound = "click";
        } else if (pressedButton === "0" && (value === "±" || value === "%" || value === "/" || value === "x" || value === "-" || value === "+" || value === "=")) {
          result = "0";
          sound = "error";
        } else if (pressedButton === "0" && value === ".") {
          result = "0.";
          sound = "click";
        } else if (pressedButton === "0") {
          result = value;
          sound = "click";
        } else if (value === "±") {
          const operations = ["/", "-", "+", "x"];
          let latestOperation = null;
          let latestOperationIndex = -1;
          for (const operation of operations) {
            const index = pressedButton.lastIndexOf(operation);
            if (index > latestOperationIndex) {
              latestOperationIndex = index;
              latestOperation = operation;
            }
          }
          if (latestOperation === "-") {
            if (pressedButton.charAt(latestOperationIndex - 1) === "/" || pressedButton.charAt(latestOperationIndex - 1) === "x") {
              result = pressedButton.slice(0, latestOperationIndex) + pressedButton.slice(latestOperationIndex + 1, pressedButton.length);
              sound = "click";
            } else if (pressedButton.charAt(latestOperationIndex - 1) >= "0") {
              result = pressedButton.slice(0, latestOperationIndex) + "+" + pressedButton.slice(latestOperationIndex + 1, pressedButton.length);
              sound = "click";
            } else {
              result = pressedButton.slice(0, latestOperationIndex) + pressedButton.slice(latestOperationIndex + 1, pressedButton.length);
              sound = "click";
            }
          } else if (latestOperation === "+") {
            result = pressedButton.slice(0, latestOperationIndex) + "-" + pressedButton.slice(latestOperationIndex + 1, pressedButton.length);
            sound = "click";
          } else {
            result = pressedButton.slice(0, latestOperationIndex + 1) + "-" + pressedButton.slice(latestOperationIndex + 1, pressedButton.length);
            sound = "click";
          }
        } else if (value === "%") {
          if (pressedButton.slice(-1) === "x" || pressedButton.slice(-1) === "/" || pressedButton.slice(-1) === "+" || pressedButton.slice(-1) === "-") {
            result = pressedButton;
            sound = "error";

            // result = pressedButton.slice(0, pressedButton.length - 1);
            // sound = "del";
          } else if ((pressedButton.match(/\//g) || []).length + (pressedButton.match(/x/g) || []).length + (pressedButton.match(/\-/g) || []).length + (pressedButton.match(/\+/g) || []).length > 1) {
            result = pressedButton;
            sound = "error";
          } else if (pressedButton.slice(-1) >= "0" && (pressedButton.match(/\//g) || []).length + (pressedButton.match(/x/g) || []).length + (pressedButton.match(/\-/g) || []).length + (pressedButton.match(/\+/g) || []).length >= 1) {
            result = pressedButton;
            sound = "error";
          } else {
            result = (parseFloat(eval(pressedButton), 10) / 100).toString();
            sound = "click";
          }
        } else if ((pressedButton.lastIndexOf("x") > pressedButton.lastIndexOf(".") || pressedButton.lastIndexOf("/") > pressedButton.lastIndexOf(".") || pressedButton.lastIndexOf("-") > pressedButton.lastIndexOf(".") || pressedButton.lastIndexOf("+") > pressedButton.lastIndexOf(".")) && pressedButton.slice(-1) >= "0" && pressedButton.slice(-1) <= "9" && value === ".") {
          result = pressedButton + value;
          sound = "click"; //bir tanesi bu
        } else if (value === "." && pressedButton.indexOf(".") > -1) {
          result = pressedButton;
          sound = "error";
        } else if (pressedButton.slice(-1) === "." && (value === "/" || value === "x" || value === "-" || value === "+")) {
          result = pressedButton.slice(0, pressedButton.length - 1) + value;
          sound = "click";
        } else if ((pressedButton.slice(-1) === "x" || pressedButton.slice(-1) === "/" || pressedButton.slice(-1) === "+" || pressedButton.slice(-1) === "-") && value === ".") {
          result = pressedButton.slice(0, pressedButton.length - 1) + value;
          sound = "click";
        } else if (pressedButton.slice(-1) === "/" && value === "/" || pressedButton.slice(-1) === "x" && value === "x" || pressedButton.slice(-1) === "-" && value === "-" || pressedButton.slice(-1) === "+" && value === "+") {
          result = pressedButton;
          sound = "error";
        } else if ((value === "x" || value === "/") && (pressedButton.slice(-1) === "-" || pressedButton.slice(-1) === "+") && (pressedButton.charAt(pressedButton.length - 2) === "/" || pressedButton.charAt(pressedButton.length - 2) === "x")) {
          result = pressedButton.slice(0, pressedButton.length - 2) + value;
          sound = "click";
        } else if (value === "+" && pressedButton.slice(-1) === "-" && (pressedButton.charAt(pressedButton.length - 2) === "/" || pressedButton.charAt(pressedButton.length - 2) === "x")) {
          result = pressedButton.slice(0, pressedButton.length - 2) + value;
          sound = "click";
          // result = pressedButton.slice(0, pressedButton.length - 1);
          // sound = "del";
        } else if (value === "-" && (pressedButton.slice(-1) === "/" || pressedButton.slice(-1) === "x")) {
          result = pressedButton + value;
          sound = "click";
        } else if (type === "operation" && (pressedButton.slice(-1) === "/" || pressedButton.slice(-1) === "x" || pressedButton.slice(-1) === "+" || pressedButton.slice(-1) === "-")) {
          result = pressedButton.slice(0, pressedButton.length - 1) + value;
          sound = "click";
        } else if ((pressedButton.charAt(pressedButton.length - 2) === "-" || pressedButton.charAt(pressedButton.length - 2) === "+" || pressedButton.charAt(pressedButton.length - 2) === "x" || pressedButton.charAt(pressedButton.length - 2) === "/") && pressedButton.slice(-1) === "0" && type === "number") {
          result = pressedButton.slice(0, pressedButton.length - 1) + value;
          sound = "click";
        } else {
          result = pressedButton + value;
          sound = "click";
        }
        this.props.handleRunCalculation(false);
      }
      this.setState({
        inputValue: result
      }, () => {
        this.props.parentCallback(this.state.inputValue);
        if (sound === "click") {
          click.currentTime = 0;
          click.play();
        } else if (sound === "del") {
          del.currentTime = 0;
          del.play();
        } else if (sound === "error") {
          error.currentTime = 0;
          error.play();
        }
        event.preventDefault();
      });
    });
    this.state = {
      inputValue: '',
      lastResult: null
    };
  }
  render() {
    return /*#__PURE__*/React.createElement("button", {
      key: this.props.id,
      onClick: this.buttonPressed,
      className: classVal(this.props.id, this.props.type),
      id: this.props.id,
      ref: element => this.refs[this.props.innerRef] = element,
      value: this.props.buttonKey
    }, this.buttonTypes());
  }
}
class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "container"
    }, buttonList.map((i, index) => /*#__PURE__*/React.createElement(Button, {
      parentCallback: this.props.parentCallback,
      pressedButton: this.props.pressedButton,
      handleKeyPress: this.props.handleKeyPress,
      buttonKey: i.key,
      id: i.name,
      type: i.type,
      icon: !!i.fontAwesome ? i.fontAwesome : false,
      innerRef: i.name,
      handleRunCalculation: this.props.handleRunCalculation,
      calculationResult: this.props.calculationResult,
      handleCalculationResult: this.props.handleCalculationResult
    })));
  }
}
class LogicSelector extends React.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "toggleButton", () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    });
    _defineProperty(this, "onValueChange", event => {
      this.setState({
        selectedLogic: event.target.value
      }, () => {
        this.props.handleLogicCallback(this.state.selectedLogic);
      });
    });
    _defineProperty(this, "soundSwitch", () => {
      this.setState({
        isSoundOn: !this.state.isSoundOn
      }, () => {
        this.state.isSoundOn ? del.play() : null;
      });
    });
    this.state = {
      isOpen: false,
      selectedLogic: "Formula Logic",
      isSoundOn: true
    };
  }
  render() {
    click.volume = this.state.isSoundOn ? 0.8 : 0;
    del.volume = this.state.isSoundOn ? 0.6 : 0;
    error.volume = this.state.isSoundOn ? 0.35 : 0;
    return /*#__PURE__*/React.createElement("section", {
      className: "bottom-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: this.state.isOpen ? "list open" : "list"
    }, /*#__PURE__*/React.createElement("div", {
      className: "list-items"
    }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "logic",
      value: "Immediate Execution",
      checked: this.state.selectedLogic === "Immediate Execution",
      onChange: this.onValueChange
    }), /*#__PURE__*/React.createElement("span", null, "Immediate Execution", /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-check"
    }))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "logic",
      value: "Formula Logic",
      checked: this.state.selectedLogic === "Formula Logic",
      onChange: this.onValueChange
    }), /*#__PURE__*/React.createElement("span", null, "Formula Logic", /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-check"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "list-choice-container"
    }, /*#__PURE__*/React.createElement("button", {
      className: "list-choice btn-list",
      onClick: this.toggleButton
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 100%',
        textAlign: 'left'
      }
    }, this.state.selectedLogic), /*#__PURE__*/React.createElement("i", {
      class: "fa-solid fa-bars"
    })), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: () => this.props.handleDialogCallback(true)
    }, "What does this do?"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: () => this.soundSwitch(),
      className: "sound-container"
    }, this.state.isSoundOn ? /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-volume-high"
    }) : /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-volume-xmark"
    })))), /*#__PURE__*/React.createElement("h5", null, "Designed and coded by ", /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "https://codepen.io/badeozgule"
    }, "Bade Ozgule")));
  }
}
class Apps extends React.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "handleCallback", childData => {
      this.setState({
        pressedButtonValue: childData
      });
    });
    _defineProperty(this, "handleDialogCallback", childData => {
      this.setState({
        isDialogOpen: childData
      });
    });
    _defineProperty(this, "handleLogicCallback", childData => {
      this.setState({
        logic: childData
      });
    });
    _defineProperty(this, "handleRunCalculation", childData => {
      this.setState({
        runCalculation: childData
      });
    });
    _defineProperty(this, "handleCalculationResult", childData => {
      this.setState({
        calculationResult: childData
        // pressedButtonValue: childData
      });
    });
    _defineProperty(this, "handleKeyPress", (event, key) => {
      const {
        pressedButtonValue
      } = this.state;
      buttonList.map((item, i) => {
        item.keyCodes.map((code, i) => {
          if (event.keyCode === code.keyCode && event.shiftKey === code.shiftKey && event.altKey === code.altKey) {
            if (event.type === "keydown") {
              this.refs[item.name].focus();
              this.refs[item.name].click();
              this.refs[item.name].className = classVal(item.name, item.type) + " active";
            } else {
              this.refs[item.name].className = classVal(item.name, item.type);
            }
          } else if (event.keyCode === 8 && event.type === "keydown") {
            //press delete button

            if (this.state.runCalculation) {
              del.currentTime = 0;
              del.play();
              this.setState({
                delKeyPressed: true,
                pressedButtonValue: "0",
                calculationResult: null
              });
            } else {
              pressedButtonValue.length === 1 ? (error.currentTime = 0, error.play()) : (del.currentTime = 0, del.play());
              if (this.state.timeoutIdDelKeyPressed) {
                clearTimeout(this.state.timeoutIdDelKeyPressed);
              }
              this.setState({
                pressedButtonValue: pressedButtonValue.length === 1 ? "0" : pressedButtonValue.slice(0, -1),
                delKeyPressed: false
              });
              let newTimeoutIdDelKeyPressed = setTimeout(() => {
                this.setState({
                  delKeyPressed: true,
                  timeoutId: null
                });
              }, 0.1);
              this.setState({
                timeoutId: newTimeoutIdDelKeyPressed
              });
            }
          } else if ((event.keyCode === 13 || event.keyCode === 32) && event.type === "keydown") {
            event.preventDefault();
            //it prevents spacebar pressing any key and enter key pressing twice
          }
        });
      });
    });
    this.state = {
      pressedButtonValue: "0",
      isDialogOpen: false,
      logic: "Formula Logic",
      delKeyPressed: false,
      timeoutIdDelKeyPressed: null,
      runCalculation: false,
      calculationResult: null
    };
    this.handleCallback = this.handleCallback.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleLogicCallback = this.handleLogicCallback.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyPress);
  }
  componentWillMount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyPress);
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GithubCorner, {
      url: "https://github.com/badeozgule/react-calculator"
    }), /*#__PURE__*/React.createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/React.createElement(Dialog, {
      mode: this.state.isDialogOpen,
      handleDialogCallback: this.handleDialogCallback
    }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("span", null, "React "), "Calculator"), /*#__PURE__*/React.createElement("p", null, "This calculator React project was built with Sass and features two calculation logic types: immediate execution and formula execution. With a responsive and keyboard-friendly design, it offers a user-friendly interface for performing basic arithmetic operations with ease.")), /*#__PURE__*/React.createElement(Screen, {
      value: this.state.pressedButtonValue,
      logic: this.state.logic,
      delKeyPressed: this.state.delKeyPressed,
      runCalculation: this.state.runCalculation,
      calculationResult: this.state.calculationResult,
      handleCalculationResult: this.handleCalculationResult
    }), /*#__PURE__*/React.createElement(ButtonContainer, {
      pressedButton: this.state.pressedButtonValue,
      calculationResult: this.state.calculationResult,
      parentCallback: this.handleCallback,
      handleKeyPress: this.handleKeyPress,
      handleRunCalculation: this.handleRunCalculation,
      handleCalculationResult: this.handleCalculationResult
    }), /*#__PURE__*/React.createElement(LogicSelector, {
      handleDialogCallback: this.handleDialogCallback,
      handleLogicCallback: this.handleLogicCallback
    })));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(Apps, null), document.querySelector("main"));