import React from 'react';
import { getData, removeUserSession } from './Utils/Common';
function Dashboard(props) {
  getData();
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  return (
    <div>
      Welcome ! <span id="roh"></span> <br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );

}

export default Dashboard;
