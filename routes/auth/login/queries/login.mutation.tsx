import queryKeys from '@/constants/QueryKeys.constants';
import axiosBase from '@/utils/axios_base.util';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { LoginValidationType } from '../validation/login.validation';

export type AuthResponse = {
  status: boolean;
  message: string;
  data: {
    token: string;
    token_type: string;
    user: string;
  };
};

const useLoginMutation = () => {
  const mutation = useMutation<
    AxiosResponse<AuthResponse>,
    AxiosError<{ message: string }>,
    LoginValidationType
  >({
    mutationKey: [queryKeys.LOGIN],
    mutationFn: (data) => axiosBase.post('/auth/login', data),
  });

  return mutation;
};

export default useLoginMutation;
