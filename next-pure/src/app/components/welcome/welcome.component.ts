import { Component, OnInit } from '@angular/core'
// import { FileDetail } from '../../../old/services/filstore'

import { UserService } from '../../model/user.service'
import { FileDetail } from '@hcs-hybrid-demo/old-pure'

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  welcome = ''
  files: FileDetail[] = [{ fileName: 'file1' }, { fileName: 'file2' }]
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn
      ? 'Welcome, ' + this.userService.user.name
      : 'Please log in.'
  }
}
