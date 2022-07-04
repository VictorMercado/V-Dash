import React, { useState }  from 'react';
import PropTypes from 'prop-types';

const Vcard = ( { party } ) => {
  const [didRender, statusRender] = useState(true);

  let focusst = {
  name: "Khaleesi",
  miles: 54000,
  lastChangedOil: 50000,
  oils: ["Mobile 1", "Castrol", "Pennzoil Ultra"],
  oilType: "5W-30",
  oilFilter: "Farm FL-400s",
  oilAmount: "6 quarts",
  distanceUnits: "miles",
  licensePlate: "8AGW004",
  vin: "1FADP3L9XHL314568",
  changedTires: "45000"
  }
  let arr = Object.keys(focusst);
  //shift the array to remove the name property so it doesnt appear twice 
  arr.shift();
  //rounded-xl border-primary border-[.5px]
  return (
    <div className='w-100 blue-pink-border-square p-4 m-4 shadow-lg shadow-black'>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271">
        <g strokeWidth="1.5" transform="translate(-1624 -187.923)">
          <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" stroke="black" fill="transparent">
          </path>
        </g>
        <text className='border-4 border-teal-600 rounded-lg animate-pulse' fill="#ffffff" fontSize="5" fontFamily="Verdana" x="10" y="35">
        </text>
      </svg> */}
      <h1 className="text-black border-b-2 m-4 mb-8 border-pink text-2xl">
        { focusst.name }
      </h1>
      
      <div className="">
        {
        arr.map((item, index) => {
          return <div className='grid m-3 grid-cols-2 justify-items-start' key={index}>
                    <p className='text-black font-bold'>{arr[index][0].toUpperCase() + arr[index].slice(1)}:</p>
                    <input className='border-2 w-40 text-center rounded border-black dark:text-white dark:bg-black text-black' type="text" defaultValue={"" + focusst[arr[index]]} />
                  </div>
        })
      }
      </div>
    </div>
  );
};

Vcard.propTypes = {
  // partyTime: PropTypes.partyTime.number,
};

export default Vcard;
