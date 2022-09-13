import React, { useRef } from 'react';
import './discovery.scss';
import Item from './item-discovery/Item';
import landing from 'assets/icon/discovery.svg';
import arr from 'assets/icon/downward-arrow.png';
function Discovery() {
	const ref = useRef(null);
	const scrollContent = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='discovery container'>
			<div className='discovery__landing'>
				<img src={landing} />
				<div className='discovery__landing-content'>
					<div className='wavy'>
						<span style={{ '--i': 1 }}>L</span>
						<span style={{ '--i': 2 }}>E</span>
						<span style={{ '--i': 3 }}>T</span>
						<span style={{ '--i': 4 }}>'</span>
						<span style={{ '--i': 5 }}>S</span>
						&ensp;
						<span style={{ '--i': 6 }}>E</span>
						<span style={{ '--i': 7 }}>N</span>
						<span style={{ '--i': 8 }}>J</span>
						<span style={{ '--i': 9 }}>O</span>
						<span style={{ '--i': 10 }}>Y</span>
						&ensp;
						<span style={{ '--i': 11 }}>T</span>
						<span style={{ '--i': 12 }}>O</span>
						<span style={{ '--i': 13 }}>G</span>
						<span style={{ '--i': 14 }}>E</span>
						<span style={{ '--i': 15 }}>T</span>
						<span style={{ '--i': 16 }}>H</span>
						<span style={{ '--i': 17 }}>E</span>
						<span style={{ '--i': 18 }}>R</span>
					</div>

					<button onClick={scrollContent} ref={ref}>
						Get started now <img src={arr} />
					</button>
				</div>
			</div>
			<Item />
		</div>
	);
}

export default Discovery;
