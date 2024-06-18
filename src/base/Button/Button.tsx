import { ReactElement } from "react";
import clsx from "clsx";

import './Button.scss';

type ButtonProps = {
    text: string;
    animatable?: boolean;
};

export function Button({ text, animatable = true }: ButtonProps): ReactElement {
    return (
        <div
          className={ clsx({ Button: true, animatable }) }
        >
            <span>{ text }</span>
            <span>{ text }</span>
            <span>{ text }</span>
        </div>
    );
}