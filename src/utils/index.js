import {
  LayoutDashboard,
  PackageCheck,
  Settings,
  ShoppingBasket,
  User,
} from "lucide-react";

export const navLinks = [
  {
    name: "Mens",
    path: "/collections",
    lebel: "Mens",
  },
  {
    name: "Womens",
    path: "/collections",
    lebel: "Womens",
  },
  {
    name: "Kids",
    path: "/collections",
    lebel: "Kids",
  },
  {
    name: "Accessories",
    path: "/collections",
    lebel: "Accessories",
  },
];

export const SidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/dashboard/orders",
    icon: PackageCheck,
  },
  {
    id: "products",
    label: "Products",
    path: "/dashboard/products",
    icon: ShoppingBasket,
  },
  { id: "users", label: "Users", path: "/dashboard/users", icon: User },
  {
    id: "settings",
    label: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "Men", label: "Men" },
      { id: "Women", label: "Women" },
      { id: "Footwear", label: "Footwear" },
      { id: "Accessories", label: "Accessories" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "Adidas", label: "Adidas" },
      { id: "Nike", label: "Nike" },
      { id: "Puma", label: "Puma" },
      { id: "Reebok", label: "Reebok" },
      { id: "Vans", label: "Vans" },
      { id: "Levi's", label: "Levi's" },
      { id: "Zara", label: "Zara" },
      { id: "Other", label: "Other" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional) ",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];
