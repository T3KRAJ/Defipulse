import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { useWeb3 } from '@3rdweb/hooks';
import { BellIcon } from '@heroicons/react/24/outline'
import { CONSTANTS, PushAPI } from '@pushprotocol/restapi';
import Link from 'next/link';

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

  const fetchNotifications = async () => {
    const signer = provider.getSigner();
    const user = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });

    const stream = await user.initStream([CONSTANTS.STREAM.NOTIF]);

    stream.on(CONSTANTS.STREAM.NOTIF, (data) => {
      setNotifications((prevNotifications) => [JSON.parse(data.message.payload.body), ...prevNotifications,]);
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
      <Drawer title="Events" placement="right" width={400} onClose={onClose} open={open}>

        {notifications && notifications.map(({ blockNumber, from, gas, gasPrice, hash, value, to }, index) => (
          <div className='border p-3 rounded-md text-gray-700 shadow-sm mb-2' key={index}>
            <h2 className='text-md font-semibold'>Block Number: </h2><span className='text-gray-600'>{blockNumber}</span>
            <h2 className='text-sm font-semibold'>From: </h2>{from.slice(0, 6)}...{from.slice(from.length - 6)}
            <h2 className='text-sm font-semibold'>To: </h2>{to.slice(0, 6)}...{to.slice(to.length - 6)}
            <h2 className='text-md font-semibold'>Gas: </h2>{gas}
            <h2 className='text-md font-semibold'>Gas Price: </h2>{gasPrice}
            <div className='flex gap-2'><h2 className='text-md font-semibold'>Transaction Hash: </h2><Link href={`https://etherscan.io/tx/${hash}`} className='flex gap-2 text-sm text-blue-400 font-semibold'>{hash.slice(0, 6)}...{hash.slice(hash.length - 6)} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>

            </Link>
            </div>

            <h2 className='text-md font-semibold'>Value: </h2>{value}
          </div>
        ))}
      </Drawer>
    </>
  );
};
export default NotificationDrawer;
// blockNumber, from, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, hash, nonce, to, value, accessList, chainId, yParity