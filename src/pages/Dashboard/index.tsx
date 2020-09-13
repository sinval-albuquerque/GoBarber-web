import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

const Dashboard: React.FC = () => (
  <>
    <Link to="/">
      <FiLogIn />
      Sair
    </Link>
    <h1>Dashboard</h1>
  </>
);

export default Dashboard;
