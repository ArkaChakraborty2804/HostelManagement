import db from "@/lib/db";

export async function POST(req) {
  const body = await req.json();
  const { name, room, issue, details } = body;

  try {
    const [result] = await db.execute(
      "INSERT INTO complaints (name, room, issue, details) VALUES (?, ?, ?, ?)",
      [name, room, issue, details]
    );
    return Response.json({ message: "Complaint submitted", id: result.insertId });
  } catch (error) {
    console.error("DB error:", error);
    return Response.json({ error: "Failed to submit complaint" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [complaints] = await db.execute("SELECT * FROM complaints");
    return Response.json(complaints);
  } catch (error) {
    return Response.json({ error: "Failed to fetch complaints" }, { status: 500 });
  }
}
