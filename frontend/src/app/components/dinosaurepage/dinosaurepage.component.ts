import { Component, OnInit } from '@angular/core';

import { DinosaureService } from "../../services/dinosaure.service";
import { Dinosaure } from "../../models/dinosaure";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-dinosaurepage',
  templateUrl: './dinosaurepage.component.html',
  styleUrls: ['./dinosaurepage.component.css'],
  providers: [DinosaureService]
})
export class DinosaurepageComponent implements OnInit {

  dinosaure: Dinosaure;
  router: Router;

  constructor(private dinosaureService: DinosaureService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
    this.dinosaureService.account = null;
    this.getFriends();
  }

  disconnect() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      sessionStorage.removeItem('connectStatus');
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

  addDinoFriend(form?: NgForm) {
    if (!form.value._id) {
      let _id = sessionStorage.getItem('connectStatus');
      this.dinosaureService.postDinosaureFriend(_id, form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getFriends();
          alert('Dinosaure ajouté');
        });
    } else {
      this.dinosaureService.putDinosaureFriend(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getFriends();
          alert('Ami modifié');
        });
    }
  }

  editFriend(dinosaure: Dinosaure) {
    this.dinosaureService.dinosaure = dinosaure;
  }

  deleteFriend(_id:String, form: NgForm) {
    if(confirm('Êtes-vous sûr de vouloir supprimer ce dinosaure ?')) {
      this.dinosaureService.deleteDinosaure(_id)
        .subscribe(res => {
          this.resetForm(form);
          this.getFriends();
          alert('Ami supprimé');
        });
    }
  }

  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.dinosaureService.dinosaure = new Dinosaure();
    }
  }

  castToDinosaure(value): Dinosaure {
      return value;
  }

  getDinoSession(): Object {
    return sessionStorage.getItem('connectStatus')
  }
}
