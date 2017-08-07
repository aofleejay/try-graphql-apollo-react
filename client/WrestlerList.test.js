import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import { WrestlerList } from './WrestlerList'

describe('<WrestlerList />', () => {
  const props = {
    data: {
      loading: true,
      error: undefined
    }
  }

  it('snapshot', () => {
    const wrapper = renderer.create(<WrestlerList {...props} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })

  it('find loading', () => {
    const wrapper = shallow(<WrestlerList {...props} />)

    expect(wrapper.find('#loading')).toHaveLength(1)
  })

  it('find error', () => {
    const props = {
      data: {
        loading: false,
        error: 'error'
      }
    }
    const wrapper = shallow(<WrestlerList {...props} />)

    expect(wrapper.find('#error')).toHaveLength(1)
  })

  it.skip('query', () => {
    const schemaString = `
      type Query {
        company(id: String): Company
      }
      type Company {
        id: Int
        name: String
      }
    `;

    const mocks = {
      Company: () => ({
        id: 123,
        name: 'fake name',
      }),
    }
  
    const schema = makeExecutableSchema({ typeDefs: schemaString });
    addMockFunctionsToSchema({ schema, mocks });
    const query = `
      query findCompanyFromId {
        company(id: "1") {
          id
          name
        }
      }
    `;
    graphql(schema, query).then((result) => {
      expect(result.data.company).toEqual({ id: 123, name: 'fake name' })
    });
  })
})