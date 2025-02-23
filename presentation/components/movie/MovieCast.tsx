import { View, Text } from 'react-native'
import React from 'react'
import { Cast } from '@/infraestructure/interfaces/cast.interface'
import { FlatList } from 'react-native-gesture-handler'
import { MovieActorCard } from './MovieActorCard'

interface Props {
    cast: Cast[]
}

const MovieCast = ({ cast }: Props) => {
    return (
        <View className='mt-5 mb-20'>
            <Text className='font-bold text-2xl px-5'>Actores</Text>
            <FlatList
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <MovieActorCard actor={item} />}
            />
        </View>
    )
}

export default MovieCast