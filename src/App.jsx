import React from 'react'
import Main from './components/Main'
import Services from './components/Services'
import About from './components/About'
import MainLayout from './layout/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TeamA from './components/Teams/TeamA'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
    children: [
      {
        path: '/',
        element: 
          <>
            <Main />
            <About />
            <Services />
          </>
      },
      {
        path: '/team-2025',
        element:
         <>
          <TeamA />
         </>
      }
    ]
	}
])

function App() {
  return (
    <>
      <main>
          <RouterProvider router={appRouter} />
      </main>
    </>
  )
}
export default App