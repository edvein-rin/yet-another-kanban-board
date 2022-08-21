import { useQuery } from "@tanstack/react-query";

import { sendPing } from "./sendPing";

export const usePing = () => useQuery(["ping"], sendPing);
