import React from 'react'
import WorkImage from '../assets/work.jpg'
import RemoveIcon from '@mui/icons-material/Remove'
import { Container } from 'src/base/layout/Container'
import { useGlobal } from 'web-utils'
import { work } from 'src/base/global/work'

type Props = {}

const Work = (props: Props) => {
  const works = useGlobal(work).data
  const data = [1, 2, 3]
  return (
    <div className="bg-[#16403F] py-20 my-40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img src={WorkImage} alt="img" className="w-96" />
          </div>
          <div>
            <div className="g-0 flex justify-start items-center mb-4">
              <div className="g-0 mr-1 text-[#FFBE40]">
                <RemoveIcon />
              </div>
              <div>
                <p className="text-[#FFBE40] text-xl font-medium">
                  How it work
                </p>
              </div>
            </div>
            <div className="text-white text-4xl font-semibold w-3/4 mb-8">
              Steps to get powerfull services
            </div>
            {works.map((item, index) => (
              <div key={index} className="flex flex-row g-0">
                <div className="basis-1/12 text-white font-medium">
                  {item.id}
                </div>
                <div className="basis-11/12">
                  <div className="text-white font-medium">{item.title}</div>
                  <div className="text-[#8EA3A2] text-xl">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Work
