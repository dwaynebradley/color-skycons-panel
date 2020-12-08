import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import { ColorSkycons, ColorSkyconsType } from 'react-color-skycons';

interface Props extends PanelProps<SimpleOptions> {}

export const ColorSkyconsPanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();

  const icons = data.series
    .map(series => series.fields.find(field => field.type === 'number'))
    .map(field => field?.values.get(field.values.length - 1));

  var size = 0;
  if (height > width) {
    size = width;
  } else {
    size = height;
  }

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
          display: flex;
          justify-content: center;
        `
      )}
    >
      {icons.map((icon, index) => {
        if (typeof icon !== 'string') {
          return (
            <p>
              Invalid data type: ({typeof icon}){icon}
            </p>
          );
        } else {
          // Icon must be uppercase and have '_' instead of '-' to work correctly.
          const myIcon = icon.toUpperCase().replace('-', '_');
          const mytype: ColorSkyconsType = ColorSkyconsType[myIcon as keyof typeof ColorSkyconsType];

          // Make sure "icon" is a valid ColorSkyconsType value
          if (mytype === null) {
            return <p>Invalid value: {myIcon}</p>;
          } else {
            if (options.monochrome) {
              return <ColorSkycons monochrome={options.monochrome} color={options.color} type={mytype} size={size} />;
            } else {
              return <ColorSkycons monochrome={options.monochrome} type={mytype} size={size} />;
            }
          }
        }
      })}
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
