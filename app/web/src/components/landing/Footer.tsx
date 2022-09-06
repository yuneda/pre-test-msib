import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import DorryImg from '../assets/dorry.jpg'
import { Container } from 'src/base/layout/Container'
import { useGlobal } from 'web-utils'
import { myfooter } from 'src/base/global/myfooter'

type Props = {}

const Footer = (props: Props) => {
  const newDataFooter = useGlobal(myfooter).data
  const data = [1, 2, 3, 4]
  return (
    <div className="bg-[#16403F] py-36 mt-40">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-7/12 text-5xl text-white font-bold lg:text-left text-center">
            Are you interested to work with us?
          </div>
          <div className="mt-12 lg:mt-0">
            <button className="mx-2 bg-white py-3 px-8 rounded-3xl text-[#16403F] font-medium">
              Let's Chat <ArrowOutwardIcon />
            </button>
            <button className="mx-2 text-white py-3 px-8 ring-1 ring-white rounded-3xl bg-[#16403F] font-medium">
              Schedule Meet
            </button>
          </div>
        </div>
        <hr
          className="my-10"
          style={{ height: '1px', backgroundColor: '#ccc', border: 'none' }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10">
          <div className="w-full lg:w-2/5 mb-10">
            <div className="flex justify-start items-center">
              <div>
                <img src={DorryImg} alt="img" className="w-12" />
              </div>
              <div className="ml-4 text-xl text-white font-bold">Dorry</div>
            </div>
            <div className="mt-10 text-xl text-[#98ABAA]">
              Nibh ut lacus egestas orci, dolor. Eu eros, laoreet euismod tortor
              nibh purus.
            </div>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 mb-10">
            {newDataFooter.map((item, index) => (
              <div className="ml-0 lg:ml-10 mb-10" key={index}>
                <p className="text-xl text-white font-bold mb-4">
                  {item.title}
                </p>
                <p className="text-xl text-[#98ABAA]">{item.data1}</p>
                <p className="text-xl text-[#98ABAA]">{item.data2}</p>
                <p className="text-xl text-[#98ABAA]">{item.data3}</p>
                <p className="text-xl text-[#98ABAA]">{item.data4}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
