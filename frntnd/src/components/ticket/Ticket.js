
import React, { Component } from "react";
import axios from "axios";

import '../../stylesheets/App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import { connect } from "react-redux";
import { deleteTicket } from "../../actions/ticket";

class TicketCard extends Component {
    constructor(props) {
    super(props);
    this.removeTicket = this.removeTicket.bind(this);
    this.state = {
        tickets: []
    };
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/ticket`)
        .then(res => {
            const tickets = res.data;
            this.setState({ tickets });
        })
    }


    removeTicket() {
        this.props
          .deleteTicket()
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          });
      }


    render() {
        return (
        <div className="content">



            <div className="tickets"> 
                {this.state.tickets.map((tickets) => 
                    <div className="ticketcard" key ={tickets.id_ticket}>
                       
                            <ul>
                                <li>Место: {tickets.place}</li>
                                <li>Цена: {tickets.price}</li>
                                
                            </ul>

                    </div>
                )}
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      tickets: state.tickets,
    };
  };

export default connect(mapStateToProps, { deleteTicket })(TicketCard);
