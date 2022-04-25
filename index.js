class HtmlElement {
  constructor(attr) {
    this.attr = attr;
    this.click = function () {
      console.log("html element click");
    };
  }

  // this method will be defined to the prototype of the function
  // everything you define in class scope outside constructor method gets attached
  // to the constructor behind the scnenes.
  // So, click method should be defined inside constructor and focus method here

  // click() {
  //   console.log('html element click');
  // }
  focus = function () {
    console.log("html element focus");
  };
}

// this is the way to define methods on prototype when using constructor functions.
// do not mix implimentations.

// HtmlElement.prototype.focus = function () {
//   console.log('html element focus');
// };

const elem = new HtmlElement("div");
console.log(elem);
// elem.click();
// elem.focus();

class HtmlSelectElement extends HtmlElement {
  // the correct and the most clean way would be:
  // constructor(attr, member = []) {
  // or inside constructor using an if statement
  constructor(attr, member = []) {
    super(attr);
    this.member = member;
  }
  addItem(item) {
    // where are you handling that this.member is optional?
    this.member.push(item);
  }
  removeItem(item) {
    const indexOfDeletingElem = this.member.findIndex((elem) => elem === item);
    this.member.splice(indexOfDeletingElem, 1);
  }
}

const selectedElem = new HtmlSelectElement("div", ["aaa", "bbb", "ccc"]);
selectedElem.click();
selectedElem.focus();
selectedElem.removeItem("bbb");
selectedElem.addItem("ddd");
console.log(selectedElem);

function getMathModule(x) {
  // this.x = x;
  // y should be received by sum, subtract and so on, but not defined here
  // this.y = 2;

  // you don't need "this" here.
  // getMathModule should be a simple function that returns an object(module)
  // and each member in that object is a function that receives an argument
  // and using that passed argument does something using the one defined in the
  // scope of getMathModule, so x
  return {
    sum: (y) => {
      return x + y;
    },

    substract: (y) => {
      return x - y;
    },

    add: (y) => {
      return x * y;
    },

    divide: (y) => {
      return x / y;
    },
  };
}

const Math = new getMathModule(4);

console.log(Math);
console.log(Math.sum(2));
console.log(Math.substract(2));
console.log(Math.add(2));
console.log(Math.divide(2));

// below is the correct way
// const mathModule = (num1) => {
//   return {
//     calc: (num2) => {
//       return num1 + num2;
//     },
//     substract: (num2) => {
//       return num1 - num2;
//     },
//     multiply: (num2) => {
//       return num1 * num2;
//     },
//     divide: (num2) => {
//       return num1 / num2;
//     },
//   };
// };

// const operateOn10 = mathModule(10);
// operateOn10.calc(2);
// operateOn10.substract(2);
// operateOn10.multiply(2);
// operateOn10.divide(2);

// Eventually both exercises are more or less correct, but using the comments
// given by me, you could improve that. Well done.
