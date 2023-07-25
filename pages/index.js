import fs from "fs/promises";
import path from "path";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    // props: {
    //   products: [
    //     { id: "p1", title: "Product 1" },
    //     { id: "p2", title: "Product 2" },
    //     { id: "p3", title: "Product 3" },
    //   ],
    // },
    props: {
      products: data.products
    },
  };
}

export default HomePage;
