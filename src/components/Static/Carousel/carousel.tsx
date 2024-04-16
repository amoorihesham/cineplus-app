import useAllPD from '../../../utils/hooks/useAllPopularData';
import CarouselItem from './CarouselItem';
import './style.css';

const Carousel = () => {
	const {
		data: { results },
		error,
	} = useAllPD(1);

	if (error) {
		console.log(error);
	}
	const topThreeMovies = results?.slice(0, 3);

	return (
		<div id='carouselExampleAutoplaying' className='carousel' data-bs-ride='carousel'>
			<div className='carousel-inner'>
				<CarouselItem data={topThreeMovies[0]} isActive={true} />
				<CarouselItem data={topThreeMovies[1]} isActive={false} />
				<CarouselItem data={topThreeMovies[2]} isActive={false} />
				<button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='prev'>
					<span className='carousel-control-prev-icon' aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button className='carousel-control-next' type='button' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='next'>
					<span className='carousel-control-next-icon' aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
};

export default Carousel;
