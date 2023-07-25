import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';
import { Ft10 } from './Ft10';

@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectId = new ObjectId;

    @Column()
    discordId!: string;

    @Column()
    name!: string;

    @Column()
    winCount: number = 0;

    @Column()
    loseCount: number = 0;

    @Column()
    ft10History: Ft10[] = [];

}