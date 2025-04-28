import queryKeys from '@/constants/QueryKeys.constants';
import axiosBase from '@/utils/axios_base.util';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'expo-router';
import { AuthResponse } from '../../login/queries/login.mutation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageKeys from '@/constants/StorageKeys.constants';

const useSignupVerifyMutation = () => {
  const router = useRouter();

  const mutation = useMutation<
    AxiosResponse<AuthResponse>,
    AxiosError<{ message: string }>,
    { email: string; code: string }
  >({
    mutationKey: [queryKeys.SIGNUP_VERIFY],
    mutationFn: (data) => axiosBase.post('/auth/register/verify', data),
    onSuccess: async (data) => {
      await AsyncStorage.setItem(storageKeys.TOKEN, data.data.data.token);
      router.replace('/home');
    },
  });

  return mutation;
};

export default useSignupVerifyMutation;
