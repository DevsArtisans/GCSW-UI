import { gql } from "@apollo/client"

export const GET_TEAMS_BY_EMAIL = gql`
  query GetTeamsByUserEmail($email: String!) {
    getTeamsByUserEmail(email: $email) {
      description
      leader
      name
    }
  }
`
