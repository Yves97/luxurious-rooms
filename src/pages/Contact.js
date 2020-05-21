import React from 'react'

import result from '../result'
// import Hero from '../components/Hero'

// import Banner from '../components/Banner'
// import {Link } from 'react-router-dom'


export default class Contact extends React.Component{

    state = {
        name : '',
        password : '',
        email : ''
    }


    postDataHandler = (e) => {
        e.preventDefault();
        const Data = {
            name : this.state.name,
            password : this.state.password,
            email : this.state.email
        }
        result.post('/marks.json', Data )
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    render (){
        return (
            <>
            
            <div className="login-page">
            <h3>Remplir ce formulaire pour nous contatcter</h3>
                <div className="form">
                    <form className="register-form" onSubmit={this.postDataHandler}>
                        <input type="text" placeholder="name" value={this.state.name} onChange={ (e) =>this.setState({name: e.target.value}) } />
                        <input type="password" placeholder="password" value={this.state.password} onChange={ (e) =>this.setState({password: e.target.value}) }/>
                        <input type="text" placeholder="email address" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) }/>
                        <button type="submit">Contacter</button>
                    </form>
                    {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
                </div>
                </div>
            </>


        )
    }

}