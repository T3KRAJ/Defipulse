import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { useWeb3 } from '@3rdweb/hooks';
import { BellIcon } from '@heroicons/react/24/outline'
import { CONSTANTS, PushAPI } from '@pushprotocol/restapi';

const schema = {
  "0x72159225e03b1957cfe8e586c73a63b55a3e77d2f8a3ec5d2b4a508e2860cc2f": {
    "blockHash": "0x429125c836b80c9b9942aa1bcf8aba2381e3c90c706d050cf64c5e28c4a7fc23",
    "blockNumber": 18750843,
    "from": "0xF741F1fAa045F7eE50Ef7311DAb5401E29059ac0",
    "gas": 36015,
    "gasPrice": "33924693888",
    "maxFeePerGas": "45120098777",
    "maxPriorityFeePerGas": "100000000",
    "hash": "0x72159225e03b1957cfe8e586c73a63b55a3e77d2f8a3ec5d2b4a508e2860cc2f",
    "nonce": 1852,
    "to": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "transactionIndex": 107,
    "value": "0",
    "type": 2,
    "accessList": [],
    "chainId": "0x1",
    "yParity": "0x1"
  }};

const NotificationDrawer = () => {
  const [open, setOpen] = useState(false);
  const { address, provider } = useWeb3();
  const [notifications, setNotifications] = useState([]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    address && fetchNotifications();
  }, [address])

  console.log(notifications);

  const fetchNotifications = async () => {
    const signer = provider.getSigner();
    const user = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });

    const stream = await user.initStream([CONSTANTS.STREAM.NOTIF]);

    stream.on(CONSTANTS.STREAM.NOTIF, (data) => {
      setNotifications((prevNotifications) => [...prevNotifications, (data.message.payload.body)]); 
      // setNotifications(JSON.stringify(data));
    });

    stream.connect();
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
      <Drawer title="Events" placement="right" width={800} onClose={onClose} open={open}>

        {notifications && notifications.map(( notification , index) => (
          <div className='border p-3 rounded-md text-gray-700 shadow-sm mb-2' key={index}>
            <h2 className='text-md font-semibold'>{notification}</h2>
            <h2 className='text-xs'>{'notification'}</h2>
          </div>
        ))}
      </Drawer>
    </>
  );
};
export default NotificationDrawer;