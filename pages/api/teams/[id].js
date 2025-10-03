import teams from "../../../Components/data/teams";

export default function handler(req, res) {
  const { id } = req.query;
  const team = teams.find((t) => String(t.id) === String(id));

  if (!team) {
    res.status(404).json({ message: "Team not found" });
    return;
  }

  res.status(200).json({ team });
}
