import React, { useState, useRef } from 'react';
import { ImArrowDown } from 'react-icons/im';
import PropTypes from 'prop-types';

export default function FormComponent({ calculated, setCalculated }) {
  const [incomeType, setIncomeType] = useState('');
  const [noIncomeType, setNoIncomeType] = useState(true);
  const [noTimeType, setNoTimeType] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [WeeklyGrossResult, setWeeklyGrossResult] = useState('');
  const [FortnightlyGrossResult, setFortnightlyGrossResult] = useState('');
  const [MonthlyGrossResult, setMonthlyGrossResult] = useState('');
  const [AnnuallyGrossResult, setAnnuallyGrossResult] = useState('');
  const [WeeklyNetResult, setWeeklyNetResult] = useState('');
  const [FortnightlyNetResult, setFortnightlyNetResult] = useState('');
  const [MonthlyNetResult, setMonthlyNetResult] = useState('');
  const [AnnuallyNetResult, setAnnuallyNetResult] = useState('');
  const WeeklyTaxes = WeeklyGrossResult - WeeklyNetResult;
  const FortnightlyTaxes = FortnightlyGrossResult - FortnightlyNetResult;
  const MonthlyTaxes = MonthlyGrossResult - MonthlyNetResult;
  const AnnuallyTaxes = AnnuallyGrossResult - AnnuallyNetResult;

  const [Weekly, setWeekly] = useState(false);
  const [Fortnightly, setFortnightly] = useState(false);
  const [Monthly, setMonthly] = useState(false);
  const [Annually, setAnnually] = useState(false);

  const inputRef = useRef(null);
  const WeeklyRef = useRef(null);
  const FortnightlyRef = useRef(null);
  const MonthlyRef = useRef(null);
  const AnnuallyRef = useRef(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const onCalculate = () => {
    if (incomeType === 'gross') {
      setWeeklyNetResult(inputValue * 0.9);
      setFortnightlyNetResult(inputValue * 0.85);
      setMonthlyNetResult(inputValue * 0.8);
      setAnnuallyNetResult(inputValue * 0.7);
      setWeeklyGrossResult(inputValue);
      setFortnightlyGrossResult(inputValue);
      setMonthlyGrossResult(inputValue);
      setAnnuallyGrossResult(inputValue);
    } else if (incomeType === 'net') {
      setWeeklyGrossResult(inputValue * 1.1);
      setFortnightlyGrossResult(inputValue * 1.15);
      setMonthlyGrossResult(inputValue * 1.20);
      setAnnuallyGrossResult(inputValue * 1.3);
      setWeeklyNetResult(inputValue);
      setFortnightlyNetResult(inputValue);
      setMonthlyNetResult(inputValue);
      setAnnuallyNetResult(inputValue);
    }

    if (WeeklyRef.current.checked) {
      setWeekly(true);
      setWeeklyNetResult((prevRes) => Math.round(prevRes));
      setWeeklyGrossResult((prevRes) => Math.round(prevRes));
      setFortnightlyNetResult((prevRes) => Math.round(prevRes * 2));
      setFortnightlyGrossResult((prevRes) => Math.round(prevRes * 2));
      setMonthlyNetResult((prevRes) => Math.round(prevRes * 4.3));
      setMonthlyGrossResult((prevRes) => Math.round(prevRes * 4.3));
      setAnnuallyNetResult((prevRes) => Math.round(prevRes * 52));
      setAnnuallyGrossResult((prevRes) => Math.round(prevRes * 52));
    } else if (FortnightlyRef.current.checked) {
      setFortnightly(true);
      setWeeklyNetResult((prevRes) => Math.round(prevRes / 2));
      setWeeklyGrossResult((prevRes) => Math.round(prevRes / 2));
      setFortnightlyNetResult((prevRes) => Math.round(prevRes));
      setFortnightlyGrossResult((prevRes) => Math.round(prevRes));
      setMonthlyNetResult((prevRes) => Math.round(prevRes * 2.15));
      setMonthlyGrossResult((prevRes) => Math.round(prevRes * 2.15));
      setAnnuallyNetResult((prevRes) => Math.round(prevRes * 26));
      setAnnuallyGrossResult((prevRes) => Math.round(prevRes * 26));
    } else if (MonthlyRef.current.checked) {
      setMonthly(true);
      setWeeklyNetResult((prevRes) => Math.round(prevRes / 4.3));
      setWeeklyGrossResult((prevRes) => Math.round(prevRes / 4.3));
      setFortnightlyNetResult((prevRes) => Math.round(prevRes / 2.15));
      setFortnightlyGrossResult((prevRes) => Math.round(prevRes / 2.15));
      setMonthlyNetResult((prevRes) => Math.round(prevRes));
      setMonthlyGrossResult((prevRes) => Math.round(prevRes));
      setAnnuallyNetResult((prevRes) => Math.round(prevRes * 12));
      setAnnuallyGrossResult((prevRes) => Math.round(prevRes * 12));
    } else if (AnnuallyRef.current.checked) {
      setAnnually(true);
      setWeeklyNetResult((prevRes) => Math.round(prevRes / 52));
      setWeeklyGrossResult((prevRes) => Math.round(prevRes / 52));
      setFortnightlyNetResult((prevRes) => Math.round(prevRes / 26));
      setFortnightlyGrossResult((prevRes) => Math.round(prevRes / 26));
      setMonthlyNetResult((prevRes) => Math.round(prevRes / 12));
      setMonthlyGrossResult((prevRes) => Math.round(prevRes / 12));
      setAnnuallyNetResult((prevRes) => Math.round(prevRes));
      setAnnuallyGrossResult((prevRes) => Math.round(prevRes));
    }

    inputRef.current.value = '';
    setCalculated(true);
  };

  return (
    <div className="flex justify-center">
      {calculated ? (

        <form>
          <h1 className="mt-4 flex justify-center font-bold text-lg">
            You typed in
            {Weekly && ' Weekly'}
            {Fortnightly && ' Fortnightly'}
            {Monthly && ' Monthly'}
            {Annually && ' Annually'}
            {' '}
            {(incomeType === 'gross') ? 'Gross ' : 'Net '}
            income: $
            {' '}
            {inputValue}

            <div className="p-2 relative -left-52 top-8 text-3xl"><ImArrowDown /></div>
          </h1>
          {incomeType === 'gross' ? (
            <div>
              <h1 className="resultBox">
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
                {Annually ? (
                  <h1>
                    Annualy Net income:
                    {' '}
                    <span className="result">
                      {AnnuallyNetResult}
                      {' '}
                      $
                    </span>
                  </h1>
                ) : ''}
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="resultBox">
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
                {Annually ? (
                  <h1>
                    Annualy Gross income:
                    {' '}
                    <span className="result">
                      {AnnuallyGrossResult}
                      {' '}
                      $
                    </span>
                  </h1>
                ) : ''}

              </h1>
            </div>
          )}
          <table className="shadow-lg shadow-black bg-white mt-7 mb-10">
            <tr>
              <th className="tableTopRow">Frequency</th>
              <th className="tableTopRow">Gross Income</th>
              <th className="tableTopRow">Taxes</th>
              <th className="tableTopRow">Net Income</th>
            </tr>
            <tr className="tbHover">
              <td className="tbTimeType">Weekly Income</td>
              <td className="tbValues">
                {WeeklyGrossResult}
                $
              </td>
              <td className="tbValues">
                {WeeklyTaxes}
                $
              </td>
              <td className="tbValues">
                {WeeklyNetResult}
                $
              </td>
            </tr>
            <tr className="tbHover">
              <td className="tbTimeType">Fortnightly Income</td>
              <td className="tbValues">
                {FortnightlyGrossResult}
                $
              </td>
              <td className="tbValues">
                {FortnightlyTaxes}
                $
              </td>
              <td className="tbValues">
                {FortnightlyNetResult}
                $
              </td>
            </tr>
            <tr className="tbHover">
              <td className="tbTimeType">Monthly Income</td>
              <td className="tbValues">
                {MonthlyGrossResult}
                $
              </td>
              <td className="tbValues">
                {MonthlyTaxes}
                $
              </td>
              <td className="tbValues">
                {MonthlyNetResult}
                $
              </td>
            </tr>
            <tr className="tbHover">
              <td className="tbTimeType">Annualy Income</td>
              <td className="tbValues">
                {AnnuallyGrossResult}
                $
              </td>
              <td className="tbValues">
                {AnnuallyTaxes}
                $
              </td>
              <td className="tbValues">
                {AnnuallyNetResult}
                $
              </td>
            </tr>
          </table>
        </form>

      ) : (
        <form>
          <div>
            <h1 className=" pt-1 block text-zinc-900 text-lg font-bold mb-3 mt-3">
              What is your total income?
            </h1>
            <input
              ref={inputRef}
              className="pl-16 relative font-bold shadow appearance-none border rounded w-full py-3 px-4
         text-black  text-lg hover:border-red-800"
              placeholder="Income value"
              type="number"
              min="1"
              onChange={handleChange}
            />
            <i className="relative bottom-11 text-2xl font-bold left-8 ">$</i>
            <br />
          </div>
          <p className="text-zinc-900 text-s italic pb-2">Please, choose time period for the income.</p>
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
              ref={AnnuallyRef}
              className="ml-5 w-6 h-6 relative top-1 cursor-pointer"
              type="radio"
              name="time"
              value="Annualy"
              onClick={() => setNoTimeType(false)}
            />
            {' '}
            <span className="pl-1 pr-4 font-bold text-lg">Annualy</span>
          </div>
          <p className="text-zinc-900 text-s italic pt-2">Please, choose the income type.</p>
          <div className="flex items-center justify-evenly">
            <button
              className={` px-4 typeButtons  ${(incomeType === 'gross') ? ' bg-black scale-125 hover:text-base' : 'bg-red-700 hover:bg-red-900'}`}
              type="button"
              onClick={() => { setIncomeType('gross'); setNoIncomeType(false); }}
            >
              Gross income
            </button>
            <button
              className={`m-5 typeButtons ${(incomeType === 'net') ? ' bg-black scale-125 hover:text-base' : ' bg-red-700 hover:bg-red-900'}`}
              type="button"
              onClick={() => { setIncomeType('net'); setNoIncomeType(false); }}
            >
              Net income
            </button>

          </div>
          <br />
          <div className="flex justify-center">
            <button
              className="flex justify-center items-center bg-zinc-100 text-zinc-600 border-2 border-zinc-600 text-4xl transition-all
              duration-500  hover:scale-110 w-1/2 h-16 font-bold py-2 px-4 rounded disabled:not:cursor-pointer disabled:hover:scale-100"
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

FormComponent.propTypes = {
  calculated: PropTypes.bool,
  setCalculated: PropTypes.func,
};
