import React, { Component } from 'react';
import classNames from "classnames";

import { FaLock } from 'react-icons/fa';
import { FaLockOpen } from 'react-icons/fa';

export default class LogIn extends Component {

    state = {
        email: "",
        password: "",

        input: false,
        icon: false
    };
    
    handleSubmit = () => {
        this.setState({ input: true });
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    };

    render() {
        const { email, password } = this.state ;
        return (
            <div className="LogIn">
                <h3 className="component-title">
                    Welcome Back!
                </h3>
                <form onSubmit={this.handleSubmit} className="form">
                    <input  
                        className={classNames("", {
                            "is-danger": !email && this.state.input
                        })}
                        autoComplete="off"
                        type="text" 
                        placeholder="Email Address *"
                        required
                        name="email"
                        value={this.state.logEmail}
                        onChange={this.handleChange}
                        style={{marginBottom: '20px'}}/>

                    <div className="input-icon">
                    <input 
                        minLength="8"
                        autoComplete="off"
                        className={classNames("", {
                            "is-danger": !password && this.state.input
                        })}
                        placeholder="Password *" 
                        required
                        name="password"
                        value={this.state.password}
                        type={this.state.icon ? "text" : "password"}
                        onChange={this.handleChange}/>
                        <div className="icon"
                            onClick={() =>
                                this.setState({ icon: !this.state.icon })
                            }>
                            {this.state.icon ? <FaLockOpen/> : <FaLock/>}
                        </div>
                    </div>

                    <span><a href="#">Forgot Password?</a></span>

                    <button onClick={this.handleSubmit}>LOG IN</button>
                </form>
            </div>
        )
    }
}
