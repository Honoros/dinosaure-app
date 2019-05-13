import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router"

import { DinosaureService } from "../../services/dinosaure.service";
import {NgForm} from "@angular/forms";
import {Dinosaure} from "../../models/dinosaure";
import $ from "jquery"

@Component({
  selector: 'app-logregpage',
  templateUrl: './logregpage.component.html',
  styleUrls: ['./logregpage.component.css'],
  providers: [DinosaureService]
})
export class LogregpageComponent implements OnInit {

  dinosaure: Dinosaure;
  router: Router;

  constructor(private dinosaureService: DinosaureService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.getFriends();
  }

  isConnected(key) {
    return sessionStorage.getItem(key);
  }

  connect(form: NgForm) {
    if (form.value.login && form.value.mdp) {
      this.dinosaureService.getIfAccountExists(form.value)
        .subscribe(res => {
          console.log("res ", res)
          if (res) {
            this.dinosaure = res as Dinosaure
            sessionStorage.setItem('connectStatus', this.dinosaure._id);
          }
          else
            alert('Compte inexistant');
        })
    } else {
      alert('Remplissez tous les champs');
    }
  }

  addDinoAccount(form: NgForm) {
    if (form.value.login && form.value.mdp && form.value.age && form.value.famille && form.value.race && form.value.nourriture) {
      this.dinosaureService.postDinosaureAccount(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getFriends();
          alert('Compte créé avec succès. Merci de fermer le formulaire');
        });
    } else {
      alert('Remplissez tous les champs');
    }
  }

  getFriends() {
    let _id = sessionStorage.getItem('connectStatus')
    if (_id) {
      this.dinosaureService.getFriends(_id)
        .subscribe(res => {
          this.dinosaureService.friends = res as Dinosaure[];
          console.log(res);
        });
    } else {
      this.router.navigate([''])
    }
  }

  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.dinosaureService.dinosaure = new Dinosaure();
    }
  }

}
