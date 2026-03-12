import Link from "next/link" 
import React from 'react';
import { base_url, school_name } from '../SimpleState/auth'


const SchoolMassage = ({ header_data, tabs_data }) => {

  const fallbackBody = `We believe that every child is Unique and has a different learning
  approach. We, at Rose Mary, observe the talents and qualities and
  focus on them for educating the child. We facilitate the students to
  become spiritually deep rooted, morally upright & emotionally mature.
  We equip students with a sound value system to live as good human
  beings & impart substantial knowledge and skill to achieve excellence
  in diverse fields.`;

  const data = tabs_data?.data?.[0] || {};

  return (
    <div>
      <div
        className="flex flex-col md:flex-row w-full justify-center font-normal leading-7 
text-base px-10 md:px-16 py-10 text-gray-600 bg-[#cbdcf8]"
      >
        <div className="w-5/5  justify-center mb-5 flex align-middle md:w-6/12 ">

          <img className=" h-[150px] md:h-[200px] lg:h-[250px]" src={header_data?.data ? header_data?.data[0]?.logo?.data?.full_url?.replace('http://', 'https://') : "https://rosemarydn.com/images/logo.png"}
          />
        </div>
        <div className="w-5/5 md:w-6/12 ">
          <span className="text-4xl">{data?.heading||"School Message"}</span>
          <p className="mt-5"> 
          {data?.body||fallbackBody}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center text-center text-black no-underline bg-[#81cef1] ">
        <div className="m-3 border-white border-solid border-1 md:my-7 md:mx-8 px-10" style={{ border: "1px solid white" }}>
          <a className="" href="Contactus">
            <img
              className=" h-[70px] "
              src="/images/tc.png"
              alt="slide1"

            />
          </a>ContactUs
        </div>
        <div className="m-3 border-white border-solid md:my-7 md:mx-8 border-1 px-10 py-1" style={{ border: "1px solid white" }}>
          <a className="" href="Gallery">
            <img
              className="h-[70px]"
              src="/images/photo.png"
              alt="slide1"
            />

          </a>Photo-Gallery
        </div>
      </div>
    </div>
  )
}

export default SchoolMassage

export async function getStaticProps(context) {
  let data_header
  let tabs_data

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)
    data_header = await response.json()
  }
  catch (error) {
    data_header = false
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url`)
    tabs_data = await response.json()
  }
  catch (error) {
    tabs_data = false
  }

  return {
    props: { header_data: data_header, tabs_data },
    revalidate: 86400,
  }
}
