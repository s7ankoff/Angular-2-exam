import { Injectable } from '@angular/core'
import { HttpService } from '../services/http.service'


@Injectable()

export class AnimalService {

  constructor(private httpService: HttpService) { }

  addAnimal(animal) {

    return this.httpService.post('animals/create', animal, true)
  }
  allAnimals(page = 1, search = null) {
    let url = `animals/all?page=${page}`

    if (search) {
      url += `&search=${search}`
    }
    return this.httpService.get(url)
  }

  searchAnimal(id) {
    return this.httpService.get(`animals/details/${id}`, true)
  }
  reactToAnimal(reaction, id) {
    return this.httpService.post(`animals/details/${id}/reaction`, reaction, true)
  }
  addComment(comment, id) {
    return this.httpService.post(`animals/details/${id}/comments/create`, comment, true)
  }
  getComments(id) {
    return this.httpService.get(`animals/details/${id}/comments`, true)
  }
  getAnimals() {
    return this.httpService.get('animals/mine', true)
  }
  deleteAnimal(id) {
    return this.httpService.post(`animals/delete/${id}`,{},true)
  }

}