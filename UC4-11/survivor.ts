import { level } from "./level";

export class survivor {
    protected Level : level

    constructor (levelConst:level = level.blue){
        this.Level = levelConst
    }

    getlevel():level {
        return this.Level
    }
}