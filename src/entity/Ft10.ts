import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ft10 {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    winnerName!: string;

    @Column()
    loserName!: string;

    @Column()
    loserScore!: number;

}