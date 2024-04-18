import { useDispatch, useSelector } from "react-redux"
import { supabaseClient } from "../../lib/helper/supabaseClient"
import { onChecking, onLogin, onLogout } from "../../store"
import { RootState } from "../../store/store"
import { onLogoutTeam } from "../../store/team/TeamSlice"
import { client } from "../../lib/helper/apoloClient"
import { CREATE_MEMBER } from "./gql/mutations"

export const useAuthStore = () => {
  const { status, user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const startGetSession = async () => {
    try {
      const { data, error } = await supabaseClient.auth.getSession()
      console.log("sesion actual: ", data)
    } catch (error) {
      console.log(error)
    }
  }

  const startLogin = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    dispatch(onChecking())

    try {
      const { data } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      })
      if (data.user !== null) {
        dispatch(onLogin({ name: data.user?.email, id: data.user?.id }))
        localStorage.setItem("token", data.session?.access_token)
      } else {
        dispatch(onLogout("Credenciales Incorrectas"))
      }
    } catch (error) {
      dispatch(onLogout("Credenciales Incorrectas"))
    }
  }

  const startRegister = async ({
    email,
    password,
    name,
  }: {
    email: string
    password: string
    name: string
  }) => {
    dispatch(onChecking())

    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
      })

      const { data: graphData } = await client.mutate({
        mutation: CREATE_MEMBER,
        variables: {
          email,
          role: "Dev",
          name,
        },
      })
      console.log("graphData: ", graphData)

      if (data.user && data.session !== null) {
        dispatch(onLogin({ name: data.user?.email, id: data.user?.id }))

        localStorage.setItem("token", data.session?.access_token)
      } else {
        dispatch(onLogout(error))
      }
    } catch (error) {
      console.log(error)
      dispatch(onLogout(error))
    }
  }
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token")
    if (!token) return dispatch(onLogout("Token invalido"))

    try {
      const { data, error } = await supabaseClient.auth.refreshSession()
      if (data.user && data.session !== null) {
        dispatch(onLogin({ name: data.user?.email, id: data.user?.id }))

        localStorage.setItem("token", data.session?.access_token)
      } else {
        dispatch(onLogout(error))
      }
    } catch (error) {
      localStorage.clear()
      dispatch(onLogout(error))
    }
  }
  const startLogout = async () => {
    try {
      const { error } = await supabaseClient.auth.signOut()
      localStorage.clear()
      dispatch(onLogout(error))
      dispatch(onLogoutTeam())
    } catch (error) {
      console.log(error)
      dispatch(onLogout(error))
    }
  }
  return {
    // Properties
    status,
    user,
    // Methods
    startLogin,
    startRegister,
    startGetSession,
    checkAuthToken,
    startLogout,
  }
}
