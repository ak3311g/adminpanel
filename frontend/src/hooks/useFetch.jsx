import React, { useEffect, useState } from 'react'
import api from '../services/api';

const useFetch = (url) => {
    const [userData, setUserData] = useState([]);
    const getData = async () => {
      try {
        const response = await api.get(url);
        if (response) {
            if(url === "/users"){
                console.log(response?.data.users);
                setUserData(response?.data.users);
            }
            else if(url === "/products"){
                console.log(response?.data.products);
                setUserData(response?.data?.products);
            }
            else {
                console.log("Invalid URL");
            }
         
        }
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
        getData();
      }, []);
    

  return userData;
}

export default useFetch