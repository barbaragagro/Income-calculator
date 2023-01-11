/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef } from 'react';
import { ImArrowDown } from 'react-icons/im';

// eslint-disable-next-line react/prop-types
export default function FormComponent({ calculated, setCalculated }) {
  const [incomeType, setIncomeType] = useState('');
  const [noIncomeType, setNoIncomeType] = useState(true);
  const [noTimeType, setNoTimeType] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [WeeklyGrossResult, setWeeklyGrossResult] = useState('');
  const [FortnightlyGrossResult, setFortnightlyGrossResult] = useState('');
  const [MonthlyGrossResult, setMonthlyGrossResult] = useState('');
  const [AnuallyGrossResult, setAnuallyGrossResult] = useState('');
  const [WeeklyNetResult, setWeeklyNetResult] = useState('');
  const [FortnightlyNetResult, setFortnightlyNetResult] = useState('');
  const [MonthlyNetResult, setMonthlyNetResult] = useState('');
  const [AnuallyNetResult, setAnuallyNetResult] = useState('');
  const WeeklyTaxes = WeeklyGrossResult - WeeklyNetResult;
  const FortnightlyTaxes = FortnightlyGrossResult - FortnightlyNetResult;
  const MonthlyTaxes = MonthlyGrossResult - MonthlyNetResult;
  const AnuallyTaxes = AnuallyGrossResult - AnuallyNetResult;

  const [Weekly, setWeekly] = useState(false);
  const [Fortnightly, setFortnightly] = useState(false);
  const [Monthly, setMonthly] = useState(false);
  const [Anually, setAnually] = useState(false);

  const inputRef = useRef(null);
  const WeeklyRef = useRef(null);
  const FortnightlyRef = useRef(null);
  const MonthlyRef = useRef(null);
  const AnuallyRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const onCalculate = () => {
    if (incomeType === 'gross') {
      setWeeklyNetResult(inputValue * 0.9);
      setFortnightlyNetResult(inputValue * 0.85);
      setMonthlyNetResult(inputValue * 0.8);
      setAnuallyNetResult(inputValue * 0.7);
      setWeeklyGrossResult(inputValue);
      setFortnightlyGrossResult(inputValue);
      setMonthlyGrossResult(inputValue);
      setAnuallyGrossResult(inputValue);
    } else if (incomeType === 'net') {
      setWeeklyGrossResult(inputValue * 1.1);
      setFortnightlyGrossResult(inputValue * 1.15);
      setMonthlyGrossResult(inputValue * 1.20);
      setAnuallyGrossResult(inputValue * 1.3);
      setWeeklyNetResult(inputValue);
      setFortnightlyNetResult(inputValue);
      setMonthlyNetResult(inputValue);
      setAnuallyNetResult(inputValue);
    }

    if (WeeklyRef.current.checked) {
      setWeekly(true);
      setWeeklyNetResult((prevRes) => Math.round(prevRes));
      setWeeklyGrossResult((prevRes) => Math.round(prevRes));
      setFortnightlyNetResult((prevRes) => Math.round(prevRes * 2));
      setFortnightlyGrossResult((prevRes) => Math.round(prevRes * 2));
      setMonthlyNetResult((prevRes) => Math.round(prevRes * 4.3));
      setMonthlyGrossResult((prevRes) => Math.round(prevRes * 4.3));
      setAnuallyNetResult((prevRes) => Math.round(prevRes * 52));
      setAnuallyGrossResult((prevRes) => Math.round(prevRes * 52));
    } else if (FortnightlyRef.current.checked) {
      setFortnightly(true);
      setWeeklyNetResult((prevRes) => Math.round(prevRes / 2));
      setWeeklyGrossResult((prevRes) => Math.round(prevRes / 2));
      setFortnightlyNetResult((prevRes) => Math.round(prevRes));
      setFortnightlyGrossResult((prevRes) => Math.round(prevRes));
      setMonthlyNetResult((prevRes) => Math.round(prevRes * 2.15));
      setMonthlyGrossResult((prevRes) => Math.round(prevRes * 2.15));
      setAnuallyNetResult((prevRes) => Math.round(prevRes * 26));
      setAnuallyGrossResult((prevRes) => Math.round(prevRes * 26));
    } else if (MonthlyRef.current.checked) {
      setMonthly(true);
      setWeeklyNetResult((prevRes) => Math.round(prevRes / 4.3));
      setWeeklyGrossResult((prevRes) => Math.round(prevRes / 4.3));
      setFortnightlyNetResult((prevRes) => Math.round(prevRes / 2.15));
      setFortnightlyGrossResult((prevRes) => Math.round(prevRes / 2.15));
      setMonthlyNetResult((prevRes) => Math.round(prevRes));
      setMonthlyGrossResult((prevRes) => Math.round(prevRes));
      setAnuallyNetResult((prevRes) => Math.round(prevRes * 12));
      setAnuallyGrossResult((prevRes) => Math.round(prevRes * 12));
    } else if (AnuallyRef.current.checked) {
      setAnually(true);
      setWeeklyNetResult((prevRes) => Math.round(prevRes / 52));
      setWeeklyGrossResult((prevRes) => Math.round(prevRes / 52));
      setFortnightlyNetResult((prevRes) => Math.round(prevRes / 26));
      setFortnightlyGrossResult((prevRes) => Math.round(prevRes / 26));
      setMonthlyNetResult((prevRes) => Math.round(prevRes / 12));
      setMonthlyGrossResult((prevRes) => Math.round(prevRes / 12));
      setAnuallyNetResult((prevRes) => Math.round(prevRes));
      setAnuallyGrossResult((prevRes) => Math.round(prevRes));
    }

    inputRef.current.value = '';
    // setInputValue('');
    setCalculated(true);
  };

  return (
    <div className="flex justify-center">
      {calculated ? (

        <form>
          <h1 className="font-bold text-lg">
            You typed in
            {Weekly && ' Weekly'}
            {Fortnightly && ' Fortnightly'}
            {Monthly && ' Monthly'}
            {Anually && ' Anually'}
            {' '}
            {(incomeType === 'gross') ? 'Gross ' : 'Net '}
            income: $
            {' '}
            {inputValue}

            <div className="p-2 relative left-24 text-3xl"><ImArrowDown /></div>
          </h1>
          {incomeType === 'gross' ? (
            <div>
              <h1 className="inline-block text-2xl font-bold mb-5">
                {Weekly ? (
                  <h1>
                    Weekly Net income:
                    {' '}
                    <span className="result">
                      {WeeklyNetResult}
                      {' '}
                      $
                    </span>
                  </h1>
                ) : ''}
                {Fortnightly ? (
                  <h1>
                    Fortnightly Net income:
                    {' '}
                    <span className="result">
                      {FortnightlyNetResult}
                      {' '}
                      $
                    </span>
                  </h1>
                ) : ''}
                {Monthly ? (
                  <h1>
                    Monthly Net income:
                    {' '}
                    <span className="result">
                      {MonthlyNetResult}
                      {' '}
                      $
                    </span>
                    <br />
                  </h1>
                ) : '' }
                {Anually ? (
                  <h1>
                    Annualy Net income:
                    {' '}
                    <span className="result">
                      {AnuallyNetResult}
                      {' '}
                      $
                    </span>
                  </h1>
                ) : ''}
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="inline-block text-2xl font-bold mb-5">
                {Weekly ? (
                  <h1>
                    Weekly Gross income:
                    {' '}
                    <span className="result">
                      {WeeklyGrossResult}
                      {' '}
                      $
                    </span>
                  </h1>
                ) : ''}
                {Fortnightly ? (
                  <h1>
                    Fortnightly Gross income:
                    {' '}
                    <span className="result">
                      {FortnightlyGrossResult}
                      {' '}
                      $
                    </span>
                  </h1>
                ) : ''}
                {Monthly ? (
                  <h1>
                    Monthly Gross income:
                    {' '}
                    <span className="result">
                      {MonthlyGrossResult}
                      {' '}
                      $
                    </span>
                  </h1>
                ) : '' }
                {Anually ? (
                  <h1>
                    Annualy Gross income:
                    {' '}
                    <span className="result">
                      {AnuallyGrossResult}
                      {' '}
                      $
                    </span>
                  </h1>
                ) : ''}

              </h1>
            </div>
          )}
          <table className="shadow-lg bg-white">
            <tr>
              <th className="font-bold bg-red-100 border text-left px-8 py-4" />
              <th className="font-bold bg-red-100 border text-left px-8 py-4">Gross Income</th>
              <th className="font-bold bg-red-100 border text-left px-8 py-4">Taxes</th>
              <th className="font-bold bg-red-100 border text-left px-8 py-4">Net Income</th>
            </tr>
            <tr>
              <td className="font-bold border px-8 py-4">Weekly Income</td>
              <td className="border px-8 py-4 text-center">
                {WeeklyGrossResult}
                $
              </td>
              <td className="border px-8 py-4 text-center">
                {WeeklyTaxes}
                $
              </td>
              <td className="border px-8 py-4 text-center">
                {WeeklyNetResult}
                $
              </td>
            </tr>
            <tr>
              <td className="font-bold border px-8 py-4">Fortnightly Income</td>
              <td className="border px-8 py-4 text-center">
                {FortnightlyGrossResult}
                $
              </td>
              <td className="border px-8 py-4 text-center">
                {FortnightlyTaxes}
                $
              </td>
              <td className="border px-8 py-4 text-center">
                {FortnightlyNetResult}
                $
              </td>
            </tr>
            <tr>
              <td className="font-bold border px-8 py-4">Monthly Income</td>
              <td className="border px-8 py-4 text-center">
                {MonthlyGrossResult}
                $
              </td>
              <td className="border px-8 py-4 text-center">
                {MonthlyTaxes}
                $
              </td>
              <td className="border px-8 py-4 text-center">
                {MonthlyNetResult}
                $
              </td>
            </tr>
            <tr>
              <td className="font-bold border px-8 py-4">Annualy Income</td>
              <td className="border px-8 py-4 text-center">
                {AnuallyGrossResult}
                $
              </td>
              <td className="border px-8 py-4 text-center">
                {AnuallyTaxes}
                $
              </td>
              <td className="border px-8 py-4 text-center">
                {AnuallyNetResult}
                $
              </td>
            </tr>
          </table>
        </form>

      ) : (
        <form>
          <div className="mb-4">
            <h1 className=" pt-1 block text-gray-700 text-lg font-bold mb-2">
              What is your total income?
            </h1>
            <input
              ref={inputRef}
              className=" pl-16 relative font-bold shadow appearance-none border rounded w-full py-4 px-4
         text-black  text-lg"
              placeholder="Income value"
              type="number"
              min="1"
              onChange={handleChange}
            />
            <i className="absolute pt-4 text-xl font-bold left-1/3 pl-16">$</i>
            <br />
          </div>
          <p className="text-gray-900 text-s italic pb-2 pt-4">Please, choose time period for the income.</p>
          <div className="mb-6">
            <input
              className="w-6 h-6 relative top-1 cursor-pointer"
              ref={WeeklyRef}
              type="radio"
              name="time"
              value="Weekly"
              onClick={() => setNoTimeType(false)}
            />
            {' '}
            <span className="pl-1 pr-4 font-bold text-lg">Weekly</span>
            <input
              ref={FortnightlyRef}
              className="ml-5 w-6 h-6 relative top-1 cursor-pointer"
              type="radio"
              name="time"
              value="Fortnightly"
              onClick={() => setNoTimeType(false)}
            />
            {' '}
            <span className="pl-1 pr-4 font-bold text-lg">Fortnightly</span>
            <input
              ref={MonthlyRef}
              className="ml-5 w-6 h-6 relative top-1 cursor-pointer"
              type="radio"
              name="time"
              value="Monthly"
              onClick={() => setNoTimeType(false)}
            />
            {' '}
            <span className="pl-1 pr-4 font-bold text-lg">Monthly</span>
            <input
              ref={AnuallyRef}
              className="ml-5 w-6 h-6 relative top-1 cursor-pointer"
              type="radio"
              name="time"
              value="Annualy"
              onClick={() => setNoTimeType(false)}
            />
            {' '}
            <span className="pl-1 pr-4 font-bold text-lg">Annualy</span>
          </div>
          <p className="text-gray-900 text-s italic pt-2">Please, choose the income type.</p>
          <div className="flex items-center justify-evenly">
            <button
              className={`text-white font-bold py-2 px-4 rounded transition-all hover:text-lg
               duration-500 h-14 shadow-sm shadow-black border-2 border-black w-1/3
               ${(incomeType === 'gross') ? 'bg-green-300 scale-125 hover:text-base' : 'bg-red-700 hover:bg-red-900'}`}
              type="button"
              onClick={() => { setIncomeType('gross'); setNoIncomeType(false); }}
            >
              Gross income
            </button>
            <button
              className={`m-5 text-white font-bold py-2 transition-all hover:text-lg
               duration-500 rounded w-1/3 h-14 border-black border-2 shadow-sm shadow-black
              ${(incomeType === 'net') ? ' bg-green-300 scale-125 hover:text-base' : ' bg-red-700 hover:bg-red-900'}`}
              type="button"
              onClick={() => { setIncomeType('net'); setNoIncomeType(false); }}
            >
              Net income
            </button>

          </div>
          <br />
          <div className="flex justify-center">
            <button
              className="flex justify-center items-center bg-zinc-900 text-4xl transition-all duration-500
              hover:bg-black hover:scale-110 w-1/2 h-16 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              disabled={noIncomeType || inputValue === '' || noTimeType}
              onClick={onCalculate}
            >
              Calculate
            </button>
          </div>
        </form>
      )}

    </div>

  );
}
