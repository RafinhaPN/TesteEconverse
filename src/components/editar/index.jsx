import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../../services/api';
import { useState, useEffect } from 'react';
function Editar() {
    const {id} = useParams();
    console.log(id);
     
    const[nome, setNome_completo] = useState('')
    const[ email , setEmail] = useState('')
    const[data_nascimento , setData_nascimento] = useState('')
    const [cpf, setCpf] = useState('')
   
    useEffect(()=>{
        const Listarcliente = async () =>{
          api.get('/cliente/'+ id).then((response)=>{
        console.log(response.data.Cliente); 
        setNome_completo(response.data.Cliente[0].nome_completo)
        setEmail(response.data.Cliente[0].email)
        setData_nascimento(response.data.Cliente[0].data_nascimento)
        setCpf(response.data.Cliente[0].cpf)
          })
        } 
        Listarcliente();   
    },[id])

 //console.log(nome,email,data_nascimento,cpf);  



  
  
    const EditCliente = async e => {

        const headers={
            'Content-Type':'application/json'
           }

        e.preventDefault();
       await api.put('/cliente/'+ id ,{nome,email,data_nascimento,cpf},{headers})
       .then((response)=>{
       console.log(response)
       })
    }

    return (
        <div>
            <h2>Atualizar Dados do Cliente!</h2>
            <hr />
            <Form onSubmit={EditCliente} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ID</Form.Label>
                    <Form.Control type="text"
                        name='codigo'
                        placeholder="id cliente"
                
                    />
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                        name='nome_completo'
                        placeholder="Nome completo"
                        value={nome}
                        onChange={e => setNome_completo(e.target.value)}
                    />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text"
                        name='email'
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Label>Data</Form.Label>
                    <Form.Control type="text"
                        name='data_nascimento'
                        placeholder="Data Nascimento"
                       value={data_nascimento}
                       onChange={e => setData_nascimento(e.target.value)}
                    />
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text"
                        name='cpf'
                        placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                </Form.Group>
                <Button type='submit'>Atualizar</Button>
            </Form>
            <Link to='/listar'>voltar</Link>
        </div>
    )

}

export default Editar