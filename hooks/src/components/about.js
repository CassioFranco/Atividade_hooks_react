import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
                <div className='buttons'>
                    <Link to="/tasklist">
                        <button>TaskList</button>
                    </Link>
                    <Link to="/about">
                        <button>About</button>
                    </Link>
                </div>
                <h2>Sobre o Aplicativo</h2>
                <p>Este aplicativo é um gerenciador de tarefas simples para ajudar você a organizar suas atividades diárias.</p>
            </div>
            );
};

            export default About;
