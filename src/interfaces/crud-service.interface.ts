export default interface ICrudService<T> {
  add(payload: T): Promise<T>;
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | undefined>;
  filterBy(searchParams: Partial<T>): Promise<T[]>;
  update(id: number, payload: T): Promise<number>;
  delete(id: number): Promise<number>;

  // getAll(): Promise<T[]>;
  // getById(id: number): Promise<T | undefined>;
  // getBy(searchParams: any): Promise<T[]>;
  // add(payload: T): Promise<T>;
  // update(id: number, payload: T): Promise<number>;
  // delete(id: number): Promise<number>;
}
