import db from "@/lib/db";

export async function POST(req) {
  const body = await req.json();
  const { name, dob, phone, department, roll } = body;

  try {
    const [result] = await db.execute(
      "INSERT INTO students (name, dob, phone, department, roll) VALUES (?, ?, ?, ?, ?)",
      [name, dob, phone, department, roll]
    );
    return Response.json({ message: "Student added", id: result.insertId });
  } catch (error) {
    console.error("DB error:", error);
    return Response.json({ error: "Failed to insert student" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [students] = await db.execute("SELECT * FROM students");
    return Response.json(students);
  } catch (error) {
    return Response.json({ error: "Failed to fetch students" }, { status: 500 });
  }
}
