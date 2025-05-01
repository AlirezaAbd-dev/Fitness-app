import queryKeys from '@/constants/QueryKeys.constants';
import axiosBase from '@/utils/axios_base.util';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'expo-router';
import React from 'react';

const useForgetPassEnterCodeMutation = () => {
  const router = useRouter();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<{ message: string }>,
    { email: string; code: string }
  >({
    mutationKey: [queryKeys.FORGET_PASSWORD_ENTER_CODE],
    mutationFn: (data) => axiosBase.post('/auth/password/verify', data),
    onSuccess(_data, variables) {
      router.push({
        pathname: '/auth/forget-password/reset-password',
        params: { email: variables.email },
      });
    },
  });

  return mutation;
};

export default useForgetPassEnterCodeMutation;
