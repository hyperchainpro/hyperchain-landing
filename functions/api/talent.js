export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const { full_name, email, role, portfolio_url } = await request.json();
    
    if (!full_name || !email || !role) {
      return Response.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const { neon } = await import("@neondatabase/serverless");
    const sql = neon(env.DATABASE_URL);
    
    await sql`
      INSERT INTO talent_applications (id, full_name, email, role, portfolio_url, submitted_at)
      VALUES (gen_random_uuid(), ${full_name}, ${email}, ${role}, ${portfolio_url || null}, NOW())
    `;
    
    return Response.json({ success: true, message: "Lamaran berhasil dikirim!" });
  } catch (error) {
    return Response.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
