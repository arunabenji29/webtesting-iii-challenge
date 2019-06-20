// Test away!
import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Display from './Display'

describe('<Display />', () => {
    it('should show unlocked and open', () => {
        const show={
            position:'Unlocked',
            door:'Open',
        }

        const {getByTestId} = render(<Display show={show}/>);

        const renderedLock = getByTestId(/lock/i)

        const renderedClose = getByTestId(/close/i)


        expect(renderedLock.textContent).toBe(`${show.position}`)

        expect(renderedClose.textContent).toBe(`${show.door}`)

    })
})