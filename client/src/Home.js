import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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
      if (loading) return <p>Loading...</p>;
      else if (error) return <p>whoops!! somthing wrong.</p>;

      return (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            { data.workplaces &&
                data.workplaces.map(({ id, name, description, coverImage }) => (
                  <div
                    key={id}
                    style={{
                      width: 'calc(33.3333% - 2rem - 2px)',
                      margin: '1rem',
                      border: '1px solid #eee',
                      overflow: 'hidden',
                      borderRadius: 5,
                    }}
                  >
                    <img
                      src={coverImage}
                      alt={name}
                      style={{ width: '100%' }}
                    />
                    <div style={{ padding: 50 }}>
                      <h2>{name}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>
      );
    }}
  </Query>
);

export default Home;
