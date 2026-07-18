const fs = require('fs');

const svgContent = fs.readFileSync('public/assets/mandala.svg', 'utf8');

// Strip all hardcoded fill, stroke, style, and color attributes
let cleaned = svgContent
  .replace(/fill="[^"]*"/g, '')
  .replace(/stroke="[^"]*"/g, '')
  .replace(/style="[^"]*"/g, '')
  .replace(/color="[^"]*"/g, '')
  .replace(/class="[^"]*"/g, '')
  .replace(/width="[^"]*"/g, '')
  .replace(/height="[^"]*"/g, '')
  .replace(/<title>.*?<\/title>/gi, '')
  .replace(/<desc>.*?<\/desc>/gi, '')
  .replace(/xml:space="[^"]*"/g, '');

// Strip <?xml ... ?>
cleaned = cleaned.replace(/<\?xml.*?\?>/g, '');

// Extract the inner content of <svg> and its viewBox if it exists
const svgMatch = cleaned.match(/<svg([^>]*)>([\s\S]*?)<\/svg>/i);
if (!svgMatch) {
  console.error("No SVG found");
  process.exit(1);
}

const innerSvg = svgMatch[2];
let attrs = svgMatch[1];
let viewBoxMatch = attrs.match(/viewBox="[^"]*"/i);
let viewBox = viewBoxMatch ? viewBoxMatch[0] : 'viewBox="0 0 740 740"'; // defaulting based on original size 740x740

// Convert common hyphenated attributes to camelCase
let jsxInner = innerSvg
  .replace(/fill-rule/g, 'fillRule')
  .replace(/clip-path/g, 'clipPath')
  .replace(/stroke-width/g, 'strokeWidth')
  .replace(/stroke-linecap/g, 'strokeLinecap')
  .replace(/stroke-linejoin/g, 'strokeLinejoin')
  .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
  .replace(/stop-color/g, 'stopColor')
  .replace(/stop-opacity/g, 'stopOpacity');

const componentStr = `import React from 'react';

const MandalaWatermark: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg 
      ${viewBox} 
      fill="currentColor" 
      aria-hidden="true" 
      {...props}
    >
      ${jsxInner}
    </svg>
  );
};

export default MandalaWatermark;
`;

fs.writeFileSync('src/components/homepage/MandalaWatermark.tsx', componentStr);
console.log("Component generated successfully!");
