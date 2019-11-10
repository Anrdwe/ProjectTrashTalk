import React from 'react'

function PostComponent(props) {
    return(
        <div className="post-form">
            <input className="post-input" 
                name="email" type="text" 
                value={props.state.email} 
                onChange={props.handleChange} 
                placeholder="Email"></input>

            <input className="post-input" 
                name="username" type="text" 
                value={props.state.username} 
                onChange={props.handleChange} 
                placeholder="Name"></input>

            <input className="post-input" 
                name="org" type="text" 
                value={props.state.org} 
                onChange={props.handleChange} 
                placeholder="Organization"></input>

            <input className="post-input" 
                name="message" type="text" 
                value={props.state.message} 
                onChange={props.handleChange} 
                placeholder="Message"></input>

            <button onClick={props.handleSubmit}>Submit</button>
        </div>
    )
}

export default PostComponent