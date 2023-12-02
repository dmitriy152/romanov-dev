import Cover from "@/Components/Blocks/Cover/Cover";
import About from "@/Components/Blocks/About/About";
import MyProject from "@/Components/Blocks/MyProject/MyProject";
import Form from "@/Components/Blocks/Form/Form";
import Price from "@/Components/Blocks/Price/Price";
import Skills from "@/Components/Blocks/Skills/Skills";
import Charts from "@/Components/Blocks/Charts/Charts";

export default function Home() {
  return (
    <>
      <Cover />
      <About/>
      <Skills />
      <MyProject/>
      <Charts />
      <Price/>
      <Form/>
    </>
  )
}
