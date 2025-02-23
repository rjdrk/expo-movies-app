import { movieApi } from "@/core/api/movie-api";
import { MoviesDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number
}

export const topRatedMovieAction = async ({
    page = 1,
    limit = 10
}: Options) => {
    try {
        const { data } = await movieApi.get<MoviesDBMoviesResponse>('/top_rated', {
            params: {
                page: page,
            }
        });
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
        return movies
    } catch (error) {
        console.log(error);
        throw 'Cannot load top rated movies';
    }
}