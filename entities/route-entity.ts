import { ServerRequest } from 'https://deno.land/std/http/server.ts';

export interface RouteValidator {
  Get(req: ServerRequest,url: string, callback: (req: ServerRequest)=> any): any;
  Post(req: ServerRequest,url: string, callback: (req: ServerRequest)=> any): any;
  Put(req: ServerRequest,url: string, callback: (req: ServerRequest)=> any): any;
}
