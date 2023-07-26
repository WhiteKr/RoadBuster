import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { Ft10 } from './Ft10';
import { User } from 'discord.js';

@Entity()
export class UserData {

    @ObjectIdColumn()
    id: ObjectId = new ObjectId;

    @Column()
    discord!: User;

    @Column()
    winCount: number = 0;

    @Column()
    loseCount: number = 0;

    @Column()
    ft10History: Ft10[] = [];

}