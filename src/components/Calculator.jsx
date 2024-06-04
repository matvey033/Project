import React, { useState } from "react";
import './styles/Calculator.css';
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {
    return (
        <div>
            <Display />
            <Buttons />
        </div>
    )
}

export default Calculator;