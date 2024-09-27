import React from 'react';

const CardDataStats = ({ title, total, color, icon }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`rounded-lg border flex items-center gap-2 justify-center shadow-2xl border-stroke py-4 px-4 dark:border-strokedark dark:bg-boxdark`}
    >
      <div className="flex h-12 w-12 items-center shadow-lg justify-center rounded-full bg-[#e5e4e2] dark:bg-meta-4">
        {icon}
      </div>
      <div className="mt-2 flex items-end justify-between">
        <div>
          <h4 className="text-xs font-medium text-white dark:text-white">
            {total}
          </h4>
          <span className="text-xs font-normal text-white">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
