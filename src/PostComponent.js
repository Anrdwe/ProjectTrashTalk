import React from 'react'
import "materialize-css"


function PostComponent(props) {
    return(
        <div className="post-form">       
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input name="email" value={props.state.email} onChange={props.handleChange} id="email" type="text" class="validate" />
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s12">
                        <input name="username" value={props.state.username} onChange={props.handleChange} id="username" type="text" class="validate" />
                        <label for="username">Name</label>
                    </div>
                    <div class="input-field col s12">
                        <input name="org" value={props.state.org} onChange={props.handleChange} id="org" type="text" class="validate" />
                        <label for="org">Organization</label>
                    </div>
                    <div class="input-field col s12">
                        <textarea name="message" value={props.state.message} onChange={props.handleChange} id="message" class="materialize-textarea validate"></textarea>
                        <label for="message">Message</label>
                    </div>
                </div>
            </form>
            </div>
            <a class="waves-effect waves-light btn submit-color" href="/board" onClick={props.handleSubmit}>Submit</a>
        </div>
    )
}

export default PostComponent