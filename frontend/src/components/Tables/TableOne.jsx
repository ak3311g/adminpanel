import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

const TableOne = ({ url, columns }) => {
  const data = useFetch(url);
  const role = useSelector((state) => state.auth.user?.role);
  //  console.log(userData?.products);

  return (
    <div className=" mt-2 overflow-x-auto">
      <div className="min-w-max">
        <div className="rounded-sm border border-stroke  bg-white px-5 pt-6 pb-2.5  shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <h4 className="mb-6 text-lg font-semibold text-black dark:text-white uppercase">
            {role === 'admin' ? 'Users' : 'Clients'}
          </h4>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="flex rounded-sm bg-gray text-[#000] dark:bg-meta-4 min-w-max">
                {columns?.length &&
                  columns?.map((column, i) => (
                    <h5
                      className="flex-1 p-2.5 xl:p-5 text-sm font-medium uppercase text-center xsm:text-xs whitespace-nowrap"
                      key={i}
                    >
                      {column}
                    </h5>
                  ))}
              </div>
            </div>

            {data?.slice(0,6).map((brand, key) => (
              <div
                className={`grid grid-cols-3 sm:grid-cols-5 ${
                  key === data.length - 1
                    ? ''
                    : 'border-b border-stroke dark:border-strokedark'
                }`}
                key={brand?.id}
              >
                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                  <div className="flex-shrink-0">
                    <img
                      src={brand?.image ? brand?.image : brand.thumbnail}
                      alt="Brand"
                      className="w-13"
                    />
                  </div>
                  <p className=" text-black text-xs dark:text-white sm:block">
                    {brand?.firstName
                      ? brand.firstName
                      : brand?.title.slice(0, 6)}
                  </p>
                </div>
                
                <div className="flex items-center text-xs justify-center p-2.5 xl:p-5">
                  <p className="text-meta-3">
                    ${brand?.height ? brand?.height : brand?.price}
                  </p>
                </div>
                <div className="flex items-center text-xs justify-center p-2.5 xl:p-5">
                  <p className="text-meta-3">
                    ${brand?.height ? brand?.height : brand?.price}
                  </p>
                </div>

                <div className="hidden items-center text-xs justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-black dark:text-white">
                    {brand?.weight ? brand.weight : brand?.category}
                  </p>
                </div>                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
