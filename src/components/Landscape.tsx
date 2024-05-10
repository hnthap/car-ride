import { GroupProps } from "@react-three/fiber";
import {
  DriftClashUluru,
  SportCarRacingParis,
  SportsCarRacingMoscow,
} from "../models";
import { AppConfig } from "../utils/config";

export default function Landscape(
  props: GroupProps & {
    config: AppConfig;
  }
) {
  const {
    config: { landscape },
  } = props;
  switch (landscape) {
    case "DCU":
      return <DriftClashUluru {...props} />;

    case "Moscow":
      return <SportsCarRacingMoscow {...props} />;

    case "Paris":
      return <SportCarRacingParis {...props} />;

    default:
      break;
  }
  throw new Error(`invalid landscape: ${landscape}`);
}
