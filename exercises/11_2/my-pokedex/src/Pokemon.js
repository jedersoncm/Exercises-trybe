import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image} = this.props;

    return (
      <div className='container'>
        <div className='data'>
          {`${name}`}<br />
          {`${type}`}<br />
          {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </div>
        <div>
          <img src={image} ></img>
        </div>
      </div>
    );
  }
}

export default Pokemon;