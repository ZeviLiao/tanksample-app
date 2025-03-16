export const fakeMenuData = [
  { id: 1, title: "Page 1", path: "/page1" },
  { id: 2, title: "Page 2", path: "/page2" },
  { id: 3, title: "Page 3", path: "/page3" },
  { id: 4, title: "Page 4", path: "/page4" },
  { id: 5, title: "Page 5", path: "/page5" },
];

// 模擬 API 延遲
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// 模擬 fetch menu API
export const fetchMenu = async () => {
  await delay(1000); // 模擬 1 秒延遲
  return {
    data: fakeMenuData.map((item) => ({
      id: item.id.toString(),
      title: item.title,
      path: item.path,
    })),
  };
};