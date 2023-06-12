import React, { useEffect, useState } from 'react';
import {AiFillEdit, AiOutlineArrowDown, AiOutlineArrowRight} from 'react-icons/ai';

function Account() {

  const [showaboutorganisation, setShowAboutOrganisation] = useState(true);
  const [showaccountdetails, setShowAccountDetails] = useState(true);

  useEffect(()=>{
    fetch('/user')
  },[])

  return (
    <div className='p-3 space-y-7 h-screen'>
      <h1 className='font-bold text-5xl'>ORGANISATION SETTINGS</h1>

      <div className='w-full'>
        <div className='border-2 p-1 space-y-4'> 
          <div className='flex justify-between font-bold text-3xl font-serif '>
            <div className='flex hover:cursor-pointer items-center'  onClick={()=>setShowAboutOrganisation(!showaboutorganisation)}>
              <span>{showaboutorganisation ? <AiOutlineArrowDown/> : <AiOutlineArrowRight/>}</span><span>  </span>  About Organisation
            </div>
            <div>
              <AiFillEdit/>
            </div>
          </div>
          {showaboutorganisation && (
            <div>
              <hr className=''/>
            <div className='text-xl'>
              This is a mangement that handles jfdbisjbgrvfijbjwn dojcvajdcaouhcw ciwdvb  vubfv fv o vefj  s n jo;ncvj f bov ;ojb jlb ;obdcjv ;oc jsdnfvpuuhfgjtnv;oudv etjv;ucdbveaofhvuofbnvsfbvirkfhbvub i rbiwv
            </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <div className='border-2 p-1 space-y-4'> 
          <div className='flex justify-between font-bold text-3xl font-serif'>
          <div className='flex hover:cursor-pointer items-center'  onClick={()=>setShowAccountDetails(!showaccountdetails)}>
              <span>{showaccountdetails ? <AiOutlineArrowDown/> : <AiOutlineArrowRight/>}</span> <span>  </span> About Organisation
            </div>
            <div>
              <AiFillEdit/>
            </div>
          </div>
          {showaccountdetails && (
            <div>
              <hr className=''/>
          <div className='text-xl'>
            place some id details, <br />
            user id <br />
            and some thing
          </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Account