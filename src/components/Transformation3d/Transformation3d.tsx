/* eslint-disable max-len */
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
    const [rotationCoords, setRotationCoords] = useState({
        x: 0, y: 0, translationX: 0, translationY: 0,
    });
    const transform = `translate(${rotationCoords.translationX}px, ${rotationCoords.translationY}px) rotateY(${rotationCoords.x}deg) rotateX(${rotationCoords.y}deg)`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleHover = (ev: any): any => {
        const {
            left = 0, top = 0, height = 0, width = 0,
        } = transformRef.current?.getBoundingClientRect() || {};
        const degreeX = 25;
        const degreeY = 5;
        const positionX = (ev.pageX - (left + 540 / 2));
        const positionY = (ev.pageY - (top + 360 / 2));
        const calculationX = -positionX * (degreeX / (540 / 2));
        const calculationY = positionY * (degreeY / (360 / 2));
        const translationX = -calculationX * (15 / degreeX);
        const translationY = calculationY * (15 / degreeY);
        console.log('test ', translationX, translationY);
        setRotationCoords({
            x: calculationX,
            y: calculationY,
            translationX,
            translationY,
        });
    };

    const handleReset = (): void => {
        setRotationCoords({
            x: 0,
            y: 0,
            translationX: 0,
            translationY: 0,
        });
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
              style={ {
                  transform,
              } }
            >
                <img src={ Transform } alt="transform" />
            </div>
        </div>
    );
}
