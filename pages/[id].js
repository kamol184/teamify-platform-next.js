import Layout from "../../Components/Layout";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`http://localhost:3000/api/teams/${id}`);
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