export default interface ICrudRepository<T> {
  save(payload: T): Promise<T>;
  retrieveAll(): Promise<T[]>;
  filterBy(searchParams: any): Promise<T[]>;
  retrieveById(id: number): Promise<T | undefined>;
  update(payload: T): Promise<number>;
  delete(id: number): Promise<number>;
  deleteAll(): Promise<number>;
}
