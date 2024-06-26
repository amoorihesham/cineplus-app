import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { movieCardProp } from '../../types/props-types';
import './style.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ data }: movieCardProp) => {
	return (
		<div className='movie-card p-3 rounded-3' style={{ backgroundColor: '#1c2835' }}>
			<img
				src={
					data.backdrop_path === null && data.poster_path === null
						? 'https://placehold.co/1920x1080'
						: data.backdrop_path === null
						? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
						: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
				}
				alt={data.title}
				className='w-100'
			/>
			<h4 className='text-white fw-bold mt-3'>{data.title}</h4>
			<p className='text-white-50 fw-light'>{data.release_date}</p>
			<div className='box d-flex align-items-center justify-content-between'>
				<Link className='btn main-bg text-white' to={`/movie/${data.id}`}>
					Details
				</Link>
				<div className='rate'>
					<p className='text-white fw-bold p-0 m-0'>
						<FontAwesomeIcon icon={faStar} color='gold' style={{ marginRight: 5 }} />
						{data.vote_average.toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
