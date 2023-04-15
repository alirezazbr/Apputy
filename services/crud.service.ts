import { BaseService } from "./base.service";
import { ApiParams } from "@/model/services/api-payload.model";
import { ApiResponse } from "@/model/services/api-response.model";

export abstract class CrudService<
  EntityModel,
  EntityGetByModel,
  EntityUpdateModel
> extends BaseService {
  abstract entityName?: string;

  updatePut(payload: EntityUpdateModel, entityId: string) {
    return this.axiosInstanceWithoutToken.put(
      `/${this.entityName}/${entityId}`,
      payload
    );
  }

  getList(params?: ApiParams): Promise<ApiResponse<Array<EntityModel>>> {
    return this.axiosInstanceWithoutToken.get(
      `/${this.entityName}?page=${params?.page}&delay=${params?.delay}`
    );
  }

  getById(entityId: string): Promise<ApiResponse<EntityGetByModel>> {
    return this.axiosInstanceWithoutToken.get(
      `/${this.entityName}/${entityId}`
    );
  }
}
