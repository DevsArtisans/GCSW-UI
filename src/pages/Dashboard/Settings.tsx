import { useParams } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "../../layout/DefaultLayout"

const Settings = () => {
  const { teamName } = useParams()

  return (
    <DefaultLayout teamName={teamName!}>
      <Breadcrumb pageName='Settings' />
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>Hola</div>
    </DefaultLayout>
  )
}

export default Settings
