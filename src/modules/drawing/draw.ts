import { DrawFiguresEnum } from './draw.types';
import { isUndefined } from '../../utils/is-undefined';
import { handleError } from '../../utils/handle-error';
import { drawSquare } from './draw-square';
import { drawRectangle } from './draw-rectangle';
import { drawCircle } from './draw-circle';

type DrawF = (props: {
  figure: DrawFiguresEnum;
  radiusOrWidth: number;
  height?: number;
}) => void;

export const draw: DrawF = (props) => {
  if (isUndefined(props)) {
    handleError({ message: 'No draw options passed' });
    return;
  }

  const { figure, radiusOrWidth = 0, height = 0 } = props;

  if (isUndefined(figure)) {
    handleError({ message: 'No figure specified for drawing' });
    return;
  }

  if (radiusOrWidth === 0) {
    handleError({ message: 'No figure width or radius specified for drawing' });
    return;
  }

  if (figure === DrawFiguresEnum.Rectangle && height === 0) {
    handleError({ message: 'No rectangle height specified for drawing' });
    return;
  }

  switch (figure) {
    case DrawFiguresEnum.Square:
      drawSquare(radiusOrWidth);
      break;
    case DrawFiguresEnum.Rectangle:
      drawRectangle(radiusOrWidth, height);
      break;
    case DrawFiguresEnum.Circle:
      drawCircle(radiusOrWidth);
      break;
    default:
      handleError({ message: 'No figure for drawing passed' });
      break;
  }

  // if (isUndefined(direction)) {
  //   handleError({ message: 'No mouse movement direction passed' });
  // }
};
