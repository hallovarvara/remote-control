import robot from 'robotjs';
import { DRAW_MOUSE_DELAY_MS } from './draw.constants';
import { getDrawDirection } from './get-draw-direction';
import { DrawDirection } from './draw.types';
import { isUndefined } from '../../utils/is-undefined';

export const drawRectangle = (
  width: number,
  heightFromProps?: number,
): void => {
  const height = isUndefined(heightFromProps) ? width : heightFromProps;
  const direction = getDrawDirection(width, height);
  const { x, y } = robot.getMousePos();
  let x2, y2;

  switch (direction) {
    case DrawDirection.RightBottom:
    default: {
      x2 = x + width;
      y2 = y - height;
      break;
    }
    case DrawDirection.RightTop: {
      x2 = x + width;
      y2 = y + height;
      break;
    }
    case DrawDirection.LeftTop: {
      x2 = x - width;
      y2 = y - height;
      break;
    }
    case DrawDirection.LeftBottom: {
      x2 = x - width;
      y2 = y + height;
      break;
    }
  }

  robot.setMouseDelay(DRAW_MOUSE_DELAY_MS);
  robot.mouseToggle('down');
  robot.moveMouseSmooth(x2, y);
  robot.moveMouseSmooth(x2, y2);
  robot.moveMouseSmooth(x, y2);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle('up');
};
