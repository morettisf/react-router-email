// import React, { Component } from 'react';
import React from 'react';
import SideBar from './sidebar';
import Emails from '../emails';
import { Link } from 'react-router';

const emailsList = Emails.inbox;

const inboxEmails = Object.keys(emailsList).map((key, index) => {
  let email = emailsList[index];
  return (
    <li key={index}>
      <Link to={'/inbox/' + email.id}>
        Subject: {email.title}
      </Link>
    </li>
  )
})

const Inbox = () => {
  return (
    <div>
      <SideBar />
      <div className='emails-box'>
        <ul>
          {inboxEmails}
        </ul>
      </div>
    </div>
  );
}

export default Inbox