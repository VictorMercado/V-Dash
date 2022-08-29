import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";

const Vcard = ( { car, loading } ) => {
  const [didRender, statusRender] = useState(true);
  const [isLoaded, setLoaded] = useState(true);
  
  console.log(useForm());  
  const onSubmit = data => console.log(data);
  //shift the array to remove the name property so it doesnt appear twice 
  let arr = Object.keys(car);
  arr.shift();
  const { register, handleSubmit } = useForm({ defaultValues: "" });
  // let data = {name: 'DelftStack'};
  // fetch("https://randomuser.me/api/?results=10", {
  //   method: "POST", 
  //   body: JSON.stringify(data)
  // }).then(res => {
  //   console.log("Promise resolved", res);
  // });
  //rounded-xl border-primary border-[.5px]
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271">
  <g strokeWidth="1.5" transform="translate(-1624 -187.923)">
    <path d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)" stroke="black" fill="transparent">
    </path>
  </g>
  <text className='border-4 border-teal-600 rounded-lg animate-pulse' fill="#ffffff" fontSize="5" fontFamily="Verdana" x="10" y="35">
  </text>
  </svg> */
  return (
    <div className=' p-2 m-4 w-100 blue-pink-border-rounded shadow-lg shadow-black transition-colors ease-in-out duration-700'>
      {
        loading === true ?
          <>
            <h1 className="m-4 mb-8 text-2xl border-b-2 border-border">
              <span className='bg-loading text-loading rounded animate-pulse'>loadingloading</span>
            </h1>
            <div className="">
              {
                arr.map((item, index) => {
                  return <form key={index} >
                            <div className='grid my-3 grid-cols-2 justify-items-start'>
                              <div className='w-2/4 m-auto'>
                                <p className='bg-loading font-bold text-loading rounded animate-pulse '>loading</p>
                              </div>           
                              <input {...register} className='border-[1px] w-2/4 text-center rounded bg-loading text-loading border-mainborder m-auto animate-pulse' type="text"  />
                            </div>
                          </form>
                })
              }
            </div>
          </>
        :
          <div className='flex flex-col'>
            <h1 className="m-4 mb-8 text-fontcolor text-2xl border-b-2 border-border">
              { car.name }
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              {
                arr.map((item, index) => {
                  return  <div className='grid my-3 grid-cols-2 justify-items-start' key={index}>
                            <div className='w-40 text-left m-auto'>
                              <p className='text-fontcolor font-bold '>{item[0].toUpperCase() + item.slice(1)}:</p>
                            </div>
                            <input defaultValue={car[item]} {...register(item)} className='border-[1px] w-40 text-center rounded bg-background text-fontcolor border-mainborder m-auto invalid:border-pink-500 invalid:text-pink-600focus:invalid:border-pink-500 focus:invalid:ring-pink-500' type="text" />
                          </div>
                })
              }
              <div className='flex w-full justify-center'>
                <button type="submit" className='text-main px-4 py-2 bg-gradient-button rounded'> Save</button>
              </div>
            </form>
          </div>
      }
    </div>
  );
};

Vcard.propTypes = {
  car: PropTypes.object,
  loading: PropTypes.bool,
};

export default Vcard;
