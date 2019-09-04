import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const RESTAURANTS_QUERY = gql `
    {
        getRestaurants {
            _id
            name
            address
            restaurantImage
        }
    }
`;

const style = {
    "height" : "150px",
    "width" : "auto",
    "display": "block"
}

const cardStyle = {
    "maxWidth": "20rem"
}

const Restaurants = props => {
    return (
        <Query query={RESTAURANTS_QUERY}>

            {
                ({loading, error, data : { getRestaurants } }) => {
                    if(loading) return (<p>Pidiendo restaurants...</p>);
                    if(error) return (error);
                    
                    return (
                        <div className="row col-md-12 justify-content-around">
                        { 
                            getRestaurants.map(restaurant => ( 
                                <div style={cardStyle} className="card text-white bg-dark mb-3" key={restaurant._id}>
                                    <h3 className="card-header">{restaurant.name}</h3>
                                    <div className="card-body">
                                        <h4 className="card-title">{restaurant.address}</h4>
                                        <img style={style} src={restaurant.restaurantImage} alt={restaurant.name} />
                                    </div>
                                </div>
                            ))
                        }
                        </div> 
                    )

                }
            }
        
        </Query>
    )
}


export default Restaurants
