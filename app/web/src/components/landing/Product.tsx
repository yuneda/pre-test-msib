import React from 'react'
import { product } from 'src/base/global/product'
import { result } from 'src/base/global/result'
import { Container } from 'src/base/layout/Container'
import { useGlobal } from 'web-utils'
// import RemoveIcon from '@mui/icons-material/Remove'
import Product1Img from '../assets/product_1.jpg'
import Product2Img from '../assets/product_2.jpg'

type Props = {}

const Product = (props: Props) => {
  const datas = useGlobal(result).data
  // const data = [1, 2, 4, 5]
  return (
    <Container>
      {/* <div className="flex justify-center flex-col"> */}
      <div className="flex justify-center">
        <div className="g-0 flex justify-start items-center mb-8">
          <div className="g-0 mr-1 text-[#FFBE40]">{/* <RemoveIcon /> */}</div>
          <div>
            <p className="text-[#FFBE40] text-xl font-medium">Product</p>
          </div>
        </div>
      </div>
      <div className="text-center text-5xl font-semibold mb-20">
        Our product we've created before
      </div>
      {/* </div> */}
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-4 row-span-4 lg:col-span-2 lg:row-span-2">
          <img src={Product1Img} alt="img" className="w-full" />
        </div>
        {datas.map((item, index) => (
          <div
            key={index}
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-2 sm:col-span-4 sm:row-span-4 lg:col-span-1 lg:row-span-1"
          >
            <img src={item.img} alt="img" />
            <h1 className="text-xl font-bold mt-8">{item.title}</h1>
            <p className="mt-7 text-xl font-semibold text-[#8F96AA]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Product
