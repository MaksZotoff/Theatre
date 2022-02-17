
import React, { Component } from "react";
import axios from "axios";

import '../../stylesheets/App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import { connect } from "react-redux";
import { deletePerformance } from "../../actions/performance";

class PerformanceCard extends Component {
    constructor(props) {
    super(props);
    this.removePerformance = this.removePerformance.bind(this);
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


    removePerformance() {
        this.props
          .deletePerformance()
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


            <div className="performances"> 
                {this.state.performances.map((performances) => 
                    <div className="performancecard" key ={performances.id_performance}>
                        <h4> {performances.title}</h4>
                            <ul> 
                                <center>
                                    <li>Автор: {performances.autor}</li>
                                    <li>Длительность: {performances.duration}</li>
                                    <li>Жанр: {performances.genre}</li>
                                </center>
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
      performances: state.performances,
    };
  };

export default connect(mapStateToProps, { deletePerformance })(PerformanceCard);
