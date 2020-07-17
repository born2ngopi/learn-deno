import { ServerRequest } from 'https://deno.land/std/http/server.ts';

export interface RouteValidator {
  Get(req: ServerRequest,url: string, callback: (req: ServerRequest)=> void): void;
  Post(req: ServerRequest,url: string, callback: (req: ServerRequest)=> void): void;
  Put(req: ServerRequest,url: string, callback: (req: ServerRequest)=> void): void;
}
