import react, { useEffect, useState } from 'react'
import api from '../../services/api';
import { Link } from 'react-router-dom'

import Table from 'react-bootstrap/Table';

function Listar() {
  const [users, setUsers] = useState([]);

  async function ListarUsers() {
    api.get('/clientes').then((response) => {
      console.log(response.data.Clientes);
      setUsers(response.data.Clientes)
    })
  }

  useEffect(() => {
    ListarUsers()
  }, [])

  return (
   
    <div>
     <h2>Listar de Usuarios</h2>
     <button><Link to='/cadastrar'>cadastrar</Link></button>
       <hr />
       <Table className='hover'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Acões</th>
          </tr>
        </thead>
        {users.map(user => (
          <tbody key={user.id}>
            <tr className='m-3'>
              <td>{user.nome_completo}</td>
              <td>
                <button ><Link to={"/editar/"+user.id}>Editar</Link></button>
                <button ><Link>visualizar</Link></button>
                <button ><Link>Apagar</Link></button>
              </td>
            </tr>
          </tbody>
        ))}
    </Table>
   </div>
  
  )
}

export default Listar;
