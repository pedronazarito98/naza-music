import GeorgeSlide from "../../assets/GeorgeArrunateghi-Banner.jpg";
import HansSlide from "../../assets/HansLandim-Banner.jpg";
import NoelSlide from "../../assets/Noel-Banner.jpg";
import ThiagoSlide from "../../assets/ThiagoPeixoto-Banner.png";
import ChristianoSlide from "../../assets/ChristianoCaldas-Banner.png";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Navigation module
import { ImgSlider } from "./style";
import "./styles.scss";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export function Carrousel() {
  return (
    <>
      <Swiper
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        className="mySwiper "
        // autoHeight={true}
      >
        <SwiperSlide>
          <ImgSlider src={GeorgeSlide} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <ImgSlider src={HansSlide} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <ImgSlider src={NoelSlide} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <ImgSlider src={ThiagoSlide} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <ImgSlider src={ChristianoSlide} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
