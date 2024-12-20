import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
          categories: [
            {
              key: 'all',
              name: 'Все'
            },
            {
              key: '11-Система питания МТЗ-1523, МТЗ-2022, МТЗ-2522, МТЗ-3022, МТЗ-3522',
              name: 'Система питания'
            },
            {
              key: '12-Система выпуска газов',
              name: 'Система выпуска газов'
            },
            {
              key: '13-Система охлаждения',
              name: 'Система охлаждения'
            },
          ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}> 
            {el.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Categories
