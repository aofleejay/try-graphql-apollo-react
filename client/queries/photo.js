import gql from 'graphql-tag'

const fetchPhotos = gql`
  query fetchPhotos {
    photos {
      id
      url
      credit {
        id
        name
      }
    }
  }
`

export { fetchPhotos }
