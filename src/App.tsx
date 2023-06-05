
import React, { useState, useEffect, useRef, RefObject } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { NavigationButtons } from './components/NavigationButtons';
import { Footer } from './components/Footer';
import './App.css';
import { ProgressBarCustom } from './components/ProgressBar';

const App = () => {
  const pages = [
    '/',
    '/algemeen',
    '/persoonlijke-realisaties',
    '/webwinkels',
    '/php',
    '/persoonlijke-troeven',
    '/opleiding',
    '/schoolprojecten',
    '/microsoft-certified',
    '/technologieen',
    '/professional-socials'
  ];
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const debounceDelay = 200;

  const handleMouseWheelDirection = (direction: any) => {
    const isScrollable = (direction === 'down' && window.innerHeight + window.scrollY < document.body.offsetHeight) ||
      (direction === 'up' && window.scrollY > 0);

    if (isScrollable) {
      window.scrollBy(0, direction === 'down' ? window.innerHeight : -window.innerHeight);
    } else {
      if (direction == 'down') {
        if (currentPage < pages.length - 1)
          setCurrentPage(currentPage + 1);
        else
          window.scrollTo(0, document.body.scrollHeight);
      } else if (direction == 'up') {
        if (currentPage > 0)
          setCurrentPage(currentPage - 1);
        else
          window.scrollTo(0, 0);
      } else {
        console.log('no direction');
        // this means the direction of the mouse wheel could not be determined
      }
    }
  }

  const debouncedHandleMouseWheelDirection = debounce(handleMouseWheelDirection, debounceDelay, { leading: true, trailing: false });

  const detectMouseWheelDirection = (e: any) => {
    e.preventDefault();
    var delta = null,
      direction = null;
    if (!e) { // if the event is not provided, we get it from the window object
      e = window.event;
    }
    if (e.wheelDelta) { // will work in most cases
      delta = e.wheelDelta / 60;
    } else if (e.detail) { // fallback for Firefox
      delta = -e.detail / 2;
    }
    if (delta !== null) {
      direction = delta > 0 ? 'up' : 'down';
    }

    console.log(direction)
    if (direction !== null)
      debouncedHandleMouseWheelDirection(direction);
  };

  const handleScroll = () => {
    window.addEventListener('wheel', detectMouseWheelDirection, { passive: false });
  };

  const removeScrollListener = () => {
    window.removeEventListener('wheel', detectMouseWheelDirection);
  };

  useEffect(() => {
    navigate(pages[currentPage]);
  }, [currentPage]);

  handleScroll();
  return (
    <div>
      <ProgressBarCustom now={(pages.indexOf(pages[currentPage]) + 1) / pages.length * 100} />
      <Footer />
      <NavigationButtons maxPage={pages.length} currentPage={currentPage} setCurrentPage={(value) => setCurrentPage(value)} />
    </div>
  );
};

export default App;
