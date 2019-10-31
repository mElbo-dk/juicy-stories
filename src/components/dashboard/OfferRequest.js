import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import StoryCard from '../story/StoryCard'
import OfferAction from '../dashboard/OfferAction'
import MessagesCard from '../../components/MessagesCard'

class OfferRequest extends React.Component {

  constructor() {
    super()
    this.state = {
      offers: null
    }
  }

  componentDidMount() {
    axios.get('/api/offers', { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(response => this.setState({ offers: response.data }))
      .catch(err => console.error(err))
  }


  render() {
    const { offers } = this.state
    if (!offers) return <div className="loading loading-lg"></div>

    return offers.map(offer => (
      <article key={offer._id} className="box-shadow">
        <div className="columns v-margin top-padding">
          <div className="column col-8 col-md-12">
            <StoryCard {...offer.story} postedBy={offer.seller}/>
          </div>
          <div className="column col-4 col-md-12 h-center flex-column">
            <OfferAction offer={offer}/>
          </div>
        </div>
        <MessagesCard offerId={offer._id}/>
      </article>)
    )
  }

}

export default OfferRequest