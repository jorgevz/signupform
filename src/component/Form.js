import React from 'react'



class Form extends React.Component{
    constructor(){
    super();
    this.state = {
    username:'',
    password:''
    }
    }
    handleSubmit = (e) => { 
     e.preventDefault()   
     alert('submission completed')
    }
    handleChange = (e) =>{
    let {name,value} = e.target 
    this.setState({ 
    [name]:value 
    })
    console.log(this.state)
    }
render(){
    
return(
<div className='form'>
<h4>Login</h4>
<form onSubmit={this.handleSubmit}>

<input placeholder='Username' name='username' onChange={this.handleChange} type='text'/>
<br/>

<input placeholder='Password' name='password' onChange={this.handleChange} type='password'/>
<br/>
<input placeholder='Age' min='0' max='100' name='age' onChange={this.handleChange} type='number'/>
<br/>
<input type='text' placeholder='Occupation'/>
<br/>
Male:
<input name='gender' type='radio' />
<br/>
Female:
<input name='gender' type='radio'/>
<br/>
<button>Submit</button>
</form>
</div>
)
}

}




export default Form;