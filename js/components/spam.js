import React from 'react';
import SideBar from './sidebar';
import Emails from '../emails';
import { Link } from 'react-router';

const emailsList = Emails.spam;

const spamEmails = Object.keys(emailsList).map((key, index) => {
  let email = emailsList[index];
  return (
    <li key={index}>
      <Link to={'/spam/' + email.id}>
        Subject: {email.title}
      </Link>
    </li>
  )
})

const Spam = (props) => {
  return (
    <div>
      <SideBar />
      <div className='emails-box'>
        <ul>
          {spamEmails}
        </ul>
      </div>
    </div>
  );
}

export default Spam