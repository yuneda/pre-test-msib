import React from 'react'
import { Container } from 'src/base/layout/Container'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="bg-[#16403F] pt-6 pb-[250px]">
      <Container>
        {/* Navbar */}
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div>
              <img src="/assets/dorry.jpg" alt="img" className="w-12" />
            </div>
            <div className="ml-4 text-xl text-white font-bold">Dorry</div>
          </div>
          <div className="hidden md:flex text-[#C0CBCB]">
            <div className="mx-7">Pricing</div>
            <div className="mx-7">About</div>
            <div className="mx-7">Learn</div>
            <div className="mx-7">Corporate</div>
            <div className="mx-7">News</div>
          </div>
          <div>
            <button className="bg-[#16403F] py-3 px-8 rounded-3xl text-white border-2">
              Contact Us
            </button>
          </div>
        </div>
        {/* Description */}
        <div className="mt-24 flex flex-row justify-center">
          <div className="w-full lg:basis-3/5">
            <h1 className="text-white text-center text-6xl font-medium">
              We create digital product and solve your problem
            </h1>
            <p className="text-white text-center pt-10 px-16">
              A fully integrated digital agency that willo help you create
              beautiful website and solve your problem in your company
            </p>
          </div>
        </div>
        <div className="my-10 flex justify-center">
          <button className="mx-10 bg-white py-3 px-8 rounded-3xl text-[#16403F] font-medium">
            Get Started
          </button>
          <button className="mx-10 text-white">Learn More</button>
        </div>
        {/* Embed video */}
      </Container>
    </div>
  )
}

export default Header
