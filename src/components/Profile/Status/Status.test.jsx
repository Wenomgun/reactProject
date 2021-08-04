import React from 'react';
import ReactDOM from 'react-dom';
import Status from "./Status";
import {create} from "react-test-renderer";
import {setProfileStatusThunk} from "../../../Redux/Profile-reducer";

describe('Status component', () => {
    test('Check set status', () => {
        const component = create(<Status status='test status' setProfileStatusThunk={setProfileStatusThunk}/>);
        const instance = component.getInstance();
        expect(instance.state.statusText).toBe('test status');
    })

    test('Find span with status', () => {
        const component = create(<Status status='test status' setProfileStatusThunk={setProfileStatusThunk}/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.props.children).toBe('test status');
    })

    test('Find input after double click status', () => {
        const component = create(<Status status='test status' setProfileStatusThunk={setProfileStatusThunk}/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('test status')
    })

    test('Call calback after diactivate status', () => {
        const mockFun = jest.fn(() => {});
        const component = create(<Status status='test status' setProfileStatusThunk={mockFun}/>);
        const instance = component.getInstance();
        instance.diactivateChangeStatus();
        expect(mockFun.mock.calls.length).toBe(1);
        instance.diactivateChangeStatus();
        expect(mockFun.mock.calls.length).toBe(2);
    })
})