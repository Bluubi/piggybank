import App from '../App.tsx'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from '../shared/header/header.component.tsx'
import NewSaving from '../features/savings/new/ui/new-saving.component.tsx'

export const routes = createBrowserRouter([
	{
		path: '',
		element: (
			<>
				<Header />
				<Outlet />
			</>
		),
		children: [
			{
				path: '',
				element: <App />,
			},
			{
				path: 'saving',
				children: [
					{
						path: 'new',
						element: <NewSaving />,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <App />,
	},
])
