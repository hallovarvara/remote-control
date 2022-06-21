import { convertStringToNumber } from '../../utils/convert-string-to-number';
import { isNumber } from '../../utils/is-number';
import {
  moveMouse,
  MouseMoveDirection,
  MOUSE_POSITION,
  getMousePosition,
} from '../mouse';
import { handleError } from '../../utils/handle-error';

export const parseCommand = (message: string): string | void => {
  const [command, shift = 0] = message.split(' ');

  switch (command) {
    case MouseMoveDirection.Up:
    case MouseMoveDirection.Down:
    case MouseMoveDirection.Left:
    case MouseMoveDirection.Right: {
      const shiftNumber = isNumber(shift)
        ? shift
        : convertStringToNumber(shift);

      moveMouse({ direction: command, shiftNumber });

      break;
    }
    case MOUSE_POSITION:
      return getMousePosition();
    default: {
      handleError({ message: `Command doesn't recognised: "${message}"` });
    }
  }
};
