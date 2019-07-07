import React, { Component } from 'react'
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';


import PlaceList from '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

    constructor(props) {
        super(props);
        this.isSideDrawerVisible = false;
        Navigation.events().bindComponent(this, "findplacescreen");
    }

    navigationButtonPressed({ buttonId }) {
        if (buttonId === "togglebutton") {
            (!this.isSideDrawerVisible) ? this.isSideDrawerVisible = true : this.isSideDrawerVisible = false
            Navigation.mergeOptions("findplacescreen", {
                sideMenu: {
                    left: {
                        visible: this.isSideDrawerVisible
                    }
                }
            });
        }
    }

    itemSelectedHandler = (key) => {
        const place = this.props.places.find(place => {
            return place.key === key;
        });
        Navigation.push("findplacestack", {
            component: {
                name: 'vj.PlaceDetailScreen',
                passProps: {
                    selectedPlace: place
                }
            }
        });
    }
    render() {
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
}


export default connect(mapStateToProps, null)(FindPlaceScreen);
