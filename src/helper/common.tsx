import { setErrorMessage } from '@/actions/messageActions';
import { randomColorsArray } from '@/app/assets/style';
import { app } from '@/utils/firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { AnyAction, Dispatch } from 'redux';
import { v4 as uuidv4 } from 'uuid';

/**
 * @desc Checks for Empty string
 * @param {*} value // Accepts string, object
 */
export function isEmpty(value: any) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * @desc Checks for Empty string
 * @param {*} array // Accepts array
 */
export function removeEmptyElement(array: any) {
  const filtered =
    array?.filter(function (el: any) {
      return !isEmpty(el);
    }) || [];
  return filtered;
}

export const getUniquePlatformList: any = (platform: any[]) => {
  const uniquePlatforms = Array.from(new Set(platform.flatMap((item) => item.platform)));
  return uniquePlatforms;
};

/**
 * @desc Checks for valid email
 * @param {*} value // Accepts string
 */
export function isEmailValid(value: any) {
  // eslint-disable-next-line max-len
  var myRegEx =
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValid = myRegEx.test(value);
  return isValid ? true : false;
}

export const getAPIErrorReason = (e: any) => {
  if (e) {
    if (e.response && e.response.data) {
      return e.response.data.reason || e.response.data.message || e.response.data.error;
    } else if (e.message) {
      return e.message;
    }
  }
};

export const getDateDifference = (startDate: any, endDate: any) => {
  const date1: any = new Date(startDate);
  const date2: any = new Date(endDate);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays >= 0) return diffDays;
};

export const getUTCDate = (date: any) => {
  if (date) date = new Date(date);
  else date = new Date();
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
};

export const getUniqueObjectId = () => {
  return uuidv4();
};

export const generateRandomFilename = () => {
  let lastTimestamp = 0;
  let timestamp = Date.now();
  if (timestamp <= lastTimestamp) {
    timestamp = lastTimestamp + 1;
  }
  lastTimestamp = timestamp;
  return timestamp;
};

export const getFirebaseUrlFromFile = async (
  file: any,
  folderName: string,
  userId: string,
  dispatch: Dispatch<AnyAction>,
) => {
  try {
    const promises = [];
    let profile;
    if (file) {
      const myPromise = new Promise(function (myResolve, myReject) {
        const storage = getStorage(app);
        const metadata = {
          contentType: file?.type,
        };
        const fileExtension = file?.name.split('.').pop();
        const uniqueFilename = generateRandomFilename();
        const fullFilename = `${file?.name.replace(/\.[^/.]+$/, '')}_${uniqueFilename}.${fileExtension}`;
        let pathName = '';
        pathName = `${userId}/${folderName}/`;
        const storageRef = ref(storage, pathName + fullFilename);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            myReject(error);
            dispatch(setErrorMessage('Getting error for upload file'));
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              profile = downloadURL;
              myResolve(profile);
            });
          },
        );
      });
      promises.push(myPromise);
    }
    try {
      await Promise.all(promises);
      return profile;
    } catch (e) {
      dispatch(setErrorMessage('Getting error for upload file'));
    }
  } catch (e) {
    dispatch(setErrorMessage('Getting error for upload file'));
  }
};

export const validFirebaseErrorMessage = (e: any) => {
  if (!e) return;
  const code = JSON.parse(JSON.stringify(e.code));
  let message = '';
  switch (code) {
    case 'auth/invalid-phone-number':
      message = 'Please enter a valid number';
      break;
    case 'auth/invalid-verification-code':
      message = 'Invalid verification code';
      break;
    case 'auth/too-many-requests':
      message = 'You have attempt too many rerequests. Please try again later.';
      break;
    case 'auth/invalid-email':
      message = 'Please enter a valid email';
      break;
    case 'auth/user-not-found':
      message = 'Please enter valid email or password';
      break;
    case 'auth/wrong-password':
      message = 'Please enter valid email or password';
      break;
    case 'auth/email-already-in-use':
      message = 'That email address is already in use!';
      break;
    case 'auth/invalid-login-credentials':
      message = 'Please enter valid email or password';
      break;
    case 'auth/missing-email':
      message = 'Please enter Email';
      break;
    case 'auth/invalid-action-code':
      message = 'Reset password link is expire. please try again!';
      break;
    case 'auth/weak-password':
      message = 'Weak password!';
      break;
    default:
      message = JSON.stringify(e.message);
      break;
  }
  return message;
};

/**
 * @desc get query param by name
 */
export const getUrlParam = (query: any, name: any) => {
  let queryParams = new URLSearchParams();
  if (query) queryParams = new URLSearchParams(query);
  return queryParams.get(name);
};