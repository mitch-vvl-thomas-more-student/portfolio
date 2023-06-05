import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'

export interface TypedTextProps {
  text: string[];
  fontSize?: number;
  fontFamily?: string;
  classes?: string;
  fontWeight?: number;
  color?: string;
}

export const TypedText = (props: TypedTextProps): JSX.Element => {
  // Create reference to store the DOM element containing the animation
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Initialize the Typed instance
    const options = {
      strings: props.text,
      typeSpeed: 50,
      backSpeed: 50,
    };
    const typedInstance = new Typed(elRef.current!, options);

    // Clean up the Typed instance on unmount
    return () => {
      typedInstance.destroy();
    };
  }, [props.text]);

  return (
    <div className="wrap" style={{display: 'inline'}}>
      <div className="type-wrap" style={{display: 'inline'}}>
        <span
          className={props.classes}
          style={{
            display: 'inline',
            whiteSpace: 'pre-wrap',
            fontFamily: props.fontFamily,
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            color: props.color,
          }}
          ref={elRef}
        />
      </div>
    </div>
  );
};
