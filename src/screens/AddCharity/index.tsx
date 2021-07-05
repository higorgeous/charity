import AddCharity from '@components/AddCharity';
import Hero from '@components/Hero';

const AddCharityScreen = () => (
  <>
    <Hero>Add a charity for voting</Hero>
    <p className="text">
      Anyone can add a submissions for a charity, organization, or crowdfunding
      page by completing the form below.
    </p>
    <AddCharity />
  </>
);

export default AddCharityScreen;
