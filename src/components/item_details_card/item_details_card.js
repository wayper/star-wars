import React, { Component } from 'react';

import './item_details_card.css'
import FictitiousError from '../fictitious_error/fictitious_error';

const Record = ({ item, field, label }) => {
    return (
    <li className="list-group-item">
        <span className="item-label">{label}</span>
        <span className="item-value">{item[field]}</span>
    </li>
    );
}

export {
    Record
};

export default class ItemDetailsCard extends Component {

    state = {
        item: null,
        image: null,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                })
            })
    }

    render() {

        if (!this.state.item) {
            return <span>Select a person from a list</span>
        }

        const { name } = this.state.item;
        const { image, item } = this.state;

        return (
                <div className="media person-card align-self-start">
                    <img className="align-self-start mr-3 person-card-img" src={image} alt="..." />
                    <div className="media-body person-card-body">
                        <h4 className="text-warning mt-0">{name}</h4>
                        <ul className="list-group list-group-flush">
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, { item });
                                })
                            }
                        </ul>
                    </div>
                </div>
        );
    };
}
