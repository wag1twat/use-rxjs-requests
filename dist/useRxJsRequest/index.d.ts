import { RxRequestConfig, SingleRxObservableConfig, UseRxRequestValue } from "../types";
export default function useRxJsRequest<Data = any, Error = any>({ method, url, body, params }: RxRequestConfig, { refetchInterval, fetchOnUpdateConfig, fetchOnUpdateConfigs, fetchOnMount, onError, onSuccess, }?: SingleRxObservableConfig<Data, Error>): UseRxRequestValue<Data, Error>;
