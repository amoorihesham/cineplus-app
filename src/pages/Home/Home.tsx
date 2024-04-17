import { Suspense } from 'react';
import { BannerSection, LoadingSkeleton, NowShowingSection, TopRatedSection } from '../../components';

const Home = () => {
	return (
		<div className='home-page'>
			<Suspense fallback={<LoadingSkeleton />}>
				<NowShowingSection />
				<TopRatedSection />
			</Suspense>

			<BannerSection />
		</div>
	);
};

export default Home;
