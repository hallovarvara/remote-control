import { convertStringToNumber } from '../../utils/convert-string-to-number';
import { isNumber } from '../../utils/is-number';
import {
  moveMouse,
  MouseMoveDirectionEnum,
  MOUSE_POSITION,
  getMousePosition,
} from '../mouse';
import { handleError } from '../../utils/handle-error';
import { draw, DrawFiguresEnum } from '../drawing';

export const parseCommand = (message: string): string | void => {
  const [command, numParam = 0, numParam2 = 0] = message.split(' ');

  switch (command) {
    case MouseMoveDirectionEnum.Up:
    case MouseMoveDirectionEnum.Down:
    case MouseMoveDirectionEnum.Left:
    case MouseMoveDirectionEnum.Right: {
      const shiftNumber = isNumber(numParam)
        ? numParam
        : convertStringToNumber(numParam);

      moveMouse({ direction: command, shiftNumber });

      break;
    }
    case MOUSE_POSITION:
      return getMousePosition();
    case DrawFiguresEnum.Square:
    case DrawFiguresEnum.Rectangle:
    case DrawFiguresEnum.Circle:
      const radiusOrWidth = isNumber(numParam)
        ? numParam
        : convertStringToNumber(numParam);

      const height = isNumber(numParam2)
        ? numParam2
        : convertStringToNumber(numParam2);

      draw({ figure: command, radiusOrWidth, height });
      break;
    default: {
      handleError({ message: `Command doesn't recognised: "${message}"` });
    }
  }
};
