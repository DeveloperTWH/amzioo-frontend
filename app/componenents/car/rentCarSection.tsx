import Image from "next/image";

export default function RentCarSection() {

  const steps = [
    {
      id: "01",
      title: "Search Your Ride",
      desc: "Enter your pickup location, dates, and preferences to find available cars. ",
    },
    {
      id: "02",
      title: "Choose the Perfect Car",
      desc: "Browse a wide range of vehicles based on your needs and budget.",
    },
    {
      id: "03",
      title: "Book & Drive",
      desc: "Confirm your booking instantly and pick up your car with ease.",
    },
  ];
  return (
     <div className="flex flex-row justify-center gap-10 mt-40">
            <div className="ml-20">
            <Image
            src={"/rentCar.png"}
            alt="book flight"
            width={768}
            height={641}
            />
            </div>
            <div className="flex justify-center flex-col">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
              Rent a Car in 3 Easy Step
            </h2>

            <div className="
            space-y-6">
                {steps.map((step) => (
                <div key={step.id} className="flex items-start gap-4">
                    
                    {/* Number */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600">
                    {step.id}
                    </div>

                    {/* Text */}
                    <div>
                    <h4 className="text-base font-semibold text-blue-600">
                        {step.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                        {step.desc}
                    </p>
                    </div>
                </div>
                ))}
            </div>

            {/* Button */}
            <button className="mt-6 px-5 py-2 border border-orange-400 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition">
                Book Now →
            </button>
            </div>

        </div>
  )
}