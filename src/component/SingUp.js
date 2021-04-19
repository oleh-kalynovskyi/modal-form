import React, { Component } from 'react';
import classNames from "classnames";

import { FaUserAlt } from 'react-icons/fa';

import { FaLock } from 'react-icons/fa';
import { FaLockOpen } from 'react-icons/fa';

export default class SingUp extends Component {
    
    state = {
        firstName: "",
        LastName: "",
        EmailAddress: "",
        password: "",

        icon: false,
        input: false
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
        const { firstName, LastName, EmailAddress, password } = this.state;
        return (
            <>
                <h3 className="component-title">
                    Sing Up for Free!
                </h3>
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="name">
                    <div className="input-icon">
                        <input 
                            className={classNames("", {
                                "is-danger": !firstName && this.state.input
                            })}
                            type="text" 
                            autoComplete="off"
                            placeholder="First Name *" 
                            required 
                            value={this.state.firstName}
                            onChange={this.handleChange} 
                            name="firstName"
                            />
                        <FaUserAlt className="icon"/>
                    </div>
                        <input 
                            className={classNames("", {
                                "is-danger": !LastName && this.state.input
                            })}
                            type="text" 
                            autoComplete="off"
                            placeholder="Last Name *" 
                            required
                            value={this.state.LastName}
                            name="LastName"
                            onChange={this.handleChange} 
                        />
                    </div>
                    <input 
                        className={classNames("", {
                            "is-danger": !EmailAddress && this.state.input
                        })}
                        type="email" 
                        autoComplete="off"
                        placeholder="Email Address *" 
                        required
                        onChange={this.handleChange} 
                        value={this.state.EmailAddress}
                        name="EmailAddress"
                        style={{ marginBottom: "20px" }}/>

                    <div className="input-icon">
                    <input 
                        className={classNames("", {
                            "is-danger": !password && this.state.input
                        })}
                        type={this.state.icon ? "text" : "password"}
                        autoComplete="off"
                        placeholder="Set A Password *" 
                        onChange={this.handleChange} 
                        value={this.state.password}
                        name="password"
                        required 
                        minLength="8"
                        style={{ marginBottom: "20px" }}/>
                        <div className="icon"
                            onClick={() =>
                                this.setState({ icon: !this.state.icon })
                            }
                        >
                            {this.state.icon ? <FaLockOpen/> : <FaLock/>}
                        </div>
                    </div>

                    <button onClick={this.handleSubmit}>GET STARTED</button>
                </form>
            </>
        )
    }
}
