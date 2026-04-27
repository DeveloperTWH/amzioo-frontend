import Image from "next/image";
import { Montserrat } from 'next/font/google';


type Property = {
  id: number;
  name: string;
  location: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  tag: string;
};

const properties: Property[] = [
  {
    id: 1,
    name: "Grand Maple Hotel & Suites",
    location: "Downtown Toronto, Ontario, Canada",
    category: "Hotels",
    image: "/hotelImg.png",
    rating: 4.1,
    reviews: 61,
    price: 120,
    tag: "Hotels",
  },
  {
    id: 2,
    name: "Hotel Sky Height",
    location: "Ontario, Canada",
    category: "Villas",
    image: "/hotel.png",
    rating: 4.1,
    reviews: 61,
    price: 120,
    tag: "Villas",
  },
  {
    id: 3,
    name: "Hotel Sky Height",
    location: "Ontario, Canada",
    category: "Resorts",
    image: "/hotelImg.png",
    rating: 4.1,
    reviews: 61,
    price: 120,
    tag: "Resorts",
  },
  {
    id: 4,
    name: "Hotel Sky Height",
    location: "Ontario, Canada",
    category: "Farm House",
    image: "/hotel.png",
    rating: 4.1,
    reviews: 61,
    price: 120,
    tag: "Farm House",
  },
  {
    id: 5,
    name: "Hotel Sky Height",
    location: "Ontario, Canada",
    category: "Hotel",
    image: "/hotelImg.png",
    rating: 4.1,
    reviews: 61,
    price: 120,
    tag: "Hotel",
  },
  {
    id: 6,
    name: "Hotel Sky Height",
    location: "Ontario, Canada",
    category: "Hotel",
    image: "/hotel.png",
    rating: 4.1,
    reviews: 61,
    price: 120,
    tag: "Hotel",
  },
  {
    id: 7,
    name: "Hotel Sky Height",
    location: "Ontario, Canada",
    category: "Farm House",
    image: "/hotelImg.png",
    rating: 4.1,
    reviews: 61,
    price: 120,
    tag: "Farm House",
  },
  {
    id: 8,
    name: "Hotel Sky Height",
    location: "Ontario, Canada",
    category: "Farm House",
    image: "/hotel.png",
    rating: 4.1,
    reviews: 61,
    price: 120,
    tag: "Farm House",
  },
];

export const BrowseHotels = () => {
  return (
    <div className="mt-20 min-h-screen px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Stays for Every Type of Traveler
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 md:text-base">
    Choose from thousands of hotels, apartments, villas, and resorts worldwide. Whether you’re traveling for business or leisure, find accommodations that suit your style and budget.
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-orange-500"></div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {properties.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex justify-center self-center items-center w-[198px] relative gap-2.5 px-[52px] py-4 rounded-[42px] bg-[#f97101]">
        <p className="flex-grow-0 flex-shrink-0  text-base font-semibold text-center capitalize text-white">
          Explore All →
        </p>
        </div>
      </div>

    </div>
  );
};

const HotelCard = ({ hotel }: { hotel: Property }) => {
  return (
    <article className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-md shadow-black/10">
      <div className="relative aspect-[385/260]">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />

        <button
          type="button"
          aria-label={`Save ${hotel.name}`}
          className="absolute right-5 top-5 rounded-full bg-white p-3 text-black shadow-sm"
        >
          <HeartIcon />
        </button>

        <div className="absolute left-5 top-5 rounded bg-[#f97101] px-4 py-1 text-[13px] font-semibold capitalize text-white">
          {hotel.tag}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-bold capitalize text-black">{hotel.name}</h2>
          <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#3964ae]">
            <LocationIcon />
            <span>{hotel.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon key={index} filled={index < Math.round(hotel.rating)} />
            ))}
          </div>
          <p className="text-sm">
            <span className="font-bold uppercase text-[#f97101]">
              {hotel.rating.toFixed(1)}
            </span>
            <span className="ml-1 font-semibold capitalize text-[#a2a2a2]">
              ({hotel.reviews} Reviews)
            </span>
          </p>
        </div>

        <div className="h-px bg-[#d9d9d9]"></div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-base font-bold capitalize text-black">Price:</p>
            <p className="text-sm font-semibold capitalize text-[#5f5f5f]">
              Starting From
            </p>
          </div>
          <p className="text-right capitalize">
            <span className="text-[28px] font-montserrat font-bold text-black">
              ${hotel.price}
            </span>
            <span className="text-sm font-semibold text-[#5f5f5f]">
              {" "}
              / Night
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

const LocationIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.2428 12.4925L10.0605 15.6748C9.92133 15.8141 9.75608 15.9246 9.57417 16C9.39227 16.0754 9.19729 16.1142 9.00038 16.1142C8.80347 16.1142 8.60849 16.0754 8.42658 16C8.24468 15.9246 8.07942 15.8141 7.94025 15.6748L4.75725 12.4925C3.91817 11.6534 3.34675 10.5843 3.11527 9.42043C2.88378 8.25655 3.00262 7.05017 3.45676 5.95383C3.91089 4.85749 4.67993 3.92044 5.66661 3.26116C6.6533 2.60189 7.81333 2.25 9 2.25C10.1867 2.25 11.3467 2.60189 12.3334 3.26116C13.3201 3.92044 14.0891 4.85749 14.5433 5.95383C14.9974 7.05017 15.1162 8.25655 14.8847 9.42043C14.6533 10.5843 14.0818 11.6534 13.2428 12.4925Z"
        stroke="#3964AE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5C8.40326 10.5 7.83097 10.2629 7.40901 9.84099C6.98705 9.41903 6.75 8.84674 6.75 8.25C6.75 7.65326 6.98705 7.08097 7.40901 6.65901C7.83097 6.23705 8.40326 6 9 6C9.59674 6 10.169 6.23705 10.591 6.65901C11.0129 7.08097 11.25 7.65326 11.25 8.25Z"
        stroke="#3964AE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const StarIcon = ({ filled }: { filled: boolean }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 1.33334L10.06 5.50668L14.6667 6.18001L11.3333 9.42668L12.12 14.0133L8 11.8467L3.88 14.0133L4.66667 9.42668L1.33333 6.18001L5.94 5.50668L8 1.33334Z"
        fill={filled ? "#F97101" : "#D9D9D9"}
      />
    </svg>
  );
};

const HeartIcon = () => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 6.545L8.8825 4.30875C8.605 3.755 8.12375 2.95875 7.4425 2.315C6.7725 1.68125 5.97 1.25 5 1.25C2.905 1.25 1.25 2.9075 1.25 4.9C1.25 6.41375 1.9425 7.4825 3.585 9.1125C4.00625 9.53 4.48625 9.98125 5.0175 10.4788C6.4025 11.7788 8.125 13.3963 10 15.5588C11.875 13.3963 13.5975 11.7788 14.9825 10.4788C15.5138 9.98125 15.995 9.52875 16.415 9.1125C18.0575 7.4825 18.75 6.41375 18.75 4.9C18.75 2.9075 17.095 1.25 15 1.25C14.0288 1.25 13.2275 1.68125 12.5575 2.315C11.8762 2.95875 11.395 3.755 11.1175 4.30875L10 6.545ZM10.49 16.91C10.4298 16.9813 10.3548 17.0386 10.2701 17.0779C10.1855 17.1172 10.0933 17.1376 10 17.1376C9.90668 17.1376 9.81449 17.1172 9.72986 17.0779C9.64523 17.0386 9.57019 16.9813 9.51 16.91C7.50875 14.5325 5.6975 12.8325 4.20625 11.4338C1.625 9.01 0 7.48625 0 4.9C0 2.19375 2.2375 0 5 0C7 0 8.39875 1.3125 9.255 2.51C9.58 2.96625 9.8275 3.405 10 3.75C10.2165 3.31833 10.4655 2.9038 10.745 2.51C11.6012 1.31125 13 0 15 0C17.7625 0 20 2.19375 20 4.9C20 7.48625 18.375 9.01 15.7938 11.4338C14.3025 12.8338 12.4913 14.535 10.49 16.91Z"
        fill="currentColor"
      />
    </svg>
  );
};
