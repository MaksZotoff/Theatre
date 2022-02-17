import React, { Component } from "react";
import { connect } from "react-redux";
import { createPerformance } from "../../actions/performance";


class AddPerformance extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeIdPerformance = this.onChangeIdPerformance.bind(this);
        
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAutor = this.onChangeAutor.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);


        this.savePerformance = this.savePerformance.bind(this);
        this.newPerformance = this.newPerformance.bind(this);

        this.state = {
            id_performance: null,
            title: "",
            autor: "",
            duration: "",
            genre: "",
            submitted: false,
        };
    }


    onChangeIdPerformance(e) {
        this.setState({
            id_performance: e.target.value,
        });
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }
    onChangeAutor(e) {
        this.setState({
            autor: e.target.value,
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value,
        });
    }
    onChangeGenre(e) {
        this.setState({
            genre: e.target.value,
        });
    }

    


    savePerformance() {
        const { title, autor, duration,  genre } = this.state;

        this.props
            .createPerformance(title, autor, duration,  genre )
            .then((data) => {
                this.setState({
                    title: data.title, 
                    autor: data.autor,
                    duration: data.duration,  
                    genre: data.genre, 

                    submitted: false,
                });
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    newPerformance() {
        this.setState({
            id_ticket: null,
            title: "",
            autor: "",
            duration: "",
            genre: "",
        
            submitted: false,
        });
    }



    render() {

        return (
            <div className="form">
                {this.state.submitted ? (
                    <div>
                        <h4>Успешно добавлено</h4>
                        <button className="btn btn-success" onClick={this.newPerformance}>
                            Добавить
                        </button>
                    </div>
                ) : (
                    <div className="form-add">


                        <div className="form-group">
                            <label htmlFor="title">Название</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title || ""  }
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="autor">Автор</label>
                            <input
                                type="text"
                                className="form-control"
                                id="autor"
                                required
                                value={this.state.autor  || "" }
                                onChange={this.onChangeAutor}
                                name="autor"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="duration">Длительность</label>
                            <input
                                type="text"
                                className="form-control"
                                id="duration"
                                required
                                value={this.state.duration  || "" }
                                onChange={this.onChangeDuration}
                                name="duration"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="genre">Жанр</label>
                            <input
                                type="text"
                                className="form-control"
                                id="genre"
                                required
                                value={this.state.genre  || "" }
                                onChange={this.onChangeGenre}
                                name="genre"
                            />
                        </div>



                        <button onClick={this.savePerformance} className="btn btn-success">
                            Сохранить
                        </button>

                        <br/>

                    </div>
                )}
            
            </div>
        );
    }
}

export default connect(null, { createPerformance })(AddPerformance);





/*

import React, { Component } from "react";
import { connect } from "react-redux";
import { createPerformance } from "../actions/ticket";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

class AddPerformance extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeIdCourse = this.onChangeIdCourse.bind(this);
        this.onChangeIdPerformance = this.onChangeIdPerformance.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeNumbEntries = this.onChangeNumbEntries.bind(this);
        this.onChangeDateStart = this.onChangeDateStart.bind(this);

        this.state = {
        
            id_course: null,
            id_user: null,
            title: "",
            autor: null,
            duration: "",

            successful: false,
        };
    }

    onChangeIdCourse(e) {
        this.setState({
            id_course: e.target.value,
        });
    }
    onChangeIdPerformance(e) {
        this.setState({
            id_user: e.target.value,
        });
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }
    onChangeNumbEntries(e) {
        this.setState({
            autor: e.target.value,
        });
    }
    onChangeDateStart(e) {
        this.setState({
            duration: e.target.value,
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
                    createPerformance( this.state.id_course, this.state.id_user, this.state.title, this.state.autor, this.state.duration)
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
                                onChange={this.onChangeIdPerformance}
                                name="id_user"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Название</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title   }
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="autor">Число участников</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="autor"
                                required
                                value={this.state.autor   }
                                onChange={this.onChangeNumbEntries}
                                name="autor"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="duration">Дата</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="duration"
                                required
                                value={this.state.duration   }
                                onChange={this.onChangeDateStart}
                                name="duration"
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


export default connect( mapStateToProps )(AddPerformance);
*/