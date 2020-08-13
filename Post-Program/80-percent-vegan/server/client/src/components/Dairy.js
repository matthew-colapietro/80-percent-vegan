import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Dairy extends Component {



  render () {
    return (
      <div>
        <p>Milk/Cream might be the easiest and most cost effective healthy replacement. There are dozens of options for milk and cream which have only improved as their popularity has soared.</p>

        <div className="row">
          <div className="col-md-3">
            <h5>Oatley Oat Milk</h5>
            <img className="w-100" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXNpWsXmob8tA0rnqRH-TzwruX_n5hN6ABaYjSp_x4GnSuRamZqA&usqp=CAc"></img>
          </div>
          <div className="col-md-3">
            <h5>Silk Almond Milk</h5>
            <img className="w-100" src="https://silk.com/wp-content/uploads/2019/02/silk-original-almondmilk.png"></img>
          </div>
          <div className="col-md-3">
            <h5>Soy Milk</h5>
            <img className="w-100" src="https://silk.com/wp-content/uploads/2019/02/silk-original-soymilk.png"></img>
          </div>
        </div>

      </div>
    )
  }

}

export default Dairy;