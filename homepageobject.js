import { render } from "@testing-library/react";
import React, { Component } from "react";

export class Punkdata extends Component {
  constructor(name, pic, serial, type, tag1, tag2) {
      super(name);
    this.name =  name;
    this.pic =  pic;
    this.serial = serial;
    this.type = type;
    this.tag1 = tag1;
    this.tag2 = tag2;
  }
  render() {
    return (
        // hold the pics left side and the data right
      <div class="punkroom">
        <img src='./assets/punk.png'
        // {this.pic} 
         alt="Punk Pics" height="50px" width="50px" />
         {/* right side of the punkroom */}
        <div class="punkdetails">
          <div class="pd1">
            {/* <h1> {this.serial} </h1> */}
            <h1>    1 </h1>
            {/* <h2>{this.type}</h2> */}
            <h2> Male </h2>
          </div>
          <div class="pd2">
            <span class="searchtag">
                {this.tag1}
                Smile
                </span>
            <span class="searchtag">
                {/* {this.tag2} */}
                Mohawk
                </span>
          </div>
        </div>
      </div>
    );
  }
}

// const punkprofile = new Punkdata();
export default Punkdata;
