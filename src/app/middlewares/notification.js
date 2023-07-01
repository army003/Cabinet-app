import { isRejectedWithValue } from '@reduxjs/toolkit';
import { assoc, path } from 'ramda';
import { toast } from 'react-toastify';

export const notificationMiddleware = () => next => action => {
  if (!isRejectedWithValue(action)) return next(action);
  // const path = useLocation();

  // console.log(path)
  const { code } = action.payload?.data?.error;

  if (
    code !== 'ERROR_TO_FORM' &&
    code !== 'NON_SPOUSE' &&
    code !== 'ACTIVE_CREDIT_EXISTS' &&
    code !== 'ERROR_TO_FORM'
  ) {
    toast.error(action.payload?.data?.error?.description, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true
    });
  }

  // if (code === 'FORBIDDEN_FOR_CURRENT_STATE') {
  //   const flowUuid = api.getState().application.flow_uuid;
  //   api.dispatch(applyMainStatus.endpoints.applyStatus.initiate({ uuid: flowUuid }, { forceRefetch: true }));
  // }

  return next(assoc('payload', path(['payload', 'data', 'error'], action), action));
};
