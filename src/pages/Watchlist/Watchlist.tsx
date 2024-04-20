import { MovieCard } from '../../components';
import { MovieProps } from '../../types/props-types';
import useWatchList from '../../utils/hooks/useWatchlist';

const Watchlist = () => {
	const { data } = useWatchList();

	if (!data) {
		return (
			<div className='page py-5'>
				<div className='container'>
					<h1 className='text-white fw-bold text-center'>Your Watchlist Empty!</h1>
				</div>
			</div>
		);
	}
	return (
		<div className='watchlist-page py-5'>
			<div className='container'>
				<div>
					<button className='btn btn-danger my-3'>Clear Watchlist</button>
				</div>
				<div className='row g-4'>
					{data?.movies.map((movie: MovieProps) => (
						<div className='col-md-6 col-lg-4 col-xl-3' key={movie.id}>
							<MovieCard data={movie} isWatchlist={true} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Watchlist;
