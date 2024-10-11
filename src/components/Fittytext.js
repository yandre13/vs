import React, { useEffect, useRef } from 'react';
import fitty from 'fitty';

const FitText = ({ children, minSize = 10, maxSize = 100, className, style }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const fitInstance = fitty(textRef.current, {
                minSize: minSize,
                maxSize: maxSize,
                multiLine: true,
            });

            // Limpieza al desmontar el componente
            return () => {
                fitInstance.unsubscribe();
            };
        }
    }, [minSize, maxSize, children]);

    return (
        <div style={{ ...style, overflow: 'hidden', height: '100%' }}>
            <p ref={textRef} className={className} style={{ margin: 0 }}>
                {children}
            </p>
        </div>
    );
};

export default FitText;
