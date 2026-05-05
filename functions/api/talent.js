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
    const { full_name, email, role, portfolio_url } = await request.json();
    if (!full_name || !email || !role) return Response.json({ error: "Data tidak lengkap" }, { status: 400 });
    await neonSql(env.DATABASE_URL,
      "INSERT INTO talent_applications (id, full_name, email, role, portfolio_url, submitted_at) VALUES (gen_random_uuid(), $1, $2, $3, $4, NOW())",
      [full_name, email, role, portfolio_url || null]
    );
    return Response.json({ success: true, message: "Lamaran berhasil dikirim!" });
  } catch (err) {
    return Response.json({ error: "Terjadi kesalahan server", detail: err.message }, { status: 500 });
  }
}