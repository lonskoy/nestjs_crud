import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import {BooksService} from './books.service'
import {Book} from './book.interface'

@Controller('books')
export class BooksController {
    constructor (private readonly booksService: BooksService ) {}

    @Get() 
        findAll(): Book[] {
            return this.booksService.findAll();
        }
    
    @Get(':id')
        findOne(@Param('id') id: string): Book {
            return this.booksService.findById(Number(id));
        }

    @Post() 
        create(@Body() book: Book): void {
            this.booksService.create(book)
        
    }

    @Put(':id')
        update(@Param('id') id: string, @Body() book:Book): void {
            this.booksService.update(Number(id), book)
        }

    @Delete(':id')
        remove(@Param('id') id: string): void {
            this.booksService.remove(Number(id))
        }
 

}
