import { DrawDirection } from './draw.types';
import robot from 'robotjs';
import { isUndefined } from '../../utils/is-undefined';
import { handleError } from '../../utils/handle-error';
import { isNumber } from '../../utils/is-number';

export const getDrawDirection = (
  width: number,
  heightFromProps?: number,
): DrawDirection => {
  const height = isUndefined(heightFromProps) ? width : heightFromProps;
  const { x, y } = robot.getMousePos();
  const screen = robot.getScreenSize();

  if (
    isUndefined(width) ||
    isUndefined(height) ||
    !isNumber(width) ||
    !isNumber(height)
  ) {
    handleError({
      message: 'Incorrect radius or width and height of figure to draw',
    });
  } else {
    const hasPlaceOnRight = x + width <= screen.width;
    const hasPlaceOnLeft = x - width >= 0;
    const hasPlaceOnTop = y - height >= 0;
    const hasPlaceOnBottom = y + height <= screen.height;

    if (hasPlaceOnRight && hasPlaceOnTop) {
      return DrawDirection.RightTop;
    } else if (hasPlaceOnLeft && hasPlaceOnBottom) {
      return DrawDirection.LeftBottom;
    } else if (hasPlaceOnLeft && hasPlaceOnTop) {
      return DrawDirection.LeftTop;
    }
  }

  return DrawDirection.RightBottom;
};
