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
