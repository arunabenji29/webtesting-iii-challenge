// Test away
import React from 'react'
import {render,fireEvent} from '@testing-library/react'

import 'jest-dom/extend-expect'
import Dashboard from '../dashboard/Dashboard'
import '@testing-library/react/cleanup-after-each'

describe('<Dashboard test/>', () => {

    it('Entire Dashboard flow', () => {
        
        const {getByText} = render(<Dashboard />);
        const closeButton = getByText(/Close Gate/i)

        fireEvent.click(closeButton)

        expect(getByText(/Open Gate/i)).not.toBeNull()
        expect(getByText(/Lock Gate/i)).not.toBeNull()

        expect(getByText(/Unlocked/i)).not.toBeNull()
        expect(getByText(/Closed/i)).not.toBeNull()
        let openButton = getByText(/Open Gate/i)
        fireEvent.click(openButton)
        expect(getByText(/Close Gate/i)).not.toBeNull()
        expect(getByText(/Lock Gate/i)).not.toBeNull()

        expect(getByText(/Unlocked/i)).not.toBeNull()
        expect(getByText(/Open/i)).not.toBeNull()


    })
})