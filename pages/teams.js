import Layout from "../Components/Layout";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/teams");
  const data = await res.json();

  return {
    props: {
      teams: data.teams, 
    },
  };
}

export default function TeamsPage({ teams }) {
  return (
    <Layout>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <h2>{team.name}</h2>
            <p>Members count: {team.membersCount}</p>
            <ul>
              {team.members.map((member) => (
                <li key={member.id}>
                  {member.name} — {member.role}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  );
}