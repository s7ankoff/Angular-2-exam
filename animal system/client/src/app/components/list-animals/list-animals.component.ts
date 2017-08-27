import { Component, OnInit } from '@angular/core'

import { AnimalService } from '../../services/animal.service'
import { AuthService } from '../../services/auth.service'
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'list-animals',
  templateUrl: './list-animals.html'
})
export class ListAnimalsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
    private authService: AuthService) { }

  animals: Array<object> = []
  page: number = 1
  searchText: string = ''
  authenicated: boolean = false

  ngOnInit() {
    if (this.authService.isUserAuthenticated()) {
      this.authenicated = true
    }

    this.route
      .queryParams
      .subscribe(params => {
        this.page = +params['page'] || 1
        this.searchText = params['search']

        this.animalService.allAnimals(this.page, this.searchText)
          .subscribe(res => {
            this.animals = res

          })
      })
  }
  prevPage() {
    if (this.page === 1) {
      return
    }
    const url = this.getUrl(this.page - 1)

    this.router.navigateByUrl(url)
  }
  nextPage() {
    if (this.animals.length === 0 || this.animals.length < 10) {
      return
    }

    const url = this.getUrl(this.page + 1)

    this.router.navigateByUrl(url)
    this.router.navigateByUrl(`animals/all?page=${this.page + 1}`)
  }
  animalsearch() {
    this.router.navigateByUrl(`animals/all?search=${this.searchText}`)
  }

  private getUrl(page) {
    let url = `animals/all?page=${page}`
    if (this.searchText) {
      url += `$search=${this.searchText}`
    }
    return url
  }

}