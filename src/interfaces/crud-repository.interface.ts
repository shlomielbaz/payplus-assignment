export default interface ICrudRepository<T> {
  add(payload: T): Promise<T>;
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | undefined>;
  filterBy(searchParams: Partial<T>): Promise<T[]>;
  update(payload: T): Promise<number>;
  delete(id: number): Promise<number>;
  deleteAll(): Promise<number>;
}
