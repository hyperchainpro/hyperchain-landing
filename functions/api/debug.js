export async function onRequestPost(context) {
  const { request, env } = context;
  const text = await request.text();
  const dbUrl = env.DATABASE_URL || "NOT SET";
  return Response.json({
    received_body: text,
    body_length: text.length,
    db_url_set: dbUrl !== "NOT SET",
    db_url_prefix: dbUrl.substring(0, 20),
    content_type: request.headers.get("content-type"),
  });
}