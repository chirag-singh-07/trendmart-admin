import { useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api/admin";
const ImageUpload = ({
  file,
  setFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  imageloading,
  setImageLoading,
  isEditMode,
}) => {
  const inputRef = useRef(null);

  const handleImageFileChamge = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    if (file) {
      setFile(file);
    }
  };

  const handleDrahOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
    inputRef.current.click();
  };

  const handleRemoveImage = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  };

  const uploadImageToBackend = async () => {
    setImageLoading(true);
    const formData = new FormData();
    formData.append("my_file", file);

    try {
      const response = await axios.post(
        `${API_URL}/product/upload-image`,
        formData
      );

      if (response.data.success) {
        setUploadedImageUrl(response.data.data.imageUrl);
        // setFile(null);
        // if (inputRef.current) {
        //   inputRef.current.value = null;
        // }
        setImageLoading(false);
        toast.success("Image Uploaded");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (file !== null) {
      uploadImageToBackend();
    }
  }, [file]);

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDrahOver}
        onDrop={handleDrop}
        className={`${
          isEditMode ? "opacity-60" : ""
        } border-2 border-dashed rounded-lg p-4`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChamge}
          disabled={isEditMode}
        />
        {!file ? (
          <Label
            htmlFor="image-upload"
            className={` ${
              isEditMode ? "cursor-not-allowed" : "cursor-pointer"
            } flex flex-col items-center justify-center h-32`}
          >
            <UploadCloudIcon className="size-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image </span>
          </Label>
        ) : imageloading ? (
          <Skeleton
            className={`h-10 bg-gray-300
            `}
          />
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="size-8 text-primary mr-2" />
            </div>
            <p className="text-sm font-medium">{file.name}</p>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="size-4" />
              <span className="sr-only">remove file</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
