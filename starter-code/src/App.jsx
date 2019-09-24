import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import FoodForm from "./components/FoodForm";
import { Container, Button, Row, Col } from "react-bootstrap";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      toggleForm: false,
      searchValue: "",
      order: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //This method needs to be bind in the constructor
  handleSubmit(data) {
    this.setState({
      foods: [
        ...this.state.foods,
        {
          name: data.name,
          calories: data.calories,
          image: data.image,
          quantity: 0
        }
      ],
      toggleForm: !this.state.toggleForm
    });
  }

  //This method with the arrow ES2018 function doesn't to be binded
  handleAddFoodForm = () => {
    this.setState({ ...this.state, toggleForm: !this.state.toggleForm });
  };

  handleSearch = e => {
    this.setState({ ...this.state, searchValue: e.target.value });
  };

  addOne = foodItem => {
    let copyOfFoods = [...this.state.foods];
    let copyOfOrder = [...this.state.order];
    let index = this.state.foods.findIndex(food => food.name === foodItem.name);
    copyOfFoods[index].quantity += 1;
    if (!copyOfOrder.includes(foodItem)) copyOfOrder.push(foodItem);
    this.setState({
      ...this.state,
      foods: copyOfFoods,
      order: copyOfOrder
    });

  };

  itemTotalCalories = order => {
    return order.calories * order.quantity;
  };

  get totalCalories(){
    if (this.state.order.length !== 0)
    return this.state.order.reduce((counter, order) => 
      counter + order.quantity * order.calories, 0)
  else return 0
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>

        <Button onClick={this.handleAddFoodForm}>Add food</Button>

        {this.state.toggleForm && <FoodForm handleSubmit={this.handleSubmit} />}
        <Search handleSearch={this.handleSearch}></Search>

        <Container>
          <Row>
            <Col sm={4}>
              {" "}
              <div className="d-flex flex-wrap ">
                {this.state.foods
                  .filter(food =>
                    food.name
                      .toLowerCase()
                      .includes(this.state.searchValue.toLowerCase())
                  )
                  .map(food => (
                    <FoodBox key={food.name} food={food} addOne={this.addOne} />
                  ))}
              </div>
            </Col>
            <Col sm={8}>
              <h1>Today's food</h1>
              <ul>
                {this.state.order.map(order => (
                  <li key={order.name}>
                    {`${order.quantity} ${order.name} = ${this.itemTotalCalories(order)}cal`}
                  </li>
                ))}
              </ul>
              <h5>Total: {this.totalCalories} cal</h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
