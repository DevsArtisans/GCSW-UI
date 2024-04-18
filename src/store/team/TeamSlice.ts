import { createSlice } from "@reduxjs/toolkit"

export interface Team {
  name: string
  leader: string
  description: string
}
interface TeamState {
  teams: Team[]
  isLoadingTeams: Boolean
}

const initialState: TeamState = {
  teams: [],
  isLoadingTeams: true,
}

export const TeamSlice = createSlice({
  name: "Team",
  initialState,
  reducers: {
    onLoadTeams: (state, { payload = [] }) => {
      state.isLoadingTeams = false
      payload.forEach((team: any) => {
        const exist = state.teams.some((dbTeam) => dbTeam.name === team.name)
        if (!exist) {
          state.teams.push(team)
        }
      })
    },
    onAddNewTeam: (state, { payload }) => {
      state.teams.push(payload)
    },
    onUpdateTeam: (state, { payload }) => {
      state.teams = state.teams.map((team) => {
        if (team.name === payload.name) {
          return payload
        }
        return team
      })
    },
    onDeleteTeam: (state, { payload }) => {
      state.teams = state.teams.filter((team) => team.name !== payload.name)
    },
    onLogoutTeam: () => {
      return initialState
    },
  },
})

export const {
  onAddNewTeam,
  onDeleteTeam,
  onLoadTeams,
  onUpdateTeam,
  onLogoutTeam,
} = TeamSlice.actions
