import { Product, Products, UnitProduct } from "./product.interface";
import { v4 as random } from "uuid";
import fs from "fs";
import  {Request} from 'express'
let products: Products = loadProducts();

function loadProducts(): Products {
  try {
    const data = fs.readFileSync("./products.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(`Error ${error}`);
    return {};
  }
}

function saveProducts() {
  try {
    fs.writeFileSync("./products.json", JSON.stringify(products), "utf-8");
    console.log("Produto salvo com Sucesso!");
  } catch (error) {
    console.log("Error", error);
  }
}

export const findAll = async (req: Request): Promise<UnitProduct[]> => {
    const category = req.query.category as string;
  // Se o parâmetro de categoria foi fornecido, filtre os produtos por categoria.
  if (category) {
    return Object.values(products).filter(
      (product) => product.category === category
    );
  }
  // Caso contrário, retorne todos os produtos.
  return Object.values(products);
};

export const findOne = async (id: string): Promise<UnitProduct> => products[id];

export const create = async (
  productInfo: Product
): Promise<null | UnitProduct> => {
  let id = random();

  let product = await findOne(id);

  while (product) {
    id = random();
    await findOne(id);
  }

  products[id] = {
    id: id,
    ...productInfo,
  };

  saveProducts();

  return products[id];
};

export const update = async (
  id: string,
  updateValues: Product
): Promise<UnitProduct | null> => {
  const product = await findOne(id);

  if (!product) {
    return null;
  }

  products[id] = {
    id,
    ...updateValues,
  };

  saveProducts();

  return products[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const product = await findOne(id);

  if (!product) {
    return null;
  }

  delete products[id];

  saveProducts();
};
