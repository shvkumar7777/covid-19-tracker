import React, { Component } from 'react'
import { dailyDataResponse, fetchCountries, fetchData } from './Components/Api'
import Cards from './Components/Cards/Cards'
import Charts from './Components/Charts/Charts'
import CountryPicker from './Components/CountryPicker/CountryPicker'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: {},
      country:'',
    }
  }
   
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData ,country:country})
  }

  render() {
    const { data, country } = this.state;
     return (
      <div>
         <Cards data={data}></Cards>
         <CountryPicker  country= {country} handleCountryChange={this.handleCountryChange}/>        
        <Charts data={data} country={country}></Charts>
      </div>
    )
  }
}

export default App
