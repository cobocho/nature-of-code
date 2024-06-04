import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainPage } from './pages/Main/MainPage';
import { Ch00_01 } from './pages/Ch00/Ch00_01';
import { Ch00_02 } from './pages/Ch00/Ch00_02';
import { Ch00_03 } from './pages/Ch00/Ch00_03';
import { Ch00_04 } from './pages/Ch00/Ch00_04';
import { Ch00_05 } from './pages/Ch00/Ch00_05';
import { Ch00_06 } from './pages/Ch00/Ch00_06';
import { Ch00_07 } from './pages/Ch00/Ch00_07';
import { Ch00_08 } from './pages/Ch00/Ch00_08';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/ch00-01',
		element: <Ch00_01 />,
	},
	{
		path: '/ch00-02',
		element: <Ch00_02 />,
	},
	{
		path: '/ch00-03',
		element: <Ch00_03 />,
	},
	{
		path: '/ch00-04',
		element: <Ch00_04 />,
	},
	{
		path: '/ch00-05',
		element: <Ch00_05 />,
	},
	{
		path: '/ch00-06',
		element: <Ch00_06 />,
	},
	{
		path: '/ch00-07',
		element: <Ch00_07 />,
	},
	{
		path: '/ch00-08',
		element: <Ch00_08 />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
