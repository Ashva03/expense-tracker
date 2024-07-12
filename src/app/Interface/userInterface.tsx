export interface UserAddPayloadInterface {
  uid?: string;
  email?: string;
  name?: string;
  profile_image?: string;
}

export interface UserUpdatePayloadInterface {
  name?: string;
  email?: string;
  profile_image?: string;
}

export interface UserDetailsInterface {
  id: string;
  created_by: string;
  created_time: Date;
  email: string;
  name?: string;
  profile_image?: string;
  updated_by: string;
  updated_time: Date;
  uid: string;
}

export interface UserSettingInputReducer {
  name: string;
  email: string;
  profileImage: string;
}

export interface UserReducerInterface {
  loading: boolean;
  userDetails: UserDetailsInterface;
  userSettingInput: UserSettingInputReducer;
}
