import * as z from "zod"

export const cartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(0),
})

export const checkoutItemSchema = cartItemSchema.extend({
  price: z.number()
})

export const deleteCartItemSchema = z.object({
  productId: z.string()
}) 

export const deleteCartItemsSchema = z.object({
  productId: z.array(z.string()),
}) 

export const updateCartItemSchema = z.object({
  quantity: z.number().min(0).default(1)
})