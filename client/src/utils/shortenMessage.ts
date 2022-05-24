const shortenMessage = (message: string, maxChars = 28) => {
  const cropped = message.length > maxChars;
  return `${message.slice(0, maxChars)}${cropped ? '...' : ''}`;
};

export default shortenMessage;
