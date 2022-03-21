import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Hero } from '../model/hero'

import { HeroDetailService } from './hero-detail.service'
import { FileDetail } from '@hcs-hybrid-demo/old-pure'

// import htmlTemplate from './hero-detail.component.html'
// import style from './hero-detail.component.less'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less'],
  // template: htmlTemplate,
  // styles: [style],
  providers: [HeroDetailService],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero

  files: FileDetail[] = [{ fileName: 'file1' }, { fileName: 'file2' }]

  constructor(
    private heroDetailService: HeroDetailService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((pmap) => this.getHero(pmap.get('id')))
  }

  save(): void {
    this.heroDetailService.saveHero(this.hero).subscribe(() => this.gotoList())
  }

  cancel() {
    this.gotoList()
  }

  gotoList() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  private getHero(id: string | null): void {
    if (!id) {
      this.hero = { id: 0, name: '' } as Hero

      return
    }

    this.heroDetailService.getHero(id).subscribe((hero) => {
      if (hero) {
        this.hero = hero
      } else {
        this.gotoList()
      }
    })
  }
}
