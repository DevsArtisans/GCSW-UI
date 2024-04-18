import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "../../layout/DefaultLayout"
import { Link, useParams } from "react-router-dom"

const Dashboard = () => {
  const { teamName } = useParams()
  console.log(teamName)
  return (
    <DefaultLayout teamName={teamName!}>
      <Breadcrumb pageName='Dashboard' />

      <div className='overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>
          <div className='mt-4'>
            <div className='mx-auto max-w-180'>
              <h4 className='font-semibold text-black dark:text-white'>
                Hello {teamName || null} team
              </h4>
              <p className='mt-4.5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Dashboard
