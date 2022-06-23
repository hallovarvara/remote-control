import { concatenateStrings } from './concatenate-strings';

const ERROR_MESSAGE_DEFAULT = 'Unexpected error';

type HandleErrorF = (props: {
  message?: string;
  error?: Error | unknown;
}) => void;

export const handleError: HandleErrorF = ({
  message: customMessage,
  error,
}) => {
  let message = customMessage || ERROR_MESSAGE_DEFAULT;

  if (error instanceof Error) {
    message =
      concatenateStrings(error.message, customMessage) || ERROR_MESSAGE_DEFAULT;
  }

  console.log(message);
};
