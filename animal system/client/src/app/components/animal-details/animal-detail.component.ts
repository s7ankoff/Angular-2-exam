import { Component, OnInit, ViewContainerRef } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AnimalService } from "../../services/animal.service"
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'animal-details',
  templateUrl: './animal-details.html'
})

export class AnimalDetailsComponent implements OnInit {

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    public toastr: ToastsManager,
    vcr: ViewContainerRef) { this.toastr.setRootViewContainerRef(vcr) }

  animal: object = {}
  id: number = 0
  reactions = ['like', 'haha', 'love', 'angry', 'sad', 'wow']
  reaction: object = {}
  comment: object = {}
  comments = []

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        this.id = params['id']
        this.animalService.searchAnimal(this.id)
          .subscribe(animal => {
            this.animal = animal

          })
      })
    this.animalService.getComments(this.id)
      .subscribe(comments => {
        this.comments = comments
      })
  }

  react() {
    if (this.reaction['type'] == null) {
      this.toastr.error("Please select reaction", "Error")
      return
    }

    this.animalService.reactToAnimal(this.reaction, this.id)
      .subscribe(animal => {
        this.animalService.searchAnimal(this.id)
          .subscribe(animal => {
            this.animal = animal
          })
      })

  }
  addComment() {
    if (this.comment['message'] == null ||
      this.comment['message'] == ''
    ) {
      this.toastr.error("Please add comment", "Error")
      return
    }
    if (this.comment['message'].length < 10) {
      this.toastr.error("Comment must be at least 10chars", "Error")
      return
    }
    this.animalService.addComment(this.comment, this.id)
      .subscribe(animal => {
      })
    this.animalService.getComments(this.id)
      .subscribe(comments => {
        this.comments = comments
      })
  }
}