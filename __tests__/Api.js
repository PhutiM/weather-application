import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import * as Api from '../src/components/Api';

jest.mock('react-native-geolocation-service', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  inFocusDisplaying: jest.fn()
}));

describe('Api', () => {
  const { StoreData } = Api;

  it('StoreData', () => {
    expect(StoreData('Clear', [{ type: 'clear' }])).toEqual({
      _U: 0, _V: 0, _W: null, _X: null
    });
  });

  const { RetrieveData } = Api;

  it('RetrieveData', () => {
    expect(RetrieveData('TestKey')).toEqual({
      _U: 0, _V: 0, _W: null, _X: null
    });
  });

  const { RemoveItem } = Api;

  it('RemoveItem', () => {
    expect(RemoveItem('Clear')).toEqual({
      _U: 0, _V: 0, _W: null, _X: null
    });
  });
});
