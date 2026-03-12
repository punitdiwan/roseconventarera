import Link from "next/link"
import React from 'react';
import Layout from "../Component/Layout";

const AboutUs = ({ data_header, tabs_data }) => {

  const data = tabs_data?.data?.[0] || {};

  return (
    <Layout header_data={data_header}>
      <div
        className="mx-3 mt-10"
      >
        <img
          className="w-full "
          src="/images/upper.png"
        />
        <div className="leading-[ 22.5px] font-normal">
          <h5 className="text-center">
            {data?.heading || "About us"}
          </h5>
          <p className="mb-0">
          Rose Mary group started its operations in the year 1996 at Kolar road, Bhopal. After its undisputable success, management decided to expand and Rose Mary Harshwardhan came into existence in the year 2008. Since then we have never turned back and tried to remain the best in our stream. We are not a commercial organization. We have dedication and passion of providing education to all, even to those who are fighting for their survival. Our motto is to make each and every child literate.
          </p>
        </div>
        <img
          className="w-full"
          src="/images/lower.png"
        />
      </div>
    </Layout>
  );

}

export default AboutUs;


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
    props: { data_header, tabs_data },
    revalidate: 86400,
  }
}
