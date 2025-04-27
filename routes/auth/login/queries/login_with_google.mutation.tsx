import { useMutation } from '@tanstack/react-query';
import queryKeys from '@/constants/QueryKeys.constants';
import axiosBase from '@/utils/axios_base.util';
import { AxiosResponse } from 'axios';

const useLoginWithGoogleMutation = () => {
  const mutation = useMutation<AxiosResponse, Error, { idToken: string }>({
    mutationKey: [queryKeys.LOGIN_WITH_GOOGLE],
    mutationFn: (data) =>
      axiosBase.post('/auth/google', {
        id_token: data.idToken,
      }),
  });

  return mutation;
};

export default useLoginWithGoogleMutation;
