import Form from "@/components/common/Form";
import ProductCard from "@/components/common/ProductCard";
import ImageUpload from "@/components/dashboard/ImageUpload";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useProductStore } from "@/store/productStore";
import { addProductFormElements } from "@/utils";
import { useEffect, useState } from "react";

const initialFormData = {
  title: "",
  description: "",
  price: "",
  salePrice: "",
  totalStock: "",
  category: "",
  brand: "",
  image: null,
};

const ProductsPage = () => {
  const [openCreateProduuctDialog, setOpenCreateProductDialog] =
    useState(false);

  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageloading, setImageLoading] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);

  const { addProduct, getAllProducts, products, updateProduct, deleteProduct } =
    useProductStore();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentEditedId !== null) {
        await updateProduct(currentEditedId, formData);
        setCurrentEditedId(null);
        setFormData(initialFormData);
        setOpenCreateProductDialog(false);
      } else {
        const newProduct = await addProduct({
          ...formData,
          image: uploadedImageUrl, // Ensure this is set correctly
        });
        console.log("Product added successfully:", newProduct);
        setOpenCreateProductDialog(false);
        setFormData(initialFormData);
      }

      // Close dialog and reset form after successful submission
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const isFormValid = () => {
    return Object.keys(formData)
      .filter((key) => key !== "salePrice") // Exclude salePrice from validation
      .every((key) => formData[key] !== "");
  };

  const handleProductDelete = (getCurrentProductId) => {
    if (getCurrentProductId !== null) {
      deleteProduct(getCurrentProductId);
    }
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  // console.log("products", products);

  return (
    <>
      <div className="mb-5 w-full flex justify-between">
        <div className="flex items-center justify-center">
          <span className="text-lg font-bold">
            Products ({products.length})
          </span>
        </div>
        <Button onClick={() => setOpenCreateProductDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products && products.length > 0
          ? products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                setCurrentEditedId={setCurrentEditedId}
                setOpenCreateProductDialog={setOpenCreateProductDialog}
                setFormData={setFormData}
                onDelete={handleProductDelete}
              />
            ))
          : null}
      </div>
      <Sheet
        open={openCreateProduuctDialog}
        onOpenChange={() => {
          setOpenCreateProductDialog(false);
          setFormData(initialFormData);
          setCurrentEditedId(null);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              {currentEditedId !== null ? "Update Product" : "Add Product"}
            </SheetTitle>
            <Separator />
            <SheetDescription>
              Add a new product or update an existing one.
            </SheetDescription>
          </SheetHeader>
          <ImageUpload
            file={imageFile}
            setFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoading={setImageLoading}
            imageloading={imageloading}
            isEditMode={currentEditedId !== null}
          />
          <div className="py-6">
            <Form
              formControls={addProductFormElements}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId !== null ? "Update" : "Add"}
              onSubmit={onSubmit}
              isBtnDisable={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProductsPage;
