import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity()
export class Ft10 {

    @ObjectIdColumn()
    id: ObjectId = new ObjectId;

    @Column()
    winnerName!: string;

    @Column()
    winnerScore!: number;

    @Column()
    loserName!: string;

    @Column()
    loserScore!: number;

    @Column()
    date!: Date;

}