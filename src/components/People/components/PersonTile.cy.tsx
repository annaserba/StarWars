import PersonTile from './PersonTile'
import React from 'react'
import { mount } from 'cypress/react18'
describe('PersonTile Component', () => {
  it("renders person's name and details", () => {
    const person = {
      name: 'John Doe',
      birth_year: '1990'
    }
    mount(<PersonTile person={person} />)
    cy.get('[aria-label="name"]').should('contain', 'John Doe')
    cy.get('[aria-label="birth_year"]').should('contain', '1990')
    cy.screenshot('tile', { overwrite: true })
  })
})
