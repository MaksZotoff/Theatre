import React, { Component } from "react";
import ActionCard from "./actionCard";

export default class BoardAdmin extends Component {

  render() {
    return (
        <div className="contwork justify-content-center">
            <div className="inf">
                <h1>УПРАВЛЕНИЕ</h1>
            </div>
            <div class="container-fluid d-flex justify-content-center">
                
                <div className="row">

                    <div className="opt">
                        <ActionCard link='/addticket' title='Билеты' />
                    </div>

                    <div className="opt">
                        <ActionCard link='/addperformance' title='Репертуар' />
                    </div>
                    
                </div>    
            </div>

        </div>

    );
  }
}
