import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

import Swal from'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  user: User = new User();
  
  constructor(
    private data: DataService,
    private route: Router
  ) { }

  ngOnInit() {
  }
  
  addUser(form : NgForm){
    this.data.addUser(form.value);
    this.route.navigateByUrl("/contact");
    // Swal.fire(
    //   'The Internet?',
    //   'That thing is still around?',
    //   'question'
    // )
    
  }
}
