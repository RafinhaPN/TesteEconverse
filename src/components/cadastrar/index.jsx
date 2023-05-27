import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../../services/api';
import { useState } from 'react';
function Cadastrar() {


    const [user, setUser] = useState({
        nome_completo: '',
        email: '',
        data_nascimento: '',
        cpf: ''
    })

    const enviarInput = e => setUser({ ...user, [e.target.name]: e.target.value });
  
    const enviar = async e => {
        e.preventDefault();
       
    if(!user.nome_completo || !user.email || !user.data_nascimento || !user.cpf){
       alert("preencha o campo");
    }
    const headers = {
        'headers':{
            //os dados serao enviado em formato json
            'Content-Type': 'application/json'
        }
      }

      await api.post('/',user,headers).then((response)=>{
      console.log(response);
      })




    }

    return (
        <div>
            <h2>Cadastra se!</h2>
            <hr />
            <Form onSubmit={enviar}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                        name='nome_completo'
                        placeholder="Nome completo"
                        onChange={enviarInput}
                    />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text"
                        name='email'
                        placeholder="E-mail"
                        onChange={enviarInput}
                    />
                    <Form.Label>Data</Form.Label>
                    <Form.Control type="text"
                        name='data_nascimento'
                        placeholder="Data Nascimento"
                        onChange={enviarInput}
                    />
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text"
                        name='cpf'
                        placeholder="CPF"
                        onChange={enviarInput}
                    />
                </Form.Group>
                <Button type='submit'>Cadastrar</Button>
            </Form>
            <Link to='/listar'>voltar</Link>
        </div>
    )

}

export default Cadastrar