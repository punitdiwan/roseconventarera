import Link from "next/link"
import React, { useState, useEffect } from 'react';
import { base_url, school_name } from '../SimpleState/auth'
import axios from 'axios';
import Layout from "../Component/Layout";

const AboutUs = ({ data_header }) => {

  const [data, setdata] = useState("")
  const get_base_url = base_url.use()
  const get_school_name = school_name.use()


  useEffect(() => {
    axios.get(`${get_base_url}/${get_school_name}/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url`)
      .then((response) => {


        if (response?.data?.data?.length > 0) {
          console.log(response.data);
          setdata(response.data.data[0])
          // response?.data?.data[0].map((data1,i)=>{
          //     setdata(data1) 
          //     console.log(data1);
          // })
          //   setdata(response) 
        }

      })
      .catch((error) => {
        console.log(error);
      })


  }, [])

  return (
    <Layout header_data={data_header}>
      <div
        className="mx-3 "
      >
        <img
          className="w-full "
          src="https://rosemarydn.com/images/upper.png"
        />
        <div className="leading-[ 22.5px] font-normal">
          <h5 className="text-center">
            {data?.heading || "About School"}
            {/* About us */}

          </h5>
          <p className="mb-0">
          Rose Mary group started its operations in the year 1996 at Kolar road, Bhopal. After its undisputable success, management decided to expand and Rose Mary Harshwardhan came into existence in the year 2008. Since then we have never turned back and tried to remain the best in our stream. We are not a commercial organization. We have dedication and passion of providing education to all, even to those who are fighting for their survival. Our motto is to make each and every child literate.
          </p>
        </div>
        <img
          className="w-full"
          src="https://rosemarydn.com/images/under.png"
        />
      </div>
    </Layout>
  );

}

export default AboutUs;


export async function getStaticProps(context) {
  let data_header

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

    data_header = await response.json()
  }
  catch (error) {
    data_header = false
  }
  return {
    props: { data_header },
    revalidate: 2, // will be passed to the page component as props
  }
}
