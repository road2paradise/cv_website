import React from 'react'
import './dashboard.styles.scss';
import Header from '../../components/navibar/navibar.component';

const DashboardPage = () => (
  <div className = 'title'>
      <h1>
        Welcome to my Dashboard
        <Header/>
      </h1>
  </div>
);

export default DashboardPage