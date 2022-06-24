import robot from 'robotjs';

export const moveMouseLeft = (shiftNumber: number): void => {
  const { x: initX, y: initY } = robot.getMousePos();
  const expectedX = initX - shiftNumber;
  const newX = expectedX < 0 ? 0 : expectedX;
  robot.moveMouse(newX, initY);
};
