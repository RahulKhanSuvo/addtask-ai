import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarLogo() {
  return (
    <div className="py-5">
      <Marquee speed={50} gradient={false}>
        <div className="mx-4">
          <Image src="/Workday.svg" alt="Logo 1" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Google.svg" alt="Logo 2" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Salesforce.svg" alt="Logo 3" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Amazon.svg" alt="Logo 4" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Sony.svg" alt="Logo 4" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/intel.svg" alt="Logo 4" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Workday.svg" alt="Logo 1" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Google.svg" alt="Logo 2" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Salesforce.svg" alt="Logo 3" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Amazon.svg" alt="Logo 4" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Sony.svg" alt="Logo 4" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/intel.svg" alt="Logo 4" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Workday.svg" alt="Logo 1" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Google.svg" alt="Logo 2" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Salesforce.svg" alt="Logo 3" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Amazon.svg" alt="Logo 4" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/Sony.svg" alt="Logo 4" width={80} height={80} />
        </div>
        <div className="mx-4">
          <Image src="/intel.svg" alt="Logo 4" width={80} height={80} />
        </div>
      </Marquee>
    </div>
  );
}
