import { MouseMoveDirection } from './mouse.types';
import { isUndefined } from '../../utils/is-undefined';
import { handleError } from '../../utils/handle-error';
import { moveMouseUp } from './move-mouse-up';
import { moveMouseDown } from './move-mouse-down';
import { moveMouseLeft } from './move-mouse-left';
import { moveMouseRight } from './move-mouse-right';

type MoveMouseF = (props?: {
  direction: MouseMoveDirection;
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
    case MouseMoveDirection.Up:
      moveMouseUp(shiftNumber);
      break;
    case MouseMoveDirection.Down:
      moveMouseDown(shiftNumber);
      break;
    case MouseMoveDirection.Left:
      moveMouseLeft(shiftNumber);
      break;
    case MouseMoveDirection.Right:
      moveMouseRight(shiftNumber);
      break;
    default:
      handleError({ message: 'Wrong mouse movement direction passed' });
      break;
  }
};
