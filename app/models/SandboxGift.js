import { sandboxService } from "../services/SandboxService.js"
import { Pop } from "../utils/Pop.js"
export class SandboxGift {

    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.isOpened = data.opened
        this.creatorId = data.creatorId

    }

    get sandboxTemplate() {
        return `
        <section class="row justify-content-around">
        <div class="col-3 py-3"><img class="img-fluid" src="${this.url}" alt="MEMES GO HERE"/>
        <button onclick="app.SandboxController.prepareGift('${this.id}')">CLICK TO WRAP</button>
        </div>
            <div class="col-3"><span>${this.tag}</span></div>
        </section>`
    }


}
console.log('this is the Sandbox Model')