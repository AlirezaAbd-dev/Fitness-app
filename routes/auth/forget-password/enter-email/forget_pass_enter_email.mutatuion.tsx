import queryKeys from '@/constants/QueryKeys.constants';
import axiosBase from '@/utils/axios_base.util';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'expo-router';

const useForgetPassEnterEmailMutation = (canRedirect: boolean = true) => {
  const router = useRouter();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<{ message: string }>,
    { email: string }
  >({
    mutationKey: [queryKeys.FORGET_PASSWORD_ENTER_EMAIL],
    mutationFn: (data) => axiosBase.post('/auth/password/forgot', data),
    onSuccess: (_data, variables) => {
      if (canRedirect)
        router.push({
          pathname: '/auth/forget-password/enter-code',
          params: { email: variables.email },
        });
    },
  });

  return mutation;
};

export default useForgetPassEnterEmailMutation;
