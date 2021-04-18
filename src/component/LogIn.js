import React, { Component } from 'react'

export default class LogIn extends Component {

    state = {
        logEmail: "",
        logPassword: ""
    };

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state.logEmail);
    };

    handleSubmit = (e) => {
        e.preventDefault()
          this.setState({
            logEmail: "",
            logPassword: ""
        })
        console.log(this.state);
    }

    render() {
        return (
            <div className="LogIn">
                <h3 className="component-title">
                    Welcome Back!
                </h3>
                <form onSubmit={this.handleSubmit} className="form">
                    <input  
                        type="text" 
                        placeholder="Email Address *" 
                        required 
                        name="logEmail"
                        value={this.state.logEmail}
                        onChange={this.handleChange}
                        style={{marginBottom: '20px'}}/>

                    <input 
                        className="LogIn-password" 
                        type="password" 
                        placeholder="Password *" 
                        required
                        name="logPassword"
                        value={this.state.logPassword}
                        onChange={this.handleChange}/>

                    <span><a href="#">Forgot Password?</a></span>

                    <button>LOG IN</button>
                </form>
            </div>
        )
    }
}
