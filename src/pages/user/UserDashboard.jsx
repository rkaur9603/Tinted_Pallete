import React, { useContext, useEffect, useState } from 'react';
import Layout from "../../components/layout/Layout";
import Loader from '../../components/loader/Loader';
import myContext from "../../context/myContext";

const UserDashboard = () => {
  // State to hold user data
  const [user, setUser] = useState(null);
  const context = useContext(myContext);
  const { loading, allOrders } = context;

  useEffect(() => {
    // Load user from localStorage
    const fetchedUser = JSON.parse(localStorage.getItem('users'));
    setUser(fetchedUser);

    // Log for debugging
    console.log('User UID:', fetchedUser?.uid);
    console.log('Orders Data:', allOrders);
  }, [allOrders]);

  // Filter orders by user ID (use optional chaining to prevent errors)
  const userOrders = user?.uid && allOrders ? allOrders.filter(order => order.userid === user.uid) : [];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8">
        {/* Top Section */}
        <div className="top">
          {/* User Details */}
          <div className="bg-pink-50 py-5 rounded-xl border border-pink-100">
            <div>
              <h1 className="text-center text-lg"><span className="font-bold">Name: </span>{user?.name}</h1>
              <h1 className="text-center text-lg"><span className="font-bold">Email: </span>{user?.email}</h1>
              <h1 className="text-center text-lg"><span className="font-bold">Date: </span>{user?.date}</h1>
              <h1 className="text-center text-lg"><span className="font-bold">Role: </span>{user?.role}</h1>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom">
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>
            <div className="flex justify-center relative top-10">
              {loading && <Loader />}
            </div>

            {/* Order Details */}
            {userOrders.length === 0 ? (
              <p className="text-center text-lg">No orders found.</p>
            ) : (
              userOrders.map((order, index) => (
                <div key={index} className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
                  {/* Order Info */}
                  <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                    <div className="p-8">
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                        {/* ... other order info elements ... */}
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="p-8">
                      <ul className="-my-7 divide-y divide-gray-200">
                        {order.cartItems.map((item, idx) => (
                          <li key={idx} className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                            {/* ... other product info elements ... */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserDashboard;