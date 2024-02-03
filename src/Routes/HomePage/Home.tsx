import {Parallex} from '../../Components/Parallax/Parallax';
import {Statistics} from '../../Components/Statistics/Statistics';
import { NorthOfOpportunities } from '../../components/NorthOfOpportunities/NorthOfOpportunities';

import './Home.style.scss';

import { statisticsData } from '../../Data/statistics';

export function Home() {
    return (
        <>
            <NorthOfOpportunities />
            <Statistics statistics={statisticsData}/>
            {/* <Parallex /> */}
        </>
    );
}
