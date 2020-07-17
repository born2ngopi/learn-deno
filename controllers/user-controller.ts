import { ServerRequest } from 'https://deno.land/std/http/server.ts';

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

}
