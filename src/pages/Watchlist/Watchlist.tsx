import { MovieCard } from '../../components';
import { MovieProps } from '../../types/props-types';
import useWatchList from '../../utils/hooks/useWatchlist';

const Watchlist = () => {
	const { data, isError } = useWatchList();
	console.log(isError);
	if (isError || data.length === 0) {
		return (
			<div className='watchlist-page py-5'>
				<div className='container'>
					<h1>Your Watchlist Empty!</h1>
				</div>
			</div>
		);
	}
	return (
		<div className='watchlist-page py-5'>
			<div className='container'>
				<div className='row g-4'>
					{data?.map((movie: MovieProps) => (
						<div className='col-md-6 col-lg-4 col-xl-3' key={movie.id}>
							<MovieCard data={movie} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Watchlist;
