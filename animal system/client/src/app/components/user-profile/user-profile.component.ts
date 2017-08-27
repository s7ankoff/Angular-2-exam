import { Component, OnInit, ViewContainerRef } from '@angular/core'
import { AnimalService } from '../../services/animal.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.html'
})

export class UserProfileComponent implements OnInit {

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private animalSerivce: AnimalService) { this.toastr.setRootViewContainerRef(vcr) }
  animals = []


  ngOnInit() {

    this.animalSerivce.getAnimals()
      .subscribe(animals => {
        this.animals = animals
      })
  }

  deleteAnimal(id) {

    this.animalSerivce.deleteAnimal(id)
      .subscribe(respone =>
        this.animalSerivce.getAnimals()
          .subscribe(animals => {
            this.animals = animals
          }))
    this.toastr.success("Animal deleted", "Success!")
  }

}