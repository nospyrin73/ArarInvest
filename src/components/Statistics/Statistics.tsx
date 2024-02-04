import {ReactElement, useEffect, useState} from "react";

import Odometer from "react-odometerjs";

import "odometer/themes/odometer-theme-default.css";
import './Statistics.scss'

type statistic = {
    label: string;
    value: number;
}

type StatisticsProps = {
    statistics: statistic[];
}

type StatisticsOdometerItemProps = {
    value: number
}

function StatisticsOdometerItem({value}: StatisticsOdometerItemProps): ReactElement {
    const [odometerValue, setOdometerValue] = useState(0);

    useEffect(() => {
        setOdometerValue(value);
    }, []);

    return (
        <Odometer format="d" duration={1000} value={odometerValue} />
    );
}

export function Statistics({statistics}: StatisticsProps): ReactElement | null {
    if(!statistics.length) {
        return null;
    }

    return (
        <div className="statistics">
            <div className="statistics__container">
                <div className="statistics__box">
                    {
                        statistics.map(({label, value}) => (
                            <div className="statistics__item" key={`${label}-${value}`}>
                                <span className="statistics__item-value">
                                    <StatisticsOdometerItem value={value} />
                                </span>
                                <span className="statistics__item-label">{label}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}