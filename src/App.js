import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [percentage,setPercentage]=useState(0)
  const [cgpa,setCgpa]=useState('')
  const [error,setError] =useState('')
  const percent=()=>{
    return cgpa*9.5
  }
  const handleClick=()=>{
   if(cgpa===0 || cgpa.trim()===''){
    setError('Pls enter CGPA')
    setPercentage(0)
   }
   else{
    setError('')
    setPercentage(percent().toFixed(2)+'%')
   }
    setCgpa(' ')
  }
  return (
    <div className="App">
    <h1 className='text-center font-bold md:text-4xl text-3xl m-4'>Multi Converter</h1>
    <div className="w-full h-[90vh] flex items-center justify-center">
      <div className="shadow-lg shadow-gray-400 w-[80%] md:w-[30%] md:min-h-[350px] min-h-[300px] p-4">
        <h2 className='text-center font-bold text-2xl'>Converts</h2>
        <div className="w-full flex flex-col h-full my-4">
          <label >CGPA</label>
          <input type="number" className='outline-none border-[2px] pl-2 my-2 rounded border-solid border-gray-300' placeholder='Enter CGPA'  onChange={(e)=>setCgpa(e.target.value)} value={cgpa}  />
          <p>{error}</p>
          <button className='bg-green-700 text-white my-2' onClick={handleClick}>Calculate</button>
          <p>Show Results</p>
          <p>Percentage :- <span>{percentage}</span></p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
