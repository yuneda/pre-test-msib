import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import BrandingImg from '../assets/branding.jpg'
import { Container } from 'src/base/layout/Container'
import { useGlobal } from 'web-utils'
import { product } from 'src/base/global/product'

type Props = {}

const Service = (props: Props) => {
  const products = useGlobal(product).data
  return (
    <Container>
      <div className="g-0 flex justify-start items-center mb-8">
        <div className="g-0 mr-1 text-[#FFBE40]">
          <RemoveIcon />
        </div>
        <div>
          <p className="text-[#FFBE40] text-xl font-medium">Services</p>
        </div>
      </div>
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="text-5xl w-full lg:w-5/12 font-semibold lg:text-left text-center">
          Our service we can help you
        </div>
        <div className="w-full lg:w-4/12 text-[#AAAAAA] font-medium pl-16 lg:text-left text-center lg:mt-0 mt-10">
          We have many interesting services with profesional team, that will
          help your work to be better
        </div>
      </div>
      {/* Card */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center py-10 px-5 shadow-md shadow-gray-300"
          >
            <div className="flex justify-center items-center rounded-full bg-[#F9F9F9] w-20 h-20">
              <img src={item.img} alt="img" className="w-10 h-10" />
            </div>
            <div className="text-2xl font-semibold p-6">{item.title}</div>
            <p className="text-center text-[#878EA4] text-xl">{item.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Service
