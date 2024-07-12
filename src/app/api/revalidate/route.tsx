import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { isEmpty } from '@/helper/common';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path') || '/';
  // Get the value of the `tag` query parameter
  const tag = request.nextUrl.searchParams.get('tag') || '';

  if (isEmpty(tag)) {
    // Revalidate the path
    await revalidatePath(path);
  } else {
    // Revalidate the tag
    await revalidateTag(tag);
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
