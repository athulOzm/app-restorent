import AsyncStorage from "@react-native-community/async-storage";




export const storeToken = async (key, token) => {
     
    await AsyncStorage.setItem(key, token) 
}

export const removeToken = async (key) => {

    await AsyncStorage.removeItem(key);
}

export const getToken = async (key) => {
    let value = '';
    try {
      value = await AsyncStorage.getItem(key) || 'none';
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    return value 
}


// const token = localStorage.getItem('token');

//         export const headers = {
//             'content-type': `Application/json`,
//             'Authorization': `Bearer ${token}`
//         }

export const apiserv = 'https://restourent.signcard.net/api';
export const imgpath = 'https://restourent.signcard.net/storage/cover/';

//export const apiserv = 'http://restoapp.link/api';