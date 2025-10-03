import  Layout from "../Components/Layout/index";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://${context.req.headers.host}`;

  const res = await fetch(`${baseUrl}/api/teams/${id}`);
  const data = await res.json();

  return {
    props: {
      team: data.team || null, 
    },
  };
}

export default function TeamDetailPage({ team }) {
  if (!team) {
    return (
      <Layout>
        <h2>Team not found</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{team.name}</h1>
      <h3>Members: {team.membersCount}</h3>
      <ul>
        {team.members.map((member) => (
          <li key={member.id}>
            {member.name} — {member.role}
          </li>
        ))}
      </ul>
    </Layout>
  );
}