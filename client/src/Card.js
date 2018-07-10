import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: calc(33.3333% - 2rem - 2px);
  margin: 1rem;
  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 5px;
`

const Image = styled.img`
  width: 100%;
`

const Content = styled.div`
  padding: 50px;
`

const Card = ({ coverImage, title, description }) => (
  <Container>
    <Image
      src={coverImage}
      alt={title}
    />
    <Content>
      <h2>{title}</h2>
      <p>{description}</p>
    </Content>
  </Container>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
}

export default Card
