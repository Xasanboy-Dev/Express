import { Request, Response } from "express";
import { Users } from "../Users/Users";
let other = Users
export function GetMethod(req: Request, res: Response) {
    res.status(200).json(other)
}


export function PostMethod(req: Request, res: Response) {
    let body = req.body
    let newUser = {
        name: "Hello",
        surname: "Hello",
        age: 12,
        hasMarried: true,
        id: 15
    }
    if (body.name !== undefined && body.age !== undefined && body.surname !== undefined && body.hasMarried !== undefined) {
        let arr: any[] = []
        for (let r in other) {
            let d = other[r]
            if (d.age == body.age && d.hasMarried == body.hasMarried && d.name == body.name && d.surname == body.surname) {
                arr.push(d)
            } newUser["name"] = body.name
            newUser["surname"] = body.surname
            newUser["age"] = body.age
            newUser["hasMarried"] = body.hasMarried
            newUser["id"] = other[other.length - 1] !== undefined ? other[other.length - 1].id + 1 : 0
        }
        if (arr.length == 0) {
            other.push(newUser)
            return res.status(201).send("Your accound has created!")
        }
    }
    res.status(400).send("In your DATA has a problem")
}

export function DeleteMethod(req: Request, res: Response) {
    let id = req.params.id
    if (+id > other.length || +id <= 0) {
        return res.send("In your id have a problem")
    } else {
        other = other.filter(value => value.id !== +id)
        res.status(201).send("Removed succesfullly")
    }
}

export function EditMethod(req: Request, res: Response) {
    let id = req.params.id
    let body = req.body
    for (let r in other) {
        if (other[r].id === +id) {
            let d = other[r]
            d.age = body.age !== undefined ? body.age : d.age
            d.surname = body.surname !== undefined ? body.surname : d.surname
            d.hasMarried = body.hasMarried !== undefined ? body.hasMarried : d.hasMarried
            d.name = body.name !== undefined ? body.name : d.name
            return res.status(201).send("Edited succesfully")
        }
    }
    res.status(400).send("In your DATA has a problem!")
}