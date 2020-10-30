import React, { Component } from 'react'
import Axios from 'axios'


export default class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:[],
             input: 'Mohammad-Boushi',
             Repositories:[]

        }
    }
    

componentDidMount = () => {
  this.onClick()
}    

onClick = () => {
    const { input } = this.state
    const url = `http://api.github.com/users/${input}?client_id=f8ce2dbdb4ea2c855492&client_secret=56df3b02c516237836a8b4a579fe595902cecfd3&sort=created`
    Axios.get(url)
    .then(res => {
        Axios.get(res.data.repos_url)
        .then(response => {
            this.setState({ Repositories: response.data , user:res.data })})
            .catch(err => console.log(err)) 
        .catch(err => console.log(err))
        })
    }
    


onChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
    
}

    render() {
        const { user , input , Repositories} = this.state
        console.log(Repositories)
    
        return (
            <div>
                <div style={{marginLeft:'250px'}}> 
                    <input name="input" value={input} onChange={this.onChange}/>
                    <button onClick={this.onClick}>Submit</button><br /><br /><br />
                </div>
                <div style={{display:'flex' , marginLeft:'150px' }}>
                    <img src={user.avatar_url} alt='img' />
                    <div style={{marginLeft:'50px'}}>
                      <p>Fullname: {user && user.name}</p><hr />
                      <p>Username: {user && user.login}</p><hr />
                      <p>Location: {user && user.location}</p><hr />
                      <p>Email Address: {user && user.email}</p><hr />
                    </div>
                </div>
                <div style={{marginLeft:'150px'}}>
                    <h1>User Repositories</h1>
                    {Repositories && Repositories.map(value=>
                        
                    <h4 key={value.id}>{value.default_branch} : {value.name} <hr /></h4>
                    )}<hr />

                </div>
            </div>
        )
    }
}
