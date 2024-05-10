const APP_CONFIG_PATH = "/appconfig.json";

export type AppConfig = {
  car: "Bugatti" | "CarA" | "Lamborghini";
  landscape: "Moscow" | "Paris" | "DCU";
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
