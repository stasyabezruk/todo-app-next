import { useRouter } from 'next/router';

function useUserId() {
  const router = useRouter();
  const { userId } = router.query;
  const normalizeUserId = parseInt(userId as string, 10);
  return normalizeUserId;
}

export default useUserId;
