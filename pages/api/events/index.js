const { events } = require('./data.json');
export default function handler(req, res) {
  if (req.method === 'Get') {
    res.status(200).json(events);
  } else {
    req.setHeater('Allow', ['Get']);
    req.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
