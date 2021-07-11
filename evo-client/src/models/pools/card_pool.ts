import { DefaultFacingOnAddType } from "../../types/game/default_facing_on_add"
import shuffle from "../../util/arrays/shuffle"
import { Card } from "../game_components/card"

export class CardPool {
    name: string
    cards: Card[]
    defaultFacingOnAdd: DefaultFacingOnAddType

    constructor(
        name: string,
        cards: Card[] = [],
        defaultFacingOnAdd: DefaultFacingOnAddType = DefaultFacingOnAddType.UNCHANGED
    ) {
        this.name = name
        this.cards = []
        this.defaultFacingOnAdd = defaultFacingOnAdd

        // Handle initial card facing
        cards.forEach(card => this.addCardToBottom(card))
    }

    shuffle = () => {
        this.cards = shuffle(this.cards)
    }

    addCardToTop = (card: Card, faceup?: boolean): void => {
        this.cards = [this.setCardFaceOnAdd(card, faceup), ...this.cards]
    }

    addCardToBottom = (card: Card, faceup?: boolean): void => {
        this.cards = [...this.cards, this.setCardFaceOnAdd(card, faceup)]
    }

    draw = (): Card => {
        const card = this.cards.shift()
        if (card) {
            return card
        }
        throw new Error("Cannot draw from an empty card pool")
    }

    drawFrom = (sourcePool: CardPool, count = 1) => {
        for (let i = 0; i < count; i++) {
            this.addCardToTop(sourcePool.draw())
        }
    }

    remove = (card: Card): boolean => {
        return this.removeByUuid(card.uuid)
    }

    removeByUuid = (uuidToRemove: string): boolean => {
        let modified = false
        const newCards = this.cards.filter(({ uuid }) => {
            modified = modified || uuid === uuidToRemove
            return uuid !== uuidToRemove
        })

        this.cards = newCards
        return modified
    }

    // Util
    size = (): number => {
        return this.cards.length;
    }

    canDraw = (): boolean => {
        return this.size() > 0;
    }

    setCardFaceOnAdd = (cardToAdd: Card, faceUp?: boolean): Card => {
        if (faceUp === undefined) {
            switch (this.defaultFacingOnAdd) {
                case DefaultFacingOnAddType.FACE_UP:
                    cardToAdd.setFaceUp()
                    return cardToAdd
                case DefaultFacingOnAddType.FACE_DOWN:
                    cardToAdd.setFaceDown()
                    return cardToAdd
                case DefaultFacingOnAddType.UNCHANGED:
                    return cardToAdd
            }
        } else if (faceUp) {
            cardToAdd.setFaceUp()
            return cardToAdd
        } else {
            cardToAdd.setFaceDown()
            return cardToAdd
        }
    }

    // Alias functions
    discard = (card: Card): boolean => {
        return this.remove(card)
    }
}