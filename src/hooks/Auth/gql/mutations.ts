import { gql } from "@apollo/client"

export const CREATE_MEMBER = gql`
  mutation createMember($email: String!, $name: String!, $role: String!) {
    createMember(email: $email, name: $name, role: $role) {
      email
      role
      name
    }
  }
`
