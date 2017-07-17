// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Producer: {this.props.producer}</h2>
                <h3>Has Watermark?: {this.props.hasWatermark ? 'true' : 'false'}</h3>
                <h3>Color: {this.props.color}</h3>
                <h3>Weigth: {this.props.weight}</h3>
            </div>
            )
    }
}

Product.defaultProps = {
    hasWatermark: false
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
    weight: function(key, value) {
        if (key[value] < 80 || key[value] > 300) {
            return new Error('Weight must be between 80 and 300')
        } 
         if (key[value] === undefined) {
            return new Error('Weigth is required')
        } 
         if (isNaN(key[value])) {
            return new Error('Input is not a number')
        } 
    }
}

