import React, { useState } from "react"
import { useMutation, useQuery, gql } from "@apollo/client"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "../../layout/DefaultLayout"
import { useParams } from "react-router-dom"

const Members = () => {
  const [email, setEmail] = useState("")
  const [teamName, setTeamName] = useState("")
  const [addMemberToTeam] = useMutation(ADD_MEMBER_TO_TEAM)
  const { teamName: team } = useParams()

  const handleAddMembertToTeam = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    try {
      const res = await addMemberToTeam({
        variables: {
          memberEmail: email,
          teamName: teamName,
        },
      })
      alert("Creado correctamente")
      console.log(res)
    } catch (error) {
      console.error("Error adding member to team:", error)
    }
  }

  const { loading, error, data } = useQuery(GET_MEMBERS_BY_TEAM, {
    variables: { teamName: team },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data || !data.getMembersByTeam) return <p>No data available.</p>

  return (
    <DefaultLayout teamName={team!}>
      <Breadcrumb pageName='Member' />
      <div className='bg-white p-4 dark:bg-slate-800'>
        <h2 className='text-lg font-semibold mb-4'>
          Miembros del proyecto: {team}
        </h2>
        <ul className='grid grid-cols-1 gap-4'>
          {data.getMembersByTeam.map((member: any) => (
            <li
              key={member.email}
              className='bg-white dark:bg-slate-800 border-2 shadow-sm rounded-lg p-4 flex items-center justify-between'
            >
              <div>
                <h3 className='text-md font-semibold'>{member.name}</h3>
                <p className='text-sm text-gray-500'>{member.email}</p>
              </div>
              <span className='text-sm text-gray-500'>{member.role}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark flex justify-center'>
        <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>
          <div className='grid grid-cols-1 sm:grid-cols-1'>
            <form
              className='space-y-4 max-w-lg mx-auto'
              onSubmit={handleAddMembertToTeam}
            >
              <h1 className='text-2xl py-4'>Agregar miembro</h1>

              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-neutral-900'
                >
                  Member Email
                </label>
                <input
                  type='email'
                  name='name'
                  onChange={(e) => setEmail(e.target.value)}
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Name'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='teamName'
                  className='block mb-2 text-sm font-medium text-neutral-900'
                >
                  Team Name
                </label>
                <input
                  type='text'
                  name='teamName'
                  onChange={(e) => setTeamName(e.target.value)}
                  id='teamName'
                  className='bg-gray-50 border border-gray-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Team Name'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              >
                Crear
              </button>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Members

const ADD_MEMBER_TO_TEAM = gql`
  mutation AddMemberToTeam($memberEmail: String!, $teamName: String!) {
    addMemberToTeam(memberEmail: $memberEmail, teamName: $teamName)
  }
`

const GET_MEMBERS_BY_TEAM = gql`
  query GetMembersByTeam($teamName: String!) {
    getMembersByTeam(teamName: $teamName) {
      email
      name
      role
    }
  }
`
