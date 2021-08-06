import React from 'react';
import ReactDOM from 'react-dom';
import Paginator from "./Paginator";
import {create} from "react-test-renderer";

describe('Status component', () => {
    test('Have rigth arrow if total items = 140 and page sixe = 10', () => {
        const component = create(<Paginator totalItem={140} pageSize={10} currentPage={1} changePageHandler={() => {}}/>);
        const instance = component.getInstance();
        const root = component.root;
        const img = root.findByType('img');
        expect(img.props.className).toBe('rightArrow');
    })

    test('Have 10 pages if total items = 99 and page size = 10', () => {
        const component = create(<Paginator totalItem={99} pageSize={10} currentPage={1} changePageHandler={() => {}}/>);
        const instance = component.getInstance();
        const root = component.root;
        const div = root.findByType('div');
        expect(div.children.length).toBe(10);
    })

    test('Current page button have currentPage class', () => {
        const component = create(<Paginator totalItem={99} pageSize={10} currentPage={3} changePageHandler={() => {}}/>);
        const instance = component.getInstance();
        const root = component.root;
        const div = root.findByType('div');
        expect(div.children[2].props.className).toBe('currentPage page');
    })
})