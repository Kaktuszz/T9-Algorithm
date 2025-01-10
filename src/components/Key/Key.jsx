import "./Key.css"


export const Key=({ children, value, onClick })=>{
    const handleClick = () => {
        onClick(value);
      };

    return (
      
            <button value={value} onClick={handleClick}>
                <h2>{value}</h2>{children}
            </button>
      
    )
}