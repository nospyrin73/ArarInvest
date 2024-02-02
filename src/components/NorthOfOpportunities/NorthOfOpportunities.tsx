import { ReactElement } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

import './NorthOfOpportunities.scss';

export function NorthOfOpportunities(): ReactElement {
    return (
        <Swiper
          dir="rtl"
          modules={ [FreeMode, Autoplay] }
          freeMode={ true }
          loop={ true }
          autoplay={ {
            delay: 1
          } }
          speed={ 30000 }
        >
            { Array.from({ length: 5 }, (_, i) => (
                <SwiperSlide key={ i }>
                    شمال الفرص
                    &nbsp;
                </SwiperSlide>
            ) ) }
        </Swiper>
    );
}
