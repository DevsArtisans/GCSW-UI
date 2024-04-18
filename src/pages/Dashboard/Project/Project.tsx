import { useParams } from "react-router-dom"
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "../../../layout/DefaultLayout"

const Project = () => {
  const { teamName } = useParams()

  return (
    <DefaultLayout teamName={teamName!}>
      <Breadcrumb pageName='ProjectName' />
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>Project</div>
    </DefaultLayout>
  )
}

export default Project
