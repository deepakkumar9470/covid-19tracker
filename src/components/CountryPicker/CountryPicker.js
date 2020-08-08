import React,{useState, useEffect} from 'react';
import styles from './CountryPicker.module.css';
import {NativeSelect ,FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api';


const CountryPicker = ({handleCountryChange}) => {
const[fetchedCountriesData,setfetchedCountriesData] = useState([]);


useEffect(()=>{
  const fetchAPI= async ()=>{
      setfetchedCountriesData(await fetchCountries());
  } 
  fetchAPI();

},[fetchedCountriesData]);
// console.log(fetchedCountriesData);


    return (
          <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(event)=>handleCountryChange(event.target.value)}>
             <option value="">Global</option>
             {
                 fetchedCountriesData.map((country,index)=>
                  <option value={country} key={index}>{country}</option>
                 )
             }
            </NativeSelect>
          </FormControl>
    )
}

export default CountryPicker;
