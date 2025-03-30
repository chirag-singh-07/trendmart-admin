import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ProductCard = ({
  product,
  setCurrentEditedId,
  setOpenCreateProductDialog,
  setFormData,
  onDelete,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    onDelete(product.id); // Call the parent function to delete the product
    setIsDialogOpen(false); // Close the dialog after deletion
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-lg font-bold mb-2 mt-2">{product.title}</h2>
          <div className="flex items-center justify-between mb-2">
            <span
              className={` ${
                product?.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-bold">${product?.salePrice}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button
            onClick={() => {
              setCurrentEditedId(product._id);
              setOpenCreateProductDialog(true);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => setIsDialogOpen(true)}>Delete</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className={`p-1`}>
                <DialogTitle className="mb-2">Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  this product from the system.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className={``}>
                <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button
                  onClick={handleDelete}
                  className="bg-red-500 text-white mb-4"
                >
                  Confirm Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;
