import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

//Screens
import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'

//Redux
import configureStore from './src/store/configureStore';

const store = configureStore();

const wrapWithProvider = (component, store) => (
  () => React.createElement(
    Provider,
    { store },
    React.createElement(component, null)
  )
);

//Register Screens
Navigation.registerComponentWithRedux("vj.AuthScreen", () => wrapWithProvider(AuthScreen, store));
Navigation.registerComponentWithRedux("vj.SharePlaceScreen", () => wrapWithProvider(SharePlaceScreen, store));
Navigation.registerComponentWithRedux("vj.FindPlaceScreen", () => wrapWithProvider(FindPlaceScreen, store));

//Start App Naviagtion
Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'vj.AuthScreen',
            options: {
              topBar: {
                title: {
                  text: 'Login'
                }
              }
            }
          }
        }
      ],
    }
  }
});