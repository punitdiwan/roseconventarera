
import React from 'react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const fetcher = url => fetch(url).then(r => r.json())

const GalleryFacebookSection = ({ header_data }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const school = import.meta.env.VITE_SCHOOL

  const { data: gallery_data } = useSWR(
    `${baseUrl}/${school}/items/gallery?fields=*.*.*`,
    fetcher
  )

  const galleryItems = gallery_data?.data?.slice(0, 5) || []

  // Common card styling
  const cardClass =
    "w-full bg-white p-2 rounded-lg shadow-xl border border-gray-200"

  // Same image dimensions for all three sections
  const imageContainerClass =
    "w-full h-[350px] overflow-hidden rounded-md bg-gray-50 flex items-center justify-center"

  // Common button styling
  const buttonClass =
    "bg-[#385a91] text-white px-6 py-3 rounded-md font-bold shadow-md hover:bg-[#1b3359] transition-all duration-300 text-xs tracking-widest uppercase text-center w-full max-w-[220px] mt-auto"

  // Common heading styling
  const headingClass =
    "flex items-center justify-center gap-3 mb-8 h-8"

  const titleClass =
    "text-xl font-bold text-[#1b3359] uppercase tracking-wide whitespace-nowrap"

  return (
    <div className="bg-[#f8f9fa] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">

          {/* =================================
              1. PHOTO GALLERY SECTION
          ================================= */}

          <div className="flex flex-col items-center w-full h-full">

            {/* Heading */}
            <div className={headingClass}>
              <div className="w-8 h-[2px] bg-[#1b3359] shrink-0"></div>

              <h2 className={titleClass}>
                Photo Gallery
              </h2>

              <div className="w-8 h-[2px] bg-[#1b3359] shrink-0"></div>
            </div>

            {/* Gallery Card */}
            <div className={`${cardClass} mb-8`}>
              <div className={imageContainerClass}>

                {galleryItems.length > 0 ? (

                  <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showArrows={true}
                    interval={4000}
                    transitionTime={800}
                    stopOnHover
                    swipeable
                    className="w-full h-full"
                  >

                    {galleryItems.map((item, index) => (
                      <div
                        key={index}
                        className="w-full h-[350px] bg-gray-50"
                      >
                        <img
                          src={item?.photo?.data?.full_url?.replace(
                            'http://',
                            'https://'
                          )}
                          alt={`Gallery Image ${index + 1}`}
                          className="w-full h-[350px] object-cover object-center block"
                        />
                      </div>
                    ))}

                  </Carousel>

                ) : (

                  <div className="flex items-center justify-center h-full flex-col gap-4">
                    <div className="w-12 h-12 border-4 border-[#1b3359] border-t-red-600 rounded-full animate-spin"></div>

                    <p className="text-gray-500 font-medium">
                      Loading gallery...
                    </p>
                  </div>

                )}

              </div>
            </div>

            {/* Gallery Button */}
            <Link
              to="/Gallery"
              className={buttonClass}
            >
              View All Gallery
            </Link>

          </div>


          
{/* =================================
    2. INSTAGRAM SECTION
================================= */}

<div className="flex flex-col items-center w-full h-full">

  {/* Heading */}
  <div className={headingClass}>
    <div className="w-8 h-[2px] bg-[#1b3359] shrink-0"></div>

    <h2 className={titleClass}>
      Instagram
    </h2>

    <div className="w-8 h-[2px] bg-[#1b3359] shrink-0"></div>
  </div>

  {/* Instagram Card */}
  <div className={`${cardClass} mb-8`}>
    <div className={imageContainerClass}>

      <img
        src="/images/Rose-convent-school.png"
        alt="Rose Convent School Logo"
        className="w-full h-[350px] object-cover object-center block"
        loading="lazy"
      />

    </div>
  </div>

  {/* Instagram Button */}
  <a
    href="https://www.instagram.com/rose_convent_school?evlk=MWQxNG1pNTNheWxzaQ=="
    target="_blank"
    rel="noopener noreferrer"
    className={buttonClass}
  >
    View On Instagram
  </a>

</div>


         
{/* =================================
    3. FACEBOOK SECTION
================================= */}

<div className="flex flex-col items-center w-full h-full">

  {/* Heading */}
  <div className={headingClass}>
    <div className="w-8 h-[2px] bg-[#1b3359] shrink-0"></div>

    <h2 className={titleClass}>
      Facebook
    </h2>

    <div className="w-8 h-[2px] bg-[#1b3359] shrink-0"></div>
  </div>

  {/* Facebook Card */}
  <div className={`${cardClass} mb-8`}>
    <div className={imageContainerClass}>

      <img
        src="/images/Rose-convent-school-fb.webp"
        alt="Facebook Latest Post"
        className="w-full h-[350px] object-cover object-center block"
        loading="lazy"
      />

    </div>
  </div>

  {/* Facebook Button */}
  <a
    href="https://www.facebook.com/share/1C7EoqA8ot/"
    target="_blank"
    rel="noopener noreferrer"
    className={buttonClass}
  >
    View On Facebook
  </a>

</div>


        </div>
      </div>
    </div>
  )
}

export default GalleryFacebookSection
