import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideShow from '@/presentation/hooks/components/movies/MainSlideShow'
import MovieHorizontalList from '@/presentation/hooks/components/movies/MovieHorizontalList'

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();
    const {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
    } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={50} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>Movie App</Text>
                <MainSlideShow
                    movies={nowPlayingQuery.data ?? []}
                />
                <MovieHorizontalList
                    title='Populares'
                    movies={popularQuery.data ?? []}
                    className='mb-5'
                />
                <MovieHorizontalList
                    title='Mejor Calificadas'
                    movies={topRatedQuery.data ?? []}
                    className='mb-5'
                />
                <MovieHorizontalList
                    title='Próximamente'
                    movies={upcomingQuery.data ?? []}
                />
                <MovieHorizontalList
                    movies={upcomingQuery.data ?? []}
                />
            </View>
        </ScrollView>
    )
}

export default HomeScreen