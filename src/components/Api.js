import axios from 'axios';
import Geolocation from 'react-native-geolocation-service';
import { Platform, PermissionsAndroid } from 'react-native';

const key = '2b9e0a7e9edbac7f28ef0b62cacf07c1';

export const GetWeather = async (latitude, longitude) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  }
  catch (err) {
    return err;
  }
}

export const GetCurrentLocation = async (latitude, longitude) => {
  console.log(latitude, "lat")

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
  try {
    const resp = await axios.get(url);
    return resp.data;
  }
  catch (err) {
    return err;
  }
}

export async function requestPermissions() {
  if (Platform.OS === 'ios') {
    Geolocation.requestAuthorization('whenInUse');
    Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
    });
  }

  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
}