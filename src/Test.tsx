import { useQuery, useMutation } from "@apollo/client"
import { gql } from "graphql-tag"

const GET_MEMBER_BY_EMAIL = gql`
  query getMemberByEmail($email: String!) {
    getMemberByEmail(email: $email) {
      name
      email
      role
    }
  }
`

const CREATE_MEMBER = gql`
  mutation createMember($name: String!, $email: String!, $role: String!) {
    createMember(name: $name, email: $email, role: $role) {
      name
      email
      role
    }
  }
`

const Test = () => {
  const { loading, error, data } = useQuery(GET_MEMBER_BY_EMAIL, {
    variables: { email: "newmember2@example.com" },
  })

  const [createMember] = useMutation(CREATE_MEMBER)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const { name, email, role } = data.getMemberByEmail

  const handleCreateMember = async () => {
    try {
      const { data } = await createMember({
        variables: {
          name: "New User",
          email: "user@example.com",
          role: "New Role",
        },
      })
      console.log("Create member: ", data.createMember)
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message)
      } else {
        console.error("Unknown error occurred")
      }
    }
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
      <button
        className='p-2 bg-slate-800 text-white rounded-xl'
        onClick={handleCreateMember}
      >
        Create Member
      </button>
    </div>
  )
}
export default Test
