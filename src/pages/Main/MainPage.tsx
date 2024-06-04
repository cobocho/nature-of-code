import { Link } from 'react-router-dom';

export const MainPage = () => {
	return (
		<div
			style={{
				display: 'flex',
				gap: '20px',
			}}
		>
			<Link to="/ch00-01">CH00-01</Link>
			<Link to="/ch00-02">CH00-02</Link>
			<Link to="/ch00-03">CH00-03</Link>
			<Link to="/ch00-04">CH00-04</Link>
			<Link to="/ch00-05">CH00-05</Link>
			<Link to="/ch00-06">CH00-06</Link>
			<Link to="/ch00-07">CH00-07</Link>
			<Link to="/ch00-08">CH00-08</Link>
		</div>
	);
};
