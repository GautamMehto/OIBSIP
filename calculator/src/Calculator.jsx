import { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator min-w-[280px] max-w-[300px] h-auto bg-slate-700/20 backdrop-blur-sm  rounded-[35px] p-3 pb-6">
            <input type="text" value={input} readOnly className='w-full min-h-16 outline-none text-right text-xl text-black  bg-transparent pr-5' />
            <input type="text" value={result} readOnly className='w-full  outline-none text-right text-5xl text-black  bg-transparent pr-5  mb-5' />
            <div className=" keypad flex flex-wrap">
                <div className='w-fit h-auto  grid grid-rows-4 grid-cols-4 justify-center items-center gap-[13px]'>
                    <button className='w-[60px] h-[60px] bg-gradient-to-tl from-orange-400 via-orange-500 to-orange-600 rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )]' onClick={() => handleClick('C')}>C</button>
                    <button className='w-[60px] h-[60px] bg-gradient-to-tl from-orange-400 via-orange-500 to-orange-600 rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )]' onClick={() => handleClick('C')}>CE</button>
                    <button className='w-[60px] h-[60px] bg-gradient-to-tl from-orange-400 via-orange-500 to-orange-600 rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )]' onClick={() => handleClick('%')}>%</button>
                    <button className='w-[60px] h-[60px] bg-gradient-to-tl from-orange-400 via-orange-500 to-orange-600 rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )]' onClick={() => handleClick('/')}>/</button>
                    
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)] bg-gradient-to-tl from-gray-300 to-gray-800/30  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )]' onClick={() => handleClick('1')}>1</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30' onClick={() => handleClick('2')}>2</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30' onClick={() => handleClick('3')}>3</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-orange-400 via-orange-500 to-orange-600' onClick={() => handleClick('*')}>x</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30' onClick={() => handleClick('4')}>4</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30' onClick={() => handleClick('5')}>5</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30' onClick={() => handleClick('6')}>6</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-orange-400 via-orange-500 to-orange-600' onClick={() => handleClick('-')}>-</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30' onClick={() => handleClick('7')}>7</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30' onClick={() => handleClick('8')}>8</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30' onClick={() => handleClick('9')}>9</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-orange-400 via-orange-500 to-orange-600' onClick={() => handleClick('+')}>+</button>
                    <button className='w-full h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30 col-span-2' onClick={() => handleClick('0')}>0</button>

                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)]  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )] bg-gradient-to-tl from-gray-300 to-gray-800/30' onClick={() => handleClick('.')}>.</button>
                    <button className='w-[60px] h-[60px] rounded-lg text-xl font-semibold shadow-[5px_5px_16px_-5px_rgba(0,0,0,0.6)] bg-gradient-to-tl from-orange-400 via-orange-500 to-orange-600  backdrop-blur-sm bg-[rgba( 66, 60, 60, 0.35 )]' onClick={() => handleClick('=')}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
