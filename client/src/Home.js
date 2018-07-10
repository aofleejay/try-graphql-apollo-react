import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Card from './Card'
import List from './List'

const CoverImage = styled.img`
  width: 100%;
`

const CardContent = styled.div`
  padding: 50px;
`

const fetchWorkplaces = gql`
  query workplaces {
    workplaces {
      id
      name
      description
      coverImage
    }
  }
`

const Home = () => (
  <Query query={fetchWorkplaces}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      else if (error) return <p>whoops!! somthing wrong.</p>

      return (
        <div>
          { data.workplaces && (
            <List
              dataSource={data.workplaces}
              renderItem={({ id, name, description, coverImage }) => (
                <Card key={id}>
                  <CoverImage src={coverImage} alt={name} />
                  <CardContent>
                    <h2>{name}</h2>
                    <p>{description}</p>
                  </CardContent>
                </Card>
              )}
            />
          )}
        </div>
      )
    }}
  </Query>
)

export default Home
