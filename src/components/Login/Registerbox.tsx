import { Link } from "react-router-dom"
import IconGoogle from "../../images/icon/icon-google.svg"
import { useAuthStore } from "../../hooks/Auth/useAuthStore"
import { useState } from "react"

const Registerbox = () => {
  const { startRegister } = useAuthStore()

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const registerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if ([password, password2].includes("")) {
      console.log("Password con espacios en blanco")
      return
    }

    if (password != password2) {
      console.log("Password incorrectas")
      return
    }

    startRegister({ email: email, password: password, name: name })
  }
  return (
    <>
      <div className='flex lg:hidden justify-between items-center w-full py-4'>
        <div className='flex items-center justify-start space-x-3'>
          <a href='#' className='font-medium w-28'>
            GCSW
          </a>
        </div>
        <div className='flex items-center space-x-2'>
          <span>¿Ya tienes una cuenta? </span>
          <Link to='/login' className='underline font-medium text-[#484fca]'>
            Ingresar
          </Link>
        </div>
      </div>
      <div className='flex flex-1 flex-col  justify-center space-y-5 max-w-md'>
        <div className='flex flex-col space-y-2 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Completa tu registro
          </h2>
        </div>
        <div className='flex flex-col max-w-md space-y-5'>
          <form onSubmit={registerSubmit}>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-neutral-900 '
              >
                Tu nombre
              </label>
              <input
                type='text'
                name='name'
                onChange={(e) => setName(e.target.value)}
                id='name'
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                placeholder='name@company.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-neutral-900 '
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                placeholder='name@company.com'
                required
                autoComplete='username'
              />
            </div>
            <div className='mt-2'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-neutral-900 '
              >
                Contraseña
              </label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                autoComplete='new-password'
                onChange={(e) => setPassword(e.target.value)}
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                required
              />
            </div>
            <div className='mt-2'>
              <label
                htmlFor='password2'
                className='block mb-2 text-sm font-medium text-neutral-900 '
              >
                Confirma tu contraseña
              </label>
              <input
                type='password'
                name='password2'
                id='password2'
                autoComplete='new-password'
                placeholder='••••••••'
                onChange={(e) => setPassword2(e.target.value)}
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                required
              />
            </div>
            <button className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white mt-3'>
              Registrarme
            </button>
          </form>
          <div className='flex justify-center items-center'>
            <span className='w-full border border-black'></span>
            <span className='px-4 text-neutral-600'>Or</span>
            <span className='w-full border border-black'></span>
          </div>
          <button className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative'>
            <span className='absolute left-4'>
              <img src={IconGoogle} alt='' />
            </span>
            <span>Registrate con Google</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Registerbox
