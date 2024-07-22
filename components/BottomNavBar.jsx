import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Index from "../Index";
import ResumeBuilder from './resumeBuilder/ResumeBuilder';
import OpportunitiesScreen from './OpportunitiesScreen';
import ProfileScreen from './profilescreens/Profile';

const BottomNavBar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
        { key: 'builder', title: 'Builder', focusedIcon: 'file-document-edit-outline' },
        { key: 'opportunities', title: 'Opportunities', focusedIcon: 'go-kart-track' },
        { key: 'profile', title: 'Profile', focusedIcon: 'face-man' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Index,
        builder: ResumeBuilder,
        opportunities: OpportunitiesScreen,
        profile: ProfileScreen,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BottomNavBar;