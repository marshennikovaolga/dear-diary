import React from "react"
import { tw } from "twind"
import Image from 'next/image'
import pic1 from '../images/pulp.jpg'
import pic2 from '../images/shiba.jpg'
import pic3 from '../images/tree.jpg'

const images = [pic1, pic2, pic3]

const MarchPage = () => {
  return (
    <>
      <a href="/" className="go-back ml-10 mt-10">Go back</a>
      <div className={tw`text-center m-0`}>
        <h1>march</h1>
        <p className={tw`mt-10`}>in progress</p>
        <div className="flex justify-around flex-wrap mt-10">
          {images.map((image, index) => (
            <div key={index} className="w-full md:w-1/3 mb-4 md:mb-0">
              <Image
                src={image}
                alt={`image ${index + 1}`}
                layout="responsive"
                width={700}
                height={350}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarchPage
