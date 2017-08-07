import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { gql } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { mockNetworkInterface } from 'apollo-test-utils'
import { graphql } from 'graphql'
import { WrestlerList, wrestlers as query } from './WrestlerList'

describe('<WrestlerList /> UI testing', () => {
  let props

  beforeEach(() => {
    props = {
      data: {
        loading: false,
        error: undefined,
        wrestlers: [
          {
            id: '1',
            name: 'John Cena',
            twitter: '@johncena',
          },
          {
            id: '2',
            name: 'Randy Ortan',
            twitter: '@randyortan',
          },
        ],
      },
    }
  })

  it('snapshot', () => {
    const wrapper = renderer.create(<WrestlerList {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('find loading', () => {
    props.data.loading = true
    const wrapper = shallow(<WrestlerList {...props} />)

    expect(wrapper.find('#loading')).toHaveLength(1)
  })

  it('find error', () => {
    props.data.error = 'error'
    const wrapper = shallow(<WrestlerList {...props} />)

    expect(wrapper.find('#error')).toHaveLength(1)
  })

  it('find 2 WrestlerItem', () => {
    const wrapper = shallow(<WrestlerList {...props} />)

    expect(wrapper.find('WrestlerItem')).toHaveLength(2)
  })
})

describe('<WrestlerList /> request testing', () => {
  it('request correctly', () => {
    const result = {
      data: {
        wrestlers: [
          {
            name: 'John Cena',
            twitter: '@johncena',
          },
        ],
      },
    }

    const networkInterface = new mockNetworkInterface({
      request: { query },
      result
    })

    const client = new ApolloClient({
      networkInterface,
      addTypename: false
    })

    return client.query({ query })
      .then(response => {
        expect(response.data).toEqual(result.data);
      })
  })
})
