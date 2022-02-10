

function Button(props){
  return (
    <div>
      <input type="button" value={props.btn} className={`btn ${props.style}`} />
    </div>
  );
}


export  {Button};