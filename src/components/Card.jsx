import React from "react";

function Card({ orderCount, amount, aboutAmount }) {
  let formattedAmount = amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex">
      <div className="bg-white border-[1px] border-black p-5 rounded-md  hover:bg-gray-300 flex flex-col gap-2">
        <div className="flex gap-3 ">
          <div className="text-gray-700 text-sm">{aboutAmount}</div>
          <div className="inline-block align-baseline text-gray-500 ">
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
          <div className="flex underline text-sm font-medium text-blue-600 ">
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
      </div>
    </div>
  );
}

export default Card;
