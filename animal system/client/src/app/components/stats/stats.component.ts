import { Component,OnInit } from '@angular/core'
import { StatsService } from '../../services/stats.service'


@Component({
  selector: 'stats',
  templateUrl: './stats.html'
})
export class StatsComponent implements OnInit{

  constructor(private statsService: StatsService) { }

  stats={}
  ngOnInit(){
    this.statsService.getStats()
    .subscribe(res=>{
      this.stats=res
    })
  }

}