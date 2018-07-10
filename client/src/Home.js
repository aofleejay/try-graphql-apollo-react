import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Card from './Card'

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Home = () => (
  <Query
    query={gql`
      query workplaces {
        workplaces {
          id
          name
          description
          coverImage
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      else if (error) return <p>whoops!! somthing wrong.</p>

      return (
        <div>
          <Gallery>
            { data.workplaces &&
                data.workplaces.map(({ id, name, description, coverImage }) => (
                  <Card
                    key={id}
                    title={name}
                    description={description}
                    coverImage={coverImage}
                  />
                ))
            }
          </Gallery>
        </div>
      )
    }}
  </Query>
)

export default Home
