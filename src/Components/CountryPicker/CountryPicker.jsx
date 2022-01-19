import React, { useState,useEffect } from 'react'
import { FormControl,NativeSelect } from '@material-ui/core'

import styles from './CountryPicker.module.css'
import { fetchCountries } from '../Api';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
           setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    },[setFetchedCountries])
    return (
        <FormControl className={styles.formContainer}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value='global'> Global</option>
                {fetchedCountries.map((country,index)=> <option key={index} value={country}> {country}</option>) }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
