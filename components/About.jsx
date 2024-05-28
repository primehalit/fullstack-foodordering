import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="py-14">
      <div className="container mx-auto flex items-center text-black gap-20 flex-wrap md:flex-nowrap">
        <div className="md:w-1/2">
          <div className="relative sm:w-[445px] sm-h-[600px] flex-shrink-0 w-[300px] h-[450px]">
            <Image src="/images/si2.jpeg" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2">
          <Title addClass="text-[40px]">MizrakOFF</Title>
          <p className="my-5">
            Ağrı&apos;nın dağlarının eteklerinde, her akşam evlerden tüten
            muhteşem kokular vardı. Köyün her bir evinde, komşular bir araya
            gelir ve taze malzemelerle hazırlanan enfes yemeklerin tadını
            çıkarırlardı. En sevilen an, akşam yemeğinin hazırlık zamanlarıydı.
            Herkes, kendi tariflerini ve yemek sırlarını bir araya getirir,
            birlikte pişirir ve birlikte yerdi. Bu yemekler, sadece mideyi
            değil, aynı zamanda kalbi de doyururdu. Ağrı&apos;nın dağlarının
            bereketi, sofralarda ve sohbetlerde yaşardı...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

/* flex-wrap md:flex-nowrap Bu, geniş ekranlarda (md ve üzeri)
blokların yan yana gelmesini sağlarken, 
küçük ekranlarda (md altı) alt alta gelmesini sağlar. */
