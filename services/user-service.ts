import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

class UserServece {

  static async hashPassword(password: string){
    const salt = await bcrypt.genSalt(8);
    return bcrypt.hash(password, salt);
  }

}
