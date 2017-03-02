import React from 'react';
import Spam from './spam';
import { Link } from 'react-router'

const SideBar = (props) => {
  return (
    <div id='sidebar'>
      <div><Link to={'/inbox'}>Inbox</Link></div>
      <div><Link to={'/spam'}>Spam</Link></div>
    </div>
  );
}

export default SideBar