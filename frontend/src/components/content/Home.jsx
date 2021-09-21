import React from 'react';
import './home.css'

function Home(props) {
    return ( 
        <div className="Home">
            <div className="title">Bem Vindo!</div>
            <hr/>
            <div className="subtitle">Sistema criado para organizar os carros cadastrados em um Lava a jato</div>
        </div>
     );
}

export default Home;