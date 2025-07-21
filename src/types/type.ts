type User = {
  username: string;
  email: string;
  password: string;
  role: "USER" | "admin"; // Define roles as needed
};

type LoginDto = {
  username: string;
  password: string;
};

type Category = {
  id: string;
  name: string;
  count: number;
};

type Clothe = {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  images: { url: string }[];
};
