import React from 'react';
import './PreviewMovie.scss';
import TV from 'assets/icon/TV.svg';
import { Link, useLocation } from 'react-router-dom';

function PreviewMovie() {
	const location = useLocation();

	return (
		<div
			className={`pre-movie ${
				location.pathname == '/' ? 'd-block' : 'd-none'
			}`}
		>
			<div className="d-flex h-100 w-100">
				<div className="imgHv1">
					<Link className="logo text-white" to="/">
						<img className="imgLG" src={TV} />
						<b>&nbsp;Movie</b>
						<p>Your</p>
					</Link>
					<div className="img-hover-zoom">
						<img
							src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
							alt="This zooms-in really well and smooth"
						/>
						<div className="textImgCenter">Centered</div>
					</div>
				</div>
				<div className="imgHv2">
					<div className="img-hover-zoom">
						<img
							src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
							alt="This zooms-in really well and smooth"
						/>
						<div className="textImgCenter">Centered</div>
					</div>
					<div className="img-hover-zoom">
						<img
							src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
							alt="This zooms-in really well and smooth"
						/>
						<div className="textImgCenter">Centered</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PreviewMovie;
