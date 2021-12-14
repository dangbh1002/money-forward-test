import axios from '@/services/axios';
import IAccount from '@/types/IAccount';

const AccountService = {
  async getUserAccounts(id: number): Promise<Array<IAccount>> {
    return (await axios.get(`/users/${id}/accounts`)).data;
  },
  async getAccountDetail(id: number): Promise<IAccount> {
    return (await axios.get(`/accounts/${id}`)).data;
  },
};

export default AccountService;
