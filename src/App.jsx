import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export const revalidate = 30

const App = () => {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
};
export default App;
