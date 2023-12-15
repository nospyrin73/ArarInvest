/* eslint-disable jsx-a11y/media-has-caption */
import './Banner.style.scss';
import { useEffect, useRef } from 'react';
import Video from '../../assets/banner.mp4';

export default function Banner() {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (ref.current && ref.current.played.length === 0) {
            ref.current.play();
        }
    }, [ref]);

    return (
        <div className="Video">
            <video ref={ ref } src={ Video } autoPlay muted loop />
            <h1>شمال الفرص</h1>
        </div>
    );
}
