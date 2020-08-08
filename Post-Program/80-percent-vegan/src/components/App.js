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
    switch (this.state.currentSelection) {
      case 'Meat':
        return <Meat />
      case 'Dairy (Milk)':
        return <Dairy />
      case 'Cheese':
        return <Cheese />
      default:
        return ''
    }
  }

  render() {
    return (
      <div>

        <div>
          Header Placeholder 80% Vegan
          <h5 onClick={e => this.setState( {currentSelection: e.target.innerText} )}>Meat</h5>
          <h5 onClick={e => this.setState( {currentSelection: e.target.innerText} )}>Dairy (Milk)</h5>
          <h5 onClick={e => this.setState( {currentSelection: e.target.innerText} )}>Cheese</h5>
        </div>

        <div>
          {this.informationDisplay()}
        </div>

      </div>
    )
  }
}

export default App;