import { useDocumentData } from 'react-firebase-hooks/firestore';

export default function useDocumentDataSSR(ref: any, options: any) {
  const [value, loading, error] = useDocumentData(ref, options);

  if (options?.startWith && loading) {
    return [options.startWith, loading, error];
  } else {
    return [value, loading, error];
  }
}
