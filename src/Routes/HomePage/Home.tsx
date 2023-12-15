import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import TestTransform from '../TestTransform';
import './Home.style.scss';

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <TestTransform />
            <TestTransform />
        </div>
    );
}
