import React from 'react';

import Navbar from '../layout/Navbar';

function Dashboard(props) {
  return (
    <Navbar {...props}>
      <span>Display some trees!</span>
    </Navbar>
  );
}

export default Dashboard;
