import robot from 'robotjs';

export const moveMouseDown = (shiftNumber: number): void => {
  const { height } = robot.getScreenSize();
  const { x: initX, y: initY } = robot.getMousePos();
  const expectedY = initY + shiftNumber;
  const newY = expectedY > height ? height : expectedY;
  robot.moveMouse(initX, newY);
};
