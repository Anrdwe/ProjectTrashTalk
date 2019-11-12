import React from "react"
import "materialize-css"


function BoardComponent(props) {

    return(
    <div class="row">
        <div class="col s12 m12">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">{props.username}, {props.org}</span>
                    <p>{props.message}</p>
                </div>
                <div class="card-action">
                    <a href="#">{props.email}</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BoardComponent