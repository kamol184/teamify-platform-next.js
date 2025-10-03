// "use client";
// import Layout from "../Components/Layout";
// import { Box, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";

// export default function Home() {  
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/api/index")
//       .then((res) => res.json())
//       .then((json) => setData(json))
//       .catch((err) => console.error("Xato:", err));
//   }, []);

//   if (!data) {
//   return <p>Yuklanmoqda...</p>;
// }

//   return (
//     <Layout>
//       <h1>Dashboard</h1>
//        <Box sx={{ display: 'flex' }}>
//                 <Box sx={{ width: 360, height: 345, mt: 5, border: "1px solid #E6E8EC", borderRadius: 2, ml: 3 }}>
//                   <Typography component="h6" sx={{ ml: 2, pt: 2, fontWeight: 'bold' }}>Team Strength</Typography>
//                   <img src="/Graph.png" alt="page" style={{ width: 300, height: 150, marginTop: 15, marginLeft: 25 }} />
//                   <Box sx={{ display: 'flex' }}>
//                     <Box sx={{ display: 'flex', ml: 2, mt: 2 }}>
//                       <img src="/Group 41.png" alt="number" style={{ marginLeft: 10, marginTop: 10 }} />
//                       <Typography component="p" sx={{ ml: 2, pt: 2, color: 'grey' }}>Marketing</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex' }}>
//                       <img src="/Group 35.png" alt="number" style={{ marginLeft: 50, marginTop: 30 }} />
//                       <Typography component="p" sx={{ ml: 2, pt: 4, color: 'grey' }}>HR</Typography>
//                     </Box>
//                   </Box>
//                   <Box sx={{ display: 'flex', ml: 2 }}>
//                     <Box sx={{ display: 'flex' }}>
//                       <img src="/Group 36.png" alt="number" style={{ marginLeft: 10, marginTop: 10 }} />
//                       <Typography component="p" sx={{ ml: 2, pt: 2, color: 'grey' }}>Developers</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex' }}>
//                       <img src="/Group 34.png" alt="number" style={{ marginLeft: 40, marginTop: 10 }} />
//                       <Typography component="p" sx={{ ml: 2, pt: 2, color: 'grey' }}>Design</Typography>
//                     </Box>
//                   </Box>
//                 </Box>
//                 <Box sx={{ width: 360, height: 345, mt: 5, border: "1px solid #E6E8EC", borderRadius: 2, ml: 6 }}>
//                   <Box sx={{ display: 'flex' }}>
//                     <Typography component="h6" sx={{ ml: 4, pt: 2, fontWeight: 'bold' }}>Employes</Typography>
//                     <Typography component="p" sx={{ ml: 15, pt: 2, color: 'grey', fontSize: 12, }}>Aug 25-Sept 25^</Typography>
//                   </Box>
//                   <img src="/Group 1000000788.png" alt="girl" style={{ position: 'absolute', marginLeft: 130, marginTop: 35 }} />
//                   <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, mt: 2 }}>
//                     <img src="/Ellipse 1078.png" alt="docs" style={{ width: 10, height: 10, marginTop: 15 }} />
//                     <Typography component="p" sx={{ ml: 2, pt: 2, color: 'grey' }}>Innactive</Typography>
//                   </Box>
//                   <Typography component="h6" sx={{ ml: 4, fontWeight: 'bold' }}>254</Typography>
//                   <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, mt: 2 }}>
//                     <img src="/Ellipse 1079.png" alt="docs" style={{ width: 10, height: 10, marginTop: 15 }} />
//                     <Typography component="p" sx={{ ml: 2, pt: 2, color: 'grey' }}>Active</Typography>
//                   </Box>
//                   <Typography component="h6" sx={{ ml: 4, fontWeight: 'bold' }}>3000</Typography>
//                   <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, mt: 2 }}>
//                     <img src="/Ellipse 1079 (1).png" alt="docs" style={{ width: 10, height: 10, marginTop: 15 }} />
//                     <Typography component="p" sx={{ ml: 2, pt: 2, color: 'grey' }}>Total</Typography>
//                   </Box>
//                   <Typography component="h6" sx={{ ml: 4, fontWeight: 'bold' }}>3254</Typography>
//                 </Box>
//                 <Box sx={{ ml: 8, mt: 5 }}>
//                   <Box sx={{ width: 300, height: 100, backgroundColor: '#FFF0E6', mb: 2, borderRadius: 2 }}>
//                     <Typography component="h5" sx={{ ml: 14, color: 'black', fontWeight: 'bold', fontSize: 20, pt: 2 }}>Top 10</Typography>
//                     <Typography component="p" sx={{ ml: 11, color: 'black', fontSize: 14 }}>Position in Dribble</Typography>
//                     <Typography component="p" sx={{ ml: 9, color: 'grey', fontSize: 12 }}>20%increase from last week</Typography>
//                   </Box>
//                   <Box sx={{ width: 300, height: 100, backgroundColor: '#ECEAFE', mb: 3, borderRadius: 2 }}>
//                     <Typography component="h5" sx={{ ml: 16, color: 'black', fontWeight: 'bold', fontSize: 22, pt: 2 }}>26</Typography>
//                     <Typography component="p" sx={{ ml: 8, color: 'black', fontSize: 14 }}>New Employees Onboarded</Typography>
//                     <Typography component="p" sx={{ ml: 10, color: 'grey', fontSize: 12 }}>15%increase from last week</Typography>
//                   </Box>
//                   <Box sx={{ width: 300, height: 100, backgroundColor: '#E5F7ff', borderRadius: 2 }}>
//                     <Typography component="h5" sx={{ ml: 16, color: 'black', fontWeight: 'bold', fontSize: 20, pt: 2 }}>500</Typography>
//                     <Typography component="p" sx={{ ml: 8, color: 'black', fontSize: 14 }}>New Clients Approached</Typography>
//                     <Typography component="p" sx={{ ml: 9, color: 'grey', fontSize: 12 }}>5%increase from last week</Typography>
//                   </Box>
//                 </Box>
//               </Box>
//               <Box sx={{ display: 'flex' }}>
//                 <Box>
//                   <Box sx={{ width: 770, height: 410, mt: 5, border: "1px solid #E6E8EC", borderRadius: 2, ml: 3, }}>
//                     <Box sx={{ display: 'flex' }}>
//                       <Typography component="h6" sx={{ ml: 4, pt: 2, fontWeight: 'bold' }}>Project Deliveries</Typography>
//                       <Box sx={{ ml: 48, display: 'flex', mt: 3, gap: 1 }}>
//                         <Box>
//                           <img src="/Ellipse 1070.png" alt="docs" />
//                         </Box>
//                         <Typography component="p" sx={{ color: 'grey', fontSize: 12, }}>Archieved</Typography>
//                       </Box>
//                       <Box sx={{ ml: 6, display: 'flex', mt: 3, gap: 1 }}>
//                         <Box>
//                           <img src="/Ellipse 1070 (1).png" alt="docs" />
//                         </Box>
//                         <Typography component="p" sx={{ color: 'grey', fontSize: 12, }}>Target</Typography>
//                       </Box>
//                     </Box>
//                     <Box sx={{ ml: 8, mt: 5 }}>
//                       <img src="/Horizontal lines.png" alt="lines" />
//                       <img src="/Ellipse 1070.png" alt="docs" style={{ position: 'absolute', marginLeft: -280, marginTop: 55 }} />
//                       <Box sx={{
//                         display: 'flex', alignItems: 'center', width: 140, height: 80,
//                         backgroundColor: 'white', border: '1px solid', borderColor: '#E4E6E8', position: 'absolute', mt: -36, ml: 38
//                       }}>
//                         <Box sx={{ display: 'flex', ml: 2, mt: -4 }}>
//                           <img src="/Ellipse 1070.png" alt="docs" style={{ width: 10, height: 10, marginTop: 10 }} />
//                           <Typography component="p" sx={{ ml: 2, color: 'grey' }}>7 Projects</Typography>
//                         </Box>
//                         <Box sx={{ display: 'flex', ml: -12.3, mt: 4 }}>
//                           <img src="/Ellipse 1070 (1).png" alt="docs" style={{ width: 10, height: 10, marginTop: 10 }} />
//                           <Typography component="p" sx={{ ml: 2, color: 'grey' }}>5 Projects</Typography>
//                         </Box>
//                       </Box>
//                       <Box>
//                         <img src="/Vector 18.png" alt="lines" style={{ position: 'absolute', marginTop: -190 }} />
//                         <img src="/Vector 20.png" alt="lines" style={{ position: 'absolute', marginTop: -170, }} />
//                       </Box>
//                     </Box>
//                     <Box sx={{ position: 'absolute', mt: -34, ml: 4 }}>
//                       <Typography component="p" sx={{ color: 'grey', fontSize: 14 }}>12 <br /><br /> 10 <br /><br />8 <br /><br />
//                         6 <br /><br />4 <br /><br />2 <br /><br />0</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', gap: 8, ml: 4, mt: 2 }}>
//                       <Typography component="p" sx={{ color: 'grey', fontSize: 12 }}>Oct2021 </Typography>
//                       <Typography component="p" sx={{ color: 'grey', fontSize: 12 }}>Nov2021 </Typography>
//                       <Typography component="p" sx={{ color: 'grey', fontSize: 12 }}>Dec2021 </Typography>
//                       <Typography component="p" sx={{ color: 'grey', fontSize: 12 }}>Jan2022 </Typography>
//                       <Typography component="p" sx={{ color: 'grey', fontSize: 12 }}>Feb2022 </Typography>
//                       <Typography component="p" sx={{ color: 'grey', fontSize: 12 }}>Mar2022 </Typography>
//                     </Box>
//                   </Box>
//                 </Box>
//                 <Box sx={{ ml: 8, mt: 1 }}>
//                   <Box sx={{ display: 'flex' }}>
//                     <Box sx={{ mt: 4 }}>
//                       <Typography component="p" sx={{ fontWeight: 'bold' }}>Notifications </Typography>
//                     </Box>
//                     <Box sx={{ mt: 4, ml: 18 }}>
//                       <Typography component="p" sx={{ color: '#6956E5' }}>View All </Typography>
//                     </Box>
//                   </Box>
//                   <Box sx={{ width: 300, height: 60, backgroundColor: "#F9F9F9", mt: 2 }}>
//                     <img src="/Rectangle 774.png" alt="girl" style={{ marginLeft: 8, marginTop: 12, position: 'absolute' }} />
//                     <Typography component="p" sx={{ ml: 8, color: 'black', fontSize: 14, pt: 1 }}>Elle joined team developers</Typography>
//                     <Typography component="p" sx={{ ml: 8, color: 'grey', fontSize: 12 }}>04 April, 2021 | 04:00 PM</Typography>
//                   </Box>
//                   <Box sx={{ width: 300, height: 60, backgroundColor: "#F9F9F9", mt: 2 }}>
//                     <img src="/Rectangle 774 (2).png" alt="girl" style={{ marginLeft: 8, marginTop: 12, position: 'absolute' }} />
//                     <Typography component="p" sx={{ ml: 8, color: 'black', fontSize: 14, pt: 1 }}>Jenny joined team HR</Typography>
//                     <Typography component="p" sx={{ ml: 8, color: 'grey', fontSize: 12 }}>04 April, 2021 | 04:00 PM</Typography>
//                   </Box>
//                   <Box sx={{ width: 300, height: 60, backgroundColor: "#F9F9F9", mt: 2 }}>
//                     <img src="/Rectangle 774 (3).png" alt="girl" style={{ marginLeft: 8, marginTop: 12, position: 'absolute' }} />
//                     <Typography component="p" sx={{ ml: 8, color: 'black', fontSize: 14, pt: 1 }}>Adam got employee of the month</Typography>
//                     <Typography component="p" sx={{ ml: 8, color: 'grey', fontSize: 12 }}>03 April, 2021 | 02:00 PM</Typography>
//                   </Box>
//                   <Box sx={{ width: 300, height: 60, backgroundColor: "#F9F9F9", mt: 2 }}>
//                     <img src="/Rectangle 774 (4).png" alt="girl" style={{ marginLeft: 8, marginTop: 12, position: 'absolute' }} />
//                     <Typography component="p" sx={{ ml: 8, color: 'black', fontSize: 14, pt: 1 }}>Robert joined team design</Typography>
//                     <Typography component="p" sx={{ ml: 8, color: 'grey', fontSize: 12 }}>02 April, 2021 | 02:00 PM</Typography>
//                   </Box>
//                   <Box sx={{ width: 300, height: 60, backgroundColor: "#F9F9F9", mt: 2 }}>
//                     <img src="/Rectangle 774 (5).png" alt="girl" style={{ marginLeft: 8, marginTop: 12, position: 'absolute' }} />
//                     <Typography component="p" sx={{ ml: 8, color: 'black', fontSize: 14, pt: 1 }}>Elle joined team developers</Typography>
//                     <Typography component="p" sx={{ ml: 8, color: 'grey', fontSize: 12 }}>01 April, 2021 | 03:00 Pm</Typography>
//                   </Box>
//                 </Box>
//               </Box>
//          <div>
//       <h2>Team Strength</h2>
//       <p>Marketing: {data.teamStrength.marketing}</p>
//       <p>HR: {data.teamStrength.hr}</p>
//       <p>Developers: {data.teamStrength.developers}</p>
//       <p>Design: {data.teamStrength.design}</p>

