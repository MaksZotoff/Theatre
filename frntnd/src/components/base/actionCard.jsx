import React from 'react';
import '../../stylesheets/card-style.css'
import "bootstrap/dist/css/bootstrap.min.css";

const ActionCard = props => {
    return(
        <div className="card text-center shadow">
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                
                <a href={props.link} className='btn btn-outline-success'> Добавить</a>
            </div>
        </div>
    );
}
export default ActionCard; 
