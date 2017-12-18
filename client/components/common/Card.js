import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 31%;
  margin: 10px;
`

const Photo = styled.img`
  width: 100%;
`

const Credit = styled.p`
  text-align: right;
  font-size: 10px;
  margin: 0;
`

const Card = ({ url, credit }) => (
  <Container>
    <Photo src={url} />
    <Credit>photo by {credit}</Credit>
  </Container>
)

export default Card
