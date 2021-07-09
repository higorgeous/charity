import EditCharity from '@components/EditCharity';
import Hero from '@components/Hero';
import useAuth from '@hooks/useAuth';

import EmptyState from './EmptyState';

import { Wrapper } from './styles';

type Props = {
  item: any;
};

const EditCharityScreen = ({ item }: Props) => {
  const { user } = useAuth();

  return (
    <Wrapper>
      {user?.uid !== item.owner && (
        <>
          <Hero>You need to be the owner to edit this charity</Hero>
          <p className="text">
            Our first donation will be made to the charity, organisation or
            cause with the most votes on Friday 9th July 2021. Details and
            receipts will be shown on this page.
          </p>
          <EmptyState />
        </>
      )}
      {user?.uid === item.owner && (
        <>
          <Hero>Edit {item.name}</Hero>
          <p className="text">
            Make changes to your charity submission by editing the form.
          </p>
          <EditCharity charity={item} user={user} />
        </>
      )}
    </Wrapper>
  );
};

export default EditCharityScreen;
