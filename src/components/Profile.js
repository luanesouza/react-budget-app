import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Chart from './Chart';

const Profile = () => {

  return (
    <>
    <nav>
      <h1> Welcome back, Annie </h1>
    </nav>

    <section>
      <Chart />
    </section>
    </>
  )
}

export default Profile;
