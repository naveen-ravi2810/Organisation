import React, { useState } from 'react';

export default function Home() {

    const [logintype, setLoginType] = useState('user');
    const [organisationcode, setOragnisationCode] = useState('');
    const [username, setUserName] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [rootpassword, setRootPassword] = useState('');
    const [organisationemail, setOragnisationEmail] = useState('');
    const [error, setError] = useState('');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const button_status = (logintype==="user" && organisationcode.length === 12 && username.length>8 && userpassword.length>7) || (logintype==="rootuser" && organisationemail.match(validRegex) && rootpassword.length>7 )

    async function btn_login(event){
        event.preventDefault();
        if (logintype === 'user'){
            const response = await fetch('/userlogin',{
                method : 'POST',
                headers : { 'Content-Type': 'application/json' },
                body : JSON.stringify({ organisationcode, username, userpassword })
            });
            const data = await response.json();
            if (data.success){
                localStorage.setItem('Token',data.access_token);
            }else{
                setError(data.msg);
            }
        }else{
            const response = await fetch('/rootlogin',{
                method : 'POST',
                headers : { 'Content-Type': 'application/json' },
                body : JSON.stringify({ organisationemail, rootpassword })
            });
            const data = await response.json();
            if (data.success){
                localStorage.setItem('Admin_token',data.access_token);
                window.location.href = '/dashboard';
            }else{
                setError(data.msg);
                console.log(data.success);
            }
        }
    }
   

  return (
    <div>
        <div className=' md:flex justify-center md:p-20 p-10'>
            <div className='md:flex md:w-1/2 justify-center'>
                <div className='md:w-1/2 md:pr-16'>
                    <img className='w-12 h-12 md:w-16 md:h-16' src="https://thumbs.dreamstime.com/b/icon-school-bag-drawn-outline-style-gray-background-simple-black-line-logo-websites-mobile-apps-other-design-needs-80631841.jpg" alt="" />
                    <p className='pt-10 text-2xl font-mono'>SIGN IN</p>
                    <div>
                        {/* <form onChange={()=>setLoginType()} > */}
                            <div className='border-2 my-2 p-1 shadow-lg hover:cursor-pointer' onClick={()=>setLoginType("rootuser")}>
                                <input type='radio'  checked={(logintype==="rootuser")} name='logintypeuser'  /> <span className='hover:cursor-default'>ROOT USER</span>
                                <p className=' text-xs'> Organisation owner that performs tasks requiring unrestricted access.</p>
                                {/* <a className='text-xs font-thin text-blue-500 hover:underline' href="#">learn more.</a> */}
                            </div>
                            <div className='border-2 my-2 p-1 shadow-lg hover:cursor-pointer' onClick={()=>setLoginType("user")}>
                                <input type='radio'  checked={(logintype==="user")} name='logintypeuser'  /> <span className='hover:cursor-default'>USER</span>
                                <p className=' text-xs'>User within an account that performs daily tasks.</p>
                                {/* <a className='text-xs font-thin text-blue-500 hover:underline' href="#">learn more.</a> */}
                            </div>
                        {/* </form> */}
                    </div>
                    <div className='pb-6'>
                        {(logintype === "user")?(
                            <div>
                                <form>
                                    <div className='pt-3 pb-1'>
                                        <label className='pb-2 font-bold'>Organisation Code</label>
                                    </div>
                                    <div>
                                        <input className='p-1 border-2 w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' 
                                        type='number' placeholder='12-digit ##87654321##' value={organisationcode} onChange={(e)=>setOragnisationCode(e.target.value)}/>
                                    </div>
                                    <div className='pt-3 pb-1'>
                                        <label className='pb-2 font-bold'>User Name</label>
                                    </div>
                                    <div>
                                        <input className='p-1 border-2 w-full' type="text" placeholder='' 
                                        value={username} onChange={(e)=>setUserName(e.target.value)}/>
                                    </div>
                                    <div className='pt-3 pb-1'>
                                        <label className='pb-2 font-bold'>Password</label>
                                    </div>
                                    <div>
                                        <input className='p-1 border-2 w-full' type="password" placeholder='' value={userpassword} onChange={(e)=>setUserPassword(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                        ):(
                            <div>
                                <form>
                                    <div className='pt-3 pb-1'>
                                        <label className='pb-2 font-bold'>Organisation Email</label>
                                    </div>
                                    <div>
                                        <input className='p-1 border-2 w-full' type="email" placeholder='someone@example.com' value={organisationemail} onChange={(e)=>setOragnisationEmail(e.target.value)}/>
                                    </div>
                                    <div className='pt-3 pb-1'>
                                        <label className='pb-2 font-bold'>Password</label>
                                    </div>
                                    <div>
                                        <input className='p-1 border-2 w-full' type="password" placeholder='' value={rootpassword} onChange={(e)=>setRootPassword(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                    <div>
                        {error && <div>
                            {error}
                            </div>}
                    </div>
                    <div className='p-1'>
                        <button className='border-2 bg-blue-600 p-1 w-full font-bold text-white' onClick={btn_login} disabled={!button_status}>Next</button>
                    </div>
                    <div className='p-1'>
                        <p className='text-xs'>By continuing, you agree to the Service Customer Agreement 
                        or other agreement for services, and the Privacy Notice. 
                        This site uses essential cookies. See our Cookie Notice for more information.</p>
                    </div>
                    <div className='flex justify-between items-center py-5'>
                        <hr  className='border-1 w-full'/>
                        <p className='text-s'>or</p>
                        <hr  className='border-1 w-full'/>
                    </div>
                    <div>
                        <button className='font-semibold border-2 p-1 w-full shadow-inner'>Create a new Service account</button>
                    </div>
                </div>
                <div className='w-1/2 hidden md:block'>
                    Advertise
                </div>
            </div>
        </div>   
    </div>
  )
}
