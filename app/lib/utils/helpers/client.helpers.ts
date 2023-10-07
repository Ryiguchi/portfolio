export const baseUrl = 'http://localhost:3000';
export const projectImagesUrl = `${baseUrl}/images/projects`;

export const fetchContent = async (contentName: string) => {
  const res = await fetch(`${baseUrl}/api/content/${contentName}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data.data;
};
