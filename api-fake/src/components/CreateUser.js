import { useState } from 'react';
import axios from 'axios';

function CreateUser(){

    const[name, setName] = useState("");
    const[job, setJob] = useState("");

    function createUser(e){

        e.preventDefault();
        let user = JSON.stringify({
            name: name,
            job: job,
            
        });
        
        axios.post('https://reqres.in/api/users?page=2', user)
            .then((response)=>{
                console.log(response)
                alert(response)
            })
            .catch((error)=>{
                console.log(error)
                alert(error)
            })
    };

    return(
    <form onSubmit={createUser} className='form'>
        <h1>Formulário de cadastro</h1>

        <input
            type='text'
            placeholder='digite seu nome'
            value={name}
            onChange={(event)=>{setName(event.target.value)}}
        />

        <input
            type='text'
            placeholder='digite sua profissão'
            value={job}
            onChange={(event)=>{setJob(event.target.value)}}
        />

        <button type='subimit'>CADASTRAR</button>

    </form>
    );

}

export default CreateUser;