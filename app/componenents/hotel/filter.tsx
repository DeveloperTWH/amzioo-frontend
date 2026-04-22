

export const HotelFilter = () => {


return(<div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[385px] gap-3">
  <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 px-6 py-3 rounded-lg bg-[#132440]">
    <p className="flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left capitalize text-white">
      Filter
    </p>
  </div>
  <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5 p-6 rounded-lg bg-neutral-100">
    <div className="flex-grow-0 flex-shrink-0 w-[339px] h-[271px]">
      <p className="absolute left-6 top-6 text-[22px] font-bold text-left capitalize text-black">
        Property Type
      </p>
      <div className="w-[339px] h-[227px]">
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[68px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_474_2382)">
                <path
                  d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0ZM12.03 4.97C12.1689 5.10875 12.2479 5.29644 12.2499 5.49275C12.252 5.68907 12.177 5.87837 12.041 6.02L8.049 11.01C7.98039 11.0839 7.89758 11.1432 7.80553 11.1844C7.71348 11.2255 7.61407 11.2477 7.51325 11.2496C7.41243 11.2514 7.31227 11.233 7.21876 11.1952C7.12524 11.1575 7.0403 11.1013 6.969 11.03L4.324 8.384C4.25031 8.31534 4.19121 8.23254 4.15022 8.14054C4.10923 8.04854 4.08718 7.94923 4.08541 7.84852C4.08363 7.74782 4.10216 7.64779 4.13988 7.5544C4.1776 7.46101 4.23374 7.37618 4.30496 7.30496C4.37618 7.23374 4.46101 7.1776 4.5544 7.13988C4.64779 7.10216 4.74782 7.08363 4.84852 7.08541C4.94923 7.08718 5.04854 7.10923 5.14054 7.15022C5.23254 7.19121 5.31534 7.25031 5.384 7.324L7.478 9.417L10.951 4.992C11.0195 4.91797 11.1022 4.85851 11.1942 4.81717C11.2861 4.77583 11.3855 4.75347 11.4863 4.75141C11.5871 4.74936 11.6873 4.76766 11.7809 4.80522C11.8745 4.84277 11.9596 4.89882 12.031 4.97H12.03Z"
                  fill="#3964AE"
                />
              </g>
              <defs>
                <clipPath id="clip0_474_2382">
                  <rect width={16} height={16} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#575757]">
              Hotels
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[98px]">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[86px] h-[17px] relative gap-2.5">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="xMidYMid meet"
            >
              <g clip-path="url(#clip0_474_2385)">
                <path
                  d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0ZM12.03 4.97C12.1689 5.10875 12.2479 5.29644 12.2499 5.49275C12.252 5.68907 12.177 5.87837 12.041 6.02L8.049 11.01C7.98039 11.0839 7.89758 11.1432 7.80553 11.1844C7.71348 11.2255 7.61407 11.2477 7.51325 11.2496C7.41243 11.2514 7.31227 11.233 7.21876 11.1952C7.12524 11.1575 7.0403 11.1013 6.969 11.03L4.324 8.384C4.25031 8.31534 4.19121 8.23254 4.15022 8.14054C4.10923 8.04854 4.08718 7.94923 4.08541 7.84852C4.08363 7.74782 4.10216 7.64779 4.13988 7.5544C4.1776 7.46101 4.23374 7.37618 4.30496 7.30496C4.37618 7.23374 4.46101 7.1776 4.5544 7.13988C4.64779 7.10216 4.74782 7.08363 4.84852 7.08541C4.94923 7.08718 5.04854 7.10923 5.14054 7.15022C5.23254 7.19121 5.31534 7.25031 5.384 7.324L7.478 9.417L10.951 4.992C11.0195 4.91797 11.1022 4.85851 11.1942 4.81717C11.2861 4.77583 11.3855 4.75347 11.4863 4.75141C11.5871 4.74936 11.6873 4.76766 11.7809 4.80522C11.8745 4.84277 11.9596 4.89882 12.031 4.97H12.03Z"
                  fill="#3964AE"
                />
              </g>
              <defs>
                <clipPath id="clip0_474_2385">
                  <rect width={16} height={16} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#575757]">
              Apartments
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (248)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-32">
          <div className="flex-grow-0 flex-shrink-0 w-20 h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Resorts
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (48)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[158px]">
          <div className="flex-grow-0 flex-shrink-0 w-[63px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Villas
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (54)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[188px]">
          <div className="flex-grow-0 flex-shrink-0 w-[90px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Cottages
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (254)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[218px]">
          <div className="flex-grow-0 flex-shrink-0 w-[106px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Homestays
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (250)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[248px]">
          <div className="flex-grow-0 flex-shrink-0 w-[79px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Hostels
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (1058)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[278px]">
          <div className="flex-grow-0 flex-shrink-0 w-[114px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Farmhouses
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (248)
          </p>
        </div>
      </div>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[342px] top-[50px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.0575 14.1925C2.11556 14.2507 2.18453 14.2969 2.26046 14.3284C2.33639 14.3599 2.41779 14.3761 2.5 14.3761C2.58221 14.3761 2.66361 14.3599 2.73954 14.3284C2.81547 14.2969 2.88444 14.2507 2.9425 14.1925L10 7.13373L17.0575 14.1925C17.1156 14.2506 17.1846 14.2967 17.2605 14.3281C17.3364 14.3596 17.4178 14.3758 17.5 14.3758C17.5822 14.3758 17.6636 14.3596 17.7395 14.3281C17.8154 14.2967 17.8844 14.2506 17.9425 14.1925C18.0006 14.1344 18.0467 14.0654 18.0782 13.9895C18.1096 13.9135 18.1258 13.8322 18.1258 13.75C18.1258 13.6678 18.1096 13.5864 18.0782 13.5105C18.0467 13.4346 18.0006 13.3656 17.9425 13.3075L10.4425 5.80748C10.3844 5.74928 10.3155 5.7031 10.2395 5.67159C10.1636 5.64008 10.0822 5.62387 10 5.62387C9.91779 5.62387 9.83639 5.64008 9.76046 5.67159C9.68453 5.7031 9.61556 5.74928 9.5575 5.80748L2.0575 13.3075C1.9993 13.3655 1.95312 13.4345 1.92161 13.5104C1.8901 13.5864 1.87388 13.6678 1.87388 13.75C1.87388 13.8322 1.8901 13.9136 1.92161 13.9895C1.95312 14.0655 1.9993 14.1344 2.0575 14.1925Z"
          fill="#A2A2A2"
        />
      </svg>
    </div>
    <svg
      width={339}
      height={1}
      viewBox="0 0 339 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={339} y2="0.5" stroke="#D9D9D9" />
    </svg>
    <div className="flex-grow-0 flex-shrink-0 w-[339px] h-[301px]">
      <p className="absolute left-6 top-[335px] text-[22px] font-bold text-left capitalize text-black">
        Countries
      </p>
      <div className="w-[339px] h-[257px]">
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[379px]">
          <div className="flex-grow-0 flex-shrink-0 w-[81px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              canada
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[409px]">
          <div className="flex-grow-0 flex-shrink-0 w-[122px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              United States
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[439px]">
          <div className="flex-grow-0 flex-shrink-0 w-[90px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Montreal
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[469px]">
          <div className="flex-grow-0 flex-shrink-0 w-[114px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Quebec City
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[499px]">
          <div className="flex-grow-0 flex-shrink-0 w-[79px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Ottawa
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[529px]">
          <div className="flex-grow-0 flex-shrink-0 w-[81px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Calgary
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[559px]">
          <div className="flex-grow-0 flex-shrink-0 w-[117px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Niagara Falls
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[589px]">
          <div className="flex-grow-0 flex-shrink-0 w-[65px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Banff
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-start items-start w-[339px] absolute left-6 top-[619px] gap-2.5">
          <div className="flex-grow-0 flex-shrink-0 w-[105px] h-[17px]">
            <p className="absolute left-0 top-0 text-sm font-bold text-left capitalize text-[#3964ae]">
              Show More{" "}
            </p>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 absolute left-[89px] top-px"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.64599 4.64604C1.69244 4.59948 1.74761 4.56253 1.80836 4.53733C1.86911 4.51212 1.93423 4.49915 1.99999 4.49915C2.06576 4.49915 2.13088 4.51212 2.19163 4.53733C2.25237 4.56253 2.30755 4.59948 2.35399 4.64604L7.99999 10.293L13.646 4.64604C13.6925 4.59955 13.7477 4.56267 13.8084 4.53752C13.8691 4.51236 13.9342 4.49941 14 4.49941C14.0657 4.49941 14.1308 4.51236 14.1916 4.53752C14.2523 4.56267 14.3075 4.59955 14.354 4.64604C14.4005 4.69253 14.4374 4.74772 14.4625 4.80846C14.4877 4.86919 14.5006 4.9343 14.5006 5.00004C14.5006 5.06578 14.4877 5.13088 14.4625 5.19162C14.4374 5.25236 14.4005 5.30755 14.354 5.35404L8.35399 11.354C8.30755 11.4006 8.25237 11.4375 8.19163 11.4628C8.13088 11.488 8.06576 11.5009 7.99999 11.5009C7.93423 11.5009 7.8691 11.488 7.80836 11.4628C7.74761 11.4375 7.69244 11.4006 7.64599 11.354L1.64599 5.35404C1.59943 5.30759 1.56249 5.25242 1.53728 5.19167C1.51207 5.13093 1.4991 5.06581 1.4991 5.00004C1.4991 4.93427 1.51207 4.86915 1.53728 4.80841C1.56249 4.74766 1.59943 4.69248 1.64599 4.64604Z"
                fill="#3964AE"
              />
            </svg>
          </div>
        </div>
      </div>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[342px] top-[361px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.0575 14.1925C2.11556 14.2507 2.18453 14.2969 2.26046 14.3284C2.33639 14.3599 2.41779 14.3761 2.5 14.3761C2.58221 14.3761 2.66361 14.3599 2.73954 14.3284C2.81547 14.2969 2.88444 14.2507 2.9425 14.1925L10 7.13373L17.0575 14.1925C17.1156 14.2506 17.1846 14.2967 17.2605 14.3281C17.3364 14.3596 17.4178 14.3758 17.5 14.3758C17.5822 14.3758 17.6636 14.3596 17.7395 14.3281C17.8154 14.2967 17.8844 14.2506 17.9425 14.1925C18.0006 14.1344 18.0467 14.0654 18.0782 13.9895C18.1096 13.9135 18.1258 13.8322 18.1258 13.75C18.1258 13.6678 18.1096 13.5864 18.0782 13.5105C18.0467 13.4346 18.0006 13.3656 17.9425 13.3075L10.4425 5.80748C10.3844 5.74928 10.3155 5.7031 10.2395 5.67159C10.1636 5.64008 10.0822 5.62387 10 5.62387C9.91779 5.62387 9.83639 5.64008 9.76046 5.67159C9.68453 5.7031 9.61556 5.74928 9.5575 5.80748L2.0575 13.3075C1.9993 13.3655 1.95312 13.4345 1.92161 13.5104C1.8901 13.5864 1.87388 13.6678 1.87388 13.75C1.87388 13.8322 1.8901 13.9136 1.92161 13.9895C1.95312 14.0655 1.9993 14.1344 2.0575 14.1925Z"
          fill="#A2A2A2"
        />
      </svg>
    </div>
    <svg
      width={339}
      height={1}
      viewBox="0 0 339 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={339} y2="0.5" stroke="#D9D9D9" />
    </svg>
    <div className="flex-grow-0 flex-shrink-0 w-[339px] h-[301px]">
      <p className="absolute left-6 top-[676px] text-[22px] font-bold text-left capitalize text-black">
        property Location
      </p>
      <div className="w-[339px] h-[257px]">
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[720px]">
          <div className="flex-grow-0 flex-shrink-0 w-[81px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Toronto
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[750px]">
          <div className="flex-grow-0 flex-shrink-0 w-[102px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Vancouver
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[780px]">
          <div className="flex-grow-0 flex-shrink-0 w-[90px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Montreal
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[810px]">
          <div className="flex-grow-0 flex-shrink-0 w-[114px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Quebec City
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[840px]">
          <div className="flex-grow-0 flex-shrink-0 w-[79px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Ottawa
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[870px]">
          <div className="flex-grow-0 flex-shrink-0 w-[81px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Calgary
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[900px]">
          <div className="flex-grow-0 flex-shrink-0 w-[117px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Niagara Falls
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[930px]">
          <div className="flex-grow-0 flex-shrink-0 w-[65px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Banff
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2548)
          </p>
        </div>
        <div className="flex justify-start items-start w-[339px] absolute left-6 top-[960px] gap-2.5">
          <div className="flex-grow-0 flex-shrink-0 w-[105px] h-[17px]">
            <p className="absolute left-0 top-0 text-sm font-bold text-left capitalize text-[#3964ae]">
              Show More{" "}
            </p>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 absolute left-[89px] top-px"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.64599 4.64604C1.69244 4.59948 1.74761 4.56253 1.80836 4.53733C1.86911 4.51212 1.93423 4.49915 1.99999 4.49915C2.06576 4.49915 2.13088 4.51212 2.19163 4.53733C2.25237 4.56253 2.30755 4.59948 2.35399 4.64604L7.99999 10.293L13.646 4.64604C13.6925 4.59955 13.7477 4.56267 13.8084 4.53752C13.8691 4.51236 13.9342 4.49941 14 4.49941C14.0657 4.49941 14.1308 4.51236 14.1916 4.53752C14.2523 4.56267 14.3075 4.59955 14.354 4.64604C14.4005 4.69253 14.4374 4.74772 14.4625 4.80846C14.4877 4.86919 14.5006 4.9343 14.5006 5.00004C14.5006 5.06578 14.4877 5.13088 14.4625 5.19162C14.4374 5.25236 14.4005 5.30755 14.354 5.35404L8.35399 11.354C8.30755 11.4006 8.25237 11.4375 8.19163 11.4628C8.13088 11.488 8.06576 11.5009 7.99999 11.5009C7.93423 11.5009 7.8691 11.488 7.80836 11.4628C7.74761 11.4375 7.69244 11.4006 7.64599 11.354L1.64599 5.35404C1.59943 5.30759 1.56249 5.25242 1.53728 5.19167C1.51207 5.13093 1.4991 5.06581 1.4991 5.00004C1.4991 4.93427 1.51207 4.86915 1.53728 4.80841C1.56249 4.74766 1.59943 4.69248 1.64599 4.64604Z"
                fill="#3964AE"
              />
            </svg>
          </div>
        </div>
      </div>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[342px] top-[702px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.0575 14.1925C2.11556 14.2507 2.18453 14.2969 2.26046 14.3284C2.33639 14.3599 2.41779 14.3761 2.5 14.3761C2.58221 14.3761 2.66361 14.3599 2.73954 14.3284C2.81547 14.2969 2.88444 14.2507 2.9425 14.1925L10 7.13373L17.0575 14.1925C17.1156 14.2506 17.1846 14.2967 17.2605 14.3281C17.3364 14.3596 17.4178 14.3758 17.5 14.3758C17.5822 14.3758 17.6636 14.3596 17.7395 14.3281C17.8154 14.2967 17.8844 14.2506 17.9425 14.1925C18.0006 14.1344 18.0467 14.0654 18.0782 13.9895C18.1096 13.9135 18.1258 13.8322 18.1258 13.75C18.1258 13.6678 18.1096 13.5864 18.0782 13.5105C18.0467 13.4346 18.0006 13.3656 17.9425 13.3075L10.4425 5.80748C10.3844 5.74928 10.3155 5.7031 10.2395 5.67159C10.1636 5.64008 10.0822 5.62387 10 5.62387C9.91779 5.62387 9.83639 5.64008 9.76046 5.67159C9.68453 5.7031 9.61556 5.74928 9.5575 5.80748L2.0575 13.3075C1.9993 13.3655 1.95312 13.4345 1.92161 13.5104C1.8901 13.5864 1.87388 13.6678 1.87388 13.75C1.87388 13.8322 1.8901 13.9136 1.92161 13.9895C1.95312 14.0655 1.9993 14.1344 2.0575 14.1925Z"
          fill="#A2A2A2"
        />
      </svg>
    </div>
    <svg
      width={339}
      height={1}
      viewBox="0 0 339 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={339} y2="0.5" stroke="#D9D9D9" />
    </svg>
    <div className="flex-grow-0 flex-shrink-0 w-[339px] h-[211px]">
      <p className="absolute left-6 top-[1017px] text-[22px] font-bold text-left capitalize text-black">
        Facilities
      </p>
      <div className="w-[339px] h-[167px]">
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[1061px]">
          <div className="flex-grow-0 flex-shrink-0 w-[140px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Swimming Pool
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (25)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[1091px]">
          <div className="flex-grow-0 flex-shrink-0 w-[102px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Spa/Sauna
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (48)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[1121px]">
          <div className="flex-grow-0 flex-shrink-0 w-[116px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Gym/Fitness
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (54)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[1151px]">
          <div className="flex-grow-0 flex-shrink-0 w-[90px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Free Wifi
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (28)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[1181px]">
          <div className="flex-grow-0 flex-shrink-0 w-[114px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Pet-friendly
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (8)
          </p>
        </div>
        <div className="flex justify-between items-center w-[339px] absolute left-6 top-[1211px]">
          <div className="flex-grow-0 flex-shrink-0 w-[110px] h-[17px]">
            <div className="w-4 h-4 absolute left-[-0.5px] top-0 rounded-sm bg-[#d9d9d9] border border-[#a2a2a2]" />
            <p className="absolute left-[26px] top-0 text-sm font-medium text-left capitalize text-[#575757]">
              Car Parking
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (4)
          </p>
        </div>
      </div>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[342px] top-[1043px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.0575 14.1925C2.11556 14.2507 2.18453 14.2969 2.26046 14.3284C2.33639 14.3599 2.41779 14.3761 2.5 14.3761C2.58221 14.3761 2.66361 14.3599 2.73954 14.3284C2.81547 14.2969 2.88444 14.2507 2.9425 14.1925L10 7.13373L17.0575 14.1925C17.1156 14.2506 17.1846 14.2967 17.2605 14.3281C17.3364 14.3596 17.4178 14.3758 17.5 14.3758C17.5822 14.3758 17.6636 14.3596 17.7395 14.3281C17.8154 14.2967 17.8844 14.2506 17.9425 14.1925C18.0006 14.1344 18.0467 14.0654 18.0782 13.9895C18.1096 13.9135 18.1258 13.8322 18.1258 13.75C18.1258 13.6678 18.1096 13.5864 18.0782 13.5105C18.0467 13.4346 18.0006 13.3656 17.9425 13.3075L10.4425 5.80748C10.3844 5.74928 10.3155 5.7031 10.2395 5.67159C10.1636 5.64008 10.0822 5.62387 10 5.62387C9.91779 5.62387 9.83639 5.64008 9.76046 5.67159C9.68453 5.7031 9.61556 5.74928 9.5575 5.80748L2.0575 13.3075C1.9993 13.3655 1.95312 13.4345 1.92161 13.5104C1.8901 13.5864 1.87388 13.6678 1.87388 13.75C1.87388 13.8322 1.8901 13.9136 1.92161 13.9895C1.95312 14.0655 1.9993 14.1344 2.0575 14.1925Z"
          fill="#A2A2A2"
        />
      </svg>
    </div>
    <svg
      width={339}
      height={1}
      viewBox="0 0 339 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={339} y2="0.5" stroke="#D9D9D9" />
    </svg>
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[109px] relative gap-4">
      <p className="flex-grow-0 flex-shrink-0 text-[22px] font-bold text-left capitalize text-black">
        Price Range
      </p>
      <svg
        width={337}
        height={30}
        viewBox="0 0 337 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[337px] h-[22px]"
        preserveAspectRatio="none"
      >
        <rect y={9} width={337} height={10} rx={5} fill="#D9D9D9" />
        <rect x={48} y={9} width={161} height={10} rx={5} fill="#F97101" />
        <g filter="url(#filter0_d_382_441)">
          <circle cx={50} cy={13} r={11} fill="#F97101" />
          <circle cx={50} cy={13} r={9} stroke="white" stroke-width={4} />
        </g>
        <g filter="url(#filter1_d_382_441)">
          <circle cx={204} cy={13} r={11} fill="#F97101" />
          <circle cx={204} cy={13} r={9} stroke="white" stroke-width={4} />
        </g>
        <defs>
          <filter
            id="filter0_d_382_441"
            x={35}
            y={0}
            width={30}
            height={30}
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feflood flood-opacity={0} result="BackgroundImageFix" />
            <fecolormatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feoffset dy={2} />
            <fegaussianblur stdDeviation={2} />
            <fecomposite in2="hardAlpha" operator="out" />
            <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_382_441" />
            <feblend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_382_441"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_382_441"
            x={189}
            y={0}
            width={30}
            height={30}
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feflood flood-opacity={0} result="BackgroundImageFix" />
            <fecolormatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feoffset dy={2} />
            <fegaussianblur stdDeviation={2} />
            <fecomposite in2="hardAlpha" operator="out" />
            <fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_382_441" />
            <feblend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_382_441"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="flex-grow-0 flex-shrink-0 w-60 h-[33px]">
        <div className="flex justify-center items-center absolute left-2.5 top-[76px] gap-2.5 px-3 py-2 rounded bg-[#a2a2a2]">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left capitalize text-white">
            <span className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-white">
              Min{" "}
            </span>
            <span className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left capitalize text-white">
              $40
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center absolute left-[157px] top-[76px] gap-2.5 px-3 py-2 rounded bg-[#a2a2a2]">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left capitalize text-white">
            <span className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-white">
              Max{" "}
            </span>
            <span className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left capitalize text-white">
              $240
            </span>
          </p>
        </div>
      </div>
    </div>
    <svg
      width={339}
      height={1}
      viewBox="0 0 339 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0"
      preserveAspectRatio="none"
    >
      <line y1="0.5" x2={339} y2="0.5" stroke="#D9D9D9" />
    </svg>
    <div className="flex-grow-0 flex-shrink-0 w-[339px] h-[181px]">
      <p className="absolute left-6 top-[1417px] text-[22px] font-bold text-left capitalize text-black">
        Rating
      </p>
      <div className="flex flex-col justify-start items-start w-[339px] absolute left-6 top-[1461px] gap-[13px]">
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
          <svg
            width={110}
            height={16}
            viewBox="0 0 110 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[109.6px] h-4"
            preserveAspectRatio="none"
          >
            <rect x="0.5" y="0.5" width={15} height={15} rx="1.5" fill="#D9D9D9" stroke="#A2A2A2" />
            <g clip-path="url(#clip0_382_277)">
              <path
                d="M29.2821 14.9778C28.9314 15.1634 28.5334 14.8381 28.6043 14.4228L29.3585 9.98842L26.1572 6.84217C25.8582 6.54779 26.0136 6.00967 26.4143 5.95154L30.8651 5.29904L32.8496 1.24248C33.0286 0.876855 33.513 0.876855 33.692 1.24248L35.6766 5.29904L40.1273 5.95154C40.528 6.00967 40.6834 6.54779 40.3835 6.84217L37.1832 9.98842L37.9374 14.4228C38.0082 14.8381 37.6102 15.1634 37.2595 14.9778L33.2694 12.8628L29.2821 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip1_382_277)">
              <path
                d="M46.5483 14.9778C46.1975 15.1634 45.7995 14.8381 45.8704 14.4228L46.6246 9.98842L43.4233 6.84217C43.1243 6.54779 43.2797 6.00967 43.6804 5.95154L48.1312 5.29904L50.1157 1.24248C50.2948 0.876855 50.7791 0.876855 50.9581 1.24248L52.9427 5.29904L57.3934 5.95154C57.7941 6.00967 57.9495 6.54779 57.6497 6.84217L54.4493 9.98842L55.2035 14.4228C55.2744 14.8381 54.8763 15.1634 54.5256 14.9778L50.5356 12.8628L46.5483 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip2_382_277)">
              <path
                d="M63.8139 14.9778C63.4631 15.1634 63.0651 14.8381 63.136 14.4228L63.8902 9.98842L60.6889 6.84217C60.3899 6.54779 60.5453 6.00967 60.9461 5.95154L65.3968 5.29904L67.3814 1.24248C67.5604 0.876855 68.0447 0.876855 68.2237 1.24248L70.2083 5.29904L74.659 5.95154C75.0597 6.00967 75.2151 6.54779 74.9153 6.84217L71.7149 9.98842L72.4691 14.4228C72.54 14.8381 72.142 15.1634 71.7912 14.9778L67.8012 12.8628L63.8139 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip3_382_277)">
              <path
                d="M81.0775 14.9778C80.7268 15.1634 80.3288 14.8381 80.3997 14.4228L81.1539 9.98842L77.9526 6.84217C77.6536 6.54779 77.809 6.00967 78.2097 5.95154L82.6605 5.29904L84.645 1.24248C84.824 0.876855 85.3084 0.876855 85.4874 1.24248L87.4719 5.29904L91.9227 5.95154C92.3234 6.00967 92.4788 6.54779 92.1789 6.84217L88.9785 9.98842L89.7328 14.4228C89.8036 14.8381 89.4056 15.1634 89.0549 14.9778L85.0648 12.8628L81.0775 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip4_382_277)">
              <path
                d="M98.3432 14.9778C97.9924 15.1634 97.5944 14.8381 97.6653 14.4228L98.4195 9.98842L95.2182 6.84217C94.9192 6.54779 95.0746 6.00967 95.4753 5.95154L99.9261 5.29904L101.911 1.24248C102.09 0.876855 102.574 0.876855 102.753 1.24248L104.738 5.29904L109.188 5.95154C109.589 6.00967 109.744 6.54779 109.445 6.84217L106.244 9.98842L106.998 14.4228C107.069 14.8381 106.671 15.1634 106.321 14.9778L102.33 12.8628L98.3432 14.9778Z"
                fill="#F97101"
              />
            </g>
            <defs>
              <clipPath id="clip0_382_277">
                <rect width="14.539" height={15} fill="white" transform="translate(26 0.5)" />
              </clipPath>
              <clipPath id="clip1_382_277">
                <rect width="14.539" height={15} fill="white" transform="translate(43.2661 0.5)" />
              </clipPath>
              <clipPath id="clip2_382_277">
                <rect width="14.539" height={15} fill="white" transform="translate(60.5317 0.5)" />
              </clipPath>
              <clipPath id="clip3_382_277">
                <rect width="14.539" height={15} fill="white" transform="translate(77.7954 0.5)" />
              </clipPath>
              <clipPath id="clip4_382_277">
                <rect width="14.539" height={15} fill="white" transform="translate(95.061 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (25)
          </p>
        </div>
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
          <svg
            width={110}
            height={16}
            viewBox="0 0 110 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[109.6px] h-4"
            preserveAspectRatio="none"
          >
            <rect x="0.5" y="0.5" width={15} height={15} rx="1.5" fill="#D9D9D9" stroke="#A2A2A2" />
            <g clip-path="url(#clip0_382_339)">
              <path
                d="M29.2821 14.9778C28.9314 15.1634 28.5334 14.8381 28.6043 14.4228L29.3585 9.98842L26.1572 6.84217C25.8582 6.54779 26.0136 6.00967 26.4143 5.95154L30.8651 5.29904L32.8496 1.24248C33.0286 0.876855 33.513 0.876855 33.692 1.24248L35.6766 5.29904L40.1273 5.95154C40.528 6.00967 40.6834 6.54779 40.3835 6.84217L37.1832 9.98842L37.9374 14.4228C38.0082 14.8381 37.6102 15.1634 37.2595 14.9778L33.2694 12.8628L29.2821 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip1_382_339)">
              <path
                d="M46.5483 14.9778C46.1975 15.1634 45.7995 14.8381 45.8704 14.4228L46.6246 9.98842L43.4233 6.84217C43.1243 6.54779 43.2797 6.00967 43.6804 5.95154L48.1312 5.29904L50.1157 1.24248C50.2948 0.876855 50.7791 0.876855 50.9581 1.24248L52.9427 5.29904L57.3934 5.95154C57.7941 6.00967 57.9495 6.54779 57.6497 6.84217L54.4493 9.98842L55.2035 14.4228C55.2744 14.8381 54.8763 15.1634 54.5256 14.9778L50.5356 12.8628L46.5483 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip2_382_339)">
              <path
                d="M63.8139 14.9778C63.4631 15.1634 63.0651 14.8381 63.136 14.4228L63.8902 9.98842L60.6889 6.84217C60.3899 6.54779 60.5453 6.00967 60.9461 5.95154L65.3968 5.29904L67.3814 1.24248C67.5604 0.876855 68.0447 0.876855 68.2237 1.24248L70.2083 5.29904L74.659 5.95154C75.0597 6.00967 75.2151 6.54779 74.9153 6.84217L71.7149 9.98842L72.4691 14.4228C72.54 14.8381 72.142 15.1634 71.7912 14.9778L67.8012 12.8628L63.8139 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip3_382_339)">
              <path
                d="M81.0775 14.9778C80.7268 15.1634 80.3288 14.8381 80.3997 14.4228L81.1539 9.98842L77.9526 6.84217C77.6536 6.54779 77.809 6.00967 78.2097 5.95154L82.6605 5.29904L84.645 1.24248C84.824 0.876855 85.3084 0.876855 85.4874 1.24248L87.4719 5.29904L91.9227 5.95154C92.3234 6.00967 92.4788 6.54779 92.1789 6.84217L88.9785 9.98842L89.7328 14.4228C89.8036 14.8381 89.4056 15.1634 89.0549 14.9778L85.0648 12.8628L81.0775 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip4_382_339)">
              <path
                d="M98.3432 14.9778C97.9924 15.1634 97.5944 14.8381 97.6653 14.4228L98.4195 9.98842L95.2182 6.84217C94.9192 6.54779 95.0746 6.00967 95.4753 5.95154L99.9261 5.29904L101.911 1.24248C102.09 0.876855 102.574 0.876855 102.753 1.24248L104.738 5.29904L109.188 5.95154C109.589 6.00967 109.744 6.54779 109.445 6.84217L106.244 9.98842L106.998 14.4228C107.069 14.8381 106.671 15.1634 106.321 14.9778L102.33 12.8628L98.3432 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <defs>
              <clipPath id="clip0_382_339">
                <rect width="14.539" height={15} fill="white" transform="translate(26 0.5)" />
              </clipPath>
              <clipPath id="clip1_382_339">
                <rect width="14.539" height={15} fill="white" transform="translate(43.2661 0.5)" />
              </clipPath>
              <clipPath id="clip2_382_339">
                <rect width="14.539" height={15} fill="white" transform="translate(60.5317 0.5)" />
              </clipPath>
              <clipPath id="clip3_382_339">
                <rect width="14.539" height={15} fill="white" transform="translate(77.7954 0.5)" />
              </clipPath>
              <clipPath id="clip4_382_339">
                <rect width="14.539" height={15} fill="white" transform="translate(95.061 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (48)
          </p>
        </div>
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
          <svg
            width={110}
            height={16}
            viewBox="0 0 110 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[109.6px] h-4"
            preserveAspectRatio="none"
          >
            <rect x="0.5" y="0.5" width={15} height={15} rx="1.5" fill="#D9D9D9" stroke="#A2A2A2" />
            <g clip-path="url(#clip0_382_355)">
              <path
                d="M29.2821 14.9778C28.9314 15.1634 28.5334 14.8381 28.6043 14.4228L29.3585 9.98842L26.1572 6.84217C25.8582 6.54779 26.0136 6.00967 26.4143 5.95154L30.8651 5.29904L32.8496 1.24248C33.0286 0.876855 33.513 0.876855 33.692 1.24248L35.6766 5.29904L40.1273 5.95154C40.528 6.00967 40.6834 6.54779 40.3835 6.84217L37.1832 9.98842L37.9374 14.4228C38.0082 14.8381 37.6102 15.1634 37.2595 14.9778L33.2694 12.8628L29.2821 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip1_382_355)">
              <path
                d="M46.5483 14.9778C46.1975 15.1634 45.7995 14.8381 45.8704 14.4228L46.6246 9.98842L43.4233 6.84217C43.1243 6.54779 43.2797 6.00967 43.6804 5.95154L48.1312 5.29904L50.1157 1.24248C50.2948 0.876855 50.7791 0.876855 50.9581 1.24248L52.9427 5.29904L57.3934 5.95154C57.7941 6.00967 57.9495 6.54779 57.6497 6.84217L54.4493 9.98842L55.2035 14.4228C55.2744 14.8381 54.8763 15.1634 54.5256 14.9778L50.5356 12.8628L46.5483 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip2_382_355)">
              <path
                d="M63.8139 14.9778C63.4631 15.1634 63.0651 14.8381 63.136 14.4228L63.8902 9.98842L60.6889 6.84217C60.3899 6.54779 60.5453 6.00967 60.9461 5.95154L65.3968 5.29904L67.3814 1.24248C67.5604 0.876855 68.0447 0.876855 68.2237 1.24248L70.2083 5.29904L74.659 5.95154C75.0597 6.00967 75.2151 6.54779 74.9153 6.84217L71.7149 9.98842L72.4691 14.4228C72.54 14.8381 72.142 15.1634 71.7912 14.9778L67.8012 12.8628L63.8139 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip3_382_355)">
              <path
                d="M81.0775 14.9778C80.7268 15.1634 80.3288 14.8381 80.3997 14.4228L81.1539 9.98842L77.9526 6.84217C77.6536 6.54779 77.809 6.00967 78.2097 5.95154L82.6605 5.29904L84.645 1.24248C84.824 0.876855 85.3084 0.876855 85.4874 1.24248L87.4719 5.29904L91.9227 5.95154C92.3234 6.00967 92.4788 6.54779 92.1789 6.84217L88.9785 9.98842L89.7328 14.4228C89.8036 14.8381 89.4056 15.1634 89.0549 14.9778L85.0648 12.8628L81.0775 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <g clip-path="url(#clip4_382_355)">
              <path
                d="M98.3432 14.9778C97.9924 15.1634 97.5944 14.8381 97.6653 14.4228L98.4195 9.98842L95.2182 6.84217C94.9192 6.54779 95.0746 6.00967 95.4753 5.95154L99.9261 5.29904L101.911 1.24248C102.09 0.876855 102.574 0.876855 102.753 1.24248L104.738 5.29904L109.188 5.95154C109.589 6.00967 109.744 6.54779 109.445 6.84217L106.244 9.98842L106.998 14.4228C107.069 14.8381 106.671 15.1634 106.321 14.9778L102.33 12.8628L98.3432 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <defs>
              <clipPath id="clip0_382_355">
                <rect width="14.539" height={15} fill="white" transform="translate(26 0.5)" />
              </clipPath>
              <clipPath id="clip1_382_355">
                <rect width="14.539" height={15} fill="white" transform="translate(43.2661 0.5)" />
              </clipPath>
              <clipPath id="clip2_382_355">
                <rect width="14.539" height={15} fill="white" transform="translate(60.5317 0.5)" />
              </clipPath>
              <clipPath id="clip3_382_355">
                <rect width="14.539" height={15} fill="white" transform="translate(77.7954 0.5)" />
              </clipPath>
              <clipPath id="clip4_382_355">
                <rect width="14.539" height={15} fill="white" transform="translate(95.061 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (12)
          </p>
        </div>
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
          <svg
            width={110}
            height={16}
            viewBox="0 0 110 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[109.6px] h-4"
            preserveAspectRatio="none"
          >
            <rect x="0.5" y="0.5" width={15} height={15} rx="1.5" fill="#D9D9D9" stroke="#A2A2A2" />
            <g clip-path="url(#clip0_382_371)">
              <path
                d="M29.2821 14.9778C28.9314 15.1634 28.5334 14.8381 28.6043 14.4228L29.3585 9.98842L26.1572 6.84217C25.8582 6.54779 26.0136 6.00967 26.4143 5.95154L30.8651 5.29904L32.8496 1.24248C33.0286 0.876855 33.513 0.876855 33.692 1.24248L35.6766 5.29904L40.1273 5.95154C40.528 6.00967 40.6834 6.54779 40.3835 6.84217L37.1832 9.98842L37.9374 14.4228C38.0082 14.8381 37.6102 15.1634 37.2595 14.9778L33.2694 12.8628L29.2821 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip1_382_371)">
              <path
                d="M46.5483 14.9778C46.1975 15.1634 45.7995 14.8381 45.8704 14.4228L46.6246 9.98842L43.4233 6.84217C43.1243 6.54779 43.2797 6.00967 43.6804 5.95154L48.1312 5.29904L50.1157 1.24248C50.2948 0.876855 50.7791 0.876855 50.9581 1.24248L52.9427 5.29904L57.3934 5.95154C57.7941 6.00967 57.9495 6.54779 57.6497 6.84217L54.4493 9.98842L55.2035 14.4228C55.2744 14.8381 54.8763 15.1634 54.5256 14.9778L50.5356 12.8628L46.5483 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip2_382_371)">
              <path
                d="M63.8139 14.9778C63.4631 15.1634 63.0651 14.8381 63.136 14.4228L63.8902 9.98842L60.6889 6.84217C60.3899 6.54779 60.5453 6.00967 60.9461 5.95154L65.3968 5.29904L67.3814 1.24248C67.5604 0.876855 68.0447 0.876855 68.2237 1.24248L70.2083 5.29904L74.659 5.95154C75.0597 6.00967 75.2151 6.54779 74.9153 6.84217L71.7149 9.98842L72.4691 14.4228C72.54 14.8381 72.142 15.1634 71.7912 14.9778L67.8012 12.8628L63.8139 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <g clip-path="url(#clip3_382_371)">
              <path
                d="M81.0775 14.9778C80.7268 15.1634 80.3288 14.8381 80.3997 14.4228L81.1539 9.98842L77.9526 6.84217C77.6536 6.54779 77.809 6.00967 78.2097 5.95154L82.6605 5.29904L84.645 1.24248C84.824 0.876855 85.3084 0.876855 85.4874 1.24248L87.4719 5.29904L91.9227 5.95154C92.3234 6.00967 92.4788 6.54779 92.1789 6.84217L88.9785 9.98842L89.7328 14.4228C89.8036 14.8381 89.4056 15.1634 89.0549 14.9778L85.0648 12.8628L81.0775 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <g clip-path="url(#clip4_382_371)">
              <path
                d="M98.3432 14.9778C97.9924 15.1634 97.5944 14.8381 97.6653 14.4228L98.4195 9.98842L95.2182 6.84217C94.9192 6.54779 95.0746 6.00967 95.4753 5.95154L99.9261 5.29904L101.911 1.24248C102.09 0.876855 102.574 0.876855 102.753 1.24248L104.738 5.29904L109.188 5.95154C109.589 6.00967 109.744 6.54779 109.445 6.84217L106.244 9.98842L106.998 14.4228C107.069 14.8381 106.671 15.1634 106.321 14.9778L102.33 12.8628L98.3432 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <defs>
              <clipPath id="clip0_382_371">
                <rect width="14.539" height={15} fill="white" transform="translate(26 0.5)" />
              </clipPath>
              <clipPath id="clip1_382_371">
                <rect width="14.539" height={15} fill="white" transform="translate(43.2661 0.5)" />
              </clipPath>
              <clipPath id="clip2_382_371">
                <rect width="14.539" height={15} fill="white" transform="translate(60.5317 0.5)" />
              </clipPath>
              <clipPath id="clip3_382_371">
                <rect width="14.539" height={15} fill="white" transform="translate(77.7954 0.5)" />
              </clipPath>
              <clipPath id="clip4_382_371">
                <rect width="14.539" height={15} fill="white" transform="translate(95.061 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (4)
          </p>
        </div>
        <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
          <svg
            width={110}
            height={16}
            viewBox="0 0 110 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[109.6px] h-4"
            preserveAspectRatio="none"
          >
            <rect x="0.5" y="0.5" width={15} height={15} rx="1.5" fill="#D9D9D9" stroke="#A2A2A2" />
            <g clip-path="url(#clip0_382_386)">
              <path
                d="M29.2821 14.9778C28.9314 15.1634 28.5334 14.8381 28.6043 14.4228L29.3585 9.98842L26.1572 6.84217C25.8582 6.54779 26.0136 6.00967 26.4143 5.95154L30.8651 5.29904L32.8496 1.24248C33.0286 0.876855 33.513 0.876855 33.692 1.24248L35.6766 5.29904L40.1273 5.95154C40.528 6.00967 40.6834 6.54779 40.3835 6.84217L37.1832 9.98842L37.9374 14.4228C38.0082 14.8381 37.6102 15.1634 37.2595 14.9778L33.2694 12.8628L29.2821 14.9778Z"
                fill="#F97101"
              />
            </g>
            <g clip-path="url(#clip1_382_386)">
              <path
                d="M46.5483 14.9778C46.1975 15.1634 45.7995 14.8381 45.8704 14.4228L46.6246 9.98842L43.4233 6.84217C43.1243 6.54779 43.2797 6.00967 43.6804 5.95154L48.1312 5.29904L50.1157 1.24248C50.2948 0.876855 50.7791 0.876855 50.9581 1.24248L52.9427 5.29904L57.3934 5.95154C57.7941 6.00967 57.9495 6.54779 57.6497 6.84217L54.4493 9.98842L55.2035 14.4228C55.2744 14.8381 54.8763 15.1634 54.5256 14.9778L50.5356 12.8628L46.5483 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <g clip-path="url(#clip2_382_386)">
              <path
                d="M63.8139 14.9778C63.4631 15.1634 63.0651 14.8381 63.136 14.4228L63.8902 9.98842L60.6889 6.84217C60.3899 6.54779 60.5453 6.00967 60.9461 5.95154L65.3968 5.29904L67.3814 1.24248C67.5604 0.876855 68.0447 0.876855 68.2237 1.24248L70.2083 5.29904L74.659 5.95154C75.0597 6.00967 75.2151 6.54779 74.9153 6.84217L71.7149 9.98842L72.4691 14.4228C72.54 14.8381 72.142 15.1634 71.7912 14.9778L67.8012 12.8628L63.8139 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <g clip-path="url(#clip3_382_386)">
              <path
                d="M81.0775 14.9778C80.7268 15.1634 80.3288 14.8381 80.3997 14.4228L81.1539 9.98842L77.9526 6.84217C77.6536 6.54779 77.809 6.00967 78.2097 5.95154L82.6605 5.29904L84.645 1.24248C84.824 0.876855 85.3084 0.876855 85.4874 1.24248L87.4719 5.29904L91.9227 5.95154C92.3234 6.00967 92.4788 6.54779 92.1789 6.84217L88.9785 9.98842L89.7328 14.4228C89.8036 14.8381 89.4056 15.1634 89.0549 14.9778L85.0648 12.8628L81.0775 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <g clip-path="url(#clip4_382_386)">
              <path
                d="M98.3432 14.9778C97.9924 15.1634 97.5944 14.8381 97.6653 14.4228L98.4195 9.98842L95.2182 6.84217C94.9192 6.54779 95.0746 6.00967 95.4753 5.95154L99.9261 5.29904L101.911 1.24248C102.09 0.876855 102.574 0.876855 102.753 1.24248L104.738 5.29904L109.188 5.95154C109.589 6.00967 109.744 6.54779 109.445 6.84217L106.244 9.98842L106.998 14.4228C107.069 14.8381 106.671 15.1634 106.321 14.9778L102.33 12.8628L98.3432 14.9778Z"
                fill="#D9D9D9"
              />
            </g>
            <defs>
              <clipPath id="clip0_382_386">
                <rect width="14.539" height={15} fill="white" transform="translate(26 0.5)" />
              </clipPath>
              <clipPath id="clip1_382_386">
                <rect width="14.539" height={15} fill="white" transform="translate(43.2661 0.5)" />
              </clipPath>
              <clipPath id="clip2_382_386">
                <rect width="14.539" height={15} fill="white" transform="translate(60.5317 0.5)" />
              </clipPath>
              <clipPath id="clip3_382_386">
                <rect width="14.539" height={15} fill="white" transform="translate(77.7954 0.5)" />
              </clipPath>
              <clipPath id="clip4_382_386">
                <rect width="14.539" height={15} fill="white" transform="translate(95.061 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left capitalize text-[#868686]">
            (2)
          </p>
        </div>
      </div>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-[342px] top-[1443px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.0575 14.1926C2.11556 14.2508 2.18453 14.297 2.26046 14.3285C2.33639 14.36 2.41779 14.3762 2.5 14.3762C2.58221 14.3762 2.66361 14.36 2.73954 14.3285C2.81547 14.297 2.88444 14.2508 2.9425 14.1926L10 7.13385L17.0575 14.1926C17.1156 14.2507 17.1846 14.2968 17.2605 14.3283C17.3364 14.3597 17.4178 14.3759 17.5 14.3759C17.5822 14.3759 17.6636 14.3597 17.7395 14.3283C17.8154 14.2968 17.8844 14.2507 17.9425 14.1926C18.0006 14.1345 18.0467 14.0655 18.0782 13.9896C18.1096 13.9137 18.1258 13.8323 18.1258 13.7501C18.1258 13.6679 18.1096 13.5865 18.0782 13.5106C18.0467 13.4347 18.0006 13.3657 17.9425 13.3076L10.4425 5.8076C10.3844 5.7494 10.3155 5.70322 10.2395 5.67171C10.1636 5.64021 10.0822 5.62399 10 5.62399C9.91779 5.62399 9.83639 5.64021 9.76046 5.67171C9.68453 5.70322 9.61556 5.7494 9.5575 5.8076L2.0575 13.3076C1.9993 13.3657 1.95312 13.4346 1.92161 13.5106C1.8901 13.5865 1.87388 13.6679 1.87388 13.7501C1.87388 13.8323 1.8901 13.9137 1.92161 13.9896C1.95312 14.0656 1.9993 14.1345 2.0575 14.1926Z"
          fill="#A2A2A2"
        />
      </svg>
    </div>
  </div>
</div>
)


}