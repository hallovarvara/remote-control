import Jimp from 'jimp';
import robot from 'robotjs';
import { handleError } from '../../utils/handle-error';

import {
  PRINT_SCREEN_SIZE,
  PRINT_SCREEN_SIZE_HALF,
  COMMAND_PRINT_SCREEN,
} from './print-screen.constants';

import { getDifferenceOrNull } from '../../utils/get-difference-or-null';

export const printScreen = async (): Promise<string | void> => {
  try {
    const { x: xBase, y: yBase } = robot.getMousePos();

    const x = getDifferenceOrNull(xBase, PRINT_SCREEN_SIZE_HALF);
    const y = getDifferenceOrNull(yBase, PRINT_SCREEN_SIZE_HALF);

    const bitmap = robot.screen.capture(
      x,
      y,
      PRINT_SCREEN_SIZE,
      PRINT_SCREEN_SIZE,
    );

    const image = new Jimp(bitmap.width, bitmap.height);
    image.bitmap.data = bitmap.image;

    const base64Image = await image.getBase64Async(Jimp.MIME_PNG);

    const pureBase64 = base64Image.slice(base64Image.indexOf(',') + 1);

    return `${COMMAND_PRINT_SCREEN} ${pureBase64}`;
  } catch (error) {
    handleError({ error });
  }
};
