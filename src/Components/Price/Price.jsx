import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Price = () => {
  return (
    <div>
      <section className="py-20 dark:text-gray-100">
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			<span className="font-bold tracki uppercase dark:text-blue-700">Pricing</span>
			<SectionTitle title='Choose a package'></SectionTitle>
		</div>
		<div className="flex flex-wrap items-stretch -mx-4">
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Beginner</h4>
						<span className="text-6xl font-bold">Free</span>
					</div>
					<p className="mt-3 leadi dark:text-gray-400">Etiam ac convallis enim, eget euismod dolor.</p>
					<ul className="flex-1 mb-6 dark:text-gray-400">
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>10 Listings</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Visible for 30 days</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>24/7 Support</span>
						</li>
					</ul>
					<button type="button" className="inline-block px-5 py-3 font-semibold tracki text-center rounded dark:bg-violet-400 dark:text-gray-900">Buy Now</button>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-blue-900 text-white ">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Pro</h4>
						<span className="text-6xl font-bold">$24
							<span className="text-sm tracki">/month</span>
						</span>
					</div>
					<p className="leadi">Morbi cursus ut sapien sit amet consectetur.</p>
					<ul className="flex-1 space-y-2">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>15 Listings</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Phasellus tellus</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Visible for 60 days</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>24/7 Support</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded dark:bg-gray-800 dark:text-violet-400">Buy Now</a>
				</div>
			</div>
			<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Team</h4>
						<span className="text-6xl font-bold">$72
							<span className="text-sm tracki">/month</span>
						</span>
					</div>
					<p className="leadi dark:text-gray-400">Phasellus ultrices bibendum nibh in vehicula.</p>
					<ul className="space-y-2 dark:text-gray-400">
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>30 Listings</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>1 Featured Job</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>24/7 Premium Support</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Duis odio eros</span>
						</li>
						<li className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Vivamus ut lectus ex</span>
						</li>
					</ul>
					<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded dark:bg-violet-400 dark:text-gray-900">Buy Now</a>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  );
};

export default Price;