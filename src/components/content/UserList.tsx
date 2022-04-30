import React from 'react';
import { IUser } from '../../types/Types';
import { UserInfo } from '../userInfo/UserInfo';

import '../content/UserList.scss';

interface UserListProps {
    users: IUser[];
    onUserSelected: (id: number) => void;
}



export const UserList: React.FC<UserListProps> = ({users, onUserSelected}) => {    

    return (
        <div className="content">
            <div className="list-title">Список пользователей</div>
            {users.map(user => 
                <UserInfo key={user.id} user={user} onUserSelected={onUserSelected}/>             
            )}
            <div className="list-count">Найдено {users.length} пользователей</div>         
        </div>
    )
}