import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//Export
const startMainTabs = () => {

    Promise.all([
        Icon.getImageSource("md-map", 30, "purple"),
        Icon.getImageSource("ios-share-alt", 30, "purple")
    ]).then(sources => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    id: 'BottomTabsId',
                    children: [
                        {
                            component: {
                                name: 'vj.SharePlaceScreen',
                                options: {
                                    bottomTab: {
                                        fontSize: 12,
                                        text: 'Share Place',
                                        icon: sources[0]
                                    }
                                }
                            },
                        },
                        {
                            component: {
                                name: 'vj.FindPlaceScreen',
                                options: {
                                    bottomTab: {
                                        text: 'Find Place',
                                        fontSize: 12,
                                        icon: sources[1]
                                    }
                                }
                            },
                        },
                    ],
                }
            }
        });
    });

}

export default startMainTabs;