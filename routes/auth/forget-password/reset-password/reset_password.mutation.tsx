import queryKeys from '@/constants/QueryKeys.constants';
import axiosBase from '@/utils/axios_base.util';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'expo-router';

const useResetPasswordMutation = () => {
  const router = useRouter();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<{ message: string }>,
    { email: string; password: string; password_confirmation: string }
  >({
    mutationKey: [queryKeys.FORGET_PASSWORD_RESET],
    mutationFn: (data) => axiosBase.post('/auth/password/reset', data),
    onSuccess() {
      router.push('/(auth)/forget-password/reset-password-success');
    },
  });

  return mutation;
};

export default useResetPasswordMutation;
