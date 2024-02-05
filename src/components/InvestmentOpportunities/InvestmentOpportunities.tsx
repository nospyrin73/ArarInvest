import { ReactElement } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Card } from "./Card/Card";

import './InvestmentOpportunities.scss';

import RealEstateDevelopment from './StockImages/RealEstateDevelopment.png'
import Municipalities from './StockImages/Municipalities.png'
import Industry from './StockImages/Industry.png'
import Mining from './StockImages/Mining.png'
import TransportAndLogistics from './StockImages/TransportAndLogistics.png'
import Health from './StockImages/Health.png'
import AcademicResearch from './StockImages/AcademicResearch.png'
import Education from './StockImages/Education.png'
import TourismAndHotelManagement from './StockImages/TourismAndHotelManagement.png'

const Cards = [
    {
        imageSrc: RealEstateDevelopment,
        label: 'التطوير العقاري'
    },
    {
        imageSrc: Municipalities,
        label: 'البلديات'
    },
    {
        imageSrc: Industry,
        label: 'الصناعة'
    },
    {
        imageSrc: Mining,
        label: 'التعدين'
    },
    {
        imageSrc: TransportAndLogistics,
        label: 'النقل والخدمات اللوجستية'
    },
    {
        imageSrc: Health,
        label: 'الصحة'
    },
    {
        imageSrc: AcademicResearch,
        label: 'البحث العلمي'
    },
    {
        imageSrc: Education,
        label: 'التعليم'
    },
    {
        imageSrc: TourismAndHotelManagement,
        label: 'السياحة والفندقة'
    }
];

export function InvestmentOpportunities(): ReactElement {
    return (
        <div className="InvestmentOpportunities">
            <h3 className="InvestmentOpportunities__Title">الفرص الاستثمارية</h3>
            <Swiper
              modules={ [Autoplay] }
              slidesPerView={ 3 }
              watchSlidesProgress
              width={ 1250 }
              loop
              autoplay={ {
                delay: 3000
              } }
              speed={ 700 }
              dir="rtl"
            >
                { Cards.map(({ imageSrc, label }) => (
                    <SwiperSlide>
                        <Card imageSrc={ imageSrc } label={ label } />
                    </SwiperSlide>
                )) }
            </Swiper>
        </div>
    );
}