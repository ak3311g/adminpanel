import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import TableOne from "../../components/Tables/TableOne";
import TableThree from "../../components/Tables/TableThree";
import TableTwo from "../../components/Tables/TableTwo";


const Tables = () => {
    const columns = ["Full Name", "Course Name", "Course Status", "Assign To" ," Delete"];
   
  return (
    <>
      <Breadcrumb pageName="User" />

      <div className="flex flex-col gap-10">
        <TableOne  columns = {columns} url = '/products' />
        {/* <TableTwo /> */}
        {/* <TableThree /> */}
      </div>
    </>
  );
};

export default Tables;
