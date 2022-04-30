import React, { FormEvent, useEffect, useState } from 'react';
import { IUser } from '../../types/Types';
import axios from 'axios';

import '../userProfile/UserProfile.scss';

interface UserListProps {
    user: IUser | undefined;
}


export const UserProfile: React.FC<UserListProps> = ({user}) => {

    const [disabled, setDisabled] = useState<boolean>(true);

    const [name, setName] = useState<string | undefined>();
    const [username, setUsername] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();
    const [street, setStreet] = useState<string | undefined>();
    const [city, setCity] = useState<string | undefined>();
    const [zipcode, setZipcode] = useState<string | undefined>();
    const [phone, setPhone] = useState<string | undefined>();
    const [website, setWebsite] = useState<string | undefined>();
    const [comment, setComment] = useState<string | undefined>();     

    const setInitialValue = () => {
        setName(name => user?.name)
        setUsername(username => user?.username)
        setEmail(email => user?.email)
        setStreet(street => user?.address.street)
        setCity(city => user?.address.city)
        setZipcode(zipcode => user?.address.zipcode)
        setPhone(phone => user?.phone)
        setWebsite(website => user?.website)
        setComment(comment => '')
    }

    useEffect(() => {
        setInitialValue()
    }, [])

    useEffect(() => {
        setInitialValue()
    }, [user])
    
    const onDisable = () => {
        setDisabled(false);
    }

    const [isDirty, setDirty] = useState<boolean>(false)

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'name':
                setDirty(true)
                break
            case 'username':
                setDirty(true)
                break
            case 'email':
                setDirty(true)
                break
            case 'street':
                setDirty(true)
                break  
            case 'city':
                setDirty(true)
                break 
            case 'zipcode':
                setDirty(true)
                break 
            case 'phone':
                setDirty(true)
                break 
            case 'website':
                setDirty(true)
                break 
            case 'comment':
                setDirty(true)
                break                 
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const id = 11
        const newUser = {
            id,
            name,
            username,
            email,
            street,
            city,
            zipcode,
            phone,
            website,
            comment            
        }
        console.log(JSON.stringify(newUser))
        submitUser(newUser)

    }

    async function submitUser(data: object) {
        try {
          await axios.post<IUser>(`https://jsonplaceholder.typicode.com/users/`, data)          
        } catch (e) {
          alert(e);
        }
    }

    return (
        <div className="content">
            <div className="list-title">Профиль пользователя</div>
            <button className='btn edit' onClick={onDisable}>Редактировать</button>
            <div className="form-inner"> 

            <form className="form" action="" onSubmit={onSubmit}>
                    <label htmlFor="name"className="form-label">Name</label>
                    <input 
                        required
                        readOnly={disabled}
                        name="name" 
                        type="text"
                        id="name"
                        className="form-control"               
                        value={name || ''}                        
                        onChange={(e) => setName(e.target.value)}
                        onBlur={(e) => blurHandler(e)}
                        style={isDirty &&  name === '' ? {border: '1px solid #D91313'} : {border: '1px solid #D8D8D8'}}                       
                    />                    
                    <label htmlFor="username"className="form-label">Username</label>
                    <input 
                        required
                        readOnly={disabled}
                        name="username" 
                        type="text"
                        id="username"
                        className="form-control"               
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)} 
                        onBlur={(e) => blurHandler(e)}
                        style={isDirty &&  username === '' ? {border: '1px solid #D91313'} : {border: '1px solid #D8D8D8'}} 
                    />
                    <label htmlFor="email"className="form-label">E-mail</label>
                    <input 
                        required
                        readOnly={disabled}
                        name="email" 
                        type="email"
                        id="email"
                        className="form-control"                   
                        value={email || ''}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => blurHandler(e)}
                        style={isDirty &&  email === '' ? {border: '1px solid #D91313'} : {border: '1px solid #D8D8D8'}} 
                    />
                    <label htmlFor="street"className="form-label">Street</label>
                    <input 
                        required
                        readOnly={disabled}
                        name="street" 
                        type="text"
                        id="street"
                        className="form-control"
                        value={street || ''}
                        onChange={(e) => setStreet(e.target.value)}
                        onBlur={(e) => blurHandler(e)}
                        style={isDirty &&  street === '' ? {border: '1px solid #D91313'} : {border: '1px solid #D8D8D8'}} 
                    />
                    <label htmlFor="city"className="form-label">City</label>
                    <input 
                        required
                        readOnly={disabled}
                        name="city" 
                        type="text"
                        id="city"
                        className="form-control"
                        value={city || ''}
                        onChange={(e) => setCity(e.target.value)}
                        onBlur={(e) => blurHandler(e)}
                        style={isDirty &&  city === '' ? {border: '1px solid #D91313'} : {border: '1px solid #D8D8D8'}}     
                    />
                    <label htmlFor="zipcode"className="form-label">Zip code</label>
                    <input 
                        required
                        readOnly={disabled}
                        name="zipcode" 
                        type="text"
                        id="zipcode"
                        className="form-control" 
                        value={zipcode || ''}
                        onChange={(e) => setZipcode(e.target.value)}
                        onBlur={(e) => blurHandler(e)}
                        style={isDirty &&  zipcode === '' ? {border: '1px solid #D91313'} : {border: '1px solid #D8D8D8'}}  
                    />
                    <label htmlFor="phone"className="form-label">Phone</label>
                    <input 
                        required
                        readOnly={disabled}
                        name="phone" 
                        type="tel"
                        id="phone"
                        className="form-control"
                        value={phone || ''}
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={(e) => blurHandler(e)}
                        style={isDirty &&  phone === '' ? {border: '1px solid #D91313'} : {border: '1px solid #D8D8D8'}} 
                    />
                    <label htmlFor="website"className="form-label">Website</label>
                    <input 
                        required
                        readOnly={disabled}
                        name="website" 
                        type="text"
                        id="website"
                        className="form-control"  
                        value={website || ''}
                        onChange={(e) => setWebsite(e.target.value)}
                        onBlur={(e) => blurHandler(e)}
                        style={isDirty &&  website === '' ? {border: '1px solid #D91313'} : {border: '1px solid #D8D8D8'}} 
                    />
                    <label htmlFor="comment"className="form-label">Comment</label>
                    <textarea 
                        readOnly={disabled}
                        name="comment"
                        id="comment"
                        className="comment"
                        value={comment || ''}
                        onChange={(e) => setComment(e.target.value)}
                    /> 
                    <button disabled={disabled} className='btn submit'>Отправить</button>                   
                </form>               
                
            </div>                       
        </div>
    )
}