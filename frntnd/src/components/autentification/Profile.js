import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";


class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
    <div className="container">


        <div class="inf">
          <h1><center>Профиль пользователя {currentUser.login}</center></h1>        
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
        <h3>   <strong>ID:</strong> {currentUser.id_user}    </h3>
        
        <br />

        <h4>   <strong>Email:</strong> {currentUser.email}    </h4>
        <h4>   <strong>Номер телефона:</strong> {currentUser.phone} </h4>
        
        <br/>
        </div>


    </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user
  };
}

export default connect(mapStateToProps)(Profile);
