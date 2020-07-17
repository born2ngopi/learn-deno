import { ServerRequest } from 'https://deno.land/std/http/server.ts';
import {User} from '../model/user-model.ts';
// import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

export class UserController {

  index(req: ServerRequest): any {
      req.respond({
          status: 200,
          headers: new Headers({
              "content-type":"text/html",
          }),
          body:"woyyy",
      });
  }

  hello(req: ServerRequest): any {
    req.respond({
        status: 200,
        headers: new Headers({
            "content-type":"text/html",
        }),
        body:"yowww",
    });
  }

  // getAllUser(req: ServerRequest): any {
  //   const users = User.fetchAll();
  // }
  //
  // async login(req: ServerRequest) {
  //   const r = req.body();
  //   const user = await User.fetchByUsername(r.Username);
  //   if (!user || !(await bcrypt.compare(r.password, user.password))) {
  //     return false;
  //   }
  // }

}
