export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ product_id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const product_id = (await params).product_id


  return <h1>My Page : {product_id}</h1>
}