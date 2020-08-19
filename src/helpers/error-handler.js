export function handleErrorStatus(error) {
  if (error.code === 'ECONNABORTED') {
    return `Server doesn't respond. Please check your internet connection.`;
  } else if (error.response === undefined) {
    return 'Unknown Error. Might be troubles with your internet connection.';
  } else {
    return Object.values(error)
      .map((obj) => obj.status)
      .find((el) => typeof el === 'number');
  }
}
