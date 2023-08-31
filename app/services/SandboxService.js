
import { AppState } from '../AppState.js';
import { baseURL } from '../env.js'
import { SandboxGift } from '../models/SandboxGift.js';
import { Giftapi } from './GiftService.js'

// @ts-ignore
export const api = axios.create({
    baseURL,
    timeout: 8000,
    withCredentials: true
})
class SandboxService {

    async getGifts() {
        const res = await Giftapi.get('/gifts');
        console.log(res.data);
        let mappedArr = res.data.map(giftObj => new SandboxGift(giftObj))
        AppState.sandboxGifts = mappedArr
    }

    async prepareGift(giftId) {
        const gift = AppState.sandboxGifts.find(gift => gift.id == giftId)
        console.log('opening', giftId, gift)
        gift.isOpened = !gift.isOpened
        const res = await Giftapi.put(`api/gifts/${giftId}`, gift)
        console.log('GIFTWRAP CHECK', res.data)
        AppState.emit('myGifts')

    }
}

export const sandboxService = new SandboxService()