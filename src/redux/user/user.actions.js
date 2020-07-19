import  UserActionTypes  from "./user.types";

// export const setCurrentUser = (user) => ({
//   type: UserActionTypes.SET_CURRENT_USER,
//   payload: user,
// });
//Google
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const SignInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

// export const googleSignInSuccess = (user) => ({
//   type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
//   payload: user,
// });

// export const googleSignInFailure = (error) => ({
//   type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
//   payload: error,
// });

//Email
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload:emailAndPassword
});

// export const emailSignInSuccess = (user) => ({
//   type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
//   payload: user,
// });

// export const emailSignInFailure = (error) => ({
//   type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
//   payload: error,
// });

export const CheckUserSession=()=>({
  type:UserActionTypes.CHECK_USER_SESSION

})