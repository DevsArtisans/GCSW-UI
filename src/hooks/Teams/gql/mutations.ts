import { gql } from "@apollo/client"

export const CREATE_TEAM = gql`
  mutation CreateTeam($description: String!, $leader: String!, $name: String!) {
    createTeam(description: $description, leader: $leader, name: $name) {
      description
      leader
      name
    }
  }
`
