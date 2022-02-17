import React, { Component } from "react";
import { connect } from "react-redux";
import { createTicket } from "../../actions/ticket";


class AddTicket extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeIdTicket = this.onChangeIdTicket.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeIdPerformance = this.onChangeIdPerformance.bind(this);


        this.saveTicket = this.saveTicket.bind(this);
        this.newTicket = this.newTicket.bind(this);

        this.state = {
            id_ticket: null,
            place: "",
            price: null,
            id_performance: "",
            submitted: false,
        };
    }


    onChangeIdTicket(e) {
        this.setState({
            id_ticket: e.target.value,
        });
    }
    onChangePlace(e) {
        this.setState({
            place: e.target.value,
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value,
        });
    }
    onChangeIdPerformance(e) {
        this.setState({
            id_performance: e.target.value,
        });
    }




    saveTicket() {
        const { place, price, id_performance } = this.state;

        this.props
            .createTicket(place, price, id_performance)
            .then((data) => {
                this.setState({
                    place: data.place, 
                    price: data.price,
                    id_performance: data.id_performance, 

                    submitted: false,
                });
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newTicket() {
        this.setState({
            id_ticket: null,
            place: "",
            price: "",
            id_performance: null,
        
            submitted: false,
        });
    }



    render() {

        return (
            <div className="form">
                {this.state.submitted ? (
                    <div>
                        <h4>Успешно добавлено</h4>
                        <button className="btn btn-success" onClick={this.newTicket}>
                            Добавить
                        </button>
                    </div>
                ) : (
                    <div className="form-add">


                        <div className="form-group">
                            <label htmlFor="place">Место</label>
                            <input
                                type="text"
                                className="form-control"
                                id="place"
                                required
                                value={this.state.place || ""  }
                                onChange={this.onChangePlace}
                                name="place"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Цена</label>
                            <input
                                type="text"
                                className="form-control"
                                id="price"
                                required
                                value={this.state.price  || "" }
                                onChange={this.onChangePrice}
                                name="price"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="id_performance">Номер представления</label>
                            <input
                                type="text"
                                className="form-control"
                                id="id_performance"
                                required
                                value={this.state.id_performance  || "" }
                                onChange={this.onChangeIdPerformance}
                                name="id_performance"
                            />
                        </div>


                        <button onClick={this.saveTicket} className="btn btn-success">
                            Сохранить
                        </button>

                        <br/>

                    </div>
                )}
            
            </div>
        );
    }
}

export default connect(null, { createTicket })(AddTicket);





/*

import React, { Component } from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions/ticket";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

class AddTicket extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeIdCourse = this.onChangeIdCourse.bind(this);
        this.onChangeIdTicket = this.onChangeIdTicket.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onChangeNumbEntries = this.onChangeNumbEntries.bind(this);
        this.onChangeDateStart = this.onChangeDateStart.bind(this);

        this.state = {
        
            id_course: null,
            id_user: null,
            place: "",
            price: null,
            id_performance: "",

            successful: false,
        };
    }

    onChangeIdCourse(e) {
        this.setState({
            id_course: e.target.value,
        });
    }
    onChangeIdTicket(e) {
        this.setState({
            id_user: e.target.value,
        });
    }
    onChangePlace(e) {
        this.setState({
            place: e.target.value,
        });
    }
    onChangeNumbEntries(e) {
        this.setState({
            price: e.target.value,
        });
    }
    onChangeDateStart(e) {
        this.setState({
            id_performance: e.target.value,
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            successful: false,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props
                .dispatch(
                    createTicket( this.state.id_course, this.state.id_user, this.state.place, this.state.price, this.state.id_performance)
                )
                .then(() => {
                this.setState({
                    successful: true,
                });
                })
                .catch(() => {
                this.setState({
                    successful: false,
                });
                });
        }
    }


    render() {
        const { message } = this.props;

        return (
            <div>
                <Form
                    onSubmit={this.handleRegister}
                    ref={(c) => {
                    this.form = c;
                    }}
                >

                {!this.state.successful && (
                    <div>

                        <div className="form-group">
                            <label htmlFor="id_course">Курс</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="id_course"
                                required
                                value={this.state.id_course   }
                                onChange={this.onChangeIdCourse}
                                name="id_course"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="id_user">Ведет // ID</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="id_user"
                                required
                                value={this.state.id_user   }
                                onChange={this.onChangeIdTicket}
                                name="id_user"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="place">Название</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="place"
                                required
                                value={this.state.place   }
                                onChange={this.onChangePlace}
                                name="place"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Число участников</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="price"
                                required
                                value={this.state.price   }
                                onChange={this.onChangeNumbEntries}
                                name="price"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="id_performance">Дата</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="id_performance"
                                required
                                value={this.state.id_performance   }
                                onChange={this.onChangeDateStart}
                                name="id_performance"
                            />
                        </div>

                    <div className="form-group">
                        <button className="btn btn-primary btn-block">Добавить</button>
                    </div>


                    </div>
                )}
                {message && (
                <div className="form-group">
                    <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                        {message}
                    </div>
                </div>
                )}
                
                <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                    this.checkBtn = c;
                }}
                />
            </Form>
        </div>
            
        );
    }
}
function mapStateToProps(state) {
    const { message } = state.message;
    return { message };
}


export default connect( mapStateToProps )(AddTicket);
*/