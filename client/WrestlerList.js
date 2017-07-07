import React from 'react'
import { gql, graphql } from 'react-apollo'
import WrestlerItem from './WrestlerItem'

const WrestlerList = (props) => (
  <section className="section">
    <div className="container">
      <h2 className="subtitle">Wrestler List</h2>
      <hr />
      <div className="content">
        <div>
          {
            props.data.loading ?
              'Loading...'
            :
              props.data.wrestler.map(wrestler => (
                <WrestlerItem
                  key={wrestler.id}
                  name={wrestler.name}
                  twitter={wrestler.twitter}
                  companyName={wrestler.company.name}
                />
              ))
          }
        </div>
      </div>
    </div>
  </section>
)

const wrestlers = gql`
  {
    wrestler {
      name
      twitter
      company {
        name
      }
    }
  }
`

export default graphql(wrestlers)(WrestlerList)
