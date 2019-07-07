import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

//Export
const startMainTabs = () => {

    Promise.all([
        Icon.getImageSource("ios-videocam", 30, "purple"),
        Icon.getImageSource("ios-paper", 30, "purple"),
        Icon.getImageSource("ios-menu", 30, "purple")
    ]).then(sources => {
        Navigation.setRoot({
            root: {
                sideMenu: {
                    id: 'sidemenu',
                    left: {
                        component: {
                            name: 'vj.SideDrawer',
                            id: "toggleside"
                        }
                    },
                    center: {
                        bottomTabs: {
                            id: 'BottomTabsId',
                            children: [
                                {
                                    stack: {
                                        id: "shareplacestack",
                                        children: [
                                            {
                                                component: {
                                                    id: 'shareplacescreen',
                                                    name: 'vj.SharePlaceScreen',
                                                    options: {
                                                        topBar: {
                                                            title: {
                                                                text: 'Share Place'
                                                            },
                                                            leftButtons: [
                                                                {
                                                                    id: 'togglebutton',
                                                                    icon: sources[2],
                                                                }
                                                            ],
                                                        },
                                                        bottomTab: {
                                                            fontSize: 12,
                                                            text: 'Share Place',
                                                            icon: sources[0]
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    stack: {
                                        id: "findplacestack",
                                        children: [
                                            {
                                                component: {
                                                    id: 'findplacescreen',
                                                    name: 'vj.FindPlaceScreen',
                                                    options: {
                                                        topBar: {
                                                            title: {
                                                                text: 'Find Place'
                                                            },
                                                            leftButtons: [
                                                                {
                                                                    id: 'togglebutton',
                                                                    icon: sources[2]
                                                                }
                                                            ],
                                                        },
                                                        bottomTab: {
                                                            text: 'Find Place',
                                                            fontSize: 12,
                                                            icon: sources[1]
                                                        }
                                                    }
                                                }
                                            }
                                        ]

                                    }
                                }
                            ]
                        }
                    }
                },

            }
        });
    });

}

export default startMainTabs;