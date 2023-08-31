
// @ts-ignore
export const Giftapi = axios.create({
    baseURL: 'https://sandbox.codeworksacademy.com/api',
    timeout: 8000,
    withCredentials: true
})
class GiftService {


}

export const giftService = new GiftService()