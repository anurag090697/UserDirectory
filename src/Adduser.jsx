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

  function handleChange(n, v) {
    let tm = formData;
    tm[n] = v;
    setFormData(tm);
    // console.log(formData);
    if (n === "dob") {
      let d = new Date(formData.dob);
      let y = d.getFullYear();
      let td = new Date();
      let ans = Number(td.getFullYear()) - Number(y);

      ageref.current.value = ans;
    }
  }

  function handlesubmit(e) {
    e.preventDefault();
    // console.log(userData);
    setUserData(formData);
    setFormData({ fullname: "", aadhdar: "", mobile: "", age: "", dob: "" });
    setformshow("hidden");
  }

  return (
    <div className='border-2 border-amber-500 min-h-96  max-w-full mx-14 relative'>
      <div className='text-xl font-medium text-gray-600 border-b-2 border-r-2 w-80 text-center border-amber-500 px-4 py-2'>
        Add New Person
      </div>
      <table className='my-2 w-full max-w-full '>
        <thead className='bg-emerald-300 w-full '>
          <tr className='w-full mx-auto'>
            <th className='py-2 px-3'>Name</th>
            <th className='py-2 px-3'>Date Of Birth</th>
            <th className='py-2 px-3'>Aadhar Number</th>
            <th className='py-2 px-3'>Mobile Number</th>
            <th className='py-2 px-3'>Age</th>
            <th className='py-2 px-3'>Action</th>
          </tr>
        </thead>
        <>
          {userData.map(() => {
            return (
              <tr key={idx} className='bg-emerald-300 w-full max-w-full'>
                <td>{ele.fullname}</td>
                <td>{ele.dob}</td>
                <td>{ele.aadhdar}</td>
                <td>{ele.mobile}</td>
                <td>{ele.age}</td>
                <td onClick={() => deleteuser(idx)}>Delete</td>
              </tr>
            );
          })}
        </>
      </table>
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
          onChange={(e) =>
            handleChange(e.currentTarget.name, e.currentTarget.value)
          }
        />
        <input
          type='date'
          name='dob'
          required
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          onChange={(e) =>
            handleChange(e.currentTarget.name, e.currentTarget.value)
          }
        />
        <input
          type='number'
          name='aadhdar'
          required
          placeholder='Aadhar Number'
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          //   min={100000000000}
          max={999999999999}
          onChange={(e) =>
            handleChange(e.currentTarget.name, e.currentTarget.value)
          }
        />
        <input
          type='tel'
          name='mobile'
          placeholder='Mobile Number'
          required
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          minLength={10}
          maxLength={10}
          onChange={(e) =>
            handleChange(e.currentTarget.name, e.currentTarget.value)
          }
        />
        <input
          type='number'
          name='age'
          //   value={formData.age ? formData.age : ""}
          ref={ageref}
          placeholder='Age'
          required
          className='text-center p-1 rounded-lg border border-green-700 outline-emerald-500'
          onChange={(e) =>
            handleChange(e.currentTarget.name, e.currentTarget.value)
          }
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
