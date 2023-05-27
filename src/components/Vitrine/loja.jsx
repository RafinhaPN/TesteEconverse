import React, { useState, useEffect } from 'react';
import './loja.css';
import api from '../../services/api';


function Loja() {
    const [produtos, setProdutos] = useState([]);
    const Listar_Produtos = async e => {
        await api.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json').then((response) => {
            console.log(response.data.products);
            setProdutos(response.data.products);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        Listar_Produtos();
    }, [])
       return (
            <div className='container'>
                <h3>Produtos relacionados</h3>
                <div className='loja'>
                    <div className='painel'>
                        <span className='categorias' >
                            <p className='celular'>celular</p>
                            <p className='texto'>acessório</p>
                            <p className='texto'>tablets</p>
                            <p className='texto'>notebook</p>
                            <p className='texto'>tvs</p>
                            <p className='texto'>ver todos</p>
                        </span>
                    </div>
                    {produtos.map((produto => (
                        <div key={produto.productName} className='vitrine'>
                            <img src={produto.photo} alt="imagem" />
                            <div className='description'>
                                <p>{produto.productName}</p>
                                <p>{produto.descriptionShort}</p>
                                <p>{produto.price}</p>
                            </div>
                            <button  className='btn_comprar'>Comprar</button>
                        </div>
                    )))}
                </div>
              
            </div>
        )


    }
    export default Loja;

   