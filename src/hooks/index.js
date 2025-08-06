import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "9miv8vg57t08",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((project) => {
        const { title, url, image } = project.fields;
        const id = project.sys.id;
        const img = `https:${image?.fields?.file?.url}`;
        return { id, title, url, img };
      });
      setProjects(projects);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
