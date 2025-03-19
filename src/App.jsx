import React from 'react'
import Main from './components/Main'
import Services from './components/Services'
import About from './components/About'
import MainLayout from './layout/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TeamA from './components/Teams/TeamA'
import Advisors from './components/Advisors'
import Faculty from './components/Faculty'
import Discord from './components/Discord'

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
          </>
      },
      {
        path: '/about-us',
        element:
          <>
            <About />
            <Services />
          </>
      },
      {
        path: '/faculty',
        element:
          <>
            <Faculty />
          </>
      },
      {
        path: '/advisors',
        element:
          <>
            <Advisors />
          </>
      },
      {
        path: '/team-2025',
        element:
         <>
          <TeamA />
         </>
      },
      {
        path: '/discord',
        element:
          <>
            <Discord />
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