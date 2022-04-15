// Write your tests here
import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import AppClass from './AppClass'
import AppFunctional from './AppFunctional'

test('AppClass renders with no errors', () => {
  render(<AppClass />)
})

test('AppFunctional renders with no errors', () => {
  render(<AppFunctional />)
})

test('Functional link transitions from AppClass to AppFunctional', async () => {
  // render(<AppClass />);
  // const functional = document.querySelector('Functional')
  // fireEvent.click(functional);
  // expect (<AppFunctional />).toBeInT()
  // const appFunctional = screen.findBy

})
