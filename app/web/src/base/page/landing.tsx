import Data from 'src/components/landing/Data'
import Footer from 'src/components/landing/Footer'
import Header from 'src/components/landing/Header'
import Product from 'src/components/landing/Product'
import Service from 'src/components/landing/Service'
import Testimonial from 'src/components/landing/Testimonial'
import Work from 'src/components/landing/Work'
import { page } from 'web-init'

export default page({
  url: '/landing',
  component: ({}) => {
    return (
      <div>
        <Header />
        <Data />
        <Service />
        <Work />
        <Product />
        <Testimonial />
        <Footer />
      </div>
    )
  },
})
