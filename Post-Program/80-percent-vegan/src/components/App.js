import React, { Component } from "react";
import Cheese from './Cheese';
import Meat from './Meat';
import Dairy from './Dairy';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentSelection: '',
    }
  
  this.informationDisplay = this.informationDisplay.bind(this);
  }

  informationDisplay() {
    
  }

  render() {
    return (
      <div>

        <div>
          Header Placeholder 80% Vegan
          <h5>Meat</h5>
          <h5>Dairy (Milk)</h5>
          <h5>Cheese</h5>
        </div>

        <div>
        
        </div>

      </div>
    )
  }
}

export default App;