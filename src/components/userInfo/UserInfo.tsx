import React from 'react';
import { IUser } from '../../types/Types';
import { Link } from 'react-router-dom';

import '../userInfo/UserInfo.scss';

interface UserListProps {
    user: IUser;
    onUserSelected: (id: number) => void;
}

/* const onUserSelected = (id: number) => {
    console.log(id);
    console.log(user[id])
} */

export const UserInfo: React.FC<UserListProps> = ({user, onUserSelected}) => {
    return (
            <div className="list-items">
                <div>
                    <div className="list-items__fio">ФИО:</div>
                    <div className="list-items__fio">город:</div>
                    <div className="list-items__fio">компания</div>
                </div>
                <div className="list-items__data">                  
                    <div className="list-items__d">{user.name}</div>
                    <div className="list-items__d">{user.address.city}</div>
                    <div className="list-items__d">{user.company.name}</div>
                </div>
                {/* <a href="/" className="detaile" onClick={onUserInfo(user.id)}>Подробнее</a> */}
                {/* <button className="detaile" onClick={() => onUserSelected(user.id)}>Подробнее</button> */}
                <button className="detaile" onClick={() => onUserSelected(user.id)}> 
                    <Link to="/detaile">Подробнее</Link> 
                </button>
            </div>
    )
}