import robot from 'robotjs';
import { DRAW_MOUSE_DELAY_MS_FASTEST } from './draw.constants';

export const drawCircle = (radius: number): void => {
  const { x: centerX, y } = robot.getMousePos();
  const x = centerX - radius;

  robot.setMouseDelay(DRAW_MOUSE_DELAY_MS_FASTEST);
  robot.mouseToggle('down');

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const newX = x + radius * Math.cos(i);
    const newY = y + radius * Math.sin(i);

    robot.moveMouseSmooth(newX, newY);
  }

  robot.mouseToggle('up');
};
