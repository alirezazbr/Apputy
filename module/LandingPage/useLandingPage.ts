import { useCallback, useEffect, useState } from "react";

import { UsersEntityBaseModel } from "@/model/enity/users/users.model";
import { UsersServices } from "@/services/users-services/users-services";

const useLandingPage = () => {
  const [allUsersList, setAllUsersList] = useState<UsersEntityBaseModel[]>();

  const users = new UsersServices();

  const getAllUsers = useCallback(async () => {
    try {
      const { data } = await users.getList({ page: 1, delay: 3 });
      setAllUsersList(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }, []);

  useEffect(() => {
    getAllUsers();
  }, []);

  return {
    allUsersList,
  };
};

export default useLandingPage;
