import React from 'react';
import { createRoot } from 'react-dom/client';

import './Admin.css';
import { AdminHome } from './Admin';
import './Master.css';
import { MasterHome } from './Master';
import './User.css';
import { UserHome } from './User';
import './Guest.css';
import { GuestHome } from './Guest';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

if (!localStorage.getItem('status')) {
  localStorage.setItem('status', 'guest');
  root.render(
    <React.Fragment>
      <GuestHome />
    </React.Fragment>
  );
} else if (localStorage.getItem('status') === 'guest') {
  root.render(
    <React.Fragment>
      <GuestHome />
    </React.Fragment>
  );
} else if (localStorage.getItem('status') === 'user') {
  root.render(
    <React.Fragment>
      <UserHome />
    </React.Fragment>
  );
} else if (localStorage.getItem('status') === 'master') {
  root.render(
    <React.Fragment>
      <MasterHome />
    </React.Fragment>
  );
} else if (localStorage.getItem('status') === 'admin') {
  root.render(
    <React.Fragment>
      <AdminHome />
    </React.Fragment>
  );
} else {
  console.log(`Error!\nstatus: ${localStorage.getItem('status')}`);
}

// json