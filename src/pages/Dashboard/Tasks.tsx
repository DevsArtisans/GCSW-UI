import { useParams } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "../../layout/DefaultLayout"

const Tasks = () => {
  const { teamName } = useParams()

  return (
    <DefaultLayout teamName={teamName!}>
      <Breadcrumb pageName='Tasks' />
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-1'>
        <div className='flex flex-col gap-9'>
          {/* <!-- Textarea Fields --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
              <h3 className='font-medium text-black dark:text-white'>
                Tareas asignadas
              </h3>
            </div>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <div>
                <label className='mb-3 block text-black dark:text-white'>
                  Default textarea
                </label>
                <textarea
                  rows={6}
                  placeholder='Default textarea'
                  className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                ></textarea>
              </div>

              <div>
                <label className='mb-3 block text-black dark:text-white'>
                  Active textarea
                </label>
                <textarea
                  rows={6}
                  placeholder='Active textarea'
                  className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white'
                ></textarea>
              </div>

              <div>
                <label className='mb-3 block text-black dark:text-white'>
                  Disabled textarea
                </label>
                <textarea
                  rows={6}
                  disabled
                  placeholder='Disabled textarea'
                  className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black'
                ></textarea>
              </div>
            </div>
          </div>

          {/* <!-- Checkbox and radio --> */}

          {/* <!-- Select input --> */}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Tasks
