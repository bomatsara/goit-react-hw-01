import Section from "./layout/Section/Section";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from '../data/userData.json';
import friendData from '../data/friendData.json';
import transactionData from '../data/transactionJson.json';

export default function App() {
    return (
        <>
            <Section className='section-profile'>
                <Profile
                    image={userData.avatar}
                    name={userData.username}
                    tag={userData.tag}
                    location={userData.location}
                    stats={userData.stats} />
            </Section>

            <Section className='section-friend-list'>
                <FriendList friends={friendData} />
            </Section>

            <Section className='transaction-history'>
                <TransactionHistory items={transactionData} />
            </Section>
        </>
    );
}