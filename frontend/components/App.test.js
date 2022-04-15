// Write your tests here
import React from 'react'
import {screen, render} from '@testing-library/react'
import AppClass from './AppClass'

test('AppClass responds to directional buttons', () => {
  render(<AppClass />)
})

