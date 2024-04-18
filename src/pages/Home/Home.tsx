import { Suspense } from 'react';
import { BannerSection, LoadingSkeleton, NowShowingSection, TopRatedSection } from '../../components';

const Home = () => {
	return (
		<div className='home-page'>
			<NowShowingSection />
			<TopRatedSection />

			<BannerSection />
		</div>
	);
};

export default Home;
