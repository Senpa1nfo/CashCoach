import './WorkingArea.sass';
import List from '../list/List';
import Statistics from '../statistics/Statistics';
import Calculator from '../calculator/Calculator';

import React, { useState, useRef } from 'react';


type MouseEvent = React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>;

const WorkingArea = () => {
    const [startY, setStartY] = useState(0);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [isDown, setIsDown] = useState(false);
  
    const areaRef = useRef<HTMLDivElement>(null);
  
    const mouseIsDown = (e: MouseEvent) => {
      setIsDown(true);
      const area = areaRef.current;
      if (!area) return;
      setStartY(e.pageY - area.offsetTop);
      setStartX(e.pageX - area.offsetLeft);
      setScrollLeft(area.scrollLeft);
      setScrollTop(area.scrollTop);
    };
  
    const mouseUp = () => {
      setIsDown(false);
    };
  
    const mouseLeave = () => {
      setIsDown(false);
    };
  
    const mouseMove = (e: MouseEvent) => {
      if (isDown) {
        e.preventDefault();
        const area = areaRef.current;
        if (!area) return;
        //Рух по вертикалі
        const y = e.pageY - area.offsetTop;
        const walkY = y - startY;
        area.scrollTop = scrollTop - walkY;
  
        //Рух по горизонталі
        const x = e.pageX - area.offsetLeft;
        const walkX = x - startX;
        area.scrollLeft = scrollLeft - walkX;
      }
    };
  
    return (
      <div
        className="working-area"
        ref={areaRef}
        onMouseDown={mouseIsDown}
        onMouseUp={mouseUp}
        onMouseLeave={mouseLeave}
        onMouseMove={mouseMove}
      >
        <List />
        <Statistics />
        <Calculator />
      </div>
    );
  };
  
  export default WorkingArea;
  