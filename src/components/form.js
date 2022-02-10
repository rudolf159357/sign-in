import {Button} from "./button.js";


function Form(props){
  return (
    <div>
      <form action="#" className="form">
        <Button btn={props.secondBtn} style="secondBtn"/>
        <div className="input-form">
          <input type="text" placeholder="Username" className="username"/>
          <input type="text" placeholder="Email" className="email"/>
          <input type="text" placeholder="Password" className="password"/>
          <input type="text" placeholder="Confirm Password" className="confirm"/>
          <Button btn={props.mainBtn} style="mainBtn"/>
        </div>
      </form>
    </div>
  );
}


export  {Form};