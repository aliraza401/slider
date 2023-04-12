export function getScaleValue(widthCalculated: number) {
  let scaleValue;

  switch (true) {
    case widthCalculated > 1800:
      scaleValue = 0.19;
      break;
    case widthCalculated > 1700 && widthCalculated <= 1800:
      scaleValue = 0.26;
      break;
    case widthCalculated >= 1600 && widthCalculated <= 1700:
      scaleValue = 0.3;
      break;
    case widthCalculated >= 1400 && widthCalculated <= 1600:
      scaleValue = 0.34;
      break;
    case widthCalculated >= 1300 && widthCalculated <= 1400:
      scaleValue = 0.4;
      break;
    case widthCalculated >= 1200 && widthCalculated <= 1300:
      scaleValue = 0.45;
      break;
    case widthCalculated >= 1000 && widthCalculated <= 1200:
      scaleValue = 0.5;
      break;
    default:
      scaleValue = 0.6;
  }

  return scaleValue;
}
