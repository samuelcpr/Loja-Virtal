import * as zod from 'zod'

export const checkoutSchema = zod.object({
  cep: zod.string().max(9).min(9),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string().optional(),
  city: zod.string().min(2),
  estate: zod.string().min(2).max(2),
  neighborhood: zod.string().min(1),
  payment: zod.enum(['debit', 'credit', 'money']),
})

export type CheckoutSchemaType = zod.infer<typeof checkoutSchema>
