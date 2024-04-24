import React from "react";

function PayoutCard({ orderCount, amount, aboutAmount }) {
  let formattedAmount = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex">
      <div className="bg-[#146EB4] text-white border-[.4px] border-black p-5 rounded-md  hover:bg-blue-900 flex flex-col gap-2">
        <div className="flex gap-3 ">
          <div className="text-white text-sm">{aboutAmount}</div>
          <div className="inline-block align-baseline text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-2xl font-medium">₹{formattedAmount}</div>
          <div className="flex underline text-sm font-medium text-white ">
            {orderCount ? (
              <div className="flex items-center ">
                {orderCount} Orders
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full bg-blue-900">Next Payment Date:</div>
      </div>
    </div>
  );
}

export default PayoutCard;
