import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

//Screens
import LoginScreen from './src/screens/Auth/Login/Login'
import SignupScreen from './src/screens/Auth/SignUp/SignUp'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawer from './src/screens/SideDrawer/SideDrawer'

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
Navigation.registerComponentWithRedux("vj.LoginScreen", () => wrapWithProvider(LoginScreen, store));
Navigation.registerComponentWithRedux("vj.SignupScreen", () => wrapWithProvider(SignupScreen, store));
Navigation.registerComponentWithRedux("vj.SharePlaceScreen", () => wrapWithProvider(SharePlaceScreen, store));
Navigation.registerComponentWithRedux("vj.FindPlaceScreen", () => wrapWithProvider(FindPlaceScreen, store));
Navigation.registerComponent("vj.SideDrawer", () => SideDrawer);
// Navigation.registerComponentWithRedux("vj.PlaceDetailScreen", () => wrapWithProvider(PlaceDetailScreen, store));


Navigation.registerComponentWithRedux("vj.PlaceDetailScreen", () => PlaceDetailScreen, Provider, store);

// Navigation.registerComponent('vj.PlaceDetailScreen', () =>
//   (props) => (<Provider store={store}> <PlaceDetailScreen {...props} />
//   </Provider>), () => PlaceDetailScreen);

//Start App Naviagtion
Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'vj.SignupScreen',
            options: {
              topBar: {
                visible: false,
                height: 0
              },
              statusBar: {
                style: 'light' | 'dark',
                drawBehind: true,
              }
            }
          }
        }
      ],
    }
  }
});