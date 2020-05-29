import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    Put,
    Delete,
    Req
  } from "https://deno.land/x/alosaur/src/mod.ts";
import { UserService } from "../../services/user.service.ts";
import { UserModel } from "../../models/user.ts";

@Controller()
export class UserController {
    constructor(private service: UserService) {}

  @Get("/")
  async getUsers() {
  
    return await this.service.getAll();
  }
  @Get("/:id")
  async one(@Param("id") id: number){
  return await this.service.getOne(id)
  
  }
  @Post("/")
  async create(@Body() data: UserModel) {
   console.log(data);
   return await this.service.create(data)
  }
  @Delete("/:id")
  async delete(@Param("id") id: number) {
    
    return await this.service.delete(id);
  }
  @Put("/:id")
  async update(@Param("id") id: number, @Body() body: any) {
    return await this.service.update(id,body)
  }
}
