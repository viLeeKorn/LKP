import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Photos } from 'src/features/photos/presentation/screens/photos.component';
import { photosNavigationOptions } from 'src/features/photos/presentation/navigation/navigation-options.factory';
import { Photo } from 'src/features/photo/presentation/screens/photo.screens';

const RootStack = createStackNavigator();

export const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="Photos" component={Photos} options={photosNavigationOptions} />
                <RootStack.Screen name="Photo" component={Photo} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
