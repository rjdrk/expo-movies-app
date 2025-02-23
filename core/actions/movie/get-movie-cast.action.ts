import { movieApi } from "@/core/api/movie-api";
import { MovieDBCastResponse } from "@/infraestructure/interfaces/moviedb-cast.response";
import { CastMapper } from "@/infraestructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number | string) => {
    try {
        const { data } = await movieApi.get<MovieDBCastResponse>(`/${movieId}/credits`);
        return data.cast.map(CastMapper.fromMovieDBCastToEntity);
    } catch (error) {
        console.log(error);
        throw 'Cannot load cast movies';
    }
}