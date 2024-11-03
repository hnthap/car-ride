export interface ClockProps {
  minutes: number;
}

export function Clock(props: ClockProps ) {
  const hours = Math.floor(props.minutes / 60.0);
  const minutes = props.minutes - hours * 60;
  return (
    <div className="clock">
      {padZeros(hours, 2)}:{padZeros(minutes, 2)}
    </div>
  );
}

function padZeros(
  value: number,
  length: number,
  place: "before" | "after" = "before"
): string {
  let result = value.toString();
  while (result.length < length) {
    if (place === "before") {
      result = "0" + result;
    } else {
      result = result + "0";
    }
  }
  return result
}