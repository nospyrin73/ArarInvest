/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
    ReactElement, useEffect, useRef, useState,
} from 'react';
import './Transformation3d.scss';
import Transform from '../../assets/transform.png';

export default function Transformation3d(): ReactElement {
    const ex1Ref = useRef<HTMLDivElement | null>(null);
    const transformRef = useRef<HTMLDivElement | null>(null);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleHover = (ev: any): any => {
        if (transformRef && transformRef.current && ex1Ref && ex1Ref.current) {
            const { left = 0, top = 0 } = transformRef.current?.getBoundingClientRect() || {};
            const { width = 0, height = 0 } = ex1Ref.current?.getBoundingClientRect() || {};
            const degree = 10;
            const positionX = (ev.pageX - window.scrollX - (left + width / 2));
            const positionY = (ev.pageY - window.scrollY - (top + height / 2));
            const calculationX = -positionX * (degree / (width / 2));
            const calculationY = positionY * (degree / (height / 2));
            const translationX = -calculationX * (15 / degree);
            const translationY = calculationY * (15 / degree);
            transformRef.current!.style.transform = `translate(${translationX}px, ${translationY}px) rotateY(${calculationX}deg) rotateX(${calculationY}deg)`;
        }
    };

    const handleReset = (): void => {
        if (transformRef && transformRef.current) {
            transformRef.current!.style.transform = 'translate(0, 0) rotateY(0deg) rotateX(0deg)';
        }
    };

    useEffect(() => {
        const ref = ex1Ref.current;

        if (ref) {
            ref.addEventListener('mousemove', handleHover);
        }

        return () => {
            if (ref) {
                ref.removeEventListener('mousemove', handleHover);
            }
        };
    }, [ex1Ref]);

    return (
        <div
          ref={ ex1Ref }
          onMouseLeave={ handleReset }
          className="Transformation3dWrapper"
        >
            <div
              ref={ transformRef }
              className="Transformation"
            >
                <img src={ Transform } alt="transform" />
            </div>
        </div>
    );
}
