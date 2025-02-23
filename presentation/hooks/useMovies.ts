import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMovieAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24
    });

    const popularQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'popular'],
        queryFn: ({ pageParam }) => {
            console.log({ pageParam })
            return popularMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    });

    const topRatedQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'topRated'],
        queryFn: ({ pageParam }) => {
            console.log({ pageParam })
            return topRatedMovieAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    });

    const upcomingQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'upcoming'],
        queryFn: ({ pageParam }) => {
            console.log({ pageParam })
            return upcomingMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    });

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
    };
}