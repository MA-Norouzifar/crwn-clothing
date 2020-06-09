import React, { Component } from 'react'
import './sign-in.styles.scss'
class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handlesubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handlechange = event => {
        const { value, name } = event;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlesubmit}>
                    <input onChange={this.handlechange} type="email" name='email' value={this.state.email} required />
                    <label >Email</label>
                    <input onChange={this.handlechange} type="password" name='email' value={this.state.password} required />
                    <label >Password</label>
                    <input type="submit" value="submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn
