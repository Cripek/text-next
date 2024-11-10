import { useState } from 'react';

const Calculator = () => {
    const [screen, setScreen] = useState("");

    const appendToScreen = (value) => {
        setScreen(screen + value);
    };

    const clearScreen = () => {
        setScreen("");
    };

    const deleteChar = () => {
        setScreen(screen.slice(0, -1));
    };

    const calculate = () => {
        try {
            setScreen(eval(screen).toString());
        } catch {
            setScreen("Error");
        }
    };

    return (
        <div className="calculator bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] shadow-lg p-4 m-5 w-72">
            <div className="screen bg-[#111] text-[#0ff] text-2xl text-right p-5 border-2 border-[#0ff] mb-4 h-16 rounded">
                {screen}
            </div>
            <div className="buttons grid grid-cols-4 gap-2">
                <button className="btn" onClick={clearScreen}>C</button>
                <button className="btn" onClick={deleteChar}>DEL</button>
                <button className="btn" onClick={() => appendToScreen('%')}>%</button>
                <button className="btn" onClick={() => appendToScreen('/')}>/</button>
                <button className="btn" onClick={() => appendToScreen('7')}>7</button>
                <button className="btn" onClick={() => appendToScreen('8')}>8</button>
                <button className="btn" onClick={() => appendToScreen('9')}>9</button>
                <button className="btn" onClick={() => appendToScreen('*')}>*</button>
                <button className="btn" onClick={() => appendToScreen('4')}>4</button>
                <button className="btn" onClick={() => appendToScreen('5')}>5</button>
                <button className="btn" onClick={() => appendToScreen('6')}>6</button>
                <button className="btn" onClick={() => appendToScreen('-')}>-</button>
                <button className="btn" onClick={() => appendToScreen('1')}>1</button>
                <button className="btn" onClick={() => appendToScreen('2')}>2</button>
                <button className="btn" onClick={() => appendToScreen('3')}>3</button>
                <button className="btn" onClick={() => appendToScreen('+')}>+</button>
                <button className="btn zero col-span-2" onClick={() => appendToScreen('0')}>0</button>
                <button className="btn equals bg-[#f54291] text-white" onClick={calculate}>=</button>
            </div>
        </div>
    );
};

export default Calculator;