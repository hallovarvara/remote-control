type HandleErrorF = (props: { message?: string }) => void;

export const handleError: HandleErrorF = ({ message }) => {
  console.log(message || 'Unexpected error');
};
