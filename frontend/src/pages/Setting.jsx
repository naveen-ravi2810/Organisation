import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import Account from '../components/Account';
import Users from '../components/Users';
import Roles from '../components/Roles';
import SettingBar from '../components/SettingBar';

const Setting = () => {
  const { name: settingoption } = useParams();

  const renderComponent = () => {
    switch (settingoption) {
      case 'account':
        return <Account />;
      case 'users':
        return <Users />;
        case 'roles':
          return <Roles />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex w-full' >
        <SettingBar/>
        <div className="w-full">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Setting;
