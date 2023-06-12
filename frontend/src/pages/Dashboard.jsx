import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function Dashboard() {

  const [organisationdetails, setOrganisationDetails] = useState([]);
  console.log(organisationdetails);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/organisationinfo', {
          method: 'GET',
          headers: { Authorization: `Bearer ${localStorage.getItem('Admin_token')}` },
        });
        const data = await response.json();
        setOrganisationDetails(data.details);
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className='pt-3'>
        <hr />
        <Navbar/>
        <hr />
        <div>
          Oragnisation Type : 
        </div>
    </div>
  )
}

export default Dashboard