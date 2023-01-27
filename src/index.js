import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Statistics } from 'components/Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import data from 'components/Data/data.json';
import user from 'components/Data/user.json';
import friends from 'components/Data/friends.json';
import transactions from 'components/Data/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>
);