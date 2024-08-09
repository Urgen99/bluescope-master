import ContactUsForm from "@/components/common/ContactUsForm/ContactUsForm";
import HeroContainer from "@/components/member/HeroContainer";
import MemberShipForm from "@/components/member/MemberShipForm";

const page = () => {
  return (
    <section>
      <HeroContainer />
      {/* Member Form */}\
      <MemberShipForm />
      <ContactUsForm />
    </section>
  );
};

export default page;
