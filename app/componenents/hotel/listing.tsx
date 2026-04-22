import Image from "next/image"

export const HotelListing = () => {
  return(
  <div className="min-h-screen flex flex-col w-full px-4 md:px-6">

    {/* Top Section */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

      <p className="text-sm md:text-base font-medium text-[#5f5f5f]">
        (Showing 1 – 40 products of 72 products)
      </p>

      <div className="flex items-center justify-between md:justify-start gap-2 md:gap-3 px-4 py-2 rounded bg-neutral-100 border border-[#d9d9d9] w-full md:w-auto">
        
        <p className="text-sm font-medium text-[#5f5f5f] whitespace-nowrap">
          Sort by:
        </p>

        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-black whitespace-nowrap">
            Price High to Low
          </p>

          <svg width={18} height={18} viewBox="0 0 18 18" className="w-4 h-4">
            <path d="M1.80635 5.09864L8.77942 11.2958L14.9755 5.09864" fill="#A2A2A2" />
          </svg>
        </div>
      </div>
    </div>

    {/* Listing Section */}
    <div className="flex flex-col mt-6 gap-4">
      <HoteListingCard />
      <HoteListingCard />
      <PageNumber />
    </div>



  </div>
  )
}

const HoteListingCard = () => {

    return(
   <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative rounded-lg border border-[#e8e8e6]">
  <div className="self-stretch flex-grow-0 flex-shrink-0 w-[385px]">
    <div className="w-[385px] h-[365.5px] absolute left-[-0.5px] top-[-0.5px] rounded-lg bg-[#d9d9d9]" />
    <img
      className="w-[385px] h-[366.1px] absolute left-[-0.5px] top-[-1.09px] rounded-tl-lg rounded-tr-lg"
      src="/hotellisting.png"
    />
    <div className="flex flex-col justify-center items-center h-[48.66px] absolute left-[324px] top-[25.99px] overflow-hidden gap-2.5 p-3 rounded-3xl bg-white">
      <svg
        width={20}
        height={18}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0"
        preserveAspectRatio="none"
      >
        <path
          d="M10 6.545L8.8825 4.30875C8.605 3.755 8.12375 2.95875 7.4425 2.315C6.7725 1.68125 5.97 1.25 5 1.25C2.905 1.25 1.25 2.9075 1.25 4.9C1.25 6.41375 1.9425 7.4825 3.585 9.1125C4.00625 9.53 4.48625 9.98125 5.0175 10.4788C6.4025 11.7788 8.125 13.3963 10 15.5588C11.875 13.3963 13.5975 11.7788 14.9825 10.4788C15.5138 9.98125 15.995 9.52875 16.415 9.1125C18.0575 7.4825 18.75 6.41375 18.75 4.9C18.75 2.9075 17.095 1.25 15 1.25C14.0288 1.25 13.2275 1.68125 12.5575 2.315C11.8762 2.95875 11.395 3.755 11.1175 4.30875L10 6.545ZM10.49 16.91C10.4298 16.9813 10.3548 17.0386 10.2701 17.0779C10.1855 17.1172 10.0933 17.1376 10 17.1376C9.90668 17.1376 9.81449 17.1172 9.72986 17.0779C9.64523 17.0386 9.57019 16.9813 9.51 16.91C7.50875 14.5325 5.6975 12.8325 4.20625 11.4338C1.625 9.01 0 7.48625 0 4.9C0 2.19375 2.2375 0 5 0C7 0 8.39875 1.3125 9.255 2.51C9.58 2.96625 9.8275 3.405 10 3.75C10.2165 3.31833 10.4655 2.9038 10.745 2.51C11.6012 1.31125 13 0 15 0C17.7625 0 20 2.19375 20 4.9C20 7.48625 18.375 9.01 15.7938 11.4338C14.3025 12.8338 12.4913 14.535 10.49 16.91Z"
          fill="black"
        />
      </svg>
    </div>
    <div className="flex justify-center items-center h-[36.23px] absolute left-5 top-[25.23px] gap-2.5 px-[18px] py-0.5 rounded bg-[#f97101]">
      <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left capitalize text-white">
        Villas
      </p>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[810px] relative gap-5 px-10 py-8">
    <div className="flex-grow-0 flex-shrink-0 w-[690px] h-[170.5px]">
      <div className="w-[193px] h-14">
        <p className="absolute left-10 top-8 text-[26px] font-bold text-left capitalize text-black">
          Hotel Sky Height
        </p>
        <div className="flex justify-start items-center absolute left-10 top-16 gap-1">
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M13.2428 12.4928L10.0605 15.675C9.92133 15.8143 9.75608 15.9248 9.57417 16.0002C9.39227 16.0756 9.19729 16.1145 9.00038 16.1145C8.80347 16.1145 8.60849 16.0756 8.42658 16.0002C8.24468 15.9248 8.07942 15.8143 7.94025 15.675L4.75725 12.4928C3.91817 11.6536 3.34675 10.5845 3.11527 9.42067C2.88378 8.25679 3.00262 7.05041 3.45676 5.95407C3.91089 4.85773 4.67993 3.92068 5.66661 3.2614C6.6533 2.60213 7.81333 2.25024 9 2.25024C10.1867 2.25024 11.3467 2.60213 12.3334 3.2614C13.3201 3.92068 14.0891 4.85773 14.5433 5.95407C14.9974 7.05041 15.1162 8.25679 14.8847 9.42067C14.6533 10.5845 14.0818 11.6536 13.2428 12.4928Z"
              stroke="#3964AE"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5C8.40326 10.5 7.83097 10.2629 7.40901 9.84099C6.98705 9.41903 6.75 8.84674 6.75 8.25C6.75 7.65326 6.98705 7.08097 7.40901 6.65901C7.83097 6.23705 8.40326 6 9 6C9.59674 6 10.169 6.23705 10.591 6.65901C11.0129 7.08097 11.25 7.65326 11.25 8.25Z"
              stroke="#3964AE"
              strokeLinecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left capitalize text-[#3964ae]">
            Ontario, Canada
          </p>
        </div>
      </div>
      <p className="w-[690px] absolute left-10 top-24 text-base font-medium text-left capitalize text-[#5f5f5f]">
        Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim veniam
        quis notru exercit ation Lorem ipsum dolor sit amet.Veniam quis notru exercit.
      </p>
      <div className="flex justify-start items-center w-[462.9px] h-[26.5px] absolute left-10 top-44 gap-3">
        <svg
          width={84}
          height={16}
          viewBox="0 0 84 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-[83.6px] h-4"
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_379_81)">
            <path
              d="M3.28214 15.4431C2.93138 15.6411 2.53338 15.2941 2.60426 14.8511L3.35847 10.1211L0.157169 6.76513C-0.141788 6.45113 0.0135968 5.87713 0.414327 5.81513L4.86507 5.11913L6.84964 0.792134C7.02865 0.402134 7.51298 0.402134 7.69199 0.792134L9.67655 5.11913L14.1273 5.81513C14.528 5.87713 14.6834 6.45113 14.3835 6.76513L11.1832 10.1211L11.9374 14.8511C12.0082 15.2941 11.6102 15.6411 11.2595 15.4431L7.26945 13.1871L3.28214 15.4431Z"
              fill="#F97101"
            />
          </g>
          <g clip-path="url(#clip1_379_81)">
            <path
              d="M20.5482 15.443C20.1974 15.641 19.7994 15.294 19.8703 14.851L20.6245 10.121L17.4232 6.76501C17.1242 6.45101 17.2796 5.87701 17.6803 5.81501L22.1311 5.11901L24.1157 0.792012C24.2947 0.402012 24.779 0.402012 24.958 0.792012L26.9426 5.11901L31.3933 5.81501C31.794 5.87701 31.9494 6.45101 31.6496 6.76501L28.4492 10.121L29.2034 14.851C29.2743 15.294 28.8763 15.641 28.5255 15.443L24.5355 13.187L20.5482 15.443Z"
              fill="#F97101"
            />
          </g>
          <g clip-path="url(#clip2_379_81)">
            <path
              d="M37.8138 15.443C37.463 15.641 37.065 15.294 37.1359 14.851L37.8901 10.121L34.6888 6.76501C34.3899 6.45101 34.5452 5.87701 34.946 5.81501L39.3967 5.11901L41.3813 0.792012C41.5603 0.402012 42.0446 0.402012 42.2236 0.792012L44.2082 5.11901L48.6589 5.81501C49.0597 5.87701 49.2151 6.45101 48.9152 6.76501L45.7148 10.121L46.469 14.851C46.5399 15.294 46.1419 15.641 45.7911 15.443L41.8011 13.187L37.8138 15.443Z"
              fill="#F97101"
            />
          </g>
          <g clip-path="url(#clip3_379_81)">
            <path
              d="M55.0775 15.443C54.7268 15.641 54.3288 15.294 54.3996 14.851L55.1538 10.121L51.9525 6.76501C51.6536 6.45101 51.809 5.87701 52.2097 5.81501L56.6604 5.11901L58.645 0.792012C58.824 0.402012 59.3084 0.402012 59.4874 0.792012L61.4719 5.11901L65.9227 5.81501C66.3234 5.87701 66.4788 6.45101 66.1789 6.76501L62.9785 10.121L63.7327 14.851C63.8036 15.294 63.4056 15.641 63.0549 15.443L59.0648 13.187L55.0775 15.443Z"
              fill="#F97101"
            />
          </g>
          <g clip-path="url(#clip4_379_81)">
            <path
              d="M72.3431 15.443C71.9924 15.641 71.5944 15.294 71.6653 14.851L72.4195 10.121L69.2182 6.76501C68.9192 6.45101 69.0746 5.87701 69.4753 5.81501L73.9261 5.11901L75.9106 0.792012C76.0897 0.402012 76.574 0.402012 76.753 0.792012L78.7376 5.11901L83.1883 5.81501C83.589 5.87701 83.7444 6.45101 83.4445 6.76501L80.2442 10.121L80.9984 14.851C81.0692 15.294 80.6712 15.641 80.3205 15.443L76.3305 13.187L72.3431 15.443Z"
              fill="#D9D9D9"
            />
          </g>
          <defs>
            <clipPath id="clip0_379_81">
              <rect width="14.539" height={16} fill="white" />
            </clipPath>
            <clipPath    id="clip1_379_81">
              <rect width="14.539" height={16} fill="white" transform="translate(17.2661)" />
            </clipPath>
            <clipPath id="clip2_379_81">
              <rect width="14.539" height={16} fill="white" transform="translate(34.5317)" />
            </clipPath>
            <clipPath id="clip3_379_81">
              <rect width="14.539" height={16} fill="white" transform="translate(51.7954)" />
            </clipPath>
            <clipPath id="clip4_379_81">
              <rect width="14.539" height={16} fill="white" transform="translate(69.061)" />
            </clipPath>
          </defs>
        </svg>
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left">
          <span className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left uppercase text-[#f97101]">
            4.1
          </span>
          <span className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left uppercase text-black">
            {" "}
          </span>
          <span className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left capitalize text-[#a2a2a2]">
            (61 Reviews)
          </span>
        </p>
      </div>
        </div>
        <svg
        width={730}
        height={1}
        viewBox="0 0 730 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="self-stretch flex-grow-0 flex-shrink-0"
        preserveAspectRatio="none"
        >
        <line y1="0.5" x2={730} y2="0.5" stroke="#D9D9D9" />
        </svg>
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[133.13px] relative gap-1">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[133.13px] text-sm font-medium text-left capitalize text-[#5f5f5f]">
            Starting From{" "}
            </p>
            <p className="flex-grow-0 flex-shrink-0 w-[103px] text-left capitalize">
            <span className="flex-grow-0 flex-shrink-0 w-[103px] font-[Monserrat] text-[28px] font-bold text-left capitalize text-[#3964ae]">
                $120
            </span>
            <span className="flex-grow-0 flex-shrink-0 w-[103px] text-[26px] font-bold text-left capitalize text-[#3964ae]">
                {" "}
            </span>
            <span className="flex-grow-0 flex-shrink-0 w-[103px] text-sm font-medium text-left capitalize text-[#5f5f5f]">
                / Night
            </span>
            </p>
        </div>
        <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-10 py-[18px] rounded-[42px] border border-[#f97101]">
            <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left capitalize text-[#f97101]">
            Check Availability →
            </p>
        </div>
        </div>
    </div>
    </div>
    )
}

const PageNumber = () => {
    return(
        
        <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[22px] py-4 rounded bg-[#3964ae] border border-[#3964ae]">
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left capitalize text-white">
      1
    </p>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-4 rounded bg-[#e8e8e6] border border-[#e8e8e6]">
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left capitalize text-[#5f5f5f]">
      2
    </p>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-4 rounded bg-[#e8e8e6] border border-[#e8e8e6]">
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left capitalize text-[#5f5f5f]">
      3
    </p>
  </div>
  <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-4 rounded bg-[#e8e8e6] border border-[#e8e8e6]">
    <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left capitalize text-[#5f5f5f]">
      4
    </p>
  </div>
</div>
)
}