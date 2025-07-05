export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
};

export interface IBorrow {
  _id?: string;
  book: string | IBook; 
  quantity: number;      
  dueDate: string;  
  createdAt?: string;
  updatedAt?: string;
}
