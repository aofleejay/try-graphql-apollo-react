import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const List = ({ dataSource, renderItem }) => (
  <Container>
    { dataSource.map(item => renderItem(item)) }
  </Container>
)

List.propTypes = {
  dataSource: PropTypes.arrayOf(PropTypes.any).isRequired,
  renderItem: PropTypes.func.isRequired,
}

export default List
