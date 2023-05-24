import axios from "axios";
import { BASE_URL } from "./base_url";

// get all
export const getAllCountry = async () => {
    let globalData;
    let URL;
    URL = BASE_URL + '/country';
    await axios.get(URL).then((res) => {
        globalData = res.data;
    });
    return globalData;
};

// get by id 
export const getCountryByID = async (ID) => {
    let globalData;
    await axios.get(`${BASE_URL}/country/${ID}`).then((res) => {
        globalData = res.data;
    });
    return globalData;
};

// delete
export const deleteCountryByID = async (ID) => {
    let deletedCountry;
    await axios.delete(`${BASE_URL}/country/${ID}`).then((res) => {
        deletedCountry = res.globalData;
    });

    return deletedCountry;
};

// post
export const postCountry = (payload) => {
    axios.post(`${BASE_URL}/country`, payload);
};

// put
export const editCountry = (id, payload) => {
    axios.put(`${BASE_URL}/country/${id}`, payload);
}



