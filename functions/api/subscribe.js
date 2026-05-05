async function neonSql(dbUrl, query, params = []) {
  const u = new URL(dbUrl);
  const host = u.hostname;
  const connStr = dbUrl.split("?")[0] + "?sslmode=require";

  const res = await fetch(`https://${host}/sql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Neon-Connection-String": connStr,
    },
    body: JSON.stringify({ query, params }),
  });

  const data = await res.json();
  if (data.message) throw new Error(data.message);
  return data;
}
export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const body = await request.json();
    const { email, source = "newsletter" } = body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Email tidak valid" }, { status: 400 });
    }
    await neonSql(env.DATABASE_URL,
      "INSERT INTO subscribers (id, email, source, subscribed_at) VALUES (gen_random_uuid(), $1, $2, NOW()) ON CONFLICT (email) DO NOTHING",
      [email, source]
    );
    return Response.json({ success: true, message: "Berhasil mendaftar!" });
  } catch (err) {
    return Response.json({ error: "Terjadi kesalahan server", detail: err.message }, { status: 500 });
  }
}