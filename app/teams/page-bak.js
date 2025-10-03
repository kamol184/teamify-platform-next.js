import Layout from "../../Components/Layout";
import teams from "../../Components/data/teams";
import Link from "next/link";


export default function Teams() {
  return (
    <Layout>
      <h1>Teams</h1>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link href={`/teams/${team.id}`}>
              {team.name} — {team.membersCount} members
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

