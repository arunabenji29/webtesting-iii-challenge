// Test away!
import React from 'react'
import {render,fireEvent,getByTestId} from '@testing-library/react'

import 'jest-dom/extend-expect'
import Controls from './Controls'
import Dashboard from '../dashboard/Dashboard'
import '@testing-library/react/cleanup-after-each'

describe('<Controls />', () => {
    it('close gate button clicked', () => {
        
        const container = document.body

        const {getByText} = render(<Dashboard/>);

        const button = getByText('Close Gate')

        fireEvent.click(button)

        expect(getByTestId(container, /close/i).textContent).toBe('Closed')
        expect(getByTestId(container, /lock/i).textContent).toBe('Unlocked')
        expect(document.querySelector('[data-testid="access"]')).not.toBeDisabled()
        expect(getByTestId(container, /position/i).textContent).toBe('Open Gate')
        

    })
})

describe('<Controls />', () => {
    it('gate:closed and access:unlocked ', () => {
        const {getByText} = render(<Controls locked={false} closed={true}/>)

        expect(getByText(/open gate/i).textContent).toBe('Open Gate')
        expect(getByText(/lock gate/i).textContent).toBe('Lock Gate')

    })
})

describe('<Controls />', () => {
    it('gate:closed and access:locked ', () => {

        const {getByText} = render(<Controls locked={true} closed={true}/>)

        expect(getByText(/open gate/i).textContent).toBe('Open Gate')
        expect(getByText(/unlock gate/i).textContent).toBe('Unlock Gate')
        expect(document.querySelector('[data-testid="position"]')).toBeDisabled()

    })
})

describe('<Controls />', () => {
    it('gate:closed and access:locked ', () => {

        const {getByText} = render(<Controls locked={true} closed={true}/>)

        expect(getByText(/open gate/i).textContent).toBe('Open Gate')
        expect(getByText(/unlock gate/i).textContent).toBe('Unlock Gate')
        expect(document.querySelector('[data-testid="position"]')).toBeDisabled()

    })
})

// describe('<Controls second test/>', () => {
//     it("TC:DBC9::Testing control render through props - locked=false, closed=true", () => {
//         const toggleLockedSpy = jest.fn();
//         const toggleClosedSpy = jest.fn();
//         const { getByText } = render(
//           <Controls
//             locked={false}
//             closed={true}
//             toggleLocked={toggleLockedSpy}
//             toggleClosed={toggleClosedSpy}
//           />
//         );
//         expect(getByText(/open gate/i)).not.toBeNull();
//         expect(getByText(/lock gate/i)).not.toBeNull();
//         expect(toggleClosedSpy).not.toHaveBeenCalled();
//         expect(toggleLockedSpy).not.toHaveBeenCalled();
//         fireEvent.click(getByText(/open gate/i));
//         expect(toggleClosedSpy).toHaveBeenCalledTimes(1);
//         expect(toggleLockedSpy).not.toHaveBeenCalled();
//         expect(getByText(/close gate/i)).not.toBeNull();

//       });
// })