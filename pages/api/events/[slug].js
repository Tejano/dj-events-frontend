const { events } = require('./data.json');
export default function handler(req, res) {
  const evt = events.filter((ev) => ev.slug === req.query.slug);
  if (req.method === 'Get') {
    res.status(200).json(evt);
  } else {
    req.setHeater('Allow', ['Get']);
    req.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
