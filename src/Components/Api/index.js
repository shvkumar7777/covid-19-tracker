import axios from 'axios';

const API_url = 'https://covid19.mathdro.id/api';
export const fetchData = async (country) => {
    let updatedUrl = API_url;
    if (country) {
        updatedUrl = `${API_url}/countries/${country}`
    }
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(updatedUrl)
        return {confirmed,recovered,deaths,lastUpdate};
        
    } catch (error) {
        console.log(error);
    }    

}

export const dailyDataResponse = async () => {
  try {
      const {data} = await axios.get(`${API_url}/daily`)
      
      const modifiedData = 
          data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
      return modifiedData;
  } catch (error) {
      console.log(error)
  }
}

export const fetchCountries = async() => {
    try {
        const {data:{countries}} = await axios.get(`${API_url}/countries`)
        
        return countries.map((country)=>country.name)
    } catch (error) {
        console.log(error);
    }
}


