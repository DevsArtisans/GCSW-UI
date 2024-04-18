import { Link, useParams } from "react-router-dom"
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "../../../layout/DefaultLayout"

const CreateProjectPart2 = () => {
  const { teamName } = useParams()

  return (
    <DefaultLayout teamName={teamName!}>
      <Breadcrumb pageName='Crear Proyecto' />
      <div className='grid grid-cols-1 w-1/2 mx-auto  '>
        <div className='flex flex-col '>
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <div>
                <h3 className='mb-3 block text-lg text-black dark:text-white'>
                  Seleccione la metodologia:
                </h3>
              </div>
              <div>
                <ul className='grid w-full gap-6 md:grid-cols-2'>
                  <li>
                    <input
                      type='radio'
                      id='hosting-small'
                      name='hosting'
                      value='hosting-small'
                      className='hidden peer'
                      required
                    />
                    <label
                      htmlFor='hosting-small'
                      className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                    >
                      <div className='block'>
                        <div className='w-full text-2xl font-semibold'>RUP</div>
                        <div className='w-full'>
                          Para proyectos de software complejos y estructurados.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type='radio'
                      id='hosting-big'
                      name='hosting'
                      value='hosting-big'
                      className='hidden peer'
                    />
                    <label
                      htmlFor='hosting-big'
                      className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                    >
                      <div className='block'>
                        <div className='w-full text-2xl font-semibold'>
                          SCRUM
                        </div>
                        <div className='w-full'>
                          Para equipos ágiles, adaptativos y entregas
                          iterativas.
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Link
                to={"/"}
                className='p-2 bg-blue-600 text-white rounded-md float-end m-10'
              >
                Crear Proyecto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default CreateProjectPart2
