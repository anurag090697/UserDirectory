/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import { userDataContext } from "./App";

function Adduser(props) {
  //   console.log(userData);
  const { userData, setUserData } = useContext(userDataContext);
  const [formshow, setformshow] = useState("hidden");
  const [formData, setFormData] = useState({
    fullname: "",
    aadhdar: "",
    mobile: "",
    age: "",
    dob: "",
  });

  let ageref = useRef();

  function handleChange(e) {
    let tm = formData;
    tm[e.target.name] = e.target.value;
    setFormData(tm);
    // console.log(formData);
    if (e.target.name === "dob") {
      let d = new Date(formData.dob);
      let y = d.getFullYear();
      let td = new Date();
      let ans = Number(td.getFullYear()) - Number(y);
      let tm = formData;
      tm.age = ans;
      setFormData(tm);
      ageref.current.value = ans;
    }
  }
  function deleteuser(i) {
    let tm = userData.filter((ele, idx) => {
      return idx !== i ? ele : "";
    });
    setUserData(tm);
    // console.log(tm);
  }
  function handlesubmit(e) {
    e.preventDefault();

    setUserData([...userData, formData]);
    setFormData({ fullname: "", aadhdar: "", mobile: "", age: "", dob: "" });
    setformshow("hidden");
  }

  return (
    <div className='border-2 border-amber-500 min-h-96  max-w-full mx-14 relative'>
      <div className='text-xl font-medium text-gray-600 border-b-2 border-r-2 w-80 text-center border-amber-500 px-4 py-2'>
        Add New Person
      </div>
      <table className='my-2 w-full max-w-full text-center'>
        <thead className='w-full'>
          <tr className='w-full border border-rose-600 bg-emerald-300'>
            <th className='py-2 px-3'>Name</th>
            <th className='py-2 px-3'>Date Of Birth</th>
            <th className='py-2 px-3'>Aadhar Number</th>
            <th className='py-2 px-3'>Mobile Number</th>
            <th className='py-2 px-3'>Age</th>
            <th className='py-2 px-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length === 0 ? (
            <tr>
              <td>none</td>
            </tr>
          ) : (
            userData.map((ele, idx) => {
              return (
                <tr
                  key={idx}
                  className='bg-emerald-300 w-full my-2 border border-indigo-600'
                >
                  <td>{ele.fullname}</td>
                  <td>{ele.dob}</td>
                  <td>{ele.aadhdar}</td>
                  <td>{ele.mobile}</td>
                  <td>{ele.age}</td>
                  <td>
                    {" "}
                    <button
                      className='text-blue-600 underline hover:no-underline font-medium'
                      onClick={() => deleteuser(idx)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {/* <>
        {userData.length === 0
          ? ""
          : userData.map((ele, idx) => {
              return (
                <div key={idx} className='flex'>
                  <h3>{ele.fullname}</h3>
                  <h3>{ele.dob}</h3>
                  <h3>{ele.aadhdar}</h3>
                  <h3>{ele.mobile}</h3>
                  <h3>{ele.age}</h3>
                  <button onClick={() => deleteuser(idx)}>Delete</button>
                </div>
              );
            })}
      </> */}
      <form
        action='submit'
        className={`flex bg-emerald-300 py-4 w-full  justify-around items-center ${formshow}`}
        onSubmit={(e) => handlesubmit(e)}
      >
        <input
          type='text'
          placeholder='Full Name'
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          name='fullname'
          required
          onChange={(e) => handleChange(e)}
        />
        <input
          type='date'
          name='dob'
          required
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          onChange={(e) => handleChange(e)}
        />
        <input
          type='number'
          name='aadhdar'
          required
          placeholder='Aadhar Number'
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          //   min={100000000000}
          max={999999999999}
          onChange={(e) => handleChange(e)}
        />
        <input
          type='tel'
          name='mobile'
          placeholder='Mobile Number'
          required
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          minLength={10}
          maxLength={10}
          onChange={(e) => handleChange(e)}
        />
        <input
          type='number'
          name='age'
          //   value={formData.age ? formData.age : ""}
          ref={ageref}
          placeholder='Age'
          required
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          onChange={(e) => handleChange(e)}
        />
        <button>Save</button>
      </form>
      <button
        onClick={() => {
          setformshow("");
        }}
        className='absolute bottom-2 right-2 bg-lime-300 p-2 rounded-lg border border-lime-700 font-medium shadow-md hover:shadow-none text-indigo-600 hover:bg-lime-50 shadow-lime-800'
      >
        Add New User
      </button>
    </div>
  );
}

export default Adduser;
