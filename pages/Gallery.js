import Layout from '../Component/Layout';
import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Gallery = ({ data_header, gallery_data }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fallbackSlides = [
    { title: "/images/glr1.jpg", description: 'View Gallery' },
    { title: "/images/glr2.jpg", description: 'View Gallery' },
    { title: "/images/glr3.jpg", description: 'View Gallery' },
    { title: "/images/glr2.jpg", description: 'View Gallery' },
    { title: "/images/glr3.jpg", description: 'View Gallery' },
    { title: "/images/glr1.jpg", description: 'View Gallery' },
  ];

  const images = gallery_data?.data?.length > 0
    ? gallery_data.data.map(item => ({
        src: item.photo.data.full_url?.replace('http://', 'https://')
      }))
    : fallbackSlides.map(item => ({
        src: item.title.trim()
      }));

  return (
    <Layout header_data={data_header}>
      <div className="container-fluid">
        <div className="md:grid p-5 md:grid-cols-5 sm:grid pt-20 sm:grid-cols-2 bg-[#0066cc]">
          {images.map((item, i) => (
            <div key={i} className="p-2">
              <img
                src={item.src}
                className="w-full h-[200px] rounded-lg cursor-pointer"
                alt={`Gallery ${i + 1}`}
                onClick={() => {
                  setCurrentIndex(i);
                  setOpen(true);
                }}
              />
            </div>
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={currentIndex}
          plugins={[Zoom]}
        />
      </div>
    </Layout>
  );
};

export default Gallery;
export async function getStaticProps(context) {
  let data_header

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`)

    data_header = await response.json()
  }
  catch (error) {
    data_header = false
  }

  //////

  let gallery_data

  try {
    const response1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/gallery?fields=*.*.*`)

    gallery_data = await response1.json()
  }
  catch (error) {
    gallery_data = false
  }


  return {
    props: { data_header, gallery_data },
    revalidate: 1, // will be passed to the page component as props
  }
}

