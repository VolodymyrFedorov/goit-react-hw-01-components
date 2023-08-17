import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from "./FriendList/FriendList";
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';


// const rootStyles = {
//  display: 'flex',
//  height: '100vh',
//  justifyContent: 'center',
//  alignItems: 'center',
//  fontSize: 40,
//  color: '#010101'
// };




export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

</>
    
  );
};
