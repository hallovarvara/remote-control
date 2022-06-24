import { convertStringToNumber } from '../../utils/convert-string-to-number';
import { isNumber } from '../../utils/is-number';
import { handleError } from '../../utils/handle-error';
import { draw, DrawFiguresEnum } from '../drawing';
import { COMMAND_PRINT_SCREEN, printScreen } from '../print-screen';

import {
  moveMouse,
  MouseMoveDirectionEnum,
  COMMAND_MOUSE_POSITION,
  getMousePosition,
} from '../mouse';

export const parseCommand = async (message: string): Promise<string | void> => {
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
    case COMMAND_MOUSE_POSITION:
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
    case COMMAND_PRINT_SCREEN: {
      return await printScreen();
    }
    default: {
      handleError({ message: `Command doesn't recognised: "${message}"` });
    }
  }
};
