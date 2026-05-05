export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const { email, source = "newsletter" } = await request.json();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Email tidak valid" }, { status: 400 });
    }

    const { neon } = await import("@neondatabase/serverless");
    const sql = neon(env.DATABASE_URL);
    
    await sql`
      INSERT INTO subscribers (id, email, source, subscribed_at)
      VALUES (gen_random_uuid(), ${email}, ${source}, NOW())
      ON CONFLICT (email) DO NOTHING
    `;
    
    return Response.json({ success: true, message: "Berhasil mendaftar!" });
  } catch (error) {
    return Response.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
