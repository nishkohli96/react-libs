/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  CirclePicker,
  SketchPicker,
  SwatchesPicker,
  PhotoshopPicker,
} from 'react-color';

const CircularColorPickerColors = [
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
];

const SwatchesColors = [
  [
    '#333333', '#15202b', '#25293e', '#1b1c1e',
  ],
  [
    '#e7eff8', '#A0d4df', '#2196f3', '#04437d',
  ],
  [
    '#eaf9e7', '#adebbe', '#aec70c', '#008c8c',
  ],
  [
    '#feaf96', '#ff8714', '#e99b53', '#ea8c38',
  ],
  [
    '#fd89d0', '#f18c83', '#d74654', '#ff4196',
  ],
];

export default function ReactColor() {
  const [hexColor, setHexColor] = useState('ea3677');
  /**
   * HSL format is also supported. { h: 0, s: 0, l: .10 }.
   * Both rgb and hsl will also take a a: 1 value for alpha.
   * You can also use transparent.
   *
   * Use onChangeComplete if you just need to get the color
   * only after the user has dragged the color cursor to his
   * desired position.
   */
  const [rgbColor, setRGBColor] = useState({
    r: 51,
    g: 51,
    b: 51,
    a: 0.7,
  });
  const [circleColor, setCircleColor] = useState(CircularColorPickerColors[3]);
  const [swatchColor, setSwatchColor] = useState(SwatchesColors[1][3]);

  const handleHexColorChange = color => setHexColor(color);
  const handleRGBColorChange = color => setRGBColor(color);
  const handleCircleColorChange = color => setCircleColor(color);
  const handleSwatchColorChange = color => setSwatchColor(color);

  return (
    <Box>
      <Typography variant="body1" color="primary">
        Hex color
      </Typography>
      <SketchPicker color={hexColor} onChange={handleHexColorChange} />
      <Typography variant="body1" color="primary" sx={{ mt: '20px' }}>
        RGB color
      </Typography>
      <PhotoshopPicker
        color={rgbColor}
        onChangeComplete={handleRGBColorChange}
      />
      <Typography variant="body1" color="primary" sx={{ mt: '20px' }}>
        Circular color picker
      </Typography>
      <CirclePicker
        color={circleColor}
        onChangeComplete={handleCircleColorChange}
        width="252px"
        colors={CircularColorPickerColors}
        circleSize={28}
        circleSpacing={14}
        onSwatchHover={(color, event) => {
          /**
           * An event handler for onMouseOver on the <Swatch>s
           * within this component.
           */
          console.log(color, event);
        }}
      />
      <Typography variant="body1" color="primary" sx={{ mt: '20px' }}>
        Swatches color picker
      </Typography>
      <SwatchesPicker
        color={swatchColor}
        onChangeComplete={handleSwatchColorChange}
        width="100%"
        height="100%"
        colors={SwatchesColors}
      />
    </Box>
  );
}
