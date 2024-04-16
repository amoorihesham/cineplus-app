import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { CarouselItemProps } from '../../../types/props-types';

const CarouselItem = ({ data, isActive }: CarouselItemProps) => {
	return (
		<div className={`carousel-item ${isActive ? 'active' : ''}`} key={data.id}>
			<div className='image-continer'>
				<div className='overlay'></div>
				<img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} className='d-block w-100' alt='...' />
			</div>
			<div className='carousel-caption d-none d-md-block'>
				<h1 className='hero-heading'>{data.title}</h1>
				<p className=' hero-para'>{data.overview}</p>
				<div className='detail-wraper'>
					<p className='hero-status '>
						Date: <span className='fw-bold text-main-blue'>{data.release_date}</span>
					</p>
					<Link to={`/movie/${data.id}`} className='btn main-bg text-white'>
						<FontAwesomeIcon style={{ marginRight: 5 }} icon={faExclamationCircle} />
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CarouselItem;
