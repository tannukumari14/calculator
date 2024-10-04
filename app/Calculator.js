"use client"
import React, { useState } from "react";
import "./globals.css"; 

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput("Error");
            }
        } else if (value === "C") {
            setInput("");
        } else {
            const lastChar = input.slice(-1);
            if (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(lastChar)) {
                return; 
            }
            setInput(input + value);
        }
    };

    const buttons = [
        "+", "-", "*", "/",
        "7", "8", "9", "C",
        "4", "5", "6", "=",
        "1", "2", "3", "0",
        "."
    ];

    return (
        <div className="calculator">
            <input type="text" value={input} placeholder="0" readOnly />
            <div className="buttons">
                {buttons.map((button, index) => (
                    <button key={index} onClick={() => handleClick(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
