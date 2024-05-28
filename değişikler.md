Campaigns.jsx dosyası değiştirildi.
About.jsx dosyası değiştirldi.
MenuWrapper.jsx dosyası değiştirildi
Menuitem .jsx dosyası değiştirildi.





















import React from 'react'
import Title from "../ui/Title";

const Footer = () => {
  //return <div>Footer</div>
  return (
    <div className="text-black">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap
        md:gap-y-0 gap-y-6">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Bize Ulaşın</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <i className="fa fa-map-marker"></i>
                <span className="inline-block m1-2">Konum</span>
              </div>
              <div>
                <i className="fa fa-phone"></i>
                <span className="inline-block m1-2">Ara +90 **********</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block m1-2">halit@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">MizrakOFF</Title>
            <p>Gereken Açıklama....</p>
            <div className="flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer