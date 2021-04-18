import React, { Component } from 'react'

export default class Forgot extends Component { 
    render() {
        return (
            <div>
                <h3 className="component-title">Forgot Password?</h3>

                <form action="" className="form">
                    <input type="email" placeholder="Enter your Email" required
                        style={{ marginBottom: "20px" }}/>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}
