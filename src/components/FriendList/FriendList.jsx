import css from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem.jsx';

export default function FriendList({ friends }) {
    return (
        <ul className={ css['friends-list'] }>
            {
                friends.map(( {avatar, name, isOnline, id} ) => {
                    return (
                        <li key={id}>
                            <FriendListItem
                                name={name}
                                image={avatar}
                                isOnline={isOnline}
                            />
                        </li>
                    );
                })
            }
        </ul>
    )
}