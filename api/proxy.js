export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'No URL provided' });
  try {
    const response = await fetch(decodeURIComponent(url));
    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ contents: text });
  } catch (e) {
    res.status(500).json({ error: 'Fetch failed' });
  }
}
:thumbsup:
Click to react
:underage:
Click to react
:100:
Click to react
Add Reaction
Edit
Forward
More

Message greateros's Group
