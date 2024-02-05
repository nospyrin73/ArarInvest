import { ReactElement } from "react";

import "./Card.scss";

type CardType = {
    imageSrc: string;
    label: string;
};

export function Card({ imageSrc, label }: CardType): ReactElement {
    return (
        <div className="InvestmentOpportunities__card__wrapper">
            <img src={ imageSrc } className="InvestmentOpportunities__card__image" />
            <div className="InvestmentOpportunities__card__label">{ label }</div>
        </div>
    );
}