import { CrudService } from "../crud.service";
import { END_POINTS } from "@/constants/enum/end-points.enum";
import {
  UsersEntityBaseModel,
  UsersEntityGetByIdModel,
  UsersEntityUpdate,
} from "@/model/enity/users/users.model";

export class UsersServices extends CrudService<
  UsersEntityBaseModel,
  UsersEntityGetByIdModel,
  UsersEntityUpdate
> {
  entityName = END_POINTS.ENTITY_USERS;
}
