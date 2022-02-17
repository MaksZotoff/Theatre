import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'

export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      performances: []
    };
  }
  
  componentDidMount() {
    axios.get(`http://localhost:4000/performance`)
      .then(res => {
        const performances = res.data;
        this.setState({ performances });
      })
  }




  render() {
    return (
      <div className="content">
        <div className="lect">
          
              <div className="tablelect" >
                <Table striped bordered hover >
                  <thead>
                    <tr >

                      <th >Название</th>
                      <th >Автор</th>
                      <th >Длительность</th>
                      <th >Жанр</th>

                    </tr>
                  </thead>

                  <tbody >
                    {this.state.performances.map((performances) => 
                      <tr key ={performances.id_performance}>

                        <td>{performances.title}</td>
                        <td>{performances.autor}</td>
                        <td>{performances.duration}</td>
                        <td>{performances.genre}</td>

                      </tr>
                    )}
                  </tbody>


                </Table>

              </div>
        </div>




      </div>
    );
  }
}





/*
export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      performances: []
    };
  }

  
  componentDidMount() {
    axios.get(`http://localhost:8080/performance`)
      .then(res => {
        const performances = res.data;
        this.setState({ performances });
      })
  }

  render() {
    return (
      <div className="content">
        <div className="lect">
          
              
                
          {this.state.performances.map((performances) => 
                <div className="tablelect" >  
                  <h1> {performances.id_course} КУРС</h1>
                  <Table striped bordered hover >
                  <thead >
                  
                    <tr >
                      <th>ID предмета</th>
                      <th>Название</th>
                      <th>Число участников</th>
                      <th>Дата начала</th>
                      <th>Ведет//ID пользователя</th>
                    </tr>
                  </thead>

                  <tbody >
                      <tr key ={performances.id_course}>
                        <td>{performances.id_performance}</td>
                        <td>{performances.name_performance}</td>
                        <td>{performances.numb_entries}</td>
                        <td>{performances.date_start}</td>
                        <td>{performances.id_user}</td>

                      </tr>

                  </tbody>
                
              
                </Table>

              </div>  
                )}
              
        </div>

      </div>
    );
  }
}
*/


























/*
const BoardUser = () => {
  const [ performances ] = useState([]);
  return(
      <Table striped bordered hover >
                  <thead >
                    <tr >
                      <th>ID</th>
                      <th>Название</th>
                      <th>Число участников</th>
                      <th>Дата начала</th>
                    </tr>
                  </thead>

              {performances.map((performance, index) => {

                return(

                  <tbody key ={index}>
                    <tr >{index + 1}
                      <td>{performance.id_performance}</td>
                      <td>{performance.name_performance}</td>
                      <td>{performance.numb_entries}</td>
                      <td>{performance.date_start}</td>
                    </tr>
                  </tbody>  
  
                );
                })}
        </Table>



  )
}
export default BoardUser;
*/