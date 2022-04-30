import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Filter } from './components/filter/Filter';
import { UserList } from './components/content/UserList';
import { IUser } from './types/Types';
import axios from 'axios';
import Spinner from './components/spinner/Spinner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';

const UserProfile = lazy(() =>
  import('./components/userProfile/UserProfile')
    .then(({ UserProfile }) => ({ default: UserProfile })),
);


function App() {

  const [users, setUsers] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_limit=10');
      setUsers(response.data);
      setLoading(false);
    } catch (e) {
      alert(e);
    }
  }

  const townSortHandler = () => {
    const userTownSort = [...users.sort((a, b) => a.address.city < b.address.city ? -1 : 1)];
    setUsers(prev => userTownSort);
  }

  const companySortHabdler = () => {
    const userCompanySort = [...users.sort((a, b) => a.company.name < b.company.name ? -1 : 1)];
    setUsers(prev => userCompanySort);
  }  

  const onUserSelected = (id: number) => {
    fetchUser(id);
    
  }

  async function fetchUser(id: number | null) {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  } 

  return (
    <BrowserRouter>
      <div className="container">
      <Filter onTownSort={townSortHandler} onCompanySort={companySortHabdler}/>
      <Suspense fallback={<Spinner/>}>        
        <Routes>
          <Route path='/' element={
            !(loading) ? <UserList users={users} onUserSelected={onUserSelected}/> : <Spinner/>
          }/>
          <Route path='/detaile' element={
            !(loading) ? <UserProfile user={user}/>  : <Spinner/> 
          }/>
        </Routes> 
      </Suspense>       
      </div>    
    </BrowserRouter>    
  );
}

export default App;
