// Test away!
import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Display from './Display'
import Dashboard from '../dashboard/Dashboard'

describe('<Display />', () => {
    it('should show unlocked and open', () => {
        const show={
            position:'Unlocked',
            door:'Open',
        }

        const {getByTestId} = render(<Display show={show}/>);

        const renderedLock = getByTestId(/lock/i)

        const renderedClose = getByTestId(/close/i)

        // console.log('render lock ',renderedLock)
        // console.log('render close ',renderedClose)

        // console.log('show position ',show.position)
        // console.log('show door ',show.door)

        expect(renderedLock.textContent).toBe(`${show.position}`)

        expect(renderedClose.textContent).toBe(`${show.door}`)

    })
})