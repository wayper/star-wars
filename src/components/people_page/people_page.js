import React, { Component } from 'react';

import ItemList from '../item_list/item_list';
import PersonCard from '../person_card/person_card';
import ErrorIndicator from '../error_indicator/error_indicator';

import './people_page.css';

// const RowContent = () => {
//     return (
//         <div className="d-flex flex-row justify-content-around align-items-center py-2 container-content">
//             {itemList}
//             {personDetails}
//         </div>
//     );
// }

export default class PeoplePage extends Component {

    state = {
        selectedPersone: 5,
        hasError: false,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPersone: id,
        });
    };

    componentDidCatch() {
        console.log('componentDidCatch Error PeoplePage');
        this.setState({
            hasError: true,
        })
    }

    render() {

        if (this.state.hasError) {
            return <div className="d-flex justify-content-center mt-5"><ErrorIndicator /></div>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.props.getData}
                renderItemLabel={this.props.renderItemLabel} />
        );
        const personDetails = (
            <PersonCard
                personId={this.state.selectedPersone} />
        );

        return (
            <div className="d-flex flex-md-row flex-column justify-content-around align-items-stretch py-2 my-1 row-content-container">
                <div className="d-flex align-items-stretch left-content-box">
                    {itemList}
                </div>
                <div className="d-flex align-items-stretch right-content-box">
                    {personDetails}
                </div>
            </div>

        );
    }
}