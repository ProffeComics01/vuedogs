export default class Item {
    constructor(public id: number, public name: string,
                public description: string, public type: string, public done: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.done = done;
    }

}
