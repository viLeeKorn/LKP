import React, { useCallback, useEffect, memo, FC } from 'react';
import { ActivityIndicator, View, Text, Pressable, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, FlatListProps, ListRenderItem, ViewProps } from 'react-native';
import FastImage from 'react-native-fast-image';

import { FETCH_PHOTOS } from 'src/features/photos/data/store/photos.action';
import { Photo } from 'src/features/photos/data/store/photos.model';
import { getPhotos, getIsPhotosFetching } from 'src/features/photos/data/store/photos.selectors';
import { RootStackParamList } from 'src/features/navigation/navigation/root-stack.routing';

import { styles } from 'src/features/photos/presentation/screens/photos.styles';

export interface PhotosProps extends ViewProps {
    flatListProps?: Omit<
        FlatListProps<Photo>,
        'horizontal' | 'data' | 'renderItem' | 'ItemSeparatorComponent' | 'keyExtractor'
    >;
}

export const Photos: FC<PhotosProps> = memo(function Photos({ flatListProps }: PhotosProps) {
    const photosData = useSelector(getPhotos);
    const isFetching = useSelector(getIsPhotosFetching);
    const {
        activityIndicatorContainerStyle,
        fastImageContainerStyles,
        flatListContentContainerStyle,
        imageContainerStyles,
        itemSeparatorStyles,
    } = styles;

    const dispatch = useDispatch();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleViewPress = useCallback(
        (item: Photo) => {
            navigation.navigate('Photo', { item });
        },
        [navigation]
    );

    useEffect(() => {
        refresh();
    }, []);

    const renderPhotoItem: ListRenderItem<Photo> = useCallback(
        ({ item }) => {
            return (
                <Pressable onPress={() => handleViewPress(item)}>
                    <Text>{item.photographer}</Text>
                    <View style={imageContainerStyles}>
                        <FastImage
                            source={{
                                uri: item.src.portrait,
                            }}
                            style={fastImageContainerStyles}
                        />
                    </View>
                </Pressable>
            );
        },
        [handleViewPress]
    );

    const ItemSeparator = useCallback((): React.ReactElement | null => {
        return <View style={itemSeparatorStyles} />;
    }, []);

    const renderNoItems = useCallback((): React.ReactElement | null => {
        return isFetching ? null : (
            <View>
                <Text>There are no photos</Text>
            </View>
        );
    }, [isFetching]);

    const keyExtractor = useCallback((item: Photo, index: number) => `${item.id}${index}`, []);

    const refresh = useCallback(() => {
        dispatch(FETCH_PHOTOS.TRIGGER({}));
    }, [dispatch]);

    const loadMore = useCallback(() => {
        if (
            photosData &&
            photosData.photos.length > 0 &&
            photosData.page * photosData.per_page < photosData.total_results
        ) {
            dispatch(FETCH_PHOTOS.TRIGGER({ page: photosData.page + 1 }));
        }
    }, [dispatch, photosData]);

    if (!photosData?.photos || (isFetching && photosData?.photos.length === 0)) {
        return (
            <View style={activityIndicatorContainerStyle}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <FlatList
            contentContainerStyle={flatListContentContainerStyle}
            {...flatListProps}
            renderItem={renderPhotoItem}
            numColumns={1}
            horizontal={false}
            ListEmptyComponent={renderNoItems}
            ItemSeparatorComponent={ItemSeparator}
            data={photosData?.photos}
            refreshing={isFetching}
            onRefresh={refresh}
            keyExtractor={keyExtractor}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
        />
    );
});
