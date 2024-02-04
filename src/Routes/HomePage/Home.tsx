import {Statistics} from '../../components/Statistics/Statistics';
import { NorthOfOpportunities } from '../../components/NorthOfOpportunities/NorthOfOpportunities';

import './Home.style.scss';

import { statisticsData } from '../../data/statistics';

export function Home() {
    return (
        <>
            <NorthOfOpportunities />
            <Statistics statistics={statisticsData}/>
        </>
    );
}
