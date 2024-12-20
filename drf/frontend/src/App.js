import axios from 'axios';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';


const baseUrl = "http://localhost:8000"

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = { 
      orders: [],
      currentItems: [],
      items: [],
      fullItem: {},
      showFullItem: false
    }
    
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    
  }
  
  componentDidMount(){
    let data;
    axios.get(baseUrl)
    .then(res => {
      data = res.data;
      this.setState({
        items: data,
        currentItems: data
      });
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    return(
    <div className='wrapper'>
      <Header orders = {this.state.orders} onDelete = {this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
      {this.state.showFullItem  && <ShowFullItem  item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>}
      <Footer />
    </div>
    )
  }
  
  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }


  chooseCategory(category){
    if (category === "all") {
      this.setState({currentItems: this.state.items})
      return
    }
    
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder (id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]} )
  }

}

export default App;
