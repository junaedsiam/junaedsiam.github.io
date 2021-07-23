import SampleComponent from 'components/SampleComponent'
import Container from 'components/container'
import Navbar from 'components/navbar'
import Head from 'next/head'

const IndexPage = () => (
  <>
    <Head>
      <title>Home | Junaed</title>
    </Head>
    <Navbar />
    <Container>
      <SampleComponent />
    </Container>
  </>
)

export default IndexPage
