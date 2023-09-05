import React, { useCallback, FC, memo, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation, useFocusEffect, useRoute, RouteProp } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import { RootStackParamList } from 'src/features/navigation/navigation/root-stack.routing';

import { styles } from 'src/features/photo/presentation/screens/photo.styles';

export const Photo: FC = memo(function Photos() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<RootStackParamList, 'Photo'>>();
    const [isFetching, setIsFetching] = useState(true);
    const { activityIndicatorContainerStyle, fastImageContainer } = styles;

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                title: route.params?.item.photographer,
            });
        }, [navigation])
    );

    return (
        <FastImage
            source={{
                uri: route.params?.item.src.original,
                priority: FastImage.priority.normal,
            }}
            style={fastImageContainer}
            onLoadEnd={() => setIsFetching(false)}
        >
            <View style={activityIndicatorContainerStyle}>
                <ActivityIndicator size="large" animating={isFetching} />
            </View>
        </FastImage>
    );
});
