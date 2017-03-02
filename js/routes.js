import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import EmailsIndex from './components/emails-index';
import Inbox from './components/inbox';
import Spam from './components/spam';
import App from './components/app';
import EmailContainerInbox from './components/email-container-inbox';
import EmailContainerSpam from './components/email-container-spam';

export default (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={EmailsIndex} />
      <Route path='/inbox' component={Inbox} />
      <Route path='/inbox/:emailId' component={EmailContainerInbox} />
      <Route path='/spam' component={Spam} />
      <Route path='/spam/:emailId' component={EmailContainerSpam} />
    </Route>
  </Router>
);