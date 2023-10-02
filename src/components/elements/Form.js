/*
 *
 * @Copyright 2023 TO WIN
 *
 */

import React from 'react';
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/init-firebase';


const Form = ({ mobile }) => {
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');

    const hanleSubmit = (e) => {
        e.preventDefault();

        const leadsCollRef = collection(db, 'leads');
        addDoc(leadsCollRef, {
            name,
            phone,
            email
        }).then(() =>{
            window.location.href = 'https://api.whatsapp.com/send?phone=5571999357987&text=Ol%C3%A1,%20acabei%20de%20me%20cadastrar%20e%20gostaria%20de%20conversar%20sobre%20meu%20site!%20'
        });
    }
    
    return (
        <form className="form" onSubmit={hanleSubmit}>
            <div className="form__input">
                <input placeholder="Seu nome" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form__input">
                <input placeholder="DDD + Whatsapp" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form__input">
                <input placeholder="Seu melhor e-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit" className={mobile ? 'mobile' : ''}>
                Quero contratar um plano!
            </button>
        </form>
    );
};
  
export default Form;
  