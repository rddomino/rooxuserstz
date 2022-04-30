import React from 'react';
import '../filter/Filter.scss';

interface UserListProps {
    onTownSort: () => void;
    onCompanySort: () => void;
}


export const Filter: React.FC<UserListProps> = ({onTownSort, onCompanySort}) => {

    return (
        <div className="aside">
            <div>Сортировка</div>
            <button className="btn town" onClick={() => onTownSort()}>по городу</button>
            <button className="btn company" onClick={() => onCompanySort()}>по компании</button>
        </div>
    )
}
