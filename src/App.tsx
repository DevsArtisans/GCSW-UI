import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"

import Loader from "./common/Loader"
import PageTitle from "./components/PageTitle"
import Login from "./pages/Authentication/Login"
import Register from "./pages/Authentication/Register"
import Dashboard from "./pages/Dashboard/Dashboard"
import Members from "./pages/Dashboard/Members"
import CreateProject from "./pages/Dashboard/Project/CreateProject"
import CreateProjectPart2 from "./pages/Dashboard/Project/CreateProjectPart2"
import Project from "./pages/Dashboard/Project/Project"
import Settings from "./pages/Dashboard/Settings"
import Tasks from "./pages/Dashboard/Tasks"
import FormElements from "./pages/Form/FormElements"
import FormLayout from "./pages/Form/FormLayout"
import Home from "./pages/Main/Home"
import Teams from "./pages/Main/Teams"
import Profile from "./pages/Profile"
import Alerts from "./pages/UiElements/Alerts"
import Buttons from "./pages/UiElements/Buttons"
import { useAuthStore } from "./hooks/Auth/useAuthStore"

function App() {
  const [loading, setLoading] = useState<boolean>(true)
  const { pathname } = useLocation()
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  if (status === "checking") {
    return <Loader />
  }

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path='/*' element={<Navigate to='/login' />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/register/*' element={<Register />} />
        </>
      ) : (
        <>
          <Route path='/*' element={<Navigate to='/' />} />

          <Route
            path='/'
            index
            element={
              <>
                <PageTitle title='Home' />
                <Home />
              </>
            }
          />
          <Route
            path='/teams'
            element={
              <>
                <PageTitle title='Tables' />
                <Teams />
              </>
            }
          />
          <Route
            path='/:teamName/tasks'
            element={
              <>
                <PageTitle title='Tasks' />
                <Tasks />
              </>
            }
          />
          <Route
            path='/:teamName/settings'
            element={
              <>
                <PageTitle title='Settings' />
                <Settings />
              </>
            }
          />
          <Route
            path='/:teamName/members'
            element={
              <>
                <PageTitle title='Settings' />
                <Members />
              </>
            }
          />
          <Route
            path='/:teamName/:projectName'
            element={
              <>
                <PageTitle title='Project' />
                <Project />
              </>
            }
          />
          <Route
            path='/:teamName/dashboard'
            element={
              <>
                <PageTitle title='Dashboard' />
                <Dashboard />
              </>
            }
          />

          <Route
            path='/:teamName/create-project'
            element={
              <>
                <PageTitle title='Tables' />
                <CreateProject />
              </>
            }
          />
          <Route
            path='/:teamName/create-project-part-2'
            element={
              <>
                <PageTitle title='Tables' />
                <CreateProjectPart2 />
              </>
            }
          />
          <Route
            path='/forms/form-elements'
            element={
              <>
                <PageTitle title='Form Elements' />
                <FormElements />
              </>
            }
          />
          <Route
            path='/forms/form-layout'
            element={
              <>
                <PageTitle title='Form Layout' />
                <FormLayout />
              </>
            }
          />
          <Route
            path='/ui/alerts'
            element={
              <>
                <PageTitle title='Alerts' />
                <Alerts />
              </>
            }
          />
          <Route
            path='/ui/buttons'
            element={
              <>
                <PageTitle title='Buttons' />
                <Buttons />
              </>
            }
          />
        </>
      )}
    </Routes>
  )
}

export default App
