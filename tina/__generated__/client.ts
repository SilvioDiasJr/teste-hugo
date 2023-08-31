import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '7a6c7864617e9083bb1837e58fd40e2b09726fca', queries });
export default client;
  