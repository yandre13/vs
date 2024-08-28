import React from 'react'

function Loader() {
	return (
		<div
			className="bg-white"
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<video autoPlay muted loop id="myVideo" style={{width: 400}} playsInline>
				<source src="img/loader.mp4" type="video/mp4" />
			</video>
		</div>
	)
}

export default Loader
