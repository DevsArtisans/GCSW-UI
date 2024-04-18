import { Link } from "react-router-dom"
import MainLayout from "../../layout/MainLayout"

const Home = () => {
  return (
    <MainLayout>
      <div className='container w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-4 rounded-lg bg-white'>
          <div>
            <Link
              to='/dashboard'
              className='block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            >
              <h5 className='mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-black'>
                Proyecto: App mobile
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                Equipo: Dinamita
              </p>
            </Link>
          </div>
          <div>
            <a
              href='#'
              className='block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            >
              <h5 className='mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-black'>
                Proyecto: App mobile
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                Equipo: Dinamita
              </p>
            </a>
          </div>
          <div>
            <a
              href='#'
              className='block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            >
              <h5 className='mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-black'>
                Proyecto: App mobile
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                Equipo: Dinamita
              </p>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
