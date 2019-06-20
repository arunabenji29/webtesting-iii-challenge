// Test away!
import React from 'react'
import {render,fireEvent,getByTestId} from '@testing-library/react'

import 'jest-dom/extend-expect'
import Controls from './Controls'
import Dashboard from '../dashboard/Dashboard'
import '@testing-library/react/cleanup-after-each'

// describe('<Controls />', () => {
//     it('close gate button clicked', () => {
        
//         const container = document.body

//         const {getByText} = render(<Dashboard/>);

//         const button = getByText('Close Gate')

//         fireEvent.click(button)

//         expect(getByTestId(container, /close/i).textContent).toBe('Closed')
//         expect(getByTestId(container, /lock/i).textContent).toBe('Unlocked')
//         expect(document.querySelector('[data-testid="access"]')).not.toBeDisabled()
//         expect(getByTestId(container, /position/i).textContent).toBe('Open Gate')
        

//     })
// })

describe('<Controls second test/>', () => {

    it('open gate button clicked', () => {
        
        const container = document.body

        const {getByText} = render(<Controls closed={false}/>);

        // const button = getByText('Open Gate')

        console.log('button text ',getByText(/Open Gate/i))
        // fireEvent.click(button)

        // expect(getByTestId(container, /close/i).textContent).toBe('Open')
        // expect(getByTestId(container, /lock/i).textContent).toBe('Unlocked')
        // expect(document.querySelector('[data-testid="access"]')).toBeDisabled()
        // expect(getByTestId(container, /position/i).textContent).toBe('Close Gate')
        

    })
})