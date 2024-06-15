import { z } from 'zod'

const DeckDataSchema = z.object({
    uuid: z.string({
        invalid_type_error: 'Deck UUID must be a string',
        required_error: 'Deck UUID is required'
    }),
    name: z.string({
        invalid_type_error: 'Deck name must be a string',
        required_error: 'Deck name is required'
    }),
    description: z.string({
        invalid_type_error: 'Deck description must be a string'
    })
})

export function validateDataDeck(object){
    return DeckDataSchema.safeParse(object)
}
