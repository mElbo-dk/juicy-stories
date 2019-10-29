import React from 'react'
import axios from 'axios'

import StoryCard from '../StoryCard'


class Purchase extends React.Component {
  constructor() {
    super()
    this.state = {
      stories: null
    }
  }


  componentDidMount(){
    // just faking with the timeout so that it's not too responsive
    setTimeout(() => axios.get('/api/stories')
      .then(response => this.setState({ stories: response.data }))
      .catch(err => console.log(err)), 300 )
    
  }


  handleClick(e) {
    this.setState({ selected: e.target.name })
  }


  render() {
    const { stories } = this.state
    const options = { classes: 'box-shadow' }
    if (!stories) return <div className="loading loading-lg"></div>
    return (
      stories.map( story=> (<article key={story._id} className="bg-gray"><StoryCard { ...story } options={options}/></article>))
    )
  }
}

export default Purchase