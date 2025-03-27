import react from "react";

function Button () {
    
    const handleOnClick = () => {
        console.log("Ive been clicked")
    
    };

    const handleClick = () => {
        console.log("Ive been reset")
    };

    return (
        <div>

            <button onClick={handleOnClick}>Click me</button>
            <button onClick={handleClick}>Reset me</button>
        </div>
    );
}

export default Button;