import React from 'react'
import PropTypes from 'prop-types';
import NoImage  from '../../assets/NoImage.png';

const Categorie = ({ rCategory, propStyle, cardStyle }) => {
    return (
        <div style={cardStyle} className="card text-white bg-dark mb-3">
            <h3 className="card-header">{rCategory.name}</h3>
            <div className="card-body">
                { rCategory.restaurantCategoryImage !== null 
                    ?
                    <img style={propStyle} src={rCategory.restaurantCategoryImage} alt={rCategory.name} />
                    :
                    <img style={propStyle} src={NoImage} alt={rCategory.name} />
                }
                
            </div>
        </div>
    )
}

Categorie.propTypes = {
    rCategory : PropTypes.object.isRequired
}

export default Categorie;
