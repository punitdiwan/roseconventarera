import React, { Component } from "react";
import Layout from "../Component/Layout";


const OurTeam = ({ data_header }) => {

  const slides = [
    { title: "", Name: 'Mrs.Poonam Shrivastava' , Position: '( Vice Principal )' },
    { title: " ", Name: 'Mrs. Jaya Bharti Rajput' , Position:' ( Office Incharge )' },
    { title: "", Name: 'Mrs. Preeti Fulzele' , Position: '( Accountant )' },
    { title: "", Name: 'Mrs. Sunita Mishra' , Position: '( Social Science Teacher )' },
    { title: " ", Name: 'Mrs. Shashikala Suryawansh' , Position: '(Hindi Teacher )' },
    { title: " ", Name: 'Mrs. Indira Chauhan' , Position: '( Science Teacher )' },
    { title: " ", Name: 'Mrs. Richa Gaur' , Position: '( English Teacher )' },
    { title: "", Name: 'Mr. Sourabh Koundal' , Position: '( Maths Teacher)' },
  ];


  return (
    <Layout header_data={data_header}>

        <div className="container-fluid  bg-no-repeat bg-cover pt-10  ">
          <div className="p-5 md:grid md:grid-cols-4 sm:grid sm:grid-cols-2">
            {

              slides.map((item, i) => {
                return (
                  <div key={i} className="m-2 my-5 rounded shadow bg-white ">
                    <img
                      src={item?.title}
                      className="w-full h-[200px]  rounded-lg"
                      alt="no_img"
                    />
                    <h4 className="text-center ">{item.Name}</h4>
                    <p className="text-center "> {item.Position}</p>
                  </div>
                );
              })}
          </div>
        </div>
  
      
      {/* <div className="mx-5 ">
        <div className="grid grid-rows-1 mt-5 shadow md:grid md:grid-cols-4 gap-7" >
          <div className="p-1 mb-2 rounded shadow">
            <img
              className="w-full "
              src="https://rosemarydn.com/images/team1.jpg"
            />
            <h5 className="text-center ">Mrs. Kusum Saraswat</h5>
            <p className="text-center">Vice principal</p>
          </div>
          <div className="p-1 mb-2 rounded shadow ">
            <img
              className="w-full "
              src="https://rosemarydn.com/images/team2.jpg"
            />
            <h5 className="text-center ">Mrs. Kusum Saraswat</h5>
            <p className="text-center">Computer Incharge</p>
          </div>
          <div className="p-1 mb-2 rounded shadow ">
            <img
              className="w-full "
              src="https://rosemarydn.com/images/team3.jpg"
            />
            <h5 className="text-center ">Mrs. Kusum Saraswat</h5>
            <p className="text-center">School incharge</p>
          </div>
          <div className="p-1 mb-2 rounded shadow ">
            <img
              className="w-full "
              src="https://rosemarydn.com/images/team4.jpg"
            />
            <h5 className="text-center ">Mrs. Kusum Saraswat</h5>
            <p className="text-center">Accountant</p>
          </div>

          <div className="p-1 mb-2 rounded shadow ">
            <img
              className="w-full "
              src="https://rosemarydn.com/images/team5.JPG"
            />
            <h5 className="text-center ">Mrs. Sarita</h5>
            <p className="text-center">School Incharge</p>
          </div>
          <div className="p-1 mb-2 rounded shadow ">
            <img
              className="w-full "
              src="https://rosemarydn.com/images/team6.JPG"
            />
            <h5 className="text-center ">Mrs. Kaushalya Kushwaha</h5>
            <p className="text-center">School Incharge</p>
          </div>
        </div>
      </div> */}
    </Layout>
  );

}

export default OurTeam;


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
    revalidate: 2,  
  }
}