export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Fetch data from an external API using Axios
      //   const response = await axios.get("https://dev.to/api/articles");
      //   const data = response.data;
      // Send the data as a JSON response
      //   res.status(200).json(data);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
