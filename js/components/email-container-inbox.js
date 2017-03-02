import React from 'react';
import SideBar from './sidebar';
import Emails from '../emails';

const Email = (props) => {
  const emailId = props.params.emailId
  const emailInfo = Emails.inbox[emailId]

  return (
    <div>
      <SideBar />
      <div className='email'>
        <p><strong>From: {emailInfo.from}</strong></p>
        <p><strong>To: {emailInfo.to}</strong></p>
        <p><strong>Subject: {emailInfo.title}</strong></p>
        <p><strong>Content: {emailInfo.content}</strong></p>
      </div>
    </div>
  );
}

export default Email