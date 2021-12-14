import axios from '@/services/axios';
import IUser from '@/types/IUser';

const UserService = {
  async getUserDetail(id: number): Promise<IUser> {
    return (await axios.get(`/users/${id}`)).data;
  },
};

export default UserService;
