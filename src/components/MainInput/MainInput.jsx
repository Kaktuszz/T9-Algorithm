import "./MainInput.css";


export const MainInput = (props) => {
  let setListener = props.setListener;
  let value = props.value;

  const listenerHandler =(e)=>{
    setListener(e.target.value);
  }

  return (
    <div>
      <input className="mainInput" value={value} onChange={listenerHandler} />
    </div>
  );
};
