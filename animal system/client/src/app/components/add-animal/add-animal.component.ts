import { Component, ViewContainerRef } from '@angular/core'
import { AddAnimalModel } from './add-animal.model'
import { AnimalService } from '../../services/animal.service'
import { Router } from '@angular/router'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'add-animal',
  templateUrl: "./add-animal.html"
})

export class AddAnimalComponent {

  constructor(
    private animalService: AnimalService,
    private router: Router,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
  ) {
    this.toastr.setRootViewContainerRef(vcr)
  }

  animal: AddAnimalModel = new AddAnimalModel()

  addAnimal() {
    if (this.animal.name.length < 3) {
      this.toastr.error('Name must be at least 3 chars!', 'Error')
      return
    }
    if (this.animal.age < 0 || this.animal.age > 100) {
      this.toastr.error('Age must be between 0 and 100!', 'Error')
      return
    }
    if (this.animal.color.length < 3) {
      this.toastr.error('Color must be at least 3 chars!', 'Error')
      return
    }
    if (this.animal.price < 0) {
      this.toastr.error(`Price can't be negative number!`, 'Error')
      return
    }

    this.animalService.addAnimal(this.animal)
      .subscribe(res => {
       
        if (res.success) {
          this.router.navigateByUrl('animals/all')
        }

        if (!res.success) {
          this.toastr.error('Error', `${res.errors[Object.keys(res.errors)[0]]}`)

        }
      })
  }

}