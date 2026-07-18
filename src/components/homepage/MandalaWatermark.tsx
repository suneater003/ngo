import React, { useEffect, useState } from 'react';

const MandalaWatermark: React.FC = () => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch('/assets/mandala.svg')
      .then((response) => response.text())
      .then(setSvgContent)
      .catch((err) => console.error('Failed to load mandala SVG:', err));
  }, []);

  if (!svgContent) return null;

  return (
    <div 
      className="mandala-watermark-wrapper"
      dangerouslySetInnerHTML={{ __html: svgContent }} 
    />
  );
};

export default MandalaWatermark;
