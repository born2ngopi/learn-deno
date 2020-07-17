import { listenAndServe } from "https://deno.land/std/http/server.ts";
import { ServerRequest } from 'https://deno.land/std/http/server.ts';
import { RouteUser } from './route-users.ts';

export class App {

  static listen(port: number) {
    listenAndServe({port: port}, async (req: ServerRequest) => {
      RouteUser.init(req);
    });

    console.log("server runnit on port 8000");
  }

}
