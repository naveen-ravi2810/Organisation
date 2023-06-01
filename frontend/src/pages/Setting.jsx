import React from 'react';
import Navbar from '../components/Navbar';
// import { useParams } from 'react-router-dom';
// import Account from '../components/Account';

const Setting = () => {
  // const { settingoption } = useParams();

  const renderComponent = () => {
    // switch (settingoption){
    //     case 'account':
    //         return <Account/>;
    //   }
  };

  return (
    <div>
        <Navbar/>
        <div className="w-3/4 p-4">{renderComponent()}</div>
    </div>
  );
};

export default Setting;