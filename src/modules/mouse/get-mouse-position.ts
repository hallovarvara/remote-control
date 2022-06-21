import robot from 'robotjs';
import { MOUSE_POSITION } from './mouse.constants';

export const getMousePosition = (): string => {
  const { x, y } = robot.getMousePos();
  return `${MOUSE_POSITION} ${x}px,${y}px`;
};
