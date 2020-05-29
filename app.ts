import {
  App,
} from "https://deno.land/x/alosaur/src/mod.ts";

import {
  SpaBuilder,
} from "https://deno.land/x/alosaur@v0.14.0/src/middlewares/spa-builder.ts";

import {
  dso,
} from "https://deno.land/x/dso@v1.0.0/mod.ts";
import { UserArea } from "./areas/user/user.area.ts";

await dso.connect({
  hostname: "127.0.0.1",
  port: 3308,
  username: "root",
  password: "",
  db: "denodso",
});
await dso.sync(false);
// Create alosaur application
const app = new App({
  areas: [UserArea],
});

app.use(
  new RegExp("/"),
  new SpaBuilder({
    root: `${Deno.cwd()}/www`,
    index: "index.html",
  }),
);
app.listen();
