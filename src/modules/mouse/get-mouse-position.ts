import robot from 'robotjs';
import { COMMAND_MOUSE_POSITION } from './mouse.constants';

export const getMousePosition = (): string => {
  const { x, y } = robot.getMousePos();
  return `${COMMAND_MOUSE_POSITION} ${x}px,${y}px`;
};
