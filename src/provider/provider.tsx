'use client';
import { Provider } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import store from '@/store/store';
import { appInit } from '@/helper/appInitHelper';
import { usePathname, useRouter } from 'next/navigation';
import { PRIVATE_ROUTES } from '@/global/constants';
import UserPreferenceSingleton from '@/helper/userPreferenceSingleton';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [dataLoad, setDataLoad] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const init = useCallback(async () => {
    try {
      await store.dispatch(appInit());
    } catch (error) {
      console.log('ERROR', error);
    }
  }, []);

  const validatePath = useCallback(() => {
    if (pathName && PRIVATE_ROUTES.includes(pathName)) {
      const userLocalDetails = UserPreferenceSingleton.getInstance().getCurrentUser();
      if (!userLocalDetails?.id) router.push('/login');
    }
  }, [pathName, router]);

  useEffect(() => {
    init();
    setDataLoad(true);
    validatePath();
  }, [init, validatePath]);

  return <Provider store={store}>{dataLoad ? children : <></>}</Provider>;
}
