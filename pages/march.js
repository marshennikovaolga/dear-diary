import React from "react"
import { tw } from "twind"
import Image from "next/image"
import pic1 from "../images/pulp.jpg"
import pic2 from "../images/shiba.jpg"
import pic3 from "../images/tree.jpg"

const images = [pic1, pic2, pic3]

const MarchPage = () => {
  return (
    <>
      <a href="/" className="go-back ml-10 mt-10">
        Go back
      </a>
      <div className={tw`text-center mb-10`}>
        <h1>MARCH</h1>
        <p className={tw`mt-10 w-150`}>
          cool month. started learning react native for mobile applications.
          its quite exciting, yet mastering drag and drop functionalities is proving to be tough</p>

        <div className="flex flex-col sm:flex-row justify-around flex-wrap mt-10 w-11/12 sm:w-auto mx-auto">
          {images.map((image, index) => (
            <div key={index} className="w-full sm:w-1/4 mb-8 sm:mb-0">
              <Image
                src={image}
                alt={`image ${index + 1}`}
                layout="responsive"
                width={600}
                height={350}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarchPage;
