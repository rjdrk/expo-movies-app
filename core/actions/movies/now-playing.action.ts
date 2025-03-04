import { movieApi } from "@/core/api/movie-api";
import { MoviesDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get<MoviesDBMoviesResponse>('/now_playing');
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        return movies
    } catch (error) {
        console.log(error);
        throw 'Cannot load new playing movies';
    }
}