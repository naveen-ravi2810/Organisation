// import React from 'react'; 
// import {redirect} from 'react-router-dom'

// function SettingBar() {
  

//   function render_to_account() {
//     redirect('/settings/accounts');
//   }

//   function render_to_users() {
//     redirect('/settings/users');
//   }

//   function render_to_roles() {
//     redirect('/settings/roles');
//   }

//   return (
//     <div className='w-1/12 h-screen bg-gray-500 p-3'>
//       <ul className='py-3'>
//         <li className='py-3' onClick={()=>render_to_account}>
//           Account
//         </li>
//         <li className='py-3' onClick={()=>render_to_users}>
//           Users
//         </li>
//         <li className='py-3' onClick={()=>render_to_roles}>
//           Roles
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default SettingBar;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function SettingBar() {
  const navigate = useNavigate();

  function render_to_account() {
    navigate('/setting/account');
  }

  function render_to_users() {
    navigate('/setting/users');
  }

  function render_to_roles() {
    navigate('/setting/roles');
  }

  return (
    <div className='w-1/12 h-screen bg-gray-500 p-3'>
      <ul className='py-3'>
        <li className='py-3' onClick={render_to_account}>
          Account
        </li>
        <li className='py-3' onClick={render_to_users}>
          Users
        </li>
        <li className='py-3' onClick={render_to_roles}>
          Roles
        </li>
      </ul>
    </div>
  );
}

export default SettingBar;
