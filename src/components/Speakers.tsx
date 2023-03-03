import React from 'react'

type Props = {}

const style={
  infoCardText:"space-y-4  text-30 text-center",
  infoCardName:"text-xl font-medium",
  infoCardDesc:"text-xs text-30/80",
  infoCardPost:"text-sm font-medium",
  image:"object-cover h-64 w-full rounded-md",
};

const Speakers = ({ }: Props) => {
  return (
    
      <div id='speakers' className="px-[8.33%]">
        <p className="font-semibold text-4xl text-80 md:text-5xl">
          SPEAKERS
        </p>
        <p className="text-base text-80/60">
        Lorem ipsum dolor sit amet consectetur  
        </p>

        <div id="speakersGrid" className="mt-16 mb-24 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:order-1 md:col-span-2">
            <img src="./src/assets/img1.png" alt="My Image" className={style.image}/>
          </div>
          <div className="border-2 border-30 rounded-md px-6 grid place-items-center md:order-2 md:col-span-2">
            <p className={style.infoCardText}>
            <div className={style.infoCardName}>
            Wasath Theekshana
            </div>
            <div className={style.infoCardDesc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </div>
            <div className={style.infoCardPost}>
              Full Stack Developer at LSEG
            </div>
            </p>
          </div>
          <div className="md:order-4 lg:order-3">
            <img src="./src/assets/img1.png" alt="My Image" className={style.image}/>
          </div>
          <div className="border-2 border-30 rounded-md px-6 grid place-items-center md:order-3 lg:order-4">
            <p className={style.infoCardText}>
            <div className={style.infoCardName}>
            Wasath Theekshana
            </div>
            <div className={style.infoCardDesc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </div>
            <div className={style.infoCardPost}>
              Full Stack Developer at LSEG
            </div>
            </p>
          </div>
          <div className="md:order-5">
            <img src="./src/assets/img1.png" alt="My Image" className={style.image}/>
          </div>
          <div className="border-2 border-30 rounded-md px-6 grid place-items-center md:order-6">
            <p className={style.infoCardText}>
            <div className={style.infoCardName}>
            Wasath Theekshana
            </div>
            <div className={style.infoCardDesc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </div>
            <div className={style.infoCardPost}>
              Full Stack Developer at LSEG
            </div>
            </p>
          </div>
          <div className="md:order-8">
            <img src="./src/assets/img1.png" alt="My Image" className={style.image}/>
          </div>
          <div className="border-2 border-30 rounded-md px-6 grid place-items-center md:order-7">
            <p className={style.infoCardText}>
            <div className={style.infoCardName}>
            Wasath Theekshana
            </div>
            <div className={style.infoCardDesc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </div>
            <div className={style.infoCardPost}>
              Full Stack Developer at LSEG
            </div>
            </p>
          </div>
          <div className="md:order-9 lg:order-10">
            <img src="./src/assets/img1.png" alt="My Image" className={style.image}/>
          </div>
          <div className="border-2 border-30 rounded-md px-6 grid place-items-center md:order-10 lg:order-9">
            <p className={style.infoCardText}>
            <div className={style.infoCardName}>
            Wasath Theekshana
            </div>
            <div className={style.infoCardDesc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </div>
            <div className={style.infoCardPost}>
              Full Stack Developer at LSEG
            </div>
            </p>
          </div>
        </div>
      </div>
    
  )
}

export default Speakers