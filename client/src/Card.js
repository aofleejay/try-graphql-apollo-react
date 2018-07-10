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

const Card = ({ children }) => (
  <Container>
    {children}
  </Container>
)

Card.propTypes = {
  children: PropTypes.node,
}

Card.defaultProps = {
  children: null,
}

export default Card
