import { Injectable } from '@nestjs/common';
import { Book } from './book.interface'

@Injectable()
export class BooksService {
    private books: Book[] = [];

    findAll(): Book[] {
        return this.books
    }

    findById(id: number): Book {
        return this.books.find(book => book.id === id)
    }

    create(book: Book): void {
        this.books.push(book)
    }

    update(id: number, book: Book): void {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
          this.books[index] = book;
        }
      }

      remove(id: number): void {
         this.books = this.books.filter(book => book.id !== id)
      }
}
