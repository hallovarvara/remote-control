import robot from 'robotjs';

export const moveMouseRight = (shiftNumber: number): void => {
  const { width } = robot.getScreenSize();
  const { x: initX, y: initY } = robot.getMousePos();
  const expectedX = initX + shiftNumber;
  const newX = expectedX > width ? width : expectedX;
  robot.moveMouse(newX, initY);
};
