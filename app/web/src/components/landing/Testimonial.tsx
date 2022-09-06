import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import StarIcon from '@mui/icons-material/Star'
import QuoteImg from '../assets/quote.jpg'
import { Container } from 'src/base/layout/Container'

type Props = {}

const Testimonial = (props: Props) => {
  const data = [1, 2, 3]
  return (
    <Container>
      <div className="mt-40 g-0 flex justify-start items-center mb-8">
        <div className="g-0 mr-1 text-[#FFBE40]">
          <RemoveIcon />
        </div>
        <div>
          <p className="text-[#FFBE40] text-xl font-medium">Testimonials</p>
        </div>
      </div>
      <div className="text-5xl w-5/12 font-semibold mb-40">
        What our clients say about us
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="p-6 shadow-md shadow-gray-300">
            <div className="w-9 mb-4">
              <img src={QuoteImg} alt="img" className="w-full" />
            </div>
            <p className="text-xl text-[#C5CFCF] font-medium">
              Dorry work was some of the best we've seen. Eu pretium neque cras
              sed pus et lectus
            </p>
            <div className="mt-5 flex justify-between items-center">
              <div className="text-xl font-bold">Rizal Kenz</div>
              <div className="flex flex-row items-center">
                <div className="text-[#FFBE40]">
                  <StarIcon />
                </div>
                <div className="ml-2">
                  <p className="text-xl font-bold">4.8</p>
                </div>
              </div>
            </div>
            <p className="text-xl font-medium text-[#C5CFCF]">CEO Tradingkuy</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Testimonial
