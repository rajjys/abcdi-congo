import Image from "next/image";
import Link from "next/link";

export const TeamMember = ({ member }) => (
  <Link href={`/about/${member.slug}`} passHref className="group-hover:opacity-100 transition-opacity duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ">
        <div className="aspect-square relative ">
          <Image
            src={member.profile.url}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{member.name}</h3>
          <p className="text-lg text-green-600 dark:text-green-400">{member.role}</p>
        </div>
      </div>
  </Link>
);
