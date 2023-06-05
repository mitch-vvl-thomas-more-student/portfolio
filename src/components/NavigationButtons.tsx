import React from 'react';
import { ArrowUpSquareFill, ArrowDownSquareFill } from 'react-bootstrap-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface NavigationButtonsProps {
  maxPage: number
  currentPage: number
  setCurrentPage: (x: number) => void
}

export const NavigationButtons = ({ maxPage, currentPage, setCurrentPage }: NavigationButtonsProps) => {
  return (
    <>
      {currentPage > 0 ?
        <OverlayTrigger
          key={'right'}
          placement={'right'}
          overlay={<Tooltip id={`tooltip-right`}>
            Vorige
          </Tooltip>}
        >
          <ArrowUpSquareFill
            className='arrow-up text-primary bg-white'
            size={48}
            onClick={() => {
              if (currentPage > 0)
                setCurrentPage(currentPage - 1);
            }}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }} />
        </OverlayTrigger> : null}
      {currentPage < maxPage - 1 ?
        <OverlayTrigger
          key={'left'}
          placement={'left'}
          overlay={<Tooltip id={`tooltip-left`}>
            Volgende
          </Tooltip>}
        >
          <ArrowDownSquareFill
            className='arrow-down text-primary bg-white'
            size={48}
            onClick={() => {
              if (currentPage < maxPage - 1)
                setCurrentPage(currentPage + 1);
            }}
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto'
            }} />
        </OverlayTrigger> : null}
    </>

  );
};
