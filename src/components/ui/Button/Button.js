import React from 'react';
import { node, arrayOf, oneOfType } from 'prop-types';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

const StyledButton = styled.button(({
  bigFull, small, theme, tiny,
}) => {
  const { space } = theme;

  let fontSize = '1em';
  let pad = `${space.md} ${space.lg}`;
  if (small) {
    fontSize = '0.9em';
    pad = `${space.thin} ${space.md}`;
  }
  if (tiny) {
    fontSize = '0.8em';
    pad = `${space.thin} ${space.sm}`;
  }
  if (bigFull) {
    pad = `${space.xl}`;
  }

  return `
    -webkit-appearance: none;
    border-radius: ${bigFull ? 0 : space.sm};
    cursor: pointer;
    font-size: ${fontSize};
    font-weight: bold;
    padding: ${pad};
    ${bigFull && 'width: 100%;'}
  `;
});
const ColorButton = styled(StyledButton)(
  ({
    primary, danger, disabled, theme,
  }) => {
    const { color, inputs } = theme;
    const {
      buttonColorDanger,
      buttonColorDefault,
      buttonColorDisabled,
      buttonTextColorLight,
      buttonTextColorDark,
    } = inputs;

    let buttonColor = buttonColorDefault;
    if (primary) {
      buttonColor = color.primary;
    }
    if (disabled) {
      buttonColor = buttonColorDisabled;
    }
    if (danger) {
      buttonColor = buttonColorDanger;
    }

    let buttonTextColor = '';
    if (tinycolor(buttonColor).isLight()) {
      buttonTextColor = buttonTextColorDark;
    } else {
      buttonTextColor = buttonTextColorLight;
    }

    return `
    background: ${tinycolor(buttonColor)};
    background: linear-gradient(${tinycolor(buttonColor).lighten(
    15,
  )}, ${tinycolor(buttonColor)});
    color: ${tinycolor(buttonTextColor)};
    border: 1px solid ${tinycolor(buttonColor).darken(10)};
    box-shadow: inset 0 1px 0 ${tinycolor(buttonColor).lighten(10)};
    text-shadow: ${
  tinycolor(buttonColor).isLight()
    ? `0 1px 0 ${tinycolor(buttonColor)
      .lighten(50)
      .setAlpha(0.25)
      .toRgbString()}`
    : `0 -1px 0 ${tinycolor(buttonColor)
      .darken(50)
      .setAlpha(0.5)
      .toRgbString()}`
};

    &:hover {
      background: ${tinycolor(buttonColor)};
    }
  `;
  },
);

const Button = ({ children, ...props }) => <ColorButton {...props}>{children}</ColorButton>;
Button.propTypes = {
  children: oneOfType([node, arrayOf(node)]),
};
Button.defaultProps = { children: [] };

export default Button;
