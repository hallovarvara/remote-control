import robot from 'robotjs';

export const moveMouseUp = (shiftNumber: number): void => {
  const { x: initX, y: initY } = robot.getMousePos();
  const expectedY = initY - shiftNumber;
  const newY = expectedY < 0 ? 0 : expectedY;
  robot.moveMouse(initX, newY);
};
