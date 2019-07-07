import { TRY_SIGNUP } from './actionTypes';

export const trysignup = (signipData) => {
    return {
        type: TRY_SIGNUP,
        data: signipData
    }
}