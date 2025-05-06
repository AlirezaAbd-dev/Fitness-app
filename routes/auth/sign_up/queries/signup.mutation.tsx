import queryKeys from '@/constants/QueryKeys.constants';
import axiosBase from '@/utils/axios_base.util';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'expo-router';

const useSignupMutation = (canRedirect = true) => {
  const router = useRouter();

  const mutation = useMutation<
    AxiosResponse,
    AxiosError<{ message: string }>,
    { email: string; name: string; password: string }
  >({
    mutationKey: [queryKeys.SIGNUP],
    mutationFn: (data) => axiosBase.post('/auth/register', data),
    onSuccess(_data, variables) {
      if (canRedirect) {
        router.push({ pathname: '/(auth)/sign-up-verify', params: variables });
      }
    },
  });

  return mutation;
};

export default useSignupMutation;
