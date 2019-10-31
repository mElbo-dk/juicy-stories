import React from 'react'
import axios from 'axios'
import User from '../../lib/auth'
import StoryForm from './StoryForm'



class StoryNew extends React.Component {
  constructor(){

    super()
    this.state = {
      data: {
        title: '',
        description: '',
        minimumPrice: '',
        contentLink: '',
        status: '',
        category: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  
  handleChange(e) {
    console.log(e.target.value)
    const data = { ... this.state.data, [e.target.id]: e.target.value }
    this.setState({ data })  
  }

  handleSubmit(){
    axios.post('/api/stories', this.state.data ,{
      headers: { Authorization: `Bearer ${User.getToken()}` }
    })
      .then(() => this.props.history.push('/stories'))
    
      .catch(err => console.error(err))
  }

  render(){
    const data = this.state.data
    
    return (
      <>
        <div className="card mt-2 p-centered col-8" >

          <StoryForm
            { ...data }
          
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange} />
        </div>
      </>

      
    )
  }
}


export default StoryNew