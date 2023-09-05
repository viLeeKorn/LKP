import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    activityIndicatorContainerStyle: {
        position: 'absolute',
        top: '50%',
        width: '100%',
    },
    fastImageContainerStyles: {
        borderRadius: 16,
        height: 160,
        width: 160,
    },
    flatListContentContainerStyle: {
        alignItems: 'center',
        flexGrow: 1,
        marginHorizontal: 16,
    },
    imageContainerStyles: {
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
        shadowColor: 'black',
        borderRadius: 16,
        height: 160,
        width: 160,
    },
    itemSeparatorStyles: {
        marginTop: 16,
    },
});
