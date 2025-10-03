"use client";
import React from "react";
import { useParams } from "next/navigation";
import Layout from "../../../Components/Layout";
import teams from "../../../Components/data/teams";

export default function TeamDetailPage() {
  const { id } = useParams();
  const team = teams.find((t) => t.id === id);

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