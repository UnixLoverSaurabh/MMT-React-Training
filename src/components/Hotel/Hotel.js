import React, { Component } from 'react';

class Hotel extends Component {

        render() {
                const { hotelDetails } = this.props;

                return (
                        <div>
                                <img src={hotelDetails.image} alt={'loading failed'} />
                                <h1>{hotelDetails.name}</h1>
                                <h3>{hotelDetails.price}</h3>
                        </div>
                );
        };
};

export default Hotel;