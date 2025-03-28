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
import Endorsement from './components/Endorsement'
import UnderDevelopment from './components/UnderDevelopment'
import Maintainers from './components/Maintainers'
// import Fireships from './components/Fireships'

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
      // {
      //   path: '/fireships',
      //   element:
      //     <>
      //       <Fireships />
      //     </>
      // },
      {
        path: '/team-2025',
        element:
         <>
          <TeamA />
         </>
      },
      {
        path: '/upcoming-events',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/past-events',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/involved',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/github',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/stack-overflow',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/kaggle',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/discord',
        element:
          <>
            <Discord />
          </>
      },
      {
        path: '/achievements',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/endorsements',
        element:
          <>
            <Endorsement />
          </>
      },
      {
        path: '/maintainers',
        element:
          <>
            <Maintainers />
          </>
      },
      {
        path: '/open-source',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/activities',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/documents',
        element:
          <>
            <UnderDevelopment />
          </>
      },
      {
        path: '/contact',
        element:
          <>
            <UnderDevelopment />
          </>
      },
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