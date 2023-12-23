import './App.css'
import CenterSection from './features/center-section/ui/center-section.component.tsx'
import { deviceController } from './core/infrastructure/device.controller.ts'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		deviceController()
	}, [])

	return (
		<div>
			<CenterSection />
		</div>
	)
}

export default App
