import { MouseMoveDirectionEnum } from './mouse.types';
import { isUndefined } from '../../utils/is-undefined';
import { handleError } from '../../utils/handle-error';
import { moveMouseUp } from './move-mouse-up';
import { moveMouseDown } from './move-mouse-down';
import { moveMouseLeft } from './move-mouse-left';
import { moveMouseRight } from './move-mouse-right';

type MoveMouseF = (props?: {
  direction: MouseMoveDirectionEnum;
  shiftNumber: number;
}) => void;

export const moveMouse: MoveMouseF = (props) => {
  if (isUndefined(props)) {
    handleError({ message: 'No mouse movement props passed' });
    return;
  }

  const { direction, shiftNumber = 0 } = props;

  if (isUndefined(direction)) {
    handleError({ message: 'No mouse movement direction passed' });
  }

  if (shiftNumber === 0) {
    handleError({ message: 'No mouse movement pixels number passed' });
  }

  switch (direction) {
    case MouseMoveDirectionEnum.Up:
      moveMouseUp(shiftNumber);
      break;
    case MouseMoveDirectionEnum.Down:
      moveMouseDown(shiftNumber);
      break;
    case MouseMoveDirectionEnum.Left:
      moveMouseLeft(shiftNumber);
      break;
    case MouseMoveDirectionEnum.Right:
      moveMouseRight(shiftNumber);
      break;
    default:
      handleError({ message: 'Wrong mouse movement direction passed' });
      break;
  }
};
