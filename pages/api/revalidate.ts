export default async function handler(req: any, res: any) {
  await res.revalidate("/products");

  const pathToRevalidate = `/${
    req.body?.record?.id || req.body?.old_record?.id
  }`;
  await res.revalidate(pathToRevalidate);
  return res.json({ revalidated: true });
}
