import user from './Profile/user';
import data from './Statistics/data';
import transactions from './TransactionHistory/transactions.json';
import friendsJson from './FriendsList/friends';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendsList/FriendsList.js';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>

      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendsList friends={friendsJson}></FriendsList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
};
