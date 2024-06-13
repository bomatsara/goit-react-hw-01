import css from './FriendListItem.module.css';
import clsx from "clsx";

export default function FriendListItem( { name, image, isOnline } ) {
    const statusClass = clsx(
        css['friends-list__status'],
        css[isOnline ? '--online' : '--offline']
    );

    return (
      <div className={ css['friends-list__item'] }>
          <div className={ css['friends-list__image'] }>
              <img src={image} alt="Avatar" />
          </div>
          <div className={ css['friends-list__name'] }>{name}</div>
          <div className={ statusClass }>{ isOnline ? 'Online' : 'Offline' }</div>
      </div>
    );
}