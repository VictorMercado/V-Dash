import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Vcard from './VCard';
import { IconContext } from 'react-icons/lib';
import { BiPlus } from "react-icons/bi";

let exp = 
[
    {
        name: "Example",
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
    },
        {
        name: "Example",
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
    },
        {
        name: "Example",
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
]


//create a function factory to give a function to each vcard to update the state in this controller
const VCardController = ( {vcardArr} ) => {
    const [data, setData] = useState(exp);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch("http://localhost:3001/api")
      .then(response => {
        if(response.ok) {
            return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log("data is here");
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching occured: " + error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);
    

    return(
        <div className=''>
            {console.log("this runs first")}
            <button className='flex ml-4 w-fit px-4 py-2 text-fontcolor blue-pink-border-rounded items-center cursor-pointer transistion hover:scale-110'>
                <IconContext.Provider value={{color: "var(--icon)", className:"h-6 w-6 transition ease-in"}}>
                    <BiPlus />
                </IconContext.Provider>
                <span className='pl-2'>
                    Add Car
                </span>
            </button>
            {
                data.map((car, index) => {
                    return (<Vcard key={index} car= {car} loading= {loading}/>)
                })
            }
            {/* {
                loading === true ? 
                    exp.map((car, index) => {
                        return (<Vcard key={index} car= {car} loading= {loading}/>)
                    })
                    :
                    data.map((car, index) => {
                        return (<Vcard key={index} car= {car} loading= {loading}/>)
                    })
            }   */}
        </div>
    );
}

export default VCardController;