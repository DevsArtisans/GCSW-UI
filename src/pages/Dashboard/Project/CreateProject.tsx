import { Link, useParams } from "react-router-dom"
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import FechaFin from "../../../components/Forms/DatePicker/FechaFin"
import FechaInicio from "../../../components/Forms/DatePicker/FechaInicio"
import DefaultLayout from "../../../layout/DefaultLayout"

const CreateProject = () => {
  const { teamName } = useParams()

  return (
    <DefaultLayout teamName={teamName!}>
      <Breadcrumb pageName='Crear Proyecto' />
      <div className='grid grid-cols-1 w-1/2 mx-auto  '>
        <div className='flex flex-col '>
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <div>
                <label className='mb-3 block text-black dark:text-white'>
                  Ingrese el nombre del proyecto
                </label>
                <input
                  type='text'
                  placeholder='Default Input'
                  className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                />
              </div>
              <div>
                <label className='mb-3 block text-black dark:text-white'>
                  Descripcion del proyecto
                </label>
                <textarea
                  rows={3}
                  placeholder='Default textarea'
                  className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                ></textarea>
              </div>
              <div className='flex flex-col-2 gap-10'>
                <div className='flex flex-col'>
                  <FechaInicio />
                </div>
                <div className='flex flex-col'>
                  <FechaFin />
                </div>
              </div>
            </div>
            <div>
              <Link
                to={`/${teamName}/create-project-part-2`}
                className='p-2 bg-blue-600 text-white rounded-md float-end m-10'
              >
                Siguiente
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default CreateProject
