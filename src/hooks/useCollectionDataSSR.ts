import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function useCollectionDataSSR(ref: any, options: any) {
  const [value, loading, error] = useCollectionData(ref, options);

  if (options?.startWith && loading) {
    return [options.startWith, loading, error];
  } else {
    return [value, loading, error];
  }
}
