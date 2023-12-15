import { ReactElement } from 'react';
import Transformation3d from '../components/Transformation3d/Transformation3d';
import Dots from '../assets/shape-dots.svg';
import Shape from '../assets/shape-two-circle.svg';

export default function TestTransform(): ReactElement {
    const header = 'نحو شمال الفرص';
    const content = 'يأتي منتدى الحدود الشمالية للاستثمار بمدينة عرعر 2023 مواكباً للإستراتيجية الوطنية للاستثمار ليكتسب قيمته المضافة من خلال الربط التكاملي بين مكونات المنظومة الاقتصادية، وتعزيز التواصل بين كبار المسؤولين الحكوميين ورجال وسيدات الأعمال من التجار والصناعيين والمستثمرين ومجتمع الأعمال في داخل وخارج المملكة';
    const date = '25 - 26 , نوفمبر 2023';
    const location = 'نادي منسوبي وزارة الداخلية، عرعر، الحدود الشمالية';

    return (
        <div
          className="TestTransform"
        >
            <div className="Test">
                <div className="TestWrapper">
                    <div className="Text">
                        <div className="TextWrapper">
                            <div className="Header">{ header }</div>
                            <div className="Content">{ content }</div>
                            <div className="Date">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                                </svg>
                                { date }
                            </div>
                            <div className="Location">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                                { location }
                            </div>
                        </div>
                    </div>
                    <div className="Images">
                        <img src={ Dots } className="Dots" alt="dots" />
                        <img src={ Shape } className="Shape" alt="shape" />
                        <Transformation3d />
                    </div>
                </div>
            </div>
        </div>
    );
}
