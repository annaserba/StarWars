import Search from './Search'
import { mount } from 'cypress/react18'
import React from 'react'

describe('Search Component', () => {
  beforeEach(() => {
    mount(<Search onSearch = {(search) => {}} onClear = {() => {}} />)
  })

  it('renders the search input and search button', () => {
    cy.get('input[aria-label="Search"]').should('exist')
    cy.get('button[aria-label="search"]').should('exist')
  })

  it('clears input text when the clear button is clicked', () => {
    const searchText = 'Sample search text'
    cy.get('input[aria-label="Search"]').type(searchText)
    cy.get('button[aria-label="clear"]').click()
    cy.get('input[aria-label="Search"]').should('have.value', '')
  })

  it('updates input value while typing', () => {
    const searchText = 'Sample search text'
    cy.get('input[aria-label="Search"]').type(searchText)
    cy.get('input[aria-label="Search"]').should('have.value', searchText)
  })
})
