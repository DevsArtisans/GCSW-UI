import { Link } from "react-router-dom"
import IconGoogle from "../../images/icon/icon-google.svg"
import { useState } from "react"
import { useAuthStore } from "../../hooks/Auth/useAuthStore"

const Loginbox = () => {
  const { startLogin } = useAuthStore()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    startLogin({ email: email, password: password })
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
          <span>¿No tienes una cuenta? </span>
          <Link to='/register' className='underline font-medium text-[#484fca]'>
            Registrarse
          </Link>
        </div>
      </div>
      <div className='flex flex-1 flex-col  justify-center space-y-5 max-w-md'>
        <div className='flex flex-col space-y-2 text-center'>
          <h2 className='text-2xl md:text-2xl font-bold'>
            Inicia sesión para continuar
          </h2>
        </div>
        <div className='flex flex-col max-w-md space-y-5'>
          <form onSubmit={loginSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                placeholder='name@company.com'
                required
                autoComplete='email'
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
                value={password}
                id='password'
                autoComplete='current-password'
                placeholder='••••••••'
                onChange={(e) => setPassword(e.target.value)}
                className='bg-neutral-50 border border-neutral-300 text-neutral-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                required
              />
            </div>
            <button className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white mt-3'>
              Ingresar →
            </button>
          </form>
          <div className='flex justify-center items-center'>
            <span className='w-full border border-black'></span>
            <span className='px-4'>O</span>
            <span className='w-full border border-black'></span>
          </div>
          <button className='flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative '>
            <span className='absolute left-4'>
              <img src={IconGoogle} alt='' />
            </span>
            <span>Inicia sesión con Google</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Loginbox
