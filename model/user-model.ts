import {client} from './mysql.ts';

export class User {

  static fetchAll(): any{
    const users = await client.query(`select * from users`);
    client.close();
  }

  static fetchByUsername(username: string): any {
    const user = await client.query(`select * form users where username=${username}`);
    client.close();
  }

}
