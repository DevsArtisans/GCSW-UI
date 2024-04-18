import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useTeamStore } from "../../hooks/Teams/useTeamStore"
import MainLayout from "../../layout/MainLayout"

interface Team {
  name: string
  leader: string
  description: string
}
const Teams = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const { startSavingTeam } = useTeamStore()

  function closeModal() {
    setIsModalOpen(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  const { startLoadingTeams, teams } = useTeamStore()

  const handleCreateFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    startSavingTeam(name, description)
    closeModal()
  }

  useEffect(() => {
    startLoadingTeams()
  }, [])

  return (
    <MainLayout>
      <div className='container mx-auto'>
        <button
          onClick={openModal}
          className='bg-slate-500 text-white px-2 py-1 rounded-md  mt-5 '
        >
          Crear Equipo
        </button>
        <div className='grid grid-cols-4 gap-4 p-4 mt-4 rounded-lg bg-white'>
          {teams && teams.length > 0 ? (
            teams.map((team: Team) => (
              <Link
                to={`/${team?.name}/dashboard/`}
                key={team.name}
                className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
              >
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-black'>
                  {team?.name}
                </h5>
                <p className='font-normal text-neutral-700 dark:text-neutral-700'>
                  <span className='text-boxdark font-bold'>Descripción:</span>{" "}
                  {team?.description}
                </p>
                <p>
                  <span className='text-boxdark font-bold'>Lider:</span>{" "}
                  {team?.leader}
                </p>
              </Link>
            ))
          ) : (
            <div>No hay teams</div>
          )}
        </div>
        <Transition appear show={isModalOpen} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black/25' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <button
                      onClick={closeModal}
                      className='absolute top-0 right-0 mt-3 mr-3 bg-white p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 text-neutral-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                    <Dialog.Title className='text-2xl text-center font-bold py-3 leading-6 text-neutral-900'>
                      Crear Equipo
                    </Dialog.Title>

                    <form
                      className='space-y-4'
                      onSubmit={(e) => handleCreateFormSubmit(e)}
                    >
                      <div>
                        <label
                          htmlFor='name'
                          className='block mb-2 text-sm font-medium text-neutral-900'
                        >
                          Nombre del equipo
                        </label>
                        <input
                          type='text'
                          name='name'
                          onChange={(e) => setName(e.target.value)}
                          id='name'
                          className='bg-gray-50 border border-gray-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                          placeholder='Name'
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='description'
                          className='block mb-2 text-sm font-medium text-neutral-900'
                        >
                          Description
                        </label>
                        <textarea
                          rows={3}
                          name='description'
                          onChange={(e) => setDescription(e.target.value)}
                          id='description'
                          placeholder='Description'
                          className='bg-gray-50 border border-gray-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                          required
                        />
                      </div>

                      <div className='flex justify-end'>
                        <button
                          type='button'
                          onClick={closeModal}
                          className='mr-2 text-white bg-neutral-500 hover:bg-neutral-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                        >
                          Cancelar
                        </button>
                        <button
                          type='submit'
                          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center'
                        >
                          CREAR
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </MainLayout>
  )
}

export default Teams
