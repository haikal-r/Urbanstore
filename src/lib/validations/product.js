import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const productSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must contain at least 3 character(s)",
    })
    .max(50, {
      message: "Name must contain at most 50 character(s)",
    }),
  description: z
    .string()
    .min(10, {
      message: "DName must contain at least 10 character(s)",
    })
    .max(500, {
      message: "Description must contain at most 500 character(s)",
    })
    .optional(),
  stock: z.coerce
    .number({
      required_error: "Price must be filled",
    })
    .min(1, {
      message: "Price must be greater than or equal to 1",
    }),
  category: z.string().min(1, { message: "Category is required" }),
  price: z.coerce
    .number({
      message: "Price must be filled",
    })
    .min(1000, {
      message: "Price must be greater than or equal to Rp 1.000",
    })
    .max(100000000, {
      message: "Price must be lower than or equal to Rp 100.000.000",
    }),
  images: z.array(
    z.object({
      file: z.instanceof(File)
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
        {
          message: "Invalid image format. Only JPEG, JPG, PNG, and WEBP are allowed.",
        }
      )
      .refine(
        (file) => file.size <= MAX_FILE_SIZE,
        {
          message: "File size should not exceed 5MB.",
        }
      )
    }) 
  ),
});
