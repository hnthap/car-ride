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
  
  if (landscape === "DCU") {
    return <DriftClashUluru {...props} />;
  }
  if (landscape === "Moscow") {
    return <SportsCarRacingMoscow {...props} />;
  }
  if (landscape === "Paris") {
    return <SportCarRacingParis {...props} />;
  }
  throw new Error(`invalid landscape: ${landscape}`);
}
