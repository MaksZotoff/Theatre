import React, { Component } from "react";

import UserService from "../../services/user.service";
import img from '../assets/pravila.jpg'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="cont">


        <div className="inf">
          <h1>{this.state.content}</h1>
        </div>

          <div className="timest">
            <h3> 
            <center>
                Режим работы кассы театра  
            </center>
            </h3>
            <br/>
            
            <h4>
              <ul>
                    Вторник- Суббота с 11.00 до 18.30. Перерыв с 14:30 до 15:00
              </ul>
            
              <ul>
                Воскресенье - понедельник  – с 14.30 до 18:00
              </ul>
            </h4>
          
       <br/>

        <h1>
          Правила посещения театра
        </h1>

        <br />
        <img src={img} width="70%" height="70%" alt=""/>

        </div>

      </div>
    );
  }
}
