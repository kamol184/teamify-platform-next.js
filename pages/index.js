import Layout from "../Components/Layout";
import data from "../Components/data/index";

export async function getStaticProps() {

  // const baseUrl = process.env.VERCEL_URL
  // ? `https://${process.env.VERCEL_URL}`
  // : "http://localhost:3000";

  // const res = await fetch(`${baseUrl}/api/index`);
  // const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <h2>Team Strength</h2>
      <p>Marketing: {data.teamStrength.marketing}</p>
      <p>HR: {data.teamStrength.hr}</p>
      <p>Developers: {data.teamStrength.developers}</p>
      <p>Design: {data.teamStrength.design}</p>

      <h2>Project Deliveries</h2>
      <ul>
        {data.projectDeliveries.map((p) => (
          <li key={p.month}>
            {p.month}: Achieved {p.achieved}, Target {p.target}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// 1-vazifa Kodlarni githubga yuklang.
// 2-vazifa Build qiling, xatolarni to’g’irlab, gitga push qiling.
// 3-vazifa Loyihani netlifyga deploy qiling.
// 4-vazifa Loyihani vercelga deploy qiling.

// Ko'chirib olish uchun materiallar bo'limida API'lar bilan ishlash
// bo'yicha video qo'llanma berilgan. Mana shu video qo'llanmani 
// ko'rib chiqishingizni va uni oxirida berilgan topshiriqni
// bajarib qo'yishingizni so'raymiz. (Albatta, Ixtiyoriy)

// Api'lar bilan ishlash
// Foydali linklar  https://youtu.be/J_guLlhMez4