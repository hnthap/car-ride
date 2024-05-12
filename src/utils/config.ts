const APP_CONFIG_PATH = "/appconfig.json";

type CarName = "Bugatti" | "CarA";
// | "Lamborghini"

type LandscapeName = "Moscow" | "Paris" | "DCU";

export type AppConfig = {
  car: CarName;
  landscape: LandscapeName;
  maxTranslateSpeed: number;
  minTranslateSpeed: number;
  rotationSpeedDeg: number;
  translateAcceleration: number;
  translateDeceleration: number;
};

export async function loadAppConfig(): Promise<AppConfig> {
  return new Promise((resolve, reject) => {
    fetch(APP_CONFIG_PATH)
      .then((res) => resolve(res.json()))
      .catch(reject);
  });
}
