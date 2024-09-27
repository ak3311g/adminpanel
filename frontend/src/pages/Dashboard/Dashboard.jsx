import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import { useSelector } from 'react-redux';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { PiStudent } from 'react-icons/pi';
import { CgOrganisation } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { TbLivePhoto } from 'react-icons/tb';
import { RiLiveLine } from 'react-icons/ri';

const Dashboard = () => {
  const role = useSelector((state) => state.auth.user?.role);

  const admin = [
    {
      color: '#588157',
      title: 'Total Mentors',
      total: '143',
      icon: <LiaChalkboardTeacherSolid />,
    },
    {
      color: '#669bbc',
      title: 'Total Mentees',
      total: '14332',
      icon: <PiStudent />,
    },
    {
      color: '#564592',
      title: 'Total Organizations',
      total: '1043',
      icon: <CgOrganisation />,
    },
    {
      color: '#023e8a',
      title: 'Total Users',
      total: '1332',
      icon: <FaUsers />,
    },
  ];

  const user = [
    {
      color: '#588157',
      title: 'Total Sessions',
      total: '500',
      icon: <FaChalkboardTeacher />,
    },
    {
      color: '#669bbc',
      title: 'Total Mentees',
      total: '14332',
      icon: <TbLivePhoto />,
    },
    {
      color: '#564592',
      title: 'Total Organizations',
      total: '1043',
      icon: <RiLiveLine />,
    },
    {
      color: '#023e8a',
      title: 'Total Users',
      total: '14332',
      icon: <FaUsers />,
    },
  ];

  return (
    <div>
      {role === 'admin' ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {/* FOUR CARDS */}
          {admin &&
            admin.map((Admindata) => (
              <CardDataStats
                key={Admindata?.color}
                {...Admindata}
              ></CardDataStats>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {/* FOUR CARDS */}
          {user &&
            user.map((UserData) => (
              <CardDataStats
                key={UserData?.color}
                {...UserData}
              ></CardDataStats>
            ))}
        </div>
      )}

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/*     <ChartOne url = {role === 'admin' ? '/products' : '/user'} /> */}
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          {role === 'admin' ? (
            <TableOne
              columns={[
                'Full Name',
                'Course Name',
                'Course Status',
                'Mentor Assigned',
                'Mentee',
              ]}
              url="/users"
            />
          ) : (
            <TableOne
              url="/products"
              columns={[
                'Full Name',
                'Course Name',
                'Course Status',
                'Assign To',
                ' Delete',
              ]}
            />
          )}
        </div>
        <ChatCard />
      </div>
    </div>
  );
};

export default Dashboard;