//       <h2>Project Deliveries</h2>
//       <ul>
//         {data.projectDeliveries.map((p) => (
//           <li key={p.month}>
//             {p.month}: Achieved {p.achieved}, Target {p.target}
//           </li>
//         ))}
//       </ul>
//     </div>
//     </Layout>
//   );
// }


// Loyiha npm run dev ishga tushirilinadi va localhostga bosiladi.
// 1-vazifa pages/api/index.js faylga o’ting. Bu faylda siz index.js
// uchun kerakli ma’lumotlarni responseda qaytarib bering. 
// Bular “Teams Strength” va  “Project Deliveries” uchun kerakli ma’lumotlarni
// bitta object ichida yuborishingiz mumkin.
// 2-vazifa useEffect orqali so’rov yuborib ma’lumotlarni olishni mashq qiling.
// 3-vazifa getStaticProps funksiyasi orqali so’rov  yuborib ma’lumotlarni oling. 
// 4-vazifa pages/api/teams.js fayl oching. U faylda teamlarni qaytarib beradigan funksiya yozing.
// 5-vazifa getStaticProps funksiyasi orqali so’rov  yuborib teams bo’yicha ma’lumotlarni oling 
// va teams pageni quring.
// 6-vazifa pages/api/teams/[id].js fayl oching. Bu faylda, siz tanlangan team bo’yicha
// ma’lumotlarni qaytarib berishingiz kerak.7. Qaysidir team tanlganganda, pages/teams/[id].js 
// fayl ichida getServerSideProps orqali so’rov yuborib team a’zolari haqidagi ma’lumotlarni oling.
// Ularni ko’rsatib beruvchi JSX yozing.
