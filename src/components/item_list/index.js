import React from 'react';

const PersonsListGroup = ({personsGroup}) => {

    if (personsGroup) {
        const personList = personsGroup.map((name, idx) => {
            return (
                <li key={idx} className="d-flex align-items-stretch list-group-item">{name}</li>
            );
        });
    }


    return (
        <ul className="list-group list-group-flush col-4">
            {personList}
        </ul>
    );
}

export default PersonsListGroup;

