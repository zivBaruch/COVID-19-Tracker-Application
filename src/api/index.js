import axios from 'axios';
import CountryPicker from '../components/CountryPicker/CountryPiker';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async( country ) => {
    let changeableURL = url;

    if(country){
        changeableURL = `${url}/countries/${country}`;
    }

    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);

        return { confirmed, recovered, deaths, lastUpdate }

    }catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);

   const modifiedData = data.map((dailyData) => ({
       confirmed: dailyData.confirmed.total,
       deaths: dailyData.deaths.total,
       date: dailyData.reportDate,
   }));

       return modifiedData;
       
    }catch(error){
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try{
        const { data: { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    }catch (error){
        console.log(error);
    }
} 



//
//
//
//const url = 'https://api.covid19api.com/summary';
//
//export const fetchData = async() => {
//    try{
//
//   const { data: { Global, Date } } = await axios.get(url);
//
//   console.log('aaa', Global, Date);
//       return { Global, date: Date }
//       
//    }catch(error){
//
//    }
//}
//
//export const fetchDailyData = async () => {
//    try{
//        const { data } = await axios.get(`${url}/daily`);
//
//   const modifiedData = data.map((dailyData) => ({
//       confirmed: dailyData.confirmed.total,
//       deaths: dailyData.deaths.total,
//       date: dailyData.reportDate,
//   }));
//
//       return modifiedData;
//       
//    }catch(error){
//
//    }
//}
//
//export const fetchCountries = async () => {
//    try{
//        const { data: { Countries }} = await axios.get('https://api.covid19api.com/summary');
//
//        return Countries.map((country) => country.Country);
//    }catch (error){
//        console.log(error);
//    }
//} 

