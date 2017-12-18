import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import { fetchPhotos } from '../queries/photo'
import Card from './common/Card'

const Gellery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class Home extends Component {
  renderCard(photo) {
    const { id, url, credit } = photo
    return (
      <Card
        key={id}
        url={url}
        credit={credit.name}
      />
    )
  }

  render() {
    const { error, loading, photos } = this.props.data
    if (error) return <span>Error...</span>
    else if (loading) return <span>Loading...</span>
    return (
      <Gellery>
        {photos.map(photo => this.renderCard(photo))}
      </Gellery>
    )
  }
}

export default graphql(fetchPhotos)(Home)
