"use client"

import React, { useState, useEffect } from 'react';
import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const Loader = () => {
  return (
    <div className="loader ">
      {/* Customize your loader content here */}
      <img src="loading.svg" alt='Loading...' />
    </div>
  );
};

export const metadata = {
  title: 'SeyiDev',
  description: 'My Portfolio Website',
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay in loading (e.g., 3 seconds)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="h-screen">
          {loading ? (
            <div className="bg flex justify-center items-center h-full">

              <Loader />
            </div>
          ) : (
            <div className="main">{children}</div>
          )}
        </div>
      </body>
    </html>
  );
}




















// import "./globals.css";
// import { Montserrat } from "next/font/google";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
// });

// export const metadata = {
//   title: "SeyiDev",
//   description: "My Portfolio Website",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={montserrat.className}>
//         <div className="h-screen">
//           <div className="main">{children}</div>
//         </div>
//       </body>
//     </html>
//   );
// }
