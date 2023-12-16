import Banner from '../../components/Banner/Banner';
import TestTransform from '../TestTransform';
import './Home.style.scss';

export default function Home() {
    return (
        <div>
            <Banner />
            <TestTransform />
            <TestTransform />
        </div>
    );
}
