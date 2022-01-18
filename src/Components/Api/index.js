import axios from 'axios';

const API = 'https://covid19.mathdro.id/api';
export const fetchData = async() => {
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(API)
        return {confirmed,recovered,deaths,lastUpdate};
        
    } catch (error) {
        console.log(error);
    }    

}

