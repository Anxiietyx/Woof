// @ts-ignore
import React from "react";
import Container from "./Container";

const FooterTop = () => {
  const incentives = [
    {
      name: "Free shipping",
      description:
        "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      imageSrc: "https://cdn.discordapp.com/attachments/1250210066259247276/1297280914812043285/360_F_227739395_BhszneMcufcAe9DJEBTHFFxVJM1PR8RT.png?ex=67155a80&is=67140900&hm=e459e3a12c3d6e1da22d7ffacabe260d74ed5a22bb06f16f9842a9065a4e1296&",
    },
    {
      name: "10-year warranty",
      description:
        "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
      imageSrc: "https://media.discordapp.net/attachments/1250210066259247276/1297280534510178334/pngtree-vector-medal-icon-png-image_322400.png?ex=67155a25&is=671408a5&hm=35ee5be6ac8e40d24386cd95c63f021b80d9321f095f53d34164f58705966ceb&=&format=webp&quality=lossless",
    },
    {
      name: "Exchanges",
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
      imageSrc: "https://media.discordapp.net/attachments/1250210066259247276/1297280106900750376/691038.png?ex=671559bf&is=6714083f&hm=9f17184cdea4d64e0482890c21cb9b2ff7e05a05d14ebaf71fc3159738d84413&=&format=webp&quality=lossless",
    },
  ];

  return (
    <Container className="py-0">
      <div className="rounded-2xl bg-[#f6f6f6] px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              We built our business on customer service
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          {incentives.map((item) => (
            <div
              key={item?.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:flex-shrink-0">
                <div className="flex-root">
                  <img
                    src={item?.imageSrc}
                    alt={item?.name}
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-6 lg:ml-0">
                <h3 className="text-base font-medium text-gray-900">
                  {item?.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
