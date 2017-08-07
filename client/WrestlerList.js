import React from 'react'
import { gql, graphql } from 'react-apollo'
import WrestlerItem from './WrestlerItem'

export const WrestlerList = ({ data: { error, loading, wrestlers } }) => {
  if (loading) return <div id="loading">Loading...</div>
  else if (error) { return <div id="error">Error...</div> }
  else return (
    <section className="section">
      <h2 className="subtitle">Wrestler List</h2>
      <hr />
      <div className="content">
        <div>
          {
              wrestlers.map(wrestler => (
                <WrestlerItem
                  key={wrestler.name}
                  name={wrestler.name}
                  twitter={wrestler.twitter}
                />
              ))
          }
        </div>
      </div>
    </section>
  )
}

export const wrestlers = gql`
  {
    wrestlers {
      name
      twitter
    }
  }
`

export default graphql(wrestlers)(WrestlerList)
