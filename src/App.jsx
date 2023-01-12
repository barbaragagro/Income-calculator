/* global window */
import { BsCalculator } from 'react-icons/bs';

import React, { useState } from 'react';
import FormComponent from './FormComponent';
import './index.css';

export default function App() {
  const [calculated, setCalculated] = useState(false);
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col w-fit">
        <div className="flex justify-evenly">
          <button className={calculated ? 'buttonsNotActive' : 'buttonsActive'} type="button" disabled>Income input</button>
          <button className={calculated ? 'buttonsActive' : 'buttonsNotActive'} type="button" disabled>Calculated input</button>
        </div>
        <div className="z-30 bg-white shadow-black shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex font-bold mb-6 bg-red-200 rounded p-2 px-5 shadow-sm shadow-black">
            <span className="mr-2 mt-1 text-7xl"><BsCalculator /></span>
            {' '}
            <h1 className="text-3xl pt-5 w-max px-5">GROSS & NET INCOME CALCULATOR</h1>
          </div>

          <FormComponent
            calculated={calculated}
            setCalculated={setCalculated}
          />

        </div>
        <div className="flex justify-center">
          {calculated ? (
            <button
              className="relative bottom-10 z-50 text-2xl font-bold transition-all hover:scale-105
               duration-500 rounded w-1/4 h-14 border-black border-2 shadow-md shadow-black bg-red-900 text-white"
              type="button"
              disabled={!calculated}
              onClick={refreshPage}
            >
              Calculate again
            </button>
          ) : ''}
        </div>
      </div>
    </div>
  );
}
