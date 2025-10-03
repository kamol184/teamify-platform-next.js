import Layout from "../Components/Layout";
import teams from "../Components/data/teams";

export async function getStaticProps() {

  return {
    props: {
      teams, 
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