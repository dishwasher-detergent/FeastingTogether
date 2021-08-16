import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Layout from '../components/Common/Layout'

export default function Home()
{
  return (
    <Layout nav={true} footer={true}>
      <Hero/>
      <HowItWorks/>
    </Layout>
  )
}
