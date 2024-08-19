import { getServerSession } from "next-auth/next";
import { authOptions } from "./authOptions";

import { TRates } from "./types";

/*
  Take the rates object and check which payments exists
  and returns the appropriate string to show on the UI
*/
export function checkPaymentRates(rates: TRates) {
  if (rates.monthly) {
    return `$${rates.monthly.toLocaleString()} / mo`;
  } else if (rates.weekly) {
    return `$${rates.weekly.toLocaleString()} / wk`;
  } else if (rates.nightly) {
    return `$${rates.nightly.toLocaleString()} / night`;
  }
}

/*
  Get the user session and return the user and userId
*/

export const getSessionUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return null;
  }

  return {
    user: session.user,
    userId: session.user.id,
  };
};
