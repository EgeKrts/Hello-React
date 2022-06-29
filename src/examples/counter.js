// var root = document.getElementById("root");

// var template = (
//   <div>
//     <h1 id="header2">Hello World </h1>

//     <div>Lorem, ipsum dolor.</div>
//     <ul>
//       <li>Lorem, ipsum.</li>
//       <li>Lorem, ipsum.</li>
//       <li>Lorem, ipsum.</li>
//     </ul>
//   </div>
// );

// // var product = {
// //   name: "Samsung S10",
//   price: 8000,
//   description: "Fiyat performans ürünü",
//   types: ["red", "blue"],
// };

// function getDescription(description) {
//   if (description) {
//     return <p id="product-desc">description: {description}</p>;
//   }
// }

// var template2 = (
//   <div id="product-details">
//     <h2 id="prodcut-name">name: {product.name ? product.name : "no-name"}</h2>
//     <p id="product-price">
//       price : {product.price == 0 ? "free" : product.price}
//     </p>
//     {getDescription(product.description)}
//     <p>{product.types.length > 0 ? "there are options" : "no options"}</p>
//   </div>
// );

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      number: 0,
    };
  }

  addOne() {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1,
      };
    });
  }

  minusOne() {
    this.setState((prevState) => {
      return {
        number: prevState.number - 1,
      };
    });
  }

  reset() {
    this.setState({
      number: 0,
    });
  }

  render() {
    return (
      <div>
        <h1>Number : {this.state.number} </h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

// var number = 0;
// var btnAddClassName = "btnRed";
// var btnMinusClassName = "btnBlue";

// function addOne() {
//   number++;
//   renderApp();
//   console.log("add one");
// }

// var minusOne = () => {
//   number--;
//   renderApp();
//   console.log("minus one");
// };

// function renderApp() {
//   var template2 = (
//     <div>
//       <h1>Number : {number}</h1>

//       <button id="btnPlusOne" className={btnAddClassName} onClick={addOne}>
//         +1
//       </button>
//       <button id="btnMinusOne" className={btnMinusClassName} onClick={minusOne}>
//         -1
//       </button>
//     </div>
//   );

//   ReactDOM.render(template2, root);
// }

// function tick() {
//   var element = (
//     <div>
//       <h2>Time is : {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );

//   ReactDOM.render(element, root);
// }

// setInterval(tick, 1000);

// // renderApp();
