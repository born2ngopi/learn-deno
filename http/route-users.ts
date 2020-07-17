import { Route } from "./route.ts";
import { UserController } from '../controllers/user-controller.ts';
import { ServerRequest } from 'https://deno.land/std/http/server.ts';

export class RouteUser {

  static init(req: ServerRequest){

    let route = new Route();
    let userController = new UserController();

    route.Get(req,'/index',userController.index(req));
    route.Get(req,'/hello',userController.hello(req));
  }

}
