import React from 'react';
import ResetPassword from '../components/resetPassword/resetPassword';

export default async function ResetPasswordPage({ searchParams: { oobCode } }: { searchParams: { oobCode: string } }) {
  return (
    <div>
      <ResetPassword sliderlist1={[]} sliderlist2={[]} sliderlist3={[]} oobCode={oobCode} />
    </div>
  );
}
