export async function GET() {
  const menu = [
    { id: 1, title: 'Page 1' },
    { id: 2, title: 'Page 2' },
    { id: 3, title: 'Page 3' },
    { id: 4, title: 'Page 4' },
    { id: 5, title: 'Page 5' },
  ];

  return Response.json(menu);
}
