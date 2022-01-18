import React, { Component } from 'react'
import { fetchData } from './Components/Api'
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts'
import CountryPicker from './Components/CountryPicker/CountryPicker'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data :{}
    }
  }
   
  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({data:fetchedData})
  }

  render() {
    const {data} = this.state
     return (
      <div>
        <Cards data={data}></Cards>
        <Charts />
        <CountryPicker/>        
      </div>
    )
  }
}

export default App
