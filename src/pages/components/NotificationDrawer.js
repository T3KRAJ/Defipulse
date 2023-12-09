import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { useWeb3 } from '@3rdweb/hooks';
import { BellIcon } from '@heroicons/react/24/outline'

const NotificationDrawer = () => {
  const [open, setOpen] = useState(false);
  const { address } = useWeb3();
  const [notifications, setNotifications] = useState([]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary" onClick={showDrawer}
        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </Button>
      <Drawer title="Notifications" placement="right" onClose={onClose} open={open}>

        {notifications && notifications.map(({ notification }, index) => (
          <div className='border p-3 rounded-md shadow-sm mb-2' key={index}>
            <h2 className='text-md font-semibold'>{notification.title}</h2>
            <h2 className='text-xs'>{notification.body}</h2>
          </div>
        ))}
      </Drawer>
    </>
  );
};
export default NotificationDrawer;