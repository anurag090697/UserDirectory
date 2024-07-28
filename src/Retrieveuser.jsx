/** @format */

import React, { useContext, useState } from "react";
import { userDataContext } from "./App";

function Retrieveuser() {
  const { userData } = useContext(userDataContext);
  const [num, setnum] = useState("");
  const [data, setData] = useState();

  function searchUser(e) {
    e.preventDefault();
    // console.log("hii");
    let tm;

    userData.forEach((element) => {
      let ad = Number(element.aadhdar);
      if (ad === Number(num)) tm = element;
      //   console.log(typeof element.aadhdar);
    });
    if (!tm) alert("Not Found");
    else setData(tm);
    // console.log(tm);
    setnum("");
  }

  return (
    <div className='border-2 border-amber-500 min-h-96 mx-14 '>
      <div className='text-xl font-medium text-gray-600 border-b-2 border-r-2 w-80 text-center border-amber-500 px-4 py-2'>
        Retrieve Information
      </div>
      <form
        action='submit'
        className='text-xl font-medium flex gap-10 p-10'
        onSubmit={(e) => searchUser(e)}
      >
        <input
          value={num}
          type='number'
          name='aadhdar'
          required
          placeholder='Enter Aadhar Number'
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          onChange={(e) => setnum(e.currentTarget.value)}
        />
        <button className='bg-lime-300 text-indigo-500 py-2 px-4 rounded-xl border border-lime-500 hover:bg-lime-50 shadow-md hover:shadow-none shadow-lime-800'>
          Find
        </button>
      </form>
      <>
        {data ? (
          <div className='border-2 w-fit mx-auto border-indigo-400 flex flex-col gap-2 px-10 py-4 mb-2 text-xl font-medium text-indigo-700'>
            <h2>
              Name : <span className='text-green-600'>{data.fullname}</span>{" "}
            </h2>
            <hr className='border-amber-500' />
            <h2>
              Aadhar Number :{" "}
              <span className='text-green-600'>{data.aadhdar}</span>{" "}
            </h2>
            <hr className='border-amber-500' />
            <h2>
              Date Of Birth : <span className='text-green-600'>{data.dob}</span>{" "}
            </h2>
            <hr className='border-amber-500' />
            <h2>
              Mobile Number :{" "}
              <span className='text-green-600'>{data.mobile}</span>
            </h2>
            <hr className='border-amber-500' />
            <h2>
              Age : <span className='text-green-600'> {data.age}</span>
            </h2>
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
}

export default Retrieveuser;
