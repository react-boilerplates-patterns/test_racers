export function handleErrorStatus(error) {
  return Object.values(error)
    .map((obj) => obj.status)
    .find((el) => typeof el === "number");
}
