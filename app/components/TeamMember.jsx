import Image from "next/image";

export const TeamMember = ({ image, name, role }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{name}</h3>
        <p className="text-lg text-green-600 dark:text-green-400">{role}</p>
      </div>
    </div>
  );
