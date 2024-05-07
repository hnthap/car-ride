export function getMovesFromUppercaseKey(key: string) {
  switch (key) {
    case "A":
    case "ARROWLEFT":
      return "left";

    case "D":
    case "ARROWRIGHT":
      return "right";

    case "W":
    case "ARROWUP":
      return "speed up";

    case "S":
    case "ARROWDOWN":
      return "slow down";

    case " ":
      return "brake";

    default:
      return null;
  }
}
