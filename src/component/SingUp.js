import React, { Component } from 'react';


export default class SingUp extends Component {
    
    state = {
        firstName: "",
        LastName: "",
        EmailAddress: "",
        password: ""
    };

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
          this.setState({
            firstName: '',
            LastName: "",
            EmailAddress: "",
            password: ""
        })
        // localStorage.setItem(this.state.EmailAddress, JSON.stringify(this.state));
        console.log(this.state);
    }

    render() {
        return (
            <>
                <h3 className="component-title">
                    Sing Up for Free!
                </h3>
                <form onSubmit={this.handleSubmit} className="form">
                    <p>
                        <input type="text" 
                            placeholder="First Name *" 
                            required 
                            value={this.state.firstName}
                            onChange={this.handleChange} 
                            name="firstName"
                            />
                        <input type="text" 
                            placeholder="Last Name *" 
                            required
                            value={this.state.LastName}
                            name="LastName"
                            onChange={this.handleChange} 
                        />
                    </p>
                    <input type="email" 
                        placeholder="Email Address *" 
                        required
                        onChange={this.handleChange} 
                        value={this.state.EmailAddress}
                        name="EmailAddress"
                        style={{ marginBottom: "20px" }}/>
                    <input type="password"
                        placeholder="Set A Password *" 
                        onChange={this.handleChange} 
                        value={this.state.password}
                        name="password"
                        required 
                        minLength="8"
                        style={{ marginBottom: "20px" }}/>
                    <button>GET STARTED</button>
                </form>
            </>
        )
    }
}
