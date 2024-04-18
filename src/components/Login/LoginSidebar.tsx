import { useLocation, useNavigate } from "react-router-dom"
import Logo from "../../images/logo/logo.png"
import { motion } from "framer-motion"
import { fadeIn } from "../../common/Animation/Variants"

const LoginSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isLoginPage = location.pathname === "/login"
  const buttonText = isLoginPage ? "Crear una cuenta" : "Inicia Sesión"
  const questionText = isLoginPage
    ? "¿Aun no tienes una cuenta?"
    : "¿Ya tienes una cuenta?"
  const titleText = isLoginPage
    ? "INICIA SESION Y GESTIONA PROYECTOS"
    : "REGISTRATE Y GESTIONA PROYECTOS"
  const redirectTo = isLoginPage ? "/register" : "/login"

  return (
    <div className='hidden lg:flex flex-col justify-between bg-[#24303F] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
      <div className='flex items-center justify-start space-x-3'>
        <motion.a
          variants={fadeIn("right", 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          href='#'
          className='font-medium w-28'
        >
          <img src={Logo} alt='Logo de la empresa' />
        </motion.a>
      </div>
      <div className='space-y-5'>
        <motion.h1
          variants={fadeIn("right", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className='lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold text-white'
        >
          {titleText}
        </motion.h1>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className='text-lg mb-1 text-white'>{questionText}</p>
          <button
            onClick={() => navigate(redirectTo)}
            className='inline-block flex-none px-5 py-4 rounded-lg font-medium border-black bg-black text-white'
          >
            {buttonText}
          </button>
        </motion.div>
      </div>
      <motion.p
        variants={fadeIn("right", 0.5)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className='font-medium text-white'
      >
        © 2024 Company
      </motion.p>
    </div>
  )
}

export default LoginSidebar
