import React, { useEffect, useState } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { BiHelpCircle } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';

function Navbar() {

  const [userinfo, setUserInfo] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  console.log(userinfo);

  useEffect(()=>{
    fetch('/rootinfo',{
      method : 'GET',
      headers : {Authorization: `Bearer ${localStorage.getItem('Admin_token')}`}
    })
    .then(response => response.json())
    .then(data => {
      if (data.success){
        setUserInfo(data.organisation_details);
      }else{
        window.location.href = '/';
      }
    })
  },[])

  return (
    <div className='flex p-2 justify-between bg-gray-800 text-white'>
      <div className='w-1/6'>
        LOGO
      </div>
      <div className='w-1/2'>
        <div className='w-1/2 p-1 flex items-center gap-3 border-2 rounded-xl bg-white'>
            <AiOutlineSearch color='black'/>
            <input className='w-1/2 text-black outline-none' type="text" placeholder={`Search by keyword`}/>
        </div>
      </div>
      <div className='flex w-1/3'>
        <ul className='flex w-full justify-end gap-3 items-center pr-10'>
          <li><IoIosNotifications/></li>|<li><BiHelpCircle/></li>|<li>ORG:{userinfo.organisation_id}</li>
          <li onClick={()=>setDropdown(!dropdown)}>
            <IoMdArrowDropdown/>
            {/* {dropdown && <ul>
              <li>Account</li>
            </ul>} */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar