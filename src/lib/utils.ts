import { Rates } from "./types";

/*
  Take the rates object and check which payments exists
  and returns the appropriate string to show on the UI
*/
export function checkPaymentRates(rates: Rates) {
  if (rates.monthly) {
    return `£${rates.monthly.toLocaleString} / mo`;
  } else if (rates.weekly) {
    return `£${rates.weekly.toLocaleString} / wk`;
  } else if (rates.nightly) {
    return `£${rates.nightly.toLocaleString} / night`;
  }
}
