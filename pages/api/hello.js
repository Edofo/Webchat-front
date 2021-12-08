// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(process.env.NEXTAUTH_URL)
  res.status(200).json({ name: process.env.EMAIL_SERVER })
}
