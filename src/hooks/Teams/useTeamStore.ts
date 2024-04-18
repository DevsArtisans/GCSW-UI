import { useDispatch, useSelector } from "react-redux"
import { client } from "../../lib/helper/apoloClient"
import { RootState } from "../../store/store"
import { onAddNewTeam, onLoadTeams } from "../../store/team/TeamSlice"
import { useAuthStore } from "../Auth/useAuthStore"
import { CREATE_TEAM } from "./gql/mutations"
import { GET_TEAMS_BY_EMAIL } from "./gql/queries"

export const useTeamStore = () => {
  const { teams } = useSelector((state: RootState) => state.team)
  const dispatch = useDispatch()
  const { user } = useAuthStore()

  const startSavingTeam = async (name: string, description: string) => {
    try {
      const { data } = await client.mutate({
        mutation: CREATE_TEAM,
        variables: {
          description: description,
          leader: user?.name,
          name: name,
        },
      })
      if (data !== null && data !== undefined) {
        dispatch(onAddNewTeam({ description, leader: user?.name, name }))
      }
    } catch (error: any) {
      console.error("Error creating team:", error)
    }
  }

  const startLoadingTeams = async () => {
    try {
      console.log(user?.name)
      const { data } = await client.query({
        query: GET_TEAMS_BY_EMAIL,
        variables: { email: user?.name },
      })

      if (data && data.getTeamsByUserEmail) {
        dispatch(onLoadTeams(data.getTeamsByUserEmail))
      }
      return
    } catch (error) {
      console.error("Error al cargar equipos:", error)
    }
  }

  return {
    // Properties
    teams,
    // Methods
    startSavingTeam,
    startLoadingTeams,
  }
}
