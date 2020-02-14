import React, { Component } from 'react';

import SpinnerBlinkingDot from '../spinners/spinner_blinking_dot';

import './item_list.css';

export default class ItemList extends Component {

    state = {
        itemList: null,
        loading: true,
        error: false,
    }

    componentDidMount() {

        const {getData} = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            });
    }

    renderItems(arr) {
        return arr.map((item) => {

            const { id } = item;
            const label = this.props.renderItemLabel(item);
            
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <SpinnerBlinkingDot />;
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="list-group list-group-flush item-list-content">
                {items}
            </ul>
        );
    }
}

