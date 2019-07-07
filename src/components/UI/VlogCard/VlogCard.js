import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";

import Video from 'react-native-video';

import vidfile from '../../../assets/video.mp4'

export class VlogCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Video}>
                    <Video source={vidfile}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                                      // Store reference
                        controls={true}
                        resizeMode={"contain"}
                        // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        // onError={this.videoError}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo} />
                </View>
                <View style={styles.Info}>
                    <Text>Video Details</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        elevation: 1,
    },
    Video: {
        height: 250,
        elevation: 1,

    },
    container: {
        width: "90%",
        height: 280,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    },
    Info: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default VlogCard
