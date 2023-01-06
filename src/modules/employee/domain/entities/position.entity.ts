import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Position {
  @PrimaryGeneratedColumn({type: 'int'})
  id: number

  @Column({name: 'first_name', type: 'varchar'})
  firstName: string

  @Column({name: 'last_name', type: 'varchar'})
  lastName: string

  @Column({name: 'email', type: 'varchar'})
  email: string

  @CreateDateColumn({name: 'created_at', type: 'datetime'})
  createdAt: Date

  @UpdateDateColumn({name: 'updated_at', type: 'datetime'})
  updatedAt: Date

  @DeleteDateColumn({name: 'deleted_at', type: 'datetime'})
  deletedAt: Date
}