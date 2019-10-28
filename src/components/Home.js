import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  constructor() {
    super() 
      
    this.state = {
      topStories: []
      
    } 
  }

  componentDidMount(){
    axios.get('/api/stories')
      .then(res => {
        let topStories = res.data
        if (topStories.length  > 3 ) topStories = res.data.slice(res.data.length - 3)
        this.setState({ topStories }) 
      })
  }

  render() {
    return (
      <section>
        
        <div className="columns bg-gray">
          <div className="column panel col-6 text-center" >
            <h1 className="text-center h1">Unlimited</h1>
            <figure className="figure ">
              <img className="img-responsive" src="./assets/logo2.png" width="250px" alt="logo"></img>
            </figure>
            <div className="panel-body ">
              <p>Text explaning what the site is doing and how we operate</p>
              <Link to='/stories'><button className="btn btn-primary"> To all Stories</button></Link>
            </div>
          </div>
          <div className="column panel col-6">
            <div className="panel-header">
              <div className="panel-title h4 text-center">Top Stories</div>
            </div>
            <div className="panel-body">
              {!this.state.topStories && <div className="loading loading-lg"></div>}
              {this.state.topStories &&
                  this.state.topStories.map(story => (
                    <div className="card" key={story._id}>
                      <a href={story.url} target="blank">
                        <div className="card-header">
                          <div className="card-title h5">{story.title}</div>
                          <div className="card-subtitle text-gray">{story.description}</div>
                        </div>
                        <div className="card-image">
                          <img src={story.urlToImage} className="img-responsive" alt="article image"></img>
                        </div>
                      </a>
                    </div>
                  ))} 
              <div className="tile">
                <div className="tile-icon">
                  <div className="panel-footer">
                    <div className="input-group">
                      <input className="form-input" type="text" placeholder="Hello"/>
                      <button className="btn btn-primary input-group-btn">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

    )
  }



}
export default Home