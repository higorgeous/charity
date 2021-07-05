import EditCharity from '@components/EditCharity';
import Hero from '@components/Hero';

type Props = {
  item: any;
};

const EditCharityScreen = ({ item }: Props) => (
  <>
    <Hero>Edit {item.name}</Hero>
    <p className="text">
      Make changes to your charity submission by editing the form.
    </p>
    <EditCharity charity={item} />
  </>
);

export default EditCharityScreen;
