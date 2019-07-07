import { Navigation } from 'react-native-navigation';

//Export
const startSignUp = () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'vj.LoginScreen',
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
}

export default startSignUp;