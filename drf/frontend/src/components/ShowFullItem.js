import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div >
            <img src={"./img/nofoto.webp"} onClick={() => this.props.onShowItem(this.props.item)}/>
            <h2>{this.props.item.name}</h2>
            <p>{this.props.item.note}</p>
            <b>{this.props.item.price} BYN</b>
            <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
       
        </div>
      </div>
    )
  }
}

export default ShowFullItem
