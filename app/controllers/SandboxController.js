import { AppState } from "../AppState.js"
import { SandboxGift } from "../models/SandboxGift.js"
import { sandboxService } from "../services/SandboxService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _DrawGifts() {
    console.log('DRAWING FROM DRAWGIFTS')
    let gift = AppState.sandboxGifts
    let content = ''
    gift.forEach(gift => content += gift.sandboxTemplate)
    setHTML('sandbox-content', content)
}

export class SandboxController {
    constructor() {
        console.log('this is the sandbox controller')
        this.getGifts()
        AppState.on('sandboxGifts', _DrawGifts)
    }

    async getGifts() {
        try {
            await sandboxService.getGifts()
        } catch (error) {
            Pop.error(error)
        }
    }

    async prepareGift(giftId) {
        try {
            await sandboxService.prepareGift(giftId)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}
