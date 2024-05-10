import React from 'react';
import { galleries } from '../data/HomeTwoData/HomeTwoData';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';

const Gallery = () => {
    
    return (
        <section className="gallery-section padding-y-60">
            <div className="container container-two">
                
                <SectionHeading
                    headingClass=""  
                    subtitle="Our Gallery"
                    subtitleClass="" 
                    title="Unlocking the door to your a the new home" 
                    renderDesc={false}
                    desc=""
                    renderButton={false}
                    buttonClass="btn-main"
                    buttonText="View More"
                />

                <div className="row gy-4">
                    {
                        galleries.map((gallery, galleryIndex) => {
                            return (            
                                <div className={` ${galleryIndex === 1 || galleryIndex === 2 ? 'col-lg-8 col-sm-7 col-xs-6' : 'col-lg-4 col-sm-5 col-xs-6'}`} key={galleryIndex}>
                                    <div className="gallery-thumb">
                                        <img src={gallery.image} alt="Gallery Image" className="cover-img"/>
                                        <Link to={gallery.image} className="gallery-thumb__link gallery-popup">
                                            {gallery.icon}
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Gallery;






// import React, { useState } from 'react';
// import SectionHeading from '../common/SectionHeading';
// import Lightbox from "react-image-lightbox";

// const Gallery = () => {

//     const [photoIndex, setPhotoIndex] = useState(0);
//     const [isOpen, setIsOpen] = useState(false);
//     const images = [
//       {
//         image: "01",
//         bigImage: "../../public/assets/images/thumbs/gallery1.png",
//         category: "Web Design",
//         title: "Design is a creative part",
//       },
//       {
//         image: "02",
//         bigImage: "../../public/assets/images/thumbs/gallery2.png",
//         category: "Mobile App",
//         title: "The service provide for designer",
//       },
//       {
//         image: "03",
//         bigImage: "../../public/assets/images/thumbs/gallery3.png",
//         category: "Web Design",
//         title: "Mobile App landing Design",
//       },
//       {
//         image: "04",
//         bigImage: "../../public/assets/images/thumbs/gallery4.png",
//         category: "Mobile App",
//         title: "Logo Design creativity",
//       },
//       {
//         image: "05",
//         bigImage: "../../public/assets/images/thumbs/gallery5.png",
//         category: "Web Design",
//         title: "T-shirt design is the part of design",
//       },
//       {
//         image: "06",
//         bigImage: "../../public/assets/images/thumbs/gallery6.png",
//         category: "Logo Design",
//         title: "Getting tickets to the big show",
//       },
//     ];
    
//     return (
//         <section className="gallery-section padding-y-60">
//             <div className="container container-two">
                
//                 <SectionHeading
//                     headingClass=""  
//                     subtitle="Our Gallery"
//                     subtitleClass="" 
//                     title="Unlocking the door to your a the new home" 
//                     renderDesc={false}
//                     desc=""
//                     renderButton={false}
//                     buttonClass="btn-main"
//                     buttonText="View More"
//                 />

//                 <div className="row gy-4">
//                     <div className="position">
//                         {images.map((e, index) => (
//                         <div className="imgFile">
//                             {isOpen && (
//                             <Lightbox
//                                 mainSrc={images[photoIndex].bigImage}
//                                 nextSrc={images[(photoIndex + 1) % images.length]}
//                                 prevSrc={
//                                 images[(photoIndex + images.length - 1) % images.length]
//                                 }
//                                 onCloseRequest={() => {
//                                 setIsOpen(false);
//                                 }}
//                                 onMovePrevRequest={() =>
//                                 setPhotoIndex(
//                                     (photoIndex + images.length - 1) % images.length
//                                 )
//                                 }
//                                 onMoveNextRequest={() =>
//                                 setPhotoIndex((photoIndex + 1) % images.length)
//                                 }
//                             />
//                             )}

//                             <img
//                             onClick={() => {
//                                 setIsOpen(true);
//                             }}
//                             src={e.bigImage}
//                             alt=""
//                             />
//                         </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Gallery;
