import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

class PlaceDetail extends Component {

  placeDeletedHandler = () => {
    this.props.ondeleteplace(this.props.selectedPlace.key);
    Navigation.pop("findplacestack");
  }

  render() {
    return (
      <View style={styles.container} >

        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} color="red" name="ios-trash" />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    ondeleteplace: (key) => dispatch(actions.deletePlace(key))
  };
}


export default connect(null, mapDispatchToProps)(PlaceDetail);
