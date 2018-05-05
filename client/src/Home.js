import React, { Component } from 'react'

const workplaces = [
  {
    id: '1',
    name: 'To Fast To Sleep',
    coverImage: 'https://images.unsplash.com/photo-1514371879740-2e7d2068f502?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c8b4f34e0f1761ddb4fa0543fce2a0a&auto=format&fit=crop&w=1334&q=80',
    description: 'Coffee Shop in Bangkok, Thailand',
    phone: '086 300 9955',
    rating: 4, 
  },
  {
    id: '2',
    name: 'To Fast To Sleep',
    coverImage: 'https://images.unsplash.com/photo-1514371879740-2e7d2068f502?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c8b4f34e0f1761ddb4fa0543fce2a0a&auto=format&fit=crop&w=1334&q=80',
    description: 'Coffee Shop in Bangkok, Thailand',
    phone: '086 300 9955',
    rating: 4, 
  },
  {
    id: '3',
    name: 'To Fast To Sleep',
    coverImage: 'https://images.unsplash.com/photo-1514371879740-2e7d2068f502?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c8b4f34e0f1761ddb4fa0543fce2a0a&auto=format&fit=crop&w=1334&q=80',
    description: 'Coffee Shop in Bangkok, Thailand',
    phone: '086 300 9955',
    rating: 4, 
  },
  {
    id: '4',
    name: 'To Fast To Sleep',
    coverImage: 'https://images.unsplash.com/photo-1514371879740-2e7d2068f502?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c8b4f34e0f1761ddb4fa0543fce2a0a&auto=format&fit=crop&w=1334&q=80',
    description: 'Coffee Shop in Bangkok, Thailand',
    phone: '086 300 9955',
    rating: 4, 
  },
  {
    id: '5',
    name: 'To Fast To Sleep',
    coverImage: 'https://images.unsplash.com/photo-1514371879740-2e7d2068f502?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c8b4f34e0f1761ddb4fa0543fce2a0a&auto=format&fit=crop&w=1334&q=80',
    description: 'Coffee Shop in Bangkok, Thailand',
    phone: '086 300 9955',
    rating: 4, 
  },
]

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          { workplaces.map(({ id, name, description, coverImage, phone, rating }) => (
            <div key={id} style={{ width: 'calc(33.3333% - 2rem - 2px)', margin: '1rem', border: '1px solid #eee', borderRadius: 5 }}>
              <img src={coverImage} style={{ width: '100%' }} />
              <div style={{ padding: 50 }}>
                <h2>{name}</h2>
                <p>{description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p>contact: {phone}</p>
                  <p>rating: {rating}/5</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home