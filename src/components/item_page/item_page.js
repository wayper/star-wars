import React, { Component } from 'react';

import ItemList from '../item_list/item_list';
import ItemDetailsCard from '../item_details_card/item_details_card';
import ItemRowContent from '../item_row_content/item_row_content';
import ErrorBoundry from '../error_indicator/error_boundry';

export default class ItemPage extends Component {

    state = {
        selectedItem: 6,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        });
    };

    render() {

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.props.getData}
                renderItemLabel={this.props.renderItemLabel} />
        );
        const personDetails = (
            <ItemDetailsCard
                itemId={this.state.selectedItem} />
        );

        return (
            <ErrorBoundry>
                <ItemRowContent leftElem={itemList} rightElem={personDetails}/>
            </ErrorBoundry>
        );
    }
}