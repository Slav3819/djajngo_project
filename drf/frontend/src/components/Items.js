import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((out) => (
          <Item onShowItem={this.props.onShowItem} key = {out.id} item={out} onAdd = {this.props.onAdd}/>
      ))}
      </main>
    )
  }
}

export default Items
