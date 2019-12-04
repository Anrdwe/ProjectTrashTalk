import React from 'react'
import LoginComponent from '../components/LoginComponent'
import Axios from 'axios'
//redux
import { connect } from 'react-redux'
import { loginUser } from '../redux/actions/userActions'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        //send a request to the server. Show errors or if successful redirect to board page
        //userData object made to be sent to the server
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        //userData post request to the '/login'
        this.props.logininUser(userData, this.props.history)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <LoginComponent handleChange={this.handleChange} state={this.state} 
                handleSubmit={this.handleSubmit} errors={this.errors} 
                loading={this.loading}/>
        )
    }
}
login.propType

//global state here
const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})

const mapActionsToProps = {
    logininUser
}

export default connect(mapStateToProps, mapActionsToProps)(login)