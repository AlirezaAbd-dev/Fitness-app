import { useMutation } from '@tanstack/react-query';
import queryKeys from '@/constants/QueryKeys.constants';
import axiosBase from '@/utils/axios_base.util';
import { AxiosError, AxiosResponse } from 'axios';
import { AuthResponse } from './login.mutation';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storageKeys from '@/constants/StorageKeys.constants';

const useLoginWithGoogleMutation = () => {
  const router = useRouter();

  const mutation = useMutation<
    AxiosResponse<AuthResponse>,
    AxiosError,
    { idToken: string }
  >({
    mutationKey: [queryKeys.LOGIN_WITH_GOOGLE],
    mutationFn: (data) =>
      axiosBase.post('/auth/google', {
        id_token: data.idToken,
      }),
    async onSuccess(data) {
      await AsyncStorage.setItem(storageKeys.TOKEN, data.data.data.token);
      router.dismissAll();
      router.replace('/home');
    },
  });

  return mutation;
};

export default useLoginWithGoogleMutation;
