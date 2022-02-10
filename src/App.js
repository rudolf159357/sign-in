import React from "react";
import {Main} from "./components/main.js";
import {Form} from "./components/form.js";

class App extends React.Component {
  state = {
    header: "Learn languages with professional tutors",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic excepturi ullam earum aut voluptatum exercitationem magni officiis. Aspernatur, eius voluptates!",
    mainBtn: "claim your free trial",
    secondBtn: "try for free for 7 days"
  }
  

  render(){
    return (
      <div className="app">
        <div className="left">
          <Main header={this.state.header} text={this.state.text}/>
        </div>
        <div className="right">
          <Form mainBtn={this.state.mainBtn} secondBtn={this.state.secondBtn}/>
        </div>
      </div>
    );
  }
  
}

export default App;
