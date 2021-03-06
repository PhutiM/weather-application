import {
  TouchableOpacity, Image,
  View, Text
} from 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Favourites from '../src/components/screens/Favourites';

jest.mock('react-native-geolocation-service', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  inFocusDisplaying: jest.fn()
}));

configure({ adapter: new Adapter() });

function shallowSetup(props) {
  return shallow(<Favourites {...props} />);
}

it('should render current state', () => {
  const wrapper = shallowSetup(defaultProps);
  expect(wrapper.find(View).length).toBe(3);
  expect(wrapper.find(Text).length).toBe(1);
  expect(wrapper.find(Image).length).toBe(1);
  expect(wrapper.find(TouchableOpacity).length).toBe(1);
});

const defaultProps = {
  onRegionChangeComplete: jest.fn(),
  GetCurrentLocation: jest.fn(),
  Geolocation: { getCurrentPosition: jest.fn() },
  getStoredData: jest.fn(),
  locations: {
    latitude: 23.987888,
    longitude: -23.44343
  },
  Api: {
    GetCurrentLocation: jest.fn(),
  },
  pointers: [{
    coord: {
      lat: 23.987888,
      lon: -23.44343
    }
  },
  {
    coord: {
      lat: 23.987888,
      lon: -23.44343
    }
  }
  ]
};
