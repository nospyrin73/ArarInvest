import {ReactElement} from "react";

import './Statistics.scss'

type statistic = {
    label: string;
    value: number | string;
}

type StatisticsProps = {
    statistics: statistic[];
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
                            <div className="statistics__item">
                                <span className="statistics__item-value">{value}</span>
                                <span className="statistics__item-label">{label}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}