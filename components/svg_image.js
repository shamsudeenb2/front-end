import Image from "next/image";

const BottomImg = () => {
  return (
    <div className=" bottom-[0] -z-10 right-0 fixed">
      <Image
        src="/obj2.png"
        width={200}
        height={200}
        alt="background"
        priority={true}
      />
    </div>
  );
};

export default BottomImg;
