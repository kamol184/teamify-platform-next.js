import teams from "../../Components/data/teams";

export default function handler(req, res) {
    console.log(teams);
  res.status(200).json({ teams });
}