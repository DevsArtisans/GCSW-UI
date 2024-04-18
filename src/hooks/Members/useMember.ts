import { RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"

export const useAuthStore = () => {
  const { status, user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const startLoadingTeams = () => {}
  return {
    // Properties
    status,
    user,
    // Methods
    startLoadingTeams,
  }
}
