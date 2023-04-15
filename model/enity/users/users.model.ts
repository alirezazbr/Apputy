export interface UsersDataModel {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

export interface UsersSupportModel {
  support?: {
    url?: string;
    text?: string;
  };
}

export interface UsersEntityBaseModel extends UsersSupportModel {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data?: Array<UsersDataModel>;
}

export interface UsersEntityGetByIdModel extends UsersSupportModel {
  data: Array<UsersDataModel>;
}

export interface UsersEntityUpdate extends UsersSupportModel {
  data: Array<UsersDataModel>;
  updatedAt: Date;
}
