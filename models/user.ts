import {
  BaseModel,
  Defaults,
  dso,
  Field,
  FieldType,
  Join,
  Model,
  Where,
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("users")
export class UserModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true,
  })
  id!: number;
  @Field({ type: FieldType.STRING, length: 50, notNull: true })
  name!: string;

  @Field({ type: FieldType.STRING, length: 100 })
  lastName?: string;

  @Field({ type: FieldType.STRING, length: 100 })
  email?: string;
}
