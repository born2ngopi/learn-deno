// import { RouteValidator } from "../entities/route-entity.ts";
import { ServerRequest } from 'https://deno.land/std/http/server.ts';
// implements RouteValidator

export class Route  {

  Get(req: ServerRequest, url: string, callback: (req: ServerRequest) => any) {
    if (req.method === "GET" && req.url === url){
      callback(req);
    }
  }

  Post(req: ServerRequest,url: string, callback: (req: ServerRequest) => any) {
    if(req.method === "POST" && req.url === url){
      callback(req);
    }
  }

  Put(req: ServerRequest,url: string, callback: (req: ServerRequest) => any) {
    if(req.method === "POST" && req.url === url){
      callback(req);
    }
  }

}
