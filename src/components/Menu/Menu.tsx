/* eslint-disable jsx-a11y/media-has-caption */
import { MouseEvent, useState } from 'react';
import './Menu.style.scss';

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onClick = (e: MouseEvent) => {
        e.preventDefault();
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="Menu">
            <button type="button" onClick={ onClick }>
                <div className="Bar" data-is-diagonal-left={ menuOpen } />
                <div className="Bar" data-is-diagonal-right={ menuOpen } style={ { top: '7px' } } />
                { !menuOpen && <div className="Bar" style={ { top: '14px' } } /> }
            </button>
            <div className="Drawer" data-hidden={ !menuOpen }>
                <div
                  className="Background"
                  aria-label="Menu-Background"
                  onClick={ () => setMenuOpen(false) }
                  onKeyDown={ (event) => {
                      if (event.key === 'Enter') {
                          setMenuOpen(false);
                      }
                  } }
                  role="button"
                  tabIndex={ 0 }
                />
                <div className="MenuContent">
                    <div className="Links" data-is-open>
                        <a href="/">المتحدثون</a>
                        <a href="/">فرص الاستثمار</a>
                        <a href="/">الجلسات</a>
                        <a href="/">المقومات الاستثمارية</a>
                        <a href="/">كلمة القادة</a>
                        <a href="/">عن المنتدى</a>
                        <span>
                            <a href="/">سجل الآن</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
