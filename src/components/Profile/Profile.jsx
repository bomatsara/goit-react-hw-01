import css from './Profile.module.css';
import { firstLetterToUpper } from '../../js/utilities.js'

export default function Profile({ image, name, tag, location, stats  }) {
    return (
        <div className={ css['profile'] }>
            <div className={ css['profile__wrap'] }>
                <div className={ css['profile__image'] }>
                    <img src={image} alt=""/>
                </div>

                <div className={ css['profile__info'] }>
                    <div className={ css['profile__name'] }>{name}</div>
                    <div className={ css['profile__tag'] }>@{tag}</div>
                    <div className={ css['profile__location'] }>{location}</div>
                </div>
            </div>

            <div className={ css['profile__stats'] }>
                <ul>
                    { stats && Object.keys(stats).map((item, index) => {
                        return (
                            <li key={index} className={css['profile__stats-item']}>
                                <div className={css['profile__stats-label']}>{firstLetterToUpper(item)}</div>
                                <div className={css['profile__stats-value']}>{stats[item]}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}